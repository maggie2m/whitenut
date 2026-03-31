"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#FF6B35","#FFB830","#00D4AA","#0A84FF","#7C3AED","#FF2D78"];

interface Particle {
  x:number; y:number; vx:number; vy:number; r:number; color:string; alpha:number;
  reset(w:number,h:number):void; update(w:number,h:number):void; draw(ctx:CanvasRenderingContext2D):void;
}

function mkParticle(w:number,h:number):Particle {
  const p:Particle = {
    x:0,y:0,vx:0,vy:0,r:0,color:"",alpha:0,
    reset(W,H){ this.x=Math.random()*W; this.y=Math.random()*H; this.vx=(Math.random()-.5)*.5; this.vy=(Math.random()-.5)*.5; this.r=Math.random()*2+.5; this.color=COLORS[Math.floor(Math.random()*COLORS.length)]; this.alpha=Math.random()*.5+.6; },
    update(W,H){ this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset(W,H); },
    draw(ctx){ ctx.save(); ctx.globalAlpha=this.alpha; ctx.fillStyle=this.color; ctx.shadowBlur=20; ctx.shadowColor=this.color; ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fill(); ctx.restore(); },
  };
  p.reset(w,h); return p;
}

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({x:-9999,y:-9999});

  useEffect(()=>{
    const canvas = ref.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;

    let animId:number;
    const ps:Particle[] = [];

    const resize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    for(let i=0;i<180;i++) ps.push(mkParticle(canvas.width, canvas.height));

    const drawLines = () => {
      const W=canvas.width, H=canvas.height;
      for(let i=0;i<ps.length;i++) for(let j=i+1;j<ps.length;j++){
        const dx=ps[i].x-ps[j].x, dy=ps[i].y-ps[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){ ctx.save(); ctx.globalAlpha=(1-d/100)*.12; ctx.strokeStyle=ps[i].color; ctx.lineWidth=.6; ctx.beginPath(); ctx.moveTo(ps[i].x,ps[i].y); ctx.lineTo(ps[j].x,ps[j].y); ctx.stroke(); ctx.restore(); }
        void H;
      }
    };

    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ps.forEach(p=>{ p.update(canvas.width,canvas.height); p.draw(ctx); });
      drawLines();
      animId=requestAnimationFrame(animate);
    };
    animate();

    const interval = setInterval(()=>{
      ps.forEach(p=>{ const dx=p.x-mouse.current.x, dy=p.y-mouse.current.y, d=Math.sqrt(dx*dx+dy*dy); if(d<120){ p.vx+=(dx/d)*.08; p.vy+=(dy/d)*.08; } });
    },16);

    const onMouse = (e:MouseEvent) => { mouse.current={x:e.clientX,y:e.clientY}; };
    window.addEventListener("mousemove", onMouse);

    return ()=>{ cancelAnimationFrame(animId); clearInterval(interval); window.removeEventListener("resize",resize); window.removeEventListener("mousemove",onMouse); };
  },[]);

  return <canvas ref={ref} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
}
