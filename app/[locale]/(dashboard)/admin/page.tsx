import { fetchProtectedPageData } from "./hooks/useProtectedPage";
import SalesThisWeek from "./components/SalesThisWeek";
import NewProductsThisWeek from "./components/NewProductsThisWeek";
import VisitorsThisWeek from "./components/VisitorsThisWeek";
import UserSignupsThisWeek from "./components/UserSignupsThisWeek";
import SessionsByCountry from "./components/SessionsByCountry";
import LatestCustomers from "./components/LatestCustomers";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  await fetchProtectedPageData();
  const session = await getServerSession();

  return (
    <div className="px-4 pt-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
          Overview Dashboard
        </h1>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          Welcome
          {session?.user?.username
            ? `, ${session?.user?.username}! `
            : `, ${session?.user?.email}! ` ?? "! "}
          to your overview dashboard. Here you can view your sales, earnings,
          and other important metrics.
        </p>
      </div>

      <SalesThisWeek />
      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <NewProductsThisWeek />
        <VisitorsThisWeek />
        <UserSignupsThisWeek />
      </div>
      <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-3">
        <SessionsByCountry />
        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-1">
          <LatestCustomers />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
