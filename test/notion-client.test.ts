import notionClient from '../src/client';
import { config as dotenvInitConfig } from 'dotenv';
import createPage from '../src/create-page';
import { NotionClientError } from "@notionhq/client";

describe('notionClient 객체 테스트', () => {

  test('페이지를 성공적으로 생성한다.', async () => {
    try {
      const res = await createPage();
      console.log('페이지가 성공적으로 생성되었습니다.');
      console.log(res);
    } catch (err) {
       console.error(err);
    }
  });

});
