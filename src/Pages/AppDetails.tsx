import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { MdStarRate } from "react-icons/md";

const AppDetails = () => {
	const { appId } = useParams<{ appId: string }>();
	const { applications } = useAppSelector((state) => state.Applications);

	const app = applications.find((app) => app.appId === appId);

	function trimNumber(num: number): string {
		const sizes = ["K", "M", "B", "T"];
		const abbrev = ["", ...sizes];
		const i = Math.floor(Math.log10(num) / 3);
		const trimmedNum = num / Math.pow(10, i * 3);
		const suffix = abbrev[i];
		return trimmedNum.toFixed(0) + suffix;
	}

	return (
		<div className="relative top-12 h-full font-fontAlt">
			<div className="flex flex-col w-3/4 mt-12">
				<div className="flex flex-col justify-between">
					<div className="text-[4rem] leading-[4.75rem] font-google font-medium">{app?.title}</div>
					<div className="mt-4">
						<div className="text-[#01875f] font-google font-medium">{app?.developer}</div>
						<div className="flex gap-1 text-xs" style={{ color: "rgb(95,99,104)" }}>
							{app?.adSupported && <div>Contains ads</div>}
							{app?.offersIAP && <div className="before:content-['·']"> In-app purchases</div>}
						</div>
					</div>
				</div>

				<div className="flex items-center py-4 gap-2 font-google text-sm">
					<div className="flex flex-col items-center p-5 pl-0">
						<div className="flex items-center h-6">
							<div>{app?.scoreText}</div>
							<MdStarRate />
						</div>
						<div style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5 font-normal">
							{trimNumber(app?.ratings!)} reviews
						</div>
					</div>
					<div></div>
					<div className="flex flex-col justify-center items-center p-5">
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

				<button className="bg-[#01875f] w-56 p-1 rounded text-white">{app?.priceText}</button>
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
			</div>
			<div className="mt-24">
				<div className="flex justify-between">
					<div className="w-2/3">
						<div className="flex mb-6">
							{app?.screenshots?.map((screenshot, index) => (
								<img
									src={screenshot}
									className={`rounded-lg h-[296px] w-40 cursor-pointer ${index === 0 ? "" : "ml-4"} `}
									style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
								/>
							))}
						</div>
						<div className="mb-6">
							<h2 className="text-2xl font-medium leading-tight">Rate this app</h2>
							<div className="text-sm font-medium leading-tight" style={{ color: "rgb(95,99,104)" }}>
								Tell other what you think
							</div>
							<div className="flex flex-row-reverse mt-2">
								<button className="place-self-end bg-[#01875f] w-40 p-1 rounded text-white">Write review</button>
							</div>
						</div>
						<div>
							<h2 className="text-2xl font-medium leading-tight">Ratings and reviews</h2>
							<div className="flex gap-6 pt-5">
								<div className="flex flex-col w-fit">
									<div className="text-5xl">{app?.scoreText}</div>
									<p style={{ color: "rgb(95,99,104)" }} className="text-[0.8rem] h-5 font-normal">
										{trimNumber(app?.ratings!)} reviews
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
													style={{ width: `${app?.histogram !== null ? (app?.histogram[String(5 - index)]! / app?.ratings!) * 100 : "0"}%` }}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="flex flex-col mb-4">
								{app?.reviews?.map((review) => (
									<div key={review.id} className="flex flex-col mt-5 gap-4 mb-5">
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
						</div>
						<div>
							<h2 className="text-2xl font-medium leading-tight">About this app</h2>
							<p style={{ color: "rgb(95,99,104)" }} className="mt-2 text-sm" dangerouslySetInnerHTML={{__html: app?.descriptionHTML!}}></p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default AppDetails;
