import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://onecms-res.cloudinary.com/image/upload/s--aTpaUpuo--/f_auto%2Cq_auto/c_fill%2Cg_auto%2Ch_622%2Cw_830/v1/tdy-migration/cat_3_0.jpg?itok=n7GwSz59"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Rentie</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </p>
        <span className={cx('username')}>Nguyen van Rentie</span>
      </div>
    </div>
  );
}

export default AccountItem;
