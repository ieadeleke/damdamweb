'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useAutoSlideUp() {
  const pathname = usePathname();

  useEffect(() => {
    const textTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'span', 'img', 'svg'];

    const elements = Array.from(document.querySelectorAll(textTags.join(',')));

    elements.forEach(el => {
      if (!(el as HTMLElement).dataset?.noAnimate) {
        el.classList.add('auto-slide-up');
      }
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // <-- re-run every time the path changes
}