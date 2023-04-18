import Link from "next/link";

export default function Button({ url, title }: { url: string; title: string }) {
  return (
    <Link
      href={url}
      className="text-base text-white font-md bg-transparent hover:bg-primary hover:opacity-30 w-[120px] border border-primary p-2 mt-8 text-center"
    >
      {title}
    </Link>
  );
}
