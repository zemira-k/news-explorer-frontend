function Footer({ link, text, onSignOut, loggedin, email }) {
  return (
    <footer className="footer">
      <div className="footer__copyrights">
        © 2021 Supersite, Powered by News API
      </div>
      <div className="footer__nav">
        <div className="footer__nav__links">
          <a className="footer__nav__home" href="#home">
            Home
          </a>
          <a className="footer__nav__practicum" href="#home">
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__nav__social">
          <a className="footer__nav__whatsapp" href="#home">
            {""}
          </a>
          <a className="footer__nav__facebook" href="#home">
            {""}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
