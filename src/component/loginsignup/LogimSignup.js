import React, { useState } from 'react';

const LogimSignup = () => {

    const [action, setAction] = useState("sing up");

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Login" ? <div></div> : <div><div className='input'>
                        <a><i class="fa-solid fa-user"></i></a>
                        <input type='text' placeholder='Name' required/>
                    </div>
                    </div>}

                    <div className='input'>
                        <a><i class="fa-solid fa-envelope"></i></a>
                        <input type='email' placeholder='Email Id' required/>
                    </div>
                    <div className='input'>
                        <a><i class="fa-solid fa-lock"></i></a>
                        <input type='password' placeholder='Password' required/>
                    </div>
                </div>
                {action === "Sing Up" ? <div></div> : <div>  <div className='forgot-password'>Lost Password? <span>Click Here</span></div></div>}

                <div className='submit-container'>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sing Up") }}>Sign Up</div>
                    <div className={action === "Sing Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}> Login</div>
                </div>
            </div>
        </>
    )
}

export default LogimSignup;
