import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo = ({ className, variant = 'dark' }: LogoProps) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Glow Effect behind the logo */}
      <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full pointer-events-none" />
      
      <img
        src="https://i.postimg.cc/6p62JhWv/Chat-GPT-Image-Dec-11-2025-12-53-24-AM.png"
        alt="ETC Consulting"
        className={cn(
          "relative z-10 h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(244,157,17,0.3)]",
          // Removing max-h constraint here to let parent control size
        )}
      />
    </div>
  );
};
