import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '인하대학교',
      subTitle: '컴퓨터공학 학사',
      startedAt: '2015-03',
      endedAt: '2021-02',
    },
    {
      title: '순천 매산고등학교',
      subTitle: '졸업',
      startedAt: '2012-03',
      endedAt: '2015-02',
    },
    {
      title: '42 Seoul',
      subTitle: '',
      startedAt: '2021-03',
      // endedAt: '2022-02',
    },
    {
      title: 'Naver Boostcamp AI Tech 2기',
      subTitle: '',
      startedAt: '2021-07',
      endedAt: '2021-12',
    }
    ,
  ],
};

export default education;
