import { Home } from "~/pages";
import { Navigation } from "~/components";

export default function Index() {
    return (
        <main className="h-screen">
            <Navigation />
            <Home />
        </main>
    );
}
