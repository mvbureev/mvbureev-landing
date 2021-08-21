import styles from './Card.module.sass';

interface IProps {
  icon: string;
  title: string;
  color: string;
  width?: number;
  height?: number;
}

const Card = ({ icon = ``, title = ``, color = `#999`, width = 48, height = 48 }: IProps) => (
  <div className={styles.card} style={{ background: color }}>
    <img src={icon} alt={`${title} icon`} width={width} height={height} />
    <p>{title}</p>
  </div>
);

export default Card;
