import { actionTypes } from './constants.js';

const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_FIELD:
			return {
				...state,
				field: payload,
			};

		case actionTypes.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};

		case actionTypes.SET_IS_GAME_ENDED:
			return {
				...state,
				isGameEnded: payload,
			};

		case actionTypes.SET_IS_DRAW:
			return {
				...state,
				isDraw: payload,
			};

		case actionTypes.RESTART_GAME:
			return { ...initialState };

		default:
			return state;
	}
};
