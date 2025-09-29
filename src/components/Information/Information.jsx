import PropTypes from 'prop-types';
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

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
