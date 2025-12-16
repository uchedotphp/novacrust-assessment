import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./Converter.module.css";
import Image from "next/image";
import { LiaAngleDownSolid } from "react-icons/lia";

interface SetAmountProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  name: string;
}

const SetAmount = ({
  label,
  value = "1.00",
  onChange,
  name,
}: SetAmountProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow only numbers and decimal point, or empty string
    if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    // Format to 2 decimal places if there's a valid number
    if (value && value.trim() !== "") {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        onChange(numValue.toFixed(2));
      }
    }
  };

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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-nova-gray-300 border-nova-gray-100 py-2 px-3! rounded-full flex gap-1 items-center justify-center">
                <Image src="/eth.svg" alt="eth" width={20} height={20} />
                <span className="text-nova-green-500 text-sm leading-5 font-medium uppercase">
                  eth
                </span>
                <LiaAngleDownSolid className="text-nova-green-500 size-2.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SetAmount;
