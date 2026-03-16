import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../service/product.service'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err?.message ?? 'Unable to load product.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-gray-500">Loading product…</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-red-600">{error}</span>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-gray-500">Product not found.</span>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="h-80 w-full overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          <img
            src={Array.isArray(product.pictures) ? product.pictures[0] : ''}
            alt={product.name}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="text-lg font-bold text-[#46A358]">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  )
}
