import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { InputText } from "./components/InputText/InputText";
import { ThemeProv } from "./components/ThemeProvider/ThemeProv";
import { Typography } from "./components/Tipography/Typography";

function App() {
  return (
    <ThemeProv>    
      <Styles />   
      <Header >
        <Typography variant='h2' component='h1'>
            Teste
        </Typography>
      </Header>
      <Card>       
        <Typography variant="h1" component="h1">
          Freela
        </Typography>
        <Typography variant="body" component="body">
          Crie seu perfil para começar a trabalhar com os melhores freelancers. 
        </Typography>
        <InputText title='Nome Completo'/>
      </Card>
        <Footer>
          <Typography variant="body" component="body">
            oi
          </Typography>
        </Footer>
    </ThemeProv>
  );
}

export default App;
