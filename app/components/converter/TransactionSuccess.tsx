"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoCheckmark } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { toast } from "sonner";
import Image from "next/image";

interface ProcessingTransactionProps {
  onGoHome: () => void;
}

const ProcessingTransaction = ({ onGoHome }: ProcessingTransactionProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const transactionId = "NC123456789";

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="flex justify-center mb-[66px]">
        <Image
          src="/blackTrans.svg"
          alt="Transaction Success"
          width={177}
          height={24}
        />
      </div>

      <div className="bg-nova-green-600 rounded-full p-3 mb-8">
        <IoCheckmark className="size-12 text-white" />
      </div>

      <div className="text-center space-y-2 mb-10">
        <h2 className="text-2xl font-semibold text-nova-black-500">
          Your transaction is processing.
        </h2>
        <p className="text-xl text-nova-gray-500">
          The recipient will receive it shortly.
        </p>
      </div>

      <div className="bg-nova-gray-200 rounded-[10px] py-4 px-6 w-full flex items-center justify-between">
        <span className="text-nova-gray-500 text-sm">Transaction ID</span>
        <div className="flex items-center gap-2">
          <span className="text-nova-green-500 font-normal text-base leading-5">
            {transactionId}
          </span>
          <button
            onClick={() => copyToClipboard(transactionId, "Transaction ID")}
            className="text-nova-green-500"
          >
            {copiedItem === "Transaction ID" ? (
              <IoCheckmark className="size-5" />
            ) : (
              <LuCopy className="size-5" />
            )}
          </button>
        </div>
      </div>

      <Button
        onClick={onGoHome}
        variant="link"
        className="text-nova-green-500 text-base font-bold mt-[60px] no-underline!"
      >
        Go back to home
      </Button>
    </div>
  );
};

export default ProcessingTransaction;
