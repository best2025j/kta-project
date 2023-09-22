import "./index.css";
import AppProvider from "../themes/useThemes"; // Update the import path

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider attribute="class">
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
