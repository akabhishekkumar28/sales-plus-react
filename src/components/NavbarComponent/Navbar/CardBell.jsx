import React from "react";
import "./CardBell.css";
const CardBell = () => {
  return (
    <div className="bell_notification">
      {/* <div className="first_bell_noti ">You have 7 new notification </div> */}

      <div className="first_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 ">
            <p className="mt-3">You have 7 new notification</p>
          </div>
        </div>
      </div>

      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 bell ">
            <div className="f ">
              <span class="badge bg-danger bad2">
                <i className="fa fa-bolt py-1  icon_fontAwesome"></i>
              </span>
            </div>

            <div className="s ">
              <span className=" ">Server £3 overloaded. 34 mins</span>
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================================== */}

      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 bell ">
            <div className="f ">
              <span class="badge bg-warning bad2">
                <i className="fa fa-bell py-1  icon_fontAwesome"></i>
              </span>
            </div>

            <div className="s ">
              <span className="">Server £10not responding, 1 hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}

      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 bell ">
            <div className="f ">
              <span class="badge bg-danger bad2">
                <i className="fa fa-bolt py-1  icon_fontAwesome"></i>
              </span>
            </div>

            <div className="s ">
              <span className=" ">Database overloaded 24%. 4hrs</span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================================== */}
      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 bell ">
            <div className="f ">
              <span class="badge bg-success bad2">
                <i className="fa fa-plus py-1  icon_fontAwesome"></i>
              </span>
            </div>

            <div className="s ">
              <span className=" ">New user . Just now</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================================================== */}

      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 bell ">
            <div className="f ">
              <span class="badge bg-primary bad2">
                <i className="fa fa-bullhorn py-1  icon_fontAwesome"></i>
              </span>
            </div>

            <div className="s ">
              <span className=" ">Application 10 mins</span>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================================== */}
      <div className="second_bell_noti">
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-10 ">
            <p className="mt-2 all">See all notification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBell;
