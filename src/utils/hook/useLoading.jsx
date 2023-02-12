import { useState, useEffect } from 'react';

export function useLoading(datas) {
  // state pour chargement
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(Array.isArray(datas) ? [] : {});

  // on vérifie que les datas soit chargées avant de les stocké dans "slides"
  useEffect(() => {
    if (!datas) return;
    setIsLoading(true);
    async function getDatas() {
      const data = await datas;
      setData(data);
      setIsLoading(false);
    }
    getDatas();
  }, [datas]);

  return { isLoading, data };
}
