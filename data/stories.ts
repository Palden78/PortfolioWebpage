export type Story = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string[];
};

export const stories: Story[] = [
  {
    slug: "learning-to-build",
    title: "Learning to Build",
    description:
      "A reflection on why I started building software instead of simply learning how to code.",
    date: "Coming soon",
    category: "Learning",
    content: [
      "This is a placeholder for a future story.",
      "Write about how you first became interested in building software, what motivated you, and what you discovered along the way.",
      "You can replace these paragraphs with your own experiences whenever you are ready.",
    ],
  },

  {
    slug: "things-i-wish-i-knew-earlier",
    title: "Things I Wish I Knew Earlier",
    description:
      "Lessons, mistakes, and ideas that changed the way I think about learning.",
    date: "Coming soon",
    category: "Reflection",
    content: [
      "This is a placeholder for a future story.",
      "This could become a collection of lessons you learned through university, personal projects, work, or life.",
      "The goal is not to sound perfect. The interesting part is documenting what you actually experienced.",
    ],
  },

  {
    slug: "building-things-to-understand-them",
    title: "Building Things to Understand Them",
    description:
      "Why I often learn by building something rather than simply reading about it.",
    date: "Coming soon",
    category: "Engineering",
    content: [
      "This is a placeholder for a future story.",
      "You could talk about a project that taught you something you could not fully understand from theory alone.",
      "Explain what confused you, what you built, what broke, and what finally clicked.",
    ],
  },
];