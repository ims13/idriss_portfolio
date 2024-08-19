// utils/detectMobile.ts should detect a mobile
export const isMobileDevice = () => {

    return (
      typeof window !== "undefined" &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  };
