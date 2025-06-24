function Header() {
  return (
    <header className="header main-header">
      <div id="main-header-logo">
        <img src="/nc-thumbnail.png" id="header-hero-image"></img>
      </div>
      <div id="header-banner">
        <h1 id="main-header-title">Northcoders News</h1>
      </div>
      <div id="main-header-buttons">
        <button>Button to go home</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
