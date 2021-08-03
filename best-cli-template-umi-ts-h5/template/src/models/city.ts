import { useState, useCallback } from 'react';

export default function useCityModel() {
  const [city, setCity] = useState([
    {
      key: 0,
      text: '全国(全局数据用法)',
      value: 0,
    },
    {
      key: 1,
      text: '广州',
      value: 1,
    },
    {
      key: 2,
      text: '清远',
      value: 2,
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
