import { memo } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';

import '../Dropdown.scss';

interface DropdownButtonProps {
	isFocusing: boolean;
	onClick: () => void;
}

const DropdownButton: FC<DropdownButtonProps> = ({ isFocusing, onClick }) => {
	return (
		<button
			type='button'
			className={classNames('dropdown__field', {
				'dropdown__field--focused': isFocusing,
			})}
			onClick={onClick}
		>
			<span className={classNames('dropdown__field--default-name')}>{'Easy'}</span>
			<img
				className={classNames('dropdown__button')}
				width={'10'}
				height={'6'}
				src={'assets/dropdown.svg'}
				alt={'Dropdown arrow'}
			/>
		</button>
	);
};

export default memo(DropdownButton);
