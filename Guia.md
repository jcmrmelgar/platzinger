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

## Componentes anidados: 
### Creando un componente con nuestras rutas de navegación que funcione como menú

Angular permite anidar componentes o colocarlos como hermanos, al mismo nivel.

Esto significa que si tenemos código de HTML que puede ser extraído hacia un nuevo componente para ser reutilizado de manera más óptima en nuestro código, podemos hacerlo usando el mismo procedimiento con el que creamos los componentes de cada pantalla de nuestra app, e incluirlos luego como parte del contenido de dichas pantallas, o en el `app.component.html`, fuera de la directiva de enrutamiento, para que sea accesible en todas las páginas, como es el caso del menú de navegación.

se crea el componente y se agrega

`ng generate component menu`

```javascript
<app-menu></app-menu>
<router-outlet></router-outlet>
```

## ¿Cómo usar tipos de datos con TypeScript?

TypeScript debe su nombre a los tipos de datos (types en inglés). JavaScript no es un lenguaje de programación tipado, por lo que es requerida en su sintaxis la definición de un tipo de dato al momento de instanciar las clases o variables en general. El uso de tipos explícitos en la programación permite a fin de cuentas un mejor aprovechamiento del recurso de memoria, entre muchos otros beneficios.

Los tipos básicos (built-in y definidos por el usuario) admitidos por TypeScript son: Boolean, Number, String, Array, Tuple, Enum, Void, Null y Undefined, y el tipo que es la base de todos los anteriores: Any, que básicamente representa cualquier cosa.

Los tipos de datos avanzados de Type
Script incluyen: Function, Object, Interface, Guard, Union, entre otros.

## Qué son las interfaces de TypeScript y su implementación

Los tipos de datos Interfaces de TypScript, son muy parecidos a una clase, en la que se definen propiedades internas que pueden ser de cualquiera de los otros tipos. Estas propiedades internas pueden definirse como obligatorias u opcionales usando el símbolo “”?"". Las interfaces definen en cierto modo estructuras personalizadas de datos en las que lo principal es que al ser implementadas usando ciertas IDEs (como Webstorm), muestran mensajes de control y validación para asegurar el uso adecuado de dicha interface, en tiempo real durante el desarrollo.

La forma de declarar una interface se puede ver en el siguiente ejemplo:

```javascript
export interface User {
  nick: string,
  subnick?: string,
  age?: number,
  email: string,
  friend: boolean,
  uid: any
}
```

## NgFor aplicado en la lista de usuarios

NgFor es una directiva estructural que afecta (agrega, modifica o elimina) un elemento HTML. Las directivas estructurales las identificamos porque llevan un * antes de la directiva, por ejemplo: `*ngFor`

NgFor nos permite recorrer un arreglo de datos y por cada elemento generar o imprimir en el DOM un elemento HTML nuevo, con algún valor cambiado basado en el elemento leído del arreglo.

## NgIf aplicado en la lista de usuarios

NgIF es una directiva estructural de Angular que evalúa un valor o una expresión buleana, en función de la cual se mostrará o no, un elemento HTML. El elemento se mostrará sólo cuando la condición sea verdadera (true).

## Navegación con parámetros

Al navegar entre pantallas, hay ocasiones en las que es necesario pasar datos particulares. Usando routerLink podemos incluir parámetros de manera similar a como lo hacemos con subdominios o subdirectorios. Para recibir e interpretar estos parámetros correctamente es necesario definir las rutas específicas en appRoutes y consultarlos luego en el componente con el objeto ActivatedRoute.


## Creando un servicio de usuarios e Inyectando el servicio en nuestros componentes

Un servicio es una clase que puede ser inyectada en uno o varios componentes y que es muy útil para compartir datos o funciones entre éstos, evitando la duplicidad de código.

Se crean a través del Angular CLI con el siguiente comando:

```javascript
ng generate service <directorio>/<nombre del servicio>
```

Al ejecutar este comando se generan en nuestro proyecto los siguientes archivos:

```javascript
/<directorio>
  <nombre del servicio>.service.spec.ts
  <nombre del servicio>.service.ts
```

Luego en el componente, inyectamos el Servicio de manera similar a cómo inyectamos el ActivatedRoute.

## Pipes en Angular (date, number, json)

Los pipes en angular, son elementos que se pueden incluir en el HTML y nos permiten aplicar transformaciones a los datos antes de mostrarlos.

Algunos de los pipes más usados son:

-json
-number: `‘<formato-decimal>’`
-date: `‘<formato de fecha>’`

Puedes consultar más formatos en la documentación oficial de Angular - [Pipes](https://angular.io/guide/pipes/).

## Creando nuestro propio pipe para buscar entre nuestros contactos

Para crear un pipe personalizado debemos crear un archivo de TypeScript e importar las clases Pipe y PipeTransform desde @angular/core.

```javascript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'nombre-del-pipe' // --- este es el nombre con que se implementa en el html
})
export class MiCustomPipe implements PipeTransform {
  public transform ( value, args: string ) {
     return <valor transformado>
  }
}
```

## ¿Cómo usar estilos CSS y referenciar recursos?

Para ir definiendo los estilos CSS que vas a aplicar en tu componente, puedes ir probando primero en el inspector del navegador e ir viendo los resultados en tiempo real, y cuando ya tengas todos los estilos definidos, puedes cortarlos y pegarlos en los archvos CSS del proyecto.

## Instalando librerías usando npm (bootstrap y font-awesome) y Referenciando CSS en el angular.json

Se recomienda instalar los paquetes con versiones exactas para evitar incompatibilidades con versiones futuras de las librerías.

`npm install bootstrap --save-exact`
`npm install @fortawesome/fontawesome-free --save-exact`

Luego de instalados los paquetes con npm, la implementación se hace importando las librerías en la sección styles del archivo angular.json

```javascript
...
  ""styles"": [
    ""node_modules/bootstrap/dist/css/bootstrap.css"",
    ""node_modules/@fortawesome/fontawesome-free/css/all.css"",
    ""src/styles.css""
  ]
...
```

## Usando ngClass para añadir estilos dinámicos

NgClass es una directiva que te permite aplicar una u otra clase a un elemento de html, dependiendo de una condición o expresión buleana.
La forma de implementar NgClass es la siguiente:

```javascript
 <div [ngClass] = ""{ '<nombre-de-la-clase': <expresión buleana> }"">
    <!-- -->
  </div>
  ```

La clase indicada se aplicará al elemento cuando la expresión buleana sea verdadera.
