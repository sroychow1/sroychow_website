import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialLinks from "./components/social-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoumik Roychowdhury - Software Engineer & Researcher | UC Berkeley EECS",
  description: "Shoumik Roychowdhury is a UC Berkeley EECS student and software engineer with experience at Amazon, BAIR, and leading AI research. Specialized in machine learning, computer vision, and full-stack development.",
  keywords: [
    "Shoumik Roychowdhury",
    "Software Engineer",
    "UC Berkeley EECS",
    "Machine Learning",
    "AI Research",
    "Computer Vision",
    "Full Stack Developer",
    "Berkeley AI Research",
    "Amazon SDE",
    "Artificial Intelligence"
  ],
  authors: [{ name: "Shoumik Roychowdhury" }],
  creator: "Shoumik Roychowdhury",
  publisher: "Shoumik Roychowdhury",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sroychow.com",
    title: "Shoumik Roychowdhury - Software Engineer & Researcher",
    description: "Shoumik Roychowdhury is a UC Berkeley EECS student and software engineer with experience at Amazon, BAIR, and leading AI research.",
    siteName: "Shoumik Roychowdhury",
    images: [
      {
        url: "https://sroychow.com/headshot.png",
        width: 1200,
        height: 630,
        alt: "Shoumik Roychowdhury - Software Engineer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoumik Roychowdhury - Software Engineer & Researcher",
    description: "UC Berkeley EECS student and software engineer with experience at Amazon, BAIR, and leading AI research.",
    images: ["https://sroychow.com/headshot.png"],
  },
  verification: {
    google: "xC4Ybzyw4lYaOD5bRoU1nGAmCZCJOmAkm3VzywRf6d4",
  },
  alternates: {
    canonical: "https://sroychow.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shoumik Roychowdhury",
              url: "https://sroychow.com",
              image: "https://sroychow.com/headshot.png",
              jobTitle: "Software Engineer & Researcher",
              worksFor: {
                "@type": "Organization",
                name: "UC Berkeley EECS"
              },
              alumniOf: {
                "@type": "Organization",
                name: "University of California, Berkeley"
              },
              description: "UC Berkeley EECS student and software engineer with experience at Amazon, BAIR, and leading AI research.",
              sameAs: [
                "https://linkedin.com/in/shoumikroychowdhury",
                "https://github.com/sroychow",
                "https://scholar.google.com/citations?user=YssSsnQAAAAJ&hl=en",
              ],
              knowsAbout: [
                "Machine Learning",
                "Artificial Intelligence",
                "Computer Vision",
                "Software Engineering",
                "Full Stack Development",
                "Computer Science",
                "Data Science"
              ],
            }),
          }}
        />
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <SocialLinks />
      </body>
    </html>
  );
}
