"use client";

import { useEffect, useRef } from "react";

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export default function SiteEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scrollToTarget = (target: HTMLElement | null) => {
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }

      const start = window.scrollY;
      const headerOffset = 68;
      const targetTop = target
        ? target.getBoundingClientRect().top + window.scrollY - headerOffset
        : 0;
      const distance = targetTop - start;
      const duration = Math.min(1100, Math.max(480, Math.abs(distance) * 0.42));
      let startTime = 0;

      if (reduceMotion) {
        window.scrollTo(0, targetTop);
        return;
      }

      document.documentElement.classList.add("is-anchor-scrolling");

      const step = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        window.scrollTo(0, start + distance * easeOutQuint(progress));
        if (progress < 1) {
          scrollRafRef.current = window.requestAnimationFrame(step);
          return;
        }

        window.scrollTo(0, targetTop);
        scrollRafRef.current = null;
        document.documentElement.classList.remove("is-anchor-scrolling");
      };

      scrollRafRef.current = window.requestAnimationFrame(step);
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash) return;

      event.preventDefault();
      const target = hash === "#" ? null : document.querySelector<HTMLElement>(hash);
      scrollToTarget(target);
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => {
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
      document.documentElement.classList.remove("is-anchor-scrolling");
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCursor) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let raf = 0;

    document.documentElement.classList.add("has-custom-cursor");

    const render = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-visible");
      cursorDot.classList.add("is-visible");
    };

    const setInteractive = (active: boolean) => {
      cursor.classList.toggle("is-active", active);
      cursorDot.classList.toggle("is-active", active);
    };

    const onPointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      setInteractive(Boolean(event.target.closest("a, button, summary, .chip, .card, .tag")));
    };

    const onPointerLeave = () => {
      cursor.classList.remove("is-visible");
      cursorDot.classList.remove("is-visible");
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerleave", onPointerLeave);
    raf = window.requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
