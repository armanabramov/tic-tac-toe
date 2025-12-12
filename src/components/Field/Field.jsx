import { useEffect, useState } from 'react';
import { FieldLayout } from './FieldLayout';
import store from '../../store';
import { actionTypes } from '../../reducer';

export const Field = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { field, currentPlayer, isGameEnded } = state;

	const handleCellClick = (index) => {
		if (isGameEnded || state.field[index] !== '') return;

		const newField = [...state.field];
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

		store.dispatch({ type: actionTypes.SET_FIELD, payload: newField });

		if (win) {
			store.dispatch({ type: actionTypes.SET_IS_GAME_ENDED, payload: true });
		} else if (!newField.includes('')) {
			store.dispatch({ type: actionTypes.SET_IS_DRAW, payload: true });
			store.dispatch({ type: actionTypes.SET_IS_GAME_ENDED, payload: true });
		} else {
			const next = currentPlayer === 'X' ? 'O' : 'X';
			store.dispatch({
				type: actionTypes.SET_CURRENT_PLAYER,
				payload: next,
			});
		}
	};

	const handleRestartClick = () => {
		store.dispatch({ type: actionTypes.RESTART_GAME });
	};

	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			handleRestartClick={handleRestartClick}
		/>
	);
};
