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
import { stacje } from "./Demo";
import StationSelectCheckmarks from "./Select"

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

function Search() {
  const [fuelPrice, setFuelPrice] = React.useState([]);
  const [namesStation, setNamesStation] = React.useState([]);

  const handlePriceChange = (event) => {
    const {
      target: { value },
    } = event;
  
    const selectedPrices = typeof value === "string" ? value.split(",") : value;
    setFuelPrice(selectedPrices);
  
    // Filter the stations based on selected fuel prices
    const filteredStations = stacje.filter((station) => {
      const stationPrices = station.prices;
      return selectedPrices.some((price) => stationPrices.hasOwnProperty(price));
    });
  
    // Create an array of prices for selected fuels
    const selectedFuelPrices = selectedPrices.reduce((acc, curr) => {
      filteredStations.forEach((station) => {
        if (station.prices.hasOwnProperty(curr)) {
          acc.push(station.prices[curr]);
        }
      });
      return acc;
    }, []);
  
    // Do something with the filtered stations and selected fuel prices
    console.log(filteredStations, selectedFuelPrices);
  };
  
  const handleNamesChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedStationNames =
      typeof value === "string" ? value.split(",") : value;

    console.log(value);

    setNamesStation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    // Filter the array of stations based on the selected station name(s)
    const selectedStations = stacje.filter((stacja) =>
      selectedStationNames.includes(stacja.name)
    );

    setNamesStation(selectedStations);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const uniqueStationNames = [...new Set(stacje.map((stacja) => stacja.name))];
  const allPrices = [
    ...new Set(stacje.flatMap((station) => Object.keys(station.prices))),
  ];

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
          {allPrices.map((price) => (
            <MenuItem key={price} value={price}>
              <Checkbox checked={fuelPrice.indexOf(price) > -1} />
              <ListItemText primary={price} />
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
          value={namesStation}
          onChange={handleNamesChange}
          input={<OutlinedInput label="Wyszukaj stacje" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {uniqueStationNames.map((stationName) => (
            <MenuItem key={stationName} value={stationName}>
              <Checkbox
                checked={
                  stacje
                    .filter((stacja) => stacja.name === stationName)
                    .findIndex((item) => namesStation.indexOf(item) !== -1) !==
                  -1
                }
              />
              <ListItemText primary={stationName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Stack sx={{ width: 350 }}>
        <ColorButton variant="contained">Gdzie Najtaniej ?</ColorButton>
      </Stack>
      <div>
        {namesStation.map((station) => (
          <div key={station.id}>
            <h2>{station.name}</h2>
            <ul>
              <li> benzyna 95 - {station.prices.pb95} zł </li>
              <li> diesel ON - {station.prices.on} zł </li>
              <li> gaz LPG - {station.prices.lpg} zł </li>
            </ul>
          </div>
        ))}
      </div>
      
      {/* < StationSelectCheckmarks /> */}
    </div>
  );
}

export default Search;
