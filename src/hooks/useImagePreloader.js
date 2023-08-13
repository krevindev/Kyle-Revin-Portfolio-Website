import { useState, useEffect } from 'react';

function useImagePreloader(sources) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = sources.map(source => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = source;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    preloadImages();
  }, [sources]);

  return imagesLoaded;
}

export default useImagePreloader;
