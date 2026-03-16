
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../service/product.service'

const SIZES = ['S', 'M', 'L', 'XL']

export default function About() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImg, setSelectedImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState('S')
  const [count, setCount] = useState(1)

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
    if (id) fetchProduct()
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
  const images = Array.isArray(product.pictures) ? product.pictures : []

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: Image gallery */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setSelectedImg(idx)}
                className={`h-16 w-16 rounded-lg border-2 ${selectedImg === idx ? 'border-[#46A358]' : 'border-transparent'} bg-white p-1 transition`}
              >
                <img src={img} alt={product.name} className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center bg-white rounded-xl shadow p-4 min-h-[320px]">
            <img
              src={images[selectedImg]}
              alt={product.name}
              className="max-h-80 w-auto object-contain"
            />
          </div>
        </div>
        {/* Right: Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl font-bold text-[#46A358]">${product.price}</span>
            <span className="ml-2 text-yellow-500 flex items-center">
              {/* 4.5 stars */}
              <svg width="18" height="18" fill="currentColor" className="inline-block"><polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" /></svg>
              <svg width="18" height="18" fill="currentColor" className="inline-block"><polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" /></svg>
              <svg width="18" height="18" fill="currentColor" className="inline-block"><polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" /></svg>
              <svg width="18" height="18" fill="currentColor" className="inline-block"><polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" /></svg>
              <svg width="18" height="18" fill="currentColor" className="inline-block opacity-50"><polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" /></svg>
            </span>
            <span className="ml-2 text-sm text-gray-500">19 Customer Review</span>
          </div>
          <div className="mt-2 border-b pb-2">
            <div className="font-semibold text-gray-800">Short Description:</div>
            <div className="text-gray-600 text-sm mt-1">{product.description}</div>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <span className="font-semibold text-gray-800">Size:</span>
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-8 w-8 rounded-full border-2 text-sm font-bold transition-all ${selectedSize === size ? 'border-[#46A358] text-[#46A358] bg-white' : 'border-gray-200 text-gray-700 bg-gray-100'}`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center rounded border border-gray-300 bg-white px-2">
              <button onClick={() => setCount((c) => Math.max(1, c - 1))} className="h-8 w-8 text-2xl font-bold text-[#46A358]">-</button>
              <span className="mx-2 w-6 text-center text-lg font-semibold">{count}</span>
              <button onClick={() => setCount((c) => c + 1)} className="h-8 w-8 text-2xl font-bold text-[#46A358]">+</button>
            </div>
            <button className="rounded bg-[#46A358] px-6 py-2 text-white font-bold hover:bg-green-700 transition">BUY NOW</button>
            <button className="rounded border border-[#46A358] px-6 py-2 text-[#46A358] font-bold hover:bg-[#46A358] hover:text-white transition">ADD TO CART</button>
            <button className="rounded border border-gray-300 p-2 text-[#46A358] hover:bg-green-50 transition">
              <svg width="22" height="22" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" /></svg>
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <div>SKU: 1995751877966</div>
            <div>Categories: {product.category}</div>
            <div>Tags: Home, Garden, Plants</div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-gray-700">Share this products:</span>
            <a href="#" className="text-[#46A358] hover:text-green-700"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="text-[#46A358] hover:text-green-700"><i className="fab fa-twitter" /></a>
            <a href="#" className="text-[#46A358] hover:text-green-700"><i className="fab fa-linkedin-in" /></a>
            <a href="#" className="text-[#46A358] hover:text-green-700"><i className="far fa-envelope" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
