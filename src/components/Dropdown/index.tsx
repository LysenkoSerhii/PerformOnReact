import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import DropdownButton from './DropdownButton';
import DropdownOptions from './DropdownOptions';
import type { IModels } from '../../shared/types';

import './Dropdown.scss';

interface DropdownProps {
	options: IModels[];
	onSelect: (item: number) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, onSelect }) => {
	const [isFocusing, setIsFocusing] = useState(false);

	const handleButtonClick = useCallback(() => {
		setIsFocusing((isFocusing) => !isFocusing);
	}, []);

	const handleOptionClick = useCallback(
		(item: number) => {
			onSelect(item);
			setIsFocusing(false);
		},
		[onSelect]
	);

	return (
		<div className={classNames('dropdown')}>
			<DropdownButton isFocusing={isFocusing} onClick={handleButtonClick} />
			<DropdownOptions
				options={options}
				onSelect={handleOptionClick}
				isFocusing={isFocusing}
			/>
		</div>
	);
};

export default memo(Dropdown);
