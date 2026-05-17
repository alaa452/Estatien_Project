-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2026 at 07:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `real_estate_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `date` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `date`, `title`, `domain`, `category`, `description`) VALUES
(1, 'Since 2019', 'ABC Corporation', 'Commercial Real Estate', 'Luxury Home Development', 'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.'),
(2, 'Since 2018', 'GreenTech Enterprises', 'Commercial Real Estate', 'Retail Space', 'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.'),
(3, 'Since 2020', 'Nova Group', 'Commercial Real Estate', 'Corporate Offices', 'Estatein helped us secure a premium office location that perfectly matched our company growth strategy and modern workspace vision.'),
(4, 'Since 2017', 'UrbanNest Holdings', 'Residential Real Estate', 'Luxury Apartments', 'Their team provided exceptional service and helped us identify high-value residential investments in prime city locations.'),
(5, 'Since 2021', 'Skyline Ventures', 'Commercial Real Estate', 'Business Towers', 'Estatein guided us through every stage of acquiring a state-of-the-art commercial tower with professionalism and expertise.'),
(6, 'Since 2016', 'Elite Living Co.', 'Residential Real Estate', 'Modern Villas', 'We were impressed by the quality of properties and the personalized support provided throughout the entire buying process.'),
(7, 'Since 2022', 'Prime Retail Solutions', 'Commercial Real Estate', 'Shopping Centers', 'Estatein successfully connected us with premium retail spaces that significantly improved our customer visibility and business reach.'),
(8, 'Since 2015', 'Golden Horizon Investments', 'Luxury Real Estate', 'Private Estates', 'Their luxury property portfolio exceeded our expectations and helped us acquire one of the most prestigious estates in the region.'),
(9, 'Since 2025', 'FutureRise Developments', 'Smart Real Estate', 'AI Smart Homes', 'FutureRise partnered with Estatein to acquire cutting-edge smart homes equipped with advanced automation and sustainable technologies.'),
(10, 'Since 2025', 'Visionary Spaces', 'Commercial Real Estate', 'Tech Campuses', 'Estatein helped us establish innovative tech campuses in strategic locations that perfectly support our rapidly growing operations.'),
(11, 'Since 2026', 'NextEra Living', 'Luxury Real Estate', 'Waterfront Villas', 'Their exclusive portfolio of waterfront villas allowed us to secure some of the most luxurious coastal properties available on the market.'),
(12, 'Since 2026', 'Urban Pulse Group', 'Residential Real Estate', 'Modern City Apartments', 'Estatein provided outstanding support in identifying premium city apartments designed for modern urban lifestyles and investment growth.');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `inquiryType` varchar(255) DEFAULT NULL,
  `hearAbout` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `firstName`, `lastName`, `email`, `phone`, `inquiryType`, `hearAbout`, `message`) VALUES
(1, '', '', '', '', '', '', ''),
(2, 'Alaa', 'Hamdan', 'alaa.taha.004@gmail.com', '35345423', 'ny', 'ny', '23434'),
(3, 'Alaa', 'Hamdan', 'alaa.taha.004@gmail.com', '345345', 'ny', 'ny', 'fhjgfh'),
(4, 'Alaa', 'Hamdan', 'alaa.taha.004@gmail.com', '05934534634', 'Sell Property', 'Instagram', 'hrkko');

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question`, `answer`) VALUES
(1, 'How do I search for properties on Estatein?', 'Learn how to use our user-friendly search tools to find properties that match your criteria.'),
(2, 'What documents do I need to sell my property through Estatein?', 'Find out about the necessary documentation for listing your property with us.'),
(3, 'How can I contact an Estatein agent?', 'Discover the different ways you can get in touch with our experienced agents.'),
(4, 'Can I schedule a property visit online?', 'Yes, you can easily book a property visit directly through our website by selecting your preferred date and time.'),
(5, 'Do you offer financing assistance?', 'Absolutely. We collaborate with trusted financial institutions to help clients secure suitable mortgage and financing options.'),
(6, 'Are virtual property tours available?', 'Yes, we provide high-quality virtual tours so you can explore properties remotely from anywhere in the world.'),
(7, 'How long does the buying process usually take?', 'The timeline depends on the property and financing process, but most transactions are completed within a few weeks.'),
(8, 'Can I list my property on Estatein?', 'Yes, property owners can submit their listings through our platform and connect with thousands of potential buyers.'),
(9, 'Do you provide commercial properties?', 'Yes, Estatein offers a wide range of commercial spaces including offices, retail stores, and investment properties.'),
(10, 'How can I contact customer support?', 'You can contact our support team through phone, email, or the contact form available on our website.'),
(11, 'Are your property listings verified?', 'Yes, all listed properties go through a verification process to ensure accuracy and reliability for our clients.');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `propertyType` varchar(255) DEFAULT NULL,
  `bedrooms` varchar(255) DEFAULT NULL,
  `bathrooms` varchar(255) DEFAULT NULL,
  `budget` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `countBedroom` int(11) NOT NULL,
  `countBathroom` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `propertyType` varchar(255) DEFAULT NULL,
  `propertySize` int(11) DEFAULT NULL,
  `buildYear` int(11) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `title`, `description`, `image`, `countBedroom`, `countBathroom`, `type`, `price`, `location`, `propertyType`, `propertySize`, `buildYear`, `title2`) VALUES
(4, 'Seaside Serenity Villa', 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.', './assets/images/property1.png', 4, 3, 'Villa', 550000.00, 'California', 'Villa', 450, 2021, 'Luxury Redefined - Modern Living at Its Finest'),
(5, 'Metropolitan Haven', 'Immerse yourself in the energy of the city. This modern apartment offers panoramic views.', './assets/images/property2.png', 2, 2, 'Apartment', 650000.00, 'New York', 'Apartment', 180, 2020, 'Skyline Dreams - Elevated Urban Experience'),
(6, 'Rustic Retreat Cottage', 'Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills.', './assets/images/property3.png', 3, 3, 'Cottage', 350000.00, 'Texas', 'Cottage', 250, 2018, 'Comfort & Peace - Family Living Perfected'),
(7, 'Palm Luxury Residence', 'An elegant luxury villa with private pool and stunning modern design.', './assets/images/property4.png', 5, 4, 'Villa', 1850000.00, 'Dubai', 'Villa', 600, 2023, 'Future Living - Smart Home Innovation'),
(8, 'Skyline Penthouse', 'Experience premium city living in this breathtaking penthouse apartment.', './assets/images/property5.png', 3, 3, 'Penthouse', 2200000.00, 'London', 'Penthouse', 320, 2022, 'Nature Retreat - Serenity by the Lake'),
(9, 'Green Valley House', 'Family-friendly home with spacious garden and peaceful environment.', './assets/images/property6.png', 4, 3, 'House', 780000.00, 'Florida', 'House', 380, 2019, 'Royal Elegance - Prestige Beyond Compare'),
(10, 'Modern Smart Apartment', 'Fully automated smart apartment with cutting-edge technology.', './assets/images/property7.png', 2, 1, 'Apartment', 540000.00, 'Berlin', 'Apartment', 160, 2021, 'Creative Urban Lifestyle - Compact & Stylish'),
(11, 'Lakeview Cabin', 'Beautiful wooden cabin overlooking a serene lake and forest.', './assets/images/property8.png', 3, 2, 'Cabin', 420000.00, 'Canada', 'Cabin', 270, 2017, 'Nature Escape - Peaceful Living'),
(12, 'Royal Palace Estate', 'Massive luxury estate with gardens, pools, and private cinema.', './assets/images/property9.png', 7, 6, 'Mansion', 4500000.00, 'Paris', 'Mansion', 1200, 2024, 'Luxury Beyond Imagination'),
(13, 'Urban Loft Studio', 'Stylish loft designed for young professionals in downtown area.', './assets/images/property10.png', 1, 1, 'Studio', 310000.00, 'Tokyo', 'Studio', 95, 2020, 'Minimal Urban Creativity'),
(14, 'Sunset Glass Villa', 'Luxury oceanfront villa with panoramic sunset views and infinity pool.', './assets/images/property11.png', 5, 4, 'Villa', 1450000.00, 'California', 'Villa', 650, 2024, 'Modern Coastal Luxury'),
(15, 'Urban Residence Complex', 'Sleek modern apartment residences located in a vibrant downtown district.', './assets/images/property12.png', 3, 2, 'Apartment', 780000.00, 'New York', 'Apartment', 320, 2022, 'Urban Comfort & Style'),
(16, 'Cliffside Paradise Estate', 'Stunning luxury property overlooking the ocean with tropical atmosphere.', './assets/images/property13.png', 6, 5, 'Villa', 2250000.00, 'Miami', 'Villa', 900, 2025, 'Exclusive Ocean Living'),
(17, 'Infinity Horizon Villa', 'Contemporary villa with breathtaking infinity pool and sunset skyline.', './assets/images/property14.png', 5, 4, 'Villa', 1750000.00, 'Dubai', 'Villa', 720, 2023, 'Future Luxury Living'),
(18, 'Modern Townhouse Row', 'Elegant modern townhouse community with premium architectural design.', './assets/images/property15.png', 4, 3, 'Townhouse', 980000.00, 'Texas', 'Townhouse', 480, 2021, 'Smart Community Living'),
(19, 'Metropolitan Business Tower', 'Premium commercial office tower in the heart of the modern city.', './assets/images/property16.png', 0, 4, 'Commercial', 3500000.00, 'Chicago', 'Commercial', 1200, 2020, 'Corporate Excellence'),
(20, 'Royal Urban Mansion', 'Ultra-modern luxury mansion with premium architecture, spacious interiors, and private parking.', './assets/images/property10.png', 5, 5, 'Villa', 1950000.00, 'Los Angeles', 'Villa', 850, 2024, 'Elite Smart Living Experience');

-- --------------------------------------------------------

--
-- Table structure for table `property_details`
--

CREATE TABLE `property_details` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `amenities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`amenities`)),
  `pricing` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`pricing`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_details`
--

INSERT INTO `property_details` (`id`, `property_id`, `description`, `bedrooms`, `bathrooms`, `area`, `images`, `amenities`, `pricing`, `created_at`) VALUES
(1, 4, 'Discover your own piece of paradise with the Seaside Serenity Villa. This stunning luxury villa offers breathtaking ocean views, spacious interiors, and modern amenities designed for ultimate comfort and relaxation.', 4, 3, '2,500 Square Feet', '[\r\n\"./assets/images/front-villa.png\",\r\n\"./assets/images/back-villa.png\",\r\n\"./assets/images/swimming-pool.png\",\r\n\"./assets/images/swimming-pool-sit.png\",\r\n\"./assets/images/sitting-room-1.png\",\r\n\"./assets/images/sitting-room-3.png\",\r\n\"./assets/images/the-kitchen.png\",\r\n\"./assets/images/sitting-room-2.png\",\r\n\"./assets/images/bedroom.png\"\r\n]', '[\r\n\"Expansive oceanfront terrace for outdoor entertaining\",\r\n\"Gourmet kitchen with top-of-the-line appliances\",\r\n\"Private beach access for morning strolls and sunset views\",\r\n\"Master suite with spa-inspired bathroom and ocean-facing balcony\",\r\n\"Private garage and ample storage space\"\r\n]', '{\r\n\r\n\"listingPrice\":1250000,\r\n\r\n\"additionalFees\":{\r\n\"propertyTransferTax\":25000,\r\n\"legalFees\":3000,\r\n\"homeInspection\":500,\r\n\"propertyInsurance\":1200\r\n},\r\n\r\n\"monthlyCosts\":{\r\n\"propertyTaxes\":1250,\r\n\"hoaFee\":300\r\n},\r\n\r\n\"totalInitialCosts\":{\r\n\"listingPrice\":1250000,\r\n\"additionalFees\":29700,\r\n\"downPayment\":250000,\r\n\"mortgageAmount\":1000000\r\n},\r\n\r\n\"monthlyExpenses\":{\r\n\"propertyTaxes\":1250,\r\n\"hoaFee\":300,\r\n\"propertyInsurance\":100\r\n}\r\n\r\n}', '2026-05-16 11:23:06'),
(2, 4, 'Discover your own piece of paradise with the Seaside Serenity Villa. This stunning luxury villa offers breathtaking ocean views, spacious interiors, and modern amenities designed for ultimate comfort and relaxation.', 4, 3, '2,500 Square Feet', '[\r\n\"./assets/images/front-villa.png\",\r\n\"./assets/images/back-villa.png\",\r\n\"./assets/images/swimming-pool.png\",\r\n\"./assets/images/swimming-pool-sit.png\",\r\n\"./assets/images/sitting-room-1.png\",\r\n\"./assets/images/sitting-room-3.png\",\r\n\"./assets/images/the-kitchen.png\",\r\n\"./assets/images/sitting-room-2.png\",\r\n\"./assets/images/bedroom.png\"\r\n]', '[\r\n\"Expansive oceanfront terrace for outdoor entertaining\",\r\n\"Gourmet kitchen with top-of-the-line appliances\",\r\n\"Private beach access for morning strolls and sunset views\",\r\n\"Master suite with spa-inspired bathroom and ocean-facing balcony\",\r\n\"Private garage and ample storage space\"\r\n]', '{\r\n\r\n\"listingPrice\":1250000,\r\n\r\n\"additionalFees\":{\r\n\"propertyTransferTax\":25000,\r\n\"legalFees\":3000,\r\n\"homeInspection\":500,\r\n\"propertyInsurance\":1200\r\n},\r\n\r\n\"monthlyCosts\":{\r\n\"propertyTaxes\":1250,\r\n\"hoaFee\":300\r\n},\r\n\r\n\"totalInitialCosts\":{\r\n\"listingPrice\":1250000,\r\n\"additionalFees\":29700,\r\n\"downPayment\":250000,\r\n\"mortgageAmount\":1000000\r\n},\r\n\r\n\"monthlyExpenses\":{\r\n\"propertyTaxes\":1250,\r\n\"hoaFee\":300,\r\n\"propertyInsurance\":100\r\n}\r\n\r\n}', '2026-05-16 11:23:17'),
(3, 7, 'Experience luxury living in Palm Luxury Residence. This elegant villa combines sophisticated architecture with smart home technology, spacious interiors, and world-class amenities for a premium lifestyle experience.', 5, 4, '600 Square Feet', '[\r\n\"./assets/icons/details1.jpg\",\r\n\"./assets/icons/details2.jpg\",\r\n\"./assets/icons/details3.jpg\",\r\n\"./assets/icons/details4.jpg\",\r\n\"./assets/icons/details5.jpg\",\r\n\"./assets/icons/details6.jpg\",\r\n\"./assets/icons/details7.jpg\",\r\n\"./assets/icons/details8.jpg\",\r\n\"./assets/icons/details9.jpg\"\r\n]', '[\r\n\"Private infinity swimming pool\",\r\n\"Fully integrated smart home system\",\r\n\"Luxury modern kitchen with premium appliances\",\r\n\"Master bedroom with panoramic city view\",\r\n\"Private parking garage for multiple vehicles\"\r\n]', '{\r\n\r\n\"listingPrice\":1850000,\r\n\r\n\"additionalFees\":{\r\n\"propertyTransferTax\":35000,\r\n\"legalFees\":4500,\r\n\"homeInspection\":700,\r\n\"propertyInsurance\":1800\r\n},\r\n\r\n\"monthlyCosts\":{\r\n\"propertyTaxes\":1800,\r\n\"hoaFee\":500\r\n},\r\n\r\n\"totalInitialCosts\":{\r\n\"listingPrice\":1850000,\r\n\"additionalFees\":42000,\r\n\"downPayment\":370000,\r\n\"mortgageAmount\":1480000\r\n},\r\n\r\n\"monthlyExpenses\":{\r\n\"propertyTaxes\":1800,\r\n\"hoaFee\":500,\r\n\"propertyInsurance\":150\r\n}\r\n\r\n}', '2026-05-16 12:18:02'),
(4, 7, 'Experience luxury living in Palm Luxury Residence. This elegant villa combines sophisticated architecture with smart home technology, spacious interiors, and world-class amenities for a premium lifestyle experience.', 5, 4, '600 Square Feet', '[\r\n\"./assets/images/details1.jpg\",\r\n\"./assets/images/details2.jpg\",\r\n\"./assets/images/details3.jpg\",\r\n\"./assets/images/details4.jpg\",\r\n\"./assets/images/details5.jpg\",\r\n\"./assets/images/details6.jpg\",\r\n\"./assets/images/details7.jpg\",\r\n\"./assets/images/details8.jpg\",\r\n\"./assets/images/details9.jpg\"\r\n]', '[\r\n\"Private infinity swimming pool\",\r\n\"Fully integrated smart home system\",\r\n\"Luxury modern kitchen with premium appliances\",\r\n\"Master bedroom with panoramic city view\",\r\n\"Private parking garage for multiple vehicles\"\r\n]', '{\r\n\r\n\"listingPrice\":1850000,\r\n\r\n\"additionalFees\":{\r\n\"propertyTransferTax\":35000,\r\n\"legalFees\":4500,\r\n\"homeInspection\":700,\r\n\"propertyInsurance\":1800\r\n},\r\n\r\n\"monthlyCosts\":{\r\n\"propertyTaxes\":1800,\r\n\"hoaFee\":500\r\n},\r\n\r\n\"totalInitialCosts\":{\r\n\"listingPrice\":1850000,\r\n\"additionalFees\":42000,\r\n\"downPayment\":370000,\r\n\"mortgageAmount\":1480000\r\n},\r\n\r\n\"monthlyExpenses\":{\r\n\"propertyTaxes\":1800,\r\n\"hoaFee\":500,\r\n\"propertyInsurance\":150\r\n}\r\n\r\n}', '2026-05-16 12:21:00');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `title`, `description`, `image`, `name`, `city`) VALUES
(1, 'Exceptional Service!', 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our dream home a breeze. Highly recommended!', './assets/images/profile1.png', 'Wade Warren', 'USA, California'),
(2, 'Efficient and Reliable', 'Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn\'t be happier with the results.', './assets/images/profile2.png', 'Emelie Thomson', 'USA, Florida'),
(3, 'Trusted Advisors', 'The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!', './assets/images/profile3.png', 'John Mans', 'USA, Nevada'),
(4, 'Professional Team', 'Estatein made the entire home buying experience smooth and stress-free. Their expert guidance helped us find our perfect home quickly.', './assets/images/profile4.png', 'Sophia Carter', 'USA, Chicago'),
(5, 'Amazing Support', 'The team was responsive, knowledgeable, and truly cared about our needs. We felt supported at every stage of the process.', './assets/images/profile5.png', 'Michael Brown', 'Canada, Toronto'),
(6, 'Highly Recommended', 'Their professionalism and attention to detail exceeded our expectations. We highly recommend Estatein to anyone searching for luxury properties.', './assets/images/profile6.png', 'Olivia Wilson', 'UK, London'),
(7, 'Outstanding Experience', 'From the first meeting to the final paperwork, Estatein delivered exceptional service and made everything incredibly easy.', './assets/images/profile7.png', 'Daniel Smith', 'Australia, Sydney'),
(8, 'Trusted Real Estate Experts', 'We were impressed by their market knowledge and commitment to helping us secure the best investment property possible.', './assets/images/profile8.png', 'Emma Johnson', 'UAE, Dubai'),
(9, 'Fast and Reliable', 'Estatein quickly matched us with properties that perfectly suited our preferences and budget. Fantastic experience overall.', './assets/images/profile9.png', 'James Anderson', 'Germany, Berlin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_details`
--
ALTER TABLE `property_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `property_details`
--
ALTER TABLE `property_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `property_details`
--
ALTER TABLE `property_details`
  ADD CONSTRAINT `property_details_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
