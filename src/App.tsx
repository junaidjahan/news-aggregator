import { Box } from "@mui/material";
import NavigationDrawer from "./components/shared/navigation-drawer/NavigationDrawer";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  const drawerWidth = 240;
  return (
    <>
      <RecoilRoot>
        <Box className="flex">
          <NavigationDrawer />
          <Box
            component="main"
            className="sm:pt-24"
            sx={{
              flexGrow: 1,
              p: 3,

            }}
          >
            <Outlet />
          </Box>
        </Box>
      </RecoilRoot>
    </>
  );
}

export default App;
