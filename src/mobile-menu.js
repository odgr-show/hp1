export default class MobileMenu {
    constructor() {
        this.burger = document.querySelector(".burger");
        this.mobileMenu = document.querySelector(".mobile-menu");
        this.#addEvent();
    }

    #toggle() {
        this.burger.classList.toggle("is-active");
        this.mobileMenu.classList.toggle("is-active");
    }

    #addEvent() {
        this.burger.addEventListener("click", this.#toggle.bind(this));
    }
}
