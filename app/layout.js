import Navbar from "./components/Navbar/Navbar";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Dailybyte",
  description: "Welcome!",
};
