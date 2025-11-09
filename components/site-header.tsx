'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY_NAME, COMPANY_PHONE, CONTACT_PATH, SERVICES_PATH, LOCATIONS_PATH, TOOLS_PATH, ABOUT_PATH, BLOG_PATH } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { locationsData } from "@/data/locations";

type MenuKey = "services" | "locations" | "tools" | null;

// Get main location (Dallas) first, then most populous locations
const getTopLocations = () => {
  const mainLocation = locationsData.find(loc => loc.slug === 'dallas-tx');
  const otherLocations = locationsData
    .filter(loc => loc.slug !== 'dallas-tx')
    .sort((a, b) => {
      // Prioritize cities over neighborhoods/suburbs
      const typeOrder: Record<string, number> = { city: 1, suburb: 2, neighborhood: 3, district: 4, remote: 5 };
      return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
    })
    .slice(0, 7); // Get top 7 to make 8 total with main location
  
  const topLocations = mainLocation 
    ? [mainLocation, ...otherLocations]
    : otherLocations.slice(0, 8);
  
  return topLocations.map((location) => ({
    href: `${LOCATIONS_PATH}/${location.slug}`,
    label: location.name,
  }));
};

// Get main services (mostly identifying properties)
const getTopServices = () => {
  const identificationServices = services
    .filter(service => 
      service.slug.includes('identification') || 
      service.slug.includes('replacement') ||
      service.slug.includes('sourcing')
    )
    .slice(0, 7);
  
  // If we don't have enough identification services, add others
  if (identificationServices.length < 7) {
    const otherServices = services
      .filter(service => !identificationServices.includes(service))
      .slice(0, 7 - identificationServices.length);
    return [...identificationServices, ...otherServices].slice(0, 7);
  }
  
  return identificationServices;
};

const serviceLinks = getTopServices().map((service) => ({
  href: `${SERVICES_PATH}/${service.slug}`,
  label: service.name,
}));

const locationLinks = getTopLocations();

const toolLinks = [
  { href: `${TOOLS_PATH}/boot-calculator`, label: "Boot Calculator" },
  { href: `${TOOLS_PATH}/exchange-cost-estimator`, label: "Exchange Cost Estimator" },
  { href: `${TOOLS_PATH}/identification-rules-checker`, label: "Identification Rules Checker" },
  { href: `${TOOLS_PATH}/depreciation-recapture-estimator`, label: "Depreciation Recapture Estimator" },
  { href: `${TOOLS_PATH}/replacement-property-value-calculator`, label: "Replacement Property Value Calculator" },
];

const menuConfig: Record<Exclude<MenuKey, null>, { label: string; links: { href: string; label: string }[] }> =
  {
    services: {
      label: "Services",
      links: [
        { href: SERVICES_PATH, label: `View All ${services.length} Services` },
        ...serviceLinks,
      ],
    },
    locations: {
      label: "Locations",
      links: [
        { href: LOCATIONS_PATH, label: `View All ${locationsData.length} Locations` },
        ...locationLinks,
      ],
    },
    tools: {
      label: "Tools",
      links: [
        { href: TOOLS_PATH, label: "View All Tools" },
        ...toolLinks,
      ],
    },
  };

const createPhoneHref = (value: string) => `tel:${value.replace(/\D/g, "")}`;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) =>
    href !== "/" && pathname?.startsWith(href);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const target = event.target as Node;
      if (!containerRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("pointerdown", listener);
    return () => document.removeEventListener("pointerdown", listener);
  }, []);

  const handleOpen = (key: Exclude<MenuKey, null>) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setActiveMenu(key);
  };

  const handleCloseSoon = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    // Increased timeout to allow users to move mouse to dropdown
    hoverTimeout.current = setTimeout(() => setActiveMenu(null), 300);
  };

  const menuItems = useMemo(() => menuConfig, []);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-[9999] isolate border-b border-outline/20 bg-paper backdrop-blur-md"
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/1031-exchange-dallas-logo.png"
              alt={COMPANY_NAME}
              width={200}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div
                key={key}
                onMouseEnter={() => handleOpen(key as Exclude<MenuKey, null>)}
                onMouseLeave={handleCloseSoon}
                className="relative"
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === key}
                  aria-controls={`header-menu-${key}`}
                  onFocus={() => handleOpen(key as Exclude<MenuKey, null>)}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {menu.label}
                  <span aria-hidden="true" className="text-xs">
                    ▾
                  </span>
                </button>
                <div
                  id={`header-menu-${key}`}
                  role="menu"
                  className={`absolute left-0 mt-2 w-64 rounded-2xl border border-outline/15 bg-white p-3 shadow-elevation transition-opacity z-[10000] ${
                    activeMenu === key ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <ul className="space-y-1">
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-xl px-3 py-2 text-sm text-ink transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          onClick={() => setActiveMenu(null)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <Link
              href={ABOUT_PATH}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(ABOUT_PATH)
                  ? "bg-primary text-primary-fg"
                  : "text-ink hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href={BLOG_PATH}
              className={`mr-4 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(BLOG_PATH)
                  ? "bg-primary text-primary-fg"
                  : "text-ink hover:text-primary"
              }`}
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push(CONTACT_PATH)}
            className="hidden rounded-full border border-outline/40 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
          >
            Contact
          </button>
          <a
            href={createPhoneHref(COMPANY_PHONE)}
            className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg transition-colors hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
          >
            Call {COMPANY_PHONE}
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <div className="container flex flex-wrap items-center gap-3 pb-4">
          <Link
            href={SERVICES_PATH}
            className="rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Services
          </Link>
          <Link
            href={LOCATIONS_PATH}
            className="rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Locations
          </Link>
          <Link
            href={TOOLS_PATH}
            className="rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Tools
          </Link>
          <Link
            href={ABOUT_PATH}
            className="rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            About
          </Link>
          <Link
            href={CONTACT_PATH}
            className="rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}


