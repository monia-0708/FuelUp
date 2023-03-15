import React from "react";

export default function Cheapest() {
  

  return (
    <>
    <Cheapest/>
    </>
  )
}

const [selectedFuelPrices, setSelectedFuelPrices] = React.useState([]);

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
  const selectedFuelPrices = filteredStations.map((station) => {
    const stationPrices = station.prices;
    const fuelPrices = selectedPrices.reduce((acc, curr) => {
      if (stationPrices.hasOwnProperty(curr)) {
        acc.push({ fuelType: curr, fuelPrice: stationPrices[curr] });
      }
      return acc;
    }, []);
    return {
      name: station.name,
      fuelPrices: fuelPrices.sort((a, b) => a.fuelPrice - b.fuelPrice),
    };
  });

  // Set the selected fuel prices
  setSelectedFuelPrices(selectedFuelPrices);
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

// const handlePriceChange = (event) => {
//   const {
//     target: { value },
//   } = event;

//   const selectedPrices = typeof value === "string" ? value.split(",") : value;
//   setFuelPrice(selectedPrices);

//   // Filter the stations based on selected fuel prices
//   const filteredStations = stacje.filter((station) => {
//     const stationPrices = station.prices;
//     return selectedPrices.some((price) => stationPrices.hasOwnProperty(price));
//   });

//   // Create an array of objects with stations and selected fuel prices
//   const selectedFuelPrices = filteredStations.reduce((acc, curr) => {
//     const prices = {};
//     selectedPrices.forEach((price) => {
//       if (curr.prices.hasOwnProperty(price)) {
//         prices[price] = curr.prices[price];
//       }
//     });
//     if (Object.keys(prices).length > 0) {
//       acc.push({ name: curr.name, prices: prices });
//     }
//     return acc;
//   }, []);

//   // Do something with the filtered stations and selected fuel prices
//   console.log(selectedFuelPrices);
// };

// function Search() {
//   const [fuelPrice, setFuelPrice] = React.useState([]);
//   const allPrices = [...new Set(stacje.flatMap((station) => Object.keys(station.prices)))];

//   return (
//     <div>
//       <Select
//         labelId="demo-multiple-checkbox-label"
//         id="demo-multiple-checkbox"
//         multiple
//         value={fuelPrice}
//         onChange={handlePriceChange}
//         input={<OutlinedInput label="ALL PRICES" />}
//         renderValue={(selected) => selected.join(", ")}
//         MenuProps={MenuProps}
//       >
//         {allPrices.map((price) => (
//           <MenuItem key={price} value={price}>
//             <Checkbox checked={fuelPrice.indexOf(price) > -1} />
//             <ListItemText primary={price} />
//           </MenuItem>
//         ))}
//       </Select>

//       {fuelPrice.length > 0 && (
//         <ul>
//           {selectedFuelPrices.map((station) => (
//             <li key={station.name}>
//               <h3>{station.name}</h3>
//               <ul>
//                 {Object.entries(station.prices).map(([key, value]) => (
//                   <li key={key}>
//                     {key}: {value}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";

// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// export default function StationSelectCheckmarks() {
//   const [selectedStations, setSelectedStations] = useState([]);

//   const stations = [
//     {
//       id: 1,
//       lat: 54.52905326358329,
//       lng: 18.51377505304689,
//       name: "Shell",
//       address: "Janka Wiśniewskiego 13, 81-335 Gdynia",
//       prices: {
//         pb95: 6.25,
//         on: 7.45,
//         lpg: 3.48
//       }
//     },
//     {
//       id: 2,
//       lat: 54.47138434134298,
//       lng: 18.49104168223515,
//       name: "Shell",
//       address: "Chwaszczyńska 10, 81-571 Gdynia",
//       prices: {
//         pb95: 6.35,
//         on: 7.43,
//         lpg: 3.29
//       }
//     },
//     {
//       id: 3,
//       lat: 54.526868478514274,
//       lng: 18.512608871267954,
//       name: "Shell",
//       address: "Morska 58, 81-225 Gdynia",
//       prices: {
//         pb95: 6.25,
//         on: 7.41,
//         lpg: 3.31
//       }
//     },
//     {
//       id: 4,
//       lat: 54.55037004849716,
//       lng: 18.45489975788624,
//       name: "Shell",
//       address: "Hutnicza 35F, 81-038 Gdynia",
//       prices: {
//         pb95: 6.25,
//         on: 7.44,
//         lpg: 3.46
//       }
//     },
//     {
//       id: 5,
//       lat: 54.54438322243422,
//       lng: 18.465143231205513,
//       name: "Shell",
//       address: "Chylonska 110a, 81-033 Gdynia",
//       prices: {
//         pb95: 6.44,
//         on: 7.77,
//         lpg: 3.49
//       }
//     },
//     {
//       id: 6,
//       lat: 54.47289498894234,
//       lng: 18.55373996775364,
//       name: "Shell",
//       address: "Aleja Zwycięstwa 256, 81-545 Gdynia",
//       prices: {
//         pb95: 6.74,
//         on: 7.47,
//         lpg: 3.47
//       }
//     }]

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;

//     const filteredValue = value.filter(
//       (item) => stations.findIndex((o) => o.id === item.id) >= 0
//     );

//     let duplicatesRemoved = value.filter((item, itemIndex) =>
//       value.findIndex((o, oIndex) => o.id === item.id && oIndex !== itemIndex)
//     );

//     let duplicateRemoved = [];

//     value.forEach((item) => {
//       if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
//         duplicateRemoved = duplicateRemoved.filter((x) => x.id === item.id);
//       } else {
//         duplicateRemoved.push(item);
//       }
//     });

//     setSelectedStations(duplicateRemoved);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Stations</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={selectedStations}
//           onChange={handleChange}
//           input={<OutlinedInput label="Stations" />}
//           renderValue={(selected) => selected.map((x) => x.name).join(', ')}
//           MenuProps={MenuProps}
//         >
//           {stations.map((station) => (
//             <MenuItem key={station.id} value={station}>
//               <Checkbox
//                 checked={
//                   selectedStations.findIndex(
//                     (item) => item.id === station.id
//                   ) >= 0
//                 }
//               />
//               <ListItemText primary={station.name} />
//             </MenuItem>
//           ))}
//         </Select>
//         <div>
//         {selectedStations.map((station) => (
//           <div key={station.id}>
//             <h2>{station.name}</h2>
//             <ul>
//               <li> benzyna 95 - {station.prices.pb95} zł </li>
//               <li> diesel ON - {station.prices.on} zł </li>
//               <li> gaz LPG - {station.prices.lpg} zł </li>
//             </ul>
//           </div>
//         ))}
//       </div>
//       </FormControl>
//     </div>
//   );
// }
