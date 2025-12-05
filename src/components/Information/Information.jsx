import { useState, useEffect } from 'react';
import { InformationLayout } from './InformationLayout.jsx';
import store from '../../store';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	const { currentPlayer, isGameEnded, isDraw } = state;

	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) message = 'Ничья!';
	else if (isGameEnded) message = `Победа: ${currentPlayer}`;

	return <InformationLayout message={message} />;
};
