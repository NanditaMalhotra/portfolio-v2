// ─────────────────────────────────────────────────────────────────────────────
// Tend Journal — case study copy
// Edit this file to change any text on /work/tend.
// ─────────────────────────────────────────────────────────────────────────────

export const header = {
  kicker: "Self-directed · 2024",
  title: "Designing & Shipping an AI Journaling App, Solo",
  description:
    "A narrative about designing a real product through conversation with AI: the process, the friction, the breakthroughs, and what it revealed about design itself.",
  meta: {
    team: "Solo",
    whatIDid: "Product Design · Development",
    skills: "Product Design · GenAI Integration · Prototyping",
    tools: "Figma · React · Claude AI",
  },
  tags: ["Product Design", "GenAI", "Shipped Product", "Creative Technology"],
};

export const cover = {
  subtitle: "Every entry grows a plant",
  appUrl: "https://tend-journal.netlify.app",
  appUrlLabel: "tend-journal.netlify.app",
};

export const sections = {
  idea: {
    kicker: "01 · The Idea",
    heading: "A notebook that fills up",
    body: [
      "I've been journaling since January. There's something satisfying about watching a physical notebook fill up, the weight of it changing, the pages getting used. It's a tangible record of consistency, of showing up. I wanted to know if I could recreate that feeling digitally.",
      "Not a streak counter. Not a badge. Something that grew. Something alive.",
      "So I started describing it to Claude. Not a prompt, not a spec, just a conversation. What if every entry grew a plant? What if the more you write, the more your garden flourishes?",
    ],
    plantRowLabel: "Growth stages",
  },

  bug: {
    kicker: "02 · The Plant Bug",
    heading: "Precision as a design skill",
    body: [
      "The first version had a bug. The plant would grow as you typed, but if you deleted words, it wouldn't shrink. And once it hit a certain height, it stopped growing altogether, even if you kept writing.",
      "I knew the problem. I just didn't know how to describe it precisely enough for an AI to fix it. Saying \"the plant doesn't work right\" got me nowhere. I had to learn to articulate: under what condition, with what current behavior, and what the desired behavior should be instead.",
    ],
    chat: [
      {
        role: "user" as const,
        text: "The plant isn't growing correctly. Can you fix it?",
      },
      {
        role: "claude" as const,
        text: "I'd be happy to help! Could you describe specifically what behavior you're seeing versus what you expect? For example: does the plant stop growing at a certain point, or does it grow inconsistently?",
      },
      {
        role: "user" as const,
        text: "When the word count goes up, the plant grows. But when I delete words, the plant height doesn't decrease, it stays at the max it reached. And the plant stops growing once it reaches roughly 70% of the container height, even if I keep writing.",
      },
      {
        role: "claude" as const,
        text: "That's a clear description. Thank you. The issue is that the growth function is tracking a high-water mark instead of the current word count. I'll update it so plant height is always derived from the current word count relative to the target, not the maximum ever reached.",
      },
    ],
    quote: "The output is only as precise as the intent behind your input.",
  },

  mobile: {
    kicker: "03 · Mobile & the Keyboard",
    heading: "The problem that only existed in the real world",
    body: [
      "I designed the writing view on a desktop browser. It looked right. Then I deployed it and opened it on my phone for the first time.",
      "When the keyboard opened, the plant got pushed offscreen. The layout broke completely, the thing I was most proud of, invisible the moment someone started typing.",
      "Static design would never have surfaced this. Neither would resizing a browser window. The problem only existed when a real keyboard occupied 40% of a real screen on a real device. You have to ship to find it.",
    ],
    screenshot: {
      label: "Mobile writing view · keyboard open",
      caption:
        "The keyboard pushes content up. The plant needed to coexist with the writing area, not compete with it.",
    },
    bodyAfterScreenshot:
      "The solution was to make the plant a small ambient illustration in the corner of the writing area, present but not in the way. It became better design. Quieter. More honest about what the app was actually for.",
    quote:
      "The solution was obvious once I experienced the problem. It was invisible until then.",
  },

  modes: {
    kicker: "04 · Two Writing Modes",
    heading: "Not everyone journals toward a word count",
    body: [
      "The first version only had one mode: set a target, write toward it, hit the goal. But I kept thinking about how I actually journal. Some days I write two pages. Some days I write one sentence that I needed to say.",
      "I talked to a few people who journal. One of them said: \"I would never set a word goal. That would make it feel like homework.\"",
      "The AI didn't surface this. I did. The insight came from empathy and conversation, the same skills I use in any design process. I just had to ask the right person the right question.",
    ],
    goalMode: {
      label: "Goal mode",
      heading: "Write Toward a Target",
      body: "Set a daily word count. Your plant grows with every word. Reach your goal, and it blooms.",
      screenshotLabel: "Goal mode · writing view",
    },
    freeMode: {
      label: "Free write mode",
      heading: "Just Write",
      body: "No target. Your plant blooms the moment you decide you're done. Completeness is self-defined.",
      screenshotLabel: "Free write mode · writing view",
    },
    quote:
      "AI can execute on a use case once you've identified it. Surfacing the right use cases requires something different. It requires you.",
  },

  pwa: {
    kicker: "05 · The PWA Moment",
    heading: "The barrier between idea and product collapsed",
    body: [
      "I deployed Tend as a Progressive Web App. It meant anyone could install it on their home screen, no App Store, no approval process, no waiting.",
      "The first time I installed it on my own home screen, it felt different from any prototype I'd ever made. It had an icon. It opened full-screen. It behaved like an app, because it was one. Prototypes simulate the feeling of a product. This was the product.",
    ],
    productCard: {
      eyebrow: "Live product",
      name: "Tend Journal",
      description:
        "An installable PWA. No App Store, no gatekeeper, no engineer to wait on. Designed and built in days through conversation with AI.",
      linkLabel: "Visit tend-journal.netlify.app",
      url: "https://tend-journal.netlify.app",
    },
    quote: "The barrier between idea and product collapsed.",
  },

  communication: {
    kicker: "06 · Learning to Communicate",
    heading: "A new design skill: precise intent articulation",
    body: [
      "Early in the project, I would describe what I wanted in loose, intuitive terms. I'd say things like \"make it feel more alive\" or \"the plant should look better.\" The results were unpredictable.",
      "Over time, I learned that \"that's not what I meant\" was not the end of a design decision, it was the beginning of one. Every miscommunication forced me to articulate something I hadn't fully formed yet. The friction was productive.",
      "I started thinking of my prompts the way I think about a design brief: not just what I want, but why, under what conditions, and what it should feel like. The AI became a collaborator that revealed the gaps in my own thinking.",
    ],
    chat: [
      {
        role: "user" as const,
        text: "Make the plant animation feel more alive.",
      },
      {
        role: "claude" as const,
        text: "I can adjust the animation in several ways: smoother easing, subtle sway, particle effects, color shifts. Which direction feels right to you?",
      },
      {
        role: "user" as const,
        text: "I want the leaves to respond to new words being typed, like the plant is breathing. Not bouncing. More like a slow, organic exhale after each word.",
      },
      {
        role: "claude" as const,
        text: "Got it. A subtle scale pulse on the leaves triggered by each word, with a slow ease-out (around 800ms) so it feels like settling rather than reacting. I'll keep the stem still and only animate the leaf nodes.",
      },
    ],
    quote:
      "'That's not what I meant' is the beginning of a design decision, not the end of one.",
  },

  gardenScreenshot: {
    label: "Garden view · all entries",
    caption:
      "Completed entries accumulate in a shared garden, a visual archive of your writing practice.",
  },
};

export const lessons = {
  kicker: "Lessons Learned",
  heading: "Five things I know now that I didn't before",
  items: [
    {
      n: "01",
      heading: "Precision is the skill",
      body: "The output is only as precise as the intent behind your input. Vague prompts produce vague results. Learning to articulate exactly what you want, and why, is a new design competency.",
    },
    {
      n: "02",
      heading: "You still need to identify the use case",
      body: "AI can execute a well-defined use case with remarkable speed. It cannot surface the right use case. That still requires empathy, conversation, and your own judgment.",
    },
    {
      n: "03",
      heading: "Ship early, ship real",
      body: "The keyboard layout bug only existed on a real device with a real keyboard. Static prototypes simulate problems. Real deployment reveals them. The earlier you ship something real, the less you guess.",
    },
    {
      n: "04",
      heading: "Constraints are still generative",
      body: "The mobile constraint that moved the plant into the corner of the writing area produced better design than my original unconstrained version. Constraints force solutions you wouldn't have reached otherwise.",
    },
    {
      n: "05",
      heading: "The gap between designer and maker is closing",
      body: "I shipped a live, installable product without writing code. The barrier between idea and product has collapsed for designers willing to learn this new way of working. That changes what designers can do, and what they can own.",
    },
  ],
};

export const cta = {
  eyebrow: "Live product",
  url: "https://tend-journal.netlify.app",
  urlLabel: "tend-journal.netlify.app",
  subtext: "Install it on your home screen. No App Store required.",
};
