import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  disabled,
  onClick,
  children,
  text,
  sizeS,
  primary,
  sizeL,
  outline,
  rounded,
  leftIcon,
  rightIcon,
  className,
  fontWeight = 700,
  theme = 'primary',
  ...passProps
}) {
  let Comp = 'button';
  const classes = cx('wrapper', {
    outline,
    sizeS,
    primary,
    sizeL,
    text,
    disabled,
    rounded,
    fontWeightLarge: fontWeight === 700,
    fontWeightMedium: fontWeight === 600,
    fontWeightSmall: fontWeight === 500,
    [className]: className,
  });

  const props = {
    onClick,
    ...passProps,
  };

  Object.keys(props).forEach((keyProps) => {
    if (keyProps.startsWith('on') && typeof props[keyProps] === 'function') {
      delete props.keyProps;
    }
  });
  if (disabled) {
    delete props.onClick;
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
