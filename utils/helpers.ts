export function trimBetween(val: string | number): string | number {
  if (!val) return val;
  const res = val.toString().replace(/\s+/g, '');
  if (isNaN(+res)) return res;
  return res;
}

export function prettify(num: string | number): string | number {
  if (!num) return num;
  const regExp = /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g;

  const res = num.toString().replace(regExp, '$1 ');
  return res;
}
