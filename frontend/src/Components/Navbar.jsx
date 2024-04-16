import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/SignIn'>SignIn</Link>
      <Link to='/SignUp'>SignUp</Link>
    </nav>
  )
}
