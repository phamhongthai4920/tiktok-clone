import React, { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem/AccountItem';
import { default as PopperWrapper } from '~/components/Popper/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '../Hooks/Hooks';

const cx = classNames.bind(styles);

function Search() {
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(valueSearch, 500);
  console.log(debouncedSearch);
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedSearch)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [debouncedSearch]);

  const handleValueSearch = (e) => {
    setValueSearch(e.target.value);
  };

  const handleClearValue = () => {
    setSearchResult([]);
    setValueSearch('');
    inputRef.current.focus();
  };
  return (
    <TippyHeadless
      visible={!!searchResult.length && showResult}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {/* account item */}
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Tim kiếm tài khoản và video"
          name=""
          id=""
          spellCheck={false}
          value={valueSearch}
          onChange={handleValueSearch}
          onFocus={() => setShowResult(true)}
        />
        {/* clear */}
        {!!valueSearch && !loading && (
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClearValue} />
          </button>
        )}

        {/* loading */}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        {/* search */}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
