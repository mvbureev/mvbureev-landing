import styles from './Link.module.sass';

interface IProps {
  href: string;
  block?: boolean;
  color?: string;
  alt?: string;
  icon?: string;
  title?: string | null;
  width?: number;
  height?: number;
  className?: string;
}

const Link = ({
  href = `/`,
  block = false,
  icon = ``,
  alt = ``,
  color = ``,
  title = null,
  width = 36,
  height = 36,
  className
}: IProps) => (
  <a
    className={className || `${styles.link} ${block && styles.block}`}
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ background: color }}
  >
    {icon && <img src={icon} alt={alt} width={width} height={height} color="#fff" />}
    {title}
  </a>
);

export default Link;
