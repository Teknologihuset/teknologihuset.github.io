interface Props {
  visible: boolean;
  onClose?: () => void;
}

const MenuNavbar = ({ visible, onClose }: Props) => {
  return (
    <nav id="menu" className={visible ? "visible" : ""}>
      <div className="inner">
        <h2>Meny</h2>
        <ul className="links">
          <li>
            <a href="/">Hjem</a>
          </li>
          <li onClick={onClose}>
            <a href="/#kontaktskjema">Kontakt oss</a>
          </li>
          {/*<li> todo: disse skal erstattes av meny-config i sanity
            <a href="/generic.html">Ipsum veroeros</a>
          </li>
        </ul>
        <ul className="actions stacked">
          <li>
            <a href="#" className="button fit primary">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button fit">
              Log In
            </a>
          </li>*/}
        </ul>
      </div>

      <a className="close" href="#menu" onClick={onClose}>
        Close
      </a>
    </nav>
  );
};

export default MenuNavbar;
