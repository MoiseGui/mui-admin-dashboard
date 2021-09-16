import { useEffect } from "react";
// react-router components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// @material-ui core components
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from "@material-ui/core/Icon";

// Soft UI Dashboard Material-UI components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard Material-UI example components
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard Material-UI themes
import theme from "assets/theme";

// Soft UI Dashboard Material-UI routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      backgroundColor="white"
      boxShadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      customClass="cursor-pointer"
    >
      <Icon className="material-icons-round text-dark" fontSize="medium">
        settings
      </Icon>
    </SuiBox>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Sidenav routes={routes} />
        {configsButton}
      </>
      <Switch>
        {getRoutes(routes)}
        <Redirect from="*" to="/app/dashboard" />
      </Switch>
    </ThemeProvider>
  );
}
