import Headers from "../atoms/Headers";
import ContactBox from "./ContactBox";

export default function ContactHeader() {
  return (
    <>
      <div className="mt-4 md:mt-12 lg:mt-24 flex justify-between items-center w-full">
        <Headers name="contacts" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-base mt-8 text-[#abb2bf]">
          Im interested in freelance opportunities. However, if you have other
          request or question, do not hesitate to contact me
        </p>
        <ContactBox />
      </div>
    </>
  );
}
