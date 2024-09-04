"use client";

import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardNavbar } from "./navbar";
import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { DashboardSidebar } from "./sidebar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  return <SidebarContent>{children}</SidebarContent>;
};

// New component to handle context
const SidebarContent: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext(); // Call the hook directly in the component
  const [collapsedState, setCollapsedState] = useState<boolean | null>(null);

  // Update the state based on the context value
  useEffect(() => {
    setCollapsedState(isCollapsed);
  }, [isCollapsed]); // Runs whenever isCollapsed changes

  // Fallback for when collapsedState is null (e.g., during the initial render)
  if (collapsedState === null) {
    return null; // Or a loading spinner, skeleton, etc.
  }

  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar isCollapsed={isCollapsed} />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64"
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
