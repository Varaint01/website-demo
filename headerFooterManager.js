class CommonHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header-left">
            <a href="index.html" title="go to home page">WEBSITE</a>
            </div>
            <div class="header-middle">
                <a href="deals.html" title="go to deals page">DEALS</a>
                <a href="prebuilt.html" title="go to prebuilt page">PREBUILT</a>
                <a href="custom.html" title="go to custom page">CUSTOM</a>
                <a href="accessories.html" title="go to accessories page">ACCESSORIES</a>
                <a href="software.html" title="go to software page">SOFTWARE</a>
            </div>
            <div class="header-right">
                <a href="index.html" ><img src="images/search.png" height="25" width="25" alt="search" title="search"></a>
                <a href="index.html" ><img src="images/cart.png" height="25" width="25" alt="cart" title="cart"></a>
                <a href="index.html" ><img src="images/account.png" height="25" width="25" alt="account" title="account"></a>
                <a href="index.html" ><img src="images/hamburger.png" height="25" width="25" alt="menu" title="menu"></a>
            </div>
        </header>
        `
    }
}
class CommonFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-left">
                <ul>
                    <li><a href="index.html" title="">About us</a></li>
                    <li><a href="index.html" title="">Contact us</a></li>
                    <li><a href="index.html" title="">Support</a></li>
                    <li><a href="index.html" title="">FAQs</a></li>
                    <li><small>&copy All rights reserved</small></li>
                </ul>
            </div>
            <div class="footer-middle">
                <ul>
                    <li><a href="index.html" title="">Terms and Conditions</a></li>
                    <li><a href="index.html" title="">Privacy Policy</a></li>
                    <li><a href="index.html" title="">Sustainability</a></li>
                    <li><a href="index.html" title="">E-Waste Management</a></li>
                    <li><a href="https://website.com" title="go to website" target="_blank"><small>WEBSITE 2025</small></a></li>
                </ul>
            </div>
            <div class="footer-right">
                <ul>
                    <li>CONNECT WITH US</li>
                    <li>
                        <a href="https://facebook.com" target="_blank"><img src="images/facebook.png" height="20" width="20" alt="facebook" title="facebook"></a>
                        <a href="https://instagram.com" target="_blank"><img src="images/instagram.png" height="20" width="20" alt="instagram" title="instagram"></a>
                        <a href="https://youtube.com" target="_blank"><img src="images/youtube.png" height="20" width="20" alt="youtube" title="youtube"></a>
                        <a href="https://x.com" target="_blank"><img src="images/x.png" height="20" width="20" alt="x" title="x"></a>
                    </li>
                </ul>     
            </div>
        </footer>
        `
    }
}

customElements.define('common-header', CommonHeader)
customElements.define('common-footer', CommonFooter)