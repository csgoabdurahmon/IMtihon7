import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
  const [transitioning, setTransitioning] = useState(false)

  // Fetch first 3 product images (using 'pictures' field)
  useEffect(() => {
    async function fetchImages() {
      setLoading(true)
      try {
        const res = await fetch('https://e-commerce-api-v3.nt.azimumarov.uz/api/v1/products')
        const data = await res.json()
        const imgs = (data?.data || [])
          .slice(0, 3)
          .map((item) => Array.isArray(item.pictures) ? item.pictures[0] : null)
          .filter(Boolean)
        setImages(imgs)
      } catch (e) {
        setImages([])
      }
      setLoading(false)
    }
    fetchImages()
  }, [])

  // Infinite loop logic
  const goTo = (idx) => {
    if (transitioning || images.length === 0) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent((idx + images.length) % images.length)
      setTransitioning(false)
    }, 350)
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  return (
    <section className="w-full bg-[#FBFBFB] py-8 sm:py-12">
      <div className="container flex flex-col-reverse items-center justify-between gap-8 px-4 py-8 md:flex-row md:gap-0 md:py-12 lg:py-16">
        {/* Left: Text */}
        <div className="w-full max-w-xl text-left md:pl-4 lg:pl-8">
          <p className="mb-2 text-[14px] font-medium tracking-[0.1em] text-[#3D3D3D]">WELCOME TO GREENSHOP</p>
          <h1 className="mb-4 text-[40px] font-black leading-[1.1] text-[#3D3D3D] md:text-[48px] lg:text-[58px]">
            LET’S MAKE A <br className="hidden md:block" />
            BETTER <span className="text-[#46A358]">PLANET</span>
          </h1>
          <p className="mb-8 max-w-md text-[16px] font-normal text-[#727272] md:mb-10 md:text-[18px]">
            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
          </p>
          <button className="rounded-lg bg-[#46A358] px-8 py-3 text-[16px] font-bold text-white transition-colors duration-200 hover:bg-[#388f4a]">
            SHOP NOW
          </button>
        </div>
        {/* Right: Image Slider */}
        <div className="relative flex w-full items-center justify-center md:w-[520px] lg:w-[600px]">
          <div className="relative h-[320px] w-full md:h-[400px] lg:h-[480px] flex items-center justify-center overflow-hidden">
            {/* Left Button */}
            <button
              onClick={prev}
              className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#46A358] shadow hover:bg-[#46A358] hover:text-white transition-colors duration-200"
              aria-label="Previous"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              {loading ? (
                <div className="flex h-full w-full items-center justify-center bg-gray-100">
                  <span className="text-gray-400">Loading...</span>
                </div>
              ) : (
                images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Hero Slide ${idx + 1}`}
                    className={`absolute left-0 top-0 h-full w-full object-contain transition-opacity duration-500 ${
                      idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
                  />
                ))
              )}
            </div>
            {/* Right Button */}
            <button
              onClick={next}
              className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#46A358] shadow hover:bg-[#46A358] hover:text-white transition-colors duration-200"
              aria-label="Next"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="container flex justify-start md:justify-center mt-2 md:mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`mx-1 h-3 w-3 rounded-full border-2 border-[#46A358] transition-colors duration-300 ${
              current === idx ? 'bg-[#46A358]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
