import createPage from '../src/create-page';

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
