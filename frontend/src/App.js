import React,{useState} from 'react';
import './App.css';
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Employment from './Employment'
import Awards from './Awards'
export default function App() {

  const [details,setDetails] = useState({
    email:"",
    fullname:"",
    dob:"",
    pob:"", //place of birth
    gender:"Male",
    nation:"",
    father:"",
    marital:"",
    mob:"",
    phone:"",
    pemail:"",
    semail:"",
    address:"",
    resspec:"",
    tr:"",//teaching/research
    cc:"",//core courses
    ec:"" //elective courses
})

  const[formno,setformno]=useState(1);
  const scrollTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  
  const nextform = () =>{
    setformno(formno+1);
    scrollTop();
  }
  const prevform = ()=>{
    setformno(formno-1);
    scrollTop();
  }
  

  return (
    <div className="App">
    {
      formno===1&&
      <PersonalDetails nextform={nextform} details={details} setDetails={setDetails}/>
    }
    {
      formno===2&&
      <Education nextform={nextform} prevform={prevform}/>
    }
    {
      formno===3&&
      <Employment nextform={nextform} prevform={prevform}/>
    }
    {
      formno===4&&
      <Awards nextform={nextform} prevform={prevform}/>
    }
  
    </div>
  );
}


