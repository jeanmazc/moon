# moon
Moon is a project to study Angular 4 + MVC 5

To configure this solution follow the steps below.

1º NODE JS
Atualizar a versão do Node JS acima da 4, eu estou utilizando a ultima v7.10.0
https://nodejs.org/en/

2º TYPESCRIPT
Atualizar a versão do TypeScript  for Visual Studio versão 2.3
https://www.microsoft.com/en-us/download/details.aspx?id=48593

3º ANGULAR CLI
Com a versão do Node JS atualizado instalar o angular CLI através do prompt de comando:
npm install –g @angular/cli

Comandos para verificar versão do node e do angular cli instalados:
Npm –v
Ng –v

Comando para criar e subir um projeto via angular cli 
Cd “diretorio-teste”
ng new my-app-test
ng serve

Podemos criar os arquivos de components, modulos, rotas com templates mais facilmente através de comandos.
Exemplo: Component
Cd “diretorio-teste/component”
Ng g c “my-component”

Ng (angular cli)
G (generate)
C (Component)

Referencias:
https://cli.angular.io/

4º VISUAL STUDIO
No Visual Studio Tools  => Options

Deve seguir exatamente a sequencia em ordem conforme imagem abaixo, configuração devido ao node (npm).
Reinicie o Visual Studio
