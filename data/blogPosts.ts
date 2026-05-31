// data/blogPosts.ts
// Metadata for blog posts. Payloads live in blogPosts.generated.json.

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  readingTime: string; // e.g. "5 min read"
  externalUrl?: string;
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "lonely-nights-and-fighting-souls",
    title: "Lonely Nights and Fighting Souls",
    date: "2025-03-01",
    category: "Writing",
    tags: ["personal", "reflection"],
    summary: "A personal essay on solitude, resilience, and what it means to keep going.",
    readingTime: "3 min read",
    externalUrl: "https://sjai58066.substack.com/p/lonely-nights-and-fighting-souls",
  },
  {
    slug: "the-b-side-of-brilliance",
    title: "The B-Side of Brilliance: Understanding the Unseen",
    date: "2025-02-01",
    category: "Writing",
    tags: ["personal", "essay"],
    summary: "Exploring the hidden side of brilliance — the struggles, doubts, and quiet work that never makes the highlight reel.",
    readingTime: "4 min read",
    externalUrl: "https://sjai58066.substack.com/p/the-b-side-of-brilliance-understanding",
  },

  {
    slug: "Monte Carlo Simulation in Python",
    title: "From Casino to Code: Understanding Monte Carlo Simulation in Python",
    date: "2025-04-28",
    category: "Writing",
    tags: ["Python", "Monte Carlo"],
    summary: "Exploring Monte Carlo Simulation as a technique that uses repeated random experiments to estimate probabilities and solve uncertain problems. It introduces the idea of stochastic models, where results vary because of randomness, and explains why simulations become reliable through the Law of Large Numbers.",
    readingTime: "6 min read",
    externalUrl: "https://medium.com/@sanjaykeerthi1415/from-casino-to-code-understanding-monte-carlo-simulation-in-python-70328151ae47",
  },
];
