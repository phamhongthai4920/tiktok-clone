import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { default as PopperWrapper } from '../Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  return (
    <Tippy
      interactive
      offset={[8, 12]}
      delay={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header title="Ngôn ngữ" onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
            )}
            {current &&
              current.data.map((item, index) => (
                <MenuItem
                  key={index}
                  data={item}
                  onClick={() => {
                    if (!!item.subMenu) {
                      setHistory((prev) => [...prev, item.subMenu]);
                    } else {
                      onChange(item);
                    }
                  }}
                />
              ))}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
