
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const isDark = useRef(document.documentElement.classList.contains("dark"));
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.current = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticle = (p: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark.current ? "rgba(139, 92, 246, 0.5)" : "rgba(139, 92, 246, 0.3)";
      ctx.fill();
    };

    const connectParticles = (p1: Particle, p2: Particle) => {
      if (!ctx) return;
      
      const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
      const maxDist = 150;
      
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.strokeStyle = isDark.current 
          ? `rgba(139, 92, 246, ${1 - dist / maxDist})` 
          : `rgba(139, 92, 246, ${(1 - dist / maxDist) * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const updateParticles = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        drawParticle(p);
      });
      
      // Connect nearby particles
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          connectParticles(particles.current[i], particles.current[j]);
        }
      }
      
      animationRef.current = requestAnimationFrame(updateParticles);
    };

    const checkTheme = () => {
      isDark.current = document.documentElement.classList.contains("dark");
    };

    // Initialize
    resizeCanvas();
    createParticles();
    updateParticles();
    
    // Event listeners
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-network"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
