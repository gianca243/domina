# Ejecución

la idea de ejecución de esta implementacion se va a necesitar de dos terminales

en la primera terminal levantaremos la BD de mongo y dos contenedore/servicios que administran servidores con express
cada contenedor tiene su propia responsabilidad lo que quiere decir que hay servicios destinados solo al manejo de usuarios y otro solo destinado al manejo de tareas

## Inicio

en la carpeta raiz debe ejecutar

### docker compose up

esto subira una base de datos en el puerto 27017, los servicios de usuarios en 3002 y las tareas en el 3001

seguido a esto debera ir a la carpeta frontend/app desde otra terminal y ejecutar lo siguiente

### npm i

### npm start

lo que hara que la aplicación se inicie en el localhost:3000 y podra ver los resultados de la implementación

cualquier inquietud comunicarse con gianca243@gmail.com
