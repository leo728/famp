/*
Navicat MariaDB Data Transfer

Source Server         : 47.106.138.78
Source Server Version : 100130
Source Host           : 47.106.138.78:3306
Source Database       : fa_pe666_cn

Target Server Type    : MariaDB
Target Server Version : 100130
File Encoding         : 65001

Date: 2019-03-16 21:04:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for raw_projects
-- ----------------------------
DROP TABLE IF EXISTS `raw_projects`;
CREATE TABLE `raw_projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `hash` varchar(64) DEFAULT NULL,
  `subject` varchar(120) DEFAULT NULL COMMENT '项目名称',
  `customer` varchar(200) DEFAULT NULL COMMENT '甲方',
  `customer_pm` varchar(50) DEFAULT NULL COMMENT '甲方负责人',
  `customer_mobile` varchar(22) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `level` int(11) DEFAULT '3',
  `dateline` int(11) DEFAULT NULL,
  `end_time` int(11) DEFAULT NULL,
  `pm_id` int(11) DEFAULT NULL,
  `message` longtext,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='项目列表';

-- ----------------------------
-- Records of raw_projects
-- ----------------------------
INSERT INTO `raw_projects` VALUES ('2', 'bz5hSrdpFY2M7540', '中梁壹号院喷绘围挡', '重庆贵华建筑有限公司', '张经理', '', '26000.00', '3', '1538237485', '1538842285', '2', '&lt;p&gt;喷绘，&lt;span style=&quot;font-size: 1rem;&quot;&gt;彩钢瓦围挡&lt;/span&gt;&lt;/p&gt;', '8');
INSERT INTO `raw_projects` VALUES ('3', 'lXZrtw8hVNwu3089', '高家寨主席哆咪嗦钢琴教师 喷绘 pvc字', '高家寨主席', '高家寨主席', '13987951556', '1848.00', '3', '1538064000', '1539747755', '2', '&lt;p&gt;PVC字+亚克力面板&lt;br&gt;喷绘布&amp;nbsp;侧边以前创文位置 380x450&lt;/p&gt;', '9');
INSERT INTO `raw_projects` VALUES ('4', 'wJN3JInB0LjT4541', '普洱奇睿科技有限公司P2.5电子屏', '普洱奇睿科技有限公司', '李总', '', '32133.00', '3', '1539744377', '1540349177', '2', '', '9');
INSERT INTO `raw_projects` VALUES ('5', 'J9tG8FtLbGUj3160', '普洱奇睿科技有限公司门头安装制作', '普洱奇睿科技有限公司', '李总', '', '14000.00', '3', '1540882969', '1541487769', '2', '', '9');
INSERT INTO `raw_projects` VALUES ('6', 'IPBuTrP32ryZ3214', '文一工程 泰临酒店', '普洱文一工程有限公司', '李总', '', '0.00', '3', '1540883168', '1541487968', '2', '', '8');
INSERT INTO `raw_projects` VALUES ('7', 'HXzRW0hSGBcC8983', '悅安居法恩莎 pvc刻字', '美标卫浴', '谢队', '', '200.00', '3', '1541388932', '1541993732', '5', '&amp;lt;p&amp;gt;智能除臭&amp;amp;nbsp;&amp;lt;/p&amp;gt;', '8');
INSERT INTO `raw_projects` VALUES ('8', 'U3rLXZMAGkSi4400', '亿达汽车服务中心门头', '亿达汽车服务中心门头', '黄总', '15154830003', '800.00', '3', '1541574351', '1542179151', '5', '&amp;lt;p&amp;gt;门头喷绘&amp;amp;nbsp;单透贴&amp;lt;/p&amp;gt;', '9');
INSERT INTO `raw_projects` VALUES ('9', 'Qv19w5KKzRJ38718', '工资支付', '普洱万维广告有限公司', '普洱万维广告有限公司', '17787937708', '0.00', '3', '1542358676', '1542963476', '5', '&amp;lt;p&amp;gt;日常工资流水记账&amp;lt;/p&amp;gt;', '6');
INSERT INTO `raw_projects` VALUES ('10', 'ExlXzWnT8u970825', '新华书店  云上乡愁书院 升降幕布', '新华书店  云上乡愁书院', '白师', '', '0.00', '3', '1542680771', '1543285571', '2', '&amp;lt;p&amp;gt;&amp;lt;br&amp;gt;&amp;lt;/p&amp;gt;', '8');
INSERT INTO `raw_projects` VALUES ('11', 'sLBba95i5Xd35915', '日常消费', '普洱万维广告有限公司', '普洱万维广告有限公司', '', '0.00', '3', '1542685881', '1543290681', '5', null, '8');
INSERT INTO `raw_projects` VALUES ('12', '55lF2GscE6sY1298', '圣锦商贸PVC字', '圣锦商贸', '谢队', '', '0.00', '3', '1543811262', '1544416062', '2', null, '5');
INSERT INTO `raw_projects` VALUES ('13', 'MYHt0Ix87xYw7262', '武警思茅森中队广告项目', '武警思茅森中队', '谢队', '', '0.00', '3', '1544337226', '1544942026', '5', null, '9');
INSERT INTO `raw_projects` VALUES ('14', 'Cm88cXC78Ayk7327', '海诚地产 拉膜灯箱和PP纸', '海诚地产', '海诚地产', '', '999.00', '3', '1544337265', '1544942065', '5', null, '9');
INSERT INTO `raw_projects` VALUES ('15', 'diGsVCDu6aFD7396', '姊妹景谷早点喷绘门头', '姊妹景谷早点', '姊妹景谷早点', '', '200.00', '3', '1544337373', '1544942173', '5', null, '9');
INSERT INTO `raw_projects` VALUES ('16', 'QMfYW03fAs2v5979', '贺岛人家', '贺岛人家', '贺岛人家', '', '0.00', '3', '1548045958', '1548650758', '2', null, '1');
INSERT INTO `raw_projects` VALUES ('17', '9SxIpljwyL4B6013', '泰临酒店精神堡垒', '泰临酒店', '泰临酒店', '', '0.00', '3', '1548045988', '1548650788', '2', null, '1');
INSERT INTO `raw_projects` VALUES ('18', 'sX5XaP6QnLsR6111', '云上乡愁书院幕布', '云上乡愁书院', '云上乡愁书院', '', '4000.00', '3', '1548046015', '1548650815', '2', null, '1');
