// Hint: use setInterval, create a new Promise and measure time with Date.now()
const MAXTIME = 25000;

export function delay(time) {
  const promise1 = new Promise(resolve => {
    const start = Date.now();
    if (time < MAXTIME) {
      setInterval(() => {
        resolve(Date.now() - start);
      }, time);
      return promise1;
    }
    throw new Error("This time is too much !");
  });
  return promise1;
}

export async function asyncDelay(time) {
  const promise2 = await delay(time);
  return promise2;
}
