# my_projects

# Words Animation

A simple and reusable JavaScript component for animating words within a container. This project demonstrates how to create a visually appealing word animation effect using ES6 modules.

## Features

- Customizable word list
- Adjustable animation duration and word interval
- Easy integration into any project
- Supports modern browsers with ES6 module support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BlockJakub/my_projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my_projects/Words Animation
   ```

## Usage

1. Include the `WordAnimation.js` file in your project.
2. Add a container element with the class `container` to your HTML.
3. Import and initialize the `WordAnimation` component in your JavaScript file:

   ```javascript
   import WordAnimation from "./js/WordAnimation.js";

   const container = document.querySelector(".container");
   const wordAnimation = new WordAnimation(container, {
     words: ["Example", "Reusable", "Component"],
     maxWords: 20,
     animationDuration: 4000,
     wordInterval: 800,
   });

   wordAnimation.start();
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by **jacub**. https://jacubavisualsweb.wordpress.com/
