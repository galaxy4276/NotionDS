import notionClient from '../src/client';
import { config as dotenvInitConfig } from 'dotenv';

describe('notionClient 객체 테스트', () => {

  beforeAll(() => {
    dotenvInitConfig();

  });

  test('빈 페이지를 생성한다.', async () => {
    await notionClient.getApis().pages.create({
      auth: notionClient.getNotionKey(),
      properties: {
        title: {
          title: [
            { text: { content: 'test' } }
          ]
        }
      },
      parent: { database_id: notionClient.getDatabaseId() }
    })
  });

  test('데이터베이스 값을 성공적으로 불러온다.', async () => {
    const dbList = await notionClient.getApis().databases.retrieve({
      auth: notionClient.getNotionKey(),
      database_id: notionClient.getDatabaseId(),
    });
    console.log({dbList});
  });

  test('데이터베이스에 임의의 페이지를 생성한다.', async () => {
    const res = await notionClient.getApis().pages.create({
      parent: { database_id: notionClient.getDatabaseId() },
      properties: {
        title: {
          title:[
            {
              "text": {
                "content": '똑같은 랩'
              }
            }
          ]
        }
      },
    })
    console.log({ res });
  });

});
