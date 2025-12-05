// src/GameLayout.jsx
import styles from './GameLayout.module.css';
import { Information } from './components/Information/Information.jsx';
import { Field } from './components/Field/Field.jsx';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
		</div>
	);
};
