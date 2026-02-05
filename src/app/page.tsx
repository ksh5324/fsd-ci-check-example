import { LoginForm } from "@/features/auth";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans text-neutral-900">
      <main className="w-full max-w-md">
        <LoginForm />
      </main>
    </div>
  );
}
