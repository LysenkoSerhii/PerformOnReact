import { memo, useCallback, useContext, useState } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { SelectedSquareContext } from '../../shared/context';
import type { ISquare } from '../../shared/types';
import './SquareItem.scss';

interface SquareItemProps {
  square: ISquare;
  isStarted: boolean;
}

const SquareItem: FC<SquareItemProps> = ({ square, isStarted }) => {
  const { setSelectedSquare } = useContext(SelectedSquareContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onHoverField = useCallback(
    (clickedSquare: ISquare) => {
      setSelectedSquare((prev) => {
        const index = prev.findIndex(
          (square) => square.id === clickedSquare.id
        );

        return index !== -1
          ? prev.filter((_, i) => i !== index)
          : [clickedSquare, ...prev];
      });
    },
    [setSelectedSquare]
  );

  const removeField = useCallback(
    (clickedSquare: ISquare) => {
      setSelectedSquare((prev) =>
        prev.filter((square) => square.id !== clickedSquare.id)
      );
    },
    [setSelectedSquare]
  );

  const handleOnHover = useCallback(() => {
    if (isStarted) {
      if (isActive) {
        setIsActive(false);
        removeField(square);
      } else {
        setIsActive(true);
        onHoverField(square);
      }
    }
  }, [isActive, onHoverField, removeField, square, isStarted]);

  const className = classNames('square__item', { active: isActive });

  return (
    <span key={square.id} onMouseEnter={handleOnHover} className={className} />
  );
};

export default memo(SquareItem);
