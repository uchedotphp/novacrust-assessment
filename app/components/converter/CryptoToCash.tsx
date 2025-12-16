"use client";

import SetAmount from "./SetAmount";
import SelectOption from "./SelectOption";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const walletOptions = [
  { label: "Metamask", icon: "/metamask.svg" },
  { label: "Rainbow", icon: "/rainbow.svg" },
  { label: "WalletConnect", icon: "/walletconnect.svg" },
  {
    label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    icon: "/wallet.svg",
  },
];

const formSchema = z.object({
  payAmount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Amount must be greater than 0",
    }),
  receiveAmount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Amount must be greater than 0",
    }),
  payFrom: z.string().min(1, "Please select a wallet to pay from"),
  payTo: z.string().min(1, "Please select a wallet to pay to"),
});

const CryptoToCash = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payAmount: "1.00",
      receiveAmount: "1.00",
      payFrom: "",
      payTo: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    // Handle form submission
  };

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
