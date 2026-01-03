import styles from './GameLayout.module.css';
import { Information } from './components/Information/Information.jsx';
import { Field } from './components/Field/Field.jsx';

export const GameLayout = ({ handleRestartClick }) => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button type="button" className={styles.restartButton} onClick={handleRestartClick}>
				Начать заново
			</button>
		</div>
	);
};
