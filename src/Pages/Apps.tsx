import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getApplicationAsync } from "../features/applicationsSlice";
import { Application } from "../data/Interfaces/Applications";
import { MdStarRate } from "react-icons/md";

const Section = ({ section, filter }: { section: string; filter: (arr: Application[]) => Application[] }) => {
	const { applications, isLoading } = useAppSelector((state) => state.Applications);

	return (
		<div className="mb-2">
			<h1 className="text-lg leading-6 font-google font-medium mb-5 text-center">{section}</h1>

			{!isLoading && (
				<>
					<div className="flex gap-2 justify-center overflow-x-auto font-fontAlt">
						{filter(applications)
							.slice(0, 10)
							.map((app) => (
								<>
									{console.log(section, app)}

									<div key={app.appId} className="shrink-0 p-3 w-28 hover:bg-[#f5f5f5] rounded-lg">
										<img
											src={app.icon!}
											className="rounded-[20%] mb-2"
											style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
										/>
										<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-2">{app.title}</p>
										<div className="flex text-[#5f6368] text-sm">
											<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{app.scoreText}</p>
                      <MdStarRate />
										</div>
									</div>
								</>
							))}
					</div>
				</>
			)}
		</div>
	);
};

const Apps = () => {
	const dispatch = useAppDispatch();

	async function getApps() {
		await dispatch(getApplicationAsync());
	}

	useEffect(() => {
		getApps();
	}, []);

	return (
		<div className="relative top-16">
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
	);
};

export default Apps;
