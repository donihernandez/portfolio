/* eslint-disable max-len */
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

export default function Document() {
    return (
        <Html lang="en-us">
            <Head>
                <NextSeo
                    canonical="https://donihernandez.com"
                    description="Hi, I´m Doni! I'm a software engineer specialized in both front-end and back-end. I'm a passionate about web development and I really love Javascript. I live in Cuba and I'm currently looking for work outside my country."
                    title="Adonai Dominguez Hernandez | Software Engineer"
                />
                <link href="/favicon.ico" rel="icon" />
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link
                    crossOrigin="anonymous"
                    href="https://fonts.gstatic.com"
                    rel="preconnect"
                />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap"
                    rel="stylesheet"
                />
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
        `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
