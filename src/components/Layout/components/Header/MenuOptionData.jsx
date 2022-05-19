import { faCircleQuestion, faKeyboard, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'Tiếng Việt',
    subMenu: {
      title: 'Ngôn Ngữ',
      data: [
        {
          type: 'Ngôn Ngữ',
          value: 'vi',
          title: 'Việt Nam',
        },
        {
          type: 'Ngôn Ngữ',
          value: 'en',
          title: 'English',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
];
