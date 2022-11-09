import { createSlice } from '@reduxjs/toolkit'



export interface BaZaState {
	cringe1: number,
	baZa: object[];
}

const initialState: BaZaState = {
	cringe1: 0,
	baZa: [{
		a() {
			return 0
		}
	}]
}

export const cringeSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {

	},
})

// Action creators are generated for each case reducer function
export const { } = cringeSlice.actions

export const cringeReducer = cringeSlice.reducer



export type UserPost = {
	_id: string;
	post: Post[];
	user: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type Post = {
	text: string;
	videoPost: string;
	imagesPost: string[];
	commentPost: Comment[];
	likePost: string[];
	dislikePost: string[];
	date: string;
	_id: string;
}

interface Comment {
	firstName: string;
	lastName: string;
	commentText: string;
	commentDate: string;
	userId: string;
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'loaded',
	ERROR = 'error',
}

export interface UserPostSliceState {
	createText: string;
	createImg: string[];
	createVid: string;
	createComment: string;
	comments: number;
	postIndex: string;
	userPosts: {
		post: UserPost[];
		status: Status;
	};
}