import { CallGet, CallPost } from "api"

export async function CallGetServiceCategories() {
    const res = await CallGet("/api/serviceCategorys")
    return res
}

export async function CallPostService(data) {
    const res = await CallPost("/api/service", data)
    return res
}

export async function CallUpdateServiceById(data) {
    const res = await CallPost("/api/updateServiceById", data)
    return res
}

export async function CallUpdateServiceFieldById(data) {
    const res = await CallPost("/api/updateServiceFieldById", data)
    return res
  }

export async function GetAllServicesByDate(query) {
    const res = await CallPost('/api/getCustomDateServices', query)
    return res
}

export async function GetAllServices(params){
    const res = await CallGet(`/api/allServices?${params}`)
    return res
}

export async function GetServiceById(id){

    const res = await CallPost("api/serviceById", id);
    return res;

}