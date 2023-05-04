import { NavLink } from "react-router-dom";
import RouteTo from "../data/Routes";

import axios from 'axios'

const Foot = () => {
    let country:string = "";
    
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        country = data.country_name;
    });
	return (
		<>
        <footer>
					<div className="flex justify-start gap-10 text-sm w-full m-7 mb-0">
						<NavLink
							to={RouteTo.ToS}
						>
							<div className="flex flex-col justify-center">
								<span className="my-[1.3rem]">Terms of service</span>
							</div>
						</NavLink>
						<NavLink
							to={RouteTo.About}
						>
							<div className="flex flex-col justify-center">
								<span className="my-[1.3rem]">About</span>
                                </div>
						</NavLink>

                        <div className="flex flex-col justify-center">
							<span className="my-[1.3rem]">{country}</span>
                        </div>


					</div>
				</footer>
		</>
	);
};

export default Foot;