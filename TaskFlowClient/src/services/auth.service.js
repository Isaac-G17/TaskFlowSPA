


const llave = "SESSION_ACTUAL"

export function createSession(user){
    localStorage.setItem( llave, JSON.stringify(user));
}

export function getSession(){
    const sessionJSON = localStorage.getItem(llave)
    return JSON.parse(sessionJSON)
}

export function clearSession(){
    localStorage.removeItem(llave)
}

export async function loginUser({email, password}){
    const normalizedEmail = email.trim().toLowerCase()
    const trimmedPassword = password.trim()

    if(!normalizedEmail || !trimmedPassword){
        throw new Error("Debes ingresar correo y contraseña.")
    }

    const user = await findUserByEmail(normalizedEmail)

    if(!user){
        throw new Error("No existe un usuario con este correo.")
    }

    return user
}