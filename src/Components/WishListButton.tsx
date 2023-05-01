import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItemToWishListAsync, deleteItemFromWishListAsync } from "../features/wishListSlice";
import { WishListItem } from "../data/Interfaces/WishList";

const AddToWishListButton = ({ item }: { item: WishListItem }) => {
	const dispatch = useAppDispatch();

	const { wishList } = useAppSelector((state) => state.WishList);

	// TODO: check if item is in wishlist 
	const isItemInWishList = true

	const handleAddToWishList = async () => {
		dispatch(addItemToWishListAsync(item));
	};

	const handleRemoveFromWishList = async () => {
		dispatch(deleteItemFromWishListAsync(item.itemId));
	};

	return (
		<button
			onClick={isItemInWishList ? handleRemoveFromWishList : handleAddToWishList}
			className={`flex justify-center items-center font-Roboto p-1 rounded-lg text-[#00a173] text-sm font-medium hover:bg-[#f6fafe] ${isItemInWishList ? 'w-48' : 'w-36'}`}
		>
			{isItemInWishList ? (
				<>
					<svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
						<path
							fill="#01875f"
							d="M17 3H7C5.8965 3 5.01075 3.8955 5.01075 5L5 21L12 18L19 21V5C19 3.8955 18.1045 3 17 3ZM10.4228 14.2L6.74775 10.525L8.2325 9.04025L10.4228 11.2305L15.8573 5.796L17.342 7.28075L10.4228 14.2Z"
						></path>
					</svg>
					<span>Remove from wishlist</span>
				</>
			) : (
				<>
					<svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
						<path
							fill="#01875f"
							d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"
						></path>
					</svg>
					<span>Add to wishlist</span>
				</>
			)}
		</button>
	);
};

export default AddToWishListButton;
