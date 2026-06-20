/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ExpandableImage from "./ExpandableImage";
import ExpandableVideo from "./ExpandableVideo";
import MagnifierImage from "./MagnifierImage";
import { projects } from "@/lib/projects";

const B = "/case-studies/ask-the-ordinary";

export default function AskTheOrdinaryCaseStudy() {
  const published = projects.filter((p) => p.status === "published" && p.category !== "creative");
  const idx = published.findIndex((p) => p.slug === "ask-the-ordinary");
  const next = published[(idx + 1) % published.length];

  return (
    <article className="pt-24 bg-white">

      {/* ── Back link ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-4 mb-10">
        <AnimatedSection>
          <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
            All Work
          </Link>
        </AnimatedSection>
      </div>

      {/* ── Title + meta ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5 font-sans">The Ordinary</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-tight mb-5">
            Chatbot Design for a Global Skincare Brand
          </h1>
          <p className="text-lg text-stone leading-relaxed mb-10">
            Designing for conversation: what a system says, how it recovers, how it stays on-brand. A skill that only matters more as AI becomes the interface.
          </p>
          <div className="border-t border-border mb-8" />
          <div className="grid grid-cols-2 md:flex md:gap-x-10 gap-y-5">
            <Meta label="Team" value="Myself + 1" />
            <Meta label="What I did" value="Conversational UX Design · Research · Prototyping" />
            <Meta label="Skills" value="Research · Training Data · Sample Scripting · Bot Personality Design · Prototyping" />
            <Meta label="Tools" value="VoiceFlow · Figma · Miro · Google Suite" />
          </div>
        </AnimatedSection>
      </div>

      {/* ── Cover ── */}
      <AnimatedSection>
        <ExpandableImage
          src={`${B}/cover.png`}
          alt="The Ordinary skincare chatbot on a pink background"
          containerClassName="w-full overflow-hidden mb-20"
          containerStyle={{ aspectRatio: "3.6" }}
          imgClassName="-mt-[4.7%]"
        />
      </AnimatedSection>

      {/* ── The Challenge ── */}
      <div id="overview" className="max-w-3xl mx-auto px-6 md:px-10 mb-8">
        <AnimatedSection>
          <Label>The Challenge</Label>
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Skincare can feel overwhelming, especially for beginners.
          </h2>
          <p className="text-base text-stone leading-relaxed">
            <span className="bg-[#F0518C]/10 text-ink px-0.5 py-0.5 rounded-sm">Buyers who don&apos;t understand what they&apos;re looking at don&apos;t buy.</span>{" "}On The Ordinary&apos;s site, that means decoding product names, cross-referencing ingredients, and figuring out a routine before adding anything to cart. We wanted to close that gap and turn curious visitors into confident ones.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Motion graphic ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16">
        <AnimatedSection>
          <ExpandableVideo
            src={`${B}/cover.mov`}
            containerClassName="rounded-2xl overflow-hidden w-full relative"
            containerStyle={{ aspectRatio: "14/9" }}
            videoClassName="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatedSection>
      </div>

      {/* ── HMW ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <div className="border-l-4 border-[#F0518C] pl-6 py-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#F0518C]/70 font-sans mb-3">How might we</p>
            <p className="text-xl md:text-2xl font-sans font-medium text-ink leading-snug">
              Help users confidently navigate The Ordinary&apos;s product line and build routines that feel personalized, while staying true to the brand&apos;s science-driven voice?
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Solution ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <SectionLabel label="The Solution" />
          <p className="text-base text-stone leading-relaxed mb-8">
            The answer was a chatbot that actually knew the products. Three focused flows:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Skin Concern Routing", desc: "Users describe their skin and the bot routes them to the right products." },
              { num: "02", title: "Routine Building", desc: "Step-by-step guidance using The Ordinary's Prep, Treat, Seal method." },
              { num: "03", title: "Ingredient Education", desc: "Plain-language explanations of what each ingredient does and why it matters." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-[#F0518C]/10 rounded-2xl p-6 flex flex-col gap-3">
                <span className="text-[11px] tracking-[0.2em] font-sans text-[#F0518C]/70">{num}</span>
                <p className="text-ink font-medium text-sm leading-snug">{title}</p>
                <p className="text-stone text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Voice First ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <SectionLabel label="Defining the Voice" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Does this sound like The Ordinary?
          </h2>
          <p className="text-base text-stone leading-relaxed mb-8">
            The Ordinary sits at the affordable end of the market with high scientific credibility. That combination has a specific voice, and the bot needed to match it on every message. I defined the personality before writing a single script: informative, knowledgeable, professional, inclusive.
          </p>
          <ExpandableImage
            src={`${B}/brand-positioning.png`}
            alt="Brand positioning scale"
            containerClassName="rounded-3xl overflow-hidden mb-3"
          />
          <p className="text-xs text-stone leading-relaxed">
            Minimal personification. Helpful, knowledgeable, the Ordinary logo as its only face.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Scoping ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <SectionLabel label="Scoping the Flows" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Research shows users often don&apos;t know what a bot can do, which leads to abandoned sessions.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-4">
            The &quot;gulf of envisioning,&quot; an HCI concept, describes the cognitive distance between a user&apos;s goal and their ability to formulate a prompt that gets them there. Three named entry points are the answer: they make the possible paths visible before users have to ask.
          </p>
          <ExpandableImage
            src={`${B}/scoping-overview.avif`}
            alt="Scoping overview framework"
            containerClassName="overflow-hidden rounded-lg mb-8 w-full"
            containerStyle={{ aspectRatio: "2.4" }}
            imgClassName="h-full object-cover object-right"
          />
          <p className="text-base text-stone leading-relaxed mb-8">
            Not every input lands cleanly. Users go off-script, ask questions outside scope, or combine intents the bot wasn&apos;t trained to handle. Escape hatches are the design response to that: deliberate exit routes mapped into the flow.
          </p>
          <MagnifierImage
            src={`${B}/flow-chart.png`}
            alt="Full conversation flow diagram"
            containerClassName="rounded-xl overflow-hidden"
            imgClassName="scale-[1.08]"
            zoom={3}
          />
        </AnimatedSection>
      </div>

      {/* ── Training Data ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
        <AnimatedSection>
          <SectionLabel label="The Language Problem" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            Users don&apos;t describe their skin the way dermatologists do.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-6">
            The training data work surprised me. I expected it to be mechanical: write the intents, list the utterances, done. Instead, it forced a more basic question: how do people actually talk about their skin? Not how they&apos;d phrase it on a form, but how they&apos;d text a friend.
          </p>

          <details className="group mb-14 border border-border rounded-2xl overflow-hidden">
            <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-4 bg-[#F0518C]/10 hover:bg-[#F0518C]/15 transition-colors">
              <span className="text-sm font-medium text-ink font-sans">Training Data Table</span>
              <ChevronDown size={16} strokeWidth={1.5} className="text-stone transition-transform group-open:rotate-180" />
            </summary>
            <div className="overflow-x-auto border-t border-border px-6 pt-4">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 pr-6 text-[10px] tracking-[0.15em] uppercase text-stone/50 font-sans font-normal whitespace-nowrap">Intent</th>
                    <th className="text-left pb-2 pr-6 text-[10px] tracking-[0.15em] uppercase text-stone/50 font-sans font-normal">Utterances</th>
                    <th className="text-left pb-2 text-[10px] tracking-[0.15em] uppercase text-stone/50 font-sans font-normal">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { intent: "DarkCircles_Concern", utterances: "I have dark circles · Dark circles · What do I do about my dark circles? · Darkness around my eyes · Pigmentation around the eyes · Hyperpigmentation around my eyes · Can you help me with dark circles? · Under eye hyperpigmentation · How to fix dark circles around my eyes?", response: "Dark circles can be caused by lack of sleep, stress, genetics, or allergies. Try our Most-Loved Set: Niacinamide 10% + Zinc 1%, Hyaluronic Acid 2% + B5, Caffeine Solution 5% + EGCG." },
                    { intent: "Puffiness_Concern", utterances: "Puffiness around eyes · Puffy eyes · I have swollen eyes because of allergies · How do I fix my under eye bags? · Need to fix eye bags · What causes puffiness? · I didn't get any sleep! How do I make my under eyes not swollen?", response: "Puffy eyes can be caused by aging, hereditary differences, allergies, fluid retention, trauma, or lack of sleep. Try our range of products that target puffiness and signs of aging around the eye." },
                    { intent: "More_Than_One_Concern", utterances: "I have dark circles and puffiness under my eyes · I have multiple concerns · My concerns are hyperpigmentation, dark circles, and dull skin · I have many concerns, should I list them all?", response: "Sorry! I can only help you with one concern at a time. Please tell me what your skin concern is." },
                    { intent: "Peptides_Info", utterances: "About peptides · Peptides · What exactly are peptides? · How do peptides help? · Do I need peptides in my skincare routine? · What are the benefits of using peptides?", response: "Peptides are short chains of amino acids which form the building blocks of structural proteins. They act as targeted molecules to help improve the look of concerns such as signs of aging and hair density." },
                    { intent: "More_Than_One_Ingredient", utterances: "Can you tell me about peptides and ceramides? · Peptides and ceramides · I want to know about multiple ingredients · Peptides, ceramides, and niacinamide", response: "I'm sorry! I can only help you with one ingredient at a time. Let's talk about one ingredient you are curious about." },
                    { intent: "Proceed_Next", utterances: "Sure! · Yes · Yeah, tell me more · Tell me more · I'm interested · Sure why not", response: "Proceeds to next state." },
                    { intent: "Exit_Outro", utterances: "Bye · No thank you · No thanks · I'm good · Nope · I don't want to know more", response: "Glad to be of help! If you have any more questions or need further assistance, feel free to ask!" },
                    { intent: "Skincare_Experience_Beginner", utterances: "1 · Beginner · I'm a beginner · I don't know much · I'm new to this", response: "Hey newbie, let's take it back to basics. The 3 simple steps to building an effective routine are Prep, Treat, and Seal. Let's build your regimen by going through each of these steps." },
                    { intent: "Moisturizer_Type_Light", utterances: "Light moisturizer · I like moisturizers that are light in texture · Light weight · I don't like it sticky · I hate sticky moisturizer", response: "Sure! The Natural Moisturizing Factors + Beta Glucan would be perfect for you." },
                  ].map(({ intent, utterances, response }) => (
                    <tr key={intent} className="border-b border-border/40">
                      <td className="py-3 pr-6 text-ink font-mono align-top whitespace-nowrap">{intent}</td>
                      <td className="py-3 pr-6 text-stone align-top leading-relaxed">{utterances}</td>
                      <td className="py-3 text-stone align-top leading-relaxed">{response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          <p className="text-base text-stone leading-relaxed mb-8">
            Sample scripting is how a conversational design gets stress-tested before it exists. Every script asked the same three questions: is the voice consistent, does the user have enough guidance to keep moving, and is there a real response for every input, even the ones you didn&apos;t anticipate.
          </p>

          <div className="flex flex-col gap-10">
            {[
              {
                img: `${B}/chat-beginner-intro.png`,
                alt: "Beginner routine intro",
                label: "Personality",
                text: "Scripts had to reflect the bot's voice so every message matched the brand users already knew.",
              },
              {
                img: `${B}/chat-treat-step.png`,
                alt: "Treat step explanation",
                label: "Turn-taking cues",
                text: "The bot needed to guide the conversation and signal what comes next, not just respond.",
              },
              {
                img: `${B}/chat-multiple-concerns.png`,
                alt: "Handling multiple concerns",
                label: "Responding to needs",
                text: "If no suitable answer existed, the script needed a redirect rather than a dead end.",
              },
            ].map(({ img, alt, label, text }) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <ExpandableImage src={img} alt={alt} containerClassName="rounded-2xl overflow-hidden" />
                <div>
                  <p className="text-sm font-medium text-ink mb-2">{label}</p>
                  <p className="text-sm text-stone leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

        </AnimatedSection>
      </div>

      {/* ── Rule-Based to AI ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-24">
        <AnimatedSection>
          <SectionLabel label="Why This Still Matters" />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-5">
            What I learned building a rule-based chatbot applies directly to how AI systems are designed today.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-8">
            When the system can&apos;t infer anything, you have to define everything. That discipline transfers directly to designing the guardrails, prompts, and fallbacks that make AI systems work.
          </p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="grid grid-cols-[1fr_2rem_1fr] gap-4">
                <p className="text-sm font-semibold text-ink font-sans">Rule-Based Chatbot</p>
                <div />
                <p className="text-sm font-semibold text-ink font-sans">AI Equivalent</p>
              </div>
            </div>
            {[
              { left: "Intent + utterance training data", right: "Prompt Engineering / Intent Classification" },
              { left: "Sample scripting with brand-matched responses", right: "Few-Shot Prompting + System Prompt Design" },
              { left: "Escape hatches + redirects for edge cases", right: "Guardrails + Fallback Behaviors" },
              { left: "Structured entry points + button options", right: "Retrieval-Augmented Generation (RAG)" },
            ].map(({ left, right }, i) => (
              <div key={i} className="grid grid-cols-[1fr_2rem_1fr] gap-4 items-center px-6 py-4 border-b border-border/50 last:border-0">
                <p className="text-sm text-stone leading-snug">{left}</p>
                <p className="text-[#F0518C] font-medium text-base">→</p>
                <p className="text-sm text-ink leading-snug">{right}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Prototype ── */}
      <div className="bg-[#F0518C]/15 py-20 mb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 mb-14">
          <AnimatedSection>
            <Label>The Prototype</Label>
            <h2 className="text-2xl md:text-[36px] font-sans font-medium text-ink leading-tight">
              Three core flows, prototyped in VoiceFlow.
            </h2>
          </AnimatedSection>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: `${B}/demo-1.mov`, label: "Skin Concern Routing", sub: "Tell it what's bothering you" },
                { src: `${B}/demo-2.mov`, label: "Routine Builder", sub: "Prep, Treat, Seal" },
                { src: `${B}/demo-3.mov`, label: "Ingredient Education", sub: "Understand what you're using" },
              ].map(({ src, label, sub }) => (
                <div key={src} className="flex flex-col gap-2">
                  <ExpandableVideo
                    src={src}
                    containerClassName="bg-white rounded-2xl shadow-md overflow-hidden"
                  />
                  <p className="text-sm font-semibold text-ink font-sans leading-tight mt-2">{label}</p>
                  <p className="text-sm text-stone leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Reflections ── */}
      <div id="reflections" className="max-w-3xl mx-auto px-6 md:px-10 mb-32">
        <AnimatedSection>
          <SectionLabel label="Shaping My Approach" noBorder />
          <h2 className="text-3xl md:text-[36px] font-sans font-medium text-ink leading-tight mb-6">
            The technology changed. The design problems didn&apos;t.
          </h2>
          <p className="text-base text-stone leading-relaxed mb-4">
            Rule-based logic forces every decision into the open. What I designed around here: multiple intents, vague input, no graceful fallback. All still unsolved in most AI chatbots.
          </p>
          <p className="text-base text-stone leading-relaxed mb-4">
            What I took from this: the voice, the pacing, and the recovery paths determine whether a user trusts a conversational system. Not the model underneath. An LLM can handle more intents. It still needs someone to decide what the system should sound like, what it should stay out of, and what happens when it gets it wrong.
          </p>
          <p className="text-base text-stone leading-relaxed">
            If I returned to this project, I&apos;d layer in AI to expand what the bot can understand and pair guided entry points with free-text input. But the personality definition, the scoping decisions, and the fallback logic would stay.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Next project ── */}
      {next && (
        <div className="border-t border-border">
          <Link href={`/work/${next.slug}`} className="group max-w-6xl mx-auto px-6 md:px-10 py-12 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-stone/50 mb-1 font-sans">Next</p>
              <p className="text-lg font-sans font-medium text-ink group-hover:text-accent transition-colors">{next.title}</p>
            </div>
            <ArrowLeft size={20} strokeWidth={1.5} className="rotate-180 text-stone group-hover:text-accent transition-colors shrink-0" />
          </Link>
        </div>
      )}
    </article>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4 font-sans">{children}</p>
  );
}

function SectionLabel({ label, noBorder }: { label: string; noBorder?: boolean }) {
  return (
    <div className={`${noBorder ? "mb-6" : "border-t border-border pt-10 mb-6"}`}>
      <span className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans">{label}</span>
    </div>
  );
}

function Meta({ label, value, nowrap }: { label: string; value: string; nowrap?: boolean }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-stone/50 mb-1">{label}</p>
      <p className={`text-ink text-sm${nowrap ? " whitespace-nowrap" : ""}`}>{value}</p>
    </div>
  );
}
