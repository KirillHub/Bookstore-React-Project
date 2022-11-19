export interface TBooks{
	id: number;
	counter: number;
	imageUrl: string;
	bookName: string;
	authorName: string;
	bookRating: number
	price: number;
	description: string;
	category: string;
	categoryRu: string;
	priceWithoutDiscount: string;
};



export enum Status {
	LOADING = 'loading',
	SUCCESS = 'loaded',
	ERROR = 'error',
}


export interface BooksSliceState {
	selectedBooks: TBooks[] 
	books: TBooks[]
	booksSort: TBooks[]
	discountBooks: TBooks[]
	status: Status
}