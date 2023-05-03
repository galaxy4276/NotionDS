import { getDayTitle } from "../src/date-utils";

describe('dayjs 유틸 함수 테스트', () => {

  it('getDayTitle 함수 출력', () => {
    const title = getDayTitle();
    console.log(`title: ${title}`);
    const isMatch = /\d{4}.\d{2}.\d{2}/g.test(title);
    expect(isMatch).toBeTruthy();
  });

});
