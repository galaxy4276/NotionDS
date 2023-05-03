import { randomEmoji } from "../src/notion-utils";

describe('이모지 유틸 테스트', () => {

  it('이모지 1000번 출력', () => {
    for (let i = 0; i < 1000; i++) {
      console.log(randomEmoji());
    }
  });

});
