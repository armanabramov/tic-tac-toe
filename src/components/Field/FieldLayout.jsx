import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;

		return (
			<div className="grid grid-cols-3 gap-2 p-2 place-items-center">
				{field.map((cell, index) => {
					const cellColor =
						cell === 'X'
							? 'text-red-500'
							: cell === 'O'
								? 'text-blue-500'
								: 'text-transparent';

					return (
						<button
							key={index}
							type="button"
							onClick={() => handleCellClick(index)}
							className={`w-[80px] h-[80px] flex items-center justify-center
								rounded-[8px] border border-[rgba(15,23,36,0.06)]
								bg-gradient-to-b from-[rgba(15,23,36,0.02)] to-[rgba(255,255,255,0.6)]
								font-bold text-[36px] cursor-pointer
								transition-transform transition-shadow transition-colors duration-100
								hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(15,23,36,0.06)]
								${cellColor}
							`}
						>
							{cell}
						</button>
					);
				})}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
