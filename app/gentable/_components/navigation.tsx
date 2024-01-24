"use client";

import { useMediaQuery } from "usehooks-ts";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 600) newWidth = 600;
    if (newWidth > 600) newWidth = 600;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "300px";
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "0" : "calc(100%-300px)"
      );
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100%-300px)"
      );

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("left", "0");
      navbarRef.current.style.setProperty("width", "100%");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar ml-2 h-[60%] bg-[#1D1D1D] overflow-y-auto relative flex w-100 flex-col z-[99999] border-r-lg rounded-tr-lg rounded-br-lg",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          onClick={collapse}
          className={cn(
            "absolute w-6 h-6 transition rounded-sm opacity-0 text-muted-foreground hover-bg-neutral-300 top-3 right-2 group-hover/sidebar:opacity-100",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="w-6 h-6 " />
        </div>
        <div className="p-4">{!isResetting && <p>Action Items</p>}</div>
        <div className="p-4 mt-4">
          <h2>Gens</h2>
          {!isResetting && (
            <ul className="mt-2">
              <li>Do this problem</li>
              <li>Then try this</li>
              <li>Watch out for this one!</li>
              <li>Watch out for this one!</li>
              <li>Watch out for this one!</li>
              <li>Watch out for this one!</li>
              <li>Watch out for this one!</li>
              <li>Watch out for this one!</li>
            </ul>
          )}
        </div>

        {/* <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="absolute top-0 right-0 w-1 h-full transition opacity-0 group-hover/sidebar:opacity-100 cursor-ew-resize bg-primary/10"
        /> */}
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-20 z-[99999] left-60 w-[calc(100%-300px)]",
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
