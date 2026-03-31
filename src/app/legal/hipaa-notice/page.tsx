import type { Metadata } from "next";
import LegalLayout, {
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices (HIPAA)",
  description:
    "HIPAA Notice of Privacy Practices for HerCare Gynecology. Learn how your medical information may be used and disclosed.",
};

export default function HipaaNoticePage() {
  return (
    <LegalLayout
      title="Notice of Privacy Practices"
      lastUpdated="March 15, 2026"
    >
      <LegalSection heading="">
        <p className="font-medium text-charcoal text-[15px] bg-warm-white border border-border p-6 leading-[1.8]">
          THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
          USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS
          INFORMATION. PLEASE REVIEW IT CAREFULLY.
        </p>
      </LegalSection>

      <LegalSection heading="Our Commitment to Your Privacy">
        <p>
          HerCare Gynecology, operated by Dr. Teressa Alexander, MD, is
          required by law to maintain the privacy of your Protected Health
          Information (PHI), provide you with this notice of our legal
          duties and privacy practices, notify you in the event of a breach
          of your unsecured PHI, and follow the terms of this notice
          currently in effect.
        </p>
      </LegalSection>

      <LegalSection heading="How We May Use and Disclose Your Health Information">
        <p>
          <strong>Treatment:</strong> We may use and share your health
          information with other healthcare providers involved in your care,
          such as specialists, laboratories, or imaging centers.
        </p>
        <p>
          <strong>Payment:</strong> We may use and share your health
          information to bill and receive payment for the services we
          provide, including submissions to your insurance plan.
        </p>
        <p>
          <strong>Healthcare Operations:</strong> We may use your health
          information for activities that improve the quality of care we
          provide, such as quality assessment, staff training, and
          compliance activities.
        </p>
        <p>
          <strong>With Your Written Authorization:</strong> Any use or
          disclosure of your health information not described in this
          notice requires your written authorization. You may revoke your
          authorization at any time in writing.
        </p>
        <p>
          <strong>Reproductive Health Information:</strong> In accordance
          with updated HIPAA Privacy Rule protections, we will not disclose
          your reproductive health information for the purpose of
          investigating or imposing liability on any person for seeking,
          obtaining, providing, or facilitating lawful reproductive
          healthcare.
        </p>
      </LegalSection>

      <LegalSection heading="Other Permitted Uses and Disclosures">
        <p>
          We may also use or disclose your health information without your
          authorization in certain circumstances as required or permitted by
          law, including:
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            As required by federal, state, or local law
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Public health activities (disease reporting, adverse event
            reporting)
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Reports of abuse, neglect, or domestic violence
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Judicial and administrative proceedings
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Law enforcement purposes, with applicable limitations
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            To avert a serious threat to health or safety
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Workers&rsquo; compensation
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>You have the following rights regarding your health information:</p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to inspect and copy</strong> your health
            information
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to request amendments</strong> to your health
            information
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to an accounting of disclosures</strong> of your
            health information
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to request restrictions</strong> on certain uses
            and disclosures
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to request confidential communications</strong>{" "}
            by alternative means or at alternative locations
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to a paper copy</strong> of this notice
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            <strong>Right to direct transfer</strong> of your electronic
            health information to a third-party application of your choice
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Complaints">
        <p>
          If you believe your privacy rights have been violated, you may
          file a complaint with our office or with the U.S. Department of
          Health and Human Services Office for Civil Rights. You will not
          be retaliated against for filing a complaint.
        </p>
        <p>
          To file a complaint with our office, contact us at
          hello@hercaregynecology.com. To file a complaint with the Office
          for Civil Rights, visit{" "}
          <span className="text-sage-dark">www.hhs.gov/ocr/privacy</span>{" "}
          or call 1-877-696-6775.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Notice">
        <p>
          We reserve the right to change the terms of this notice at any
          time. Changes will apply to information we already hold as well
          as new information. A revised notice will be posted on our
          website and made available at our office.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Information">
        <p>
          Privacy Officer: Dr. Teressa Alexander, MD
          <br />
          HerCare Gynecology
          <br />
          Email: hello@hercaregynecology.com
          <br />
          Naperville, IL
        </p>
        <p className="mt-6 text-[13px] italic text-text-muted">
          Note: This Notice of Privacy Practices is provided for
          informational purposes. The final version will be reviewed by
          legal counsel prior to the opening of HerCare Gynecology. A
          printed copy will be provided to all patients at their first
          visit.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
