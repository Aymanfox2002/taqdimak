"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "@/lib/i18n";

type FloatingAlertProps = {
  open: boolean;
  type: "success" | "error";
  title: string;
  description: string;
  onClose?: () => void;
};

export function FloatingAlert({
  open,
  type,
  title,
  description,
  onClose,
}: FloatingAlertProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-4 ${
            i18n.language === "en" ? "right-4" : "left-4"
          } z-50 w-[320px]`}
        >
          <Alert
            className={`shadow-lg ${
              type === "success"
                ? "border-green-500 text-green-700"
                : "border-red-500 text-red-700"
            }`}
          >
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
