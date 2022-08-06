import { Box, ThemeProvider, CssBaseline } from "@mui/material";

import bgDesktopDark from "./assets/bg-desktop-dark.jpg";

import { Header } from "@features/ui";
import { AddTodo, TodoList } from "@features/todo";

import theme from "./theme";

function App() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,

            "& img": {
              width: "100%",
              objectFit: "cover",
              minHeight: "350px",
              objectPosition: "left",
            },
          }}
        >
          <img src={bgDesktopDark} />
        </Box>
        <Box
          sx={{
            my: 8,
            maxWidth: "700px",
            mx: "auto",
            px: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AddTodo />
          <TodoList />
        </Box>
      </ThemeProvider>
    </main>
  );
}

export default App;
