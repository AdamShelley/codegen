"use client";

import { useMediaQuery } from "usehooks-ts";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Item from "./item";

const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const documents = useQuery(api.documents.get);

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "400px";
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "0" : "calc(100%-400px)"
      );
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100%-400px)"
      );

      setTimeout(() => setIsResetting(false), 200);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("left", "0");
      navbarRef.current.style.setProperty("width", "100%");

      setTimeout(() => setIsResetting(false), 200);
    }
  };

  return (
    <>
      {isCollapsed ? null : (
        <div className="fixed inset-0  z-40 backdrop-blur-[2px]" />
      )}
      <aside
        ref={sidebarRef}
        className={cn(
          "fixed top-20 left-0 mt-5 ml-2 h-full z-50 bg-[#1D1D1D] overflow-y-auto transition-all ease-in-out duration-300 rounded-sm rounded-sm",
          isCollapsed ? "w-0 h-[60vh]" : "w-full h-[60vh]"
        )}
      >
        <div
          role="button"
          onClick={collapse}
          className={cn(
            "absolute w-6 h-6 transition rounded-lg text-muted-foreground hover-bg-neutral-300 top-5 right-5 group-hover/sidebar:opacity-100",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="w-6 h-6 " />
        </div>
        <div className="p-4">{!isResetting && <p>Action Items</p>}</div>
        <div className="p-4 mt-4">
          <h2>Gens</h2>
          {!isResetting && (
            <ol className="ml-5 mt-2 list-decimal space-y-2">
              {documents?.map((document) => (
                <li key={document._id} className="text-md">
                  <Item label={document.title} onClick={() => {}} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-20 z-[99999] w-[calc(100%-500px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-full left-0"
        )}
      >
        <nav className="w-full px-3 py-2 bg-transparent">
          {isCollapsed && (
            <MenuIcon className="w-6 h-6" role="button" onClick={resetWidth} />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
