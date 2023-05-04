export interface WishList {
    userId: string;
    items: WishListItem[];
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
