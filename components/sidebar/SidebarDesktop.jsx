"use client";
import SidebarContent from "./SidebarContent";

export default function SidebarDesktop() {
  return (
    <header className="hidden md:block md:w-[20%] bg-black text-white min-h-screen sticky top-0">
      <SidebarContent />
    </header>
  );
}
