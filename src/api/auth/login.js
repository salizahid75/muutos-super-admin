import { CallPost } from "api";

export async function CallLogin({ email, password }) {
    const res = await CallPost('/api/userLogin', { email, password })
    return res
}