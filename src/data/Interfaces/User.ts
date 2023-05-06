import { JwtPayload } from "jwt-decode";

export interface User extends JwtPayload {
	sub: string;
	email: string;
	name: string;
	picture: string;
}
