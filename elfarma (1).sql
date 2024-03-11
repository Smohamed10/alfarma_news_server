-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2024 at 11:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elfarma`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `ads_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `name`, `description`, `ads_img`) VALUES
(1, 'Radwan', 'fwfdwefcwav', 'wefawerfvas'),
(2, 'Radwan', 'fwfdwefcwav', 'wefawerfvas');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `postID` int(11) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `email`, `desc`, `postID`, `time`) VALUES
(1, 'jwbfcyebv', 'woqfnqnfcilaen', 3, '3/11/2024, 06:12:53'),
(2, 'jwbfcyebv', 'woqfnqnfcilaen', 3, '3/11/2024, 06:15:12'),
(3, 'jwbfcyebv', 'woqfnqnfcilaen', 20, '3/11/2024, 06:15:27'),
(4, 'jwbfcyebv', 'woqfnqnfcilaen', 3, '3/11/2024, 06:23:15'),
(5, 'jwbfscyebv', 'woqfnqnfcilaen', 3, '3/11/2024, 06:40:07');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `writer_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `pic_path` varchar(255) NOT NULL,
  `publicID` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `seen` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `writer_name`, `name`, `content`, `category`, `pic_path`, `publicID`, `time`, `seen`) VALUES
(1, 'writer_name', 'name', 'pla pla pla ', '', '', '', '00:00:00', 10),
(2, 'writer_name', 'name', 'pla pla pla ', 'hr', '', '', '3/2/2024, 13:26:11', 0),
(3, 'writer_name', 'name', 'pla pla pla ', 'hr', '', '', '3/2/2024, 13:26:59', 6),
(4, '', 'name', 'pla pla pla ', '', '', '', '3/2/2024, 13:27:06', 8),
(5, 'radwan', 'mosaa', 'mosa killed yesterday ', 'sports', 'pfmeonwfpwenfpow[pekf[ke', '', '3/2/2024, 13:35:09', 0),
(6, 'radwan', 'mosaa', 'mosa killed yesterday ', 'sports', 'pfmeonwfpwenfpow[pekf[ke', '', '3/2/2024, 13:35:19', 0),
(7, 'radwan', 'mosaa', 'mosa killed yesterday ', 'hr', 'pfmeonwfpwenfpow[pekf[ke', 'publicID', '3/2/2024, 13:42:31', 0),
(8, 'radwan', 'mosaa', 'mosa killed yesterday ', 'sports', 'pfmeonwfpwenfpow[pekf[ke', 'knsdpovnsp[', '3/2/2024, 13:42:36', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `token` text NOT NULL,
  `status` varchar(15) NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `token`, `status`, `password`) VALUES
(1, 'radwan moahmed', 'rm1167616@gmail.com', '01223740125', 'f712c99673317cd6dae44145813a3398', 'admin', '$2b$10$KET.wxpKpd4Kv668HmjV4uNjtvJM5rp.EUpMge/fDIx7mSj.vLiDO'),
(2, 'radwan moahmed', 'rmm1167616@gmail.com', '01223740125', '61e1fb4279700f1d054481d1984e4126', 'admin', '$2b$10$Vadm7nkE1NcnlGP8pn7R6.M9Q6i.hMgch2qSEWXXd8PHn2o5ChW4y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
