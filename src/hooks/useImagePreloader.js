import { useState, useEffect } from 'react';

function useImagePreloader(sources, isLoading) {
  const [percentageLoaded, setPercentageLoaded] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const preloadImages = async () => {
        const totalImages = sources.length;
        let loadedImages = 0;

        const promises = sources.map(source => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = source;
            img.onload = () => {
              loadedImages++;
              const newPercentage = Math.floor((loadedImages / totalImages) * 100);
              setPercentageLoaded(newPercentage);
              resolve();
            };
            img.onerror = reject;
          });
        });

        try {
          await Promise.all(promises);
        } catch (error) {
          console.error('Error loading images:', error);
        }
      };

      preloadImages();
    }
  }, [sources, isLoading]);

  return percentageLoaded;
}

export default useImagePreloader;
