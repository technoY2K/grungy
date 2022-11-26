import { Navigation } from "~/components";
import { Outlet } from "@remix-run/react";

export default function DashboardRoute() {
    return (
        <main className="h-screen">
            <Navigation />
            <Outlet />
        </main>
    );
}
