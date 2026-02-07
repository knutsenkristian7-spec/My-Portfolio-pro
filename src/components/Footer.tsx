import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/60">
            <span>© 2026 Artur Abdusametov</span>
          </div>

          <div className="flex items-center gap-2 text-white/60">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          <div className="text-white/60">
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
