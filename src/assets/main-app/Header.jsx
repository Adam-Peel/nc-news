function Header() {
  return (
    <header className="header main-header">
      <section id="main-header-logo">Logo Here</section>
      <section id="main-header-banner">
        <div id="main-header-title-div">
          <h1 id="main-header-title">NC News</h1>
        </div>
        <div id="main-header-stats-div">User stats here</div>
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
