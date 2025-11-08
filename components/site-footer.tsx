import Link from "next/link";
import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
  CONTACT_PATH,
  LOCATIONS_PATH,
  SERVICES_PATH,
  BLOG_PATH,
  TOOLS_PATH,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
} from "@/lib/constants";
import { getAllServices } from "@/lib/data/services";
import { getAllLocations } from "@/lib/data/locations";

const allServices = getAllServices();
const allLocations = getAllLocations();

const toolLinks = [
  { href: `${TOOLS_PATH}/boot-calculator`, label: "Boot Calculator" },
  { href: `${TOOLS_PATH}/exchange-cost-estimator`, label: "Exchange Cost Estimator" },
  { href: `${TOOLS_PATH}/identification-rules-checker`, label: "Identification Rules Checker" },
];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`)}&output=embed`;

export function SiteFooter() {
  return (
    <footer className="border-t border-outline/15 bg-secondary text-secondary-fg">
      <div className="container grid gap-12 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.22em] text-primary">
            1031 Exchange of Dallas
          </p>
          <h2 className="text-2xl font-semibold text-white">
            {COMPANY_NAME}
          </h2>
          <p className="max-w-lg text-sm text-secondary-fg/80">
            1031 Exchange of Dallas guides investors through compliant replacement
            property identification across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
            Our team aligns advisors, lenders, and qualified intermediaries so
            every deadline stays in control.
          </p>
          <div className="space-y-2 text-sm text-secondary-fg/90">
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a
                href={`tel:${COMPANY_PHONE.replace(/\D/g, "")}`}
                className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {COMPANY_PHONE}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {COMPANY_EMAIL}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Hours:</span> 24 by 7
              client coverage
            </p>
            <p>
              Serving investors across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20">
            <iframe
              src={mapSrc}
              title={`Map of ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="space-y-6">
          <SectionHeading>Navigation</SectionHeading>
          <nav className="grid gap-2 text-sm text-secondary-fg/85">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href={SERVICES_PATH}>Services</FooterLink>
            <FooterLink href={LOCATIONS_PATH}>Locations</FooterLink>
            <FooterLink href={BLOG_PATH}>Blog</FooterLink>
            <FooterLink href={CONTACT_PATH}>Contact</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
          </nav>
          <SectionHeading>All Services</SectionHeading>
          <ul className="grid gap-2 text-sm text-secondary-fg/85">
            {allServices.map((service) => (
              <li key={service.slug}>
                <FooterLink href={`${SERVICES_PATH}/${service.slug}`}>
                  {service.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <SectionHeading>Tools</SectionHeading>
          <ul className="grid gap-2 text-sm text-secondary-fg/85">
            {toolLinks.map((tool) => (
              <li key={tool.href}>
                <FooterLink href={tool.href}>{tool.label}</FooterLink>
              </li>
            ))}
            <li>
              <FooterLink href={TOOLS_PATH}>View all tools</FooterLink>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <SectionHeading>All Locations</SectionHeading>
          <ul className="grid gap-2 text-sm text-secondary-fg/85">
            {allLocations.map((location) => (
              <li key={location.slug}>
                <FooterLink href={`${LOCATIONS_PATH}/${location.slug}`}>
                  {location.name}
                </FooterLink>
              </li>
            ))}
          </ul>
          <SectionHeading>Disclosures</SectionHeading>
          <ul className="space-y-2 text-xs text-secondary-fg/70">
            <li>
              This site helps investors identify potential replacement properties
              for Section 1031 exchanges.
            </li>
            <li>
              This site is not a Qualified Intermediary, law firm, broker, or CPA.
            </li>
            <li>
              Users should consult a Qualified Intermediary and tax advisor before
              acting.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-secondary/90">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs text-secondary-fg/70 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Compliant exchange support across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.</p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
    </Link>
  );
}

