import "./globals.css"

export const metadata = {
  title: {
    default: "NEXOHUB – Movies, Anime, Apps & Software",
    template: "%s | NEXOHUB",
  },
  description:
    "Download Movies, Web Series, Anime episodes, Earning apps, Games and Software from NEXOHUB. Fast, mobile friendly and secure.",
  keywords: [
    "movies download",
    "anime download",
    "web series",
    "earning apps",
    "games download",
    "software download",
  ],
  openGraph: {
    title: "NEXOHUB",
    description:
      "Premium platform for Movies, Anime, Web Series, Apps, Games and Software.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}