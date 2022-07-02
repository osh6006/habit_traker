import React, { PureComponent } from "react";

class Reset extends PureComponent {
  onClear = event => {
    console.log("click");
    this.props.onClear();
  };
  render() {
    return (
      <div>
        <button className="reset-button" onClick={this.onClear}>
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;
