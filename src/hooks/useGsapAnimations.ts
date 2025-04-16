
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate categories on scroll
    gsap.utils.toArray('.category-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    // Services section animations
    gsap.utils.toArray('.service-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
        },
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
      });
    });

    // Adoption cards stagger animation
    gsap.from('.adoption-card', {
      scrollTrigger: {
        trigger: '.adoption-section',
        start: 'top center'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    });

    // Blog posts fade in
    gsap.utils.toArray('.blog-post').forEach((post: any) => {
      gsap.from(post, {
        scrollTrigger: {
          trigger: post,
          start: 'top bottom-=100'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    // Newsletter section slide up
    gsap.from('.newsletter-section', {
      scrollTrigger: {
        trigger: '.newsletter-section',
        start: 'top bottom-=100'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, []);
};
