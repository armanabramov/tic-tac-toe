const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const actionTypes = {
	SET_FIELD: 'SET_FIELD',
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
	SET_IS_GAME_ENDED: 'SET_IS_GAME_ENDED',
	SET_IS_DRAW: 'SET_IS_DRAW',
	RESTART_GAME: 'RESTART_GAME',
};

export const reducer = (state = initialState, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.SET_FIELD:
			return {
				...state,
				field: Array.isArray(payload) ? payload : state.field,
			};

		case actionTypes.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: typeof payload === 'string' ? payload : state.currentPlayer,
			};

		case actionTypes.SET_IS_GAME_ENDED:
			return {
				...state,
				isGameEnded: Boolean(payload),
			};

		case actionTypes.SET_IS_DRAW:
			return {
				...state,
				isDraw: Boolean(payload),
			};

		case actionTypes.RESTART_GAME:
			return { ...initialState };

		default:
			return state;
	}
};
