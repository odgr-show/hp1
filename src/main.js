import "./style.scss";

class Main {
    constructor() {
        this.header = document.querySelector(".header");
        this.navTrigger = document.querySelector(".nav-trigger");
        this.#init();
    }

    #init() {
        // IntersectionObserverを初期化
        const observer = new IntersectionObserver(
            this.#navAnimation.bind(this),
            {
                root: null,
                rootMargin: "0px",
                threshold: 0,
            }
        );

        observer.observe(this.navTrigger);
    }

    #navAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.header.classList.remove("triggered");
            } else {
                this.header.classList.add("triggered");
            }
        });
    }
}

new Main();
