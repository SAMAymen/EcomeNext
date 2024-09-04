import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "../../components/Footer";
import GameNavbar from "../../components/GameNavbar";
// import IPCollector from "@/app/components/IPCollector";

// Lazy load the FacebookPixel component for better performance
// const FacebookPixel = dynamic(() => import("../../components/FacebookPixel"), {
//   ssr: false, // Ensure it only runs on the client-side
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <DangerBanner /> */}
      <GameNavbar />
      {/* <FacebookPixel pixelId={process.env.FACEBOOK_PIXEL_ID as string} /> */}
      {/* <IPCollector /> */}
      <div>{children}</div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
