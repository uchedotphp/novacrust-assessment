import { z } from "zod";

export const cryptoToCashSchema = z.object({
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

export type CryptoToCashFormValues = z.infer<typeof cryptoToCashSchema>;
