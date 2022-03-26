export const randomGradient = () => {
  const tonePicker = (main, dif = 52) => {
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
  const thirdTone = tonePicker(secoundTone);

  const color1 = `hsl(${mainTone}, 100%, 60%)`;
  const color2 = `hsl(${secoundTone}, 100%, 56%)`;
  const color3 = `hsl(${thirdTone}, 98%, 82%)`;

  return [color1, color2, color3];
};
