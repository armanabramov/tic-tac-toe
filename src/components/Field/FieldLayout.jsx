import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleCellClick }) => {
	return (
		<>
			<div className={styles.board}>
				{field.map((cell, index) => {
					const cellClass = cell === 'X' ? styles.x : cell === 'O' ? styles.o : '';
					return (
						<button
							key={index}
							type="button"
							className={`${styles.cell} ${cellClass}`}
							onClick={() => handleCellClick(index)}
						>
							{cell}
						</button>
					);
				})}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
