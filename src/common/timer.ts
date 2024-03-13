export const timer = {
  sleep: (seconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000 * seconds);
    });
  },

  msleep: (milliseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },

  usleep: (microseconds: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, microseconds / 1000);
    });
  },
};
