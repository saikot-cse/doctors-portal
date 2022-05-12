import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="px-10 bg-footer bg-fixed text-black-content">
      <div className="footer">
        <div className="mx-auto">
          <span class="footer-title text-primary font-bold uppercase">Services</span>
          <Link to="" class="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" class="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" class="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" class="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div className="mx-auto">
          <span class="footer-title text-primary font-bold">ORAL HEALTH</span>
          <Link to="" class="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="" class="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" class="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div className="mx-auto">
          <span class="footer-title text-primary font-bold">OUR ADDRESS</span>
          <Link to="" class="link link-hover">New York - Hudson</Link>
        </div>
      </div>

      <div className="pt-10 text-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};
