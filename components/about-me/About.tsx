import Headers from "../atoms/Headers";
import AboutMe from "./AboutMe";
import ImageAbout from "./ImageAbout";

export default function About() {
  return (
    <>
      <div className="mt-24 flex justify-between items-center w-full">
        <Headers name="about-me" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AboutMe />
        <ImageAbout />
      </div>
    </>
  );
}
