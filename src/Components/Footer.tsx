import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RouteTo from "../data/Routes";

import axios from 'axios'

const Foot = () => {
	const [state, setState] = useState({
		countryName: "",
	  });
	
	  const getGeoInfo = () => {
		axios
		  .get("https://ipapi.co/json/")
		  .then((response) => {
			let data = response.data;
			setState({
			  ...state,
			  countryName: data.country_name,
			});
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  };
	
	  useEffect(() => {
		getGeoInfo();
	  }, []);
	


	return (
		<>
        <footer>
					<div className="flex justify-between gap-10 text-sm w-full m-7 mb-0 ml-0">
						<NavLink
							to={RouteTo.ToS}
						>
							<div className="flex flex-col justify-between">
								<span className="my-[1.3rem]">Terms of service</span>
							</div>
						</NavLink>
						<NavLink
							to={RouteTo.About}
						>
							<div className="flex flex-col justify-between">
								<span className="my-[1.3rem]">About</span>
                                </div>
						</NavLink>

                        <div className="flex flex-col justify-between">
							<span className="my-[1.3rem]">Country: {state.countryName}</span>
                        </div>


					</div>
				</footer>
		</>
	);
};

export default Foot;