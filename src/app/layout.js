import "./globals.css";
import SmoothScroll from "@/providers/SmoothScroll";
import TransitionProvider from "@/providers/TransitionProvider";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "TeDiMark — Technology. Digitalization. Marketing.",
  description:
    "We transform businesses through technology, digitalization, and strategic marketing. From AI engineering to go-to-market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navigation />
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
