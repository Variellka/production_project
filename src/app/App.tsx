import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button type="button" onClick={toggleTheme}>
        change theme
      </button>
    </div>
  );
};

export default App;
