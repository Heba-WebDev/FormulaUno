import React from 'react';


export default function LatestResults (props) {

    const topThree = props.latestResults.slice(0,3);

return (
    <div>
        {topThree.map((driver) => {
            return (
                <div key={driver.Driver.driverId}>

                    <li>{driver.Driver.code}</li>
                </div>
            )
        })}
    </div>
)

}