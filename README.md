# Buscador FrontEnd

## Requisitos 
- Sistema Operativa Ubuntu
- npm
- node
- apache2
- La base de datos debe estar instalada y el BackEnd debe estar ejecutando

## Clonar buscador BackEnd
- git clone https://github.com/javieratorresm/vuejs.git

## Crear VirtualHost (Por restricción de seguridad de los navegadores)
- editar /etc/apache2/sites-available/000-default.conf
- agregar al final del documento
  * ProxyPass /rest/ http://localhost:8090/
  * ProxyPassReverse /rest/ http://localhost:8090/
  *	ProxyPass /front/ http://localhost:8080/
  *	ProxyPassReverse /restSpring/ http://localhost:8080/
- sudo service apache2 restart 
- sudo a2enmod proxy proxy_http

## Ejecutar FrontEnd
- cd vuejs
- sudo npm install
- npm run dev
- comprobar en http://localhost/front/

## Referencias
Para mayor referencias de como funciona el Front dirigirse a la wiki del proyecto:
http://github.com/javieratorresm/vuejs/wiki
