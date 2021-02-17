import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import JokesService from "../services/jokes/jokes.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import * as Actions from "../actions/message";

const InputWord = (props) => {
  const form = useRef();
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    JokesService.getFullContent(word).then((resp) => {
      dispatch(Actions.setMessage(resp.data));        
    });
    // eslint-disable-next-line
  }, []);

  const onChangeWord = (e) => {
    const word = e.target.value;
    setWord(word);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    JokesService.getFullContent(word).then((response) => {        
        dispatch(Actions.setMessage(response.data));
        setLoading(false);
        setWord("");
    });    
  };
  
  return (
    <div className="col-xs-12">      
        <Form onSubmit={handleSend} ref={form} >
        <div className="input-group mb-3" >
          <Input 
            type="text"
            className="form-control w512"
            name="word"
            placeholder="Search for your own jokes"
            aria-label="Search for your own jokes"
            aria-describedby="button-setword"
            value={word}
            onChange={onChangeWord}    
            style={{width: "750px"}}
          />
          <button className="btn btn-outline-secondary" type="submit" id="button-setword">
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Search</span>
          </button>
        </div>         
        </Form>
    </div>
  );
};

export default InputWord;
