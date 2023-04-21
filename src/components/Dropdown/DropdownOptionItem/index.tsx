import { memo, useCallback } from 'react';
import { FC } from 'react';
import classNames from 'classnames';
import type { IModels } from '../../../shared/types';

interface DropdownOptionItemProps {
	field: IModels['field'];
	name: IModels['name'];
	onSelect: (item: number) => void;
}

const DropdownOptionItem: FC<DropdownOptionItemProps> = ({
	field,
	name,
	onSelect,
}) => {
	const handleClick = useCallback(() => onSelect(field), [field, onSelect]);

	return (
		<button
			type={'button'}
			className={classNames('dropdown__field', 'dropdown__field--option')}
			onClick={handleClick}
		>
			<span className={classNames('dropdown__field--name')}>{name}</span>
		</button>
	);
};

export default memo(DropdownOptionItem);
