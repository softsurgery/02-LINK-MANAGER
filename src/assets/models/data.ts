import { Category, Item } from "../api/types";

const category1Items: Item[] = [
  {
    id: 1,
    title: "Getting Started Guide",
    icon: "getting-started-icon",
    link: "getting-started-link",
  },
  {
    id: 2,
    title: "User Manual",
    icon: "user-manual-icon",
    link: "user-manual-link",
  },
  { id: 3, title: "FAQs", icon: "faqs-icon", link: "faqs-link" },
];

const category2Items: Item[] = [
  {
    id: 4,
    title: "Video Tutorials",
    icon: "video-tutorials-icon",
    link: "video-tutorials-link",
  },
  {
    id: 5,
    title: "Documentation",
    icon: "documentation-icon",
    link: "documentation-link",
  },
  {
    id: 6,
    title: "Support Forum",
    icon: "support-forum-icon",
    link: "support-forum-link",
  },
];

// Dummy items for Category 3
const category3Items: Item[] = [
  {
    id: 7,
    title: "Latest Updates",
    icon: "latest-updates-icon",
    link: "latest-updates-link",
  },
  {
    id: 8,
    title: "Release Notes",
    icon: "release-notes-icon",
    link: "release-notes-link",
  },
  {
    id: 9,
    title: "Bug Tracker",
    icon: "bug-tracker-icon",
    link: "bug-tracker-link",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Getting Started",
    description: "Beginner's resources and guides",
    icon: "getting-started-category-icon",
    items: category1Items,
  },
  {
    id: 2,
    name: "Documentation",
    description: "Detailed documentation and resources",
    icon: "documentation-category-icon",
    items: category2Items,
  },
  {
    id: 3,
    name: "Updates & Support",
    description: "Stay up-to-date with the latest news and support options",
    icon: "updates-support-category-icon",
    items: category3Items,
  },
];
