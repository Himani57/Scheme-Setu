import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Category from "@/components/Category";
import Whythis from '@/components/Whythis'
import Final from "@/components/Final";
import Footer from "@/components/Footer";

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
