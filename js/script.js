/*
 * Copyright (c) 2025. All rights reserved.
 * Author: jacub
 */

const words = ["Creativity", "Motion", "Code", "Energy", "Flow", "Inspiration", "Design", "Art", "Dynamic", "Vibrant", "Expressive", "Innovate", "Imagine", "Transform", "Evolve", "Spark", "Vision", "Pulse", "Rhythm", "Harmony", "Fusion", "Synergy", "Momentum", "Wave", "Surge", "Echo", "Radiate", "Illuminate", "Glide", "Soar", "Breeze", "Whirl", "Twist", "Turn", "Leap", "Bound", "Sprint", "Dash", "Zoom", "Fly", "Drift"];
const container = document.querySelector(".container");

// Sanitize words array to ensure safe strings
const sanitizedWords = words.map(word => {
    const div = document.createElement('div');
    div.textContent = word;
    return div.textContent;
});

// Limit the total number of words on the screen
const MAX_WORDS = 50;

// Add random spin effect to words
function createWord() {
    if (container.children.length >= MAX_WORDS) {
        container.removeChild(container.firstChild); // Remove the oldest word
    }

    const word = document.createElement("span");
    word.textContent = sanitizedWords[Math.floor(Math.random() * sanitizedWords.length)];
    word.style.position = "absolute";
    word.style.bottom = "0";
    word.style.opacity = 1;
    word.style.transition = "transform 4s ease-out, opacity 4s";
    word.style.whiteSpace = "nowrap";
    word.style.zIndex = 1;

    // Randomly apply spin effect
    if (Math.random() > 0.5) {
        word.style.transform = "rotate(360deg)";
    }

    // Revert to previous logic with active positions
    const activePositions = [];

    function isPositionClear(leftPosition) {
        return activePositions.every(pos => Math.abs(pos.left - leftPosition) >= 10);
    }

    let leftPosition;
    let attempts = 0;
    do {
        leftPosition = Math.random() * 90;
        attempts++;
    } while (!isPositionClear(leftPosition) && attempts < 10);

    // Adjust vertical positioning to avoid words being in the same row
    let topPosition;
    do {
        topPosition = Math.random() * 90;
    } while (activePositions.some(pos => Math.abs(pos.top - topPosition) < 10));

    activePositions.push({ left: leftPosition, top: topPosition });
    setTimeout(() => {
        const index = activePositions.findIndex(pos => pos.left === leftPosition && pos.top === topPosition);
        if (index > -1) activePositions.splice(index, 1);
    }, 4000); // Clear position after word is removed

    word.style.left = `${leftPosition}%`;
    word.style.top = `${topPosition}%`;

    container.appendChild(word);

    // Check for path clearance and remove word after animation
    setTimeout(() => {
        word.style.transform = `translateY(-400px)`;
        word.style.opacity = 0;
    }, 200); // Delay animation slightly to stagger words

    setTimeout(() => {
        const index = activePositions.findIndex(pos => pos.left === leftPosition && pos.top === topPosition);
        if (index > -1) activePositions.splice(index, 1);
        word.remove();
    }, 4000); // Match removal timing with animation duration
}

// Create multiple words at runtime
setInterval(() => {
    for (let i = 0; i < 3; i++) {
        createWord();
    }
}, 800);
