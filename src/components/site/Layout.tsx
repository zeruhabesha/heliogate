import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";
import { ScrollProgress } from "./ScrollProgress";
import { CursorSpotlight } from "./CursorSpotlight";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <ScrollProgress />
    <CursorSpotlight />
    <Header />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <ChatWidget />
  </div>
);
