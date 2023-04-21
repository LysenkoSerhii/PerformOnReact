import { memo } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';

import './StartButton.scss';

interface StartButtonProps {
	onClick: () => void;
  isStarted: boolean
}

const StartButton: FC<StartButtonProps> = ({ onClick, isStarted }) => {
	return (
		<button
			type={'button'}
			className={classNames('start__button')}
			onClick={onClick}
		>
			{isStarted ? 'STOP' : 'START' }
		</button>
	);
};

export default memo(StartButton);
