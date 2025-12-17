"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoArrowLeft } from "react-icons/go";

import { bankDetailsSchema, type BankDetailsFormValues } from "./schemas";

const banks = [
  "Access Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Zenith Bank",
  "Ecobank",
];

interface BankDetailsProps {
  onBack: () => void;
  onNext: () => void;
}

const BankDetails = ({ onBack, onNext }: BankDetailsProps) => {
  const form = useForm<BankDetailsFormValues>({
    resolver: zodResolver(bankDetailsSchema),
    defaultValues: {
      bank: "",
      accountNumber: "",
    },
  });

  const onSubmit = (values: BankDetailsFormValues) => {
    console.log("Bank details submitted:", values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={onBack} type="button">
            <GoArrowLeft className="size-6 text-black" />
          </button>
          <h2 className="text-xl font-semibold text-nova-green-500 mx-auto">
            Recipient details
          </h2>
        </div>

        <FormField
          control={form.control}
          name="bank"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="bank" className="form-label text-nova-green-500!">
                Bank
              </Label>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer bg-white w-full border border-nova-gray-100 py-5 px-6 rounded-full flex items-center justify-between">
                    <span
                      className={`text-base font-normal font-outfit ${
                        field.value
                          ? "text-nova-black-500"
                          : "text-nova-green-500"
                      }`}
                    >
                      {field.value || "Select an option"}
                    </span>
                    <LiaAngleDownSolid className="text-nova-green-500 size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-nova-gray-100 rounded-[20px] py-4 px-3 space-y-2 w-(--radix-dropdown-menu-trigger-width)">
                    {banks.map((bank) => (
                      <DropdownMenuItem
                        key={bank}
                        onClick={() => field.onChange(bank)}
                        className="cursor-pointer hover:bg-nova-gray-250 rounded-xl p-3"
                      >
                        <span className="text-nova-black-500 text-base font-normal font-outfit">
                          {bank}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem>
              <Label
                htmlFor="accountNumber"
                className="form-label text-nova-green-500!"
              >
                Account number
              </Label>
              <FormControl>
                <Input
                  {...field}
                  id="accountNumber"
                  placeholder="Enter your account number"
                  className="w-full border border-nova-gray-100 py-5 px-6 rounded-full"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label
            htmlFor="accountName"
            className="form-label text-nova-green-500! mb-4"
          >
            Account number
          </Label>
          <div className="w-full bg-nova-gray-200 py-5 px-6 rounded-full">
            <span className="text-nova-black-500 text-base font-normal">
              ODUTUGA GBEKE
            </span>
          </div>
        </div>

        <Button type="submit" className="w-full mt-8">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default BankDetails;
