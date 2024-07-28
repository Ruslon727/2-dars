/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-tight': '12px',   
        'tight': '16px',   
        'snug': '20px',      
        'normal': '24px',    
        'relaxed': '28px',  
        'loose': '32px',      
      }
    },
  },
  plugins: [],
}

