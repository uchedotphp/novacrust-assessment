import { z } from "zod";

export const bankDetailsSchema = z.object({
  bank: z.string().min(1, "Please select a bank"),
  accountNumber: z.string().min(10, "Account number must be at least 10 digits"),
});

export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type BankDetailsFormValues = z.infer<typeof bankDetailsSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
