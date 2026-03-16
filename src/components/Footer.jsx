export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        <p>© {new Date().getFullYear()} My Store. All rights reserved.</p>
      </div>
    </footer>
  )
}
