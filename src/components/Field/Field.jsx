import { useSelector, useDispatch } from 'react-redux';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
import {
	setCurrentPlayer,
	setIsDraw,
	setField,
	setIsGameEnded,
	RESET_GAME,
} from '../../actions';
import { FieldLayout } from './FieldLayout';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const handleCellClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;

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
				newField[a] && newField[a] === newField[b] && newField[a] === newField[c],
		);

		dispatch(setField(newField));

		if (win) {
			dispatch(setIsGameEnded(true));
		} else if (!newField.includes('')) {
			dispatch(setIsDraw(true));
			dispatch(setIsGameEnded(true));
		} else {
			const next = currentPlayer === 'X' ? 'O' : 'X';
			dispatch(setCurrentPlayer(next));
		}
	};

	const handleRestartClick = () => {
		dispatch(RESET_GAME);
	};

	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			handleRestartClick={handleRestartClick}
		/>
	);
};
