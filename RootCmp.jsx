import { Home } from './pages/Home.jsx'

export function App() {
  return (
    <section className='app'>
      <header className='app-header main-layout'>
        <h1>My Resume App</h1>
      </header>
      <main className='main-layout'>
        <Home />
      </main>
      <footer className='app-footer main-layout'>
        <p>© {new Date().getFullYear()} Michael Flaischer | Built with React</p>
      </footer>
    </section>
  )
}
