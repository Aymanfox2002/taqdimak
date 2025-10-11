"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";
import Buttons from "./Buttons";
import { toast } from "sonner";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks";
import { useTranslation } from "react-i18next";
import { FloatingAlert } from "./FloatingAlert";

const ContactForm = () => {
  const { t } = useTranslation();
  const [alert, setAlert] = useState<{
    open: boolean;
    type: "success" | "error";
    title: string;
    description: string;
  }>({ open: false, type: "success", title: "", description: "" });

  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: t("contact.errors.validation.username.min") })
      .max(50, { message: t("contact.errors.validation.username.max") }),
    email: z.email({ message: t("contact.errors.validation.email.invalid") }),
    message: z
      .string()
      .min(5, { message: t("contact.errors.validation.message.min") })
      .max(1000, {
        message: t("contact.errors.validation.message.max"),
      }),
  });
  const socialLinks = [
    {
      name: "Facebook",
      href: "/",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      href: "/",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      href: "/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      href: "/",
      icon: <FaLinkedinIn />,
    },
  ];

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
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");

      toast(t("contact.errors.request.success.title"), {
        description: t("contact.errors.request.success.description"),
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
        className: "bg-green-100",
      });
      form.reset();
    } catch (error) {
      toast(t("contact.errors.request.fail.title"), {
        description: t("contact.errors.request.fail.description"),
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
        className: "bg-red-900",
      });
    }
  };
  return (
    <div className="max-w-[752px] bg-[var(--teal-300)] p-[73px] rounded-[25px] shadow-2xl relative">
      <h2 className="text-[2.6rem] text-[var(--heading-black)] mb-18">
        {t("contact.title")}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handelSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-[24px] justify-between mb-12">
            <div className="flex-1">
              <ContactInput
                name={"username"}
                label={t("contact.name.label")}
                placeholder={t("contact.name.placeholder")}
              />
            </div>
            <div className="flex-1">
              <ContactInput
                name={"email"}
                label={t("contact.email.label")}
                placeholder={t("contact.email.placeholder")}
              />
            </div>
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
      <FloatingAlert
        open={alert.open}
        type={alert.type}
        title={alert.title}
        description={alert.description}
      />
    </div>
  );
};

export default ContactForm;
