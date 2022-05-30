import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images/images';
import Button from '~/components/Button/Button';
import { AddIcon, MailBoxIcon, MessageIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Menu from '~/components/Popper/Menu/Menu';
import Search from '~/components/Search/Search';
import styles from './Header.module.scss';
import { menuItems } from './MenuOptionData';
import { userItems } from './UserOptionData';
const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;
  const handleChangeMenu = (menuItem) => {};
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        {/* search */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button to="/upload" outline className={cx('btn-upload')} sizeS leftIcon={<AddIcon />}>
                Tải lên
              </Button>
              <Tippy delay={[0, 200]} content="Tin nhắn">
                <Link to="/message" className={cx('action-btn')}>
                  <MessageIcon />
                </Link>
              </Tippy>
              <Tippy delay={[0, 200]} content="Hộp thư  ">
                <Link to="/mail" className={cx('action-btn')}>
                  <MailBoxIcon />
                  <span className={cx('badge')}>12</span>
                </Link>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}

          <Menu onChange={handleChangeMenu} items={currentUser ? userItems : menuItems}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                alt=""
                fallback="https://360boutique.vn/wp-content/uploads/2022/05/QGVTK301-4-400x600.jpg"
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
