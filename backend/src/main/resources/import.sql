INSERT INTO tb_user(name, email, phone, password) VALUES ('GUILHERME','GUILHERME@GMAIL.COM','6296930508','12345');
INSERT INTO tb_user(name, email, phone, password) VALUES ('ANA','ANA@GMAIL.COM','7193035506','12345');
INSERT INTO tb_user(name, email, phone, password) VALUES ('JOAO','JOAO@GMAIL.COM','6299654580','12345');
INSERT INTO tb_user(name, email, phone, password) VALUES ('JOSE','JOSE@GMAIL.COM','6291478693','12345');
INSERT INTO tb_user(name, email, phone, password) VALUES ('PAULO','PAULO@GMAIL.COM','4596325882','12345');


INSERT INTO tb_kind_of_service(name_of_service, price, img_url) VALUES ('CORTE CABELO', '30.0', 'https://user-images.githubusercontent.com/33436010/220815758-8536162a-e8e8-4ee0-865a-ac8ae04da042.png');
INSERT INTO tb_kind_of_service(name_of_service, price, img_url) VALUES ('CORTE BARBA', '30.0', 'https://github.com/gsilverio/barberSystem/blob/main/resources/images/corteBarba.png?raw=true');
INSERT INTO tb_kind_of_service(name_of_service, price, img_url) VALUES ('LIMPEZA DE PELE', '40.0', 'https://github.com/gsilverio/barberSystem/blob/main/resources/images/limpezaPele.png?raw=true');
INSERT INTO tb_kind_of_service(name_of_service, price, img_url) VALUES ('PINTAR CABELO', '120.0', 'https://github.com/gsilverio/barberSystem/blob/main/resources/images/colorirCabelo.png?raw=true');


INSERT INTO tb_order(date, status, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2020-07-14T10:50:07.12345Z', 1, 1);
INSERT INTO tb_order(date, status, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2020-07-15T10:50:07.12345Z', 2, 2);
INSERT INTO tb_order(date, status, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2020-07-16T10:50:07.12345Z', 1, 3);
INSERT INTO tb_order(date, status, user_id) VALUES (TIMESTAMP WITH TIME ZONE '2020-07-17T10:50:07.12345Z', 2, 4);

INSERT INTO tb_order_service(price, quantity, kind_of_service_id, order_id) VALUES (20,2,1,1);