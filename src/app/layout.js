import Navbar from "./components/Navbar";

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
  