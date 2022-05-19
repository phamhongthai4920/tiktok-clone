import { menuItems } from './MenuOptionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faGear, faPeopleArrows, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

export const userItems = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Xem hồ sơ',
    to: '/@name',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Nhận xu',
    to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Cài đặt',
    to: '/setting',
  },
  ...menuItems,
  {
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    title: 'Đăng xuất',
    to: '/logout',
    separate: true,
  },
];
