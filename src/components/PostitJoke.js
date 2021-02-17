import React, {Fragment} from 'react';
import PropTypes from "prop-types";

const PostitJoke = (props) => {
  return (
    <Fragment>
        <div className="postitjoke">
          <div className={props.type}></div>
          <div className="postitdiv rounded">
            <div className="postitcontent">
              <div className="postititle">{props.title}</div>
              <p>{props.description}</p>
            </div>
          </div>             
        </div>
    </Fragment>
  );
}

PostitJoke.defaultProps = {
    type:"beer",
    title:"This is a Title",
    description:"Lorem ipsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy."
}

PostitJoke.propTypes = {
    type:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string
}
export default PostitJoke;