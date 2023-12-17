import Header from "@/components/Landing/Header";
import { ParallaxText } from "@/components/Landing/Parallax";
import Middle from "@/components/Middle";
import Marquee from "../components/Landing/Marquee";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header/>
      <Marquee/>
      <Middle/>
    </main>
  )
}