# Fratello Repuestos — app

App web de Fratello Repuestos (Córdoba): el cliente cuenta el síntoma, elige un taller de la especialidad, el taller propone turno, diagnostica y pide los repuestos, el mostrador cotiza por chat y el cliente elige y paga.

- Front: un solo `index.html` (sin build), publicado con GitHub Pages.
- Backend: Supabase (Postgres con RLS, Auth, Storage, Realtime) en São Paulo.
- La clave que figura en el código es la pública (`anon`): la seguridad la hacen las reglas de la base.

Vistas: Web cliente, App cliente, Mecánico y Panel Fratello. Cada una tiene su propia sesión.
