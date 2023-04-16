import { Global,  } from "@emotion/react";

const styles = tema => {
  return{
    html: {
      fontFamily: tema.fontFamily
    },
    body: {
      margin: 0
    }
  }
  
}

export const Styles = () => {
  return <Global styles={styles} />;
};
