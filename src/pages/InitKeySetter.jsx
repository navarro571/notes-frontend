import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";

const InitKeySetter = () => {
    const [key, setKey] = useState("");

    return (
        <div className="menu-background">
            <div className="menu-keysetter">
                <div className="keysetter-title">
                    <h3>Project KEY</h3>
                </div>
                <form action="/">
                    <div className="keysetter-container">
                        <div className="keysetter-input">
                            <label htmlFor="name">Key</label>
                            <input id="key" onChange={e => setKey(e.target.value)} name="key" maxLength={50} type="text" placeholder="2fdf23=234-2342"/>
                        </div>
                        <div className="keysetter-buttons">
                            <Link className="button-continue" to={key}>CONTINUE</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InitKeySetter;