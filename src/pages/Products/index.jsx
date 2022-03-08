import { useState, useEffect } from "react"
import DataTable from "./DataTable"
import UploadProducts from "./UploadProducts"
import Wishlisted from "./Wishlisted"
import CompLoading from "components/CompLoading"
import {
  CallUpdateProductById,
  GetAllProducts,
  GetAllProductsByDate,
  CallUpdateProductFieldById
} from "api/products"
import ProductView from "./Wishlisted/ProductView"

export default function Products() {
  const [activeComp, setActiveComp] = useState("products")
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [active, setActive] = useState("all")

  useEffect(() => {
    const makeCall = async () => {
      const res = await GetAllProducts()
      if (res.status === "active") {
        console.log(res.data)
        setProducts(res.data)
      }
      setLoading(false)
    }

    makeCall()
  }, [])

  const onStatusChange = async (value, id) => {
    let formData = new FormData()
    formData.append("id", id)
    formData.append("key", "status")
    formData.append("value", value)
    try {
      await CallUpdateProductById(formData)
    } catch (error) {}
  }

  const onisApprovedChange = async (value, id) => {
    let formData = new FormData()
    formData.append("id", id)
    formData.append("key", "isApproved")
    formData.append("value", value)
    try {
      if(value=='0'){
        var v = false;
        await CallUpdateProductFieldById({field:'isApproved', value:v, id:id});
      }else{
        var v = true;
        await CallUpdateProductFieldById({field:'isApproved', value:v, id:id});
      }
    } catch (error) {}
  }

  const onProductAdd = product => {
    setProducts([product, ...products])
    setActiveComp("products")
    window.scrollTo(0, 0)
  }

  const filterProductsByDate = async date => {
    try {
      setActive(date)
      setLoading(true)
      const formdata = new FormData()
      formdata.append("query", date)
      const res = await GetAllProductsByDate(formdata)
      if (res.status === "active") {
        setProducts(res.data)
      }
    } catch (error) {}
    setLoading(false)
  }

  const handleSearch = async data => {
    try {
      const res = await GetAllProducts(`search=${data}`)
      if (res.status === "active") {
        console.log(res.data)
        setProducts(res.data)
      }
    } catch (error) {}
  }

  const handleFilter = async data => {
    try {
      const res = await GetAllProducts(`filter=${data}`)
      if (res.status === "active") {
        console.log(res.data)
        setProducts(res.data)
      }
    } catch (error) {}
  }

  if (isLoading) return <CompLoading />

  const match = activeComp.component || activeComp

  switch (match) {
    case "products":
      return (
        <DataTable
          active={active}
          setActiveComp={setActiveComp}
          products={products}
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          onStatusChange={onStatusChange}
          handleDateFilter={filterProductsByDate}
          onisApprovedChange={onisApprovedChange}
        />
      )
    case "upload":
      return (
        <UploadProducts
          setActiveComp={setActiveComp}
          onProductAdd={onProductAdd}
        />
      )
    case "productView":
      return (
        <ProductView
          setActiveComp={setActiveComp}
          onProductAdd={onProductAdd}
        />
      )
    case "wishlisted":
      return <Wishlisted setActiveComp={setActiveComp} />
    case "update":
      return (
        <UploadProducts
          setActiveComp={setActiveComp}
          isEdit={true}
          product={products.find(p => p.id == activeComp.props.productId)}
        />
      )
  }
}
