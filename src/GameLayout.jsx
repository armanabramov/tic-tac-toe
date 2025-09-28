import { Information } from './components/Information/Information.jsx';
import { Field } from './components/Field/Field.jsx';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	return (
		<>
			<div className={styles.game}>
				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
			</div>
		</>
	);
};
