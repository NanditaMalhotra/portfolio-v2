export type ProjectStatus = "published" | "coming-soon";
export type ProjectCategory = "product" | "research" | "creative";

export interface CaseStudySection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  shortDescription: string;
  year: string;
  role: string;
  team: string;
  duration: string;
  tools: string[];
  tags: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  coverColor: string;
  coverImage?: string; // path relative to /public
  coverVideo?: string; // path relative to /public, used instead of coverImage when set
  coverVideoPosition?: string; // CSS object-position, e.g. "50% 20%"
  coverImagePosition?: string; // CSS object-position for static cover image
  coverImageScale?: number; // scale multiplier, e.g. 1.08 to zoom in slightly
  coverFit?: "contain" | "cover";
  glowColor: string;
  overview?: string;
  challenge?: string;
  centralQuestion?: string;
  sections?: CaseStudySection[];
  outcomes?: string;
  lessons?: string;
  gallery?: string[]; // for visual/creative projects — ordered image paths
  galleryColumns?: number[]; // column split e.g. [3,3] = 2 cols 3 imgs each, [7] = 1 col
}

export const projects: Project[] = [
  {
    slug: "lumity",
    title: "Redesigning a Social Learning Platform, End-to-End",
    client: "Lumity",
    shortDescription:
      "Led an end-to-end redesign for Lumity to improve usability, visual consistency, and engagement, spanning research, architecture, usability testing, and design system.",
    year: "2024",
    role: "UX Designer",
    team: "Team of 4",
    duration: "16 weeks",
    tools: ["Figma", "FigJam", "UXtweak", "Useberry"],
    tags: ["Product Design", "UX Research", "Design Systems"],
    category: "product",
    status: "published",
    coverColor: "#6B3FD4",
    coverImage: "/covers/lumity.png",
    coverFit: "cover",
    coverImagePosition: "top",
    coverImageScale: 1.1,
    glowColor: "#D4A520",
    overview:
      "Lumity is an information-sharing platform for like-minded, growth-oriented learning communities. This project involved an end-to-end redesign of the application, with the goal of increasing usability, improving visual consistency, and building engagement through better exploration and community features.",
    challenge:
      "The original app struggled with fragmented navigation between personal learning and community features, inconsistent visuals and interaction patterns, overwhelming content interactions that hindered engagement, and a lack of unified spaces for note-taking, learning, and connection.",
    centralQuestion:
      "How might we transform Lumity into a unified, engaging platform that seamlessly connects personal learning and community experiences?",
    sections: [
      {
        heading: "Research & Ecosystem Mapping",
        body: "We employed a range of research methods to identify key focus areas. The most insightful takeaway came from an ecosystem map that revealed users exist in progressive engagement levels, starting as individuals, growing to explore community, and eventually actively contributing.",
      },
      {
        heading: "Three Core App Functions",
        body: "Product architecture revealed three distinct functions serving different engagement levels:",
        bullets: [
          "Personal Tracking: tools for organizing progress and content in the Library (novice users)",
          "Exploring Interests: discovering new topics and browsing specific content (growing users)",
          "Creating Community: actively engaging with others and contributing to discussions (power users)",
        ],
      },
      {
        heading: "Usability Testing",
        body: "We tested a mid-fidelity prototype with 4 users across core tasks. Three key issues emerged:",
        bullets: [
          "Media types looked too similar: users couldn't distinguish articles, books, podcasts, and videos",
          "Tabs on Home and Explore were missed, overlooked or misunderstood, leading to low engagement",
          "Category-based Explore felt rigid: users wanted more flexible, dynamic browsing",
        ],
      },
      {
        heading: "Design Iterations",
        body: "Testing made the redesign priorities clear. Each fix addressed a specific friction point:",
        bullets: [
          "Distinct shapes and icons per media type: instant recognition across content formats",
          "Stronger visual weight on tabs with descriptive labels: navigation becomes obvious",
          "Masonry-style Explore layout: replaces rigid categories with dynamic, open browsing",
        ],
      },
      {
        heading: "Design System",
        body: "With usability improvements in place, we created a design system defining Lumity's building blocks: colors, typography, and reusable components, ensuring the product could grow consistently beyond the prototype.",
      },
    ],
    outcomes:
      "The redesign created seamless navigation between personal and community spaces, established a consistent visual system, simplified complex workflows, and delivered a scalable design system ready for development handoff.",
    lessons:
      "Testing early and often was the most valuable lesson: small usability insights shaped the most impactful design changes. Building a design system reinforced the importance of scalability. This project deepened my ability to tell a clear product story through design.",
  },
  {
    slug: "ask-the-ordinary",
    title: "Chatbot Design for a Global Skincare Brand",
    client: "The Ordinary",
    shortDescription:
      "Designing for conversation: what a system says, how it recovers, how it stays on-brand. A skill that only matters more as AI becomes the interface.",
    year: "2023",
    role: "Conversational UX Designer",
    team: "Team of 2",
    duration: "3 weeks",
    tools: ["VoiceFlow", "Figma", "Miro", "Google Suite"],
    tags: ["Conversational UX", "AI Product Design", "Dialogue Design"],
    category: "product",
    status: "published",
    coverColor: "#F0F0F0",
    coverVideo: "/covers/ask-the-ordinary.mp4",
    glowColor: "#E01D51",
    overview:
      "The Ordinary has a complex product line that leaves many users overwhelmed. This project designed an end-to-end chatbot experience using conversational UX principles to simplify navigation, guide personalized skincare journeys, and stay true to The Ordinary's science-driven brand voice.",
    challenge:
      "Users struggled to understand how to build a routine, learn about ingredient benefits and side effects, and find products for specific skin concerns, all without meaningful guidance.",
    centralQuestion:
      "How might we help users confidently navigate The Ordinary's product line and build routines that feel personalized, while staying true to the brand's science-driven voice?",
    sections: [
      {
        heading: "Three Core Use Cases",
        body: "Research and brand analysis identified three primary user needs that shaped the chatbot's architecture:",
        bullets: [
          "Addressing Skin Concerns: guiding users from problem to targeted product recommendations",
          "Building a Skincare Routine: step-by-step routine construction for all skin types",
          "Ingredient Information: explaining science-backed ingredient benefits and interactions",
        ],
      },
      {
        heading: "Bot Personality & Voice",
        body: "Creating The Ordinary's chatbot was about translating science into something intuitive. We designed a personality that was knowledgeable but approachable, reflecting the brand's ethos of democratizing beauty science without intimidating jargon.",
      },
      {
        heading: "Dialogue Design",
        body: "Sample scripts, decision trees, and training data were developed to handle all three use cases with natural, branching dialogue. Edge cases and fallback flows were designed to keep users on track even when inputs were unexpected.",
      },
    ],
    outcomes:
      "A fully prototyped conversational experience covering all three use cases: distinct dialogue flows, a defined bot personality, and a content strategy grounded in The Ordinary's brand voice.",
    lessons:
      "Conversational UX requires thinking in flows, not screens. Designing for what users say, not just what they click, demands a different kind of empathy. The brand voice constraint was a creative forcing function that made the bot feel authentic.",
  },
  {
    slug: "bungee-accessibility",
    title: "Reimagining Digital Art Accessibility for Screen Reader Users, Through a Multisensory Experience",
    client: "Cooper Hewitt, Smithsonian Design Museum",
    shortDescription:
      "Cooper Hewitt's Bungee font tester redesigned for WCAG 2.2 compliance, then extended with AI-generated audio to translate its visual richness into sound.",
    year: "2023",
    role: "UX Designer",
    team: "Team of 5",
    duration: "3 weeks",
    tools: ["Figma", "FigJam", "AI Voice Generation"],
    tags: ["Accessibility", "WCAG 2.2", "Generative AI"],
    category: "research",
    status: "published",
    coverColor: "#3E9BAF",
    coverImage: "/covers/bungee.gif",
    coverFit: "cover",
    glowColor: "#7C3AED",
    overview:
      "Cooper Hewitt's Bungee Font Tester is a highly visual experience, one that completely excludes users with vision impairments. This project reimagined the tester as a multi-sensory, screen-reader-accessible experience that translates Bungee's playful typographic personality into sound.",
    challenge:
      "Typography testers are inherently visual. Bungee's unique layering, color interactions, and expressive personality have no equivalent in the audio experience provided by most screen readers.",
    centralQuestion:
      "How can we ensure that Bungee's dynamic typographic personality remains meaningful and accessible to users who rely on screen readers?",
    sections: [
      {
        heading: "The Scale of the Problem",
        body: "Accessibility gaps in typographic tools affect millions:",
        bullets: [
          "51.9M U.S. adults report some level of vision loss",
          "307,000 U.S. adults are completely blind",
          "2.2B people globally live with visual impairments",
        ],
      },
      {
        heading: "Cross-Sensory Translation",
        body: "The core challenge was mapping visual properties to auditory equivalents, translating color, layering, weight, and orientation into meaningful sound dimensions. AI voice generation tools were used to prototype and test audio outputs.",
      },
      {
        heading: "Accessibility Implementation",
        body: "The redesigned interface met WCAG 2.2 standards through:",
        bullets: [
          "Simplified controls with keyboard-focusable elements throughout",
          "Fully visible interface with preset color options for users with low vision",
          "Guided tutorial helping screen reader users navigate the experience",
          "Semantic HTML structure compatible with major screen readers",
        ],
      },
    ],
    outcomes:
      "A fully redesigned, WCAG 2.2-compliant Bungee Font Tester prototype that translates the font's visual character into an auditory experience, meaningful for screen reader users without diminishing it for sighted users.",
    lessons:
      "Accessibility design is not a checklist but a creative constraint that produces better design for everyone. Thinking cross-sensorially opened up new possibilities for how the tool communicates typographic personality.",
  },
  {
    slug: "tend",
    title: "Designing & Shipping an AI Journaling App, Solo",
    client: "Self-directed",
    shortDescription:
      "Took a GenAI-powered journaling concept from idea to live PWA: product design, AI integration, and frontend development handled independently.",
    year: "2024",
    role: "Product Designer & Developer",
    team: "Solo",
    duration: "Ongoing",
    tools: ["Figma", "React", "GenAI APIs"],
    tags: ["Product Design", "GenAI", "Shipped Product"],
    category: "product",
    status: "published",
    coverColor: "#E2EEF8",
    coverVideo: "/covers/tend.mp4",
    glowColor: "#16A34A",
    overview:
      "Tend is a daily journal where your writing becomes something living. Each entry grows into a digital plant. The more you write, the more your garden flourishes. A self-directed exploration of how generative AI can make creative habits feel meaningful and embodied.",
    challenge:
      "Journaling apps often feel like utilities, functional but not emotionally engaging. How might we make the act of writing feel alive, and give users a tangible sense of their own growth over time?",
    centralQuestion:
      "How can generative AI make a creative habit feel meaningful, not mechanical?",
    sections: [
      {
        heading: "Core Interaction Model",
        body: "Two modes give users agency over their journaling practice:",
        bullets: [
          "Write Towards a Goal: set a daily word target; your plant grows as you write and blooms when you hit it",
          "Just Write: no targets; your plant grows as you type and blooms when you decide you're done",
        ],
      },
      {
        heading: "The Garden",
        body: "Completed entries move to a personal garden where they accumulate over time, a visual, living archive of your writing practice. The garden makes consistency feel rewarding in a way that streaks and counters cannot.",
      },
    ],
    outcomes:
      "A live, installable PWA, designed, built, and shipped independently. Available at tend-journal.netlify.app.",
    lessons:
      "Shipping a product end-to-end as a designer changes how you think about constraints. Every design decision had to survive contact with implementation. The project deepened both product thinking and hands-on understanding of how AI interactions feel at a micro level.",
  },
  {
    slug: "toyota-pedestrian-safety",
    title: "Ethnographic Research in New York City for Toyota's Pedestrian Safety Initiative",
    client: "Toyota",
    shortDescription:
      "Ethnographic field research with Toyota North America, studying pedestrian behavior in NYC to challenge assumptions in urban safety system design.",
    year: "2023",
    role: "UX Researcher",
    team: "Individual",
    duration: "16 weeks",
    tools: ["Figma", "FigJam", "Panelfox"],
    tags: ["Ethnography", "UX Research", "Behavioral Research"],
    category: "research",
    status: "published",
    coverImage: "/covers/toyota-cover.jpg",
    coverFit: "cover",
    coverColor: "#F2EAE6",
    glowColor: "#EA580C",
    overview:
      "An ethnographic investigation examining jaywalking as both a safety concern and a cultural phenomenon, conducted through the lens of Toyota's Smart City Project. The research explored how pedestrian behavior, urban infrastructure, and safety systems interact in New York City.",
    challenge:
      "Smart city systems designed for pedestrian safety often treat human behavior as a variable to be optimized out, rather than as meaningful cultural practice worth understanding and designing around.",
    centralQuestion:
      "How might smart city design account for the cultural dimensions of pedestrian behavior, rather than treating jaywalking purely as a safety problem to eliminate?",
    sections: [
      {
        heading: "Research Approach",
        body: "// TODO: Add research methodology: observation sites, participant recruitment, analysis frameworks.",
      },
      {
        heading: "Key Findings",
        body: "// TODO: Add research findings and insights.",
      },
      {
        heading: "Design Implications",
        body: "// TODO: Add design recommendations for smart city and mobility systems.",
      },
    ],
    outcomes: "// TODO: Add research outcomes and deliverables.",
    lessons: "// TODO: Add reflections on the research process.",
  },
  {
    slug: "hookd-magazine",
    title: "Creative Direction for an Independent Fashion Magazine",
    client: "Self-directed",
    shortDescription:
      "Founded and art-directed Hook'd: editorial design, visual identity, and art direction across two published issues.",
    year: "2022",
    role: "Creative Director",
    team: "Solo",
    duration: "Ongoing",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    tags: ["Creative Direction", "Editorial Design", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#3A7AAD",
    coverImage: "/covers/hookd.png",
    coverFit: "cover",
    glowColor: "#D91A69",
    overview: "Hook'd is an independent fashion magazine I founded and art-directed across two published issues. The project spans brand identity, editorial layout, photography art direction, and print production. Each issue explores a distinct visual world — Issue 1 is bold and graphic; Issue 2 is softer, more cinematic.",
    gallery: [
      "/play/hookd-1.png",
      "/play/hookd-2.png",
      "/play/hookd-3.png",
      "/play/hookd-spread-orange.jpg",
      "/play/hookd-spread-pink.jpg",
      "/play/hookd-spread-purple.jpg",
      "/play/hookd-spread-yellow.jpg",
      "/play/hookd-spread-green.jpg",
    ],
  },
  {
    slug: "fashion-exhibition",
    title: "Fashion Exhibition",
    client: "Self-directed",
    shortDescription:
      "3D immersive exhibition environment for fashion display — hexagonal display pods with dramatic lighting and sculptural shoe forms.",
    year: "2022",
    role: "Visual Designer",
    team: "Solo",
    duration: "4 weeks",
    tools: ["Blender", "Photoshop"],
    tags: ["3D Design", "Exhibition Design", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#D4A8A0",
    coverImage: "/play/fashion-exhibition-cover.png",
    coverFit: "cover",
    glowColor: "#A86050",
    overview: "A concept for an immersive fashion exhibition space designed around hexagonal display pods. Mannequins and sculptural forms are rendered in a soft, dusty-pink environment — the architecture becoming as much a part of the collection as the pieces themselves.",
    gallery: [
      "/play/fashion-p1.png",
      "/play/fashion-p2.png",
      "/play/fashion-p3.png",
      "/play/fashion-p4.png",
      "/play/fashion-p5.png",
      "/play/fashion-p6.png",
    ],
    galleryColumns: [3, 3],
  },
  {
    slug: "indian-futurism",
    title: "Indian Futurism",
    client: "Self-directed",
    shortDescription:
      "An editorial magazine exploring reclamation of culture and decolonising fashion through bold typography and vivid South Asian imagery.",
    year: "2022",
    role: "Art Director",
    team: "Solo",
    duration: "6 weeks",
    tools: ["Adobe InDesign", "Photoshop", "Illustrator"],
    tags: ["Editorial Design", "Art Direction", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#E04E1F",
    coverImage: "/play/indian-futurism-cover.png",
    coverFit: "cover",
    glowColor: "#FFCC00",
    overview: "A self-directed editorial exploring what it means to reclaim and celebrate South Asian cultural identity in fashion. The magazine challenges Western appropriation narratives through intentional image-making, typography, and layout that centers the gaze of the subject.",
    gallery: [
      "/play/futurism-p1.jpg",
      "/play/futurism-p2.jpg",
      "/play/futurism-p3.jpg",
      "/play/futurism-p4.jpg",
      "/play/futurism-p5.jpg",
      "/play/futurism-p6.jpg",
      "/play/futurism-p7.jpg",
    ],
    galleryColumns: [7],
  },
  {
    slug: "kendra-scott",
    title: "Kendra Scott",
    client: "Self-directed",
    shortDescription:
      "3D product display concept — brass and pearl jewelry stands rendered with a minimal, editorial sensibility.",
    year: "2022",
    role: "Visual Designer",
    team: "Solo",
    duration: "3 weeks",
    tools: ["Blender", "Photoshop"],
    tags: ["Product Design", "3D Design", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#C8B98A",
    coverImage: "/play/kendra-scott-cover.png",
    coverFit: "cover",
    glowColor: "#C8A97A",
    overview: "A 3D product display concept reimagining how Kendra Scott jewelry could be presented in a retail context. The brass T-bar stands with pearl and sculptural earrings were rendered in a clean, elevated environment designed to feel editorial rather than commercial.",
    gallery: [
      "/play/kendra-p1.jpg",
      "/play/kendra-p2.jpg",
      "/play/kendra-p3.jpg",
      "/play/kendra-p4.jpg",
    ],
    galleryColumns: [2, 2],
  },
  {
    slug: "pyala-chai",
    title: "Pyala Chai",
    client: "Self-directed",
    shortDescription:
      "Brand identity and packaging design for an artisan chai brand — three blends, each with botanical patterns and a hand-crafted feel.",
    year: "2022",
    role: "Brand Designer",
    team: "Solo",
    duration: "4 weeks",
    tools: ["Illustrator", "Photoshop", "Figma"],
    tags: ["Brand Identity", "Packaging Design", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#C9604A",
    coverImage: "/play/pyala-f.png",
    coverFit: "cover",
    glowColor: "#4A90C9",
    overview: "Pyala (cup) Chai is a conceptual artisan tea brand built around three signature blends. The identity uses warm, earthy tones with hand-drawn botanical surface patterns — each box colorway tied to its blend character. The goal was a brand that felt both heritage-rooted and shelf-worthy.",
    gallery: [
      "/play/pyala-a.png",
      "/play/pyala-f.png",
      "/play/pyala-d.png",
      "/play/pyala-e.png",
      "/play/pyala-b.png",
      "/play/pyala-c.png",
    ],
    galleryColumns: [3, 3],
  },
  {
    slug: "fragrance-bottle",
    title: "Fragrance Bottle",
    client: "Self-directed",
    shortDescription:
      "3D concept for a luxury fragrance bottle — an orb-and-sphere form in white ribbed glass with illustrated surface explorations.",
    year: "2022",
    role: "Visual Designer",
    team: "Solo",
    duration: "3 weeks",
    tools: ["Blender", "Illustrator", "Photoshop"],
    tags: ["Product Design", "3D Design", "Visual Design"],
    category: "creative",
    status: "published",
    coverColor: "#E8E4DE",
    coverImage: "/play/fragrance-bottle-cover.png",
    coverFit: "contain",
    glowColor: "#C0B090",
    overview: "A speculative fragrance bottle exploring form through the language of high-end perfumery. The primary concept is a ribbed orb in white glass with a spherical stopper, paired with illustrated surface pattern studies in a gold-and-line aesthetic.",
    gallery: [
      "/play/fragrance-p1.png",
      "/play/fragrance-p2.png",
      "/play/fragrance-p3.png",
      "/play/fragrance-p4.png",
      "/play/fragrance-p5.png",
      "/play/fragrance-p6.png",
      "/play/fragrance-p7.png",
    ],
    galleryColumns: [4, 3],
  },
  {
    slug: "furniture-design",
    title: "Furniture Design",
    client: "Self-directed",
    shortDescription:
      "Conceptual lounge chair exploring organic and industrial forms — brushed metal and translucent resin in a continuous flowing curve.",
    year: "2021",
    role: "Industrial Designer",
    team: "Solo",
    duration: "4 weeks",
    tools: ["Blender", "Rhino", "Photoshop"],
    tags: ["Industrial Design", "3D Design", "Product Design"],
    category: "creative",
    status: "published",
    coverColor: "#B0B0B0",
    coverImage: "/play/furniture-design-cover.jpg",
    coverFit: "cover",
    glowColor: "#808080",
    overview: "A lounge chair concept bridging industrial precision and organic softness. The seat shell is a continuous curve in brushed gunmetal, while the back transitions into a translucent hammered resin form — the contrast between materials creating visual tension and tactile interest.",
    gallery: [
      "/play/furniture-p1.jpg",
      "/play/furniture-p2.jpg",
      "/play/furniture-p3.jpg",
      "/play/furniture-p4.jpg",
      "/play/furniture-p5.jpg",
    ],
    galleryColumns: [3, 2],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProductProjects(): Project[] {
  return projects.filter((p) => p.category === "product");
}

export function getResearchProjects(): Project[] {
  return projects.filter((p) => p.category === "research");
}

export function getCreativeProjects(): Project[] {
  return projects.filter((p) => p.category === "creative");
}
