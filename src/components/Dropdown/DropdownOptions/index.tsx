import { memo } from 'react';
import classNames from 'classnames';
import DropdownOptionItem from '../DropdownOptionItem';
import type { FC } from 'react';
import type { IModels } from '../../../shared/types';

interface DropdownOptionsProps {
	options: IModels[];
	onSelect: (item: number) => void;
	isFocusing: boolean;
}

const DropdownOptions: FC<DropdownOptionsProps> = ({
	options,
	onSelect,
	isFocusing,
}) => {
	return (
		<div
			className={classNames('dropdown__options', {
				'dropdown__options--hidden': !isFocusing,
			})}
		>
			{options.map(({ id, name, field }) => (
				<DropdownOptionItem
					key={id}
					name={name}
					field={field}
					onSelect={onSelect}
				/>
			))}
		</div>
	);
};

export default memo(DropdownOptions);
