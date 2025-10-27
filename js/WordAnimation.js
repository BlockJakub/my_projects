/* 
 * Copyright (c) 2025. All rights reserved.
 * Author: jacub
 */

export default class WordAnimation {
    constructor(container, options = {}) {
        this.container = container;
        this.words = options.words || ["Default", "Words", "Here"];
        this.maxWords = options.maxWords || 50;
        this.animationDuration = options.animationDuration || 4000;
        this.wordInterval = options.wordInterval || 800;
        this.sanitizedWords = this.words.map(word => {
            const div = document.createElement('div');
            div.textContent = word;
            return div.textContent;
        });
        this.init();
    }

    createWord() {
        if (this.container.children.length >= this.maxWords) {
            this.container.removeChild(this.container.firstChild); // Remove the oldest word
        }

        const word = document.createElement("span");
        word.textContent = this.sanitizedWords[Math.floor(Math.random() * this.sanitizedWords.length)];
        word.style.position = "absolute";
        word.style.left = `${Math.random() * 90}%`;
        word.style.top = `${Math.random() * 90}%`;
        word.style.opacity = 1;
        word.style.transition = `transform ${this.animationDuration / 1000}s ease-out, opacity ${this.animationDuration / 1000}s`;

        this.container.appendChild(word);
        setTimeout(() => {
            word.style.transform = `translateY(-400px)`;
            word.style.opacity = 0;
        }, 200);

        setTimeout(() => word.remove(), this.animationDuration);
    }

    init() {
        this.interval = setInterval(() => this.createWord(), this.wordInterval);
    }

    stop() {
        clearInterval(this.interval);
    }
}