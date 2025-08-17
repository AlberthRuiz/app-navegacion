# TaskManager

Una aplicación móvil moderna para gestión de tareas construida con React Native y Expo. Organiza tu día de manera eficiente con una interfaz intuitiva y elegante.

![TaskManager](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)
![Expo](https://img.shields.io/badge/Expo-49+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)

## Características

- **Gestión de Tareas**: Crear, editar y marcar tareas como completadas
- **Filtros Inteligentes**: Visualizar todas las tareas, pendientes o completadas
- **Prioridades**: Asignar niveles de prioridad (Alta, Media, Baja) con colores distintivos
- **Navegación Fluida**: Stack navigation con transiciones suaves
- **Interfaz Moderna**: Diseño limpio y responsivo con componentes optimizados
- **Sin Parpadeos**: Optimización avanzada con React hooks para prevenir re-renders innecesarios

## Tecnologías Utilizadas

- **React Native** - Framework multiplataforma
- **Expo** - Herramientas de desarrollo y build
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **Expo Vector Icons** - Iconografía moderna
- **React Hooks** - Gestión de estado optimizada (useMemo, useCallback, React.memo)

## Pantallas

### Welcome Screen
- Pantalla de bienvenida con branding de la aplicación
- Botón de acceso principal

### Login Screen
- Formulario de inicio de sesión
- Validación de email y contraseña
- Enlace a registro

### Register Screen
- Formulario de registro de nuevos usuarios
- Campos de nombre, email y contraseña

### Home Screen
- Lista principal de tareas
- Filtros por estado (Todas, Pendientes, Completadas)
- Contador de tareas pendientes
- Botón flotante para agregar nuevas tareas

### Task Form Screen
- Formulario para crear/editar tareas
- Campos: título, descripción, fecha de vencimiento, prioridad
- Validación de formularios

## Instalación

### Prerrequisitos

- Node.js 16+ 
- npm o yarn
- Expo CLI
- Android Studio (para Android) o Xcode (para iOS)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd app-navegacion
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar el proyecto**
```bash
npx expo start
```

4. **Ejecutar en dispositivo**
- Escanea el código QR con Expo Go (Android/iOS)
- O presiona `a` para Android emulator
- O presiona `i` para iOS simulator

## Dependencias Principales

```json
{
  "@react-navigation/native": "^6.x",
  "@react-navigation/native-stack": "^6.x",
  "expo": "~49.0.0",
  "react": "18.2.0",
  "react-native": "0.72.6",
  "expo-vector-icons": "^13.0.0"
}
```

## Estructura del Proyecto

```
app-navegacion/
├── components/          # Componentes reutilizables
│   └── TaskItem.tsx    # Componente individual de tarea
├── screens/            # Pantallas de la aplicación
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── HomeScreen.tsx
│   └── TaskFormScreen.tsx
├── styles/             # Estilos centralizados
│   └── Styles.ts      # StyleSheet principal
├── types/              # Definiciones de TypeScript
│   └── task.ts        # Tipos para tareas
├── assets/             # Recursos estáticos
├── App.tsx            # Componente raíz
└── package.json
```

## Diseño y Estilos

La aplicación utiliza un sistema de diseño consistente con:

- **Colores primarios**: Turquesa (#20B2AA) para elementos principales
- **Tipografía**: Jerarquía clara con diferentes pesos y tamaños
- **Espaciado**: Sistema consistente de padding y margins
- **Sombras**: Efectos de elevación para cards y botones
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## Optimizaciones de Rendimiento

La aplicación incluye optimizaciones avanzadas para un rendimiento fluido:

- **useMemo**: Para cálculos costosos como filtrado de tareas
- **useCallback**: Para funciones estables que previenen re-renders
- **React.memo**: Para componentes que solo se actualizan cuando cambian sus props
- **Gestión de estado eficiente**: Evita actualizaciones innecesarias

## Scripts Disponibles

```bash
# Iniciar desarrollo
npm start

# Iniciar en Android
npm run android

# Iniciar en iOS
npm run ios

# Construir para producción
npm run build

# Linting
npm run lint
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

**Christiam Alberthm Mendoza Ruiz**

- Curso: Desarrollo Mobile con React Native
- Proyecto: Tarea 02 - Navegación

## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Notas de Desarrollo

- El proyecto utiliza TypeScript para mejor mantenibilidad
- Sigue las convenciones de React Native y Expo
- Incluye optimizaciones de rendimiento para evitar re-renders
- Diseño responsive y accesible

---

**¡Organiza tu día de manera eficiente con TaskManager!**
