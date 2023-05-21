import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4">
            <h5 className="text-uppercase">Column 1</h5>
            <p>
              Place your content for column 1 here. This can include additional information, text, or any other relevant details.
            </p>
          </div>
          <div className="col-lg-4">
            <h5 className="text-uppercase">Column 2</h5>
            <ul className="list-unstyled">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="text-uppercase">Column 3</h5>
            <p>
              Additional content for column 3. This can include social media icons or any other relevant information.
            </p>
            <div>
              <a className="me-4 text-reset" href="#">
                <FaFacebook />
              </a>
              <a className="me-4 text-reset" href="#">
                <FaTwitter />
              </a>
              <a className="me-4 text-reset" href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
