'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useMemo, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const N = 4;
const CIRCLE_D = 200;
const STEP_Y = 160;
const TEXT_AREA_H = 200;
const CONTAINER_H = (N - 1) * STEP_Y + CIRCLE_D + TEXT_AREA_H + 40;

const VW = 1000;
const VH = 1000;

const cx = (i: number) => (i * 25 + 12.5) * (VW / 100);
const itemTop = (i: number) => (N - 1 - i) * STEP_Y;
const cy = (i: number) => (itemTop(i) + CIRCLE_D / 2) * (VH / CONTAINER_H);

const buildPath = (amp = 60) => {
  const pts = Array.from({ length: N }, (_, i) => ({ x: cx(i), y: cy(i) }));
  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`;

  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.sqrt(dx * dx + dy * dy);

    const nx = -dy / len;
    const ny = dx / len;

    const sign = i % 2 === 0 ? 1 : -1;

    const cp1x = p1.x + dx * 0.25 + nx * sign * amp;
    const cp1y = p1.y + dy * 0.25 + ny * sign * amp;
    const cp2x = p1.x + dx * 0.75 + nx * sign * amp;
    const cp2y = p1.y + dy * 0.75 + ny * sign * amp;

    d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
  }

  return d;
};

const features = [
  {
    id: 1,
    title: 'Dải tần Xanh Kiến trúc',
    description:
      'Tần số xanh bắt đầu từ không gian sống. Light Housing tối ưu layout, tận dụng ánh sáng và thông gió tự nhiên, nâng cao hiệu quả sử dụng và tiết kiệm năng lượng.',
    image: '/assets/images/feature_1.png',
  },
  {
    id: 2,
    title: 'Dải tần Xanh Trải nghiệm',
    description:
      'Hệ tiện ích được lựa chọn có chủ đích, tập trung vào nhu cầu thiết yếu hằng ngày. Không gian cộng đồng, khu vui chơi và mảng xanh được tổ chức như những "điểm chạm" giúp cư dân kết nối, thư giãn và tái tạo năng lượng.',
    image: '/assets/images/feature_2.png',
  },
  {
    id: 3,
    title: 'Dải tần Xanh Vận hành',
    description:
      'Tần số xanh được duy trì qua hệ vận hành thông minh, tối ưu và tiết kiệm. Số hóa quản lý giúp tinh gọn quy trình, giảm chi phí và hạn chế lãng phí, đồng thời hướng đến một đời sống ổn định, hiệu quả và bền vững.',
    image: '/assets/images/feature_3.png',
  },
  {
    id: 4,
    title: 'Dải tần Xanh Đồng hành',
    description:
      '"Tần số xanh" không chỉ trong không gian sống mà còn trong hành trình sở hữu. Pháp lý minh bạch, quy trình rõ ràng và tài chính linh hoạt giúp việc an cư trở nên nhẹ nhàng, bền vững hơn.',
    image: '/assets/images/feature_4.png',
  },
];

const SVG_PATH = buildPath();

const GreenFreqSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      gsap.from('.gf-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      });

      gsap.from('.freq-item', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.gf-desktop-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.freq-item-mobile', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.gf-mobile-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.gf-desktop-grid',
            start: 'top 65%',
            end: 'bottom 35%',
            scrub: 1.2,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-brand-dark py-16 text-white xl:py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="from-brand-primary/15 absolute left-0 top-1/4 h-[600px] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent" />
        <img
          src="/assets/bgs/bg-pattern-2.png"
          alt=""
          className="h-full w-full object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      <div className="container z-10 4xl:max-w-[1880px]">
        {/* Header */}
        <div className="gf-header absolute top-10 lg:top-16 lg:max-w-[calc(100%/2)] xl:top-24 xl:max-w-[800px]">
          <p className="section-subtitle mb-2 uppercase tracking-widest !text-[#A8CCDF]">
            Kiên Định Với Chất Sống
          </p>
          <h2 className="section-title mb-5 !text-white">Tần Số Xanh</h2>
          <p className="text-sm leading-relaxed text-[#A8CCDF] md:text-base">
            Light Housing là thương hiệu phát triển bất động sản quốc dân, tập
            trung vào các giải pháp nhà ở phù hợp với nhu cầu an cư thực của
            người trẻ và gia đình đô thị. Chúng tôi tin rằng hạnh phúc không bắt
            đầu từ những điều xa vời, mà từ một khởi đầu ổn định và vững tâm.
          </p>
        </div>

        {/* ── DESKTOP: staircase grid ── */}
        <div
          className="gf-desktop-grid relative hidden lg:block"
          style={{ height: CONTAINER_H }}
        >
          {/* SVG wave connector */}
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
          >
            <path
              ref={pathRef}
              d={SVG_PATH}
              stroke="rgba(168,204,223,0.55)"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Feature items — ascending from bottom-left (i=0) to top-right (i=3) */}
          {features.map((item, index) => (
            <div
              key={item.id}
              className="freq-item absolute flex flex-col items-center text-center"
              style={{
                top: itemTop(index),
                left: `${index * 25}%`,
                width: '25%',
              }}
            >
              <CircleCard item={item} />
            </div>
          ))}
        </div>

        {/* ── MOBILE: vertical stack ── */}
        <div className="gf-mobile-grid mt-60 grid grid-cols-1 gap-10 md:grid-cols-2 lg:hidden">
          {features.map((item) => (
            <div
              key={item.id}
              className="freq-item-mobile flex flex-col items-center text-center"
            >
              <CircleCard item={item} small />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type Feature = (typeof features)[number];

function CircleCard({ item, small }: { item: Feature; small?: boolean }) {
  const circleSize = small
    ? 'size-[160px]'
    : 'size-[180px] xl:size-[200px] 2xl:size-[220px] 3xl:size-[280px]';
  const textTitle = small ? 'text-base' : 'text-lg xl:text-xl 2xl:text-2xl';
  const textDesc = small ? 'text-xs' : 'text-xs xl:text-sm';

  return (
    <>
      {/* Circle image + halftone halo */}
      <div
        className={`group relative mb-5 flex ${circleSize} items-center justify-center rounded-full`}
      >
        {/* Halftone radial dot halo — rendered behind the photo */}
        <HalftoneHalo />

        {/* Photo */}
        <div className="relative h-[84%] w-[84%] overflow-hidden rounded-full border-[3px] border-[#A8CCDF]/35 shadow-2xl transition-all duration-500 group-hover:border-white/60 group-hover:shadow-[0_0_40px_rgba(168,204,223,0.35)]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
        </div>
      </div>

      {/* Text block */}
      <div className="flex max-w-[260px] flex-col gap-2 px-2 lg:max-w-[280px]">
        <h3 className={`font-bold text-white ${textTitle}`}>{item.title}</h3>
        <div className="bg-brand-primary/50 mx-auto h-[2px] w-8" />
        <p className={`leading-relaxed text-[#A8CCDF]/80 ${textDesc}`}>
          {item.description}
        </p>
      </div>
    </>
  );
}

function HalftoneHalo() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const C = 100;

    function makeRand(seed: number) {
      let s = seed;
      return () => {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        return (s >>> 0) / 0xffffffff;
      };
    }

    const rings: [number, number, number, number, number, number][] = [
      [0.3, 10, 0.6, 1.8, 0.08, 0.14],
      [0.4, 14, 0.8, 2.2, 0.11, 0.18],
      [0.5, 18, 1.0, 2.8, 0.15, 0.24],
      [0.6, 22, 1.4, 3.4, 0.2, 0.3],
      [0.7, 28, 1.8, 4.2, 0.25, 0.36],
      [0.8, 34, 2.0, 5.0, 0.28, 0.4],
      [0.9, 40, 1.8, 4.8, 0.26, 0.38],
      [1.0, 46, 1.4, 4.0, 0.2, 0.32],
      [1.1, 52, 1.0, 3.2, 0.14, 0.24],
      [1.2, 56, 0.7, 2.4, 0.09, 0.17],
      [1.32, 58, 0.5, 1.6, 0.06, 0.12],
      [1.44, 60, 0.3, 1.1, 0.04, 0.08],
    ];

    type Dot = {
      el: SVGCircleElement;
      baseR: number;
      baseOp: number;
      phase: number;
      speed: number;
      rAmp: number;
      minR: number;
      minOp: number;
    };

    const dots: Dot[] = [];

    rings.forEach(([rf, num, minR, maxR, minOp, maxOp], ri) => {
      const rand = makeRand(ri * 7919 + 31337);
      const ringR = rf * C * 0.75;

      for (let j = 0; j < num; j++) {
        const angle = (j / num) * 2 * Math.PI;
        const baseR = minR + rand() * (maxR - minR);
        const baseOp = minOp + rand() * (maxOp - minOp);
        const phase = rand() * Math.PI * 2; // lệch pha ngẫu nhiên
        const speed = 0.4 + rand() * 1.2; // tốc độ nhấp nháy 0.4–1.6 Hz
        const rAmp = 0.3 + rand() * 0.5; // biên độ dao động bán kính

        const circle = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle',
        );
        circle.setAttribute('cx', (C + ringR * Math.cos(angle)).toFixed(2));
        circle.setAttribute('cy', (C + ringR * Math.sin(angle)).toFixed(2));
        circle.setAttribute('r', baseR.toFixed(2));
        circle.setAttribute('fill', '#A8CCDF');
        circle.setAttribute('fill-opacity', baseOp.toFixed(3));
        svg.appendChild(circle);

        dots.push({
          el: circle,
          baseR,
          baseOp,
          phase,
          speed,
          rAmp,
          minR,
          minOp,
        });
      }
    });

    let rafId: number;
    function animate(ts: number) {
      const t = ts / 1000;
      dots.forEach((d) => {
        const wave = Math.sin(t * d.speed * Math.PI * 2 + d.phase); // -1 .. 1
        const r = Math.max(d.minR * 0.5, d.baseR + wave * d.rAmp);
        const op = Math.max(0.02, d.baseOp + wave * d.baseOp * 0.5);
        d.el.setAttribute('r', r.toFixed(3));
        d.el.setAttribute('fill-opacity', op.toFixed(3));
      });
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      className="pointer-events-none absolute inset-[-10%] h-[120%] w-[120%] animate-[spin_80s_linear_infinite] overflow-hidden rounded-full"
      aria-hidden
    />
  );
}

export default GreenFreqSection;
