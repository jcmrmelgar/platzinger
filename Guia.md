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

`ng generate component`

Una vez ejecutado el comando, veremos que se ha creado una nueva carpeta en /app, con el nombre del componente /mi-componente y los siguientes archivos:

`/app`

 `/mi-componente`

 `mi-componente.css`

 `mi-componente.html`

 `mi-componente.spec.ts`

 `mi-componente.ts`

Otra de las cosas que hace Angular CLI por nosotros es importar los componentes que vayamos generando y los agrega a la propiedad declarations en `app.modules.ts`

Para indicar a Angular cuál será el componente inicial de la aplicación, debemos indicar el nombre de dicho componente en la propiedad selector del archivo `app.component.ts`

El selector, es la directiva usada en el `index.html` para insertar todo el contenido de nuestro componente.

## Ruteo

Para implementar ruteo, que es la capacidad de navegar entre componentes (vistas) en Angular, es necesario importar Routes desde @angular/router en el componente base de nuestra app:

`import { Routes } from '@angular/router';`

Luego se deben declarar todas las rutas que vamos a usar en una constante de tipo *Routes:*

```javascript
...
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];
...
```

Se incluyen todas las rutas definidas como elementos de un arreglo de objetos json de JS.
La propiedad path va a comparar el segmento coincidente en la url, mientras que component indica hacia cuál componente se va a navegar.

Para hacer funcionar las rutas en nuestra app, se debe importar el módulo RouterModule en la sección imports del app.component.ts ya que éste no se importa de manera automática.

Finalmente para implementar la navegación en nuestra app, es necesario indicar en el contenido de app.component.html una directiva `<router-outlet></router-outlet>` que se utilizará para inyectar eventualmente los componentes de toda la navegación que hemos definido. Todo lo que se coloque en el html, fuera de esta directiva, quedará fijado como contenido común en todas las vistas de nuestra navegación.

Es importante tener en cuenta que al usar enlaces o anclas `( <a> ... </a> )` de html, tendremos que sustituir el atributo href por routerLink, que es parte de RouterModule, para evitar la recarga completa de la página y la latencia, ya que esto iría en contra del concepto fundamental de lo que es una SPA (single page app).

