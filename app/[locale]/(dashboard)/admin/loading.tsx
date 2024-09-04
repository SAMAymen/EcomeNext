"use client";

import { useThemeMode } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  const { mode: theme } = useThemeMode();

  // Define colors for dark and light mode
  const baseColor = theme === "dark" ? "#2d2d2d" : "#e0e0e0";
  const headerColor = theme === "dark" ? "#52525B" : "#c0c0c0";
  const highlightColor = theme === "dark" ? "#3d3d3d" : "#c0c0c0";

  // Define common border radius
  const borderRadius = "md";

  return (
    <div className="p-5">
      <section>
        {/* Breadcrumb Skeleton */}
        <div className="my-3">
          <Skeleton
            width={200}
            height={24}
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius={borderRadius}
          />
        </div>

        {/* Header Skeleton */}
        <div className="my-3 flex items-center justify-between">
          <div className="my-3">
            <Skeleton
              width={400}
              height={32}
              baseColor={baseColor}
              highlightColor={highlightColor}
              borderRadius={borderRadius}
            />
            <Skeleton
              width={500}
              height={20}
              className="mt-2"
              baseColor={baseColor}
              highlightColor={highlightColor}
              borderRadius={borderRadius}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 mt-8">
          <Skeleton
            width={500}
            height={45}
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius={borderRadius}
          />
          <Skeleton
            width={200}
            height={45}
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius={borderRadius}
          />
        </div>
      </section>
    </div>
  );
}
