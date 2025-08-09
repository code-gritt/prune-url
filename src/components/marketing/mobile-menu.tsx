import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import {
  MenuIcon,
  BarChart3Icon,
  LayoutDashboard,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const MobileMenu = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent side="right" className="p-6">
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 mt-8">
          {/* Main Navigation Links */}
          {NAV_LINKS.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.link}
                className="text-lg font-medium hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}

          {/* Extra Links */}
          <SheetClose asChild>
            <Link
              href="/stats"
              className="flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors"
            >
              <BarChart3Icon className="size-4" /> Stats
            </Link>
          </SheetClose>

          {/* Auth Links */}
          {isAuthenticated ? (
            <>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors"
                >
                  <LayoutDashboard className="size-4" /> Dashboard
                </Link>
              </SheetClose>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => signOut()}
                className="justify-start flex gap-2"
              >
                <LogOut className="size-4" /> Logout
              </Button>
            </>
          ) : (
            <>
              <SheetClose asChild>
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors"
                >
                  <LogIn className="size-4" /> Login
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/register"
                  className="flex items-center gap-2 text-lg font-medium hover:text-foreground transition-colors"
                >
                  <UserPlus className="size-4" /> Register
                </Link>
              </SheetClose>
            </>
          )}

          {/* Contact Button */}
          <SheetClose asChild>
            <Link href="/contact" className="w-full mt-4">
              <Button size="lg" variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
