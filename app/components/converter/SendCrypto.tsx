"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoInformationCircleOutline, IoCheckmark } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { toast } from "sonner";

interface SendCryptoProps {
  onBack: () => void;
  onConfirm: () => void;
  crypto: string;
  amount: string;
  wallet: string;
}

const SendCrypto = ({
  onBack,
  onConfirm,
  crypto,
  amount,
  wallet,
}: SendCryptoProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const walletAddress = "4LiV4YjbxsL6739MKghUd";

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

  const getNetworkWarning = () => {
    if (crypto.includes("USDT")) {
      const network = crypto.split("-")[1];
      return `Only send {USDT} to this address. Ensure the sender is on the {${network}} network otherwise you might lose your deposit`;
    }
    return `Only send {${crypto}} to this address. Ensure the sender is on the {ERC20} network otherwise you might lose your deposit`;
  };

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} type="button">
          <GoArrowLeft className="size-6 text-black" />
        </button>
        <h2 className="text-xl font-semibold text-nova-green-500 mx-auto">
          Send {crypto} to the address below
        </h2>
      </div>

      <div className="flex items-center justify-center mb-16">
        <div className="bg-nova-green-50 rounded-full px-4 py-2.5 border border-nova-green-100 flex items-center gap-2">
          <span className="text-nova-green-500 font-medium text-base">
            {walletAddress}
          </span>
          <Button
            variant="ghost"
            onClick={() => copyToClipboard(walletAddress, "Address")}
            className="text-nova-green-500 p-0! h-fit!"
          >
            {copiedItem === "Address" ? (
              <IoCheckmark className="size-5" />
            ) : (
              <LuCopy className="size-5" />
            )}
          </Button>
        </div>
      </div>

      <div className="bg-nova-gray-200 rounded-[20px] py-4 px-6 space-y-6 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-nova-gray-500 text-sm">Amount to send</span>
          <div className="flex items-center gap-3">
            <span className="text-nova-green-500 font-normal text-base">
              {amount} {crypto}
            </span>
            <button
              onClick={() => copyToClipboard(`${amount} ${crypto}`, "Amount")}
              className="text-nova-green-500"
            >
              {copiedItem === "Amount" ? (
                <IoCheckmark className="size-5" />
              ) : (
                <LuCopy className="size-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-nova-gray-500 text-sm">Network</span>
          <span className="text-nova-green-500 font-normal text-base">
            {crypto}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-nova-gray-500 text-sm">Wallet</span>
          <span className="text-nova-green-500 font-normal text-base">
            {wallet}
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <IoInformationCircleOutline className="size-5 text-nova-green-500 shrink-0 mt-0.5" />
        <p className="text-sm text-nova-gray-500">{getNetworkWarning()}</p>
      </div>

      <Button onClick={onConfirm} className="w-full mt-[131px]">
        I have sent it
      </Button>
    </div>
  );
};

export default SendCrypto;
