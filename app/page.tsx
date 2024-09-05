import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>yound and skilled</h1>
        <Footer />
      </main>
    </>
  );
}
