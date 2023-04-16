import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavbarContextProvider } from "./contexts/NavbarContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<NavbarContextProvider>
				<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</GoogleOAuthProvider>
			</NavbarContextProvider>
		</Provider>
	</React.StrictMode>
);
