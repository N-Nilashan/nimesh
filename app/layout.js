import './globals.css'

export const metadata = {
  title: "Nimesh Nilashan - Front-End Developer",
  description: "Handcrafted websites using Next.js, TailwindCSS, and Framer Motion. Built for personal brands & small businesses.",
  authors: [{ name: "Nimesh Nilashan", url: "https://x.com/N_Nilashan" }],
  keywords: ["Front-end developer", "Next.js", "TailwindCSS", "Sri Lanka", "Freelancer", "Web developer"],
  icons: {
    icon: '/n.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
