import Button from "../atoms/Button";

export default function Description() {
  return (
    <div className="flex flex-col">
      <span className="text-white font-semibold text-3xl">
        Kushtrim is a
        <span className="text-primary font-semibold text-3xl ml-4">
          front-end developer
        </span>
      </span>
      <p className="text-base text-[#abb2bf] leading-6 mt-8 max-w-[460px]">
        He crafts responsive websites where technologies meet creativity
      </p>
      <Button url="#contact-me" title="Contact ME" />
    </div>
  );
}
