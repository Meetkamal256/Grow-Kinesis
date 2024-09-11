import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import WaitListBadge from "./components/WaitListBadge";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
    </>
  );
}
