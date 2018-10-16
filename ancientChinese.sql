/*
 Navicat Premium Data Transfer

 Source Server         : local_db
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:3306
 Source Schema         : ancientChinese

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 16/10/2018 15:40:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sample
-- ----------------------------
DROP TABLE IF EXISTS `sample`;
CREATE TABLE `sample` (
  `img_id` varchar(255) DEFAULT NULL,
  `chinese` varchar(500) DEFAULT NULL,
  `book_num` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `img_addr` varchar(1000) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
