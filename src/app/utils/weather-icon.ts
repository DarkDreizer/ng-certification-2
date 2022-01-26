export function weatherIcon(icon: string): string {
  const code = Number(icon.slice(0, icon.length - 1));
  switch (true) {
    case code > 1 && code < 5:
      return 'https://www.angulartraining.com/images/weather/clouds.png';
    case code > 8 && code < 12:
      return 'https://www.angulartraining.com/images/weather/rain.png';
    case code === 13:
      return 'https://www.angulartraining.com/images/weather/snow.png';
    default:
      return 'https://www.angulartraining.com/images/weather/sun.png';
  }
}
