import { Box } from "@mui/material";
import NavigationDrawer from "./components/shared/navigation-drawer/NavigationDrawer";
import { Outlet } from "react-router-dom";

function App() {
  const drawerWidth = 240;
  return (
    <>
     <Box className="flex">
      <NavigationDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
          Main page
        <Outlet />
      </Box>
     </Box>
    </>
  );
}

export default App;
