import React from "react";
import CB from "/images/CB.png";
import cbe from "/images/cbe.png";

const Home = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>This is the home page.</p>
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