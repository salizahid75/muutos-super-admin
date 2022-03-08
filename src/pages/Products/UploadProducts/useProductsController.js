import { useState, useEffect } from "react"

import { audienceData, languages, sizes, statuses } from "./data"

export default function ProductController({
  data: { categories },
  defaultData = null,
}) {
  const [values, setValues] = useState(
    !defaultData
      ? {
        name: "",
        description: "",
        sku: "",
        material: "",
        origin: "",
        brand: "",
        price: "",
        availability: "",
        stock: "",
        deliveryTerms: "",
      }
      : {
        name: defaultData.name,
        description: defaultData.description,
        sku: defaultData.sku,
        material: defaultData.material,
        origin: defaultData.origin,
        brand: defaultData.brand,
        price: defaultData.price,
        availability: defaultData.availability,
        stock: defaultData.stock,
        deliveryTerms: defaultData.deliveryTerms,
      }
  )

  const [category, setCategory] = useState(
    defaultData ? defaultData.category : categories?.[0]?.id
  )

  const [language, setLanguage] = useState(
    defaultData ? defaultData.language : languages[0]
  )
  const [status, setStatus] = useState(
    defaultData ? Number(defaultData.status) : Object.values(statuses)[0]
  )

  const [audience, setAudience] = useState(
    defaultData ? defaultData.audience : Object.values(audienceData)[0]
  )

  const [sizes, setSizes] = useState(defaultData ? Array.isArray(defaultData.sizes) ? defaultData.sizes : [defaultData.sizes] : [])
  const [options, setOptions] = useState(defaultData ? defaultData.options : [])
  useEffect(() => {
    setCategory(categories?.[0]?.id)
  }, [categories])

  return {
    set: {
      sizes: ([size, status]) => {
        if (status) setSizes([...sizes, size])
        else setSizes(sizes?.filter(s => s !== size))
      },
      options: ([option, status]) => {
        if (status) setOptions([...options, option])
        else setOptions(options.filter(o => o !== option))
      },
      category: setCategory,
      language: setLanguage,
      status: setStatus,
      audience: setAudience,
      registerInput: (name, options = {}) => ({
        onChange: e => {
          const { validator } = options
          if (validator) {
            const isValid = validator(e.target.value)
            if (!isValid) return
          }
          setValues({ ...values, [name]: e.target.value })
        },
        value: values[name],
      }),
    },
    get: {
      data: () => {
        const data = JSON.parse(JSON.stringify(values))
        data.category = category
        data.status = status
        data.audience = audience
        data.sizes = sizes
        data.options = options
        data.language = language
        return data
      },
    },
  }
}
