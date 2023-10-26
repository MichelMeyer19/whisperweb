// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgb(66, 222, 149)',
        blue: 'rgb(62, 174, 247)',
        lighterBlue: 'rgb(63, 201, 222)',
        turqoise: 'rgb(56, 241, 211)',
        onyx: 'rgb(32, 14, 50)',
        evergreen: 'rgb(71, 248, 114)',
        slate: 'rgb(74, 74, 104)',
        lightSlate: 'rgb(140, 140, 161)',
        dorian: 'rgb(236, 241, 244)',
        cloud:'rgb(250, 252, 254)',
      },
    },
  },
  plugins: [],
};
