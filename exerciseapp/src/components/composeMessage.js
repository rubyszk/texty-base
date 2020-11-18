import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ComposeMessage = () => {
  const classes = useStyles();

  return (
    <div>
      <Input placeholder="Reply"/>
      <Button         
        variant="contained"
        color="primary">
        Send 
      </Button>
    </div>
  )
}

export default ComposeMessage;