const adSelectors = [
    'iframe[src*="ads"]',
    '.ad-container',
    '.video-ads',  // For YouTube ads
    '#ad-root',
    '[id^="ad-"]'
  ];
  
  const removeAds = () => {
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  };
  
  window.onload = function() {
    setInterval(removeAds, 3000);  // Check for ads every 3 seconds
  };
  