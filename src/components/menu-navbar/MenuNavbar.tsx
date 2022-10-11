interface Props {
  visible: boolean;
  onClose?: () => void;
}

const MenuNavbar = ({ visible, onClose }: Props) => {
  return (
    <nav id="menu" className={visible ? "visible" : ""}>
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/generic.html">Ipsum veroeros</a>
          </li>
          <li>
            <a href="/generic.html">Tempus etiam</a>
          </li>
          <li>
            <a href="/generic.html">Consequat dolor</a>
          </li>
          <li>
            <a href="/elements.html">Elements</a>
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
          </li>
        </ul>
      </div>

      <a className="close" href="#menu" onClick={onClose}>
        Close
      </a>
    </nav>
  );
};

export default MenuNavbar;
