import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { InputText } from "./components/InputText/InputText";
import { ThemeProv } from "./components/ThemeProvider/ThemeProv";
import { Typography } from "./components/Tipography/Typography";
import { Buttons } from "./components/Buttons/Buttons";

function App() {
  return (
    <ThemeProv>
      <Styles />
      <Header>
        <Typography variant="h2" component="h1">
          Teste
        </Typography>
      </Header>
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1">
                Freela
              </Typography>
              <Typography variant="body" component="body">
                Crie seu perfil para começar a trabalhar com os melhores
                freelancers.
              </Typography>
              <Row>
              <Col >
             
              <InputText title="Nome Completo" />
             
              </Col>
              </Row>
              <Row>
              <Col lg={4} md={4} sm={4}>
              <InputText title="Estado" />
              </Col>
              <Col lg={8} md={8} sm={8}>
              <InputText title="Cidade" />
              </Col>
              </Row>
              <Row>
                <Col>
                <InputText title='E-mail'/>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                <InputText title='Senha'/>
                </Col>
                <Col lg={6} md={6} sm={6}>
                <InputText title='Repita a senha'/>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Buttons variante="secundaria">Anterior</Buttons>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign: 'end'}}>
                  <Buttons >
                    Próximo
                  </Buttons>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <Typography variant="body" component="body">
          oi
        </Typography>
      </Footer>
    </ThemeProv>
  );
}

export default App;
