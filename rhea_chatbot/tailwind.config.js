// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["*.html"],
//   theme: {
//     extend: {
//       colors: {
//         gemLight: "#e5f5e0",
//         gemRegular: "#a1d99b",
//         gemDeep: "#31a354",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        gemLight: "#e5f5e0",
        gemRegular: "#a1d99b",
        gemDeep: "#31a354",
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        md: "0.375rem",
      },
      fontSize: {
        "lg": "1.125rem",
      },
      lineHeight: {
        "lg": "1.75rem",
      },
    },
  },
  plugins: [],
};