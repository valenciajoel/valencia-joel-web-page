export function AuroraBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {/* Primary cyan orb — large, very blurred for atmospheric depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] opacity-[0.13] rounded-full blur-[220px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(199, 100%, 50%) 0%, hsl(199, 100%, 50%, 0.4) 40%, transparent 75%)",
          animation: "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
      {/* Secondary teal orb — offset, extra blur to soften the section border */}
      <div
        className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.07] rounded-full blur-[180px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(180, 100%, 50%) 0%, hsl(180, 100%, 50%, 0.3) 40%, transparent 75%)",
          animation: "pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse",
        }}
      />
    </div>
  );
}
