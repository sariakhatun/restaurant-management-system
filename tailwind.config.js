// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f74526",
          secondary: "#ffb3a0",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#ffffff",
          "base-content": "#1f2937"
        }
      },
      {
        dark: {
          primary: "#ffdd99",
          secondary: "#f6ad55",
          accent: "#67e8f9",
          neutral: "#191D24",
          "base-100": "#0f172a",
          "base-content": "#e6edf3"
        }
      },
      "synthwave"
    ]
  }
};
