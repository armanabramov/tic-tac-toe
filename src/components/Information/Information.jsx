import { InformationLayout } from './InformationLayout.jsx';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		message = 'Ничья!';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	}

	return <InformationLayout message={message} />;
};
