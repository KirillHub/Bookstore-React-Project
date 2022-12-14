
export interface User {
	first_name: string
	last_name: string
}

export interface UserResponse {
	user: User
	token: string
}

export interface LoginRequest {
	username: string
	password: string
}

export type AuthState = {
	user: User | null
	token: string | null
 }
 