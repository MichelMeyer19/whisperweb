// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['LitteraText', 'sans-serif'], // This sets LitteraText as the default sans-serif font
      },
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
        gradient: 'var(--Gradient---Green-Blue, linear-gradient(180deg, #55E1A0 0%, #52B6F8 100%))',
        // meshColor was here, but we are using backgroundImage instead
      },
      backgroundImage: {
        // Add this with your image path
        'mesh': "url('/public/mesh/mesh-4.png')" // Replace with the actual path to your image
        
      }
    },
  },
  plugins: [require("daisyui")],
};
