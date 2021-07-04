import {useHistory} from 'react-router'
import { useEffect } from 'react'
import { makeStyles } from "@material-ui/core"
import Logo from "../components/Logo"
import { Theme } from "../theme/types"

function Splash() {
  const classes = useStyles()
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/areas')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
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
