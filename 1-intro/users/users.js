const getUserSync = (id) => {
  const startPoint = new Date().getTime();
  while (new Date().getTime() - startPoint <= 3000) {
    //wait
  }

  return {
    id,
    nombre: `Usuario ${id}`,
  };
};

const getUser = (id, callback) => {
  const usuario = {
    id,
    nombre: `Usuario ${id}`,
  };

  setTimeout(() => {
    callback(usuario);
  }, 3000);
};

module.exports = {
  getUser,
  getUserSync,
};
