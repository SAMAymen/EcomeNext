import { type CustomFlowbiteTheme } from "flowbite-react";

export const flowbiteTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "flex flex-col",
    },
    brand: {
      base: "m-6 flex items-center",
    },
    groupLink: {
      base: "flex flex-col flex-wrap text-gray-500 dark:text-white",
      link: {
        base: "mb-4 last:mr-0 md:mr-6",
      },
    },
    icon: {
      base: "text-gray-400 hover:text-gray-900 dark:hover:text-white",
    },
  },
  modal: {
    body: {
      base: "space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8",
    },
  },
  sidebar: {
    root: {
      base: "bg-gray-50",
      inner:
        "overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800",
    },
    collapse: {
      list: "space-y-2 py-2 list-none",
      icon: {
        base: "h-6 w-6 text-gray-500 dark:text-gray-500",
      },
    },
    item: {
      base: "no-underline flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 dark:text-gray-500",
      },
    },
    itemGroup: {
      base: "list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    },
  },
  carousel: {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-800 dark:bg-gray-200/30 dark:group-hover:bg-gray-200/60 dark:group-focus:ring-gray-200/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
  },
  dropdown: {
    floating: {
      base: "z-10 w-fit rounded-xl divide-y divide-gray-100 shadow",
      content: "rounded-xl text-sm text-gray-700 dark:text-gray-200",
      target: "w-fit dark:text-white",
    },
    content: "",
  },
  button: {
    color: {
      info: "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
    },
    inner: {
      base: "flex items-center transition-all duration-200",
    },
    outline: {
      color: {
        gray: "border border-gray-200 dark:border-gray-500",
      },
    },
  },
};
