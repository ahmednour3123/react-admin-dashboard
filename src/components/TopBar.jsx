import MuiAppBar from "@mui/material/AppBar";

import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import {
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme, setMode }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const refMenuBiggerScreen = useRef(null);
  const theme = useTheme();
  const [showBiggerScreenMenu, setshowBiggerScreenMenu] = useState(false);

  const renderMenu = (
    <Menu
      anchorEl={refMenuBiggerScreen.current}
      open={showBiggerScreenMenu}
      onClose={() => {
        setshowBiggerScreenMenu(false);
      }}
    >
      <MenuItem
        onClick={() => {
          setshowBiggerScreenMenu(false);
        }}
      >
        No Notifications
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1} />
        <Stack direction={"row"}>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentmode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentmode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}

          <IconButton
            ref={refMenuBiggerScreen}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => {
              setshowBiggerScreenMenu(!showBiggerScreenMenu);
            }}
            color="inherit"
          >
            <NotificationsOutlined />
          </IconButton>
        </Stack>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default TopBar;
