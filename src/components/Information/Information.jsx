import { useSelector } from 'react-redux';
import { selectIsDraw, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
import { InformationLayout } from './InformationLayout.jsx';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) message = 'Ничья!';
	else if (isGameEnded) message = `Победа: ${currentPlayer}`;

	return <InformationLayout message={message} />;
};
