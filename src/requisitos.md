### 1. Subir archivo de texto o permitir la entrada de texto a través de input ✅
- Entrada: Texto plano o texto leido de un archivo
- Salida: Texto
### 2. Normalizar texto
1. Convertir texto a minusculas
2. Eliminar puntuación y números
- Entrada: Texto
- Salida: texto normalizado
### 3. Conteo de palabras
1. Contar la frecuencia de cada palabra en el texto
- Entrada: texto normalizado
- Salida: Diccionario (objeto o JSON) con palabra (key) y su frecuencia (value) en int
#### 4. Filtro de palabras comunes
1. Eliminar palabras comunes (cargar array con palabras comunes de una libreria) del conteo
- Entrada: diccionario con palabras y sus frecuencias
- Salida: diccionario con palabras y sus frecuencias, pero si las palabras comunes (stop words)
#### 5. Generar reporte
1. Ordenar las palabras con sus frecuencias (de mayor a menor)
- Entrada: Diccionario con palabras y frecuencias
- Salida: Texto con reporte (listado de palabras ordenadas) donde se vea las frecuencias de
cada palabra.


