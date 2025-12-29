export interface IPlanet {
  srNo: number;
  planetName: string;
  distanceFromSunKm: number;
  diameterKm: number;
  hasRings: boolean;
  numberOfMoons: number;
}

export interface IPlanet {
  srNo: number;
  planetName: string;
  distanceFromSunKm: number;
  diameterKm: number;
  hasRings: boolean;
  numberOfMoons: number;
}


export interface IUniversity {
  srNo: number;
  uniName: string;
  foundedYear: number;
  countryLocated: string;
  studentCount: number;
  worldRanking: number;
}


export interface IAnimal {
  srNo: number;
  species: string;
  averageWeightKg: number;
  habitatType: string;
  lifespanYears: number;
  endangeredStatus: string;
}


export interface IApp {
  srNo: number;
  appName: string;
  categoryType: string;
  downloadsMillion: number;
  developerCompany: string;
  subscriptionRequired: boolean;
}


export interface IContinent {
  srNo: number;
  continentLabel: string;
  surfaceAreaMillionSqKm: number;
  countriesCount: number;
  populationBillion: number;
  largestCountry: string;
}


export interface IDessert {
  srNo: number;
  dessertName: string;
  sugarContentGrams: number;
  servingTemp: string;
  mainIngredient: string;
  calorieCount: number;
}


export interface IOcean {
  srNo: number;
  oceanTitle: string;
  avgDepthMeters: number;
  surfaceAreaMillionSqKm: number;
  borderingContinents: number;
  salinityPpt: number;
}


export interface IGadget {
  srNo: number;
  gadgetLabel: string;
  featuresCount: number;
  batteryLifeHours: number;
  connectivityType: string;
  weightGrams: number;
}


export interface ILandmark {
  srNo: number;
  landmarkLabel: string;
  heightMeters: number;
  visitorCountYearMillion: number;
  countryLocation: string;
  constructionYear: number;
}


export interface IVehicleModel {
  srNo: number;
  vehicleType: string;
  maxSpeedKph: number;
  fuelCapacityLiters: number;
  wheelCount: number;
  manufacturerLocation: string;
}


export interface IProfession {
  srNo: number;
  professionName: string;
  avgSalaryUSD: number;
  yearsOfStudy: number;
  riskLevel: string;
  workEnvironment: string;
}


export interface IBeverage {
  srNo: number;
  beverageTitle: string;
  caffeineMg: number;
  servingSizeMl: number;
  servedHot: boolean;
  sugarContentG: number;
}


export interface IFlower {
  srNo: number;
  flowerName: string;
  petalCount: number;
  fragranceLevel: string;
  bloomingSeason: string;
  stemLengthCm: number;
}

export interface IHotel {
  srNo: number;
  hotelLabel: string;
  stars: number;
  totalRooms: number;
  poolAvailable: boolean;
  cityLoc: string;
}


export interface IIsland {
  srNo: number;
  islandLabel: string;
  areaSqKm: number;
  countryAdmin: string;
  inhabited: boolean;
  climateType: string;
}


export interface IInsect {
  srNo: number;
  insectName: string;
  wingspanCm: number;
  legsCount: number;
  lifespanDays: number;
  canFly: boolean;
}


export interface IFestival {
  srNo: number;
  festivalName: string;
  monthObserved: string;
  durationDays: number;
  originCountry: string;
  outdoorEvent: boolean;
}


export interface IRiver {
  srNo: number;
  riverLabel: string;
  lengthKm: number;
  flowsThroughCountries: number;
  avgDepthM: number;
  deltaExists: boolean;
}


export interface ISpice {
  srNo: number;
  spiceName: string;
  colorHue: string;
  originRegion: string;
  pungencyLevel: string;
  isPowdered: boolean;
}


export interface ITool {
  srNo: number;
  toolName: string;
  weightKg: number;
  handleMaterial: string;
  manualTool: boolean;
  usageCategory: string;
}


export interface IMineral {
  srNo: number;
  mineralLabel: string;
  hardnessMoh: number;
  crystalSystem: string;
  isMetallic: boolean;
  marketPriceUSDkg: number;
}


export interface IMoon {
  srNo: number;
  moonLabel: string;
  orbitingPlanet: string;
  diameterKm: number;
  discoveredYear: number;
  surfaceMaterial: string;
}

export interface IMusicalBand {
  srNo: number;
  bandLabel: string;
  originCity: string;
  formedYear: number;
  genreStyle: string;
  albumsCount: number;
}


export interface IMetro {
  srNo: number;
  metroLabel: string;
  trackLengthKm: number;
  totalStations: number;
  dailyRidershipMillion: number;
  operatingSince: number;
}


export interface IScientificDiscovery {
  srNo: number;
  discoveryLabel: string;
  discoveredBy: string;
  yearMade: number;
  fieldArea: string;
  impactLevel: string;
}


export interface INationalPark {
  srNo: number;
  parkLabel: string;
  countryLocated: string;
  establishedYear: number;
  areaSqKm: number;
  annualVisitorsMillion: number;
}


export interface IArtPainting {
  srNo: number;
  paintingTitle: string;
  artistName: string;
  yearCreated: number;
  styleType: string;
  currentLocation: string;
}


export interface IHistoricalBattle {
  srNo: number;
  battleName: string;
  battleYear: number;
  mainCombatants: string;
  outcome: string;
  casualtiesApprox: number;
}


export interface IAward {
  srNo: number;
  awardTitle: string;
  categoryGiven: string;
  established: number;
  awardCountry: string;
  frequencyYears: number;
}


export interface IBridge {
  srNo: number;
  bridgeLabel: string;
  lengthMeters: number;
  countryLocated: string;
  builtYear: number;
  materialMain: string;
}


export interface ISpaceTelescope {
  srNo: number;
  telescopeName: string;
  launchYear: number;
  primaryMirrorM: number;
  operatorAgency: string;
  missionStatus: string;
}


export interface IFashionBrand {
  srNo: number;
  brandLabel: string;
  foundedYear: number;
  originCountry: string;
  productType: string;
  annualRevenueBillionUSD: number;
}


export interface IMusicalInstrument {
  srNo: number;
  instrumentName: string;
  categoryFamily: string;
  rangeOctaves: number | string;
  madeOf: string;
  originCentury: number | string;
}


export interface IWebBrowser {
  srNo: number;
  browserName: string;
  developerOrg: string;
  firstReleaseYear: number;
  engineUsed: string;
  platformSupport: string;
}


export interface IAirline {
  srNo: number;
  airlineName: string;
  foundedYear: number;
  hubAirport: string;
  fleetSize: number;
  allianceMember: boolean;
}


export interface IVolcano {
  srNo: number;
  volcanoLabel: string;
  heightMeters: number;
  lastEruptionYear: number;
  locationIsland: string;
  volcanoType: string;
}
