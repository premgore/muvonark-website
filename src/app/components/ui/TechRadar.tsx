import { useState } from "react";
import { Cpu, Terminal, Server, Cloud, Database, Shield, Layers, Code2 } from "lucide-react";

export function TechRadar() {
  const [activeCategory, setActiveCategory] = useState<string>("ai");

  const categories = [
    { id: "ai", label: "AI, LLMs & Agents", icon: Cpu },
    { id: "backend", label: "Backend & Systems", icon: Server },
    { id: "frontend", label: "Frontend & Interfaces", icon: Code2 },
    { id: "data", label: "Data & Memory", icon: Database },
    { id: "cloud", label: "Cloud & Reliability", icon: Cloud },
    { id: "security", label: "Security & Guardrails", icon: Shield }
  ];

  const techStackData: Record<string, Array<{ name: string; status: "Adopted" | "Trial" | "Assess"; desc: string }>> = {
    ai: [
      { name: "OpenAI GPT-4o & o3", status: "Adopted", desc: "Complex reasoning and unstructured text synthesis" },
      { name: "Anthropic Claude 3.5 Sonnet", status: "Adopted", desc: "Agentic coding and tool use orchestration" },
      { name: "Google Gemini 2.0 Flash/Pro", status: "Adopted", desc: "Multimodal audio, video & large context ingestion" },
      { name: "LangGraph & ReAct Loops", status: "Adopted", desc: "Cyclic multi-agent state machines and workflows" },
      { name: "DeepSeek R1 / V3", status: "Trial", desc: "Open-weight reasoning models for local sovereign inference" },
      { name: "Llama 3.3 70B Quantized", status: "Trial", desc: "Self-hosted high-efficiency privacy deployments" }
    ],
    backend: [
      { name: "Python (FastAPI & AsyncIO)", status: "Adopted", desc: "High-throughput asynchronous AI endpoints" },
      { name: "Node.js & TypeScript", status: "Adopted", desc: "Enterprise application logic and real-time sockets" },
      { name: "Go (Golang)", status: "Adopted", desc: "Low latency streaming and tool execution proxy" },
      { name: "Java (Spring Boot 3)", status: "Adopted", desc: "Robust enterprise banking & ERP backbones" },
      { name: "gRPC & Protocol Buffers", status: "Trial", desc: "Microservice inter-communication with sub-millisecond serialization" }
    ],
    frontend: [
      { name: "React 19 & Next.js 15", status: "Adopted", desc: "Server components and interactive client portals" },
      { name: "TypeScript 5.x", status: "Adopted", desc: "End-to-end type safety across client and server" },
      { name: "Tailwind CSS v4", status: "Adopted", desc: "Modern utility-first responsive design tokens" },
      { name: "Framer Motion / Motion v12", status: "Adopted", desc: "Physics-based micro-interactions and transitions" },
      { name: "Vite 6", status: "Adopted", desc: "Instant HMR and optimized production bundling" }
    ],
    data: [
      { name: "PostgreSQL with pgvector", status: "Adopted", desc: "Relational integrity combined with vector embeddings" },
      { name: "Redis & Valkey", status: "Adopted", desc: "Sub-millisecond caching, rate-limiting, and pub/sub" },
      { name: "Qdrant Vector Engine", status: "Adopted", desc: "High-dimensional similarity search and payload filtering" },
      { name: "Apache Kafka / Redpanda", status: "Trial", desc: "Event-driven architecture and persistent logs" },
      { name: "ClickHouse", status: "Assess", desc: "Real-time analytics and audit trail telemetry" }
    ],
    cloud: [
      { name: "AWS (ECS, Lambda, RDS)", status: "Adopted", desc: "Enterprise cloud hosting and scalable compute" },
      { name: "Google Cloud Platform", status: "Adopted", desc: "Vertex AI, BigQuery, and Cloud Run" },
      { name: "Docker & Containerd", status: "Adopted", desc: "Hermetic environment sandboxing for tool execution" },
      { name: "GitHub Actions CI/CD", status: "Adopted", desc: "Automated test suites, security scans, and deployment" },
      { name: "Kubernetes (EKS/GKE)", status: "Trial", desc: "Autonomous scaling of agent worker swarms" }
    ],
    security: [
      { name: "Prompt Injection Guardrails", status: "Adopted", desc: "Input sanitization and dual-LLM verification" },
      { name: "OAuth 2.0 & JWT", status: "Adopted", desc: "Granular scoped API access for tool dispatch" },
      { name: "Role-Based Access Control", status: "Adopted", desc: "Multi-tenant tenant isolation and encrypted secrets" },
      { name: "Zero-Trust Agent Sandbox", status: "Trial", desc: "Isolated network egress for autonomous tool executions" }
    ]
  };

  const statusBadge = {
    Adopted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Trial: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    Assess: "bg-violet-500/10 text-violet-400 border-violet-500/30"
  };

  return (
    <div className="w-full rounded-2xl glass-panel p-6 lg:p-10 border border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Verified Radar</span>
          <h3 className="text-2xl font-bold text-white tracking-tight">Technology We Work With</h3>
          <p className="text-xs text-slate-400 mt-1">Only technologies currently in production or actively in development.</p>
        </div>

        <div className="flex flex-wrap gap-1.5 p-1 bg-[#0A1020] rounded-xl border border-white/10">
          {categories.map((c) => {
            const Icon = c.icon;
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected 
                    ? "bg-blue-600 text-white shadow" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStackData[activeCategory]?.map((tech, idx) => (
          <div 
            key={idx} 
            className="p-5 rounded-xl bg-[#090E1C] border border-white/5 hover:border-blue-500/30 hover:bg-[#0E172C] transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h4>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${statusBadge[tech.status]}`}>
                {tech.status}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {tech.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
