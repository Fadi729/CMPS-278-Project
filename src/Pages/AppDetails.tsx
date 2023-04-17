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
		<div className="relative top-12 h-full">
			<div className="flex flex-col w-3/4 mt-12">
				<div className="flex flex-col justify-between">
					<div className="text-[4rem] leading-[4.75rem] font-google font-medium">{app?.title}</div>
					<div className="mt-4">
						<div className="text-[#01875f] font-medium">{app?.developer}</div>
						<div className="flex gap-1 text-xs" style={{ color: "rgb(95,99,104)", fontFamily: "Roboto,Arial,sans-serif" }}>
							{app?.adSupported && <div>Contains ads</div>}
							<div className="self-center">.</div>
							{app?.offersIAP && <div>In-app purchases</div>}
						</div>
					</div>
				</div>

				<div className="flex items-center py-4 gap-2 font-google text-sm">
					<div className="flex flex-col items-center p-5 pl-0">
						<div className="flex items-center h-6">
							<div>{app?.scoreText}</div>
							<MdStarRate />
						</div>
						<div style={{ color: "rgb(95,99,104)" }} className="text-xs h-5 font-normal">
							{trimNumber(app?.ratings!)} reviews
						</div>
					</div>
                    <div></div>
					<div className="flex flex-col justify-center items-center p-5">
						<div className="flex items-center h-6">
							<div>{trimNumber(parseInt(app?.installs!.replace(RegExp(/,/g), "")!))}</div>
						</div>
						<div style={{ color: "rgb(95,99,104)" }} className="text-xs h-5">
							Downloads
						</div>
					</div>
					<div className="flex flex-col justify-center items-center p-5">
						<div style={{ color: "rgb(95,99,104)" }} className="text-xs h-5">
							{app?.contentRating}
						</div>
					</div>
				</div>

				<button className="bg-green-600 text-white">Install</button>
			</div>
			<div className="inline absolute right-0 top-12 ">
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
			<div></div>
		</div>
	);
};

export default AppDetails;
