"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import {
  BarChart3Icon,
  LayoutDashboard,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full h-16 transition-all duration-300",
        isScrolled ? "bg-[#050505]/50 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Wrapper className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/icon.svg"
              alt="PruneUrl"
              width={32}
              height={32}
              className="size-6"
            />
            <span className="text-lg lg:text-xl font-medium">PruneUrl</span>
          </Link>
        </motion.div>

        <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-3 text-sm text-muted-foreground font-medium">
          <AnimatePresence>
            {NAV_LINKS.map((link, index) => (
              <Container key={index} animation="fadeDown" delay={0.1 * index}>
                <div className="relative">
                  <Link
                    href={link.link}
                    className="hover:text-foreground transition-all duration-500 px-1.5"
                  >
                    {link.name}
                  </Link>
                </div>
              </Container>
            ))}
          </AnimatePresence>
        </div>

        <Container animation="fadeLeft" delay={0.1}>
          <div className="flex items-center gap-x-4">
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/stats"} className="flex items-center gap-1">
                <BarChart3Icon className="size-4" />
                Stats
              </Link>
            </Button>
            {isAuthenticated ? (
              <>
                <Button variant={"ghost"} size={"sm"} asChild>
                  <Link href={"/dashboard"} className="flex items-center gap-1">
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>
                </Button>

                <Button variant={"ghost"} size={"sm"} asChild>
                  <Link
                    href={"/dashboard/stats"}
                    className="flex items-center gap-1"
                  >
                    <LayoutDashboard className="size-4" />
                    My Stats
                  </Link>
                </Button>

                <Button variant={"ghost"} size={"sm"} onClick={() => signOut()}>
                  <LogOut className="size-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant={"ghost"} size={"sm"} asChild>
                  <Link href={"/login"} className="flex items-center gap-1">
                    <LogIn className="size-4" />
                    Login
                  </Link>
                </Button>

                <Button variant={"ghost"} size={"sm"} asChild>
                  <Link href={"/register"} className="flex items-center gap-1">
                    <UserPlus className="size-4" />
                    Register
                  </Link>
                </Button>
              </>
            )}
            <Link href="/contact" className="hidden lg:block">
              <Button size="sm" variant="outline">
                Contact Sales
              </Button>
            </Link>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </Container>
      </Wrapper>
    </header>
  );
};

export default Navbar;
