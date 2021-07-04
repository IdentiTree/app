import { makeStyles, Grid, Avatar } from "@material-ui/core";
import { Theme } from "../theme/types";
import Symbol from "./Symbol";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Symbol />
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&h=750&w=1260" />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: 70,
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.palette.background.border,
    '& .symbol':{
      maxHeight: 40,
      maxWidth: 40,
    },
  }
}))

export default Header
