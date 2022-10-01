function HeaderNav() {
  return (
    <div className="headerNav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="toggleDropDown">
          <a href="#">
            Listing{" "}
            <i
              className="fa-solid fa-angle-down"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>
          <ul className="dropdownMenu">
            <li>
              <a href="#">Appartment</a>
            </li>
            <li>
              <a href="#">Office</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Single Family Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Villa</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
