import React from "react";
import "../styles/footer.css";

const Header = () => {
  return (
    <footer>
      <div className="section-wrapper">
        <h1 className="section-title">Section 1</h1>
        <ul>
          <li className="sub-section"><a href="#">Section 1.1</a></li>
          <li className="sub-section"><a href="#">Section 1.2</a></li>
          <li className="sub-section"><a href="#">Section 1.3</a></li>
          <li className="sub-section"><a href="#">Section 1.4</a></li>
        </ul>
      </div>
      <div className="section-wrapper">
        <h1 className="section-title">Section 2</h1>
        <ul>
          <li className="sub-section"><a href="#">Section 2.1</a></li>
          <li className="sub-section"><a href="#">Section 2.2</a></li>
          <li className="sub-section"><a href="#">Section 2.3</a></li>
          <li className="sub-section"><a href="#">Section 2.4</a></li>
        </ul>
      </div>
      <div className="section-wrapper">
        <h1 className="section-title">Section 3</h1>
        <ul>
          <li className="sub-section"><a href="#">Section 3.1</a></li>
          <li className="sub-section"><a href="#">Section 3.2</a></li>
          <li className="sub-section"><a href="#">Section 3.3</a></li>
          <li className="sub-section"><a href="#">Section 3.4</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Header;