import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo = ({ className, variant = 'dark' }: LogoProps) => {
  return (
    <div className={cn("relative flex items-center", className)}>
      <img
        src="https://i.postimg.cc/6p62JhWv/Chat-GPT-Image-Dec-11-2025-12-53-24-AM.png"
        alt="ETC Consulting"
        className={cn(
          "h-full w-auto object-contain",
          // Removing mix-blend-multiply if we want to show the logo as is, 
          // or keeping it if the background is white. 
          // Given the request "fit the frame", object-contain is key.
          "max-h-[60px]" 
        )}
      />
    </div>
  );
};
