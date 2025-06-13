import { auth } from "@/lib/auth";
import HomeView from "@/modules/home/ui/views/home-view";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  return <HomeView />;
};

export default Home;
