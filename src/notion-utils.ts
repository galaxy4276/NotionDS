import { EmojiRequest } from "./type";

export const randomEmoji = () => {
  const emojis: EmojiRequest[] = ['⌛', '⏰', '⌚', '⭐', '☺️', '⛱️', '✨', '♥️', '✍️', '❣️', '✈️', '⛄'];
  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
};
