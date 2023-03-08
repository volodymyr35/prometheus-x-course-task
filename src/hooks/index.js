import { useState, useEffect, useRef } from "react";

export const useEffectOnce = (effect = () => {}) => {
  const hasMountedOnce = useRef(false);

  useEffect(() => {
    if (!hasMountedOnce.current) {
      effect();
      hasMountedOnce.current = true;
    }
  }, [effect]);
};

export const useFetchOnce = (url) => {
  const hasMountedOnce = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!hasMountedOnce.current) {
      fetchData();
      hasMountedOnce.current = true;
    }
  }, [url]);

  return { data, error, loading };
};