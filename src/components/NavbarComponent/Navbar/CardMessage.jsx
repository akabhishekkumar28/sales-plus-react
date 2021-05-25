import React from 'react';
import './CardMessage.css'
import boy from './boy.jpg'
import cartoon from './img2.png'
import lebra from './lebra.jpg'

const CardMessage = () => {
    return (
        <div className='message_notification'>
            <div className="first_noti">
                You have 5 new messages
            </div>
            <div className="second_noti">
                    <div className="row">
                        <div className="col-2 "> 
                        <img className='boy  my-1 ml-2' src = {boy}/>
                        </div>
                            <div className="col-6 ">
                                <h5 className='mt-2'>Jonathan Smith</h5>
                                <p> Hello this is an example message</p>
                            </div>
                            <div className="col-4">
                                <p className='mt-3' style={{fontWeight : '800', textAlign : 'center'}}>Just now</p>
                            </div>
                    </div>
            </div>
            {/* =========================================== */}

            <div className="second_noti">
                    <div className="row">
                        <div className="col-2 "> 
                        <img className='boy  my-1 ml-2' src = {cartoon}/>
                        </div>
                            <div className="col-6 ">
                                <h5 className='mt-2'>Jhon Doe</h5>
                                <p> Hello this is an example message</p>
                            </div>
                            <div className="col-4">
                                <p className='mt-3 'style={{fontWeight : '800', textAlign : 'center'}} >10 mins</p>
                            </div>
                    </div>
            </div>
            {/* ======================================================================== */}


            <div className="second_noti">
                    <div className="row">
                        <div className="col-2 "> 
                        <img className='boy  my-1 ml-2' src = {lebra}/>
                        </div>
                            <div className="col-6 ">
                                <h5 className='mt-2'>Jason Stathum</h5>
                                <p> Hello this is an example message</p>
                            </div>
                            <div className="col-4">
                                <p className='mt-3' style={{fontWeight : 'bolder', textAlign : 'center'}}>3 hrs</p>
                            </div>
                    </div>
            </div>
            {/* =============================================================================== */}


            <div className="second_noti">
                    <div className="row">
                        <div className="col-2 "> 
                        <img className='boy  my-1 ml-2' src = {cartoon}/>
                        </div>
                            <div className="col-6 ">
                                <h5 className='mt-2'>Jondi Rose</h5>
                                <p> Hello this is an example message</p>
                            </div>
                            <div className="col-4">
                                <p className='mt-3' style={{fontWeight : '800',textAlign : 'center'}}>Just now</p>
                            </div>
                    </div>
            </div>
            {/* ========================================================= */}
            <div className="row">
                <div className="col-12 py-4">
                    See all messages
                </div>
            </div>
        </div>
      );
}
 
export default CardMessage;