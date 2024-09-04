"use client";

import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import { useState, type FC } from "react";
import {
  ArchiveBoxIcon,
  ArrowUturnRightIcon,
  Bars3Icon,
  Bars4Icon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  CogIcon,
  CurrencyDollarIcon,
  EyeIcon,
  HeartIcon,
  InboxArrowDownIcon,
  InboxIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  TicketIcon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import Image from "next/image";

const NotificationBellDropdown: FC = function () {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="sr-only">Notifications</span>
          <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </span>
      }
    >
      <div className="max-w-[24rem]">
        <div className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          Notifications
        </div>
        <div>
          <a
            href="#"
            className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                width={44}
                height={44}
                src="/images/logo.png"
                className="h-11 w-11 rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                <InboxArrowDownIcon />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                New message from&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                : &quot;Hey, what&apos;s up? All set for the presentation?&quot;
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                a few moments ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                alt=""
                width={44}
                height={44}
                src="/images/logo.png"
                className="h-11 w-11 rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                <UserPlusIcon />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Jese Leos
                </span>
                &nbsp;and&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  5 others
                </span>
                &nbsp;started following you.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                10 minutes ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                width={44}
                height={44}
                alt=""
                src="/images/logo.png"
                className="h-11 w-11 rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                <HeartIcon />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Joseph Mcfall
                </span>
                &nbsp;and&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  141 others
                </span>
                &nbsp;love your story. See it and view more stories.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                44 minutes ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                width={44}
                height={44}
                alt=""
                src="/images/logo.png"
                className="h-11 w-11 rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                <ChatBubbleBottomCenterIcon />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>
                &nbsp;mentioned you in a comment:&nbsp;
                <span className="font-medium text-primary-700 dark:text-primary-500">
                  @bonnie.green
                </span>
                &nbsp;what do you say?
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <div className="shrink-0">
              <Image
                width={44}
                height={44}
                alt=""
                src="/images/logo.png"
                className="h-11 w-11 rounded-full"
              />
              <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                <VideoCameraIcon />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Robert Brown
                </span>
                &nbsp;posted a new video: Glassmorphism - learn how to implement
                the new design trend.
              </div>
              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                3 hours ago
              </div>
            </div>
          </a>
        </div>
        <a
          href="#"
          className="block rounded-b-xl bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
        >
          <div className="inline-flex items-center gap-x-2">
            <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>View all</span>
          </div>
        </a>
      </div>
    </Dropdown>
  );
};

const AppDrawerDropdown: FC = function () {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <span className="sr-only">Apps</span>
          <Squares2X2Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </span>
      }
    >
      <div className="block rounded-t-lg border-b bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-700 dark:text-white">
        Apps
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <ShoppingBagIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Sales
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <UsersIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Users
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <InboxIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Inbox
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <UserCircleIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Profile
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <CogIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Settings
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <ArchiveBoxIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Products
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <CurrencyDollarIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Pricing
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <TicketIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Billing
          </div>
        </a>
        <a
          href="#"
          className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <ArrowUturnRightIcon className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Logout
          </div>
        </a>
      </div>
    </Dropdown>
  );
};

const UserDropdown: FC = function () {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span>
          <span className="sr-only">User menu</span>
          <Avatar alt="" rounded size="sm" />
        </span>
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">Neil Sims</span>
        <span className="block truncate text-sm font-medium">
          neil.sims@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export const DashboardNavbar: FC<Record<string, never>> = function () {
  const [, setIsLogout] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLogout(true);
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLogout(false);
    }
  };
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                aria-controls="sidebar"
                aria-expanded
                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                {isSidebarCollapsed || !isSmallScreen() ? (
                  <Bars3Icon className="h-6 w-6" />
                ) : (
                  <XMarkIcon className="h-6 w-6" />
                )}
              </button>
              <Navbar.Brand href="/">
                {/* <Image
                  alt="Next Lite Online"
                  height="24"
                  src="/logo.png"
                  width="24"
                /> */}
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  Next Lite
                </span>
              </Navbar.Brand>
            </div>
            <div className="flex items-center lg:gap-3">
              <div className="flex items-center">
                <NotificationBellDropdown />
                <AppDrawerDropdown />
                <DarkThemeToggle />
              </div>
              <div className="hidden lg:block">
                <UserDropdown />
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
