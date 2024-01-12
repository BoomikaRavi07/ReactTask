import { Link } from "react-router-dom";
const Menupage = () => {
  return (
    <div>
        <div class = 'nav'>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/document">Document</Link>
          </li>
          <li>
            <Link to="/insurance">Insurance</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
  )
};

export default Menupage;