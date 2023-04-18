import About from "@/components/about-me/About";
import ContactHeader from "@/components/contact/ContactHeader";
import Description from "@/components/intro-section/Description";
import ImageWithDots from "@/components/intro-section/ImageWithDots";
import QuoteText from "@/components/intro-section/QuoteText";
import SocialMedia from "@/components/intro-section/SocialMedia";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills-section/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-screen-lg mx-auto p-4">
      <div className="flex justify-between w-full items-center pt-24">
        <Description />
        <ImageWithDots />
      </div>
      <QuoteText />
      <Projects />
      <Skills />
      <About />
      <ContactHeader />
    </main>
  );
}
