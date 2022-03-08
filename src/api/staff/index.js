import { CallGet, CallPost } from "api"

export async function GetAllStaff(params) {
  const res = await CallGet(`/api/allStaff?${ params }`)
  return res
}

export async function CallPostStaff(data) {
  const res = await CallPost("/api/staff", data)
  return res
}

export async function CallUpdateStaffById(data) {
  const res = await CallPost("/api/updateStaffById", data)
  return res
}

export async function GetAllStaffByDate(query) {
  const res = await CallPost("/api/getCustomDateStaff", query)
  return res
}

export async function FilterStaff(params) {
  const res = await CallGet(`/api/allStaff?${params}`)
  return res
}

// export async function GetProductById(id) {
//   const res = await CallPost("api/productById", id)
//   return res
// }
