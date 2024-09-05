# 🌌 SWAPI Data Fetcher

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Backend para la obtención de datos de la [SWAPI](https://swapi.dev/) (Star Wars API) usando Node.js, Express y TypeScript. Este proyecto incluye un cron job que extrae datos de la API de manera regular.

## 📝 Descripción

Este proyecto implementa un cron job que se encarga de consultar la [SWAPI](https://swapi.dev/) para extraer información sobre personajes, planetas, naves espaciales y más. Está desarrollado con [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) y [TypeScript](https://www.typescriptlang.org/), y utiliza la biblioteca `node-cron` para la programación de tareas.

## 🔧 Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/mavillabasa-dev/swapi_api.git
    cd swapi_api
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

3. **Configura las variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (puedes definir otras variables si es necesario):

    ```env
    PORT=5000
    ```

4. **Compila el proyecto** (si es necesario):

    ```bash
    npm run build
    ```

5. **Ejecuta la aplicación**:

    ```bash
    npm start
    ```

    La aplicación debería estar corriendo en [http://localhost:5000](http://localhost:5000).

## 📁 Estructura del Proyecto

- **`/src`**: Código fuente del proyecto.
  - **`/controllers`**: Controladores para manejar la lógica de negocio.
  - **`/services`**: Servicios que interactúan con la API de SWAPI.
  - **`/cron`**: Configuración y ejecución del cron job.
  - **`/routes`**: Rutas de la aplicación Express.
  - **`index.ts`**: Punto de entrada de la aplicación.
- **`/config`**: Configuración de la aplicación.
- **`/types`**: Definiciones de tipos TypeScript.
- **`/scripts`**: Scripts de utilidad, como el cron job.

