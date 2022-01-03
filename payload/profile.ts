import { faEnvelope, faPhone, faBold } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/sejong.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '정 세 종',
    small: 'Sejong Jeong',
  },
  contact: [
    {
      title: 'sejongjeong@kakao.com',
      link: 'mailto:sejongjeong@kakao.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'github.com/sejongjeong',
      link: 'https://github.com/sejongjeong',
      icon: faGithub,
    },
    {
      link: 'https://fb.com/sejong.jeong.kr',
      icon: faFacebook,
    },
    {
      title: 'Curiosity in SJ',
      link: 'https://curiosityinsj.tistory.com',
      // icon: faRss,
      icon: faBold,
    },
  ],
  notice: {
    title: "이메일로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
