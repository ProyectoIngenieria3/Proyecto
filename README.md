# Sistema de Pago del Transporte Público

Trabajo Práctico Final - Ingeniería de Software 3  
Facultad de Ingeniería

## Objetivo

Desarrollar la interfaz de una **terminal de cobro para transporte público**, orientada a calidad, validación con usuarios y documentación formal de pruebas.

## Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Visual Studio Code (Live Server)  
- Git / GitHub  

## Estructura del proyecto

```
/main
  ├── index.html            # Pantalla principal de la terminal
  ├── style.css             # Estilos del sistema
  ├── script.js             # Lógica de navegación y validación

/documentacion
  ├── Documentación del Sistema de Pago de Transporte.docx
  ├── Relevamiento Técnico Funcional.docx
  ├── Documentación de Pruebas.pdf
  ├── Cronogramas - Seguimiento.xlsx
```

## Integrantes del equipo

| Nombre                     | Rol               | GitHub                                 |
|---------------------------|-------------------|----------------------------------------|
| Fraiz Pinto, Franco       | Project Manager    | [FFraiz](https://github.com/FFraiz)    |
| Herrero, Alejandro        | Desarrollador      | [HerreroAlejandro](https://github.com/HerreroAlejandro) |
| López, Alan               | Analista           | [AlanGL91](https://github.com/AlanGL91)|
| Paez, Evelyn Tatiana      | Documentadora      | [Evep7](https://github.com/Evep7)      |
| Gallo, Elías Emmanuel     | Tester             | [elias-gallo](https://github.com/elias-gallo) |

## Enlaces complementarios

- [Charter del proyecto](https://docs.google.com/document/d/18xsYqWKTOB3goMPmUV8r9PHNa04FtWqkaPLgAKxRUzI/edit?tab=t.0)  
- [WBS (Estructura de trabajo)](https://drive.google.com/file/d/1bbp48Ros1RCt0WY4gNzbn88Gl-0Nxu-q/view)  
- [Tablero de Trello (Link Invitación)](https://trello.com/invite/b/67eb28d242d67bf7c629025d/ATTI79e4087a06aee11280b5a33581c86e5590FB1357/ingenieria-de-software-3)  

## Documentación del proyecto

La carpeta `/documentacion` contiene los siguientes entregables:

- Relevamiento Técnico Funcional  
- Documentación del Sistema de Pago de Transporte  
- Documentación de Pruebas  
- Cronogramas, seguimiento, riesgos y complejidad 

## Cómo ejecutar el sistema

1. Clonar el repositorio:
```bash
git clone https://github.com/ProyectoIngenieria3
```

2. Abrir la carpeta `/main` en Visual Studio Code.  
3. Instalar la extensión **Live Server**.  
4. Ejecutar `index.html` desde Live Server para visualizar la terminal.

## Pruebas y validación

El sistema fue probado con casos de uso reales y validaciones manuales.  
Los resultados están documentados en:

- `documentacion/Documentación de Pruebas.pdf`

## Observaciones

- El sistema simula una terminal de cobro como las usadas en transporte público.  
- Se incluyeron métodos de pago por QR, tarjeta física, NFC y SUBE.  
- No incluye lógica de backend ni integración real con sistemas externos.
