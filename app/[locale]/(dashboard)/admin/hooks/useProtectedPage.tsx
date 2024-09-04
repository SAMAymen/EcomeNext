// hooks/useProtectedPage.js
import { getServerSession } from "next-auth";
import db from "@/prisma/client";
import { redirect } from "next/navigation";

export const fetchProtectedPageData = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
  });

  if (!user) {
    redirect("/");
  }
};
