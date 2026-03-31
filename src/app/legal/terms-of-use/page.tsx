import type { Metadata } from "next";
import LegalLayout, {
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the HerCare Gynecology website. Important information about medical disclaimers and use of this website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="March 15, 2026">
      <LegalSection heading="Acceptance of Terms">
        <p>
          By accessing and using this website (hercaregynecology.com), you
          agree to be bound by these Terms of Use. If you do not agree to
          these terms, please do not use this website.
        </p>
      </LegalSection>

      <LegalSection heading="Medical Disclaimer">
        <p>
          <strong>
            The content on this website is provided for informational and
            educational purposes only. It does not constitute medical
            advice, diagnosis, or treatment.
          </strong>
        </p>
        <p>
          The information presented on this website should not be used as a
          substitute for professional medical advice. Always consult a
          qualified healthcare provider for medical concerns. If you are
          experiencing a medical emergency, call 911 or go to the nearest
          emergency room immediately.
        </p>
        <p>
          While we strive to provide accurate and up-to-date information,
          medical knowledge evolves continuously. The content on this
          website may not reflect the most current research or clinical
          guidelines at all times.
        </p>
      </LegalSection>

      <LegalSection heading="No Doctor-Patient Relationship">
        <p>
          <strong>
            Use of this website, including submission of the appointment
            request form, does not establish a physician-patient
            relationship.
          </strong>
        </p>
        <p>
          A physician-patient relationship with Dr. Teressa Alexander, MD,
          is established only when she formally accepts you as a patient and
          provides care in a clinical setting. Email and form
          communications through this website are not a substitute for an
          in-person consultation.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on this website &mdash; including text, design,
          graphics, logos, and branding &mdash; is the property of HerCare
          Gynecology and is protected by applicable intellectual property
          laws. You may not reproduce, distribute, or create derivative
          works from this content without our written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          This website may contain links to third-party websites or
          resources. We are not responsible for the content, accuracy, or
          practices of any third-party sites. Links are provided for
          convenience and do not imply endorsement.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, HerCare Gynecology and
          Dr. Teressa Alexander, MD, shall not be liable for any damages
          arising from your use of this website, reliance on any
          information provided on this website, or inability to access this
          website.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These Terms of Use are governed by and construed in accordance
          with the laws of the State of Illinois, without regard to its
          conflict of law provisions.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We reserve the right to modify these Terms of Use at any time.
          Changes will be posted on this page with an updated effective
          date. Your continued use of the website after changes are posted
          constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          If you have questions about these Terms of Use, please contact
          us at hello@hercaregynecology.com.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
