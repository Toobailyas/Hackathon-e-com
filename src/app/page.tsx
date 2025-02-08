
import Intouch from "./components/InTouch";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero";
import Different from "./components/Different";

import Popular from "./components/Popular";


export default function Home() {
  return (
    <div>
      <Hero />
      <Different />
      <Popular />
      {/* <NewProducts /> */}
      <Popular />
      <SignUp />
      <Intouch />

    </div>
  );
}
