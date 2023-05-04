import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdHelpOutline, MdSearch } from "react-icons/md";
import {
	CredentialResponse,
	GoogleLogin,
	TokenResponse,
	useGoogleLogin,
} from "@react-oauth/google";
import RouteTo from "../data/Routes";
import useNavbarContext from "../contexts/NavbarContext";
import { RiHeart3Fill } from "react-icons/ri";
import { FaSignInAlt, FaSignOutAlt, FaHistory } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks";
import { LoginAsync, signOut } from "../features/authSlice";
import axios from "axios";
// import { not } from "cheerio/lib/api/traversing";

const NavBar = () => {
	const [underlineApps, setUnderlineApps] = useState(false);
	const [underlineGames, setUnderlineGames] = useState(false);
	const [underlineMovies, setUnderlineMovies] = useState(false);
	const [underlineBooks, setUnderlineBooks] = useState(false);
	const [open, setOpen] = useState(false);
	const [notSearch, setNotSearch] = useState(true);

	const { topValue } = useNavbarContext();
	const { isSignedIn, user } = useAppSelector((state) => state.auth);

	const imgRef = useRef(null);
	const menuRef = useRef(null);

	function Menu(e: any) {
		e.stopPropagation();
		setOpen(!open);
	}

	function Search(e: any) {
		e.stopPropagation();
		setNotSearch(!notSearch);
	}
	var searchRef = useRef(null);
	const navigate = useNavigate();
	function toSearchPage(key: string): void {
		navigate(RouteTo.SearchPage(key));
		console.log("going to search page");
	}
	function handleClick(e: any) {
		if (e.key === "Enter") {
			if (searchRef.current) {
				toSearchPage(searchRef.current["value"]);
			}
		}
	}

	/**?
	 * document.addEventListener("click",(e) => {
		if(searchRef.current !== e.target && searchIconRef.current !== e.target){
			setNotSearch(true)
		}
	})

	useEffect(() => {
		const fn = (e: any) => {
			if(e.target !== searchRef.current){
				setNotSearch(true)
			}
		}
		if (!notSearch) {
			window.addEventListener("click", fn)
		}else{
			window.removeEventListener("click", fn)
		}
	}, []);

	 */

	document.addEventListener("click", (e: any) => {
		if (!notSearch) {
			if (e.target !== searchRef.current) {
				setNotSearch(true);
			}
		}
		if (open) {
			if (e.target !== menuRef.current) {
				setOpen(false);
			}
		}
	});

	const dispatch = useAppDispatch();

	const Login = (response: TokenResponse) => {
		dispatch(LoginAsync(response));
	};

	const handleSignIn = useGoogleLogin({
		onSuccess: async (tokenResponse) => Login(tokenResponse),
	});

	const handleWishListNavigation = () => {
		navigate(RouteTo.Wishlist);
	};

	const handleSignOut = () => {
		dispatch(signOut());
	};

	return (
		<>
			<header
				className="h-16 fixed top-0 text-[#404144] w-full z-10"
				style={{
					boxShadow:
						topValue !== null && topValue! < 65
							? "0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)"
							: "",
				}}
				id="navbar"
			>
				<nav className="flex w-full h-full items-center font-google bg-white">
					<div
						className="flex mr-3 ml-7 w-[24%]"
						style={{ marginLeft: "26px" }}
					>
						<svg
							className="h-10 w-11 mr-2"
							aria-hidden="true"
							viewBox="0 0 40 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fill="none" d="M0,0h40v40H0V0z"></path>
							<g>
								<path
									d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
									fill="#EA4335"
								></path>
								<path
									d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
									fill="#FBBC04"
								></path>
								<path
									d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
									fill="#4285F4"
								></path>
								<path
									d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
									fill="#34A853"
								></path>
							</g>
						</svg>
						<span
							className="font-medium leading-7 tracking-[0] text-[1.375rem] text-[#5f6368]  self-center"
							style={{ width: "139px", fontSize: "22.2px", marginTop: "-1px" }}
						>
							google_logo Play
						</span>
					</div>
					<div className="flex justify-start gap-8 text-[14.5px] w-full text-[#5f6368] mt-1">
						{!notSearch ? (
							<div style={{ position: "relative", display: "inline-block" }}>
								<input
									ref={searchRef}
									onKeyDown={(e) => {
										handleClick(e);
									}}
									type="text"
									className="form-control"
									style={{
										marginLeft: "40px",
										width: "720px",
										height: "50px",
										boxShadow: "5px 5px 15px -1px grey",
										marginBottom: "4px",
										backgroundImage:
											"url(https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "20px",
										backgroundPositionX: "15px",
										backgroundPositionY: "15px",
										paddingLeft: "50px",
									}}
									placeholder="Search"
								></input>
							</div>
						) : (
							<>
								<NavLink
									to={RouteTo.Games}
									className={({ isActive }) => {
										setUnderlineGames(isActive);
										return isActive
											? "text-[#01875f]"
											: "hover:text-black transition duration-300 ease-in-out";
									}}
								>
									<div className="flex flex-col justify-center">
										<span className="my-[1.3rem]">Games</span>
										{underlineGames && (
											<div className="w-full h-[3px] bg-[#01875f] rounded-full"></div>
										)}
									</div>
								</NavLink>
								<NavLink
									to={RouteTo.Apps}
									className={({ isActive }) => {
										setUnderlineApps(isActive);
										return isActive
											? "text-[#01875f]"
											: "hover:text-black transition duration-300 ease-in-out";
									}}
								>
									<div className="flex flex-col justify-center">
										<span className="my-[1.3rem]">Apps</span>
										{underlineApps && (
											<div className="w-full h-[3px] bg-[#01875f] rounded-full"></div>
										)}
									</div>
								</NavLink>
								<NavLink
									to={RouteTo.Movies}
									className={({ isActive }) => {
										setUnderlineMovies(isActive);
										return isActive
											? "text-[#c71c56]"
											: "hover:text-black transition duration-300 ease-in-out";
									}}
								>
									<div className="flex flex-col justify-center">
										<span className="my-[1.3rem]">Movies</span>
										{underlineMovies && (
											<div className="w-full h-[3px] bg-[#c71c56] rounded-full"></div>
										)}
									</div>
								</NavLink>
								<NavLink
									to={RouteTo.Books}
									className={({ isActive }) => {
										setUnderlineBooks(isActive);
										return isActive
											? "text-[#0179ca]"
											: "hover:text-black transition duration-300 ease-in-out";
									}}
								>
									<div className="flex flex-col justify-center">
										<span className="my-[1.3rem]">Books</span>
										{underlineBooks && (
											<div className="w-full h-[3px] bg-[#0179ca] rounded-full"></div>
										)}
									</div>
								</NavLink>
								{/* <GoogleLogin
									onSuccess={async (credentialResponse) => {
										console.log(credentialResponse);
									}}
									onError={() => {
										console.log("Login Failed");
									}}
								/> */}
							</>
						)}
					</div>
					<div className="flex justify-end items-center w-1/2 gap-5 p-2">
						<div
							className="hover:bg-[#f5f5f5]"
							style={{
								marginRight: "-17px",
								borderRadius: "50% 50% 50% 50%",
								padding: "10px",
							}}
						>
							<MdSearch size={25} color="#404144" />
						</div>
						<div
							className="hover:bg-[#f5f5f5]"
							style={{
								marginRight: "-17px",
								borderRadius: "50% 50% 50% 50%",
								padding: "10px",
							}}
						>
							<MdHelpOutline size={25} color="#404144" />
						</div>
						<div
							className="hover:bg-[#f5f5f5]"
							style={{ borderRadius: "50% 50% 50% 50%", padding: "10px" }}
						>
							<img
								ref={imgRef}
								src={
									isSignedIn
										? user?.picture
										: "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
								}
								className="h-8 w-8 rounded-full"
								onClick={Menu}
							/>
						</div>
					</div>
				</nav>
				{open && (
					<div
						ref={menuRef}
						style={{
							float: "right",
							boxShadow: "-5px 5px 50px -25px grey",
							marginRight: "10px",
							borderRadius: "3% 3% 3% 3%",
							paddingTop: "10px",
							paddingBottom: "10px",
							backgroundColor: "white",
						}}
					>
						<ul>
							<li
								onClick={handleWishListNavigation}
								className="hover:bg-[#f5f5f5]"
								style={{ padding: "12.5px 200px 12.5px 10px" }}
							>
								<RiHeart3Fill
									style={{ display: "inline", marginRight: "10px" }}
								/>
								Wishlist
							</li>
							<li
								className="hover:bg-[#f5f5f5]"
								style={{ padding: "12.5px 200px 12.5px 10px" }}
							>
								<FaHistory style={{ display: "inline", marginRight: "10px" }} />
								History
							</li>
							{!isSignedIn ? (
								<li
									onClick={() => handleSignIn()}
									className="hover:bg-[#f5f5f5]"
									style={{ padding: "12.5px 200px 12.5px 10px" }}
								>
									<FaSignInAlt
										style={{ display: "inline", marginRight: "10px" }}
									/>
									Sign In
								</li>
							) : (
								<>
									<hr />
									<li
										onClick={handleSignOut}
										className="hover:bg-[#f5f5f5]"
										style={{ padding: "12.5px 200px 12.5px 10px" }}
									>
										<FaSignOutAlt
											style={{ display: "inline", marginRight: "10px" }}
										/>
										Sign Out
									</li>
								</>
							)}
						</ul>
					</div>
				)}
			</header>
			<div className="relative px-28 pt-5">
				<Outlet />
			</div>
		</>
	);
};

export default NavBar;
