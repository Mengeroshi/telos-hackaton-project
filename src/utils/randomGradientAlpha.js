export const randomGradientAlpha = () => {
    const tonePicker = (main, dif = 57) => {
      const res = main - dif;
  
      if (res < 0) {
        return 360 - res;
      } else {
        return res;
      }
    };
    const random360 = Math.floor(Math.random() * (360 - 0 + 1) + 0);
    const mainTone = random360;
    const secoundTone = tonePicker(mainTone);
  
    const color1 = `hsl(${secoundTone}, 60%, 23%) 10%`;
    const color2 = `hsl(${mainTone}, 62%, 38%)`;
  
    return [color1, color2];
  };