# Worklog: Add slug IDs to subpage sections

## Task
Add `id` attributes to all `<section>` elements across 4 subpage files that didn't already have an id. Derived kebab-case slugs from heading text.

## Files Modified

### 1. DefensaPage.tsx (4 IDs added, 1 pre-existing skipped)
| Line | ID | Derived from |
|------|----|-------------|
| 109 | `hero` | subpage-hero class |
| 167 | `elige-tu-situacion` | H2 "Elige tu situación" |
| 232 | `por-que-confiar-en-nosotros` | H2 "¿Por qué confiar en nosotros?" |
| 264 | *(skipped — already had `asesoria-inversionista`)* | — |
| 314 | `contacto` | CTA gradient section |

### 2. ConstitucionPage.tsx (6 IDs added)
| Line | ID | Derived from |
|------|----|-------------|
| 88 | `hero` | subpage-hero class |
| 135 | `requisitos` | H3 "Requisitos para Constituir tu Empresa" |
| 192 | `paquetes-precios` | Label "Paquetes y Precios" |
| 261 | `proceso` | Label "Proceso" |
| 292 | `preguntas-frecuentes` | Label "Preguntas Frecuentes" |
| 325 | `contacto` | CTA gradient section |

### 3. ContabilidadPage.tsx (5 IDs added, 1 pre-existing skipped)
| Line | ID | Derived from |
|------|----|-------------|
| 64 | `hero` | subpage-hero class |
| 116 | `servicios-incluidos` | Label "Servicios Incluidos" |
| 150 | `estadisticas-beneficios` | Stats + "Beneficios de tercerizar" |
| 215 | `servicios-complementarios` | Label "Servicios Complementarios" |
| 247 | *(skipped — already had `planillas-laboral`)* | — |
| 297 | `contacto` | CTA gradient section |

### 4. NosotrosPage.tsx (4 IDs added)
| Line | ID | Derived from |
|------|----|-------------|
| 76 | `hero` | subpage-hero class |
| 128 | `mision-vision` | Label "Quiénes Somos" (Misión & Visión) |
| 188 | `credenciales` | H3 "¿En qué nos respaldamos?" |
| 227 | `contacto` | Label "Contacto" |

## Summary
- **Total sections across all files:** 21
- **IDs added:** 19
- **IDs already present (skipped):** 2 (`asesoria-inversionista`, `planillas-laboral`)
- **No other code was modified** — only `id="..."` attributes added to `<section>` tags
- **Convention used:** kebab-case Spanish slugs derived from headings; `hero` for subpage-hero sections; `contacto` for CTA/contact sections
