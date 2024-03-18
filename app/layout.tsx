import type { ReactNode } from "react";
import { StoreProvider } from "../src/StoreProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/styles/globals.css";
import styles from "../src/styles/layout.module.css";

import { Footer } from "@/src/components/footer/Footer";
import { Nav } from "@/src/components/navbar/Nav";

interface IProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <StoreProvider>
      <html lang="es">
        <body>
          <section className={styles.container}>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
