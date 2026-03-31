export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface BlogPostFull extends BlogPostMeta {
  content: string[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPostFull[] = [
  {
    slug: "welcome-to-hercare-gynecology",
    title: "Introducing HerCare Gynecology: A New Approach to Women\u2019s Health in Naperville",
    date: "2026-03-15",
    excerpt:
      "HerCare Gynecology is more than a new practice \u2014 it\u2019s a new philosophy of women\u2019s health care. Learn about Dr. Terri Alexander\u2019s vision for personalized, whole-person gynecological care in Naperville, IL.",
    author: "Dr. Teressa Alexander, MD",
    category: "Practice News",
    tags: ["HerCare", "Naperville", "women's health", "Dr. Alexander"],
    readTime: "4 min read",
    content: [
      "After more than two decades of practicing obstetrics and gynecology, I\u2019ve had the privilege of caring for thousands of women through some of the most important moments of their lives. Along the way, I\u2019ve also seen firsthand what works in women\u2019s healthcare \u2014 and what doesn\u2019t.",
      "Too often, women tell me they feel rushed through appointments, unheard by their providers, or left without clear answers to their questions. Too often, the healthcare system treats each symptom in isolation rather than looking at the whole picture. And too often, women accept discomfort, fatigue, or mood changes as \u201cjust part of getting older\u201d when effective treatments exist.",
      "HerCare Gynecology is my response to all of that. It\u2019s a practice built from the ground up to do things differently.",
    ],
    sections: [
      {
        heading: "Why HerCare, Why Now",
        paragraphs: [
          "The name \u201cHerCare\u201d reflects the simple but essential principle at the heart of this practice: care designed specifically around her \u2014 around you. Your health is not a collection of isolated symptoms. It\u2019s a complex, interconnected story that deserves to be understood as a whole.",
          "At HerCare, I\u2019m bringing together everything I\u2019ve learned over 24 years of practice into a single, focused vision: evidence-based gynecological care that is personalized, unhurried, and genuinely attentive to the whole woman.",
        ],
      },
      {
        heading: "What Makes Us Different",
        paragraphs: [
          "At HerCare, you won\u2019t be rushed through a 10-minute appointment. Every visit is designed to give you the time you need to share your concerns, ask questions, and participate actively in your care decisions. I believe the best outcomes happen when patients and providers work as partners.",
          "Our approach is integrative, connecting the dots between hormonal health, cardiovascular risk, metabolic function, mental well-being, and sexual health. When we look at the full picture, we can often identify root causes and create treatment plans that address multiple concerns at once.",
          "And because I specialize in perimenopause, menopause, and hormonal health, women in these transitional stages will find a provider who deeply understands what they\u2019re going through \u2014 not one who dismisses their symptoms or offers one-size-fits-all solutions.",
        ],
      },
      {
        heading: "Opening Spring 2026 in Naperville",
        paragraphs: [
          "HerCare Gynecology will be opening in Spring 2026, serving women in Naperville and the surrounding Chicago suburbs. We\u2019re currently accepting appointment requests for new patients.",
          "If you\u2019ve been looking for a gynecologist who will take the time to truly listen, who stays current with the latest research, and who sees you as a whole person \u2014 not just a chart \u2014 I would be honored to be your partner in health. I look forward to welcoming you to HerCare.",
        ],
      },
    ],
  },
  {
    slug: "first-signs-of-perimenopause",
    title: "The First Signs of Perimenopause: What Every Woman Over 35 Should Know",
    date: "2026-03-22",
    excerpt:
      "Perimenopause can begin earlier than most women expect. Learn to recognize the early signs \u2014 from irregular periods to mood changes \u2014 and understand when it\u2019s time to talk to your gynecologist.",
    author: "Dr. Teressa Alexander, MD",
    category: "Menopause & Hormones",
    tags: ["perimenopause", "menopause", "hormones", "symptoms", "women over 35"],
    readTime: "6 min read",
    content: [
      "When most women think about menopause, they picture hot flashes in their 50s. But the transition actually begins much earlier \u2014 often in the early-to-mid 40s, and for some women, in their late 30s. This transitional phase is called perimenopause, and it\u2019s one of the most misunderstood stages of women\u2019s health.",
      "During perimenopause, your ovaries gradually produce less estrogen. But the decline isn\u2019t smooth or linear \u2014 hormone levels can spike and plummet unpredictably, causing a wide range of symptoms that many women don\u2019t immediately connect to hormonal changes.",
      "Understanding what to look for can help you seek care sooner, find relief faster, and feel reassured that what you\u2019re experiencing is both common and treatable.",
    ],
    sections: [
      {
        heading: "Early Signs You Might Not Expect",
        paragraphs: [
          "The most well-known sign of perimenopause is irregular periods \u2014 cycles that are shorter, longer, heavier, lighter, or more unpredictable than your usual pattern. But many women experience subtler changes first.",
          "Sleep disruption is one of the earliest and most common complaints. You may find yourself waking at 3 AM with no obvious cause, or struggling to fall asleep despite feeling exhausted. This is often directly related to fluctuating progesterone levels.",
          "Mood changes are another early signal. New or worsening anxiety, irritability that feels disproportionate, emotional sensitivity, or a pervasive sense of \u201cnot feeling like yourself\u201d can all be driven by hormonal shifts \u2014 even before your periods change noticeably.",
          "Other early signs include brain fog or difficulty concentrating, increased headaches or migraines around your period, changes in libido, joint aches, and heart palpitations. Many women visit multiple doctors for these individual symptoms before the hormonal connection is identified.",
        ],
      },
      {
        heading: "When to Talk to Your Gynecologist",
        paragraphs: [
          "There\u2019s no blood test that definitively diagnoses perimenopause \u2014 hormone levels fluctuate too much during this phase to provide a clear snapshot. Diagnosis is primarily based on your age, symptoms, and menstrual patterns.",
          "You should consider scheduling a visit if you\u2019re over 35 and noticing changes in your menstrual cycle, sleep, mood, energy, or any of the symptoms described above. You don\u2019t need to wait until symptoms are severe \u2014 early evaluation means earlier relief.",
          "At HerCare Gynecology, Dr. Alexander takes a detailed history of your symptoms and their timing, evaluates your overall health, and develops a personalized plan that may include lifestyle modifications, hormone therapy, or other targeted treatments. The goal is simple: to help you feel like yourself again.",
        ],
      },
      {
        heading: "You Don\u2019t Have to Tough It Out",
        paragraphs: [
          "One of the most important messages I want every woman to hear is this: you do not have to accept these changes as an inevitable part of aging. Perimenopause symptoms are real, they have identifiable causes, and in most cases, they are very treatable.",
          "If something feels off \u2014 even if you can\u2019t quite put your finger on it \u2014 trust your instinct and seek evaluation. Your experience matters, and you deserve a provider who will listen to the full picture and help you navigate this transition with confidence and support.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-gynecologist-chicago-suburbs",
    title: "How to Choose the Right Gynecologist in the Chicago Suburbs",
    date: "2026-03-29",
    excerpt:
      "Finding a gynecologist you trust is one of the most important healthcare decisions you\u2019ll make. Here\u2019s what to look for \u2014 and what questions to ask \u2014 when choosing a provider in the Chicago suburbs.",
    author: "Dr. Teressa Alexander, MD",
    category: "Women's Health",
    tags: ["choosing a gynecologist", "Chicago suburbs", "Naperville", "women's health"],
    readTime: "5 min read",
    content: [
      "Your gynecologist is more than a doctor you see once a year for a routine exam. She or he is a partner in your health across some of the most important transitions of your life \u2014 from contraception and fertility to perimenopause and beyond. That relationship should be built on trust, communication, and a shared commitment to your well-being.",
      "Yet many women settle for a provider who doesn\u2019t quite feel right, whether because of convenience, insurance constraints, or simply not knowing what to look for. If you\u2019re searching for a new gynecologist in the Chicago suburbs, here are the qualities and questions that matter most.",
    ],
    sections: [
      {
        heading: "Look for a Provider Who Listens",
        paragraphs: [
          "This may sound obvious, but it\u2019s the single most important factor \u2014 and the one most often missing. A good gynecologist doesn\u2019t just hear your chief complaint and move on. She asks follow-up questions, connects symptoms you might not have linked together, and takes the time to understand your full health picture.",
          "Pay attention during your first visit: Does the provider make eye contact? Do they interrupt you? Do they explain things in terms you understand? Do you feel rushed? Your gut feeling about whether you\u2019re being truly heard is a reliable signal.",
        ],
      },
      {
        heading: "Verify Credentials and Specialization",
        paragraphs: [
          "Board certification in obstetrics and gynecology is the baseline standard you should expect. Beyond that, look for providers who have additional expertise in the areas most relevant to your needs. If you\u2019re in your 40s or 50s, a provider with experience in perimenopause and menopause management will serve you far better than a generalist.",
          "Don\u2019t hesitate to ask about a provider\u2019s experience with specific conditions or treatments. How many IUD insertions do they perform? Are they up to date on the latest hormone therapy guidelines? Do they take an integrative approach to care? These questions are entirely appropriate and any good provider will welcome them.",
        ],
      },
      {
        heading: "Consider the Practice Environment",
        paragraphs: [
          "The practice itself matters. How easy is it to schedule an appointment? How long are typical wait times? Does the office staff treat you with respect and warmth? Is the physical environment clean and comfortable?",
          "Also consider the practice\u2019s communication style. Can you message your provider between visits with questions? How quickly are lab results communicated? A practice that prioritizes accessibility and responsiveness will serve you better in the long run than one that\u2019s difficult to reach.",
        ],
      },
      {
        heading: "Trust Your Instincts",
        paragraphs: [
          "Ultimately, the right gynecologist is someone you feel comfortable being vulnerable with \u2014 someone you trust to listen, to be honest, and to act in your best interest. If a provider relationship doesn\u2019t feel right, you have every right to seek a better fit.",
          "At HerCare Gynecology in Naperville, our practice is designed from the ground up around these principles: genuine listening, unhurried appointments, evidence-based care, and a whole-person approach. If you\u2019re looking for a gynecologist who will partner with you in your health journey, we\u2019d love to welcome you.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostFull | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
