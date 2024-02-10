
import React from "react";
import Function from './Function';
import { BrowserRouter, Routes ,Route, Link} from "react-router-dom";

function ChildComponent({ onclickhandle }) {
    return (
        <div>
            <BrowserRouter>
           <Link to='/function'> <button onClick={onclickhandle}>Click here for function start </button></Link>
                <Routes>
                    <Route path='/function' element={<Function />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
    // <li><Link to='/about'>About</Link></li>
}

export default ChildComponent;