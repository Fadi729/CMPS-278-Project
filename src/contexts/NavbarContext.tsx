import { ReactNode, createContext, useContext, useRef, useState } from "react";

const NavbarContext = createContext<navbarContext>({
	targetRef: undefined as unknown as React.RefObject<HTMLDivElement>,
	topValue: null,
	setTopValue: undefined as unknown as React.Dispatch<React.SetStateAction<number | null>>
});

interface navbarContext {
	targetRef: React.RefObject<HTMLDivElement>;

	topValue: number | null;
	setTopValue: React.Dispatch<React.SetStateAction<number | null>>
}

export const NavbarContextProvider = ({ children }: { children: ReactNode }) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const [topValue, setTopValue] = useState<number | null>(null);


	return (
		<NavbarContext.Provider
			value={{
				targetRef,
				topValue,
				setTopValue
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
};

const useNavbarContext = () => useContext(NavbarContext);

export default useNavbarContext;
