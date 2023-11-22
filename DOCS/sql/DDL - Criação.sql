create database BancoFeedBack;

use BancoFeedBack;

Create table feedBack (
nome varchar (40) not null,
nota int not null,
compl varchar(200),
codFeed int auto_increment primary key
);

select * from feedBack;

-- drop database BancoFeedBack;