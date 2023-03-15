import React from "react";
import { stacje } from "./Demo";


function Array() {
  return (
    <>   
      <div> <h1>Lista wszystkich stacji paliw</h1>
        <ul>
          {stacje.map((station) => (
            <div key={station.id}>
              <h2>{station.name}</h2> <p> ul. {station.address}</p>
              <li> benzyna 95 - {station.prices.pb95} zł </li> 
              <li> diesel ON - {station.prices.on} zł </li>
              <li> gaz LPG - {station.prices.lpg} zł </li>
            </div>
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

