import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePickOption}
      disabled={!props.hasOptions}
      >Who pays next?
    </button>
  </div>

);

export default Action;
