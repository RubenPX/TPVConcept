## Proyecto FastTPV

<div align="center">Concepto de TPV (Caja registradora) (Ejercicio)</div>
<div align="center"><a href="https://gitmoji.dev"> <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji"> </a></div>

## Requisitos

1. Tener NodeJS instalado en el sistema: https://nodejs.org/en/download/
2. Tener pnpm instalado en el sistema: `corepack enable pnpm`
3. Instalar las dependencias: `pnpm install`

## Inicio de proyecto en modo desarollo

- Backend: `pnpm run dev:backend` (Puerto 3000)
- Svelte: `pnpm run dev:full-svelte`

## Estructura de carpetas

Este proyecto esta construido con el concepto de mono-repositorio

- `.vscode`: Configuración personalizada de [visual code](https://code.visualstudio.com)
- `backend`: RestAPI para el frontend (Creado con [NestJS](https://docs.nestjs.com))
- `forntend`: Carpeta donde se alojara los diferentes proyectos de frontend
    - `svelte`: Frontend creado con el framework [Svelte](https://svelte.dev/docs/) + [SvelteKit](https://kit.svelte.dev/docs/)
    - `react`: Frontend creado con el framework [React](https://es.react.dev/reference/react)

## Motivo

Esto es un proyecto que sirve mas para plantear un ejercicio

## Ejercicio

La idea es sentilla, crear programa de TPV (Caja registradora)
 
```ts
interface Trabajador {
  id: number
  nombre: string
  apellido: string
}

interface Producto {
  id: number
  nombre: string
  categoria: string
  precio: number
}

interface factura {
  id: number
  fecha: Date
  productosVendidos: Producto[]
  vendedor: Trabajador
}
```

Lo que se podría usar como base de datos, puede ser algo con sqlite o incluso archivos planos
 
El ejercicio es:
- Login
- CRUD de trabajadores
- CRUD de productos
- CRUD de facturas

Para evitar complicaciones saltarnos aspectos de seguridad, tales como roles "Admin", "manager", etc... y ir directo al grano enfocado unicamente a la funcionalidad del proyecto
