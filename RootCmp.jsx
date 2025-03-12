import { Home } from './pages/Home.jsx'
import { Header } from './cmps/Header.jsx'
import { Footer } from './cmps/Footer.jsx'

export function App() {
  return (
    <section className='app'>
      <Header />
      <main className='main-layout'>
        <Home />
      </main>
      <Footer />
    </section>
  )
}
