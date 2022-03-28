let min = .01;
let max = 0.20;
export const  randomPrice =  () => +(Math.random() * (max - min) + min).toFixed(2);