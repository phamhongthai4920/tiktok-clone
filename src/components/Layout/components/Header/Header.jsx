import {
  faCircleXmark,
  faCloudArrowUp,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images/images';
import AccountItem from '~/components/AccountItem/AccountItem';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { default as PopperWrapper } from '~/components/Popper/Popper';
import styles from './Header.module.scss';
import { menuItems } from './MenuOptionData';
import { userItems } from './UserOptionData';
const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);

  const handleChangeMenu = (menuItem) => {};
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <TippyHeadless
          visible={!!searchResult.length}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {/* account item */}

                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Tim kiếm tài khoản và video" name="" id="" spellCheck={false} />
            {/* clear */}
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* loading */}
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            {/* search */}
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </TippyHeadless>
        <div className={cx('actions')}>
          {currentUser ? (
            <Tippy delay={[0, 200]} content="upload video">
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCloudArrowUp} />
              </button>
            </Tippy>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}

          <Menu onChange={handleChangeMenu} items={currentUser ? userItems : menuItems}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                alt=""
              />
            ) : (
              <button className={cx('more-button')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
