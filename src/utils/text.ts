export function firstSentence(text: string): string {
  const i = text.indexOf('.');
  return i >= 0 ? text.slice(0, i + 1) : text;
}
