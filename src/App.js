import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import lightTheme from "./Themes/lightTheme";
import {CssBaseline} from "@mui/material";
import Loading from "./Components/Loading";
import Router from "./utils/router";
import {useSelector} from "react-redux";
import {loginSelector} from "./store/accountReducer/loginReducer";

function App() {

  const { loading } = useSelector(loginSelector);

  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <CssBaseline />
        {loading ? <Loading /> : <Router />}
      </ThemeProvider>
  );
}

export default App;

