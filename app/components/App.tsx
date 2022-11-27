import { Outlet } from "@remix-run/react";
import { EthersProvider } from "~/hooks/useEthersProvider";
import { Navigation } from "~/components";

export function App() {
    return (
        <main className="h-full">
            <EthersProvider>
                <Navigation />
                <main className="px-8 pt-20">
                    <Outlet />
                </main>
            </EthersProvider>
        </main>
    );
}

export default App;
