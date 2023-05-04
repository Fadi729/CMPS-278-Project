import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ItemType } from "../data/Interfaces/WishList";
import { Item, HorizontalScroll } from "./Apps";
import { getWishListAsync } from "../features/wishListSlice";
import { Application } from "../data/Interfaces/Applications";
import { Game } from "../data/Interfaces/Games";
import Movie from "../data/Interfaces/Movies";
import { MovieItem } from "./Movies";

const WishListHelper = () => {
	const { wishList, isLoading } = useAppSelector((state) => state.WishList);
	const { applications } = useAppSelector((state) => state.Applications);
	const { games } = useAppSelector((state) => state.Games);
	const { movies } = useAppSelector((state) => state.Movies);
	// const { books } = useAppSelector((state) => state.Books);

	const appsAndGames = [
		...wishList.items
			.filter((item) => item.itemType === ItemType.Application || item.itemType === ItemType.Game)
			.map((item) => {
				return {
					itemType: item.itemType,
					item: (item.itemType === ItemType.Application
						? applications.find((app) => app.appId === item.itemId)
						: games.find((game) => game.appId === item.itemId)) as Game | Application,
				};
			}),
	];

	const movieList = [
		...wishList.items
			.filter((item) => item.itemType === ItemType.Movie)
			.map((item) => {
				return {
					itemType: item.itemType,
					item: movies.find((movie) => movie.id === parseInt(item.itemId)) as Movie,
				};
			}),
	];

	// const booksIds = wishList.wishListItems.filter((item) => item.itemType === ItemType.Book).map((item) => item.itemId);
	// const bookItems = books.filter((book) => book.id in booksIds);

	return (
		<div className="relative top-16 font-Roboto">
			<h1 className="text-2xl mb-5">Wishlist</h1>

			<div className="flex">
				<div>
					<h2 className="text-lg text-[#595a5c] font-google">Apps & Games</h2>
					<HorizontalScroll>
						{appsAndGames.map((item) => (
							<Item key={item.item.appId} item={item.item} itemType={item.itemType} />
						))}
					</HorizontalScroll>

					<h2 className="text-lg text-[#595a5c] font-google">Movies</h2>
					<HorizontalScroll>
						{movieList.map((movie) => (
							<MovieItem key={movie.item.id} movieItem={movie.item} />
						))}
					</HorizontalScroll>
				</div>
				{/* <div>Books</div>
				<div>Movies</div> */}
			</div>
		</div>
	);
};

const WishList = () => {
	const { wishList, isLoading } = useAppSelector((state) => state.WishList);
	const { isSignedIn } = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();
	async function getWishlist() {
		await dispatch(getWishListAsync());
	}

	useEffect(() => {
		if (Object.keys(wishList).length === 0) {
			getWishlist();
		}
	}, []);

	return (
		<>
			{isSignedIn && !isLoading ? (
				<WishListHelper />
			) : (
				<div className="relative top-16 font-Roboto text-center">
					<p className="text-lg">Please sign in to view your Wishlist</p>
				</div>
			)}
		</>
	);
};

export default WishList;
