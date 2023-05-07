export interface History {
    userId: string;
    items: HistoryItem[];
}

export interface HistoryItem {
	itemType: ItemType;
    itemId: string
}

export enum ItemType {
	Application = "Application",
	Game = "Game",
	Movie = "Movie",
	Book = "Book",
}
