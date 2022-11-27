import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useGetEthersProviderContext } from "./useEthersProvider";
import { reportError } from "~/telemetry";

export type ConnectedAccount = string | undefined;

export default function useWalletConnector() {
    const [balance, setBalance] = useState<string>();
    const [account, setAccount] = useState<ConnectedAccount>();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const { provider } = useGetEthersProviderContext();

    const checkConnection = useCallback(
        async (provider: ethers.providers.Web3Provider) => {
            const accounts = await provider.listAccounts();

            if (accounts.length) {
                provider
                    .send("eth_requestAccounts", [])
                    .then((accounts) => {
                        if (accounts.length > 0) {
                            setAccount(accounts[0]);
                            setIsConnected(true);
                        }
                    })
                    .catch((error) => {
                        reportError(error);
                    });
            } else {
                setIsConnected(false);
            }
        },
        []
    );

    useEffect(() => {
        if (provider) {
            checkConnection(provider);
        }
    }, [provider, checkConnection]);

    useEffect(() => {
        if (!account || !ethers.utils.isAddress(account)) {
            return;
        }

        if (provider) {
            provider
                .getBalance(account)
                .then((balance) => {
                    setBalance(ethers.utils.formatEther(balance));
                })
                .catch((error) => {
                    reportError(error);
                });
        }
    }, [account, provider]);

    const connect = () => {
        if (provider) {
            provider
                .send("eth_requestAccounts", [])
                .then((accounts) => {
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                        setIsConnected(true);
                    }
                })
                .catch((error) => {
                    reportError(error);
                });
        }
    };

    const disconnect = () => {
        setAccount(undefined);
        setBalance(undefined);
    };

    return { account, balance, connect, disconnect, isConnected };
}
