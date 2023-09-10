'use client'

import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  useEffect(() => {
    const localStorageValue = JSON.parse(localStorage.getItem(key)) || defaultValue;

    const setLocalStorageStateValue = (valueOrFn) => {
      let newValue;
      if (typeof valueOrFn === 'function') {
        const fn = valueOrFn;
        newValue = fn(localStorageValue);
      } else {
        newValue = valueOrFn;
      }
      localStorage.setItem(key, JSON.stringify(newValue));
    };

    setLocalStorageStateValue(defaultValue);
  }, [key, defaultValue]); // Include key and defaultValue in the dependency array

  // Return the localStorage value and setter function
  return [localStorageValue, setLocalStorageStateValue];
};

export { useLocalStorage };
