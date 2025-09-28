import styles from './InformationLayout.module.css';

export const InformationLayout = ({ message }) => {
	return <h1 className={styles.title}>{message}</h1>;
};
