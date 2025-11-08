import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { COMPANY_NAME, SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_NAME}`,
  description: `Privacy policy for ${COMPANY_NAME}. Learn how we collect, use, and protect your information.`,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-20">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mb-6 font-serif text-4xl font-bold text-heading md:text-5xl">
        Privacy Policy
      </h1>
      <div className="prose prose-slate max-w-none space-y-6 text-ink/85">
        <p className="text-sm text-ink/70">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Information We Collect</h2>
          <p>
            {COMPANY_NAME} collects information that you provide directly to us when you:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Submit a contact form or request for information</li>
            <li>Communicate with us via email or phone</li>
            <li>Use our online tools and calculators</li>
            <li>Subscribe to our newsletter or updates</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, property details, and other information relevant to your 1031 exchange inquiry.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Coordinate with qualified intermediaries, lenders, and advisors</li>
            <li>Send you updates about 1031 exchange opportunities and deadlines</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Qualified intermediaries and service providers who assist with your exchange</li>
            <li>Legal and tax advisors when authorized by you</li>
            <li>Third-party service providers who help us operate our website and business</li>
            <li>Law enforcement or government agencies when required by law</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to improve your experience and analyze website usage. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Contact Us</h2>
          <p>
            If you have questions about this privacy policy or our data practices, please contact us:
          </p>
          <p>
            <strong>{COMPANY_NAME}</strong><br />
            Serving investors across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}<br />
            Email: <Link href="mailto:hello@1031exchangedallas.com" className="text-primary underline underline-offset-4 hover:text-[#B68531]">hello@1031exchangedallas.com</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

