CREATE TABLE or_ambu_treatments (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  date varchar(255) NOT NULL,
  note varchar(255) DEFAULT NULL,
  doctor varchar(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB;