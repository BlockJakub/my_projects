/* 
 * Copyright (c) 2025. All rights reserved.
 * Author: jacub - https://jacubavisualsweb.wordpress.com/
 */

export default class WordAnimation {
    constructor(container, options = {}) {
        this.container = container;
        this.words = options.words || ["Default", "Words", "Here"];
        this.maxWords = options.maxWords || 50;
        this.animationDuration = options.animationDuration || 4000;
        this.wordInterval = options.wordInterval || 800;
        this.wordElements = [];
        this.intervalId = null;
        this.sanitizedWords = this.words.map(word => {
            const div = document.createElement('div');
            div.textContent = word;
            return div.textContent;
        });
    }

    start() {
        this.stop(); // Ensure no duplicate intervals
        this.intervalId = setInterval(() => this.addWord(), this.wordInterval);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    addWord() {
        if (this.wordElements.length >= this.maxWords) {
            const oldWord = this.wordElements.shift();
            this.container.removeChild(oldWord);
        }

        const word = document.createElement("span");
        word.textContent = this.sanitizedWords[Math.floor(Math.random() * this.sanitizedWords.length)];
        word.style.position = "absolute";
        word.style.left = `${Math.random() * 90}%`;
        word.style.top = `${Math.random() * 90}%`;
        word.style.opacity = 1;
        word.style.transition = `transform ${this.animationDuration / 1000}s ease-out, opacity ${this.animationDuration / 1000}s`;

        this.container.appendChild(word);
        this.wordElements.push(word);

        setTimeout(() => {
            word.style.transform = `translateY(-400px)`;
            word.style.opacity = 0;
        }, 200);

        setTimeout(() => {
            if (this.container.contains(word)) {
                this.container.removeChild(word);
                this.wordElements.shift();
            }
        }, this.animationDuration);
    }
}