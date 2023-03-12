import React from "react";

   const stacje = [
    {
      id: 1,
      lat: 54.52905326358329,
      lng: 18.51377505304689,
      name: "Shell",
      address: "Janka Wiśniewskiego 13, 81-335 Gdynia",
      prices: ["benzyna 95 - 5,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 2,
      lat: 54.47138434134298,
      lng: 18.49104168223515,
      name: "Shell",
      address: "Chwaszczyńska 10, 81-571 Gdynia",
      prices: ["benzyna 95 - 5,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 3,
      lat: 54.526868478514274,
      lng: 18.512608871267954,
      name: "Shell",
      address: "ul. Morska 58, 81-225 Gdynia",
      prices: ["benzyna 95 - 5,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 4,
      lat: 54.55037004849716,
      lng: 18.45489975788624,
      name: "Shell",
      address: "Hutnicza 35F, 81-038 Gdynia",
      prices: ["benzyna 95 - 5,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 5,
      lat: 54.54438322243422,
      lng: 18.465143231205513,
      name: "Shell",
      address: "Chylonska 110a, 81-033 Gdynia",
      prices: ["benzyna 95 - ,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 6,
      lat: 54.47289498894234,
      lng: 18.55373996775364,
      name: "Shell",
      address: "Aleja Zwycięstwa 256, 81-545 Gdynia",
      prices: ["benzyna 95 - 6,9 zl", "diesel ON - 7,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 7,
      lat: 54.54936467726156,
      lng: 18.512952157776894,
      name: "Shell",
      address: "Szlifierzy 1, 81-190 Gdynia",
      prices: ["benzyna 95 - 6,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 8,
      lat: 54.45878140993311,
      lng: 18.45547290704128,
      name: "Shell",
      address: "Krzemowa 1, 81-577 Gdynia",
      prices: ["benzyna 95 - 6,75 zl", "diesel ON - 7,35 zl", "gaz LPG - 2,40 zl"],
    },
    {
      id: 9,
      lat: 54.47401402947994,
      lng: 18.51583670871083,
      name: "Orlen",
      address: "Wielkopolska 239, 81-531 Gdynia",
      prices: ["benzyna 95 - 6,71 zl", "diesel ON - 7,55 zl", "gaz LPG - 2,40 zl"],
    },
    {
      id: 10,
      lat: 54.5504673902905,
      lng: 18.425205664444228,
      name: "Orlen",
      address: "Morska 495, 81-005 Gdynia",
      prices: ["benzyna 95 - 6,71 zl", "diesel ON - 7,25 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 11,
      lat: 54.54161996794048,
      lng: 18.453597024562512,
      name: "Orlen",
      address: "Kcyńska 25, 81-005 Gdynia",
      prices: ["benzyna 95 - 6,71 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 12,
      lat: 54.51348124169192,
      lng: 18.53364472886238,
      name: "Orlen",
      address: "Śląska 45, 81-310 Gdynia",
      prices: ["benzyna 95 - 6,77 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 13,
      lat: 54.549072078480194,
      lng: 18.499697846653305,
      name: "Orlen",
      address: "Kontenerowa 2, 81-155 Gdynia",
      prices: ["benzyna 95 - 6,66 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 14,
      lat: 54.53233667601256,
      lng: 18.509982717816985,
      name: "Orlen",
      address: "Janka Wiśniewskiego 20A, 81-980 Gdynia",
      prices: ["benzyna 95 - 6,78 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 15,
      lat: 54.5177757365056,
      lng: 18.55485003390015,
      name: "Lotos",
      address: "al. Jana Pawła II, 81-345 Gdynia",
      prices: ["benzyna 95 - 6,79 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 16,
      lat: 54.532342901348194,
      lng: 18.509982717816985,
      name: "Lotos",
      address: "Janka Wiśniewskiego 20A, 81-980 Gdynia",
      prices: ["benzyna 95 - 6,70 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 17,
      lat: 54.49668350385293,
      lng: 18.538983682235145,
      name: "Lotos",
      address: "Aleja Zwycięstwa 165, 81-521 Gdynia",
      prices: ["benzyna 95 - 6,77 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 18,
      lat: 54.54512640608654,
      lng: 18.477107311279216,
      name: "BP",
      address: "Hutnicza 15A, 81-061 Gdynia",
      prices: ["benzyna 95 - 6,81 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 19,
      lat: 54.52545850765823,
      lng: 18.516068838053567,
      name: "BP",
      address: "Morska 40, 81-333 Gdynia",
      prices: ["benzyna 95 - 6,83 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 20,
      lat: 54.56396013335031,
      lng: 18.506425138053565,
      name: "BP",
      address: "Hieronima Derdowskiego 1, 81-198 Pogórze",
      prices: ["benzyna 95 - 6,92 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 21,
      lat: 54.537705117672765,
      lng: 18.495978261015495,
      name: "MOYA",
      address: "Hutnicza 1, 81-212 Gdynia",
      prices: ["benzyna 95 - 6,68 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 22,
      lat: 54.54112881599492,
      lng: 18.486719677961343,
      name: "MOYA",
      address: "Hutnicza 5, 81-061 Gdynia",
      prices: ["benzyna 95 - 6,63 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 23,
      lat: 54.531828712706904,
      lng: 18.495593900052132,
      name: "MOYA",
      address: "Morska 116A, 81-225 Gdynia",
      prices: ["benzyna 95 - 6,61 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 24,
      lat: 54.472728393476515,
      lng: 18.480528587152538,
      name: "MOYA",
      address: "Nowowiczlińska 2, 81-577 Gdynia",
      prices: ["benzyna 95 - 6,65 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 25,
      lat: 54.47281098279469,
      lng: 18.47913076525229,
      name: "Pod Zaglami",
      address: "Nowowiczlińska 31, 81-577 Gdynia",
      prices: ["benzyna 95 - 6,65 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 26,
      lat: 54.49632480790014,
      lng: 18.51421860679766,
      name: "Pod Zaglami",
      address: "Małokacka 13, 81-654 Gdynia",
      prices: ["benzyna 95 - 6,77 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 27,
      lat: 54.49704659215503,
      lng: 18.534703915397397,
      name: "Pod Zaglami",
      address: "Sportowa 8, 81-300 Gdynia",
      prices: ["benzyna 95 - 6,70 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 28,
      lat: 54.56164899553369,
      lng: 18.509163367694605,
      name: "Pod Zaglami",
      address: "Kapitana Konstantego Maciejewicza 2, 81-189 Gdynia",
      prices: ["benzyna 95 - 6,60 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 29,
      lat: 54.548873259720494,
      lng: 18.514423768744088,
      name: "Circle K",
      address: "Admirała Józefa Unruga 3, 81-181 Gdynia",
      prices: ["benzyna 95 - 6,75 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 30,
      lat: 54.548873259720494,
      lng: 18.514423768744088,
      name: "AUTO - DAREX",
      address: "Hutnicza 1, 81-212 Gdynia",
      prices: ["benzyna 95 - 6,65 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
    },
    {
      id: 31,
      lat: 54.49205072082896,
      lng: 18.535502157698694,
      name: "BMG",
      address: "Łużycka 9, 81-537 Gdynia",
      prices: ["benzyna 95 - 6,55 zl", "diesel ON - 6,55 zl", "gaz LPG - 3,40 zl"],
      icon: ""
    },
  ];

  const sortedStacje = [...stacje].sort((a, b) => {
    const priceA = parseFloat(a.prices.find(price => price.includes("benzyna 95")).split(" - ")[1]);
    const priceB = parseFloat(b.prices.find(price => price.includes("benzyna 95")).split(" - ")[1]);
    return priceA - priceB;
  });

  
function Array() {

  return (
    <>      
      <div>
        <h2>Stacje paliw posortowane wg. ceny benzyny 95:</h2>
        <ul>
          {sortedStacje.map(stacja => (
            <li key={stacja.id}>
              <strong>{stacja.name}</strong><br />
              {stacja.address}<br />
              Cena benzyny 95: {stacja.prices.find(price => price.includes("benzyna 95"))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Array;

// pelna lista wyswietlenia
// return (
//     <>
//     < Search />
    
//     <div>  
//       <ul>
//         {stacje.map((stacja) => (
//           <li key={stacja.id}>
//             <h2>{stacja.icon}{stacja.name}</h2>
//             <p>{stacja.address}</p>
//             <p>{stacja.prices.join(", ")}</p>
//           </li>
//         ))}
//       </ul>
//     </div>    
//     </>
//   );
