-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 16 jan. 2023 à 10:50
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdd_ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `commander`
--

DROP TABLE IF EXISTS `commander`;
CREATE TABLE IF NOT EXISTS `commander` (
  `produit_id` int(11) NOT NULL,
  `commande` int(11) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commander`
--

INSERT INTO `commander` (`produit_id`, `commande`, `quantite`) VALUES
(10, 4, 1),
(14, 4, 2),
(16, 5, 5),
(12, 6, 2),
(11, 6, 1),
(13, 6, 1),
(15, 6, 1),
(12, 7, 1),
(11, 7, 1),
(13, 7, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id_commande` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `user` int(11) NOT NULL,
  `adresse` text NOT NULL,
  `codepostal` varchar(5) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `prix_total` float NOT NULL,
  PRIMARY KEY (`id_commande`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id_commande`, `date`, `user`, `adresse`, `codepostal`, `ville`, `prix_total`) VALUES
(5, '2022-06-10', 10, '8 pole vaillant couturier', '27140', 'Gisors', 315),
(4, '2021-02-17', 10, '8 pole vaillant couturier', '27140', 'Gisors', 1424),
(6, '2018-11-15', 9, '23 rue louis mallard', '27140', 'Gisors', 3348.96),
(7, '2022-08-31', 11, '8 rue champollion', '38270', 'Beaurepaire', 2223.98);

-- --------------------------------------------------------

--
-- Structure de la table `habilitations`
--

DROP TABLE IF EXISTS `habilitations`;
CREATE TABLE IF NOT EXISTS `habilitations` (
  `id_habilitation` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(50) NOT NULL,
  PRIMARY KEY (`id_habilitation`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `habilitations`
--

INSERT INTO `habilitations` (`id_habilitation`, `libelle`) VALUES
(1, 'client'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id_photo` int(11) NOT NULL AUTO_INCREMENT,
  `lien_photo` text NOT NULL,
  `produit` int(11) NOT NULL,
  PRIMARY KEY (`id_photo`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `photos`
--

INSERT INTO `photos` (`id_photo`, `lien_photo`, `produit`) VALUES
(14, 'https://www.rueducommerce.fr/media/produits/vibox/i-4-pc-gamer-4803318-258268_8_1140x1140.jpg', 10),
(25, 'https://www.lampe.fr/media/product/99616/1000x1000/panneau-mural-nanoleaf-pack-de-3-nl22-0001tw-3pk-0.jpg', 16),
(16, 'https://www.topachat.com/comprendre/images/new/pc_port_gamer_01.jpg', 11),
(17, 'https://www.rue-montgallet.com/actualites/wp-content/uploads/2019/04/PC-Portable-Gaming.png', 12),
(18, 'https://sm.ign.com/t/ign_fr/video/p/project-va/project-valerie-un-pc-portable-gaming-avec-trois-ecrans-par_ca6z.1200.png', 12),
(19, 'https://www.laptopspirit.fr/wp-content/uploads/new/Razer-Project-Valerie-CES-2017-3.png', 12),
(20, 'https://www.journaldugeek.com/content/uploads/2022/07/rog-phone-6-series-01.jpg', 13),
(21, 'https://www.cdiscount.com/pdt2/p/0/4/1/700x700/umkx3eep04/rw/ecran-pc-gamer-acer-nitro-xv253qpbmiiprzx-24.jpg', 14),
(22, 'https://static.fnac-static.com/multimedia/Images/FR/MDM/70/50/c5/12931184/1540-1/tsp20220628213158/Ecran-Gaming-AOC-24G2U5-23-8-LED-WLED-Noir.jpg', 14),
(23, 'https://www.bureaugamer.com/6550-large_default/ultradesk-frag-bureau-gamer-multi-outils-140-cm.jpg', 15),
(15, 'https://www.cdiscount.com/pdt2/2/0/6/1/700x700/vib5057551886206/rw/vibox-vii-39-pc-gamer-intel-i5-12400f-rtx-3060.jpg', 10);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id_produit` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `modele` varchar(255) NOT NULL,
  `marque` varchar(255) NOT NULL,
  `prix` float NOT NULL,
  `achetable` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id_produit`, `nom`, `description`, `modele`, `marque`, `prix`, `achetable`) VALUES
(12, 'Ecran déployable', 'Ecran attachable et détachable pour PC portable.', 'J-1126', 'CORSAIR', 523.99, 1),
(11, 'Pc Gamer - Portable', 'Pc gamer portable, longue autonomie et transportable partout.', 'A-064', 'MSI', 899.99, 0),
(10, 'Pc gamer', 'Un pc avec des composants fait pour jouer aux jeux vidéos.', 'B-126', 'ASUS', 1024, 0),
(13, 'Téléphone Gamer', 'Téléphone pouvant être utilisé pour le travail comme pour des loisirs tel que les jeux vidéos.', 'T-606', 'CORSAIR', 800, 1),
(14, 'Ecran gamer', 'Ecran de haute qualité pour jouer à des jeux vidéos.', 'B-106', 'ASUS', 200, 1),
(15, 'Bureau gamer', 'Bureau possédant des supensions pour pouvoir le monter et descendre.', 'B-553', 'ULTRADESK', 600.99, 0),
(16, 'Lumière', 'Lumière d\'ambiance pouvant se poser au mur.', 'C-505', 'ISIC', 63, 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `identifiant` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `habilitation` int(11) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `nom`, `prenom`, `identifiant`, `password`, `habilitation`) VALUES
(11, 'IACOBELLI', 'Anaëlle', 'sqg6s5!', '931a219fb80e817e42fc8ac5594c2023144f0e92', 1),
(9, 'CASTELLIER', 'Florian', 'qG24Gv!', 'ecfe73304b70de7867d857b4bdf830159e7c4c1b', 2),
(10, 'JAMET', 'Antoine', '?3sdw4', 'e3d673392b474f88c016e4791b495b5b18b41bc4', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
