import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Speed } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="nav-link-container">
        <IconButton size="large" edge="start" color="inherit">
          <Speed />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Compass
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/generate" color="inherit">
            Generate
          </Button>
          <Button href="/quickGen" color="inherit">
            Quick Gen
          </Button>
          <Button href="/pricing" color="inherit">
            Pricing
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
