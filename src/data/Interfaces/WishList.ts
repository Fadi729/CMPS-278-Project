export interface WishList {
    userId: string;
    wishListItems: WishListItem[];
}

export interface WishListItem {
	itemType: ItemType;
    itemId: string
}

export enum ItemType {
	Application = "Application",
	Game = "Game",
	Movie = "Movie",
	Book = "Book",
}
