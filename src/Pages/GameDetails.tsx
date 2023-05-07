import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { MdChevronLeft, MdChevronRight, MdLanguage, MdOutlineEmail, MdOutlinePlace, MdOutlineVerifiedUser, MdStarRate } from "react-icons/md";
import { Game, GameReview } from "../data/Interfaces/Games";
import { ScrollButton } from "./Apps";
import { getGamesAsync } from "../features/gamesSlice";
import useNavbarContext from "../contexts/NavbarContext";
import AddToWishListButton from "../Components/WishListButton";
import { ItemType } from "../data/Interfaces/WishList";

function trimNumber(num: number): string {
	const sizes = ["K", "M", "B", "T"];
	const abbrev = ["", ...sizes];
	const i = Math.floor(Math.log10(num) / 3);
	const trimmedNum = num / Math.pow(10, i * 3);
	const suffix = abbrev[i];
	return trimmedNum.toFixed(0) + suffix;
}

const AppHeader = ({ app }: { app: Game }) => {
	return (
		<>
		<div className="flex flex-row justify-evenly">
			<div>
			<div className="flex flex-col justify-between">
				<div className="text-[4rem] leading-[4.75rem] font-google font-medium mt-52 ml-4">{app?.title}</div>
				<div className="mt-4 ml-5">
					<div className="text-[#01875f] font-google font-medium ">{app?.developer}</div>
					<div className="flex gap-1 text-xs " style={{ color: "rgb(95,99,104)" }}>
						{app?.adSupported && <div>Contains ads</div>}
						{app?.offersIAP && <div className="before:content-['·']"> In-app purchases</div>}
					</div>
				</div>
			</div>

			<div className="flex items-center py-4 gap-2 font-google text-sm ml-4">
				<div className="flex flex-col items-center p-4 pl-0">
					<div className="flex items-center h-6">
						<div>
							<img
								src={app?.icon!}
								className="rounded-[20%] w-12"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center p-4">
					<div className="flex items-center h-6">
						<div>{app?.scoreText}</div>
						<MdStarRate />
					</div>
					<div style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5 font-normal">
						{trimNumber(app?.ratings!)} reviews
					</div>
				</div>
				<div></div>
				<div className="flex flex-col justify-center items-center p-4">
					<div className="flex items-center h-6">
						<div>{trimNumber(parseInt(app?.installs!.replace(RegExp(/,/g), "")!))}</div>
					</div>
					<div style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5">
						Downloads
					</div>
				</div>
				<div className="flex flex-col justify-center items-center p-5">
					<div style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5">
						{app?.contentRating}
					</div>
				</div>
			</div>

			<div className="flex gap-2">
				<button className="font-Roboto hover:bg-[#095943] bg-[#01875f] w-56 p-2 rounded-lg text-white">{app?.priceText}</button>
				<AddToWishListButton item={{ itemId: app.appId, itemType: ItemType.Game }} />
			</div>

			{/* <button className="bg-[#01875f] w-56 p-1 rounded text-white mb-3 ml-4">{app?.priceText}</button> */}
			</div>
			
			<div className="ml-4">
				<img 
					src={app?.headerImage!}
					className=" mt-10 mr-5 opacity-30 h-[60%] overflow-visible"
				/>
			</div>
			</div>
		</>
	);
};

const AppScreenShots = ({ screenShots }: { screenShots: string[] | null | undefined }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isOver, setIsOver] = useState(false);

	const handleArrowClick = (distance: number) => {
		if (containerRef.current) {
			containerRef.current.scrollBy({
				left: distance,
				behavior: "smooth",
			});
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
			<div className="flex mb-6 overflow-auto container-snap snap-x snap-mandatory" ref={containerRef}>
				{screenShots?.map((screenshot, index) => (
					<img
						key={index}
						src={screenshot}
						className={`snap-start rounded-lg h-[296px] cursor-pointer ${index === 0 ? "" : "ml-4"} `}
						style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
					/>
				))}
			</div>
			{isOver && <ScrollButton Icon={MdChevronLeft} direction="left" handleArrowClick={handleArrowClick} top="50" xAxis="2" />}
			{isOver && <ScrollButton Icon={MdChevronRight} direction="right" handleArrowClick={handleArrowClick} top="50" xAxis="2" />}
		</div>
	);
};

const RateApp = () => {
	return (
		<div className="mb-6">
			<h2 className="text-2xl font-medium leading-tight">Rate this app</h2>
			<div className="text-sm font-medium leading-tight" style={{ color: "rgb(95,99,104)" }}>
				Tell other what you think
			</div>
			<div className="flex flex-row-reverse mt-2">
				<button className="place-self-end bg-[#01875f] w-40 p-1 rounded text-white">Write review</button>
			</div>
		</div>
	);
};

const AppRatings = ({ scoreText, ratings, histogram }: { scoreText: string; ratings: number; histogram: { [key: string]: number } }) => {
	return (
		<>
			<h2 className="text-2xl font-medium leading-tight">Ratings and reviews</h2>
			<div className="flex gap-6 pt-5">
				<div className="flex flex-col w-fit">
					<div className="text-5xl">{scoreText}</div>
					<p style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5 font-normal">
						{trimNumber(ratings!)} reviews
					</p>
				</div>
				<div className="flex flex-col w-full text-xs">
					{[...Array(5)].map((_, index) => (
						<div key={index} className="flex w-full items-center">
							<div style={{ color: "rgb(95,99,104)" }} className="pr-4">
								{5 - index}
							</div>
							<div className="w-full h-2 rounded-full" style={{ backgroundColor: "rgb(232,234,237" }}>
								<div
									className="bg-[#01875f] h-2 rounded-full"
									style={{ width: `${histogram !== null ? (histogram[String(5 - index)]! / ratings!) * 100 : "0"}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const AppReviews = ({ reviews }: { reviews: GameReview[] }) => {
	return (
		<div className="flex flex-col mb-4">
			{reviews?.map((review) => (
				<div key={review.id} className="flex flex-col mt-5 gap-2 mb-5">
					<div className="flex items-center gap-4">
						<img src={review.userImage!} className="rounded-full h-8 w-8" />
						<div className="text-sm">{review.userName}</div>
					</div>
					<div className="flex">
						<div></div>
						<div style={{ color: "rgb(95,99,104)" }} className="text-xs">
							{Intl.DateTimeFormat("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							}).format(new Date(review.date!))}
						</div>
					</div>
					<div style={{ color: "rgb(95,99,104)" }} className="text-sm">
						{review.text}
					</div>
					<div style={{ color: "rgb(95,99,104)" }} className="text-xs">
						{review.thumbsUp} people found this helpful
					</div>
					<div style={{ color: "rgb(95,99,104)" }} className="flex items-center">
						<div className="text-xs">Did you find this helpful:</div>
						<button style={{ border: "1px rgb(218,220,224) solid" }} className="bg-transparent ml-2 rounded-full px-[10px] text-sm">
							<span className="inline-block my-[0px] mx-[10px]">Yes</span>
						</button>
						<button style={{ border: "1px rgb(218,220,224) solid" }} className="bg-transparent ml-2 rounded-full px-[10px] text-sm">
							<span className="inline-block my-[0px] mx-[10px]">No</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

const AppDescription = ({ description, updated }: { description: string; updated: number }) => {
	return (
		<div>
			<h2 className="text-2xl font-medium leading-tight">About this app</h2>
			<p style={{ color: "rgb(95,99,104)" }} className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: description! }}></p>
			<p className="mt-5 text-sm font-medium">Updated on:</p>
			<p style={{ color: "rgb(95,99,104)" }} className="text-sm mt-2">
				{Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(updated!))}
			</p>
		</div>
	);
};

const DeveloperInfo = ({ app }: { app: Game }) => {
	return (
		<div className="flex flex-col mb-10">
			<h3 className="text-[1.375rem] font-medium font-google mb-4">Developer contact</h3>
			<div className="flex flex-col">
				<div className="p-3 hover:bg-[#f5f5f5] rounded-lg cursor-pointer">
					<a className="flex" target="_blank" href={app?.developerWebsite!}>
						<MdLanguage color="rgb(95,99,104)" size="18" className="mr-4" />
						<div className="flex flex-col">
							<div className="text-sm font-medium" style={{ color: "rgb(32,33,36)" }}>
								Website
							</div>
							<div className="text-sm font-normal" style={{ color: "rgb(95,99,104)" }}>
								{app?.developerWebsite}
							</div>
						</div>
					</a>
				</div>
				<div className="p-3 hover:bg-[#f5f5f5] rounded-lg cursor-pointer">
					<a className="flex" target="_blank" href={`mailto:${app?.developerWebsite!}`}>
						<MdOutlineEmail color="rgb(95,99,104)" size="18" className="mr-4" />
						<div className="flex flex-col">
							<div className="text-sm font-medium" style={{ color: "rgb(32,33,36)" }}>
								Email
							</div>
							<div className="text-sm font-normal" style={{ color: "rgb(95,99,104)" }}>
								{app?.developerEmail}
							</div>
						</div>
					</a>
				</div>
				<div className="p-3 hover:bg-[#f5f5f5] rounded-lg cursor-pointer">
					<a className="flex" target="_blank" href={`https://maps.google.com/?q=${app?.developerAddress!}`}>
						<MdOutlinePlace color="rgb(95,99,104)" size="18" className="mr-4" />
						<div className="flex flex-col">
							<div className="text-sm font-medium" style={{ color: "rgb(32,33,36)" }}>
								Address
							</div>
							<div className="text-sm font-normal" style={{ color: "rgb(95,99,104)" }}>
								{app?.developerAddress}
							</div>
						</div>
					</a>
				</div>
				<div className="p-3 hover:bg-[#f5f5f5] rounded-lg cursor-pointer">
					<a className="flex" target="_blank" href={`${app?.developerWebsite!}`}>
						<MdOutlineVerifiedUser color="rgb(95,99,104)" size="18" className="mr-4" />
						<div className="flex flex-col">
							<div className="text-sm font-medium" style={{ color: "rgb(32,33,36)" }}>
								Address
							</div>
							<div className="text-sm font-normal" style={{ color: "rgb(95,99,104)" }}>
								{app?.developerWebsite}
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

const SimilarApps = ({ appId, appGenre }: { appId: string | undefined; appGenre: string | null | undefined }) => {
	const { games } = useAppSelector((state) => state.Games);
	const similarApps = [...games.filter((obj) => obj.genreId === appGenre), ...games.filter((obj) => obj.genreId !== appGenre)]
		.filter((obj) => obj.appId !== appId)
		.slice(0, 6);
	return (
		<div className="flex flex-col">
			<h3 className="text-[1.375rem] font-medium font-google mb-4">Similar Apps</h3>
			<div className="flex flex-col">
				{...similarApps.map((randomApp, index) => (
					<div key={index} className="p-3 hover:bg-[#f5f5f5] rounded-lg cursor-pointer">
						<NavLink className="flex" to={`${import.meta.env.BASE_URL}games/${randomApp.appId!}/`}>
							<img
								src={randomApp.icon!}
								style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
								className="w-16 h-16 rounded-xl object-cover mr-4"
							/>
							<div className="flex flex-col">
								<div className="text-sm font-medium" style={{ color: "rgb(32,33,36)" }}>
									{randomApp.title}
								</div>
								<div className="text-sm font-normal" style={{ color: "rgb(95,99,104)" }}>
									{randomApp.developer}
								</div>
								<div className="flex text-[#5f6368] text-sm">
									<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{randomApp.scoreText}</p>
									<MdStarRate />
								</div>
							</div>
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};

const GameDetails = () => {
	const { appId } = useParams<{ appId: string }>();
	const { games, isLoading } = useAppSelector((state) => state.Games);
	const { targetRef, setTopValue, topValue } = useNavbarContext();
	const dispatch = useAppDispatch();

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

	const app = games.find((app) => app.appId === appId);
	
	if (app === null || app === undefined) dispatch(getGamesAsync());

	return (
		<>
			{!isLoading && (
				<div ref={targetRef} className="relative top-12 h-full font-fontAlt">
					{/* <div className="flex flex-col w-3/4 mt-12">
						<AppHeader app={app!} />
					</div>
					<div className="inline absolute right-0 top-0">
						<img
							src={app?.icon!}
							className="rounded-[20%] w-[250px]"
							style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
						/>
						<img
							src={app?.icon!}
							className="absolute w-36 left-5 rounded-[20%] -bottom-[15px] opacity-50 blur-md -z-10"
							style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
						/>
					</div> */}
					<div className="flex flex-col" style={{color: "white", backgroundColor: "#202124"} }>
						<AppHeader app={app!} />
					</div>

					<div className="mt-24">
						<div className="flex justify-between">
							<div className="w-2/3">
								<AppScreenShots screenShots={app?.screenshots} />
								<RateApp />
								<AppRatings scoreText={app?.scoreText!} ratings={app?.ratings!} histogram={app?.histogram!} />
								<AppReviews reviews={app?.reviews!} />
								<AppDescription description={app?.descriptionHTML!} updated={app?.updated!} />
							</div>
							<div className="flex flex-col pt-5 w-[364px]">
								<DeveloperInfo app={app!} />
								<SimilarApps appId={app?.appId} appGenre={app?.genreId} />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default GameDetails;
