import notionClient from './client';
import { getDayTitle } from "./date-utils";

export default async function createPage() {
    const response = await notionClient.getApis().pages.create({
      parent: { database_id: notionClient.getDatabaseId() },
      properties: {
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

    return response;
}
