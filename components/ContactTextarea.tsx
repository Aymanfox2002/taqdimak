import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const ContactTextarea = ({
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
          <FormControl className="bg-white h-[72px] rounded-[25px] px-6 py-5">
            <Textarea
              className="placeholder:text-[var(--gray)] placeholder:ms-6 h-36"
              placeholder={placeholder}
              maxLength={1000}
              rows={30}
              style={{ resize: "none", overflow: "hidden" }}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ContactTextarea;
