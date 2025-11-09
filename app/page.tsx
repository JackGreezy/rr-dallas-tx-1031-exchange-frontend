import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  IBM_Plex_Serif,
  Inter,
  Source_Sans_3,
} from "next/font/google";
import { ServiceSearchGrid } from "@/components/services/service-search-grid";
import { LocationSearchGrid } from "@/components/locations/location-search-grid";
import { getAllServices } from "@/lib/data/services";
import { getAllLocations } from "@/lib/data/locations";
import { MotionDiv } from "@/components/MotionDiv";
import ContactFormFields from "@/components/contact/ContactFormFields";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_PHONE_DIGITS, COMPANY_EMAIL, SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";
import { getPropertyTypeImagePath } from "@/lib/utils/images";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-ibm-plex-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

const PHONE_DISPLAY = COMPANY_PHONE;
const PHONE_LINK = `tel:+1${COMPANY_PHONE_DIGITS}`;

const TX_TAX_LINKS = [
  {
    label: "Texas Comptroller Property Tax Resources",
    href: "https://comptroller.texas.gov/taxes/property-tax/",
  },
  {
    label: "Dallas County Tax Office Guidelines",
    href: "https://www.dallascounty.org/departments/tax/property-tax/index.php",
  },
];

const IRS_LINKS = [
  {
    label: "IRS Form 8824 Instructions",
    href: "https://www.irs.gov/forms-pubs/about-form-8824",
  },
  {
    label: "IRS Like-Kind Exchange Overview",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips",
  },
];

const TOP_SERVICES = [
  {
    name: "Delayed 1031 Exchange Coordination",
    description:
      "Structure a compliant delayed exchange with timelines and escrow controls tailored to Texas transactions.",
    slug: "delayed-1031-exchange",
  },
  {
    name: "Reverse Exchange Structuring",
    description:
      "Secure your replacement asset first while we manage exchange accommodation and QI requirements.",
    slug: "reverse-1031-exchange",
  },
  {
    name: "Build-to-Suit Exchange Support",
    description:
      "Coordinate construction or improvement exchanges with disciplined draw schedules and documentation.",
    slug: "build-to-suit-1031-exchange",
  },
  {
    name: "Multi-Property Portfolio Planning",
    description:
      "Align multiple dispositions and acquisitions with Texas market insight and investor objectives.",
    slug: "portfolio-1031-planning",
  },
  {
    name: "Qualified Intermediary Placement",
    description:
      "Access vetted Texas-qualified intermediaries with secure handling of exchange proceeds.",
    slug: "qualified-intermediary-placement",
  },
  {
    name: "Trusted Advisor Coordination",
    description:
      "Coordinate with attorneys, CPAs, and lenders to keep every stakeholder aligned through closing.",
    slug: "advisor-coordination",
  },
];

const PROPERTY_TYPES = [
  {
    name: "Multifamily Communities",
    description:
      "Stabilize and upgrade multifamily portfolios with replacement assets across major Texas metros.",
    slug: "multifamily",
  },
  {
    name: "Industrial and Flex",
    description:
      "Defer gains while moving into logistics, warehouse, and light manufacturing properties.",
    slug: "industrial",
  },
  {
    name: "Office and Medical",
    description:
      "Exchange into professional office, medical office, and specialized clinical facilities.",
    slug: "office-medical",
  },
  {
    name: "Retail and Mixed-Use",
    description:
      "Reposition capital into street retail, neighborhood centers, and mixed-use developments.",
    slug: "retail-mixed-use",
  },
  {
    name: "Land and Development Parcels",
    description:
      "Secure entitled land or infill redevelopment opportunities within IRS timing rules.",
    slug: "land-development",
  },
  {
    name: "Hospitality Assets",
    description:
      "Transition between hotel, extended stay, or resort holdings with precise QI coordination.",
    slug: "hospitality",
  },
];

const TX_CITIES_SLUGS = [
  { name: "Dallas", slug: "dallas-tx" },
  { name: "Fort Worth", slug: "fort-worth-tx" },
  { name: "Plano", slug: "plano-tx" },
  { name: "Frisco", slug: "frisco-tx" },
  { name: "Arlington", slug: "arlington-tx" },
  { name: "Irving", slug: "irving-tx" },
  { name: "Austin", slug: "austin" },
  { name: "Houston", slug: "houston" },
  { name: "San Antonio", slug: "san-antonio" },
];

const FAQ_ITEMS = [
  {
    question: "What are the 45 and 180 day deadlines?",
    answer:
      "You must identify replacement property within 45 calendar days of the sale and complete all closings within 180 calendar days or by the due date of your federal return, whichever comes first.",
  },
  {
    question: "What qualifies as like-kind property?",
    answer:
      "Real property held for investment or productive use in a trade or business qualifies as like-kind to other real property with the same use, regardless of asset class, as long as both properties are within the United States.",
  },
  {
    question: "What is taxable boot?",
    answer:
      "Boot is any non-like-kind value received in the exchange, including cash, debt relief, or personal property. Boot is generally taxable in the year of the exchange.",
  },
  {
    question: "How do state and county taxes apply?",
    answer:
      "A 1031 exchange defers federal and Texas income tax on qualifying real property. County and municipal transfer taxes, filing fees, and documentary stamp taxes still apply where assessed.",
  },
  {
    question: "Can I complete a reverse exchange?",
    answer:
      "Reverse exchanges are permitted when you acquire the replacement property before selling the relinquished property, using an exchange accommodation titleholder and compliant documentation.",
  },
  {
    question: "How is Form 8824 filed?",
    answer:
      "Form 8824 is filed with your federal return for the tax year in which the relinquished property was transferred. It reports timelines, property details, and the calculation of deferred gain.",
  },
];

const trustBadges = [
  { label: "CPA Aligned", icon: "CPA" },
  { label: "Texas Counsel Support", icon: "Attorney" },
  { label: "Qualified Intermediary Network", icon: "QI" },
  { label: "Texas Market Insight", icon: "Texas" },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}#organization`,
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/1031-exchange-dallas-logo.png`,
  image: `${SITE_URL}/1031-exchange-dallas-logo.png`,
  telephone: `+1-${COMPANY_PHONE_DIGITS.slice(0, 3)}-${COMPANY_PHONE_DIGITS.slice(3, 6)}-${COMPANY_PHONE_DIGITS.slice(6)}`,
  email: COMPANY_EMAIL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+1-${COMPANY_PHONE_DIGITS.slice(0, 3)}-${COMPANY_PHONE_DIGITS.slice(3, 6)}-${COMPANY_PHONE_DIGITS.slice(6)}`,
      contactType: "customer service",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "9101 Lyndon B Johnson Fwy",
    addressLocality: PRIMARY_CITY,
    addressRegion: PRIMARY_STATE_ABBR,
    postalCode: "75243",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: "1031 Exchange Services",
  description: "1031 exchange services helping Dallas investors find replacement properties in all 50 states",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const jsonLdBlocks = [
  { id: "organization", data: organizationJsonLd },
  { id: "website", data: websiteJsonLd },
  { id: "faq", data: faqJsonLd },
];

const isStaffedOffice = false;

export const metadata: Metadata = {
  title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
  description:
    "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states. Compliant exchanges, expert coordination, timeline control.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
    description:
      "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states. Compliant exchanges, expert coordination.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Dallas 1031 Exchange Services`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
    description:
      "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states.",
    images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
  },
};

type HomeProps = {
  searchParams?: {
    status?: string;
    message?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const status = searchParams?.status;
  const statusMessage =
    status === "success"
      ? "Thank you. A 1031 exchange specialist will respond shortly."
      : status === "error"
        ? searchParams?.message ??
          "We could not submit your request. Please call us or try again."
        : null;

  return (
    <div
      className={`${sourceSans.className} ${ibmPlexSerif.variable} ${inter.variable} bg-[#FAFAFA] text-[#1E1E1E]`}
    >
      <link rel="canonical" href={SITE_URL} />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-12 sm:px-8 lg:px-12">
        <section
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D9A441]/20 via-[#FAFAFA] to-[#153243]/35 p-10 shadow-[0_32px_80px_rgba(21,50,67,0.15)] sm:p-14"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(21,50,67,0.3),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <svg
              role="presentation"
              aria-hidden="true"
              width="100%"
              height="100%"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0H0V40"
                    fill="none"
                    stroke="#153243"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              <path
                d="M50 520 Q220 360 410 370 T760 270"
                fill="none"
                stroke="#D9A441"
                strokeWidth="1.6"
                strokeOpacity="0.35"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-8 text-left text-[#1E1E1E] lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <MotionDiv className="max-w-2xl space-y-6" delay={0.1}>
              <p
                className={`${inter.className} text-sm uppercase tracking-[0.28em] text-[#153243]`}
              >
                {COMPANY_NAME}
              </p>
              <h1
                id="hero-heading"
                className={`${ibmPlexSerif.className} text-4xl leading-tight text-[#153243] sm:text-5xl`}
              >
                Dallas 1031 Exchange Specialists
              </h1>
              <p className="text-lg leading-relaxed text-[#1E1E1E]/90 sm:text-xl">
                Helping Texas investors defer capital gains tax through
                compliant 1031 exchanges.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_LINK}
                  className={`${inter.className} inline-flex items-center justify-center rounded-full bg-[#D9A441] px-8 py-3 text-base font-medium text-[#1E1E1E] transition-colors hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  className={`${inter.className} inline-flex items-center justify-center rounded-full border border-[#153243] bg-white px-8 py-3 text-base font-medium text-[#153243] transition-colors hover:border-[#B68531] hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
                >
                  Start My Exchange
                </Link>
              </div>
              <p
                className={`${inter.className} text-sm uppercase tracking-[0.24em] text-[#1E1E1E]/75`}
              >
                45 Day identification. 180 Day closing. Stay compliant and on
                schedule.
              </p>
            </MotionDiv>
            <MotionDiv
              className="grid gap-4 rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-sm sm:grid-cols-2"
              delay={0.2}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-xl border border-[#153243]/15 bg-[#FAFAFA]/90 p-3 shadow-[0_10px_24px_rgba(21,50,67,0.08)]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#153243]/40 bg-white text-[#153243]"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      role="img"
                    >
                      <path
                        d="M16 3L4 9.5V22.5L16 29L28 22.5V9.5L16 3Z"
                        stroke="#153243"
                        strokeWidth="1.4"
                        fill="url(#badge-gradient)"
                      />
                      <path
                        d="M10 16L14 20L22 12"
                        stroke="#153243"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="badge-gradient"
                          x1="4"
                          y1="3"
                          x2="28"
                          y2="29"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FAFAFA" />
                          <stop offset="1" stopColor="#D9A441" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className={`${inter.className} text-sm font-medium`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </MotionDiv>
          </div>
          <div className="sr-only">Texas skyline graphic for {COMPANY_NAME} site hero.</div>
        </section>

        <section aria-labelledby="why-heading" className="space-y-8">
          <MotionDiv delay={0.1}>
            <h2
              id="why-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              Why Texas Investors Choose {COMPANY_NAME}.
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Nationwide Property Sourcing",
                  description: "We help Dallas investors find replacement properties in all 50 states.",
                },
                {
                  title: "IRS-Compliant Process",
                  description:
                    "All documentation and deadlines managed.",
                },
                {
                  title: "Qualified Intermediary Network",
                  description:
                    "Secure funds with vetted partners.",
                },
                {
                  title: "Attorney and CPA Coordination",
                  description:
                    "Local professionals available on request.",
                },
                {
                  title: "Timeline Discipline",
                  description:
                    "Structured milestones from sale to close.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-[#153243]/10 bg-white p-6 shadow-[0_20px_60px_rgba(21,50,67,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#D9A441]/40 hover:shadow-[0_28px_70px_rgba(21,50,67,0.12)]"
                >
                  <div className="h-1 w-12 rounded-full bg-[#D9A441] transition-colors group-hover:bg-[#B68531]" />
                  <h3
                    className={`${inter.className} text-lg font-semibold text-[#153243]`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#1E1E1E]/85">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv delay={0.3}>
            <p className="text-sm text-[#1E1E1E]/80">
              A 1031 exchange defers federal and Texas income tax on qualifying real
              property. It does not remove county or state transfer taxes.{" "}
              {TX_TAX_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]"
                >
                  {link.label}
                  {index < TX_TAX_LINKS.length - 1 ? ", " : "."}
                </Link>
              ))}
            </p>
          </MotionDiv>
        </section>

        <section aria-labelledby="process-heading" className="space-y-8">
          <MotionDiv delay={0.1}>
            <h2
              id="process-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              How the 1031 Exchange Process Works.
            </h2>
          </MotionDiv>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Sell the Relinquished Property",
                description:
                  "Proceeds go to a qualified intermediary.",
              },
              {
                title: "Identify Replacements Within 45 Days",
                description:
                  "Submit formal identification list.",
              },
              {
                title: "Close Within 180 Days",
                description:
                  "Acquire your new property under IRS timelines.",
              },
            ].map((step, index) => (
              <MotionDiv
                key={step.title}
                delay={0.2 + index * 0.1}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#153243]/10 bg-white p-6 shadow-[0_18px_48px_rgba(21,50,67,0.08)]"
              >
                <span
                  className={`${inter.className} inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#153243] text-base font-medium text-white`}
                >
                  {index + 1}
                </span>
                <h3
                  className={`${inter.className} text-lg font-semibold text-[#153243]`}
                >
                  {step.title}
                </h3>
                <p className="text-base text-[#1E1E1E]/85">
                  {step.description}
                </p>
              </MotionDiv>
            ))}
          </div>
          <MotionDiv delay={0.4}>
            <div className="rounded-2xl border border-[#153243]/15 bg-[#153243]/5 p-5 text-sm text-[#153243] shadow-[0_12px_40px_rgba(21,50,67,0.12)]">
              <p className={`${inter.className} mb-2 font-medium`}>
                Learn more with IRS Form 8824 and Like-Kind Property guidelines.
              </p>
              <ul className="flex flex-wrap gap-4">
                {IRS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MotionDiv>
          <div className="sr-only">1031 exchange process illustration for Texas investors.</div>
        </section>

        <section aria-labelledby="services-heading" className="space-y-8">
          <MotionDiv delay={0.1}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="services-heading"
                className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
              >
                Exchange Services for Texas Investors.
              </h2>
              <Link
                href="/services"
                className={`${inter.className} text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
              >
                View all {getAllServices().length} services
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <ServiceSearchGrid services={getAllServices().slice(0, 6)} compact />
          </MotionDiv>
        </section>

        <section aria-labelledby="property-heading" className="space-y-8">
          <MotionDiv delay={0.1}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="property-heading"
                className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
              >
                Qualifying Property Types.
              </h2>
              <Link
                href="/property-types"
                className={`${inter.className} text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
              >
                Explore property types
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="grid gap-6 md:grid-cols-2">
              {PROPERTY_TYPES.map((property) => {
                // Map home page slugs to actual property type slugs
                const slugMap: Record<string, string> = {
                  'office-medical': 'office',
                  'retail-mixed-use': 'retail',
                  'land-development': 'land',
                };
                const actualSlug = slugMap[property.slug] || property.slug;
                const imagePath = getPropertyTypeImagePath(actualSlug);
                
                return (
                  <article
                    key={property.slug}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-[#153243]/10 bg-white overflow-hidden shadow-[0_16px_48px_rgba(21,50,67,0.08)]"
                  >
                    {imagePath && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={imagePath}
                          alt={`${property.name} properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <h3
                        className={`${inter.className} text-lg font-semibold text-[#153243]`}
                      >
                        {property.name}
                      </h3>
                      <p className="text-base text-[#1E1E1E]/85">
                        {property.description}
                      </p>
                      <Link
                        href={`/property-types/${property.slug}`}
                        className={`${inter.className} text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
                        aria-label={`Learn about ${property.name} exchanges`}
                      >
                        Learn more
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </MotionDiv>
        </section>

        <section aria-labelledby="coverage-heading" className="space-y-6">
          <MotionDiv delay={0.1}>
            <h2
              id="coverage-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              Serving Dallas Investors Nationwide.
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <p className="text-base text-[#1E1E1E]/85">
              We help Dallas investors find 1031 exchange replacement properties in all 50 states. While we're based in Dallas and serve the North Texas metro, our team sources and coordinates exchanges nationwide with precision.
            </p>
          </MotionDiv>
          <MotionDiv delay={0.3}>
            <LocationSearchGrid locations={getAllLocations().slice(0, 8)} compact />
          </MotionDiv>
          <MotionDiv delay={0.35}>
            <Link
              href="/locations"
              className={`${inter.className} inline-flex items-center text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
            >
              View all {getAllLocations().length} locations
            </Link>
          </MotionDiv>
        </section>

        <section
          aria-labelledby="tools-heading"
          className="space-y-8"
        >
          <MotionDiv delay={0.1}>
            <h2
              id="tools-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              Exchange Tools and Calculators
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <p className="text-base text-[#1E1E1E]/85">
              Use our interactive calculators to estimate costs, calculate boot, validate
              identification rules, estimate depreciation recapture, and calculate replacement property values for your 1031 exchange.
            </p>
          </MotionDiv>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MotionDiv delay={0.3}>
              <Link
                href="/tools/boot-calculator"
                className="group flex h-full flex-col rounded-2xl border border-[#153243]/10 bg-gradient-to-br from-[#153243] to-[#16486C] p-6 text-white shadow-[0_20px_56px_rgba(21,50,67,0.12)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441] text-[#153243]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </span>
                <h3 className={`${ibmPlexSerif.className} mb-2 text-xl font-semibold text-white`}>
                  Boot Calculator
                </h3>
                <p className="mb-4 flex-1 text-sm text-white/85">
                  Calculate boot including cash received and mortgage relief. Estimate tax implications.
                </p>
                <span className={`${inter.className} text-sm font-medium text-[#D9A441] transition group-hover:text-[#B68531]`}>
                  Open calculator →
                </span>
              </Link>
            </MotionDiv>
            <MotionDiv delay={0.35}>
              <Link
                href="/tools/exchange-cost-estimator"
                className="group flex h-full flex-col rounded-2xl border border-[#153243]/10 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#153243] text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <h3 className={`${ibmPlexSerif.className} mb-2 text-xl font-semibold text-[#153243]`}>
                  Exchange Cost Estimator
                </h3>
                <p className="mb-4 flex-1 text-sm text-[#1E1E1E]/85">
                  Estimate QI fees, escrow costs, title insurance, and recording fees.
                </p>
                <span className={`${inter.className} text-sm font-medium text-[#D9A441] transition group-hover:text-[#B68531]`}>
                  Open estimator →
                </span>
              </Link>
            </MotionDiv>
            <MotionDiv delay={0.4}>
              <Link
                href="/tools/identification-rules-checker"
                className="group flex h-full flex-col rounded-2xl border border-[#153243]/10 bg-gradient-to-br from-[#D9A441]/20 via-white to-[#153243]/10 p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441] text-[#153243]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <h3 className={`${ibmPlexSerif.className} mb-2 text-xl font-semibold text-[#153243]`}>
                  Identification Rules Checker
                </h3>
                <p className="mb-4 flex-1 text-sm text-[#1E1E1E]/85">
                  Validate your identification against the three property, 200 percent, or 95 percent rules.
                </p>
                <span className={`${inter.className} text-sm font-medium text-[#D9A441] transition group-hover:text-[#B68531]`}>
                  Open checker →
                </span>
              </Link>
            </MotionDiv>
            <MotionDiv delay={0.45}>
              <Link
                href="/tools/depreciation-recapture-estimator"
                className="group flex h-full flex-col rounded-2xl border border-[#153243]/10 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#153243] text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <h3 className={`${ibmPlexSerif.className} mb-2 text-xl font-semibold text-[#153243]`}>
                  Depreciation Recapture Estimator
                </h3>
                <p className="mb-4 flex-1 text-sm text-[#1E1E1E]/85">
                  Estimate depreciation recapture and capital gains tax on your relinquished property.
                </p>
                <span className={`${inter.className} text-sm font-medium text-[#D9A441] transition group-hover:text-[#B68531]`}>
                  Open estimator →
                </span>
              </Link>
            </MotionDiv>
            <MotionDiv delay={0.5}>
              <Link
                href="/tools/replacement-property-value-calculator"
                className="group flex h-full flex-col rounded-2xl border border-[#153243]/10 bg-gradient-to-br from-[#16486C] to-[#153243] p-6 text-white shadow-[0_20px_56px_rgba(21,50,67,0.12)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441] text-[#153243]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </span>
                <h3 className={`${ibmPlexSerif.className} mb-2 text-xl font-semibold text-white`}>
                  Replacement Property Value Calculator
                </h3>
                <p className="mb-4 flex-1 text-sm text-white/85">
                  Calculate the minimum replacement property value needed to defer all gain.
                </p>
                <span className={`${inter.className} text-sm font-medium text-[#D9A441] transition group-hover:text-[#B68531]`}>
                  Open calculator →
                </span>
              </Link>
            </MotionDiv>
          </div>
          <MotionDiv delay={0.55}>
            <Link
              href="/tools"
              className={`${inter.className} inline-flex items-center text-sm font-semibold text-[#153243] underline underline-offset-4 transition hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
            >
              View all tools
            </Link>
          </MotionDiv>
        </section>

        <section aria-labelledby="faq-heading" className="space-y-8">
          <MotionDiv delay={0.1}>
            <h2
              id="faq-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              Frequently Asked Questions.
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[#153243]/10 bg-white p-6 shadow-[0_16px_48px_rgba(21,50,67,0.08)]"
                >
                  <summary
                    className={`${inter.className} cursor-pointer text-lg font-semibold text-[#153243] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]`}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}.{" "}
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base text-[#1E1E1E]/85">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </MotionDiv>
          <div className="sr-only">FAQ about 1031 Exchange in Texas.</div>
        </section>

        <section
          id="request-assistance"
          aria-labelledby="form-heading"
          className="space-y-8"
        >
          <MotionDiv delay={0.1}>
            <h2
              id="form-heading"
              className={`${ibmPlexSerif.className} text-3xl text-[#153243] sm:text-4xl`}
            >
              Request 1031 Exchange Assistance.
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.25}>
            <ContactFormFields showHeading={false} />
          </MotionDiv>
          <div className="sr-only">Contact form for {COMPANY_NAME}.</div>
        </section>

        <footer
          className="space-y-10 rounded-3xl border border-[#153243]/15 bg-[#153243] p-10 text-white shadow-[0_28px_72px_rgba(21,50,67,0.18)]"
          aria-labelledby="footer-heading"
        >
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <h2
                id="footer-heading"
                className={`${ibmPlexSerif.className} text-2xl text-white`}
              >
                {COMPANY_NAME} Confidence.
              </h2>
              <p className="text-sm text-white/80">
                {COMPANY_NAME} guides Dallas investors through complex exchanges with
                disciplined process control, nationwide property sourcing across all 50 states, and trusted
                professional partners.
              </p>
              <div className="space-y-1 text-sm text-white/90">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href={PHONE_LINK}
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Hours:</span> Monday to Friday,
                  8:00 AM to 6:00 PM CT
                </p>
                <p>
                  {isStaffedOffice
                    ? "123 Main Street, Suite 1200, Dallas, TX 75201"
                    : "Serving investors across Texas."}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h3
                className={`${inter.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D9A441]`}
              >
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li>
                  <Link
                    href="/services"
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-types"
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Property Types
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3
                className={`${inter.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D9A441]`}
              >
                Services
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                {TOP_SERVICES.slice(0, 4).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3
                className={`${inter.className} text-sm font-semibold uppercase tracking-[0.24em] text-[#D9A441]`}
              >
                Service Areas
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                {TX_CITIES_SLUGS.slice(0, 5).map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${city.slug}`}
                      className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/85">
            <p>
              Compliance resources:{" "}
              {IRS_LINKS.map((link, index) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="underline underline-offset-4 hover:text-[#D9A441] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                  {index < IRS_LINKS.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p>
              © 2025 {COMPANY_NAME}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
      {jsonLdBlocks.map((script) => (
        <script
          key={script.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script.data) }}
        />
      ))}
    </div>
  );
}

