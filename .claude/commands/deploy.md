# /deploy — Build y despliegue a AWS Amplify

Flujo completo: rama de feature → PR → CI pasa → merge a master → Amplify despliega.

## Pasos

1. **Verifica el estado del código**
   - Corre `git status` y `git diff` para revisar los cambios

2. **Valida el build localmente antes de subir**
   - Corre `make build` (`CI=false npm run build`)
   - Si falla, corrige el error antes de continuar — no subas código roto

3. **Trabaja en una rama de feature**
   - Si estás en `master`, crea una rama: `git checkout -b feat/<nombre-corto>`
   - Ejemplos: `feat/skills-section`, `feat/translate-to-english`, `fix/contact-email`

4. **Commit de los cambios**
   - Stagea solo los archivos relevantes
   - Formato del mensaje: `feat: <descripción concisa>` / `fix: <descripción>`

5. **Push de la rama y apertura de PR**
   - `git push origin <nombre-rama>`
   - Informa al usuario que abra un Pull Request en GitHub hacia `master`
   - GitHub Actions correrá automáticamente lint + build (workflow `ci.yml`)

6. **Merge a master**
   - Una vez que el CI pasa (check verde en el PR), se puede mergear a `master`
   - AWS Amplify detecta el merge y despliega automáticamente

## Resultado esperado
Confirma la rama creada, los archivos commiteados y el hash del commit. Recuerda al usuario revisar el check de CI en GitHub antes de mergear.
