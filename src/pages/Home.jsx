import React from "react";
import cbe from "/images/cbe.png";


const Home = () => {
  return (
    <div>
      <h1>This is the home page.</h1>
      <p></p>
      <img src={cbe} alt="cherry blossom" />
    </div>
  );
};

export default Home;

// export default function Home(){
//     reutrn (
//         <>
//         <About/>
//         <Upbringing/>
//         </>
//     )
// }