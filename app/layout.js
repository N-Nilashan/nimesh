import "./globals.css";

export const metadata = {
  title: "Nimesh Nilashan - Cybersecurity Learning Portfolio",
  description:
    "Documenting my cybersecurity learning journey through hands-on projects in web application security, vulnerability assessment, and secure engineering.",
  authors: [
    {
      name: "Nimesh Nilashan",
      url: "https://www.linkedin.com/in/nimesh-nilashan",
    },
  ],
  keywords: [
    "Cybersecurity",
    "Learning Portfolio",
    "Web Application Security",
    "Vulnerability Assessment",
    "Security Projects",
    "Sri Lanka",
  ],
  icons: {
    icon: "/n.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
