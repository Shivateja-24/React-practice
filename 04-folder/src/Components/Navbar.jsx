import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Shivmonnn</h3>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
