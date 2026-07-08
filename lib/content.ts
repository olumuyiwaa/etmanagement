export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WhyPoint {
  title: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  items: string[];
}

export const company = {
  name: "s Limited",
  shortName: "ET Partners",
  strapline:
    "Management Consultancy | Research | Strategy | Corporate Advisory and Digital Solutions",
  aboutLead:
    "We help organisations, institutions, entrepreneurs, and professionals transform ideas, information, and strategic objectives into practical, high-impact business solutions.",
  aboutBody:
    "Through a combination of strategic insight, rigorous research, analytical expertise, financial knowledge, and innovative thinking, we deliver evidence-based solutions that improve organisational performance, strengthen competitiveness, support informed decision-making, and drive sustainable growth. Our multidisciplinary expertise spans management consultancy, market research, business analysis, strategic advisory, financial consultancy, procurement advisory, proposal development, corporate support services, academic research, corporate publishing, digital solutions, and professional training. From business strategy and research to executive communication, technology, and capacity development, we provide integrated services that help clients navigate complexity, manage change confidently, and achieve measurable, long-term success.",
};

export const contact = {
  address: "13 Musibau Mojeeb Street, Ago Palace, Lagos State",
  email: "etmanagementpartnerslimted@gmail.com",
  phoneDisplay: "+234 802 220 8688",
  phoneHref: "tel:+2348022208688",
  whatsappHref: "https://wa.me/2348022208688",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const whyWorkWithUs: WhyPoint[] = [
  { title: "Strategic, research-driven and evidence-based solutions" },
  { title: "Executive-level communication and professional presentation design" },
  { title: "Multidisciplinary consultancy under one trusted partner" },
  { title: "High standards of professionalism, confidentiality and integrity" },
  { title: "Reliable project delivery with responsive client support" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "consultancy-research-strategy",
    name: "Management Consultancy, Research and Strategic Advisory",
    description:
      "We provide professional consultancy and strategic advisory services that help organisations make informed decisions, improve performance, identify growth opportunities, and strengthen competitive advantage.",
    items: [
      "Market Entry Studies",
      "Competitor Research",
      "Customer Insight Research",
      "Market Sizing and Forecasting",
      "Sector-Specific Research",
      "Financial Model Development",
      "Feasibility Studies and Scenario Planning",
      "Health and Social Care Bid Tender Writing",
      "Academic Research, Thesis and Dissertation Support",
    ],
  },
  {
    slug: "corporate-publishing-communication",
    name: "Corporate Publishing and Executive Communication",
    description:
      "We develop professional business documents and learning materials that communicate complex information with clarity, structure, and visual impact.",
    items: [
      "Executive PowerPoint Presentation Designs",
      "Corporate Report Design",
      "Content Development",
      "Learning and Training Material Design",
    ],
  },
  {
    slug: "digital-branding-technology",
    name: "Digital Solutions, Branding and Technology",
    description:
      "We combine creativity with technology to build modern digital experiences that strengthen organisational identity and enhance customer engagement.",
    items: [
      "Brand Identity, Logo and Graphic Design",
      "UI/UX Design",
      "Website Design and Development",
      "Software Development",
      "Copywriting",
      "Corporate Communication Materials",
      "Digital Marketing and Media Creation",
    ],
  },
  {
    slug: "training-capacity-development",
    name: "Professional Training and Capacity Development",
    description:
      "We design and deliver practical learning programmes that equip individuals and organisations with the knowledge and skills required for professional and organisational success.",
    items: [
      "Corporate Training",
      "Professional Coaching",
      "Career Transition Support",
      "Learning Programme Development",
    ],
  },
];

export const consultation = {
  heading: "Consultation and Pricing",
  body: "All projects begin with a short consultation to define project objectives, scope, timelines, deliverables, and pricing before engagement.",
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnose",
    description:
      "We start with your objective and the evidence around it: market data, institutional context, and the constraints that matter.",
  },
  {
    step: 2,
    title: "Advise",
    description:
      "Findings become a clear strategic position, backed by rigorous analysis rather than opinion.",
  },
  {
    step: 3,
    title: "Deliver",
    description:
      "We support execution and communication, from proposal development to the digital and corporate tools needed to carry it through.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What kinds of clients do you work with?",
    answer:
      "Organisations, institutions, entrepreneurs, and professionals across sectors who need rigorous research, strategy, or advisory support behind an important decision.",
  },
  {
    question: "Do you only handle strategy, or also execution?",
    answer:
      "Both. We work across strategy, research, and advisory, and also support execution through proposal development, corporate support services, and digital solutions.",
  },
  {
    question: "Can you support academic or institutional research projects?",
    answer:
      "Yes, academic research and corporate publishing are part of our core service lines, alongside our commercial consultancy work.",
  },
  {
    question: "Do you offer training as well as advisory work?",
    answer:
      "Yes. Professional training and capacity development are part of how we help clients build lasting internal capability, not just a one-off report.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every project starts with a short consultation to define objectives, scope, timelines, and deliverables, and pricing is set from that before any engagement begins.",
  },
  {
    question: "How do we start a conversation about a project?",
    answer:
      "Reach out through the contact section below with an outline of your objective, and we'll follow up to discuss scope and fit.",
  },
];
