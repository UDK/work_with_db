-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 04 2019 г., 01:49
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `universities`
--

-- --------------------------------------------------------

--
-- Структура таблицы `assessment`
--

CREATE TABLE `assessment` (
  `id_students` int(11) NOT NULL,
  `id_subject_academic` int(11) NOT NULL,
  `assessments` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `assessment`
--

INSERT INTO `assessment` (`id_students`, `id_subject_academic`, `assessments`) VALUES
(1, 1, 70),
(1, 2, 50),
(1, 3, 84),
(1, 4, 58),
(2, 1, 77),
(2, 4, 74),
(3, 5, 84),
(4, 2, 54),
(5, 1, 21),
(6, 5, 64),
(7, 4, 55),
(8, 3, 44),
(9, 1, 88);

-- --------------------------------------------------------

--
-- Структура таблицы `bracnh`
--

CREATE TABLE `bracnh` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `bracnh`
--

INSERT INTO `bracnh` (`id`, `name`) VALUES
(1, 'Хогвартс');

-- --------------------------------------------------------

--
-- Структура таблицы `faculty`
--

CREATE TABLE `faculty` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `id_branch` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `faculty`
--

INSERT INTO `faculty` (`id`, `name`, `id_branch`) VALUES
(1, 'Гриффиндор', 1),
(2, 'Пуффендуй', 1),
(3, 'Когтевран', 1),
(4, 'Слизерин', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `id_faculty` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `id_faculty`, `name`) VALUES
(1, 1, 'ДББ-151'),
(2, 1, 'ДББ-152'),
(3, 4, 'ЗЩЩ-161');

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `id_group` int(11) NOT NULL,
  `surname` varchar(60) DEFAULT NULL,
  `firstname` varchar(60) DEFAULT NULL,
  `lastname` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `id_group`, `surname`, `firstname`, `lastname`) VALUES
(1, 1, 'Гриффиндор', 'Годрик', NULL),
(2, 1, 'Мириадд', 'Валерия', NULL),
(3, 1, 'Пуффендуй', 'Панелопа', NULL),
(4, 2, 'Стебль', 'Помона', NULL),
(5, 3, 'Когтевран', 'Кандида', NULL),
(6, 3, 'Флитвик', 'Филиус', NULL),
(7, 3, 'Иванов', 'Иван', 'Иванович'),
(8, 2, 'Иванов', 'Петр', 'Иванович'),
(9, 2, 'Иванов', 'Иван', 'Иванович');

-- --------------------------------------------------------

--
-- Структура таблицы `subject_academic`
--

CREATE TABLE `subject_academic` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subject_academic`
--

INSERT INTO `subject_academic` (`id`, `name`, `id_group`) VALUES
(1, 'Заклинания', 1),
(2, 'История магии', 3),
(3, 'Травология', 3),
(4, 'Древние руны', 2),
(5, 'Уход за магическими существами', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`id_students`,`id_subject_academic`),
  ADD KEY `id_subject_academic` (`id_subject_academic`);

--
-- Индексы таблицы `bracnh`
--
ALTER TABLE `bracnh`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_branch` (`id_branch`);

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_faculty` (`id_faculty`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_group` (`id_group`);

--
-- Индексы таблицы `subject_academic`
--
ALTER TABLE `subject_academic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_group` (`id_group`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bracnh`
--
ALTER TABLE `bracnh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `subject_academic`
--
ALTER TABLE `subject_academic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `assessment`
--
ALTER TABLE `assessment`
  ADD CONSTRAINT `assessment_ibfk_1` FOREIGN KEY (`id_students`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `assessment_ibfk_2` FOREIGN KEY (`id_subject_academic`) REFERENCES `subject_academic` (`id`);

--
-- Ограничения внешнего ключа таблицы `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `faculty_ibfk_1` FOREIGN KEY (`id_branch`) REFERENCES `bracnh` (`id`);

--
-- Ограничения внешнего ключа таблицы `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`id_faculty`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `subject_academic`
--
ALTER TABLE `subject_academic`
  ADD CONSTRAINT `subject_academic_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
