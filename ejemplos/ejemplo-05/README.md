# Diseño Todo List API

## Requerimientos

- Listar items
- Crear items
- Modificar items (título y marcar items como completed o no)
- Eliminar items

## Listar items

```
GET /todos
```

### Response

```
Status code: 200
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
[
  {
    "id": 1,
    "title": "One todo item",
    "completed": false
  }
]
```

### Errors

#### Error de servidor

```
Status code: 500
```



## Crear item

```
POST /todos
```

### Request

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "title": "Another todo item"
}
```

### Response

```
Status code: 201
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
{
  "id": 2,
  "title": "Another todo item",
  "completed": false
}
```

### Errors

#### Error de validación

```
Status code: 422
```

```json
{
  "message": "Missing title"
}
```
