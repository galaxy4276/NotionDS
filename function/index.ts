import createPage from '../src/create-page';

export const handler = async () => {
  try {
    const { id } = await createPage();
    console.info(`${id} 로 새로운 페이지가 생성되었습니다.`);
  } catch (err) {
    console.error('에러가 발생하였습니다.');
    console.error(err);
  }
};
