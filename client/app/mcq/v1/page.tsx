import HeroSection from "@/app/components/Home/HeroSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="flex justify-center flex-col ">
      <Toaster position="top-center" reverseOrder={false} />
      {/* hero section  */}
      <HeroSection />
    </div>
  );
}
