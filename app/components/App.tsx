import { Outlet } from "@remix-run/react";
import { EthersProvider } from "~/hooks/useEthersProvider";

export function App() {
    return (
        <main className="h-full">
            <EthersProvider>
                <Outlet />
            </EthersProvider>
        </main>
    );
}

export default App;
