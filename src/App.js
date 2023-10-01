import Layout from "./components/Layout";
import { useColorScheme } from "./hooks/ColorSchemeContext";

function App() {
  const { colorScheme } = useColorScheme();
  return (
    <div className={` bg-${colorScheme === "dark" ? "white" : "black"}`}>
      <Layout />
    </div>
  );
}

export default App;
