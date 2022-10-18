const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-lg-5">
              <a className="navbar-brand" href="#!">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item"><a className="nav-link active" ariaCurrent="page" href="#!">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar