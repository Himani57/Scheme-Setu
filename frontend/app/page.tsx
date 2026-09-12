import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Category from "@/components/Home/Category";
import Whythis from '@/components/Home/Whythis'
import Final from "@/components/Home/Final";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Category />
   <Whythis />
   <Final />
   <Footer />
   </>
  );
}
