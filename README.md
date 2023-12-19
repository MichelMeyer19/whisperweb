# Open the project in the correct format on Google Chrome step-by-step
1. Clone or download this GitHub repository to your computer
2. Run the command: npm run dev in your Terminal window
3. Copy the localhost link (usually http://localhost:5173/) from your terminal and paste it in your Google Chrome browser
4. Right click the page and click "Inspect Element"
5. In the top of the page choose the dimensions: IPhone 12 Pro, 390 x 844 with 75%

This should be how you are viewing the prototype, if not try to refresh the page and change back and forth from different dimension settings

<img width="462" alt="Skærmbillede 2023-12-14 kl  13 56 44" src="https://github.com/MichelMeyer19/whisperweb/assets/133225747/90f28532-ea28-44dc-b25e-1cb12147ecf0">


# Agile workflow

You can request access to our Kanban board in [Trello](https://trello.com/b/grC3PmLW/whisperweb).

# Wireframes and design system

You can find them at different fidelity levels in [Figma](https://www.figma.com/file/hg4nqNAxWmyMqfPcUOWbIt/WhisperWeb-Prototype?type=design&node-id=1-136&mode=design&t=3zjzxHdOoBhwyNta-0).

# Tech stack

## React and Vite

For accelerated loading times, we opted for working with React in Vite. The below template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind CSS

"Tailwind CSS is best used to _speed up the development process_ by writing less code. It comes with a design system that helps maintain _consistency across various design requirements_ like padding, spacing, and so forth; with this, you do not have to worry about creating your design systems." (Kinsta.com)

# Codebase structure

Below is a visualisation of the “src” directory within out GitHub repository. It illustrates the structure of our core codebase which follows atomic design principles, suggested by Frost (2016). The visualisation was created by applying the tool “tree” in Terminal. Below is an excerpt of the resulting .txt file.

![Atomic Design Image](src/atomic_design.png)
