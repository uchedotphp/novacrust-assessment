"use client";

import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LiaAngleDownSolid } from "react-icons/lia";
import Image from "next/image";

interface Option {
  label: string;
  icon: string;
}

interface SelectOptionProps {
  label: string;
  options: Option[];
  onSelect?: (label: string) => void;
  value?: string;
}

const OptionItem = ({ option }: { option: Option }) => (
  <div className="flex items-center gap-3">
    <Image src={option.icon} alt={option.label} width={32} height={32} />
    <span className="text-nova-black-500 text-base font-normal font-outfit">
      {option.label}
    </span>
  </div>
);

const SelectOption = ({ label, options, onSelect, value }: SelectOptionProps) => {
  // Find the selected option based on the value prop
  const selectedOption = options.find((opt) => opt.label === value) || null;

  const handleSelect = (option: Option) => {
    onSelect?.(option.label);
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="payable" className="form-label text-nova-green-500! mb-4">
        {label}
      </Label>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer bg-white w-full border border-nova-gray-100 py-5 px-6 rounded-full flex items-center justify-between">
          {selectedOption ? (
            <OptionItem option={selectedOption} />
          ) : (
            <span className="text-nova-green-500 text-base font-normal font-outfit">
              Select an option
            </span>
          )}
          <LiaAngleDownSolid className="text-nova-green-500 size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border border-nova-gray-100 rounded-[20px] py-4 px-3 space-y-2 w-[var(--radix-dropdown-menu-trigger-width)]">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.label}
              onClick={() => handleSelect(option)}
              className="cursor-pointer hover:bg-nova-gray-250 rounded-xl p-3"
            >
              <OptionItem option={option} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectOption;
