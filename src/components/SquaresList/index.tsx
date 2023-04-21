import { memo, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';

import Dropdown from '../Dropdown';
import SquareRow from '../SquareRow';
import StartButton from '../StartButton';
import { getAllModels } from '../../shared/API';
import type { IModels, ISquareItem } from '../../shared/types';

import './SquaresList.scss';

const SquaresList: FC = () => {
	const [models, setModels] = useState<IModels[]>([]);
	const [selectedModel, setSelectedModel] = useState<number>(5);
	const [listOfSquares, setListOfSquares] = useState<ISquareItem[]>([]);
  const [isStarted, setIsStarted] = useState(false);

	const handleModelSelect = useCallback((item: number) => {
		setSelectedModel(item);
	}, []);

	const handleStart = useCallback(() => {
    setIsStarted(prev => !prev);
  }, []);

	useEffect(() => {
		const loadModels = async () => {
			try {
				const modelsFromServer = await getAllModels();
				setModels(modelsFromServer);
			} catch (error) {
				throw new Error(`${error}`);
			}
		};

		loadModels();
	}, []);

	useEffect(() => {
		setListOfSquares(
			Array.from({ length: selectedModel }, (_, idx) => ({
				id: idx,
				rowsAmount: selectedModel,
			}))
		);
	}, [selectedModel]);

	return (
		<div className={classNames('squares')}>
			<div className={classNames('squares__controllers')}>
				<Dropdown options={models} onSelect={handleModelSelect} />
				<StartButton onClick={handleStart} isStarted={isStarted}/>
			</div>
			<ul className={classNames('squares__list')}>
				{listOfSquares.map((square) => (
					<SquareRow
            key={square.id}
            square={square}
            isStarted={isStarted}
          />
				))}
			</ul>
		</div>
	);
};

export default memo(SquaresList);
