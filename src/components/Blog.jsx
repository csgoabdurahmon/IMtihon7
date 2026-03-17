
import { useEffect, useState } from "react";
import axios from "axios";


export default function Blog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get("https://e-commerce-api-v3.nt.azimumarov.uz/api/v1/products");
        let items = Array.isArray(res.data.products) ? res.data.products : res.data;
        setProducts(items.slice(0, 4));
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Our Blog Posts</h2>
      <p className="text-center text-gray-500 mb-10">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {loading ? (
          <div className="col-span-4 text-center text-gray-400">Loading...</div>
        ) : products.map((prod) => (
          <div key={prod._id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src={Array.isArray(prod.pictures) ? prod.pictures[0] : ''}
              alt={prod.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-green-600 text-sm mb-2">
              {/* Fake date and read time for demo */}
              September {12 + Math.floor(Math.random()*5)} <span className="mx-1">|</span> Read in {2 + Math.floor(Math.random()*5)} minutes
            </div>
            <h3 className="text-xl font-bold mb-1">{prod.name}</h3>
            <p className="text-gray-600 mb-4 flex-1">{prod.description?.slice(0, 60) || 'No description.'}</p>
            <a
              href={"#"}
              className="text-green-600 font-semibold hover:underline flex items-center gap-1"
            >
              Read More <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
