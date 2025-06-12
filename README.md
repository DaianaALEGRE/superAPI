# API Supermercado #

 Información Importante:
Propietaria: Diana Alegre- Brenda Morinigo

cURL: http://localhost:3000

 Descripción General:
API REST para manejar productos de un supermercado desde la base de datos MongoDB. 
#### ⚙ Funciones Principales: ####
- Crear
- Leer
- Actualizar 
- Eliminar
  
 Incluye un frontend sencillo para interactuar con la API.

---
### 📦 Estructuras de Datos: ###

 > {
  "codigo": 1234,
  "nombre": "Arroz",
  "precio": 5.99,
 "categoria": "Comestible"
}
***    
Endpoints:
---
~~~
 GET /productos

Obtiene todos los productos.
Ejemplo con cURL:

cURL http://localhost:3000/productos
~~~
~~~
GET /productos/:id
Obtiene un producto por su ID.
Ejemplo:

cURL http://localhost:3000/productos/6844e043488d5d32e6ed6347
~~~
~~~
POST /productos
Crea un nuevo producto.
Ejemplo:

cURL: ⚙POST    http://localhost:3000/productos \
  -H "Content-Type: application/json" \
  -d '{"codigo": 1010, "nombre": "Queso", "precio": 3.99, "categoria": "Lácteos"}'
~~~
 ~~~ 
PUT /productos/:id
Actualiza un producto por ID.
Ejemplo:

cURL: ⚙PUT    http://localhost:3000/productos/6844e043488d5d32e6ed6347 \
  -H "Content-Type: application/json" \
  -d '{"precio": 4.50}'
~~~

~~~
DELETE /productos/:id
Elimina un producto por ID.
Ejemplo:

cURL ⚙DELETE  http://localhost:3000/productos/642f1c5c8a1234567890abcd
~~~
***
 Manejo de errores

Si el producto no existe, la API responde con código 404 y un mensaje de error.
Para errores del servidor, se devuelve código 500.
Para datos inválidos, se devuelve código 400.
Diagrama de flujo
***

```mermaid
graph TD
    Client([Client])

    GET_ALL[GET /productos]
    GET_ID[GET /productos/:id]
    POST[POST /productos]
    PUT[PUT /productos/:id]
    DELETE[DELETE /productos/:id]

    ANALYSIS{{Data analysis}}
    ERROR[Return error]
    CONTINUE[Continue]
    CONNECT[Conect to mongodb]
    DB[(MongoDB)]

    Client --> GET_ALL
    Client --> GET_ID
    Client --> POST
    Client --> PUT
    Client --> DELETE

    GET_ALL --> ANALYSIS
    GET_ID --> ANALYSIS
    POST --> ANALYSIS
    PUT --> ANALYSIS
    DELETE --> ANALYSIS

    ANALYSIS -- Error --> ERROR
    ANALYSIS -- Valid --> CONTINUE
    CONTINUE --> CONNECT
    CONNECT --> DB
    ```
