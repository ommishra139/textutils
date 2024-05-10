import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Textform from './Components/Textform';



function App() {

  const [mode, setMode] = useState('dark');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  


  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
    setTimeout(() => {
      setAlert(null);
    },1500);
  }


const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#2662b9';
    showAlert("Dark mode has been enable","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable","success");
  }
}


  return 
  (
  
    <>
     {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}

     {/* <Navbar /> */}
     <Navbar title="TextUtils" mode ={[mode]} toggleMode={{toggleMode}}/>
     <Alert alert ={alert}/>
     <div className="container my - 3" >
     <Textform showAlert={showAlert} heading ="Enter the text to analysis below"  mode ={mode}/>
     {/* <About/> */}
     <Navbar1/>
     </div>
  
    </>
  );

}

export default App;


