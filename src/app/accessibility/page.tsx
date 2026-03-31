import type { Metadata } from "next";
import LegalLayout, {
  LegalSection,
} from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "HerCare Gynecology\u2019s commitment to digital accessibility. Learn about our WCAG 2.1 AA compliance efforts and how to report accessibility barriers.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      lastUpdated="March 15, 2026"
    >
      <LegalSection heading="Our Commitment">
        <p>
          HerCare Gynecology is committed to ensuring digital accessibility
          for people with disabilities. We continually improve the user
          experience for everyone and apply relevant accessibility standards
          to ensure our website is usable by the widest possible audience.
        </p>
      </LegalSection>

      <LegalSection heading="Standards">
        <p>
          Our website aims to conform to the Web Content Accessibility
          Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how
          to make web content more accessible to people with a wide range
          of disabilities, including visual, auditory, physical, speech,
          cognitive, language, learning, and neurological disabilities.
        </p>
      </LegalSection>

      <LegalSection heading="Measures We Have Taken">
        <p>
          We have implemented the following measures to support
          accessibility:
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Semantic HTML structure for proper document outline and
            navigation
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Sufficient color contrast between text and background elements
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Keyboard navigability for all interactive elements
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Descriptive alt text for all images
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Proper heading hierarchy (h1 through h6) on every page
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            ARIA labels on interactive elements where needed
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Form labels associated with their corresponding input fields
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Visible focus indicators for keyboard navigation
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Respect for reduced motion preferences via
            prefers-reduced-motion media query
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-sage shrink-0">&mdash;</span>
            Responsive design that works across devices and screen sizes
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Known Limitations">
        <p>
          Despite our best efforts, some areas of our website may not yet
          be fully accessible. We are actively working to identify and
          resolve any remaining issues. Third-party content or embedded
          services (such as online scheduling tools) may have their own
          accessibility characteristics outside of our direct control.
        </p>
      </LegalSection>

      <LegalSection heading="Feedback and Contact">
        <p>
          We welcome your feedback on the accessibility of our website. If
          you encounter any accessibility barriers or have suggestions for
          improvement, please contact us:
        </p>
        <p>
          Email: hello@hercaregynecology.com
          <br />
          Phone: (630) 000-0000
        </p>
        <p>
          We aim to respond to accessibility feedback within 2 business
          days. If you need to access any information or services on our
          website and are unable to do so, please call our office and we
          will provide the information to you through an alternative
          method.
        </p>
      </LegalSection>

      <LegalSection heading="Technical Specifications">
        <p>
          This website is built with Next.js and is designed to work with
          current versions of major web browsers and assistive
          technologies, including screen readers such as NVDA, JAWS, and
          VoiceOver.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
