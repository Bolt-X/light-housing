'use client';
import { useEffect, useState } from 'react';
import { SITE_CONTENT, SITE_ASSETS } from '../constants/site';

export default function Loading() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem('hasLoaded');
    if (alreadyLoaded) return;

    setLoading(true);
    sessionStorage.setItem('hasLoaded', 'true');

    const t1 = setTimeout(() => setProgress(100), 400);
    const t2 = setTimeout(() => setExiting(true), 900);
    const t3 = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!loading) return null;

  return (
    <>
      <style>{`
        @keyframes lh-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lh-pulse-orb {
          0%, 100% { transform: scale(1);   opacity: 0.45; }
          50%       { transform: scale(1.08); opacity: 0.7; }
        }
        @keyframes lh-float-a {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(24px, -32px); }
        }
        @keyframes lh-float-b {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-28px, 22px); }
        }
        @keyframes lh-float-c {
          0%, 100% { transform: translate(0, 0); }
          33%       { transform: translate(14px, 18px); }
          66%       { transform: translate(-12px, -22px); }
        }
        @keyframes lh-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        @keyframes lh-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes lh-exit {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        .lh-logo    { animation: lh-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .lh-tagline { animation: lh-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .lh-bar     { animation: lh-fade-up 0.55s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
        .lh-orb-a   { animation: lh-float-a 9s  ease-in-out infinite, lh-pulse-orb 4.5s ease-in-out infinite; }
        .lh-orb-b   { animation: lh-float-b 11s ease-in-out infinite, lh-pulse-orb 5.5s ease-in-out infinite 1.2s; }
        .lh-orb-c   { animation: lh-float-c 13s ease-in-out infinite; }
        .lh-shimmer { animation: lh-shimmer 1.6s ease-in-out infinite; }
        .lh-ring    { animation: lh-spin-slow 18s linear infinite; }
        .lh-exit    { animation: lh-exit 0.55s ease-in-out forwards; }
      `}</style>

      {/* ── Overlay ───────────────────────────────────────────── */}
      <div
        className={exiting ? 'lh-exit' : ''}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #011520 0%, #012130 55%, #012b40 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/assets/bgs/bg-pattern-2.png)',
          backgroundSize: 'cover',
          opacity: 0.18,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }} />

        {/* Ambient orbs */}
        <div className="lh-orb-a" style={{
          position: 'absolute', top: '10%', left: '8%',
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,204,223,0.13) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />
        <div className="lh-orb-b" style={{
          position: 'absolute', bottom: '12%', right: '6%',
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,160,110,0.09) 0%, transparent 68%)',
          pointerEvents: 'none',
        }} />
        <div className="lh-orb-c" style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 800, height: 800,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,204,223,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* ── Main card ─────────────────────────────────────── */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 36,
        }}>

          {/* Decorative spinning ring around logo */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Ring SVG */}
            <svg
              className="lh-ring"
              width={320} height={320}
              viewBox="0 0 320 320"
              style={{ position: 'absolute' }}
              fill="none"
              aria-hidden
            >
              <circle
                cx={160} cy={160} r={150}
                stroke="rgba(168,204,223,0.12)"
                strokeWidth={1}
                strokeDasharray="6 14"
                strokeLinecap="round"
              />
              <circle
                cx={160} cy={160} r={135}
                stroke="rgba(168,204,223,0.07)"
                strokeWidth={1}
                strokeDasharray="3 20"
                strokeLinecap="round"
              />
            </svg>

            {/* Logo */}
            <div className="lh-logo" style={{ position: 'relative' }}>
              {/* Glow halo */}
              <div style={{
                position: 'absolute', inset: '-24px',
                background: 'radial-gradient(ellipse, rgba(168,204,223,0.18) 0%, transparent 70%)',
                zIndex: -1,
              }} />
              <img
                src={SITE_ASSETS.logoPrimaryLight}
                alt="Light Housing"
                fetchPriority="high"
                loading="eager"
                style={{ width: 240, height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="lh-tagline" style={{
            color: 'rgba(168,204,223,0.65)',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 400,
            textAlign: 'center',
          }}>
            {SITE_CONTENT.tagline}
          </p>

          {/* Progress bar */}
          <div className="lh-bar" style={{ width: 260, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {/* Track */}
            <div style={{
              height: 2, borderRadius: 9999,
              background: 'rgba(168,204,223,0.12)',
              overflow: 'hidden', position: 'relative',
            }}>
              {/* Fill */}
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, rgba(168,204,223,0.5), #A8CCDF)',
                borderRadius: 9999,
                transition: 'width 0.55s cubic-bezier(0.65,0,0.35,1)',
                boxShadow: '0 0 10px rgba(168,204,223,0.7)',
              }} />
              {/* Shimmer */}
              {progress < 100 && (
                <div className="lh-shimmer" style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '20%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
                }} />
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
