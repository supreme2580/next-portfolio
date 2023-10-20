import Link from "next/link";

export const Footer = ({ views }: any) => {
  return (
    <section className="mt-56 text-sm text-center text-accent tracking-tight">
      <div className="pb-2">
        Inspired by{" "}
        <Link
          target="_blank"
          href="https://leerob.io/"
          className="text-accent font-bold"
        >
          leerob.io
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          className="text-accent font-bold"
          href="https://brittanychiang.com/"
        >
          brittanychiang.com
        </Link>
        . Built with Next.js and Tailwind CSS and deployed in Vercel.
      </div>
      <div>
        Website Visitors:{" "}
        <span className="font-bold text-primary">{views}</span>
      </div>
    </section>
  );
};
