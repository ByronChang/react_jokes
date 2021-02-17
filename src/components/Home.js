import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import InputWord from "./InputWord";
import RandomJoke from "./RandomJoke";

const Home = (props) => {
  const MsgData = useSelector(({ message }) => message.data || []);

  return (
    <Fragment>
      <div className="jokescontainer">
        <div id="listJokes" style={{flexGrow:1, width:"660px", paddingRight:"90px"}}>
          <InputWord/>      
          <div className="">           
            <div className="">
            {MsgData.results !== undefined &&
            MsgData.results.map((item, index)=>(
              <div 
                id={index}
                key={index}
                className="itemResultList"
              >
                <strong >{item.joke}</strong>       
              </div>
            ))}
            </div>
          </div>  
        </div>
        <div className="randomSidebar" >
          <RandomJoke/>         
        </div>        
      </div>
      
    </Fragment>
  );
};

export default Home;
