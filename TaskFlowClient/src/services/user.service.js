async function createUser(user) {
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

