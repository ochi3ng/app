import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Add  from './hp';
import Farmproduct from './farmProduct';
import Num from './number';
import Vegetables from './vegetables';

function App() {
  let name = "Your name"
  const vegetables=["sukuma","managu","cabbage","spinach","mito","etc"]
  const names=["Brian","Kevin","Devid","Ouma","Victor","Onyango","Emmanuel","Erick"]
  const farmProduct = ["orange","Tomato","Banana","Overcado","Sugarcane",89]
  const totalCost=1000
 const firstName="John"
 const secondName="Ochieng"
 const lastName="Maricus"
  return (
    <div className="App">
  
      {/* <Header />
      <Farmproduct/> */}
      {/* <Num/> */}
     <Vegetables Vegetables={ vegetables} name={name} 
      firstName={firstName} secondName={secondName} lastName={lastName} farmProduct={farmProduct} names={names}/>

     {/* {name}  */}
     {/* <Footer/> */}
     {/* <Hello></Hello> */}
     {/* <SayHae/> */}
{/* <Add/> */}
    </div>
  );
}

export default App;
