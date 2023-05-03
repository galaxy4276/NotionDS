import { EmojiRequest } from "./type";

export const randomEmoji = () => {
  const emojis: EmojiRequest[] = ['⌛', '⏰', '⌚', '⭐', '☺️', '⛱️', '✨', '♥️', '✍️', '❣️', '✈️', '⛄'];
  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
};


export const createBlank = (count: number) => {
  return Array(count).fill({
    object: 'block',
    paragraph: {
      rich_text: [{ text: { content: "" } }],
    },
  });
}

export const createTodo = () => ({
  object: 'block',
  to_do: {
    rich_text: [
      {
        text: {
          content: '항목을 추가하세요.',
        },
      },
    ],
  },
});
