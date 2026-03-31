import { Service } from "@/types";

export const services: Service[] = [
  {
    num: "01",
    name: "Perimenopause & Menopause Care",
    slug: "perimenopause-menopause-care",
    shortDesc:
      "Personalized support through every stage of hormonal transition \u2014 hot flashes, sleep disruption, mood changes, and beyond.",
    relatedSlugs: ["hormone-therapy", "mental-health-mood", "sexual-health"],
  },
  {
    num: "02",
    name: "Hormone Therapy & Symptom Management",
    slug: "hormone-therapy",
    shortDesc:
      "Individualized hormone therapy and non-hormonal options tailored to your goals, history, and safety profile.",
    relatedSlugs: ["perimenopause-menopause-care", "cardiovascular-health", "breast-health"],
  },
  {
    num: "03",
    name: "Longevity & Preventive Health",
    slug: "longevity-preventive-health",
    shortDesc:
      "Proactive risk assessment, lifestyle strategies, and evidence-based screening to support healthy aging.",
    relatedSlugs: ["cervical-cancer-screening", "breast-health", "cardiovascular-health"],
  },
  {
    num: "04",
    name: "Sexual Health",
    slug: "sexual-health",
    shortDesc:
      "Compassionate, confidential care for libido, intimacy discomfort, vaginal dryness, infections, and sexual wellness.",
    relatedSlugs: ["perimenopause-menopause-care", "hormone-therapy", "urinary-tract-pelvic-floor"],
  },
  {
    num: "05",
    name: "Mental Health & Mood",
    slug: "mental-health-mood",
    shortDesc:
      "Support for mood changes, anxiety, depression, and emotional well-being \u2014 especially during hormonal transitions.",
    relatedSlugs: ["perimenopause-menopause-care", "hormone-therapy", "sexual-health"],
  },
  {
    num: "06",
    name: "Contraception",
    slug: "contraception",
    shortDesc:
      "Comprehensive counseling and access to the full range of birth control options aligned with your lifestyle and goals.",
    relatedSlugs: ["cervical-cancer-screening", "abnormal-bleeding", "mental-health-mood"],
  },
  {
    num: "07",
    name: "Cervical Cancer Screening",
    slug: "cervical-cancer-screening",
    shortDesc:
      "Routine Pap tests and HPV screening with guideline-based care and timely follow-up when needed.",
    relatedSlugs: ["longevity-preventive-health", "sexual-health", "abnormal-bleeding"],
  },
  {
    num: "08",
    name: "Cardiovascular Health",
    slug: "cardiovascular-health",
    shortDesc:
      "Heart health assessment, cholesterol and blood pressure management tailored to women\u2019s changing physiology.",
    relatedSlugs: ["perimenopause-menopause-care", "hormone-therapy", "weight-metabolic-management"],
  },
  {
    num: "09",
    name: "Weight & Metabolic Management",
    slug: "weight-metabolic-management",
    shortDesc:
      "Sustainable, science-backed strategies for metabolic health, insulin resistance, and long-term weight wellness.",
    relatedSlugs: ["cardiovascular-health", "perimenopause-menopause-care", "longevity-preventive-health"],
  },
  {
    num: "10",
    name: "Abnormal Bleeding Evaluation",
    slug: "abnormal-bleeding",
    shortDesc:
      "Thorough evaluation of irregular, heavy, or unexpected bleeding with clear, effective treatment options.",
    relatedSlugs: ["contraception", "cervical-cancer-screening", "hormone-therapy"],
  },
  {
    num: "11",
    name: "Breast Health",
    slug: "breast-health",
    shortDesc:
      "Clinical breast exams, imaging referrals, and evaluation focused on early detection and lifelong breast health.",
    relatedSlugs: ["longevity-preventive-health", "hormone-therapy", "cardiovascular-health"],
  },
  {
    num: "12",
    name: "Urinary Tract & Pelvic Floor",
    slug: "urinary-tract-pelvic-floor",
    shortDesc:
      "Assessment and treatment for urinary symptoms, incontinence, and pelvic floor concerns to improve daily comfort.",
    relatedSlugs: ["perimenopause-menopause-care", "sexual-health", "hormone-therapy"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}
