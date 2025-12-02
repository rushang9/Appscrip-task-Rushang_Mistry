import Navbar from "./components/Navbar";
// app/layout.tsx
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Prevent automatic CSS injection


export const metadata = {
    title: "Responsive Product Store",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}
        </body>
      </html>
    );
  }
  