export async function GetUserInfo() {
    const userId = localStorage('uid')
    const res = await CallGet('/user/')
}