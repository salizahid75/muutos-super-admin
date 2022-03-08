import { CallGet, CallPost } from "api"

export async function CallGetProductCategories() {
  const res = await CallGet("/api/productCategorys")
  return res
}

export async function CallPostProduct(data) {
  const res = await CallPost("/api/product", data)
  return res
}

export async function CallUpdateProductById(data) {
  const res = await CallPost("/api/updateProductById", data)
  return res
}

export async function CallUpdateProductFieldById(data) {
  const res = await CallPost("/api/updateProductFieldById", data)
  return res
}

export async function GetAllProductsByDate(query) {
  const res = await CallPost("/api/getCustomDateProducts", query)
  return res
}

export async function GetAllProducts(params) {
  const res = await CallGet(`/api/products?${params}`)
  return res
}

export async function GetProductById(id) {
  const res = await CallPost("api/productById", id)
  return res
}
