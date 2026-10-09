Actividad_3.1
## 1. Problemas de búsqueda

Son situaciones en las que se necesita encontrar una serie de pasos para llegar desde un punto inicial hasta un objetivo.

Ejemplo: Encontrar la ruta para llegar de una ciudad a otra utilizando diferentes carreteras.

## 2. Espacios de estados

Es el conjunto de todos los estados o situaciones posibles que pueden presentarse durante la resolución de un problema.

Ejemplo: En un laberinto, cada posición a la que puede llegar una persona representa un estado.

## 3. Estado inicial

Es el punto de partida desde el cual comienza la búsqueda de una solución.

Ejemplo: En un videojuego, es la posición donde aparece el personaje al comenzar el nivel.

## 4. Acciones

Son los movimientos o decisiones que se pueden realizar para cambiar de un estado a otro.

Ejemplo: En un laberinto, las acciones pueden ser avanzar, retroceder, girar a la izquierda o a la derecha.

## 5. Modelo de transición

Es el conjunto de reglas que indica cómo cambia un estado cuando se realiza una acción.

Ejemplo: Si un robot se encuentra en la posición A y avanza una casilla, el modelo de transición determina su nueva posición.

## 6. Prueba de meta

Es el procedimiento que permite comprobar si se ha alcanzado el objetivo del problema.

Ejemplo: En un laberinto, verificar si el personaje llegó a la salida.

## 7. Costo del camino

Es el valor total que representa el esfuerzo, tiempo, distancia o recursos necesarios para llegar a una solución.

Ejemplo: En una aplicación de mapas, el costo puede representar los kilómetros recorridos o el tiempo del viaje.

## 8. Solución

Es la secuencia de acciones que permite llegar desde el estado inicial hasta el estado objetivo.

Ejemplo: La lista de movimientos necesarios para salir de un laberinto.

## 9. Frontera

Es el conjunto de nodos que se han descubierto, pero que todavía no han sido explorados.

La frontera permite organizar los estados pendientes de revisar durante la búsqueda.

Ejemplo: En un mapa, son las ciudades identificadas como posibles destinos siguientes, pero que aún no se han explorado.

## 10. Nodo

Es una estructura que representa un estado dentro del proceso de búsqueda. Puede guardar información como el estado, el nodo padre, la acción realizada y el costo acumulado.

Ejemplo: En un árbol de búsqueda, cada nodo puede representar una ciudad y su conexión con otras ciudades.

## 11. Agente de resolución de problemas

Es un sistema de inteligencia artificial que identifica un objetivo, analiza las acciones disponibles y busca una secuencia de pasos para alcanzarlo.

Ejemplo: Un robot de limpieza que calcula cómo desplazarse por una habitación para limpiar todas las áreas.

## Sistemas de búsqueda ciega

Los sistemas de búsqueda ciega son métodos que exploran diferentes estados sin utilizar información adicional que indique qué tan cerca se encuentran del objetivo.

Se basan en las acciones disponibles, las reglas del problema y la comprobación de la meta.

## 12. Búsqueda no informada (ciega)

Es un tipo de búsqueda que no utiliza estimaciones sobre la distancia al objetivo. Explora los estados siguiendo un procedimiento establecido.

Ejemplo: Buscar una salida en un laberinto sin conocer previamente qué camino es el correcto.

## 13. Búsqueda en amplitud

Es un algoritmo que explora primero los nodos más cercanos al estado inicial. Revisa todos los nodos de un nivel antes de avanzar al siguiente.

Utiliza una cola para organizar los nodos pendientes.

Ventaja: Encuentra la solución con menor número de pasos cuando todas las acciones tienen el mismo costo.

Desventaja: Puede consumir mucha memoria.

## 14. Búsqueda en profundidad

Es un algoritmo que explora un camino hasta llegar lo más lejos posible. Cuando no puede continuar, retrocede para probar otras opciones.

Utiliza una pila o llamadas recursivas.

Ventaja: Generalmente requiere menos memoria que la búsqueda en amplitud.

Desventaja: Puede explorar caminos muy largos y no garantiza encontrar la solución más corta.

## 15. Búsqueda de costo uniforme

Es un algoritmo que siempre selecciona el nodo con el menor costo acumulado desde el estado inicial.

Su objetivo es encontrar una solución que tenga el menor costo total.

Ejemplo: Encontrar la ruta más económica entre varias ciudades, considerando el costo de cada carretera.

Ventaja: Encuentra la solución de menor costo cuando los costos de las acciones son positivos y están acotados inferiormente por un valor mayor que cero.

Desventaja: Puede necesitar mucho tiempo y memoria para explorar las diferentes opciones.

## 16. Cola

Es una estructura de datos que almacena elementos siguiendo el principio FIFO (First In, First Out), que significa que el primer elemento en entrar es el primero en salir.

Se utiliza principalmente en la búsqueda en amplitud.

Ejemplo: Una fila de personas esperando para comprar boletos. La primera persona que llega es la primera en ser atendida.

## 17. Pila

Es una estructura de datos que funciona siguiendo el principio LIFO (Last In, First Out), que significa que el último elemento en entrar es el primero en salir.

Se utiliza principalmente en la búsqueda en profundidad.

Ejemplo: Una pila de platos. El último plato que se coloca arriba es el primero que se retira.

## 18. Completitud

Es la propiedad de un algoritmo que indica si puede garantizar encontrar una solución cuando esta existe, bajo determinadas condiciones.

Ejemplo: La búsqueda en amplitud es completa cuando cada estado tiene un número finito de sucesores y existe una solución a profundidad finita.

## 19. Optimalidad

Es la capacidad de un algoritmo para encontrar la mejor solución posible según el costo establecido.

Un algoritmo óptimo no solamente encuentra una solución, sino que garantiza que ninguna otra tiene un costo menor.

Ejemplo: Si existen tres rutas de 10, 15 y 20 kilómetros, la solución óptima es la de 10 kilómetros.

## 20. Complejidad en tiempo

Es una medida de la cantidad de operaciones que necesita realizar un algoritmo conforme aumenta el tamaño del problema.

Permite analizar qué tan eficiente puede ser un algoritmo.

Ejemplo: Si un programa necesita revisar miles de caminos antes de encontrar una salida, su tiempo de ejecución puede aumentar considerablemente.

## 21. Complejidad en espacio

Es la cantidad de memoria que necesita un algoritmo para almacenar información mientras se ejecuta.

Ejemplo: La búsqueda en amplitud puede consumir mucha memoria porque debe guardar numerosos nodos pendientes de explorar.

## Tabla comparativa de los algoritmos

| Característica | Amplitud           | Profundidad        | Costo uniforme    |
| -------------- | ------------------ | ------------------ | ----------------- |
| Estructura     | Cola               | Pila               | Cola de prioridad |
| Exploración    | Por niveles        | Por caminos        | Menor costo       |
| Completitud    | Sí                 | No siempre         | Sí                |
| Optimalidad    | Con costos iguales | No                 | Sí                |
| Uso de memoria | Alto               | Generalmente menor | Alto              |
