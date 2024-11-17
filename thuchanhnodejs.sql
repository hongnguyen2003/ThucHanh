-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 22, 2024 lúc 05:38 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `lab2nodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `sex` enum('Nam','Nữ','Khác') DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `sex`, `email`) VALUES
('dsadsa', 'dsadsa', 'dsadasd', 'ádasdsadas', 'Nữ', 'dsadsadas'),
('dsayu 8456', 'eawse', 'đâs', 'đâs', 'Khác', 'dá'),
('user2', 'securepass', 'Trần Thị Bình', 'Hồ Chí Minhx xxxxx', 'Nữ', 'binhtran@example.com'),
('user3', 'mypass123', 'Lê Văn Cường', 'Đà Nẵng', 'Nam', 'cuongle@example.com'),
('user4', 'strongpass', 'Phạm Thị Diệu', 'Cần Thơ', 'Nữ', 'dieupham@example.com'),
('user5', 'pass@word', 'Hồ Văn Em', 'Hải Phòng', 'Nam', 'emho@example.com'),
('user6', 'secret123', 'Vũ Thị Phương', 'Huế', 'Nữ', 'phuongvu@example.com'),
('user7', 'password456', 'Trần Văn Giang', 'Nha Trang', 'Nam', 'giangtran@example.com'),
('user8', 'securepass2', 'Nguyễn Thị Hà', 'Vũng Tàu', 'Nữ', 'hannguyen@example.com'),
('user9', 'mypass456', 'Lê Văn Hưng', 'Quy Nhơn', 'Nam', 'hungle@example.com');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
