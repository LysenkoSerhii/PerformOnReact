import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import type { ISquare } from '../../shared/types';

interface SelectedSquareContextType {
	selectedSquare: ISquare[];
	setSelectedSquare: Dispatch<SetStateAction<ISquare[]>>;
}

export const SelectedSquareContext = createContext<SelectedSquareContextType>({
	selectedSquare: [],
	setSelectedSquare: () => {},
});

export const SelectedSquareProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [selectedSquare, setSelectedSquare] = useState<ISquare[]>([]);

	const contextValue = {
		selectedSquare,
		setSelectedSquare,
	};

	return (
		<SelectedSquareContext.Provider value={contextValue}>
			{children}
		</SelectedSquareContext.Provider>
	);
};
