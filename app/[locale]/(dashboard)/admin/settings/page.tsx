import React from "react";
import { fetchProtectedPageData } from "../hooks/useProtectedPage";

const page = async () => {
  await fetchProtectedPageData();
  return <div>page</div>;
};

export default page;
