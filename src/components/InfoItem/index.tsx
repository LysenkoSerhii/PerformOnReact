import {memo } from 'react';
import classNames from 'classnames';
import type {FC} from 'react';
import type { ISquare } from '../../shared/types';
import './InfoItem.scss';

interface InfoItemProps {
	square: ISquare;
}

const InfoItem: FC<InfoItemProps> = ({ square }) => (
	<li className={classNames('info__item')}>{`row ${square.rowId} col ${square.colId}`}</li>
);

export default memo(InfoItem);
