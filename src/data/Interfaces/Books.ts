export interface BooksDataAPIResponse {
	id           : string;
	title        : string;
	description  : string | null;
	authors      : string | null;
	image        : string | null;
	previewLink  : string | null;
	publisher    : string | null;
	publishedDate: string | null;
	infoLink     : string | null;
	categories   : string | null;
	ratingsCount : number | null;
}
export interface BooksData {
	id           : string;
	title        : string;
	description  : string | null;
	authors      : string[] | null;
	image        : string | null;
	previewLink  : string | null;
	publisher    : string | null;
	publishedDate: string | null;
	infoLink     : string | null;
	categories   : string | null;
	ratingsCount : number | null;
}

export interface BooksReview {
    id               : number;
    book_Id          : string;
    title            : string | null;
    price            : number | null;
    user_Id          : string | null;
    profileName      : string | null;
    reviewhelpfulness: string;
    reviewscore      : number;
    reviewtime       : number;
    reviewsummary    : string;
    reviewtext       : string;
}