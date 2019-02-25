import React from 'react';

function Jumbotron() {
  return (
    <header>
        <div className="jumbotron" id="myJumbotron">
            <div className="container">
            <h1 className="display-3">George Cooper Dev-Test</h1>
            <p>Click on the buttons below to display secret information. Once you have clicked on a button the data will be stored in a database. For this app I used MongoDb, Express.js, React.js, Redux & Bootstrap 4.</p>
            </div>
        </div>
    </header>
  )
}

export default Jumbotron;