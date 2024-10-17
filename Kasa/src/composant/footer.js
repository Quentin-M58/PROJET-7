import logo from "../image/white logo.svg"

export default function Footer() {
        return (
                <footer>
                        <div>
                                <img src={logo} alt="logo de Kasa"></img>
                                <p><span><i className="fa-regular fa-copyright"></i></span> 2020 Kasa. All rights reserved</p>
                        </div>
                </footer>
        );
}