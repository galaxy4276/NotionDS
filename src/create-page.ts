import notionClient from './client';
import { getCreatedDate, getDayTitle } from './date-utils';
import { createBlank, createTodo, randomEmoji } from './notion-utils';

type Properties = {title: {title: {type: "text", text: {content: string}}[]}};
const createProperties = (): Properties => ({
  title: {
    title: [
      {
        type: 'text',
        text: {
          content: getDayTitle(),
        },
      },
    ],
  },
});

export default async function createPage() {
    const response = await notionClient.getApis().pages.create({
      parent: {
        type: 'database_id',
        database_id: notionClient.getDatabaseId()
      },

      properties: {
        ...createProperties(),
        Tags: {
          multi_select: [
            {
              color: 'yellow',
              name: 'daily',
            },
          ],
        },
        Status: {
          status: {
            color: 'default',
            name: '대기 중',
          }
        }
      },

      icon: {
        type: 'emoji',
        emoji: randomEmoji(),
      },

      children: [
        {
          object: 'block',
          callout: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `이 페이지는 Scheduled Lambda 에 의해 ${getCreatedDate()} 에 생성되었습니다.`,
                },
                annotations: { italic: true },
              },
            ],
          },
        },
        {
          object: 'block',
          heading_2: {
            rich_text: [
              {
                text: {
                  content: '✅ 오늘 할 일',
                },
              },
            ],
            color: 'purple_background',
          }
        },
        createTodo(),
        ...createBlank(5),
        {
          object: 'block',
          heading_2: {
            rich_text: [
              {
                text: {
                  content: '✏️ 메모',
                },
              },
            ],
            color: 'yellow_background',
          }
        },
        createTodo(),
        ...createBlank(5),
        {
          object: 'block',
          heading_2: {
            rich_text: [
              {
                text: {
                  content: '🔖 TIL',
                },
              },
            ],
            color: 'blue_background',
          }
        },
        ...createBlank(5),
      ],

    });

    return response;
}
