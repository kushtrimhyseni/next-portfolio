import Link from "next/link";

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
      <Link
        href="/contact"
        className="text-base text-white font-md bg-transparent hover:bg-primary hover:opacity-30 w-[120px] border border-primary p-2 mt-8 text-center"
      >
        Contect ME
      </Link>
    </div>
  );
}
