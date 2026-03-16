import api from '../config/axios.config'

export const getProducts = async () => {
  const response = await api.get('https://www.e-commerce-api-v3.nt.azimumarov.uz/api/v1/docs')
  return response.data
}

export const getProductById = async (id) => {
  const response = await api.get(`https://e-commerce-api-v3.nt.azimumarov.uz/api/v1/products/${id}`)
  // If the API returns { product: {...} }, return product
  if (response.data && response.data.product) return response.data.product;
  // fallback: return the whole data
  return response.data;
}
