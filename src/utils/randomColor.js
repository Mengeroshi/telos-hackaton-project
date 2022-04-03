export const randomColor = () => {

  const random360 = Math.floor(Math.random() * (360 - 0 + 1) + 0);
  const mainTone = random360;

  const color = `hsl(${mainTone},  100%, 65%`;

  return color;
};
