"use client";

export function GraphicalDetectionVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm p-4 relative overflow-hidden">
      <div className="flex items-center gap-4 text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
        <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>INPUT</span>
        <span className="text-[var(--border)]">→</span>
        <span className={isHovered ? "text-[var(--accent)] transition-colors" : ""}>DETECTION</span>
        <span className="text-[var(--border)]">→</span>
        <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>OUTPUT</span>
      </div>

      {/* Abstract Grid Output */}
      <div className="mt-8 grid grid-cols-4 gap-2 opacity-50">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`w-8 h-8 border ${
              isHovered && (i === 2 || i === 5) 
                ? 'border-[var(--accent)] bg-[var(--accent)]/10' 
                : 'border-[var(--border)]'
            } transition-all duration-500`} 
          />
        ))}
      </div>
    </div>
  );
}

export function DnsVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm p-4">
      <div className="flex flex-col items-center gap-3 text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
        <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>DOMAIN</span>
        <div className={`w-px h-6 ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
        <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>AWS ROUTE 53</span>
        <div className={`w-px h-6 ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
        <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>TARGET</span>
      </div>
    </div>
  );
}

export function CloudVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm p-4 relative overflow-hidden">
      <div className="flex items-center justify-center gap-6 text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase w-full">
        <div className="flex flex-col gap-2 items-center">
          <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
          <span className={isHovered ? "text-[var(--text-primary)]" : ""}>TRIGGER</span>
        </div>
        
        <div className={`w-12 h-px ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
        
        <div className="flex flex-col gap-2 items-center">
          <div className="w-4 h-4 border border-[var(--text-tertiary)] flex items-center justify-center rotate-45">
            <div className="w-1 h-1 bg-[var(--text-tertiary)]" />
          </div>
          <span className={isHovered ? "text-[var(--text-primary)]" : ""}>AIRFLOW</span>
        </div>

        <div className={`w-12 h-px ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
        
        <div className="flex flex-col gap-2 items-center">
          <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'} transition-colors`} />
          <span className={isHovered ? "text-[var(--text-primary)]" : ""}>GCP</span>
        </div>
      </div>
    </div>
  );
}

export function TranscoderVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm p-4">
      <div className="flex flex-col gap-6 w-full max-w-[200px]">
        <div className="flex justify-between items-center text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
          <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>INPUT</span>
          <span className="text-[var(--border)]">→</span>
          <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>OUTPUT</span>
        </div>
        
        <div className="flex items-center gap-1 h-8 justify-center">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className={`w-1 bg-[var(--border)] transition-all duration-300 ${isHovered ? 'bg-[var(--accent)]' : ''}`}
              style={{ 
                height: isHovered 
                  ? `${20 + (i * 7) % 80}%` 
                  : `${20 + Math.sin(i) * 20}%` 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DatadogVisual({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm p-4">
      <div className="flex items-start text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
        <div className="flex flex-col">
          <span className={`mb-4 ${isHovered ? "text-[var(--text-primary)] transition-colors" : ""}`}>SERVICE</span>
          <div className="flex">
            <div className={`w-4 h-full border-l border-b ${isHovered ? 'border-[var(--accent)]' : 'border-[var(--border)]'} rounded-bl-sm mr-2`} />
            <div className="flex flex-col gap-3">
              <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>METRICS</span>
              <span className={isHovered ? "text-[var(--text-primary)] transition-colors" : ""}>LOGS</span>
              <span className={isHovered ? "text-[var(--accent)] transition-colors" : ""}>ALERTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
