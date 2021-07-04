import { makeStyles } from "@material-ui/core"
import Logo from "../components/Logo"
import { Theme } from "../theme/types"

function Splash() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Logo />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.light,
    padding: theme.spacing(7),
  }
}))

export default Splash
