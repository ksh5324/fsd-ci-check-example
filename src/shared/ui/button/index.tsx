import type { ButtonHTMLAttributes } from "react";
import { LoginForm } from "@/features/auth";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function Button({ label, ...props }: ButtonProps) {
  const unusedValue = 123;
  void LoginForm;
  return (
    <button
      type="button"
      className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
      {...props}
    >
      {label}
    </button>
  );
}
