import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

interface Context {
    provider?: ethers.providers.Web3Provider;
}

interface Props {
    children?: React.ReactNode;
}

const initial: Context = {};
const ContextWrapper = createContext(initial);

export const useGetEthersProviderContext = () => useContext(ContextWrapper);

export const EthersProvider = (props: Props) => {
    const [contextValue, setContext] = useState<Context>(initial);

    useEffect(() => {
        if (!window.ethereum) {
            throw new Error("No MetaMask");
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        if (provider) {
            setContext({ provider });
        }
    }, []);

    return (
        <ContextWrapper.Provider value={contextValue}>
            {props.children}
        </ContextWrapper.Provider>
    );
};
