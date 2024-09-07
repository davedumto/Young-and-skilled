import Image from "next/image";
import FAQ from "@/app/components/faq/faq";
import Network from "@/app/components/network";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <h1>yound and skilled</h1>
        <Network />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
