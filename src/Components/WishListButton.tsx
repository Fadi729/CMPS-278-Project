import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItemToWishListAsync, deleteItemFromWishListAsync } from "../features/wishListSlice";
import { ItemType, WishListItem } from "../data/Interfaces/WishList";

const AddToWishListButton = ({ item }: { item: WishListItem }) => {
	const dispatch = useAppDispatch();

	const { wishList } = useAppSelector((state) => state.WishList);
	const { isSignedIn } = useAppSelector((state) => state.auth);

	const isItemInWishList = wishList.items? wishList.items.some((wishListItem) => wishListItem.itemId === item.itemId): false;

	const handleAddToWishList = async () => {
		if(!isSignedIn) return alert("You need to be signed in to add items to your wishlist");
		dispatch(addItemToWishListAsync(item));
	};

	const handleRemoveFromWishList = async () => {
		dispatch(deleteItemFromWishListAsync(item.itemId));
	};

	const getColor = () => {
		if (item.itemType === ItemType.Application || item.itemType === ItemType.Game) {
			return {
				iconColor: "#01875f",
				textColor: "#00a173",
			};
		} else if (item.itemType === ItemType.Movie) {
			return {
				iconColor: "#e33659",
				textColor: "#e33659",
			};
		} else if(item.itemType === ItemType.Book){
			return {
				iconColor: "#0379CA",
				textColor: "#0379CA",
			};
		}
	};

	const getHoverColor = () => {
		if (item.itemType === ItemType.Application || item.itemType === ItemType.Game) {
			return "#f6fafe";
		} else if (item.itemType === ItemType.Movie) {
			return "#383a4d";
		} else if(item.itemType === ItemType.Book){
			return "#F7FAFE";
		}
	};

	const color = getColor();
	const hoverColor = getHoverColor();

	return (
		<button
			onClick={isItemInWishList ? handleRemoveFromWishList : handleAddToWishList}
			// @ts-ignore
			onMouseEnter={(e) => (e.target.style.background = hoverColor)}
			// @ts-ignore
			onMouseLeave={(e) => (e.target.style.background = "transparent")}
			className={`flex justify-center items-center font-Roboto p-1 rounded-lg  text-sm font-medium}] ${isItemInWishList ? "w-48" : "w-36"}`}
			style={{ color: color!.textColor }}
		>
			{isItemInWishList ? (
				<>
					<svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
						<path
							fill={color!.iconColor}
							d="M17 3H7C5.8965 3 5.01075 3.8955 5.01075 5L5 21L12 18L19 21V5C19 3.8955 18.1045 3 17 3ZM10.4228 14.2L6.74775 10.525L8.2325 9.04025L10.4228 11.2305L15.8573 5.796L17.342 7.28075L10.4228 14.2Z"
						></path>
					</svg>
					<span>Remove from wishlist</span>
				</>
			) : (
				<>
					<svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
						<path
							fill={color!.iconColor}
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
