import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function Button({ label, ...props }: ButtonProps) {
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
