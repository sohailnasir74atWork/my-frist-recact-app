import React from "react"
import Addition from "./components/addition";
import HelloWorld from "./components/helloWorld";
import Header  from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    
    <div>
      
   <Header/>
   
      <HelloWorld name="waqas" />
      
      <Addition/>
      <Footer/>
    </div>
  );
}

export default App;
