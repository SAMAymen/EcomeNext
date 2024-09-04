"use client";

import React from "react"; // Add this import
import { Dropdown, DropdownItem, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { HiChevronDown } from "react-icons/hi";
import { FeaturesIcons } from "./FeaturesIcons";

interface IconSelectorProps {
  defaultIcon: string;
  register: any;
  setSelectedIcon: (icon: string) => void;
}

const IconSelector: React.FC<IconSelectorProps> = ({
  defaultIcon,
  register,
  setSelectedIcon,
}) => {
  const [selectedIcon, setSelectedIconState] = useState<string>(defaultIcon);
  useEffect(() => {
    register("icon");
    setSelectedIcon(selectedIcon);
  }, [register, selectedIcon, setSelectedIcon]);

  const handleIconSelection = (icon: string) => {
    setSelectedIconState(icon);
    setSelectedIcon(icon);
  };

  return (
    <div className="w-full">
      <Label htmlFor="icons" value="Icons" className="mb-2 block" />
      <Dropdown
        label=""
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="block cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <span className="flex items-center justify-between">
              <span>{selectedIcon || "Choose Icon"}</span>
              <HiChevronDown className="ml-2 h-5 w-5" />
            </span>
          </span>
        )}
      >
        <div className="max-h-60 overflow-y-auto">
          {FeaturesIcons.map(({ icon, component }) => (
            <DropdownItem
              key={icon}
              onClick={() => handleIconSelection(icon)}
              className="flex items-center gap-2"
            >
              {component}
              <span>{icon}</span>
            </DropdownItem>
          ))}
        </div>
      </Dropdown>
      <TextInput
        type="hidden"
        defaultValue={selectedIcon}
        {...register("icon")}
      />
    </div>
  );
};

export default IconSelector;
