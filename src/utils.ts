export function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat(undefined, { timeStyle: 'short', dateStyle: 'short' });
  return formatter.format(date);
}

export function airstampDifference(airstamp: string, now: number) {
  const airTime = new Date(airstamp).getTime();
  const duration = Math.abs(airTime - now);

  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return hours + 'h ' + minutes + (airTime < now ? 'm ago' : 'm to air');
}
