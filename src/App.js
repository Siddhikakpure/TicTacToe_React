import { useRef, useState } from 'react';
import './App.css';
import circle from './Assets/circle_icon.png'
import cross from './Assets/cross_icon.png'
function App() {

  let [data, setdata] = useState(Array(9).fill(''));
  let [lock,setlock]=useState(false);
  let [count,setcount]=useState(0);
  let [won,setWon]=useState(false);
  let titleref=useRef(null);
 

  let boxes=document.getElementsByClassName("boxes");
  const lockFun=()=>{
    console.log("in lockfun")
      for(let i=0;i<9;i++){
        boxes[i].style.pointerEvents="none";
      }
    };

  const toggle=(e,num)=>{
    if(lock===true) return 0;
    let newData = [...data];
    if(count%2===0){
      newData[num]='X';
      e.target.innerHTML=`<img src="${circle}">`;
    }else{
      newData[num]='Y';
      e.target.innerHTML=`<img src="${cross}">`;
    }
    setcount(++count);
    setdata(newData);
    data=[...newData]
    checkWinner();

  }

  const display=(e)=>{
    console.log("in diaplay");
    if(e==='X'){
      titleref.current.innerHTML=`<h4>Congratulations : circle won! </h4>`;
      setWon(true);
    }
    else if(e==='Y'){
      titleref.current.innerHTML=`<h4>Congratulations : cross won!</h4>`;
      setWon(true);
    }
    console.log("calling lockfun in display")
    lockFun();
  }

  const checkWinner=()=>{
    console.log("in checkwin ");
    console.log(data);
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      display(data[2]);
    }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      display(data[5]);
    }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      display(data[8]);
    }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      display(data[6]);
    }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      display(data[7]);
    }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      display(data[8]);
    }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      display(data[8]);
    }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      display(data[6]);
    }
  }

  const reset=()=>{
    console.log('Reset button clicked');
    setlock(false);
    setcount(0);
    console.log(data);
    titleref.current.innerHTML="Tic Tac Toe"
    for(let i=0;i<9;i++){
      boxes[i].style.pointerEvents="";
      boxes[i].innerHTML="";
      data[i]="";
    }
    console.log(data);
  }
  
  return (
    <>
      <div className="body">
        <div className="container">
            <div className="heading" ref={titleref}>Tic Tac Toe </div>    
            <div className="board">
                <div className="row1">
                  <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                  <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                  <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                  <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
                </div>

            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>  
      </div>  
    </>
  );
}

export default App;
