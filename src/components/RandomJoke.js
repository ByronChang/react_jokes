import React, { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import JokesService from "../services/jokes/jokes.service";
import Form from "react-validation/build/form";
import * as Actions from "../actions/message";

const RandomJoke = (props) => {
  const form = useRef();  
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const MsgDataRandom = useSelector(({ messageRandom }) => messageRandom.data || []);

  useEffect(() => {
    JokesService.getRandomContent().then((resp) => {
      dispatch(Actions.setMessageRandom(resp.data));        
    });
    // eslint-disable-next-line
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    JokesService.getRandomContent().then(
      (response) => {        
        dispatch(Actions.setMessageRandom(response.data));
        setLoading(false);        
    });
  };

  return (
    <Fragment>
        <div className="randomSidebar" >
          <div className="rounded-lg bordergray">
            <div className="fun mt-4"></div>            
            <div className="" align="center">
            <Form onSubmit={handleSend} ref={form} >  
              <button type="submit" className="btn btn-lg rounded-pill randomButton mt-4 mb-4">
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}  
                <small> <strong>Get a random joke</strong></small>
              </button>              
            </Form>  
            </div>
            <div className="bg-gray text-center text-light randomjokebg">
              <p className="card-text">{MsgDataRandom.joke}</p>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default RandomJoke;
