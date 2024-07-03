"use client";

import { navItems } from "@/data";
import Hero2 from "@/components/Hero2";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import RecentProjects2 from "@/components/RecentProjects2";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Experience2 from "@/components/Experience2";
import Footer2 from "@/components/Footer2";
import Footer3 from "@/components/Footer3";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Hero2 />
        <Grid />
        <RecentProjects />
        <RecentProjects2 />
        <Clients />
        <Experience />
        
        <Approach />
        <Footer />
        {/* <Footer2 /> */}
        {/* <Footer3/> */}
      </div>
    </main>
  );
};

export default Home;
