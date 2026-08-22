import { useParams, Link } from "react-router";
import { 
  Cpu, Sparkles, Bot, Workflow, Network, 
  ArrowLeft, ArrowRight, CheckCircle2, Terminal, Shield, Database 
} from "lucide-react";
import researchImg from "../../assets/ai/research.jpg";
import agenticImg from "../../assets/ai/agentic_ai.jpg";
import intelligenceImg from "../../assets/ai/intelligence_layer.jpg";
import engineeringImg from "../../assets/ai/engineering.jpg";
import { AgenticLoopSimulator } from "./ui/AgenticLoopSimulator";

interface TopicData {
  title: string;
  category: string;
  headline: string;
  leadParagraph: string;
  abstract: string;
  image: string;
  keyPillars: Array<{ title: string; desc: string }>;
  methodology: Array<{ step: string; title: string; detail: string }>;
  openQuestions: string[];
}

const topicsMap: Record<string, TopicData> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence Foundations",
    category: "Neural Architectures & Inference",
    headline: "Investigating Reasoning Limits & Sovereign Model Deployment",
    leadParagraph: "Modern foundation AI models possess impressive generalization capabilities, yet enterprise deployment demands high reliability, zero hallucinations, and cost-efficient latency.",
    abstract: "Our core AI research investigates how transformer attention mechanisms and mixture-of-experts (MoE) architectures perform across complex domain-specific tasks. We explore parameter-efficient fine-tuning (PEFT), low-rank adaptation (LoRA), and quantized local inference for sovereign, private enterprise environments.",
    image: researchImg,
    keyPillars: [
      { title: "Zero-Shot Schema Conformity", desc: "Enforcing strict typed output validation (JSON Schema/Pydantic) directly in token generation." },
      { title: "Quantization & Latency", desc: "Deploying 4-bit and 8-bit quantized models on dedicated enterprise edge nodes." },
      { title: "Context Window Optimization", desc: "Compressing long context prompts while retaining 99%+ needle-in-a-haystack retrieval accuracy." }
    ],
    methodology: [
      { step: "01", title: "Benchmark Construction", detail: "Creating real-world operational evaluation datasets derived from real business transactions." },
      { step: "02", title: "Parameter Adaptation", detail: "Applying LoRA adapters to open-weight models to benchmark against frontier proprietary APIs." },
      { step: "03", title: "Latency-Cost Optimization", detail: "Evaluating token generation efficiency under varying concurrency loads." }
    ],
    openQuestions: [
      "What is the mathematical threshold for self-correction vs external tool verification?",
      "How do open-weight reasoning models compare to closed-source frontier models in multi-hop entity resolution?"
    ]
  },
  "generative-ai": {
    title: "Generative AI & Context Synthesis",
    category: "GraphRAG & Knowledge Representation",
    headline: "Grounding Generative Models in Living Organizational Knowledge",
    leadParagraph: "Standard retrieval-augmented generation (RAG) fails when enterprise queries require multi-hop reasoning across temporal timelines and disjointed documents.",
    abstract: "We research GraphRAG systems that combine semantic vector embeddings with temporal knowledge graphs. By indexing entities, relationships, and chronological events, our synthesis engine allows generative models to answer complex organizational questions with zero hallucinations and verified source citations.",
    image: intelligenceImg,
    keyPillars: [
      { title: "Temporal Entity Linking", desc: "Tracking how project ownership, pricing, and agreements evolve chronologically." },
      { title: "Hybrid Vector + Graph Search", desc: "Combining dense vector cosine similarity with graph traversal algorithms." },
      { title: "Citation Attribution", desc: "Attaching precise line-level and timestamped source proofs to every synthesized statement." }
    ],
    methodology: [
      { step: "01", title: "Knowledge Ingestion", detail: "Extracting entities, relationships, and metadata from unstructured documents, chats, and audio." },
      { step: "02", title: "Graph Construction", detail: "Building an evolving RDF/Property graph with sub-second vector indexation." },
      { step: "03", title: "Context Assembly", detail: "Pruning and prioritizing relevant subgraphs within LLM context windows." }
    ],
    openQuestions: [
      "How do we maintain real-time graph updates without re-indexing massive historical vector collections?",
      "What graph pruning algorithms yield the highest factual accuracy in multi-document executive queries?"
    ]
  },
  "agentic-ai": {
    title: "Agentic AI & Multi-Step Reasoning",
    category: "Autonomous Systems & Plan Synthesis",
    headline: "Moving Beyond Chatbots to Autonomous Multi-Step Workflows",
    leadParagraph: "Traditional generative AI answers questions. Agentic AI understands high-level goals, decomposes tasks, invokes tools, observes outcomes, and self-corrects until completion.",
    abstract: "Our agentic AI research develops stateful execution loops combining ReAct architectures with hierarchical state machines. We design agents that can safely interact with production software, databases, and APIs within strictly enforced security boundaries.",
    image: agenticImg,
    keyPillars: [
      { title: "Dynamic Task Decomposition", desc: "Breaking broad objectives into directed acyclic dependency graphs (DAGs)." },
      { title: "Sandboxed Tool Dispatch", desc: "Executing REST and GraphQL mutations in isolated, rate-limited containers." },
      { title: "Environment Observation Loops", desc: "Evaluating response headers, DB states, and schema validity before progressing." }
    ],
    methodology: [
      { step: "01", title: "Goal Ingestion", detail: "Parsing ambiguous user objectives into formal constraint sets." },
      { step: "02", title: "Iterative Execution", detail: "Invoking tools and monitoring execution logs in real-time." },
      { step: "03", title: "Adaptive Recovery", detail: "Triggering automated rollbacks or human escalation if constraints fail." }
    ],
    openQuestions: [
      "How can agentic loops prevent infinite reasoning cycles on ambiguous failure modes?",
      "What formal verification methods ensure 100% safety when agents mutate production databases?"
    ]
  },
  "ai-agents": {
    title: "Autonomous Multi-Agent Swarms",
    category: "Distributed Agent Coordination",
    headline: "Coordinating Specialized Agent Swarms for Complex Operations",
    leadParagraph: "No single monolithic AI model can efficiently master triage, mathematical calculation, compliance, and user negotiation simultaneously.",
    abstract: "We explore multi-agent swarms where specialized micro-agents collaborate under explicit coordination protocols. By separating concerns (e.g. Sales Agent, Inventory Validator, Compliance Checker, Dispatcher), swarms achieve higher accuracy and modular reliability.",
    image: engineeringImg,
    keyPillars: [
      { title: "Specialized Role Separation", desc: "Assigning narrow, deeply tuned prompts and tools to individual sub-agents." },
      { title: "Consensus & Dispute Resolution", desc: "Enforcing dual-agent validation for high-stakes financial or legal mutations." },
      { title: "Shared Blackboard Memory", desc: "Synchronizing agent states through a shared, lock-safe memory fabric." }
    ],
    methodology: [
      { step: "01", title: "Agent Role Definition", detail: "Configuring system prompts, tool permissions, and guardrails for each agent." },
      { step: "02", title: "Inter-Agent Protocol", detail: "Defining structured messaging schemas for inter-agent communication." },
      { step: "03", title: "Orchestration & Audit", detail: "Logging every inter-agent exchange for full traceability and replayability." }
    ],
    openQuestions: [
      "What communication protocols minimize token overhead in high-density multi-agent negotiations?",
      "How do we mathematically guarantee deadlock prevention in circular multi-agent dependencies?"
    ]
  },
  "ai-automation": {
    title: "Deterministic & Probabilistic Automation",
    category: "Hybrid Workflow Architecture",
    headline: "Bridging Rigid Business Rules With Cognitive AI Reasoning",
    leadParagraph: "Enterprise operations require strict deterministic guarantees (payroll, tax calculation, inventory counts) alongside cognitive adaptability.",
    abstract: "Our hybrid automation research combines deterministic code execution (APIs, SQL transactions, rule engines) with probabilistic AI models (natural language parsing, intent recognition). This ensures absolute reliability where required, and flexible intelligence where needed.",
    image: intelligenceImg,
    keyPillars: [
      { title: "Deterministic Guardrails", desc: "Ensuring math, tax calculations, and database transactions are never generated via LLM hallucination." },
      { title: "Cognitive Ingestion", desc: "Using AI to parse messy inputs (PDFs, voice notes, WhatsApp chats) into pristine JSON." },
      { title: "Idempotent Execution", desc: "Ensuring repeated automated runs produce identical, verifiable outcomes without duplicate charges." }
    ],
    methodology: [
      { step: "01", title: "Boundary Partitioning", detail: "Separating tasks strictly into deterministic calculation vs probabilistic parsing." },
      { step: "02", title: "Schema Enforcement", detail: "Validating AI outputs against formal JSON schemas before passing to execution." },
      { step: "03", title: "Event Dispatch", detail: "Emitting immutable event logs for full enterprise compliance." }
    ],
    openQuestions: [
      "How do we automatically generate deterministic code from verified natural language workflow examples?",
      "What hybrid orchestration patterns maximize throughput for 100,000+ daily operational transactions?"
    ]
  }
};

export function ResearchTopicPage() {
  const { topic } = useParams<{ topic: string }>();
  const current = (topic && topicsMap[topic]) || topicsMap["artificial-intelligence"];

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-28 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6 mb-16">
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/research" className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Research Hub
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-slate-400 uppercase">{current.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              Research Whitepaper & Track
            </span>
            <h1 
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {current.title}
            </h1>
            <p className="text-lg text-cyan-200/90 font-medium">{current.headline}</p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{current.leadParagraph}</p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl glass-panel">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Research Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Abstract */}
        <div className="p-8 lg:p-10 rounded-3xl glass-panel border border-cyan-500/30 space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider">Research Abstract</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-mono">
            {current.abstract}
          </p>
        </div>

        {/* Key Pillars */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Core Theoretical & Technical Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.keyPillars.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR 0{i + 1}</span>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Experimental Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.methodology.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#090E1C] border border-white/5 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  {m.step}
                </div>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Simulator if Agentic */}
        {topic === "agentic-ai" && (
          <div className="pt-6">
            <AgenticLoopSimulator />
          </div>
        )}

        {/* Open Questions & Inquiries */}
        <div className="p-8 rounded-2xl bg-[#0A1224] border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
            Active Exploration & Open Questions
          </h3>
          <ul className="space-y-3">
            {current.openQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                <span className="text-cyan-400 font-bold mt-0.5">?</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Nav to Other Topics */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/research"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> All Research Domains
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/20"
          >
            Collaborate on Research →
          </Link>
        </div>
      </div>
    </div>
  );
}
