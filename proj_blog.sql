-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: proj_blog
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'comentario 1','aqui eu vou comentar','lais.magalhaes13@gmail.com',1,'');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'Fulano','fulano.com','Oii fulanoo');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Teste1','Aqui é um teste','','2019-11-01 12:53:24'),(2,'TESTE2','teste 2 aqui','','2019-11-01 12:53:24'),(3,'Fulano','fulano diz ser boa pessoa','Adalberto','2019-11-01 12:54:53'),(4,'Era uma vez','Era uma vez uma casa amarela','Felipe','2019-11-04 11:49:01'),(5,'Alguma coisa','estou pensando isso ','Paulo','2019-11-04 14:52:25'),(6,'sss','sss','sss','2019-11-04 15:01:04'),(7,'Celular','um celula ','Lais','2019-11-04 15:13:21'),(8,'aaa','aaa','aaaa','2019-11-04 15:14:22'),(9,'a','a','a','2019-11-04 15:14:48'),(10,'ll','ll','ll','2019-11-04 15:15:04'),(11,'Olsls','jdiwj','Amanda','2019-11-04 16:41:17'),(12,'ere','ere','erer','2019-11-04 16:42:27'),(13,'ttt','ttt','tttt','2019-11-04 16:42:53'),(14,'ttt','ttt','tttt','2019-11-04 16:42:53'),(15,'uuu','uuuu','huhu','2019-11-04 16:43:23'),(16,'fff','ff','fffff','2019-11-04 16:44:08'),(17,'msm','sk','ksl','2019-11-04 16:45:45'),(18,'ggg','gg','ggg','2019-11-04 16:47:34'),(19,'Quadro','uma quajs','Bruna','2019-11-04 16:48:03'),(20,'Cod dog','aaaaa','Lara','2019-11-04 16:57:36'),(21,'Lorem Ipsum','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.','Natasha','2019-11-04 17:00:05'),(22,'opopopo','ldkajdwd','Lalal','2019-11-04 20:18:35');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-04 20:16:22
