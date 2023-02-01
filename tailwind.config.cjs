module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        Cormorant: ["Cormorant", "sans-serif"],
        Pop: ["Poppins", "sans-serif"],
      },
       
      colors: {
        textColor: "#101010",
        activeText: "#D6230A",
        gradientBg: "rgba(116, 249, 105,0.4)",
        whiteAlpha: "rgba(255,255,255,0.2)",
        DarkAlpha: "rgba(255,255,255,0.2)",
        bgSpan:"rgba( 66, 66, 66, 0.65 )",
        cardColor: "#f5f5f5",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
      boxShadow: {
        'neo': '5px 5px 10px #141414,-5px -5px 10px #525252',
        'neo2' :'7px 7px 14px #141414, -7px -7px 14px #525252;',
        'inner' : 'box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.6)'
      },
      
    },

    
  },
  plugins: [require("daisyui"),require("tailwind-scrollbar")],
}