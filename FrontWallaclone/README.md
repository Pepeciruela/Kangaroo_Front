# FrontWallaclone

Este es el proyecto final del equipo madCoders en el Full Stack Web Bootcamp 11 de keepcoding. Se puede acceder a los requisitos básicos de la plataforma [pulsando aquí.](./documentation/specifications_wallaclone.pdf)

# BackWallaclone

https://github.com/Parod88/BackWallaclone.git

### Los miembros del equipo:

- Ángel Calvo Monzón: [calvo.monzon.angel@gmail.com](mailto:calvo.monzon.angel@gmail.com)
- Misael Ojeda Duarte: [msl.snzn@gmail.com](mailto:msl.snzn@gmail.com)
- Pablo Pérez Sineiro: [pablopsdigital@gmail.com](mailto:pablopsdigital@gmail.com)
- Pablo Rodríguez Gómez: [pabrodgom@gmail.com](mailto:pabrodgom@gmail.com)

# Iniciar el proyecto

El proyecto fue generado con [Create React App](https://github.com/facebook/create-react-app).

## Servidor

La aplicación con el servidor y la base de datos se encuentra en el respositorio:
[https://github.com/Parod88/BackWallaclone](https://github.com/Parod88/BackWallaclone)

## Docker compose

En el directorio del proyecto se encuentra el fichero docker-compose.yml que permite levantar los contenedores necesarios para la ejecución del proyecto.
Tal sólo es necesario ejecutar el comando:

```bash
docker-compose up
```

Una vez ejecutado se levantará el proyecto y se podrá ver en el navegador abriendo abre [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

### `start`

En el directorio del proyecto, puedes ejecutar:

```bash
npm start
```

Puedes ejecutar la aplicación en modo desarrollo, abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios en el código.

### `testing`

Para ejecutar las pruebas del proyecto se deberá ejecutar el comando.

```bash
npm run testing
```

### `build`

Para construir la aplicación para producción creando la carpeta `build` .\

```bash
npm run build
```
