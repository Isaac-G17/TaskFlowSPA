 export async function createUser(user) {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Error al crear usuario");
  }

  return await response.json();
}

async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) {
    throw new Error("Error al obtener los usuarios");
  }
  return await response.json();
}

async function getUserById(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener el usuario");
  }
  return await response.json();
}

async function updateUser(id, user) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el usuario");
  }

  return await response.json();
}

async function deleteUser(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el usuario");
  }

  return true;
}

export const userService = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

