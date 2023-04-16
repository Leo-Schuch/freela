import "./App.css";
import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ThemeProv } from "./components/ThemeProvider/ThemeProv";

function App() {
  return (
    <ThemeProv>
      <Styles />
      <Card>
        <h1>Freela</h1>
      </Card>
    </ThemeProv>
  );
}

export default App;
