function Header() {
  return (
    <header className="header main-header">
      <section id="main-header-logo">
        <img src="../../../public/nc-logo.png" id="header-hero-image"></img>
      </section>
      <section id="main-header-home-button">
        <button>Button to go home</button>
      </section>
      <section id="main-header-login-button">
        <button>Login</button>
      </section>
    </header>
  );
}

export default Header;
