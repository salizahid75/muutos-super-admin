import axios from "axios"
export async function CallApi(f) {
  try {
    const response = await f()
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const res = e.response?.data || { status: "inactive" }
      return res
    } else {
      return { status: "inactive", code: "client_err" }
    }
  }
}

export async function CallPost(url, payload, headers) {
  const response = await CallApi(() =>
    axios.post(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { ...headers, "Content-Type": "application/json" },
    })
  )

  return response
}
export async function CallPut(url, payload, headers) {
  const response = await CallApi(() =>
    axios.put(`${process.env.REACT_APP_HOST}${url}`, payload, {
      headers: { ...headers, "Content-Type": "application/json" },

    })
  )

  return response
}

export async function CallGet(url, headers) {
  const response = await CallApi(() =>
    axios.get(`${process.env.REACT_APP_HOST}${url}`, {
      headers: { ...headers },

    })
  )

  return response
}
