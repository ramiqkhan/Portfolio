import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrowserFrame } from '../ui';

// three.js ships in its own chunk so the headline renders first
const SculptureScene = lazy(() => import('./SculptureScene'));

const mq = (query) => typeof window !== 'undefined' && window.matchMedia(query).matches;

// Static CSS sculpture: shown while the 3D scene loads and as the
// fallback when WebGL is unavailable or reduced motion is requested.
function SculptureFallback({ hidden }) {
  return (
    <div className={`css-sculpture ${hidden ? "opacity-0 [animation-play-state:paused]" : "opacity-100"}`} aria-hidden="true">
      <span className="css-ring css-ring--outer" />
      <span className="css-ring css-ring--gold" />
      <span className="css-ring css-ring--inner" />
    </div>
  );
}

function StagePanel({ project, variant, index, caption }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit the ${project.title} live website (opens in a new tab)`}
      className={`stage-panel stage-panel--${variant} group`}
    >
      <div className={`stage-float stage-float--${variant}`}>
        {/* Back panel's caption sits above it so the sculpture never covers it */}
        <div className={`stage-lift flex gap-3 ${variant === 'back' ? 'flex-col-reverse' : 'flex-col'}`}>
          <BrowserFrame
            src={project.image}
            alt={`${project.title} homepage`}
            domain={project.domain}
            eager
            className="stage-frame"
          />
          <p className="flex items-baseline gap-3 whitespace-nowrap">
            <span className="label label-gold tabular-nums">{index}</span>
            <span className="min-w-0 truncate text-[13px] font-medium text-fg">{project.title}</span>
            <span className="hidden text-[12px] text-subtle sm:inline">— {caption}</span>
            <ArrowUpRight
              className="ml-auto h-3.5 w-3.5 text-subtle transition-colors duration-300 group-hover:text-gold"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </a>
  );
}

export default function HeroStage({ front, back }) {
  const stageRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [lite] = useState(() => mq('(max-width: 1023px)') || mq('(pointer: coarse)'));
  const [use3d, setUse3d] = useState(() => !mq('(prefers-reduced-motion: reduce)'));
  const [ready, setReady] = useState(false);

  const onReady = useCallback(() => setReady(true), []);
  const onFail = useCallback(() => setUse3d(false), []);

  // Restrained pointer parallax (desktop, fine pointers only)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !mq('(pointer: fine)') || mq('(prefers-reduced-motion: reduce)')) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      stage.style.setProperty('--px', current.x.toFixed(4));
      stage.style.setProperty('--py', current.y.toFixed(4));
      pointer.current = current;
      frame = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e) => {
      target.x = Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1));
      target.y = Math.max(-1, Math.min(1, (e.clientY / window.innerHeight) * 2 - 1));
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-stage">
      <div className="stage-glow" aria-hidden="true" />
      <div className="stage-floor" aria-hidden="true" />

      {/* Back panel sits behind the sculpture, front panel in front of it */}
      <StagePanel project={back} variant="back" index="01" caption="Chauffeur" />

      <div className="stage-sculpture" aria-hidden="true">
        <SculptureFallback hidden={use3d && ready} />
        {use3d && (
          <Suspense fallback={null}>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}>
              <SculptureScene pointer={pointer} lite={lite} onReady={onReady} onFail={onFail} />
            </div>
          </Suspense>
        )}
      </div>

      <StagePanel project={front} variant="front" index="02" caption="E-commerce" />
    </div>
  );
}
