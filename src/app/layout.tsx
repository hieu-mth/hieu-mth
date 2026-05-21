export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", background: "#0b0b0b", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
