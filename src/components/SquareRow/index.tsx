import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import SquareItem from '../SquareItem';
import type { ISquare, ISquareItem } from '../../shared/types';
import classNames from 'classnames';

interface SquareRowProps {
	square: ISquareItem;
  isStarted: boolean
}

const SquareRow: FC<SquareRowProps> = ({ square, isStarted }) => {
	const [listOfSquares, setListOfSquares] = useState<ISquare[]>([]);

	useEffect(() => {
		setListOfSquares(
			Array.from({ length: square.rowsAmount }, (_, idx) => ({
				id: `${square.id}${idx}`,
				colId: idx,
				rowId: square.id,
			}))
		);
	}, [square]);

	return (
		<div className={classNames('square__row')}>
			{listOfSquares.map((square) => (
				<SquareItem key={square.id} square={square} isStarted={isStarted}/>
			))}
		</div>
	);
};

export default memo(SquareRow);
