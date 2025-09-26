import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ContactInput = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium text-[var(--heading-black)]">
            {label}
          </FormLabel>
          <FormControl className="bg-white h-[72px] rounded-full px-6">
            <Input className="placeholder:text-[var(--gray)] placeholder:ms-6" placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ContactInput;
