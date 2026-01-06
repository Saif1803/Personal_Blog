export function getReadingTime(text: string) {
  const WORDS_PER_MINUTE = 200;

  const words = text
    .replace(/<[^>]*>/g, '') // strip HTML
    .trim()
    .split(/\s+/).length;

  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    words,
    minutes,
    label: `${minutes} min read`,
  };
}
