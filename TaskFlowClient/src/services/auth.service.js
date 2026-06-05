import { getUserByEmail } from "./user.service";
import { error } from "../utils/alerts";
import bcrypt from "bcryptjs";



const SessionKeys = "SESSION_ACTUAL"

export function saveSession(user){
    const sessionUser = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        roles: user.roles ?? [],
    }

    localStorage.setItem(SessionKeys, JSON.stringify(sessionUser))
}


export function getSession() {
    const sessionUser = localStorage.getItem(SessionKeys);

    if (!sessionUser) {
        return null;
    }

    return JSON.parse(sessionUser);
}

export function clearSession(){
    localStorage.removeItem(SessionKeys)
}

export async function loginUser({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!normalizedEmail || !trimmedPassword) {
        error("Debes ingresar correo y contraseña.");
        throw new Error("Debes ingresar correo y contraseña.");
    }

    const user = await getUserByEmail(normalizedEmail);

    if (!user) {
        error("No existe un usuario con este correo.");
        throw new Error("No existe un usuario con este correo.");
    }

    const isValidPassword = await bcrypt.compare(
        trimmedPassword,
        user.password
    );

    if (!isValidPassword) {
        error("Contraseña incorrecta.");
        throw new Error("Contraseña incorrecta.");
    }

    return user;
}