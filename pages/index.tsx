import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import MainNav from "@/components/MainNav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <MainNav />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
