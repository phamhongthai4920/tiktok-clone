import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx('menu-item', { separate: data.separate })}
      leftIcon={data.icon}
      to={data.to}
      fontWeight={500}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
