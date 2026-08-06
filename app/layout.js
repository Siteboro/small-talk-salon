import "./globals.css";

const siteUrl = "https://smalltalksalon.siteboro.com";
const previewImage = "/generated/small-talk-salon/images/04-long-balayage.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Small Talk Salon | Madisonville, Louisiana",
    template: "%s | Small Talk Salon",
  },
  description:
    "Small Talk Salon in Madisonville, Louisiana. Haircuts, color, curls, styling, and a welcoming salon atmosphere. Call for an appointment.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Small Talk Salon",
    title: "Small Talk Salon | Madisonville, Louisiana",
    description:
      "Good hair, honest conversation, and a salon visit that feels like catching up with your best friend.",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 1600,
        alt: "Long dimensional balayage styled at Small Talk Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Talk Salon | Madisonville, Louisiana",
    description:
      "Haircuts, color, curls, and styling in a welcoming Madisonville salon.",
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Hair salon",
};

export const viewport = {
  themeColor: "#f4efe7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
