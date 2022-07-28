drop database mecanico;
create database mecanico;
use mecanico;
 create table if not exists automovil (
idautomovil int not null,
placa varchar (200),
tipo enum('camioneta','automovil') not null,
empleado_id_empleado int not null,
primary key (idautomovil),
constraint fkautomovil_empleado
foreign key (empleado_id_empleado)
references empleado(id_empleado)
);

drop table automovil;

-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
create table if not exists cliente (
idcliente int not null,
nombre varchar(100),
apellido varchar (100),
automovil_idautomovil int not null,
primary key (idcliente),
constraint fkcliente_automovil
foreign key (automovil_idautomovil)
references automovil(idautomovil)
);


-- -----------------------------------------------------
-- Table `mydb`.`refacciones`
-- -----------------------------------------------------
create table  if not exists refacciones (
idrefacciones int not null,
nombre varchar (100) not null,
cantidad int not null,
primary key(idrefacciones)
);


-- -----------------------------------------------------
-- Table `mydb`.`reparaciones`
-- -----------------------------------------------------
create table if not exists reparaciones ( 
id_reparacion int not null,
automovil_idautomovil int not null,
refacciones_idrefacciones int not null,
primary key (id_reparacion),
constraint fkrepaciones_automovil
foreign key (automovil_idautomovil)
references automovil (idautomovil),
constraint fkreparaciones_refacciones
foreign key (refacciones_idrefacciones)
references refacciones (idrefacciones)
);

create table if not exists administrador (
id_admi int not null,
nombre varchar(11) not null,
passwords varchar(11) not null,
primary key (id_admi)
);

create table if not exists empleado (
id_empleado int not null ,
nombre varchar(11) not null,
administrador_id_admi int not null,
primary key (id_empleado),
constraint fkempleado_administrador
foreign key (administrador_id_admi)
references administrador (id_admi)
);

create table if not exists ventaMensual(
mes varchar (25) not null,
cantidadVendida int  not null,
primary key (mes)
);
use mecanico;
select automovil.idautomovil, automovil.placa ,cliente.nombre
from automovil
inner join cliente
on automovil.idautomovil = cliente.automovil_idautomovil;

select reparaciones.id_reparacion, automovil.placa
from reparaciones
inner join automovil
on automovil.idautomovil = reparaciones.automovil_idautomovil;

select refacciones.idrefacciones, reparaciones.id_reparacion
from refacciones
inner join reparaciones	
on refacciones.idrefacciones = reparaciones.refacciones_idrefaccion;

select refacciones.idrefacciones, refacciones.nombreRefa, refacciones.Precio, cliente.idcliente ,cliente.nombreCliente
from refacciones
inner join cliente
on  refacciones.idrefacciones = cliente.idcliente;

select cliente.idcliente, cliente.nombreCliente, automovil.idautomovil, automovil.estado, automovil.placa
from cliente 
inner join automovil
on cliente.idcliente = automovil.idautomovil