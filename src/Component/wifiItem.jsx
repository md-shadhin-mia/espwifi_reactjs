import React from 'react';
const WifiItem = (props) => {
    return ( <tr>
        <td>
            <div className="wifi">
                <div className="name">{props.wifi.name}</div>
                <div className="mac">{props.wifi.mac}</div>
            </div>
        </td>
        <td>
            78
        </td>
        <td>
            -80
        </td>
        <td>
            WPA / WPA2 / PSK
        </td>
    </tr> );
}
 
export default WifiItem;