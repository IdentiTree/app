import { useEffect, useState } from 'react';
import { MenuItem, Select, TextField, Typography, Grid, Button, makeStyles } from "@material-ui/core";

export interface AreaType {
  type: number;
  percentage: number;
}

//10 for 10%
type Props = {
  types: { id: number, type: string }[];
  onChange: (areas: AreaType[]) => void;
}

const AreaTypes: React.FC<Props> = ({ types, onChange }) => {
  const [selectedTypes, setSelectedTypes] = useState<AreaType[]>([{ type: 0, percentage: 10 }]);

  const addAreaType = () => {
    setSelectedTypes(prev => [...prev, { type: 0, percentage: 10 }])
  }

  useEffect(() => {
    onChange(selectedTypes);
  }, [selectedTypes, onChange]);

  return (
    <div>
      <Typography variant="h4">Area Types</Typography>
      {selectedTypes.map((selectedType, i) => (
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Select
              style={{ width: '100%' }}
              autoWidth
              labelId="demo-simple-select-label"
              id={`${i}-${selectedType}-type`}
              variant="filled"
              label="Type"
              defaultValue="Select a Type"
              value={String(selectedType.type)}
              onChange={({target: {value}}) => setSelectedTypes(prev => {
                prev[i] = {
                  ...prev[i],
                  type: Number(value) as number
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
              style={{ flex: 1 }}
              id={`${i}-${selectedType}-percentage`}
              type='number'
              label="Percentage"
              variant="filled"
            />
          </Grid>
        </Grid>
      ))}
      <Button onClick={addAreaType}>Add another Type</Button>
    </div>
  )
}

export default AreaTypes