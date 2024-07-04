-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-07-2024 a las 22:30:31
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodejsclass`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Smartphones', 'Teléfono inteligente'),
(2, 'Smartwhatch', 'Reloj Inteligente'),
(3, 'AirPods', 'Audífono IPhone'),
(4, 'Audífono BT', 'Audífono Gamer Bluethoot'),
(5, 'Teclado', 'Teclado para Pc'),
(6, 'Mouse', 'Mouse para Pc');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `nombre`) VALUES
(1, 'Apple'),
(2, 'Samsung'),
(3, 'Xiaomi'),
(4, 'Oppo'),
(5, 'Amazon'),
(6, 'Asus'),
(7, 'Razer'),
(8, 'Logitech');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'Disponible',
  `id_categoria` int DEFAULT NULL,
  `id_marca` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`, `Imagen`, `estado`, `id_categoria`, `id_marca`) VALUES
(1, 'Xiaomi Redmi 9C Negro 2GB/32GB', 'Xiaomi Redmi 9C - 4G smartphone - SIM doble - RAM 2 GB / Memoria interna 32 GB - gris medianoche', 90.00, 50, 'assets/img/productos/Producto10.jpg', 'Disponible', 1, 3),
(2, 'Xiaomi Redmi 12C Gris 3GB/64GB', 'Xiaomi Redmi 12C - 4G smartphone - SIM doble - RAM 3 GB / Memoria interna 64 GB - gris grafito', 105.00, 50, 'assets/img/productos/Producto11.jpg', 'Disponible', 1, 3),
(3, 'Xiaomi Redmi 13C Negro 4GB/128GB', 'Xiaomi Redmi 13C - 4G smartphone - SIM doble - RAM 4 GB / Memoria interna 128 GB - negro medianoche', 110.00, 50, 'assets/img/productos/Producto12.jpg', 'Disponible', 1, 3),
(4, 'OPPO A38 Dorado 4GB/128GB', 'OPPO A38 - 4G smartphone - SIM doble - RAM 4 GB / Memoria interna 128 GB - glowing gold', 125.00, 50, 'assets/img/productos/Producto13.jpg', 'Disponible', 1, 4),
(5, 'Samsung Galaxy A04s 3GB/32GB Black', 'Samsung Galaxy A04s - 4G smartphone - SIM doble - RAM 3 GB / Memoria interna 32 GB - negro', 140.00, 50, 'assets/img/productos/Producto14.jpg', 'Disponible', 1, 2),
(6, 'Samsung Galaxy A23 5G 4GB/64GB Black', 'Samsung Galaxy A23 5G - 5G smartphone - SIM doble - RAM 4 GB / Memoria interna 64 GB - negro', 205.00, 50, 'assets/img/productos/Producto15.jpg', 'Disponible', 1, 2),
(7, 'Samsung Galaxy A33 5G 6GB/128GB Black', 'Samsung Galaxy A33 5G - 5G smartphone - SIM doble - RAM 6 GB / Memoria interna 128 GB - negro', 270.00, 50, 'assets/img/productos/Producto16.jpg', 'Disponible', 1, 2),
(8, 'iPhone 11 Negro 64GB MHDA3QL/A', 'Apple iPhone 11 - 4G teléfono inteligente - SIM doble / Memoria interna 64 GB - negro', 550.00, 50, 'assets/img/productos/Producto17.jpg', 'Disponible', 1, 1),
(9, 'iPhone 12 Blanco 64GB', 'Apple iPhone 12 - 5G teléfono inteligente - SIM doble / Memoria interna 64 GB - blanco', 580.00, 50, 'assets/img/productos/Producto18.jpg', 'Disponible', 1, 1),
(10, 'iPhone 13 Rosado 256GB', 'Apple iPhone 13 - 5G teléfono inteligente - SIM doble / Memoria interna 256 GB - rosa', 790.00, 50, 'assets/img/productos/Producto19.jpg', 'Disponible', 1, 1),
(11, 'iPhone 15 Plus 256GB Azul', 'Apple iPhone 15 Plus - 5G teléfono inteligente - SIM doble / Memoria interna 256 GB - azul', 1210.00, 50, 'assets/img/productos/Producto20.jpg', 'Disponible', 1, 1),
(12, 'Xiaomi Redmi Watch 3 Negro', 'Xiaomi Redmi Watch 3 - 42 mm - reloj inteligente- tamaño: 135-200 mm - negro elegante', 90.00, 30, 'assets/img/productos/Producto21.jpg', 'Disponible', 2, 3),
(13, 'Amazfit Smartwatch GTR 3 Gris', 'Amazfit GTR 3 - Reloj inteligente con correa - tamaño de la muñeca: 155-218 mm - moonlight gray', 130.00, 30, 'assets/img/productos/Producto22.jpg', 'Disponible', 2, 5),
(14, 'Samsung Galaxy Watch4 Oro Rosa', 'Samsung Galaxy Watch4 - 40 mm - oro rosado - reloj inteligente con pulsera deportiva - rosa', 160.00, 30, 'assets/img/productos/Producto23.jpg', 'Disponible', 2, 1),
(15, 'Asus VivoWatch BP negro', 'ASUS VivoWatch BP - Rastreador de actividad con correa - silicona médica - Bluetooth - 45 g', 170.00, 30, 'assets/img/productos/Producto24.jpg', 'Disponible', 2, 6),
(16, 'Apple AirPods V2 Blancos Bluetooth', 'Apple AirPods with Charging Case - 2ª generación - auriculares inalámbricos con micro - Bluetooth', 145.00, 10, 'assets/img/productos/Producto25.jpg', 'Disponible', 3, 1),
(17, 'Razer Kaira Rosa Gaming XBOX inalámbricos', 'Razer Kraken BT - Kitty Edition - auricular - tamaño completo - Bluetooth - inalámbrico', 130.00, 20, 'assets/img/productos/Producto26.jpg', 'Disponible', 4, 7),
(18, 'Razer Kaira Negro Gaming XBOX inalámbricos', 'Razer Kaira - Auricular - tamaño completo - 2.4/5 GHz - inalámbrico - aislamiento de ruido', 140.00, 20, 'assets/img/productos/Producto27.jpg', 'Disponible', 4, 7),
(19, 'Logitech K400 Blanco Teclado Wireless Tochpad', 'Logitech Wireless Touch Keyboard K400 Plus - Teclado - inalámbrico - 2.4 GHz - español - blanco', 45.00, 15, 'assets/img/productos/Producto28.jpg', 'Disponible', 5, 8),
(20, 'Logitech G203 Lightsync Gaming Negro RGB Ratón', 'Logitech Gaming Mouse G203 LIGHTSYNC - Ratón - óptico - 6 botones - cableado - USB - negro', 35.00, 25, 'assets/img/productos/Producto29.jpg', 'Disponible', 6, 8),
(21, 'Logitech MX Anywhere 3 Rosa Ratón Inalámbrico', 'Logitech MX Anywhere 3 - Ratón - laser - 6 botones - inalámbrico - Bluetooth, 2.4 GHz - rosa', 80.00, 25, 'assets/img/productos/Producto30.jpg', 'Disponible', 6, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `status` int DEFAULT '1',
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `status`, `date_created`) VALUES
(1, 'Daribeth Leal', 'daribethleal.ar@gmail.com', 'Loyalty.1989', 1, '2024-06-22 20:51:08'),
(3, 'Admin', 'Admin@admin.com', '12345', 1, '2024-06-22 20:51:08'),
(4, 'Jepafe', 'jepafe@admin.com', '12345', 1, '2024-06-22 21:15:55'),
(17, 'Juan', 'juan2@admin.com', '$2a$10$OguMS4LHBgSVIdm32jXWkeX46V3nfus15WYEeK/Nhe7NPuykKRs06', 1, '2024-07-02 22:46:21'),
(18, 'Juan', 'juan3@admin.com', '$2a$10$5w0sDa1ZgD5I7xmFjYH9JOgjrmyDwFdQh4SQ5maODWjZUmba4P4gi', 1, '2024-07-03 11:53:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_marca` (`id_marca`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
