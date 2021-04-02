npx sequelize-cli model:generate --name Persona --attributes nombreCompleto:string,numeroIdentidad:string,direccion:string,edad:integer,telefono:string

npx sequelize-cli model:generate --name Estudiante --attributes fechaRegistro:date,password:string,codigoSeguridad:string,nombreUsuario:string

npx sequelize-cli model:generate --name Correo --attributes email:string

npx sequelize-cli model:generate --name Maestro --attributes descripcion:string,password:string,codigoSeguridad:string,nombreUsuario:string

npx sequelize-cli model:generate --name Administrador --attributes descripcion:string,password:string,nombreUsuario:string

npx sequelize-cli model:generate --name Idioma --attributes nombre:string

npx sequelize-cli model:generate --name Seccion --attributes horaInicio:integer

npx sequelize-cli model:generate --name Factura --attributes fechaIngreso:date

npx sequelize-cli model:generate --name Matricula --attributes estadoCuenta:string

npx sequelize-cli model:generate --name MaestroIdioma --attributes descripcion:string

npx sequelize-cli model:generate --name Calificacion --attributes nota:float,estado:string

npx sequelize-cli model:generate --name Evento --attributes nombre:string

npx sequelize-cli model:generate --name Asignacion --attributes nombre:string

npx sequelize-cli model:generate --name Archivo --attributes nombre:string

npx sequelize-cli model:generate --name ArchivoIdioma --attributes fecha:date

npx sequelize-cli model:generate --name AsignacionIdioma --attributes hora:integer

npx sequelize-cli migration:generate --name relacion-persona-estudiante

npx sequelize-cli migration:generate --name relacion-persona-correo

npx sequelize-cli migration:generate --name relacion-persona-maestro

npx sequelize-cli migration:generate --name relacion-persona-Administrador

npx sequelize-cli migration:generate --name relacion-maestro-maestroIdioma

npx sequelize-cli migration:generate --name relacion-idioma-seccion

npx sequelize-cli migration:generate --name relacion-asignacionIdioma

npx sequelize-cli migration:generate --name relacion-archivoIdioma

npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo