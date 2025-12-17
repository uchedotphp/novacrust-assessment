"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./Converter.module.css";
import Image from "next/image";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";

type CryptoOption = { value: string; label: string; icon: string };
type CurrencyOption = { value: string; label: string; flag: string };

const cryptoOptions: CryptoOption[] = [
  { value: "ETH", label: "ETH", icon: "/eth.svg" },
  { value: "USDT-CELO", label: "USDT - CELO", icon: "/usdt-celo.svg" },
  { value: "USDT-TON", label: "USDT - TON", icon: "/usdt-ton.svg" },
  { value: "USDT-BNB", label: "USDT - BNB", icon: "/usdt-bnb.svg" },
];

const currencyOptions: CurrencyOption[] = [
  { value: "NGN", label: "NGN", flag: "🇳🇬" },
];

interface SetAmountProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  name: string;
  type?: "crypto" | "currency";
  selectedOption?: string;
  onOptionChange?: (option: string) => void;
}

const SetAmount = ({
  label,
  value = "1.00",
  onChange,
  name,
  type = "crypto",
  selectedOption,
  onOptionChange,
}: SetAmountProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const isCrypto = type === "crypto";
  const currentCrypto = cryptoOptions.find((opt) => opt.value === selectedOption) || cryptoOptions[0];
  const currentCurrency = currencyOptions.find((opt) => opt.value === selectedOption) || currencyOptions[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (value && value.trim() !== "") {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        onChange(numValue.toFixed(2));
      }
    }
  };

  const handleSelect = (optionValue: string) => {
    onOptionChange?.(optionValue);
    setSearchQuery("");
    setOpen(false);
  };

  const filteredCryptoOptions = cryptoOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.novaInputGroup}>
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <InputGroup className={styles.inputGroup}>
        <InputGroupInput
          id={name}
          name={name}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.inputGroupInput}
        />
        <InputGroupAddon align="inline-end" className="px-0">
          <div className="rounded-full p-0">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger
                className="bg-nova-gray-300 border-nova-gray-100 py-2 px-3! rounded-full flex gap-1 items-center justify-center"
                disabled={!isCrypto}
              >
                {isCrypto ? (
                  <Image
                    src={currentCrypto.icon}
                    alt={currentCrypto.label}
                    width={20}
                    height={20}
                  />
                ) : (
                  <span className="text-lg">{currentCurrency.flag}</span>
                )}
                <span className="text-nova-green-500 text-sm leading-5 font-medium uppercase">
                  {isCrypto ? currentCrypto.value : currentCurrency.value}
                </span>
                <LiaAngleDownSolid className="text-nova-green-500 size-2.5" />
              </DropdownMenuTrigger>
              {isCrypto && (
                <DropdownMenuContent side="bottom" align="end" className="shadow-none bg-white border border-nova-gray-100 rounded-[20px] py-4 px-3 space-y-2 min-w-[264px]">
                  <div className="px-2 pb-2">
                    <div className="relative">
                      <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-nova-gray-50 size-5" />
                      <Input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="pl-10 py-3 h-fit border bg-white text-sm text-nova-gray-50 border-nova-gray-100 rounded-full"
                      />
                    </div>
                  </div>
                  {filteredCryptoOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className="cursor-pointer hover:bg-nova-gray-250 rounded-xl p-3 flex items-center gap-2"
                    >
                      <Image
                        src={option.icon}
                        alt={option.label}
                        width={32}
                        height={32}
                      />
                      <span className="text-nova-green-500 text-sm font-medium">
                        {option.label}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SetAmount;
