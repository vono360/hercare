import type { Metadata } from "next";
import LegalLayout, {
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for HerCare Gynecology. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 15, 2026">
      <LegalSection heading="Introduction">
        <p>
          HerCare Gynecology (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), operated by Dr. Teressa Alexander, MD, is
          committed to protecting the privacy of visitors to our website,
          hercaregynecology.com. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website.
        </p>
        <p>
          This policy covers only information collected through our website.
          For information about how we handle Protected Health Information
          (PHI) in our clinical practice, please refer to our{" "}
          <a
            href="/legal/hipaa-notice"
            className="text-sage-dark underline hover:text-charcoal transition-colors"
          >
            Notice of Privacy Practices
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Information We Collect">
        <p>
          <strong>Information you provide voluntarily:</strong> When you
          submit our appointment request form, we collect your first name,
          last name, email address, phone number (optional), area of
          concern, and any message you choose to include.
        </p>
        <p>
          <strong>Information collected automatically:</strong> When you
          visit our website, our hosting provider (Vercel) may automatically
          collect certain information, including your IP address, browser
          type, device information, pages visited, and referring URL. We use
          Google Fonts, which may result in your browser making requests to
          Google&rsquo;s servers.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Respond to your appointment requests and inquiries
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Communicate with you about practice updates and your requested
            services
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Improve our website functionality and user experience
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Comply with applicable legal requirements
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Third-Party Service Providers">
        <p>
          We may share your information with the following third-party
          service providers who assist us in operating our website and
          practice:
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Vercel:</strong> Website hosting and deployment
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Google Fonts:</strong> Typography delivery (may collect
            IP address and user-agent)
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>DrChrono:</strong> When our patient portal is active,
            information entered through DrChrono is governed by their
            privacy policy and our Business Associate Agreement
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          Form submissions are retained until your inquiry is resolved or
          your appointment is scheduled, plus a reasonable period thereafter.
          We do not retain personal information longer than necessary for the
          purposes described in this policy.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          You have the right to request access to, correction of, or
          deletion of your personal information. To exercise these rights,
          please contact us at hello@hercaregynecology.com.
        </p>
      </LegalSection>

      <LegalSection heading="Children&rsquo;s Privacy">
        <p>
          Our website is not directed at children under the age of 13. We do
          not knowingly collect personal information from children under 13.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          We use industry-standard security measures, including SSL/TLS
          encryption, to protect your personal information during
          transmission. However, no method of electronic transmission or
          storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated effective date. We
          encourage you to review this policy periodically.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact
          us:
        </p>
        <p>
          HerCare Gynecology
          <br />
          Dr. Teressa Alexander, MD
          <br />
          Email: hello@hercaregynecology.com
          <br />
          Naperville, IL
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
