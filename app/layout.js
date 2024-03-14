import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">{children}</body>
    </html>
  );
}
