/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btnStrt: "#3702C8",
        btnEnd: "#6C54E6",
        txtColor: "#1E1E1E",
        chatBotClr: "#6C54E6",
        div2txtHeadClr: "#3D3D3D",
        div2txtClr: "#828282",
        circleBign: "#B224EF",
        circleEnd: "#7579FF",
        middleBarShaow: "#294898",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
