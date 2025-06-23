function Header() {
  return (
    <header className="header main-header">
      <section id="main-header-logo">
        <img src="/nc-logo.png" id="header-hero-image"></img>
      </section>
      <section id="main-header-buttons">
        <div>
          <button>Button to go home</button>
        </div>
        <div>
          <button>Login</button>
        </div>
      </section>
    </header>
  );
}

export default Header;
