import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import gsap from 'gsap';
gsap.registerPlugin(ScrollToPlugin);

export function getOffsetY(conditions: gsap.Conditions | undefined): any {
  if (conditions === undefined) return;
  switch (true) {
    case conditions.isXS:
      return 64;
    case conditions.isMD:
      return 68;
    case conditions.isLG:
      return 76;
    case conditions.isXl:
      return 130;
    case conditions.is2XL:
      return 142;
    case conditions.is3XL:
      return 146;
    case conditions.is4Xl:
      return 154;
    default:
      return 154;
  }
}

export const handleScrollTo = (
  elementId: string,
  conditions: gsap.Conditions | undefined,
) => {
  const elementTarget = document.getElementById(elementId);
  if (elementTarget && conditions) {
    gsap.to(window, {
      scrollTo: {
        y: elementTarget,
        offsetY: getOffsetY(conditions),
        autoKill: false,
      },
      duration: 0.7,
      ease: 'power2.out',
    });
  }
};
