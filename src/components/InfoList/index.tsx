import { memo, useContext } from 'react';
import classNames from 'classnames';
import InfoItem from '../InfoItem';
import { SelectedSquareContext } from '../../shared/context';
import type { FC } from 'react';

import './InfoList.scss';

const InfoList: FC = () => {
	const { selectedSquare } = useContext(SelectedSquareContext);

	return (
		<div className={classNames('info')}>
			<h2 className={classNames('info__title')}>Hover squares</h2>

			<ul className={classNames('info__list')}>
				{selectedSquare.map((square) => (
					<InfoItem key={square.id} square={square} />
				))}
			</ul>
		</div>
	);
};

export default memo(InfoList);
