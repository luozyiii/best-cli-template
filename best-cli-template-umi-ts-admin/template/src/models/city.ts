import { useState, useCallback } from 'react';

export default function useCityModel() {
  const [city, setCity] = useState([
    {
      id: 0,
      name: '全国(全局数据用法)',
    },
    {
      id: 1,
      name: '广州',
    },
    {
      id: 2,
      name: '清远',
    },
  ]);

  const resetCity = useCallback((cityList) => {
    setCity(cityList);
  }, []);

  return {
    city,
    resetCity,
  };
}
