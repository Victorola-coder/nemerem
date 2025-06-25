type WorkExperience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
};

type Skill = {
  id: number;
  name: string;
};

type Tool = {
  id: number;
  name: string;
  icon: string;
};

type TechExperience = {
  id: number;
  name: string;
  icon: string;
};

export const workHistory: WorkExperience[] = [
  {
    id: 1,
    title: "UI Designer",
    company: "Vistapay",
    period: "January 2024 - October 2024",
    description:
      "Redesign the mobile app for a digital wallet and VTU service, enhancing user experience and driving engagement.",
  },
  {
    id: 2,
    title: "UI Designer",
    company: "Waveserve",
    period: "June 2024 - August 2024",
    description:
      "Design an intuitive mobile app for artisans to find job opportunities, manage profiles, and showcase skills.",
  },
  {
    id: 3,
    title: "UI Designer",
    company: "Rockbalm",
    period: "July 2024 - November 2024",
    description:
      "Design an intuitive mobile app for artisans to find job opportunities, manage profiles, and showcase skills.",
  },
];

export const designSkills: Skill[] = [
  { id: 1, name: "User Interface Design" },
  { id: 2, name: "User experience Design" },
  { id: 3, name: "SaaS Apps Design" },
  { id: 4, name: "Mobile Apps Design" },
  { id: 5, name: "Web Design" },
  { id: 6, name: "Design system" },
];

export const workingTools: Tool[] = [
  { id: 1, name: "Figma", icon: "/images/figma.svg" },
  { id: 2, name: "Bootstrap", icon: "/images/bootstrap.svg" },
  { id: 3, name: "Slack", icon: "/images/slack.svg" },
  { id: 4, name: "Trello", icon: "/images/trello.svg" },
  { id: 5, name: "Photoshop", icon: "/images/ps.svg" },
];

export const techExperience: TechExperience[] = [
  { id: 1, name: "HTML", icon: "/images/html.svg" },
  { id: 2, name: "CSS", icon: "/images/css.svg" },
  { id: 3, name: "JavaScript", icon: "/images/js.svg" },
  { id: 4, name: "Bootstrap", icon: "/images/bootstrap.svg" },
  { id: 5, name: "Github", icon: "/images/github.svg" },
];

// Legacy FAQ data (keeping for backward compatibility)
type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQList = FAQItem[];

export const faqs: FAQList = [
  {
    id: 1,
    question: "What is TypeScript?",
    answer:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    id: 2,
    question: "How do I install TypeScript?",
    answer:
      "You can install TypeScript globally using npm by running the command: npm install -g typescript",
  },
  {
    id: 3,
    question: "What are the benefits of using TypeScript?",
    answer:
      "TypeScript offers several benefits, including static typing, improved tooling and IDE support, early error detection, and better code organization and maintainability.",
  },
  {
    id: 4,
    question: "Can I use TypeScript with React?",
    answer:
      "Yes, TypeScript can be used with React. Many developers find that TypeScript enhances their React development experience by providing better type checking and autocompletion.",
  },
  {
    id: 5,
    question: "How do I compile TypeScript code?",
    answer:
      "You can compile TypeScript code using the TypeScript compiler (tsc). Run 'tsc filename.ts' in your terminal to compile a TypeScript file to JavaScript.",
  },
];
