import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  ...rest
}) {
  const variantClass =
    variant === 'outline'
      ? 'btn-outline'
      : variant === 'outline-dark'
      ? 'btn-outline-dark'
      : 'btn-primary';

  const classes = `btn ${variantClass}${className ? ' ' + className : ''}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
