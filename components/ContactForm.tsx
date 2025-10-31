"use client";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import Buttons from "./Buttons";
import SocialMediaLinks from "./SocialMediaLinks";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/data/SocialLinks";
import contactSchema from "@/data/contactSchema";
import { contactInput } from "@/data/contactInput";
import { submitContactForm } from "@/lib/submitContactForm";

const ContactForm = () => {
  const { t } = useTranslation();
  const formSchema = useMemo(() => contactSchema(t), [t]);

  type inferedSchema = z.infer<typeof formSchema>;
  const form = useForm<inferedSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const handelSubmit = async (values: inferedSchema) => {
    submitContactForm(values, t, form.reset);
  };

  const inputs = contactInput();
  return (
    <div className="max-w-[752px] bg-[var(--teal-300)] p-[73px] rounded-[25px] shadow-2xl relative">
      <h2 className="text-[2.6rem] text-[var(--heading-black)] mb-18">
        {t("contact.title")}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handelSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-[24px] justify-between mb-12">
            {inputs.map(({ name, label, placeholder }, i) => (
              <div className="flex-1" key={i}>
                <ContactInput
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
          <ContactTextarea
            name={"message"}
            label={t("contact.message.label")}
            placeholder={t("contact.message.placeholder")}
          />

          <div className="flex flex-col md:flex-row gap-7 md:gap-0 justify-between items-center mt-12">
            <Buttons
              type="submit"
              size="lg"
              className="rounded-full w-full md:w-auto"
            >
              {t("contact.send")}
            </Buttons>
            <div className="flex gap-2">
              {socialLinks.map(({ name, href, icon }, i) => (
                <div key={i}>
                  <SocialMediaLinks href={href} icon={icon} label={name} />
                </div>
              ))}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
