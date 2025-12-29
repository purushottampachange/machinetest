import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// every table should have sr number 

 planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];



 mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];


 universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];


 animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];


 apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];

// 9. continents
 continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];

// 10. desserts
 desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];

// 11. oceans
 oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];

// 12. gadgets
 gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];

// 13. landmarks
 landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];

// 14. vehiclesModels
 vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];

// 15. professions
 professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];

// 16. beveragesMenu
 beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];

// 17. flowers
 flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];

// 18. hotels
 hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];

// 19. islands
 islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];

// 20. insects
 insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];

// 21. festivals
 festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];

// 22. rivers
 rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];

// 23. spices
 spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];

// 24. tools
 tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];

// 25. minerals
 minerals = [
  { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
  { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
  { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
  { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
  { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];

// 26. planetsMoons
 planetsMoons = [
  { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
  { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
  { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];

// 27. musicalBands
 musicalBands = [
  { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
  { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
  { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
  { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
  { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];

// 28. citiesMetro
 citiesMetro = [
  { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
  { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
  { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
  { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
  { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];

// 29. sciDiscoveries
 sciDiscoveries = [
  { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
  { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
  { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];

// 30. nationalParks
 nationalParks = [
  { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
  { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
  { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
  { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
  { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];

// 31. artPaintings
 artPaintings = [
  { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
  { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
  { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
  { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
  { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];

// 32. historicalBattles
 historicalBattles = [
  { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
  { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
  { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
  { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
  { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];

// 33. awards
 awards = [
  { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
  { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
  { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];

// 34. bridges
 bridges = [
  { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
  { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
  { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
  { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
  { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];

// 35. spaceTelescopes
 spaceTelescopes = [
  { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
  { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
  { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
  { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
  { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];

// 36. fashionBrands
 fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];

// 37. musicalInstrumentsPro
 musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];

// 38. webBrowsers
 webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];

// 39. airlines
 airlines = [
  { airlineName: "Emirates", foundedYear: 1985, hubAirport: "Dubai International", fleetSize: 262, allianceMember: false },
  { airlineName: "Qatar Airways", foundedYear: 1993, hubAirport: "Hamad International", fleetSize: 237, allianceMember: false },
  { airlineName: "Singapore Airlines", foundedYear: 1947, hubAirport: "Changi Airport", fleetSize: 155, allianceMember: true },
  { airlineName: "Lufthansa", foundedYear: 1953, hubAirport: "Frankfurt Airport", fleetSize: 277, allianceMember: true },
  { airlineName: "Delta Air Lines", foundedYear: 1924, hubAirport: "Atlanta", fleetSize: 915, allianceMember: true }
];

// 40. volcanoes
 volcanoes = [
  { volcanoLabel: "Mauna Loa", heightMeters: 4169, lastEruptionYear: 2022, locationIsland: "Hawaii", volcanoType: "Shield" },
  { volcanoLabel: "Mount Etna", heightMeters: 3329, lastEruptionYear: 2021, locationIsland: "Sicily", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Krakatoa", heightMeters: 813, lastEruptionYear: 2018, locationIsland: "Indonesia", volcanoType: "Caldera" },
  { volcanoLabel: "Mount Fuji", heightMeters: 3776, lastEruptionYear: 1707, locationIsland: "Honshu", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Eyjafjallajökull", heightMeters: 1651, lastEruptionYear: 2010, locationIsland: "Iceland", volcanoType: "Stratovolcano" }
];





}
