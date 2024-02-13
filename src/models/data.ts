import { Category, Item } from "../api/types";

const category1Items: Item[] = [
  {
    id: 1,
    title: "Getting Started Guide",
    icon: "./vite.svg",
    link: "getting-started-link",
  },
  {
    id: 2,
    title: "User Manual",
    icon: "./vite.svg",
    link: "user-manual-link",
  },
  { id: 3, title: "FAQs", icon: "./vite.svg", link: "faqs-link" },
];

const category2Items: Item[] = [
  {
    id: 4,
    title: "Video Tutorials",
    icon: "./vite.svg",
    link: "video-tutorials-link",
  },
  {
    id: 5,
    title: "Documentation",
    icon: "./vite.svg",
    link: "documentation-link",
  },
  {
    id: 6,
    title: "Support Forum",
    icon: "./vite.svg",
    link: "support-forum-link",
  },
];

// Dummy items for Category 3
const category3Items: Item[] = [
  {
    id: 7,
    title: "Latest Updates",
    icon: "./vite.svg",
    link: "latest-updates-link",
  },
  {
    id: 8,
    title: "Release Notes",
    icon: "./vite.svg",
    link: "release-notes-link",
  },
  {
    id: 9,
    title: "Bug Tracker",
    icon: "./vite.svg",
    link: "bug-tracker-link",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Getting Started",
    description: "Beginner's resources and guides",
    icon: "./vite.svg",
    items: category1Items,
  },
  {
    id: 2,
    name: "Documentation",
    description: "Detailed documentation and resources",
    icon: "./vite.svg",
    items: category2Items,
  },
  {
    id: 3,
    name: "Updates & Support",
    description: "Stay up-to-date with the latest news and support options",
    icon: "./vite.svg",
    items: category3Items,
  },
];
