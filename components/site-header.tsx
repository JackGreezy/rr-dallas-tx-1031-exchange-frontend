'use client';

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY_PHONE, CONTACT_PATH, SERVICES_PATH, LOCATIONS_PATH, TOOLS_PATH } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

type MenuKey = "services" | "locations" | "tools" | null;

const serviceLinks = services.slice(0, 8).map((service) => ({
  href: `${SERVICES_PATH}/${service.slug}`,
  label: service.name,
}));

const locationLinks = locations.slice(0, 8).map((location) => ({
  href: `${LOCATIONS_PATH}/${location.slug}`,
  label: location.name,
}));

const toolLinks = [
  { href: `${TOOLS_PATH}/boot-calculator`, label: "Boot Calculator" },
  { href: `${TOOLS_PATH}/exchange-cost-estimator`, label: "Exchange Cost Estimator" },
  { href: `${TOOLS_PATH}/identification-rules-checker`, label: "Identification Rules Checker" },
];

const menuConfig: Record<Exclude<MenuKey, null>, { label: string; links: { href: string; label: string }[] }> =
  {
    services: {
      label: "Services",
      links: [
        { href: SERVICES_PATH, label: "View All Services" },
        ...serviceLinks,
      ],
    },
    locations: {
      label: "Locations",
      links: [
        { href: LOCATIONS_PATH, label: "View All Locations" },
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
    hoverTimeout.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const menuItems = useMemo(() => menuConfig, []);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-40 border-b border-outline/20 bg-paper/90 backdrop-blur"
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold text-heading transition-colors hover:text-primary"
          >
            1031 Exchange of Dallas
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
                  className={`absolute left-0 mt-2 w-64 rounded-2xl border border-outline/15 bg-white p-3 shadow-elevation transition-opacity ${
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
              href={TOOLS_PATH}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(TOOLS_PATH)
                  ? "bg-primary text-primary-fg"
                  : "text-ink hover:text-primary"
              }`}
            >
              Tools
            </Link>
            <Link
              href={BLOG_PATH}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
            className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg transition-colors hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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

const BLOG_PATH = "/blog";

