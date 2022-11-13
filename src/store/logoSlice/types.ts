
export type Logo = {
	shopTitle: string;
	shopSubTitle: string;
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'loaded',
	ERROR = 'error',
}

export interface LogoSliceState {
	value: number,
	bookID: number[],
	logo: Logo | any,
	status: Status
}