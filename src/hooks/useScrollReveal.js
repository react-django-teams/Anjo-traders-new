import { useEffect, useRef } from 'react';

/**
 * useScrollReveal - Attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport, it gets the 'is-visible' class added.
 * @param {Object} options - IntersectionObserver options
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element); // Animate only once
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useScrollReveal;
