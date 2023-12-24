import React from "react";

class Links extends React.Component {
    render() {
        return (
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://github.com/nthanhdo2610" target="_blank" rel="noopener noreferrer">
              <span className="social ico-circle">
                <i className="ion-social-github"></i>
              </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/nthanhdo2610" target="_blank" rel="noopener noreferrer">
              <span className="social ico-circle">
                <i className="fa-brands fa-facebook"></i>
              </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/thanh-do-nguyen" target="_blank" rel="noopener noreferrer">
              <span className="social ico-circle">
                <i className="ion-social-linkedin"></i>
              </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Links;
