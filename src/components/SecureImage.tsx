
import React, { useState, useCallback } from 'react';

interface SecureImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const SecureImage: React.FC<SecureImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    console.log('[Security] Image failed to load:', src);
    
    if (fallbackSrc && !hasError) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  }, [src, fallbackSrc, hasError]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (hasError && !fallbackSrc) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`bg-gray-200 animate-pulse ${className}`} />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </>
  );
};
