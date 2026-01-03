import { useDispatch } from 'react-redux';
import { RESET_GAME } from './actions';
import { GameLayout } from './GameLayout';

const Game = () => {
	const dispatch = useDispatch();

	const handleRestartClick = () => {
		dispatch(RESET_GAME);
	};

	return <GameLayout handleRestartClick={handleRestartClick} />;
};

export default Game;
