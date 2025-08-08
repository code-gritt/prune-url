import Providers from "@/components/global/providers";
import { ToastProvider } from "@/components/providers/toast-provider";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { Metadata } from "next";

// export const metadata = generateMetadata();

export const metadata: Metadata = {
  title: "PruneURL | Privacy-Focused URL Shortener with AI Features",
  description:
    "PruneURL is a powerful, privacy-first link shortener with branded domains, advanced analytics, and AI-powered safety scanning. Start for free.",
  metadataBase: new URL("https://pruneurl.com"),
  openGraph: {
    title: "PruneURL | Privacy-Focused URL Shortener with AI Features",
    description:
      "Shorten, track, and manage your links securely with PruneURL. Includes branded domains, real-time analytics, and AI safety tools.",
    url: "https://pruneurl.com",
    siteName: "PruneURL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PruneURL | AI-Powered URL Shortener",
    description:
      "Smarter, safer link shortening with AI and full privacy in mind. Get started today — free forever.",
    creator: "@pruneurl",
  },
  keywords: [
    "URL shortener",
    "link shortener",
    "AI URL tool",
    "privacy URL shortener",
    "branded links",
    "link analytics",
    "short links",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
          base.variable,
          heading.variable
        )}
      >
        <Providers>
          <ToastProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
