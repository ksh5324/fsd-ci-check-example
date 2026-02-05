import { Button } from "@/shared/ui";

export function LoginForm() {
  const count: string = 1;
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-6 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-neutral-900">Sign in</h2>
        <p className="text-sm text-neutral-600">
          Use the demo button below to continue.
        </p>
      </div>
      <Button label="Continue" />
    </div>
  );
}
