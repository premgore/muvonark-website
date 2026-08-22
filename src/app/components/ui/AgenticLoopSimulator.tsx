import { useState, useEffect } from "react";
import { 
  Bot, Target, Compass, Terminal, Eye, RefreshCw, 
  CheckCircle2, Play, Pause, ArrowRight, Sparkles 
} from "lucide-react";
import agenticImg from "../../../assets/ai/agentic_ai.jpg";

export function AgenticLoopSimulator() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const loopSteps = [
    {
      id: 0,
      phase: "01. Goal Ingestion",
      title: "Objective Defined",
      desc: "Agent receives high-level business objective: 'Qualify lead from WhatsApp, fetch invoice history from ERP, and generate personalized proposal.'",
      icon: Target,
      tag: "Input Parsing",
      log: "[Ingest] Goal: 'Autonomous Lead Conversion & Context Sync'"
    },
    {
      id: 1,
      phase: "02. Context Synthesis",
      title: "Environment & Memory Retrieval",
      desc: "Agent queries vector memory and relational graph to understand past interactions, pricing constraints, and client history.",
      icon: Compass,
      tag: "Memory Query",
      log: "[Context] Retrieved 3 past interactions + current catalog pricing"
    },
    {
      id: 2,
      phase: "03. Dynamic Planning",
      title: "Task Decomposition",
      desc: "Synthesizes multi-step dependency tree: 1) Verify company domain 2) Query credit limit 3) Draft custom quotation.",
      icon: Bot,
      tag: "ReAct Planning",
      log: "[Plan] 3-step execution graph constructed with rollback safety"
    },
    {
      id: 3,
      phase: "04. Tool & API Execution",
      title: "Dispatching Actions",
      desc: "Calls external ERP REST API and HubSpot CRM via sandboxed executor with strict token permissions.",
      icon: Terminal,
      tag: "Tool Calling",
      log: "[Execute] POST /api/erp/quote_estimate -> 200 OK (Invoice #9482)"
    },
    {
      id: 4,
      phase: "05. Observe & Self-Correct",
      title: "Evaluating Outcome",
      desc: "Validates tool output against constraints. If budget exceeds threshold, agent autonomously triggers human-in-the-loop review.",
      icon: Eye,
      tag: "Verification",
      log: "[Observe] Output matches enterprise schema with 99.8% confidence"
    },
    {
      id: 5,
      phase: "06. Goal Completed",
      title: "Objective Achieved",
      desc: "Delivers WhatsApp response to client, logs deal in CRM, and schedules follow-up alert in team calendar.",
      icon: CheckCircle2,
      tag: "Success State",
      log: "[Done] Lead qualified, quote delivered, CRM synchronized"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopSteps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, loopSteps.length]);

  const current = loopSteps[activeStep];
  const Icon = current.icon;

  return (
    <div className="w-full rounded-2xl glass-panel p-6 lg:p-10 border border-white/10 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase font-bold">
              Research & In Development
            </span>
            <span className="text-xs text-slate-400 font-mono">Autonomous Execution Loop</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Beyond Chatbots: How Agentic AI Actually Works
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pause Sim</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Auto Play</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Comparison Grid: Traditional vs GenAI vs Agentic AI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-4 rounded-xl bg-[#090E1C] border border-white/5 space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase">01. Traditional Software</div>
          <div className="text-sm font-semibold text-white">Deterministic & Static</div>
          <div className="p-2 rounded bg-black/40 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            User <ArrowRight className="w-3 h-3 text-slate-600" /> Software <ArrowRight className="w-3 h-3 text-slate-600" /> Static Output
          </div>
          <p className="text-xs text-slate-400">Fixed rules. Fails instantly on unexpected business variations.</p>
        </div>

        <div className="p-4 rounded-xl bg-[#090E1C] border border-white/5 space-y-2">
          <div className="text-xs font-mono text-blue-400 uppercase">02. Generative AI</div>
          <div className="text-sm font-semibold text-white">Prompt-Response Paradigm</div>
          <div className="p-2 rounded bg-black/40 text-xs font-mono text-blue-300 flex items-center gap-1.5">
            User <ArrowRight className="w-3 h-3 text-blue-500" /> Prompt <ArrowRight className="w-3 h-3 text-blue-500" /> LLM Text
          </div>
          <p className="text-xs text-slate-400">Generates answers, but cannot take actions or interact with systems.</p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-cyan-500/40 space-y-2 relative shadow-lg shadow-cyan-500/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 uppercase font-bold">03. Agentic AI (Muvonark)</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div className="text-sm font-semibold text-white">Autonomous Multi-Step Action</div>
          <div className="p-2 rounded bg-black/60 text-xs font-mono text-cyan-300 flex items-center gap-1">
            Goal <ArrowRight className="w-3 h-3 text-cyan-400" /> Plan <ArrowRight className="w-3 h-3 text-cyan-400" /> Tools <ArrowRight className="w-3 h-3 text-cyan-400" /> Execute
          </div>
          <p className="text-xs text-cyan-200/80">Understands goals, uses software tools, observes outcomes, and completes workflows.</p>
        </div>
      </div>

      {/* Interactive Loop Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left: Step Buttons */}
        <div className="lg:col-span-6 space-y-2.5">
          {loopSteps.map((step) => {
            const StIcon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsPlaying(false);
                }}
                className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                  isSelected 
                    ? "bg-cyan-500/15 border-cyan-400 text-white shadow-md shadow-cyan-500/10" 
                    : "bg-[#090E1C] border-white/5 hover:border-white/20 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-cyan-400 text-black font-bold" : "bg-white/5 text-slate-400"}`}>
                    <StIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold">{step.phase}</span>
                      <span className="text-sm font-bold text-white">{step.title}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5">
                  {step.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Active Step Inspector & Conceptual Architecture */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/9] w-full bg-[#050811]">
            <img 
              src={agenticImg} 
              alt="Agentic AI Autonomous Workflow Cycle" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090E1C] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono bg-black/80 px-3 py-2 rounded-lg border border-white/10 backdrop-blur-md">
              <span className="text-cyan-400 font-bold">{current.phase}</span>
              <span className="text-slate-400">{current.tag}</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#090E1C] border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
              <Icon className="w-5 h-5" />
              <span>{current.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.desc}
            </p>
            <div className="p-2.5 rounded-lg bg-black/60 font-mono text-[11px] text-emerald-400 border border-emerald-500/20 overflow-x-auto">
              <code>{current.log}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
