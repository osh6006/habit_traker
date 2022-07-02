import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <span>
          <i className="navbar-logo fas fa-leaf"></i>
        </span>
        <span className="nav-title">Habit Traker</span>
        <span className="nav-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
