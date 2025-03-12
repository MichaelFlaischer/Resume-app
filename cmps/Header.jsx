const { Link } = ReactRouterDOM

export function Header() {
  return (
    <header className='app-header main-layout'>
      <h1>
        <a href='/'>My Resume App</a>
      </h1>
      <nav className='nav-bar'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About Me</a>
          </li>
          <li>
            <a href='/resume'>Resume</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
