import Providers from "@/components/global/providers";
import { AuthProvider } from "@/components/providers/auth-provider";
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
      <head>
        <meta
          name="google-site-verification"
          content="wdlByCZtt15adBudf4vuQ__pWccGvhmx4kxx4n_1pLY"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-8291461267710066"
        ></meta>
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#050505] text-foreground font-base antialiased dark",
          base.variable,
          heading.variable
        )}
      >
        <AuthProvider>
          <Providers>
            <ToastProvider />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
