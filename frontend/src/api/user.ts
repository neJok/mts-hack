import { atom } from "recoil"
import {UserBase} from '../interfaces/user.ts'

export const UserState = atom<UserBase | null >({
	key: "userState",
	default: null,
})
