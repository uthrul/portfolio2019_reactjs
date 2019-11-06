import React from "react";

class Footer extends React.Component {
  handleMoveTop = () => {
    const entryPage = document.getElementsByClassName("entry-page");
    entryPage[0].scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <footer>
        <p>&copy; 2019 Saud Maruli Sihombing</p>
      </footer>
    );
  }
}

export default Footer;
