⚠️ Notas
El backend y el frontend deben ejecutarse por separado.

Asegúrate de que los puertos estén bien configurados para evitar conflictos (5173 para el front, 3000 para el back).

==================================================================================

Una aplicación de gestión de tareas desarrollada con React + TypeScript, 
utilizando principios de arquitectura limpia, 
componentes reutilizables, 
soporte para modo claro/oscuro, 
y pruebas unitarias con Vitest.

==================================================================================

Características

✅ Crear, editar, eliminar y completar tareas

✅ Filtros por categoría, prioridad y estado

✅ Modal reutilizable para formularios

✅ Componentes accesibles y estilizados con CSS Modules

✅ Context API para manejo global de estado

✅ Modo claro y oscuro mediante className="dark"

✅ Pruebas unitarias con Vitest y Testing Library

✅ Arquitectura escalable basada en domain, application, infrastructure, interfaces

==================================================================================

Estructura del proyecto Front

src/

├── application/        # Casos de uso

├── components/         # Componentes reutilizables (Botones, Modales, Inputs)

├── domain/             # Entidades, enums y contratos

├── infrastructure/     # Servicios como acceso a API

├── interfaces/         # Vistas y smart components

├── context/            # TaskContext con lógica global

├── styles/             # Variables de tema y estilos globales

├── App.tsx             # Punto de entrada principal

==================================================================================

Estructura del proyecto Front

├── src/

│   ├── controllers/        # Controladores de rutas (ej. TaskController)

│   ├── models/             # Modelos de Mongoose

│   ├── routes/             # Definición de endpoints

│   ├── services/           # Lógica de negocio

│   ├── index.ts            # Configuración principal del servidor

├── .env

├── package.json

└── tsconfig.json

==================================================================================

🌙 Modo oscuro / claro
Puedes alternar entre modo claro y oscuro con un toggle visual que agrega o remueve la clase dark en el elemento <html>.
