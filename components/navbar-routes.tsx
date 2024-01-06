"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/chapter");

  

  return (
    <div className="ml-auto flex gap-x-2">
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
