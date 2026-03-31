export const SITE_NAME = "HerCare Gynecology";
export const DOCTOR_NAME = "Dr. Teressa Alexander";
export const DOCTOR_SHORT_NAME = "Dr. Terri Alexander";
export const DOCTOR_CREDENTIALS = "MD, Board-Certified OB/GYN";

export const CONTACT = {
  phone: "(630) 000-0000",
  email: "hello@hercaregynecology.com",
  location: "Naperville & surrounding Chicago area",
  hours: "Mon\u2013Fri, 8:00 AM \u2013 5:00 PM",
} as const;

export const NAV_LINKS = [
  { label: "Our Approach", href: "/#philosophy" },
  { label: "Services", href: "/services" },
  { label: "Dr. Alexander", href: "/about" },
  { label: "Patient Stories", href: "/patient-stories" },
] as const;
