import React from "react";
import { stacje } from "./Demo";

function Array() {
  return (
    <>
      <div>
        <ul>
          {stacje.map((station) => (
            <li key={station.id}>
              <h2>{station.name}</h2> <p> ul. {station.address}</p>
              <p> benzyna 95 - {station.prices.pb95} zł </p> 
              <p> diesel ON - {station.prices.on} zł </p>
              <p> gaz LPG - {station.prices.lpg} zł </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Array;

// const sort = stacje.map(({ name, address, prices }) => [name, address, prices.pb95]);
// console.log(sort);//zwraca tablice

// const allPrices = stacje.map(item => Object.values(item.prices)).flat();  console.log(allPrices) //wyswietla tylko wartosci prices

//   const allPrices = stacje.map((item) => Object.values(item)); console.log(allPrices) //wyswietla wszystkie wartosci objektow

//  const items = stacje.map((item) => (
//   <li key={item.id}>
//   {item.name}, {item.address}, {item.prices.pb95}
// </li>
// ));

// return (
// <>
//      <div>
//       <ul>
//         {items}
//         </ul>
//         </div>
//         </>
// )

// }

