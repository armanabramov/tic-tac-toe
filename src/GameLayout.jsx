import { Component } from 'react';
import Information from './components/Information/Information.jsx';
import Field from './components/Field/Field.jsx';

export class GameLayout extends Component {
	render() {
		const { handleRestartClick } = this.props;

		return (
			<div className="w-[min(420px,96vw)] bg-surface rounded-[14px] p-5 flex flex-col gap-4 text-accent shadow-[0_8px_24px_rgba(15,23,36,0.06)]">
				<Information />
				<Field />
				<button
					type="button"
					onClick={handleRestartClick}
					className="
						mx-auto mt-2 w-4/5 py-2 rounded-[8px] border border-[rgba(15,23,36,0.06)]
						font-semibold text-[18px] leading-none
						bg-gradient-to-br from-red-400 to-blue-400 text-white
						shadow-[0_6px_12px_rgba(15,23,36,0.06)]
						transition-transform transition-shadow transition-filter duration-100
						hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(15,23,36,0.08)]
						inline-flex items-center justify-center
					"
				>
					Начать заново
				</button>
			</div>
		);
	}
}
