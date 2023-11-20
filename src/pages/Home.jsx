import React from "react";
import cbe from "/images/cbe.png";


const Home = () => {
  return (
    <div>
      <h3>This is the home page.</h3>
      <p> About Me: </p>
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