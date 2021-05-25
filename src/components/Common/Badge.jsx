import React from 'react';
import './Badge.css'
const Badge = (props) => {
  const { value, classes, badge, clickHandler } = props;
  return (
    <div>
      <button className="btn btn-light btn-sm" onClick={clickHandler}>
        <span>
          <i className={classes} aria-hidden="true"></i>
        </span>
      </button>
      <span className={badge}>{value}</span>
    </div>
  );
};

export default Badge;
