const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: HME');
    //conn.write('Move: up');
    //conn.write('Move: right');
    //conn.write('Move: up');
    //conn.write('Move: left');
  }); 

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  return conn;
}

module.exports = { connect };