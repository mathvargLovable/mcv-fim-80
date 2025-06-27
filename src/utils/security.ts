
/**
 * Security utilities for URL validation and safe redirects
 */

export const isValidCheckoutUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Validate that it's the expected checkout domain
    return urlObj.hostname === 'www.ggcheckout.com' && 
           urlObj.pathname.startsWith('/checkout/v2/');
  } catch {
    return false;
  }
};

export const safeExternalRedirect = (url: string): void => {
  if (!isValidCheckoutUrl(url)) {
    console.error('Invalid checkout URL detected:', url);
    return;
  }
  
  // Open with security attributes
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (!newWindow) {
    // Fallback if popup blocked
    window.location.href = url;
  }
};

export const logSecurityEvent = (event: string, details?: any): void => {
  console.log(`[Security] ${event}`, details);
};
