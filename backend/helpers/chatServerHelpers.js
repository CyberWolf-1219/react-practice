export function on_client_connect(io, socket) {
  console.log(`NEW CHAT CLIENT CONNCETED...`);

  socket.on("INIT", (data) => {
    console.log(`CLIENT INITIALIZING REQUEST...`);
    on_client_init(socket, data);
    broadcast_user_list(io);
  });

  socket.on("SEND", (data) => {
    console.log(`MSG TRANSPORT REQUEST...`);
    on_send(io, socket.data.name, data.content);
  });
}

// EVENT HANDLERS =============================================================
function on_client_init(socket, data) {
  console.log(`ALIAS CHANGED > SOCKET: ${socket.id} ALIAS: ${data.user_name}`);
  socket.data.name = data.user_name;
}

function on_send(io, sender, msg) {
  console.log(`TRANSPORTING MSG...`);
  io.emit("RECV", { sender: sender, content: msg });
}

// HELPERS ====================================================================
async function fetch_users(io) {
  console.log(`FETCHING USERS...`);
  const users = await io.fetchSockets();
  const usersList = [];

  for (let user of users) {
    console.log(`USER: ${user.id} > ${user.data.name}`);
    usersList.push({ user_id: user.id, user_name: user.data.name });
  }

  return usersList;
}

async function broadcast_user_list(io) {
  const usersList = await fetch_users(io);
  console.log(`BROADCASTING USERS LIST...`);
  io.emit("UPDATE", usersList);
}
