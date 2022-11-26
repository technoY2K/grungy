import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { App } from "~/components";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: tailwindStylesheetUrl },
        // NOTE: Architect deploys the public directory to /_static/
        { rel: "icon", href: "/_static/favicon.ico" },
    ];
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "GODZ",
    viewport: "width=device-width,initial-scale=1",
});

export default function Root() {
    return (
        <html lang="en" className="h-full bg-[#191E2B]">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <App />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
