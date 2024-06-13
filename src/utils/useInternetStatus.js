import React, { useEffect, useState } from 'react';

const useInternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
   

    window.addEventListener('online', () => {
      setIsOnline(true);
    });
    window.addEventListener('offline', ()=>{
      setIsOnline(false);
    });

   
  }, []);

  return isOnline;
};

export default useInternetStatus;
