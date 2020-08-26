/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const handleUserInput = function(key, conn) {
  if (key === 'w') conn.write('Move: up');
  else if (key === 's') conn.write('Move: down');
  else if (key === 'd') conn.write('Move: right');
  else if (key === 'a') conn.write('Move: left');
  else if (key === 'l') conn.write('Say: <3<3');
  else if (key === 'h') conn.write('Say: :)');
  else if (key === 'o') conn.write('Say: :O');
  else if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key, conn);
  });
  return stdin;  
}

module.exports = { setupInput };