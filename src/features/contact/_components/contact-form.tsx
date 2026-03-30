"use client";

import { useState, useEffect } from "react";
import { sendContactEmail } from "../actions/send-contact-email";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const lastSent = localStorage.getItem("last_sent_at");
    if (lastSent) {
      const now = Date.now();
      const storedTime = parseInt(lastSent, 10);
      const diff = Math.floor((now - storedTime) / 1000);
      if (diff < 60 && diff >= 0) {
        setCooldown(60 - diff);
      }
    }
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cooldown > 0) return;
    
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = await sendContactEmail(data);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
      localStorage.setItem("last_sent_at", Date.now().toString());
      setCooldown(60);
      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }
  }

  const isSubmitDisabled = status === "loading" || cooldown > 0 || status === "success";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            minLength={2}
            className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-foreground">Empresa <span className="text-muted-foreground text-xs font-normal">(opcional)</span></label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tech Corp"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          minLength={20}
          rows={4}
          className="flex w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          placeholder="Me gustaría hablar sobre un proyecto..."
        />
      </div>

      {/* Honeypot field */}
      <input 
        type="text" 
        name="website" 
        tabIndex={-1} 
        autoComplete="off"
        className="opacity-0 absolute w-0 h-0 pointer-events-none -z-10" 
      />

      {status === "error" && (
        <div className="text-sm text-destructive font-medium p-3 bg-destructive/10 rounded-md border border-destructive/20">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitDisabled}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 mt-2 w-full sm:w-auto self-start"
      >
        {status === "loading" && (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
            ¡Enviado!
          </>
        )}
        {status === "idle" && (
          cooldown > 0 ? `Espera ${cooldown}s` : "Enviar Mensaje"
        )}
        {status === "error" && "Reintentar Envío"}
      </button>
    </form>
  );
}
