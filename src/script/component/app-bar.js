class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = 
        `<nav class="navbar">
            <span class="navbar-brand mb-0 h1">Daftar Surat</span>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);