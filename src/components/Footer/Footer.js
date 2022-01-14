function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyrights">
        © 2021 Supersite, Powered by News API
      </div>
      <div className="footer__nav">
        <nav className="footer__nav_links">
          <a className="footer__nav_home" href="#home">
            Home
          </a>
          <a className="footer__nav_practicum" href="#home">
            Practicum by Yandex
          </a>
        </nav>
        <div className="footer__nav_social">
          <a className="footer__nav_whatsapp" href="#home">
            {""}
          </a>
          <a className="footer__nav_facebook" href="#home">
            {""}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
