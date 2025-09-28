import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleCellClick, handleRestartClick }) => {
	return (
		<>
			<div className={styles.board}>
				{field.map((cell, index) => (
					<button
						key={index}
						className={`${styles.cell} ${field[index] === 'X' ? styles.x : field[index] === 'O' ? styles.o : ''}`}
						onClick={() => handleCellClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
			<button
				className={styles.restartButton}
				onClick={handleRestartClick}
			>
				Начать заново
			</button>
		</>
	);
};
