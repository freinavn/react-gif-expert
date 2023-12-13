/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Hooks
  useEffect(() => {
    getImages();
  }, []);

  // Functions
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Return
  return {
    images,
    isLoading,
  };
};
