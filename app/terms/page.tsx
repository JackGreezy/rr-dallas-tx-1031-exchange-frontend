import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { COMPANY_NAME, COMPANY_EMAIL, SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY_NAME}`,
  description: `Terms of service for ${COMPANY_NAME}. Review our terms and conditions for using our 1031 exchange services.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-20">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mb-6 font-serif text-4xl font-bold text-heading md:text-5xl">
        Terms of Service
      </h1>
      <div className="prose prose-slate max-w-none space-y-6 text-ink/85">
        <p className="text-sm text-ink/70">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Agreement to Terms</h2>
          <p>
            By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on {COMPANY_NAME}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Service Description</h2>
          <p>
            {COMPANY_NAME} provides advisory and coordination services for 1031 exchange transactions. We help investors identify replacement properties and coordinate with qualified intermediaries, lenders, and advisors.
          </p>
          <p>
            <strong>Important:</strong> {COMPANY_NAME} is not a Qualified Intermediary, law firm, broker, or CPA. We do not provide tax, legal, or investment advice. Users should consult a Qualified Intermediary and tax advisor before making decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Educational Content</h2>
          <p>
            All content on this website is for educational purposes only. Information provided is not tax, legal, or investment advice. Results from calculators and tools are estimates only and should not be relied upon for making financial decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Disclaimer</h2>
          <p>
            The materials on {COMPANY_NAME}'s website are provided on an "as is" basis. {COMPANY_NAME} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Limitations</h2>
          <p>
            In no event shall {COMPANY_NAME} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {COMPANY_NAME}'s website, even if {COMPANY_NAME} or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Accuracy of Materials</h2>
          <p>
            The materials appearing on {COMPANY_NAME}'s website could include technical, typographical, or photographic errors. {COMPANY_NAME} does not warrant that any of the materials on its website are accurate, complete, or current. {COMPANY_NAME} may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Links</h2>
          <p>
            {COMPANY_NAME} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {COMPANY_NAME}. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Modifications</h2>
          <p>
            {COMPANY_NAME} may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the State of {PRIMARY_STATE_ABBR} and you irrevocably submit to the exclusive jurisdiction of the courts in that state.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-heading">Contact Information</h2>
          <p>
            If you have questions about these Terms of Service, please contact us:
          </p>
          <p>
            <strong>{COMPANY_NAME}</strong><br />
            Serving investors across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}<br />
            Email: <Link href={`mailto:${COMPANY_EMAIL}`} className="text-primary underline underline-offset-4 hover:text-[#B68531]">{COMPANY_EMAIL}</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

