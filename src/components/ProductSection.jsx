

import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

function ProductCard({ product }) {
	return (
		<Link
			to={`/product/${product._id}`}
			className="group relative flex flex-col items-center rounded-xl bg-white p-4 shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
			style={{ minHeight: 340 }}
		>
			<div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
				<img
					src={Array.isArray(product.pictures) ? product.pictures[0] : ""}
					alt={product.name}
					className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
				/>
				{/* 3 action buttons only on hover, centered and spaced */}
				<div className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bottom-8 group-hover:opacity-100">
					<button className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow hover:bg-green-50 transition">
						{/* Cart icon */}
						<svg width="28" height="28" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24">
							<circle cx="9" cy="21" r="1" />
							<circle cx="20" cy="21" r="1" />
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
						</svg>
					</button>
					<button className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow hover:bg-green-50 transition">
						{/* Heart icon */}
						<svg width="28" height="28" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
						</svg>
					</button>
					<button className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow hover:bg-green-50 transition">
						{/* Search icon */}
						<svg width="28" height="28" fill="none" stroke="#46A358" strokeWidth="2" viewBox="0 0 24 24">
							<circle cx="11" cy="11" r="8" />
							<path d="M21 21l-4.35-4.35" />
						</svg>
					</button>
				</div>
			</div>
			<div className="mt-4 w-full text-center">
				<h3 className="truncate text-lg font-medium text-gray-900">{product.name}</h3>
				<p className="mt-2 text-[18px] font-bold text-[#46A358]">${product.price}</p>
			</div>
		</Link>
	);
}

export default function ProductSection() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const PRODUCTS_PER_PAGE = 9;

	useEffect(() => {
		async function fetchProducts() {
			try {
				const res = await fetch("https://e-commerce-api-v3.nt.azimumarov.uz/api/v1/products");
				const data = await res.json();
				setProducts(data?.products || []);
			} catch (e) {
				setProducts([]);
			}
		}
		fetchProducts();
	}, []);

	const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
	const paginated = products.slice(
		(page - 1) * PRODUCTS_PER_PAGE,
		page * PRODUCTS_PER_PAGE
	);

	return (
		<section className="container py-10">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{paginated.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
			{/* Pagination */}
			<div className="mt-8 flex justify-center gap-2">
				{Array.from({ length: totalPages }, (_, idx) => (
					<button
						key={idx}
						onClick={() => setPage(idx + 1)}
						className={`h-9 w-9 rounded border border-[#46A358] text-base font-semibold transition-colors duration-200 ${
							page === idx + 1
								? "bg-[#46A358] text-white"
								: "bg-white text-[#46A358] hover:bg-green-50"
						}`}
					>
						{idx + 1}
					</button>
				))}
			</div>
		</section>
	);
}
