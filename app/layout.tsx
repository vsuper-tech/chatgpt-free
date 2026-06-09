import Script from "next/script";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { ChatShell } from "@/components/chat/shell";
import { ActiveChatProvider } from "@/hooks/use-active-chat";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="lazyOnload"
      />
      <Suspense fallback={<div className="flex h-dvh bg-black" />}>
        <div className="flex h-dvh">
          <ActiveChatProvider>
            <ChatShell />
          </ActiveChatProvider>
          {children}
        </div>
      </Suspense>
      <Toaster position="top-center" />
    </>
  );
}
