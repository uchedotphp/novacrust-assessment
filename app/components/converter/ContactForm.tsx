"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
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

import { contactFormSchema, type ContactFormValues } from "./schemas";

const countryCodes = [
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
];

interface ContactFormProps {
  onBack: () => void;
  onNext: () => void;
}

const ContactForm = ({ onBack, onNext }: ContactFormProps) => {
  const [countryCode, setCountryCode] = useState("+234");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Contact form submitted:", values);
    onNext();
  };

  const selectedCountry = countryCodes.find((c) => c.code === countryCode) || countryCodes[0];

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
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label
                htmlFor="email"
                className="form-label text-nova-green-500!"
              >
                Recipient email
              </Label>
              <FormControl>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Enter recipient email"
                  className="w-full border border-nova-gray-100 py-5 px-6 rounded-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <Label
                htmlFor="phoneNumber"
                className="form-label text-nova-green-500!"
              >
                Recipient phone number
              </Label>
              <FormControl>
                <div className="flex gap-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer bg-white border border-nova-gray-100 py-5 px-4 rounded-full flex items-center gap-2">
                      <span className="text-lg">{selectedCountry.flag}</span>
                      <span className="text-base font-normal font-outfit text-nova-black-500">
                        {countryCode}
                      </span>
                      <LiaAngleDownSolid className="text-nova-green-500 size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border border-nova-gray-100 rounded-[20px] py-2 px-2">
                      {countryCodes.map((item) => (
                        <DropdownMenuItem
                          key={item.code}
                          onClick={() => setCountryCode(item.code)}
                          className="cursor-pointer hover:bg-nova-gray-250 rounded-xl p-3 flex items-center gap-2"
                        >
                          <span className="text-lg">{item.flag}</span>
                          <span className="text-nova-black-500 text-base font-normal font-outfit">
                            {item.code} ({item.country})
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Input
                    {...field}
                    id="phoneNumber"
                    type="tel"
                    placeholder="000 - 000 - 00000"
                    className="flex-1 border border-nova-gray-100 py-5 px-6 rounded-full"
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      field.onChange(value);
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-8">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
