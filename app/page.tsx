import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WaitListBadge from "./components/WaitListBadge";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}
