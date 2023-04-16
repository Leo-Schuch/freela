import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ThemeProv } from "./components/ThemeProvider/ThemeProv";
import { Typography } from "./components/Tipography/Typography";

function App() {
  return (
    <ThemeProv>
      <Styles />
      <Card>
        <Typography variant="h1" component="h1">
          Freela
        </Typography>
        <Typography variant="body" component="body">
          Crie seu perfil para começar a trabalhar com os melhores freelancers. 
        </Typography>
        <Typography variant="h2" component="h2">
          Crie seu perfil para começar a trabalhar com os melhores freelancers. 
        </Typography>
        <Typography variant="h3" component="h3">
          Crie seu perfil para começar a trabalhar com os melhores freelancers. 
        </Typography>
      </Card>
    </ThemeProv>
  );
}

export default App;
