"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SetAmount from "../SetAmount";
import SelectOption from "../SelectOption";
import BankDetails from "../BankDetails";
import ContactForm from "../ContactForm";
import SendCrypto from "../SendCrypto";
import TransactionSuccess from "../TransactionSuccess";
import { cryptoToCashSchema, type CryptoToCashFormValues } from "./schema";

const walletOptions = [
  { label: "Metamask", icon: "/metamask.svg" },
  { label: "Rainbow", icon: "/rainbow.svg" },
  { label: "WalletConnect", icon: "/walletconnect.svg" },
  { label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)", icon: "/wallet.svg" },
];

type Step = "form" | "recipient" | "contact" | "send" | "processing";

interface CryptoToCashProps {
  onTabsVisibilityChange: (visible: boolean) => void;
}

const CryptoToCash = ({ onTabsVisibilityChange }: CryptoToCashProps) => {
  const [currentStep, setCurrentStep] = useState<Step>("form");
  const [selectedCrypto, setSelectedCrypto] = useState("ETH");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const form = useForm<CryptoToCashFormValues>({
    resolver: zodResolver(cryptoToCashSchema),
    defaultValues: {
      payAmount: "1.00",
      receiveAmount: "1.00",
      payFrom: "",
      payTo: "",
    },
  });

  useEffect(() => {
    onTabsVisibilityChange(currentStep === "form");
  }, [currentStep, onTabsVisibilityChange]);

  const onSubmit = (values: CryptoToCashFormValues) => {
    console.log("Form submitted:", values);
    setCurrentStep("recipient");
  };

  const handleBack = () => {
    if (currentStep === "send") {
      setCurrentStep("contact");
    } else if (currentStep === "contact") {
      setCurrentStep("recipient");
    } else {
      setCurrentStep("form");
    }
  };

  const handleRecipientNext = () => {
    setCurrentStep("contact");
  };

  const handleContactNext = () => {
    setCurrentStep("send");
  };

  const handleSendConfirm = () => {
    setCurrentStep("processing");
  };

  const handleGoHome = () => {
    form.reset();
    setCurrentStep("form");
  };

  if (currentStep === "recipient") {
    return <BankDetails onBack={handleBack} onNext={handleRecipientNext} />;
  }

  if (currentStep === "contact") {
    return <ContactForm onBack={handleBack} onNext={handleContactNext} />;
  }

  if (currentStep === "send") {
    const formValues = form.getValues();
    return (
      <SendCrypto
        onBack={handleBack}
        onConfirm={handleSendConfirm}
        crypto={selectedCrypto}
        amount={formValues.payAmount}
        wallet={formValues.payFrom}
      />
    );
  }

  if (currentStep === "processing") {
    return <TransactionSuccess onGoHome={handleGoHome} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="payAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SetAmount
                  label="You pay"
                  name="payAmount"
                  value={field.value}
                  onChange={field.onChange}
                  type="crypto"
                  selectedOption={selectedCrypto}
                  onOptionChange={setSelectedCrypto}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="receiveAmount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SetAmount
                  label="You receive"
                  name="receiveAmount"
                  value={field.value}
                  onChange={field.onChange}
                  type="currency"
                  selectedOption={selectedCurrency}
                  onOptionChange={setSelectedCurrency}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="payFrom"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectOption
                  label="Pay from"
                  options={walletOptions}
                  onSelect={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="payTo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SelectOption
                  label="Pay to"
                  options={walletOptions}
                  onSelect={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Convert now
        </Button>
      </form>
    </Form>
  );
};

export default CryptoToCash;
