export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 rounded-full blur-[100px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(199, 100%, 50%) 0%, transparent 70%)",
          animation: "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite"
        }}
      />
      <div 
        className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 rounded-full blur-[80px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(180, 100%, 50%) 0%, transparent 70%)",
          animation: "pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse"
        }}
      />
    </div>
  );
}
