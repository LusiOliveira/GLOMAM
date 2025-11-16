import { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
  className?: string;
}

const PageBackground = ({ children, className = "" }: PageBackgroundProps) => {
  return (
    <div className={`relative min-h-screen ${className}`} style={{ overflow: 'hidden' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          transform: 'none', 
          willChange: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/images/banners/bannerteste.png)`,
            transform: 'none',
            willChange: 'auto',
            backgroundAttachment: 'fixed'
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/95"
          style={{ transform: 'none', willChange: 'auto' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10" style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
};

export default PageBackground;

