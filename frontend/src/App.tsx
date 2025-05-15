import "./App.css";
import MyCard from "./components/MyCard/MyCard";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MyCard />
      </ThemeProvider>
    </>
  );
}

export default App;
