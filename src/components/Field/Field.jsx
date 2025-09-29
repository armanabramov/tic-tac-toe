import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) => {
	const handleCellClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		const win = WIN_PATTERNS.some(
			([a, b, c]) =>
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c],
		);

		if (win) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	const handleRestartClick = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			handleRestartClick={handleRestartClick}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setField: PropTypes.func.isRequired,
	currentPlayer: PropTypes.string.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
};
