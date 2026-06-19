// ─────────────────────────────────────────────────────────────────────────────
// Tend Journal — case study copy
// Edit this file to change any text on /work/tend.
// ─────────────────────────────────────────────────────────────────────────────

export const header = {
  kicker: "Tend — An AI Journaling App",
  title: "Designing & Shipping an AI Journaling App, Solo",
  description:
    "A journaling app where every entry grows a plant. Designed, built, and shipped independently through conversation with AI.",
  meta: {
    team: "Solo",
    whatIDid: "Vibecoding · UX Writing",
    skills: "Vibecoding · UX Writing / Content Design",
    tools: "Claude Code",
  },
};

export const cover = {
  subtitle: "Every entry grows a plant",
  appUrl: "https://tend-journal.netlify.app",
  appUrlLabel: "tend-journal.netlify.app",
};

export const sections = {
  idea: {
    kicker: "The Idea",
    heading: "A notebook that fills up",
    body: [
      "There's something satisfying about watching a physical notebook fill up. The weight of it changing, the pages getting used. It's a tangible record of showing up. I wanted to recreate that feeling digitally.",
      "Not a streak counter. Not a badge. Something alive. What if every entry grew a plant? What if the more you write, the more your garden flourishes?",
    ],
  },

  precision: {
    kicker: "Precision",
    heading: "The output is only as precise as the intent behind your input",
    body: "The first version had a bug. The plant grew as you typed but didn't shrink when you deleted words, and stopped growing past a certain height. I knew the problem. I just didn't know how to describe it precisely enough for an AI to fix it. \"The plant doesn't work right\" got me nowhere.",
    chat: [
      {
        role: "user" as const,
        text: "The plant isn't growing correctly. Can you fix it?",
      },
      {
        role: "claude" as const,
        text: "Could you describe specifically what behavior you're seeing versus what you expect?",
      },
      {
        role: "user" as const,
        text: "Two things. When I delete words the plant doesn't shrink. It stays at the max height it reached. And when I hit my word goal the plant blooms, but if I keep writing past it nothing changes. It should keep adding extra blooms and leaves the more I write beyond the target.",
      },
      {
        role: "claude" as const,
        text: "Got it. The first issue is the growth function tracking a high-water mark instead of current word count, so I'll fix it so height always reflects what's actually written. For the second, the bloom is triggered once when the goal is reached and then locked. I'll update it to keep layering, adding blooms and leaf nodes proportional to how far beyond the goal you've written.",
      },
    ],
    quote: "The output is only as precise as the intent behind your input.",
  },

  desktopVsMobile: {
    kicker: "Desktop vs Mobile",
    heading: "Different contexts, different interactions",
    body: [
      "On desktop, hovering over a garden entry reveals its details. On mobile, that interaction doesn't exist. I built a tap-to-open popup instead. Same content, completely different pattern for each context.",
      "Shipping surfaced decisions like this constantly. The keyboard pushing the growing plant offscreen the moment someone started typing. Having to rethink where the plant lives while the entry is in progress. None of it showed up in design. All of it showed up the first time I actually used it.",
    ],
    desktopLabel: "Desktop · Hover to reveal",
    mobileLabel: "Mobile · Tap to reveal",
  },

  modes: {
    kicker: "Two Writing Modes",
    heading: "Not everyone journals toward a specific word count",
    body: "The first version had one mode. Set a target, write toward it. Then I talked to people who journal. One said she would never set a word goal. It would feel like homework. The AI didn't surface this. I did. AI can execute on a use case. Surfacing the right use case requires you.",
    goalMode: {
      label: "Goal mode",
      heading: "Write Toward a Target",
      body: "Set a daily word count. Your plant grows with every word and blooms when you hit your goal.",
    },
    freeMode: {
      label: "Free write mode",
      heading: "Just Write",
      body: "No target. Your plant blooms when you decide you're done. Completeness is self-defined.",
    },
    quote: "AI can execute on a use case. Surfacing the right use case requires you.",
  },

  pwa: {
    kicker: "Idea to Product",
    heading: "The barrier between idea and product collapsed",
    body: [
      "I deployed Tend as a Progressive Web App. A PWA is a website that installs on your phone like a native app. You visit the URL, tap Add to Home Screen, and it's done. No App Store. No approval process. No build pipeline. It gets an icon, opens full-screen, and can work offline. The browser handles all of it.",
      "For Tend, this meant I could go from finished build to something anyone could install in minutes. The first time I put it on my own home screen it felt different from any prototype I had ever made. Prototypes simulate the feeling of a product. This was the product.",
    ],
    productCard: {
      eyebrow: "Live product",
      name: "Tend Journal",
      description:
        "An installable PWA. No App Store, no gatekeeper, no engineer to wait on. Designed and built solo through conversation with AI.",
      linkLabel: "Visit tend-journal.netlify.app",
      url: "https://tend-journal.netlify.app",
    },
  },
};

export const learned = {
  kicker: "Shaping My Approach",
  heading: "What I Learned from Building with AI",
  items: [
    {
      n: "01",
      heading: "Precision is the skill",
      body: "Vague prompts produce vague results. Learning to articulate exactly what you want, under what condition, with what current behavior, is a new design competency.",
    },
    {
      n: "02",
      heading: "You still have to identify the use case",
      body: "AI executes a well-defined use case with speed. It cannot surface the right use case. That still requires empathy, conversation, and your own judgment.",
    },
    {
      n: "03",
      heading: "Speed changes what you attempt",
      body: "A shorter feedback loop has tradeoffs. At scale, things get missed. But as a design tool for shipping-ready prototypes, the speed is an asset. When the distance between idea and built thing collapses, you attempt things that would never make a roadmap. Speed changes not just how fast you work, but what you're willing to try.",
    },
  ],
};

export const cta = {
  eyebrow: "Live product",
  url: "https://tend-journal.netlify.app",
  urlLabel: "tend-journal.netlify.app",
  subtext: "Install it on your home screen. No App Store required.",
};
