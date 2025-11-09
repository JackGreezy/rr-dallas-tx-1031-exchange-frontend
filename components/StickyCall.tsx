import { CONTACT_PATH } from "@/lib/constants";

type StickyCallProps = {
  phone: string;
};

export default function StickyCall({ phone }: StickyCallProps) {
  const telHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-4 right-4 z-[9998] flex flex-col gap-3">
      <a
        href={CONTACT_PATH}
        className="hidden min-w-[200px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg shadow-lg shadow-black/20 transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
      >
        Contact Our Team
      </a>
      <a
        href={telHref}
        className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-outline/40 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/15 transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
      >
        Call {phone}
      </a>
    </div>
  );
}