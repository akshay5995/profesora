import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client, {
  GetTokenSilentlyOptions,
  RedirectLoginResult,
  GetTokenWithPopupOptions,
  GetIdTokenClaimsOptions,
  PopupLoginOptions,
  RedirectLoginOptions,
  LogoutOptions,
  IdToken,
} from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { auth0config } from '../utils/config';

export interface Auth0Context {
  user?: any;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isPopupOpen: boolean;
  loginWithPopup(o?: PopupLoginOptions): Promise<void>;
  handleRedirectCallback(): Promise<RedirectLoginResult>;
  getIdTokenClaims(o?: GetIdTokenClaimsOptions): Promise<IdToken>;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<void>;
  getTokenSilently(o?: GetTokenSilentlyOptions): Promise<string | undefined>;
  getTokenWithPopup(o?: GetTokenWithPopupOptions): Promise<string | undefined>;
  logout(o?: LogoutOptions): void;
}

interface Auth0ProviderOptions {
  children: React.ReactElement;
}

const onRedirectCallback = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext<Auth0Context>(
  {} as Auth0Context
);

export const useAuth0 = (): Auth0Context => useContext(Auth0Context);

export const Auth0Provider = ({ children }: Auth0ProviderOptions) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState<Object>();
  const [auth0Client, setAuth0Client] = useState<Auth0Client>();

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(auth0config);

      setAuth0Client(auth0FromHook);

      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        let appState: RedirectLoginResult = {};
        try {
          ({ appState } = await auth0FromHook.handleRedirectCallback());
        } finally {
          onRedirectCallback();
        }
      }

      const authed = await auth0FromHook.isAuthenticated();

      if (authed) {
        const userProfile = await auth0FromHook.getUser();
        setIsAuthenticated(true);
        setUser(userProfile);
      }

      setIsInitializing(false);
    };

    initAuth0();
  }, []);

  const loginWithPopup = async (options?: PopupLoginOptions) => {
    setIsPopupOpen(true);

    try {
      await auth0Client!.loginWithPopup(options);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPopupOpen(false);
    }

    const userProfile = await auth0Client!.getUser();
    setUser(userProfile);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setIsInitializing(true);

    const result = await auth0Client!.handleRedirectCallback();
    const userProfile = await auth0Client!.getUser();
    setIsInitializing(false);
    setIsAuthenticated(true);
    setUser(userProfile);

    return result;
  };

  const loginWithRedirect = (options?: RedirectLoginOptions) =>
    auth0Client!.loginWithRedirect(options);

  const getTokenSilently = (options?: GetTokenSilentlyOptions) =>
    auth0Client!.getTokenSilently(options);

  const logout = (options?: LogoutOptions) => auth0Client!.logout(options);

  const getIdTokenClaims = (options?: GetIdTokenClaimsOptions) =>
    auth0Client!.getIdTokenClaims(options);

  const getTokenWithPopup = (options?: GetTokenWithPopupOptions) =>
    auth0Client!.getTokenWithPopup(options);

  return (
    <Auth0Context.Provider
      value={{
        user,
        isAuthenticated,
        isInitializing,
        isPopupOpen,
        loginWithPopup,
        loginWithRedirect,
        logout,
        getTokenSilently,
        handleRedirectCallback,
        getIdTokenClaims,
        getTokenWithPopup,
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
