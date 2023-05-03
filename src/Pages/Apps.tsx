import { ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getApplicationsAsync } from "../features/applicationsSlice";
import { Application } from "../data/Interfaces/Applications";
import { MdChevronLeft, MdChevronRight, MdStarRate } from "react-icons/md";
import { IconType } from "react-icons";
import useNavbarContext from "../contexts/NavbarContext";
import { Link, useNavigate } from "react-router-dom";
import RouteTo from "../data/Routes";
import { ItemType } from "../data/Interfaces/WishList";
import { Game } from "../data/Interfaces/Games";

export const ScrollButton = ({
	Icon,
	direction,
	handleArrowClick,
	top,
	xAxis,
}: {
	Icon: IconType;
	direction: "right" | "left";
	handleArrowClick: (distance: number) => void;
	top: string;
	xAxis: string;
}) => {
	const scrollAmount = direction === "right" ? 800 : -800;

	return (
		<button
			style={{
				top: `${top}%`,
				left: `-${direction === "left" ? xAxis : ""}rem`,
				right: `-${direction === "right" ? xAxis : ""}rem`,
				boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
			}}
			className={`absolute transform -translate-y-1/2 z-10 rounded-[28px] bg-white h-14 w-14 text-gray-600 cursor-pointer`}
			onClick={() => handleArrowClick(scrollAmount)}
		>
			<div className="flex justify-center">
				<Icon size="30" />
			</div>
		</button>
	);
};

export const HorizontalScroll = ({ children }: { children: ReactNode }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [leftPointer, setLeftPointer] = useState(0);
	const [rightPointer, setRightPointer] = useState(7);
	const [isOver, setIsOver] = useState(false);

	const handleArrowClick = (distance: number) => {
		if (containerRef.current) {
			containerRef.current.scrollBy({
				left: distance,
				behavior: "smooth",
			});
			if (distance > 0) {
				setLeftPointer((prev) => prev + 5);
				setRightPointer((prev) => prev + 5);
			} else {
				setLeftPointer((prev) => prev - 5);
				setRightPointer((prev) => prev - 5);
			}
		}
	};

	return (
		<div className="relative" onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
			<style>
				{`
			/* Hide scrollbar for Chrome, Safari and Opera */
			.container-snap::-webkit-scrollbar {
			  display: none;
			}
  
			/* Hide scrollbar for IE, Edge and Firefox */
			.container-snap {
			  -ms-overflow-style: none; /* IE and Edge */
			  scrollbar-width: none; /* Firefox */
			}
		  `}
			</style>
			<div className="flex overflow-x-auto gap-0.5 container-snap snap-x snap-mandatory" ref={containerRef}>
				{children}
			</div>
			{leftPointer > 0 && isOver && <ScrollButton Icon={MdChevronLeft} direction="left" handleArrowClick={handleArrowClick} top="33" xAxis="1" />}
			{rightPointer < 20 && isOver && <ScrollButton Icon={MdChevronRight} direction="right" handleArrowClick={handleArrowClick} top="33" xAxis="1" />}
		</div>
	);
};

export const Item = ({ item, itemType }: { item: Application | Game; itemType: ItemType }) => {
	return (
		<Link
			key={item.appId}
			to={`${itemType == ItemType.Application ? RouteTo.AppDetailsPage(item.appId) : RouteTo.GameDetailsPage(item.appId)}`}
			className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start"
		>
			<img src={item.icon!} className="rounded-[20%] mb-2" style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }} />
			<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-2">{item.title}</p>
			<div className="flex text-[#5f6368] text-sm">
				<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{item.scoreText}</p>
				<MdStarRate className="self-center"/>
			</div>
		</Link>
	);
};

const Section = ({ section, filter }: { section: string; filter: (arr: Application[]) => Application[] }) => {
	const { applications, isLoading } = useAppSelector((state) => state.Applications);
	const navigate = useNavigate();
	function toAppPage(appId: string): void {
		navigate(RouteTo.AppDetailsPage(appId));
	}

	return (
		<>
			{!isLoading && (
				<div className="mb-7">
					<h1 className="text-2xl leading-6 font-google font-medium mb-5 ">{section}</h1>
					<HorizontalScroll>
						{filter(applications)
							.slice(0, 20)
							.map((app) => (
								<Item key={app.appId} item={app} itemType={ItemType.Application}/>
							))}
					</HorizontalScroll>
				</div>
			)}
		</>
	);
};

const Apps = () => {
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state) => state.Applications);
	const { targetRef, setTopValue, topValue } = useNavbarContext();

	useEffect(() => {
		const handleScroll = () => {
			const rect = targetRef.current?.getBoundingClientRect();
			setTopValue(rect!.top);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [topValue]);

	return (
		<>
			{!isLoading && (
				<div ref={targetRef} className="relative top-16">
					<Section
						section="Top Selling"
						filter={(arr: Application[]): Application[] => [...arr].sort((a, b) => (b.maxInstalls ?? 0) - (a.maxInstalls ?? 0))}
					/>
					<Section
						section="New Releases"
						filter={(arr: Application[]): Application[] => [...arr].sort((a, b) => parseInt(b.released ?? "0") - parseInt(a.released ?? "0"))}
					/>
					<Section section="Recommended" filter={(arr: Application[]): Application[] => [...arr].sort((a, b) => (b.score ?? 0) - (a.score ?? 0))} />
				</div>
			)}
		</>
	);
};

export default Apps;
