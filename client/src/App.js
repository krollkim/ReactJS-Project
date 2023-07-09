import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes/Router";
import Layout from "./layout/main/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import { UserProvider } from "./users/providers/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
