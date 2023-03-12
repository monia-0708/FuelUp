import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import Array from "./Array";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const price = ["benzyna 95", "diesel ON", "gaz LPG"];

const name = [
  "Shell",
  "Orlen",
  "Lotos",
  "BP",
  "MOYA",
  "Pod Żaglami",
  "AUTO - DAREX",
  "Cirkle K",
  "BMG",
  "Zaznacz wszystkie",
];

function Search() {
  const [fuelPrice, setFuelPrice] = React.useState([]);
  const [nameStation, setNameStation] = React.useState([]);

  const handlePriceChange = (event) => {
    const {
      target: { value },
    } = event;
    setFuelPrice(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setNameStation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div className="search-container">
      <FormControl className="search-price" sx={{ m: 1, width: 150 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          style={{ color: "#ebf1f1" }}
        >
          Rodzaj paliwa
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={fuelPrice}
          onChange={handlePriceChange}
          input={<OutlinedInput label="Ceny paliw" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {price.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={fuelPrice.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="search-name" sx={{ m: 1, width: 150 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          style={{ color: "#ebf1f1" }}
        >
          Nazwa stacji
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={nameStation}
          onChange={handleNameChange}
          input={<OutlinedInput label="Wyszukaj stacje" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {name.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={nameStation.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack sx={{ width: 350 }}>
        <ColorButton variant="contained">Gdzie Najtaniej ?</ColorButton>
      </Stack>
    </div>
  );
}

export default Search;
