"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export function Redirect(): React.JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const protectedRoutes = ["/dashboard", "/history"];

    if (protectedRoutes.includes(pathname) && !token) {
      router.push("/auth/signin");
    } else if (pathname.startsWith("/dashboard/content/") && !token) {
      router.push("/auth/signin");
    } else if (
      token &&
      (pathname === "/auth/signin" ||
        pathname === "/auth/signup" ||
        pathname === "/")
    ) {
      router.push("/dashboard");
    }
  }, [router, pathname]);

  return <></>;
}
