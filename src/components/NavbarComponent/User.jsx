import React from 'react';
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login&nbsp;
      </button>
      <div className="dropdown-menu UserButton" aria-labelledby="dropdownMenuButton">
        <div className="row text-center">
          <div className="col-6">
            <Link className="dropdown-item" to="/">
              <i className="fa fa-suitcase"></i>
              <p>Company Profile</p>
            </Link>
          </div>
          <div className="col-6">
            <Link className="dropdown-item" to="/">
              <i className="fa fa-user"></i>
            <p>Change Password</p>
            </Link>
          </div>
          <div className="col-12">
            <div className="py-2">
              <Link className="dropdown-item" to="/">
                <i className="fa fa-key"></i>
                  <p>Logout</p>
              </Link>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}

export default User;