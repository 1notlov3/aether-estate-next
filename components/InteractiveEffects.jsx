'use client';

import { useEffect } from 'react';

export default function InteractiveEffects() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    const hoverables = Array.from(
      document.querySelectorAll('a, button, .tilt-card, input')
    );

    let frameId;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      frameId = requestAnimationFrame(animateRing);
    };

    const moveHandler = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    if (!isTouchDevice && dot && ring) {
      window.addEventListener('mousemove', moveHandler);
      frameId = requestAnimationFrame(animateRing);

      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('active'));
        el.addEventListener('mouseleave', () => ring.classList.remove('active'));
      });
    }

    const hero = document.querySelector('.hero-scene');
    const layers = Array.from(document.querySelectorAll('.hero-scene .scene-layer'));

    const heroMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (event.clientX - centerX) / rect.width;
      const y = (event.clientY - centerY) / rect.height;

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0.1);
        const rotateX = -y * 14 * depth;
        const rotateY = x * 20 * depth;
        const moveX = x * 44 * depth;
        const moveY = y * 32 * depth;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const heroLeave = () => {
      layers.forEach((layer) => {
        layer.style.transform =
          'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)';
      });
    };

    if (hero && layers.length) {
      hero.addEventListener('mousemove', heroMove);
      hero.addEventListener('mouseleave', heroLeave);
    }

    const scrollParallaxNodes = Array.from(
      document.querySelectorAll('[data-scroll-speed]')
    );

    const onScroll = () => {
      const scrollY = window.scrollY;
      scrollParallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.scrollSpeed || 0);
        node.style.transform = `translateY(${scrollY * speed * -0.14}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const tiltCards = Array.from(document.querySelectorAll('.tilt-card'));
    const tiltMove = (card, event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (event) => tiltMove(card, event));
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });

    const magneticButtons = Array.from(document.querySelectorAll('.magnetic'));
    magneticButtons.forEach((button) => {
      button.addEventListener('mousemove', (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.14}px, ${y * 0.18}px)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px)';
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('scroll', onScroll);
      if (hero) {
        hero.removeEventListener('mousemove', heroMove);
        hero.removeEventListener('mouseleave', heroLeave);
      }
    };
  }, []);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}
