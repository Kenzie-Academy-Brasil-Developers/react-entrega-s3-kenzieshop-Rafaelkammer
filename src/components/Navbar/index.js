import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <MenuItem onClick={() => sendTo("/")}>DigimonStore</MenuItem>
          <MenuItem onClick={() => sendTo("/cart")}>Meus Digimons</MenuItem>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
