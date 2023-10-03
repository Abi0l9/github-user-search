import Layout from "./components/Layout";
import { useColorScheme } from "./hooks/ColorSchemeContext";

function App() {
  const { colorScheme } = useColorScheme();

  console.log(colorScheme);
  return (
    <div className={` bg-${colorScheme === "dark" ? "white" : "gray-800"}`}>
      <Layout />
    </div>
  );
}

export default App;
