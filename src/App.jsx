import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Tarjeta 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://m.media-amazon.com/images/I/61kbUEtCihL.jpg" className="rounded-lg" />
          <h3 className="font-bold text-Lg">Mouse Inalambrico</h3>
          <p className="text-texto-dim text-sm">Mouse ergonomico, conexion Bluetooth</p>
          <p className="text-verde font-extrabold">$89.900</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://i.imgur.com/L7tR8f8.jpg" className="rounded-lg" />
          <h3 className="font-bold text-Lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://http2.mlstatic.com/D_NQ_NP_985902-MLA99897538433_112025-O.webp" className="rounded-Lg" />
          <h3 className="font-bold text-Lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.900</p>
        </div>

      </section>

      <Footer />
    </main>
  )
}

export default App