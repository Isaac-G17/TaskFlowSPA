# 🚀 TaskFlowSPA

TaskFlowSPA es una aplicación web tipo SPA (Single Page Application) desarrollada con JavaScript Vanilla, HTML, Tailwind CSS y Vite. El proyecto simula un sistema moderno de gestión de tareas y productividad, implementando autenticación, autorización basada en roles, protección de rutas, renderizado dinámico de vistas y persistencia de datos mediante un backend simulado con JSON Server.

El objetivo principal del proyecto es demostrar cómo construir una SPA escalable sin depender de frameworks como React, Angular o Vue, aplicando buenas prácticas de arquitectura frontend y separación de responsabilidades.

---

## ✨ Características principales

- Autenticación de usuarios.
- Registro de nuevos usuarios.
- Inicio y cierre de sesión.
- Persistencia de sesión mediante LocalStorage.
- Contraseñas protegidas mediante hash con bcryptjs.
- Sistema de roles (`ADMIN` y `USER`).
- Protección de rutas.
- Navegación SPA utilizando History API.
- Dashboard con información relevante del usuario.
- CRUD completo de tareas.
- Gestión de perfil de usuario.
- Actualización de contraseña.
- Eliminación de cuenta propia.
- Panel administrativo para gestión de usuarios.
- Cambio de roles desde el panel de administración.
- Interfaz moderna construida con Tailwind CSS.
- Arquitectura modular y escalable.

---

## 🛠️ Tecnologías utilizadas

### Frontend

- JavaScript (ES Modules)
- HTML5
- Tailwind CSS
- Vite


### Persistencia y autenticación

- JSON Server
- LocalStorage
- bcryptjs

### Herramientas adicionales

- SweetAlert2
- History API

---

## 🏗️ Arquitectura del proyecto

El proyecto sigue una arquitectura modular por capas que facilita la mantenibilidad y escalabilidad del código.

### Capas principales

- **Views:** pantallas principales de la aplicación.
- **Components:** elementos reutilizables de interfaz.
- **Services:** acceso a datos y lógica de negocio.
- **Router:** navegación SPA.
- **Utils:** funciones auxiliares.
- **Styles:** estilos globales.

---

## 📁 Estructura del proyecto

```text
TASKFLOWSPA/
│
├── TaskFlowAPI/
│             ├── database.json
│             └── package.json
│
├── TaskFlowClient/
│             ├── public/
│             │     └───favicon.ico
│             │
│             ├── src/
│             │     ├───components/
│             │     │       ├───atoms/
│             │     │       │       └───buttonLink.js
│             │     │       └───organism/
│             │     │               └───appNav.js
│             │     │
│             │     ├───router/
│             │     │       ├───router.js
│             │     │       └───routes.js
│             │     │          
│             │     ├───services/
│             │     │       ├───auth.service.js
│             │     │       ├───task.service.js
│             │     │       └───user.service.js
│             │     ├───styles/
│             │     │       └───global.css      
│             │     ├───utils/
│             │     │       └───alerts.js          
│             │     ├───views/
│             │     │   ├───app/
│             │     │   │     └───dashboard.js               
│             │     │   ├───auth/
│             │     │   │       ├───login.js
│             │     │   │       └───register.js
│             │     │   ├───tasks/
│             │     │   │       ├───taskForm.js
│             │     │   │       └───task.js          
│             │     │   └───users/
│             │     │          ├───admin.js
│             │     │         └───profile.js                 
│             │     │
│             │     └── main.js
│             │
│             ├── index.hmtl
│             ├── license
│             ├── package-lock.json
│             ├── package.json
│             └── vite.config.ts
│
└── README.md


```

---

## 🔐 Sistema de autenticación

TaskFlowSPA implementa autenticación basada en sesión local.

### Flujo de autenticación

1. El usuario se registra.
2. La contraseña se transforma mediante hash usando bcryptjs.
3. El usuario inicia sesión con correo y contraseña.
4. La sesión se almacena en LocalStorage.
5. Al cerrar sesión, los datos son eliminados del almacenamiento local.

### Seguridad implementada

- Contraseñas almacenadas mediante hash.
- Validación de credenciales.
- Protección de rutas privadas.
- Control de acceso por roles.

---

## 👥 Roles del sistema

### ADMIN

- Visualizar todos los usuarios.
- Modificar roles de usuarios.
- Eliminar usuarios.
- Acceder al panel administrativo.
- Gestionar todas las tareas del sistema.

### USER

- Crear tareas.
- Editar sus propias tareas.
- Eliminar sus propias tareas.
- Gestionar su perfil.
- Actualizar contraseña.
- Eliminar su propia cuenta.

---

## 📋 Módulos implementados

### 🔑 Autenticación

- Login.
- Registro.
- Logout.

### 📊 Dashboard

- Información general del usuario.
- Estadísticas básicas.

### ✅ Gestión de tareas

- Crear tarea.
- Editar tarea.
- Eliminar tarea.
- Listar tareas.

### 👤 Perfil

- Actualizar nombre.
- Actualizar apellido.
- Actualizar correo.
- Actualizar contraseña.
- Eliminar cuenta.

### 🛡️ Administración

- Listar usuarios.
- Cambiar roles.
- Eliminar usuarios.

### 🚫 Página 404

- Manejo de rutas inexistentes.

---

## 🚀 Ejecución del proyecto

TaskFlowSPA está dividido en dos partes:

- **API:** Backend simulado con JSON Server.
- **Client:** Aplicación SPA desarrollada con Vite.

Ambos servicios deben ejecutarse simultáneamente.

### 1. Instalar dependencias

Instala las dependencias en cada proyecto:

#### API

```bash
cd taskFlowAPI
npm install
```

#### Cliente

```bash
cd taskFlowClient
npm install
```

---

### 2. Iniciar el backend (JSON Server)

Abre una terminal y ejecuta:

```bash
cd taskFlowAPI
npx json-server database.json
```

El servidor API estará disponible en:

```text
http://localhost:3000
```

---

### 3. Iniciar el frontend (Vite)

Abre una segunda terminal y ejecuta:

```bash
cd taskFlowClient
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

### 4. Acceder a la aplicación

Con ambos servicios ejecutándose, abre el navegador y visita:

```text
http://localhost:5173
```

La SPA consumirá los datos proporcionados por JSON Server desde:

```text
http://localhost:3000
```

---

## ⚠️ Consideraciones

Este proyecto utiliza JSON Server como backend simulado con fines educativos. Aunque se implementa hash de contraseñas mediante bcryptjs, la aplicación no está diseñada para entornos de producción y no sustituye un backend real con mecanismos avanzados de autenticación y seguridad.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia especificada en el archivo `LICENSE`.