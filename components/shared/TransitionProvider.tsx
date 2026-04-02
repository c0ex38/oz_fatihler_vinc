"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import Loading from "@/app/loading";

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // On every pathname change (navigation)
    setIsTransitioning(true);

    // Minimum display time for the brand loading screen (1000ms)
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setDisplayChildren(children);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <>
      {isTransitioning && <Loading />}
      <div className={`transition-opacity duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {displayChildren}
      </div>
    </>
  );
}
