# Platzinger Resumen

Resumen de la creacion del proyecto desde cero

## Instalacion

Angular `npm intall -g @angular/cli`

Proyecto nuevo `ng new platzinger`

Levantar Servidor  `ng serve --open`

### PROYECTO
>¿Qué hará nuestra app? ¿Cuál es su arquitectura? ¿De qué pantallas se compondrá? ¿Cuál será su look?
Características que tendrá nuestra app:

>En el frontend (Angular):

```javascript
Pantalla Home / Dashboard
Lista de Amigos del usuario
Buscador de amigos
Botón de agregar amigos
Pantalla de conversación
Mandar mensajes, fotos, zumbidos
Mostrar los usuarios que chatean
Pantalla de Perfil
En el backend (Firebase):
Servidor centralizado
Acceso a datos
Envío de mensajes de manera bidireccional
Comunicación en tiempo real
Uso de sockets
```


## Componentes (vistas)

Un componente en Angular está compuesto mínimamente por un archivo html y un archivo de Typescript, siendo el .html la vista y el .ts la lógica que ésta tiene asociada. Un componente podemos verlo como cada una de las vistas de nuestra app.

Generalmente, para cada componente se usa sólo un archivo css con los estilos del componente, aunque la propiedad styleUrls permite varios css.

Para generar un componente usando el Angular CLI, ejecutamos el comando siguiente:

` ng generate component`

Una vez ejecutado el comando, veremos que se ha creado una nueva carpeta en /app, con el nombre del componente /mi-componente y los siguientes archivos:

`/app `

 ` /mi-componente`

 `   mi-componente.css`

 `   mi-componente.html`

 `   mi-componente.spec.ts`
 
 `   mi-componente.ts`

Otra de las cosas que hace Angular CLI por nosotros es importar los componentes que vayamos generando y los agrega a la propiedad declarations en `app.modules.ts`

Para indicar a Angular cuál será el componente inicial de la aplicación, debemos indicar el nombre de dicho componente en la propiedad selector del archivo `app.component.ts`

El selector, es la directiva usada en el `index.html` para insertar todo el contenido de nuestro componente.
