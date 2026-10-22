import { BrainCircuit, Database, FileText, Mic } from 'lucide-react';

/** Illustrations for the additional projects, using the existing card art styles. */
export default function NewProjectVisual({ kind }: { kind: string }) {
  if (kind === 'voice') {
    return (
      <div className="project-art data-art" aria-hidden="true">
        <div className="data-flow">
          <Mic size={40} />
          <svg width="150" height="64" viewBox="0 0 150 64" fill="none">
            {[12, 24, 40, 22, 52, 36, 60, 30, 46, 18, 32, 14].map((height, i) => (
              <path key={i} d={`M${9 + i * 12} ${(64 - height) / 2}v${height}`} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            ))}
          </svg>
          <FileText size={32} />
        </div>
        <div className="art-caption">RECORD / TRANSCRIBE / COLLECT FEEDBACK</div>
      </div>
    );
  }

  const visual = kind === 'agentic'
    ? { first: 'brief', firstLabel: 'CLIENT INPUT', second: 'demo', secondLabel: 'PERSONALIZED', caption: 'LANGGRAPH / CLIENT DEMO GENERATION', Icon: BrainCircuit }
    : kind === 'etl'
      ? { first: 'S3', firstLabel: 'EXTRACT', second: 'SQL', secondLabel: 'LOAD', caption: 'PYTHON / VALIDATE / POSTGRESQL', Icon: Database }
      : { first: 'RAG', firstLabel: 'DOCUMENTS', second: 'SQL', secondLabel: 'DATABASE', caption: 'ALLOYDB AI / HYBRID QUERY ROUTING', Icon: BrainCircuit };

  return (
    <div className="project-art data-art" aria-hidden="true">
      <div className="data-flow">
        <div>{visual.first}<small>{visual.firstLabel}</small></div>
        <visual.Icon size={32} />
        <div>{visual.second}<small>{visual.secondLabel}</small></div>
      </div>
      <div className="art-caption">{visual.caption}</div>
    </div>
  );
}
