import { Component, ElementRef, Input, NgZone, OnDestroy, ViewChild, afterNextRender, inject } from '@angular/core';

interface Particle { x: number; y: number; px: number; py: number; speed: number; life: number; age: number; hot: boolean; }

/**
 * Décor « énergie » : champ de flux de particules (orange / vert / blanc) qui s'écoule
 * à travers la zone. Le curseur crée des tourbillons. Pause hors écran.
 */
@Component({
  selector: 'app-energy-canvas',
  standalone: true,
  host: { class: 'absolute inset-0 block pointer-events-none overflow-hidden', 'aria-hidden': 'true' },
  template: `<canvas #cv class="absolute inset-0 w-full h-full block"></canvas>`
})
export class EnergyCanvasComponent implements OnDestroy {
  @Input() density = 1;
  @Input() interactive = true;
  @ViewChild('cv', { static: true }) cv!: ElementRef<HTMLCanvasElement>;

  private zone = inject(NgZone);
  private host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private ctx!: CanvasRenderingContext2D;
  private parts: Particle[] = [];
  private w = 0;
  private h = 0;
  private dpr = 1;
  private t = 0;
  private raf = 0;
  private running = false;
  private visible = true;
  private reduced = false;
  private ready = false;
  private mouse = { x: -9999, y: -9999 };
  private io?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const ctx = this.cv.nativeElement.getContext('2d');
      if (!ctx) return;
      this.ctx = ctx;
      this.ready = true;
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.resize();
      this.zone.runOutsideAngular(() => {
        addEventListener('resize', this.onResize, { passive: true });
        if (this.interactive) addEventListener('pointermove', this.onMove, { passive: true });
        document.addEventListener('visibilitychange', this.onVisibility);
        this.io = new IntersectionObserver(e => {
          this.visible = e[0].isIntersecting;
          this.visible ? this.start() : this.stop();
        });
        this.io.observe(this.host);
      });
      if (this.reduced) for (let i = 0; i < 140; i++) this.frame();
    });
  }

  ngOnDestroy() {
    this.stop();
    if (!this.ready) return;
    this.io?.disconnect();
    removeEventListener('resize', this.onResize);
    removeEventListener('pointermove', this.onMove);
    document.removeEventListener('visibilitychange', this.onVisibility);
  }

  private onResize = () => this.resize();
  private onVisibility = () => (document.hidden ? this.stop() : this.visible && this.start());
  private onMove = (e: PointerEvent) => {
    const r = this.host.getBoundingClientRect();
    this.mouse.x = e.clientX - r.left;
    this.mouse.y = e.clientY - r.top;
  };

  private spawn(p?: Particle): Particle {
    const o = p ?? ({} as Particle);
    o.x = o.px = Math.random() * this.w;
    o.y = o.py = Math.random() * this.h;
    o.speed = 0.7 + Math.random() * 1.1;
    o.life = 140 + Math.random() * 220;
    o.age = 0;
    o.hot = Math.random() < 0.24;
    return o;
  }

  private resize() {
    const r = this.host.getBoundingClientRect();
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.w = r.width;
    this.h = r.height;
    const c = this.cv.nativeElement;
    c.width = this.w * this.dpr;
    c.height = this.h * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const n = Math.max(40, Math.min(170, Math.round((this.w * this.h) / 8000 * this.density)));
    this.parts = Array.from({ length: n }, () => this.spawn());
  }

  private start() {
    if (this.running || this.reduced) return;
    this.running = true;
    this.raf = requestAnimationFrame(this.loop);
  }

  private stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
  }

  private loop = () => {
    if (!this.running) return;
    this.frame();
    this.raf = requestAnimationFrame(this.loop);
  };

  private angle(x: number, y: number): number {
    const t = this.t;
    return (
      Math.sin(x * 0.0032 + t * 0.35) * 0.9 +
      Math.cos(y * 0.0045 - t * 0.28) * 0.8 +
      Math.sin((x + y) * 0.002 + t * 0.15) * 0.5 -
      0.18
    );
  }

  private frame() {
    const { ctx, w, h } = this;
    this.t += 0.012;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.09)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineCap = 'round';

    for (const p of this.parts) {
      let a = this.angle(p.x, p.y);
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const d = Math.hypot(dx, dy);
      if (d < 170) a = Math.atan2(dy, dx) + (Math.PI / 2) * (1 - d / 170) * 1.6 + a * (d / 170);
      p.px = p.x;
      p.py = p.y;
      p.x += Math.cos(a) * p.speed * 1.6;
      p.y += Math.sin(a) * p.speed * 1.6;
      p.age++;

      const fade = Math.sin(Math.min(p.age / p.life, 1) * Math.PI);
      ctx.lineWidth = p.hot ? 1.8 : 1.1;
      ctx.strokeStyle = p.hot ? `rgba(247,148,29,${0.85 * fade})` : `rgba(220,235,255,${0.4 * fade})`;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();

      if (p.age > p.life || p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30) this.spawn(p);
    }
  }
}
