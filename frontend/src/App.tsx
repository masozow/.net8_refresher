import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
