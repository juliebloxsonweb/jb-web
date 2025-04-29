"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "./Nav/MenuContext";
import { MobileNavMenu } from "./Nav/MobileMenu";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
];

const navItemRight: NavItem[] = [
  { label: "ETCR", path: "/etcr" },
  { label: "Students", path: "/students" },
  { label: "Teaching", path: "/teaching" },
];

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-20 z-[99] bg-transparent backdrop-blur-md">
        <div className="container flex items-center justify-between h-full px-4">
          {/* 3 navlinks - home, research etcr */}
          <div className="hidden lg:flex items-center gap-6 ">
            {navItems.map((item, index) => (
              <div className="" key={index}>
                <Link
                  href={item.path}
                  className={`text-black flex items-center space-x-2 transition-colors
                    ${isActive(item.path) && "font-bold border border-black bg-gray px-3 py-1 rounded-full"}  
                    `}
                >
                  {isActive(item.path) && (
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                  )}

                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="px-3 py-1 rounded-full">
            <span className="font-extrabold text-2xl">Dr. Julie Bloxson</span>
          </Link>

          {/* 3 links at the right  */}
          <div className="hidden lg:flex items-center gap-6">
            {navItemRight.map((item, index) => (
              <div className="" key={index}>
                <Link
                  href={item.path}
                  className={`text-black flex items-center space-x-2  transition-colors
                    ${isActive(item.path) && "font-bold border border-black bg-gray px-3 py-1 rounded-full"}  
                    `}
                >
                  {isActive(item.path) && (
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                  )}

                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>

          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-black" />
            ) : (
              <Menu className="w-8 h-8 text-black" />
            )}
          </button>
        </div>
        <hr className="h-[1px] border-white/30" />
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
