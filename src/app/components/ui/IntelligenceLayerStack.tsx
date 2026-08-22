import { useState } from "react";
import { 
  Database, Network, Cpu, Bot, Wrench, CheckCircle, 
  ArrowUpRight, Sparkles, Shield, ChevronRight, Server 
} from "lucide-react";
import intelligenceLayerImg from "../../../assets/ai/intelligence_layer.jpg";

export function IntelligenceLayerStack() {
  const [selectedLayer, setSelectedLayer] = useState<number>(3);

  const layers = [
    {
      id: 5,
      tier: "Tier 6",
      name: "Automated Business Actions",
      tagline: "Deterministic execution across enterprise endpoints",
      desc: "Transforms reasoned plans into instant business transactions: CRM record updates, client responses, billing triggers, calendar allocations, and team notifications.",
      icon: CheckCircle,
      color: "from-emerald-500/20 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      technologies: ["Webhook Triggers", "GraphQL Mutations", "REST Dispatchers", "Audit Event Logs"],
      stat: "100% Deterministic State Transitions"
    },
    {
      id: 4,
      tier: "Tier 5",
      name: "Tool & API Execution Mesh",
      tagline: "Safe, sandboxed environment for agent tool usage",
      desc: "Provides strict runtime boundaries, rate-limiting, authentication injection, and error recovery when agents call external software or databases.",
      icon: Wrench,
      color: "from-cyan-500/20 to-cyan-600/10",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
      technologies: ["Sandboxed Containers", "OAuth Brokers", "Rate Limiters", "Circuit Breakers"],
      stat: "<12ms Tool Call Dispatch"
    },
    {
      id: 3,
      tier: "Tier 4",
      name: "Multi-Agent Reasoning Engine",
      tagline: "Autonomous goal decomposition, tool planning & reflection",
      desc: "Specialized agents (e.g. Sales Agent, Triage Agent, Decision Extractor) collaborate, challenge intermediate assumptions, and synthesize optimal execution paths.",
      icon: Bot,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      technologies: ["ReAct Loops", "Hierarchical State Machine", "Consensus Verification", "Self-Correction"],
      stat: "Multi-Step Autonomous Planning"
    },
    {
      id: 2,
      tier: "Tier 3",
      name: "Foundation & Fine-Tuned AI Models",
      tagline: "High-parameter language & multimodal intelligence",
      desc: "Orchestrates top-tier foundation models combined with domain-specific fine-tuned weights optimized for enterprise reasoning and zero hallucinations.",
      icon: Cpu,
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
      technologies: ["OpenAI / Gemini / Anthropic", "LoRA Adapters", "Quantized Local Inference", "Structured JSON Schemas"],
      stat: "Zero-Shot Schema Adherence"
    },
    {
      id: 1,
      tier: "Tier 2",
      name: "Context Synthesis & Memory Graph",
      tagline: "Semantic vector retrieval + temporal relational graph",
      desc: "Maintains real-time context of organizational memory, past meetings, customer purchase histories, and document hierarchies so AI never acts blind.",
      icon: Network,
      color: "from-violet-500/20 to-violet-600/10",
      borderColor: "border-violet-500/30",
      textColor: "text-violet-400",
      technologies: ["GraphRAG", "Vector Embeddings", "Qdrant / Milvus", "Temporal Knowledge Graphs"],
      stat: "Sub-Second Cross-Silo Retrieval"
    },
    {
      id: 0,
      tier: "Tier 1",
      name: "Disparate Business Data Ingestion",
      tagline: "Real-time connectors for raw organizational data",
      desc: "Pulls structured and unstructured data from WhatsApp, Slack, Zoom transcripts, PostgreSQL databases, legacy ERPs, and document drives.",
      icon: Database,
      color: "from-slate-500/20 to-slate-600/10",
      borderColor: "border-slate-500/30",
      textColor: "text-slate-300",
      technologies: ["Kafka / Event Hubs", "CDC (Debezium)", "Audio Transcription Pipeline", "OCR Ingestion"],
      stat: "Universal Enterprise Connectors"
    }
  ];

  const current = layers.find(l => l.id === selectedLayer) || layers[3];
  const Icon = current.icon;

  return (
    <div className="w-full rounded-2xl glass-panel p-6 lg:p-10 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Architecture Diagram & Stack */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">System Architecture</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">The Muvonark Intelligence Layer</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
              6-Tier Topology
            </span>
          </div>

          <div className="space-y-2.5">
            {layers.map((layer) => {
              const LIcon = layer.icon;
              const isSelected = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border ${
                    isSelected 
                      ? `bg-gradient-to-r ${layer.color} ${layer.borderColor} shadow-lg shadow-blue-500/10 translate-x-2` 
                      : "bg-[#090E1C]/80 border-white/5 hover:border-white/20 hover:bg-[#0E172C]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-black/40 ${layer.textColor}`}>
                      <LIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono uppercase font-bold ${layer.textColor}`}>{layer.tier}</span>
                        <span className="text-sm font-semibold text-white">{layer.name}</span>
                      </div>
                      <span className="text-xs text-slate-400 hidden sm:inline">{layer.tagline}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "rotate-90 text-white" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Layer Deep Dive & Conceptual Visual */}
        <div className="lg:col-span-5 space-y-5">
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] w-full bg-[#050811]">
            <img 
              src={intelligenceLayerImg} 
              alt="The Muvonark Intelligence Layer Architecture Blueprint" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090E1C] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-cyan-300 bg-black/70 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
              Active Focus: {current.tier} — {current.name}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#090E1C] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-black/50 ${current.textColor} border ${current.borderColor}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-mono font-bold uppercase ${current.textColor}`}>{current.tier} Deep Dive</span>
                <h4 className="text-lg font-bold text-white">{current.name}</h4>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {current.desc}
            </p>

            <div className="pt-2 border-t border-white/10">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Core Technologies:</span>
              <div className="flex flex-wrap gap-1.5">
                {current.technologies.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Guaranteed Capability:</span>
              <span className={current.textColor}>{current.stat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
