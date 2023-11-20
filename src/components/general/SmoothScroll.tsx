import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault();

      const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
      const targetElement = document.querySelector(targetId!) as any;

      if (targetElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetElement.offsetTop,
        });
      }

      // Update the URL without triggering a full page refresh
      router.push(targetId!);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link: any) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link: any) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [router]);

  return <>{children}</>;
};

export default SmoothScroll;