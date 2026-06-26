# VOLTA-IMPULS

Proyecto Next.js + React + Tailwind con arquitectura simple (KISS).

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
src/
├── app/                  # Capa de presentación (rutas/páginas)
│   ├── layout.tsx        # Layout global
│   ├── page.tsx          # Página principal (/)
│   └── [tu-ruta]/        # Nueva página → /tu-ruta
│       └── page.tsx
├── components/
│   ├── layout/           # Header, Footer, shells
│   └── ui/               # Botones, inputs, etc.
├── core/                 # Dominio (sin dependencias de React/Next)
│   ├── constants/        # Constantes de la app
│   └── types/            # Tipos e interfaces compartidos
├── hooks/                # Custom hooks de React
├── lib/                  # Utilidades puras (cn, formatters, etc.)
└── services/             # Acceso a APIs y datos externos
```

## Cómo agregar una página

Crea un archivo en `src/app/nombre/page.tsx`:

```tsx
export default function NombrePage() {
  return <div>Mi nueva página</div>;
}
```

La ruta será `/nombre`.

## Flujo de dependencias (KISS)

```
app (páginas) → components → hooks → services → core
```

- **app/**: solo compone UI, sin lógica de negocio pesada
- **core/**: tipos y reglas de dominio, sin imports de React
- **services/**: llamadas HTTP y datos externos
- **components/**: UI reutilizable

## Scripts

| Comando       | Descripción          |
|---------------|----------------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |

## Carpeta `prototype/`

Prototipos aislados en la raíz del repo. No forman parte de Next.js: no hay rutas, no entra al build ni al lint/TypeScript del proyecto.

Abre `prototype/index.html` en el navegador o con Live Server.
