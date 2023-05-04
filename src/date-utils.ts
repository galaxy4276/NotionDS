import dayjs from 'dayjs';

const dayConvertToKor = (d: string): string => {
  switch (d) {
    case 'Sun': return '일';
    case 'Sat': return '토';
    case 'Mon': return '월';
    case 'Tue': return '화';
    case 'Wed': return '수';
    case 'Thu': return '목';
    case 'Fri': return '금';
    default:
      return '둠스데이';
  }
};

export const getDayTitle = (): string => {
  const d = dayjs().locale('Asia/Seoul');
  const date: string = d.format('YYYY.MM.DD');
  const day = dayConvertToKor(d.format('ddd'));
  return `${date} (${day})`;
};

export const getCreatedDate = () =>
  dayjs().format('YYYY.MM.DD HH:mm:ss');
