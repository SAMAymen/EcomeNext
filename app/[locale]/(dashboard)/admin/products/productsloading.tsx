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

        {/* Table Skeleton */}
        <div className="overflow-x-auto">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            {/* Table Header Skeleton */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 dark:bg-gray-700">
              <div className="flex items-center p-4">
                <Skeleton
                  width={24}
                  height={24}
                  borderRadius="full"
                  baseColor={headerColor}
                  highlightColor={highlightColor}
                />
              </div>
              <div className="flex-1 p-4">
                <Skeleton
                  width={200}
                  height={24}
                  borderRadius={borderRadius}
                  baseColor={headerColor}
                  highlightColor={highlightColor}
                />
              </div>
              <div className="flex-1 p-4">
                <Skeleton
                  width={200}
                  height={24}
                  borderRadius={borderRadius}
                  baseColor={headerColor}
                  highlightColor={highlightColor}
                />
              </div>
              <div className="flex-1 p-4">
                <Skeleton
                  width={200}
                  height={24}
                  borderRadius={borderRadius}
                  baseColor={headerColor}
                  highlightColor={highlightColor}
                />
              </div>
              <div className="flex-1 p-4">
                <Skeleton
                  width={200}
                  height={24}
                  borderRadius={borderRadius}
                  baseColor={headerColor}
                  highlightColor={highlightColor}
                />
              </div>
            </div>

            {/* Table Rows Skeleton */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700"
                >
                  <div className="w-6">
                    <Skeleton
                      width={24}
                      height={24}
                      borderRadius="full"
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <Skeleton
                      width="100%"
                      height={20}
                      borderRadius={borderRadius}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <Skeleton
                      width="100%"
                      height={20}
                      borderRadius={borderRadius}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Table Footer Skeleton */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Skeleton
                width={100}
                height={20}
                borderRadius={borderRadius}
                baseColor={baseColor}
                highlightColor={highlightColor}
              />
            </div>
            <div className="flex items-center">
              <Skeleton
                width={150}
                height={20}
                borderRadius={borderRadius}
                baseColor={baseColor}
                highlightColor={highlightColor}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
