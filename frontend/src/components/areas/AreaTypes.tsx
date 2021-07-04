import { useEffect, useState } from 'react';
import { Theme } from '../../theme/types';
import { MenuItem, Select, TextField, Grid, Button, makeStyles } from "@material-ui/core";

export interface AreaType {
  biomeId: number;
  percentage: number;
}

//10 for 10%
type Props = {
  types: { id: number, type: string }[];
  onChange: (areas: AreaType[]) => void;
}

const AreaTypes: React.FC<Props> = ({ types, onChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<AreaType[]>([{ biomeId: 0, percentage: 10 }]);
  const classes = useStyles();

  const addAreaType = () => {
    setSelectedTypes(prev => [...prev, { biomeId: 0, percentage: 10 }])
  }

  useEffect(() => {
    onChange(selectedTypes);
  }, [selectedTypes, onChange]);

  return (
    <div className={classes.root}>
      {selectedTypes.map((selectedType, i) => (
        <Grid container spacing={4} style={{marginBottom: 8}}>
          <Grid item xs={8}>
            <Select
              className={classes.select}
              autoWidth
              labelId="demo-simple-select-label"
              id={`${i}-${selectedType}-type`}
              variant="filled"
              defaultValue="Select a Type"
              value={String(selectedType.biomeId)}
              onChange={({target: {value}}) => setSelectedTypes(prev => {
                prev[i] = {
                  ...prev[i],
                  biomeId: Number(value) as number
                };
                return [...prev];
              })}
            >
              {types.map((type, i) => (
                <MenuItem value={String(type.id)}>{type.type}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <TextField
              className={classes.textField}
              id={`${i}-${selectedType}-percentage`}
              type='number'
              label="%"
              variant="filled"
              value={String(selectedType.percentage)}
              onChange={({target: {value}}) => setSelectedTypes(prev => {
                prev[i] = {
                  ...prev[i],
                  percentage: Number(value) as number
                };
                return [...prev];
              })}
            />
          </Grid>
        </Grid>
      ))}
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={addAreaType}
      >
        Add another Type
      </Button>
    </div>
  )
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  select: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
}))

export default AreaTypes