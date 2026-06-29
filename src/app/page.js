import TopBar from "@/components/layouts/TopBar";
import Navbar from "@/components/layouts/Navbar";
import Footers from "@/components/layouts/Footers";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ExploreServices from "@/components/sections/ExporeServices";
import Ideological from "@/components/sections/Ideological";
import Simple from "@/components/sections/Simple";
import UpcomingEvent from "@/components/sections/UpcomingEvent";
import News from "@/components/sections/News";
import Explore from "@/components/sections/Explore";
import CityHighlights from "@/components/sections/CityHighlights";
import CityCouncil from "@/components/sections/CityCouncil";
import Logo2 from "@/components/sections/Logo2";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <ExploreServices />
      <Ideological />
      <Simple />
      <UpcomingEvent />
      <News />
      <Explore />
      <CityHighlights />
      <CityCouncil />
      <Logo2 />
      <Footers />
      
    </>
  );
}