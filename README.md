# Web de Nodo28

Página web estática (HTML + CSS + JS) para **Nodo28**:
- **Hardware y reparaciones presenciales:** Carrer de la Llanera, 28 (Sabadell)
- **Administración de sistemas y soporte:** En remoto para autónomos y pymes

## Qué debes personalizar antes de publicarla

1. **Número de WhatsApp**
   - Ya está configurado con `+34 637 663 537` (`34637663537`) en `script.js` e `index.html` (solo WhatsApp, sin llamadas).
2. **Correo electrónico**
   - Ya está configurado con `nodo28@proton.me`.
3. **Redes sociales**
   - En `index.html` (sección `#ubicacion`): añade las URLs reales de tu Instagram y LinkedIn.
4. **Horario y tarifas**
   - Ajusta los precios orientativos (`35 €`, `40 €/h`, `45 €`) y tu horario real en Sabadell.

## Cómo probarla en tu ordenador

Puedes abrir `index.html` directamente en el navegador o levantar un servidor local:

```bash
python3 -m http.server 8080
```

Y abrir `http://localhost:8080`.

## Cómo subirla gratis a internet

Al ser una web estática (sin servidor ni base de datos), puedes desplegar esta carpeta gratis en segundos usando:
- **Cloudflare Pages**
- **Netlify** (arrastrando la carpeta en Netlify Drop)
- **Vercel** o **GitHub Pages**
