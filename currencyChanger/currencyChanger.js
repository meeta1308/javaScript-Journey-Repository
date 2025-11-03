window.onload = () => {
  let welcomeCode = document.querySelector(".welcome_Code");
  let changer = document.querySelector(".changer");
  let body = document.querySelector("body");
  setTimeout(() => {
    welcomeCode.style.display = "none";
    changer.style.display = "block";
  }, 3000);
};
const countryCode_List = {
  AFN: "AF", // Afghanistan
  ALL: "AL", // Albania
  AMD: "AM", // Armenia
  ANG: "NL", // Netherlands Antilles (now part of NL)
  AOA: "AO", // Angola
  ARS: "AR", // Argentina
  AUD: "AU", // Australia
  AWG: "AW", // Aruba
  AZN: "AZ", // Azerbaijan
  BAM: "BA", // Bosnia and Herzegovina
  BBD: "BB", // Barbados
  BDT: "BD", // Bangladesh
  BGN: "BG", // Bulgaria
  BHD: "BH", // Bahrain
  BIF: "BI", // Burundi
  BMD: "BM", // Bermuda
  BND: "BN", // Brunei
  BOB: "BO", // Bolivia
  BRL: "BR", // Brazil
  BSD: "BS", // Bahamas
  BTN: "BT", // Bhutan
  BWP: "BW", // Botswana
  BYN: "BY", // Belarus (updated from BYR)
  BZD: "BZ", // Belize
  CAD: "CA", // Canada
  CDF: "CD", // Congo (DRC)
  CHF: "CH", // Switzerland
  CLP: "CL", // Chile
  CNY: "CN", // China
  COP: "CO", // Colombia
  CRC: "CR", // Costa Rica
  CUP: "CU", // Cuba
  CVE: "CV", // Cabo Verde
  CZK: "CZ", // Czech Republic
  DJF: "DJ", // Djibouti
  DKK: "DK", // Denmark
  DOP: "DO", // Dominican Republic
  DZD: "DZ", // Algeria
  EGP: "EG", // Egypt
  ERN: "ER", // Eritrea
  ETB: "ET", // Ethiopia
  EUR: "EU", // Eurozone
  FJD: "FJ", // Fiji
  FKP: "FK", // Falkland Islands
  GBP: "GB", // United Kingdom
  GEL: "GE", // Georgia
  GHS: "GH", // Ghana
  GIP: "GI", // Gibraltar
  GMD: "GM", // Gambia
  GNF: "GN", // Guinea
  GTQ: "GT", // Guatemala
  GYD: "GY", // Guyana
  HKD: "HK", // Hong Kong
  HNL: "HN", // Honduras
  HRK: "HR", // Croatia (now uses EUR)
  HTG: "HT", // Haiti
  HUF: "HU", // Hungary
  IDR: "ID", // Indonesia
  ILS: "IL", // Israel
  INR: "IN", // India
  IQD: "IQ", // Iraq
  IRR: "IR", // Iran
  ISK: "IS", // Iceland
  JMD: "JM", // Jamaica
  JOD: "JO", // Jordan
  JPY: "JP", // Japan
  KES: "KE", // Kenya
  KGS: "KG", // Kyrgyzstan
  KHR: "KH", // Cambodia
  KMF: "KM", // Comoros
  KRW: "KR", // South Korea
  KWD: "KW", // Kuwait
  KYD: "KY", // Cayman Islands
  KZT: "KZ", // Kazakhstan
  LAK: "LA", // Laos
  LBP: "LB", // Lebanon
  LKR: "LK", // Sri Lanka
  LRD: "LR", // Liberia
  LSL: "LS", // Lesotho
  MAD: "MA", // Morocco
  MDL: "MD", // Moldova
  MGA: "MG", // Madagascar
  MKD: "MK", // North Macedonia
  MMK: "MM", // Myanmar
  MNT: "MN", // Mongolia
  MOP: "MO", // Macao
  MRU: "MR", // Mauritania (updated from MRO)
  MUR: "MU", // Mauritius
  MVR: "MV", // Maldives
  MWK: "MW", // Malawi
  MXN: "MX", // Mexico
  MYR: "MY", // Malaysia
  MZN: "MZ", // Mozambique
  NAD: "NA", // Namibia
  NGN: "NG", // Nigeria
  NIO: "NI", // Nicaragua
  NOK: "NO", // Norway
  NPR: "NP", // Nepal
  NZD: "NZ", // New Zealand
  OMR: "OM", // Oman
  PAB: "PA", // Panama
  PEN: "PE", // Peru
  PGK: "PG", // Papua New Guinea
  PHP: "PH", // Philippines
  PKR: "PK", // Pakistan
  PLN: "PL", // Poland
  PYG: "PY", // Paraguay
  QAR: "QA", // Qatar
  RON: "RO", // Romania
  RSD: "RS", // Serbia
  RUB: "RU", // Russia
  RWF: "RW", // Rwanda
  SAR: "SA", // Saudi Arabia
  SBD: "SB", // Solomon Islands
  SCR: "SC", // Seychelles
  SDG: "SD", // Sudan
  SEK: "SE", // Sweden
  SGD: "SG", // Singapore
  SHP: "SH", // Saint Helena
  SLL: "SL", // Sierra Leone
  SOS: "SO", // Somalia
  SRD: "SR", // Suriname
  SSP: "SS", // South Sudan
  STN: "ST", // São Tomé and Príncipe (updated from STD)
  SVC: "SV", // El Salvador
  SYP: "SY", // Syria
  SZL: "SZ", // Eswatini
  THB: "TH", // Thailand
  TJS: "TJ", // Tajikistan
  TMT: "TM", // Turkmenistan
  TND: "TN", // Tunisia
  TOP: "TO", // Tonga
  TRY: "TR", // Turkey
  TTD: "TT", // Trinidad and Tobago
  TWD: "TW", // Taiwan
  TZS: "TZ", // Tanzania
  UAH: "UA", // Ukraine
  UGX: "UG", // Uganda
  USD: "US", // United States
  UYU: "UY", // Uruguay
  UZS: "UZ", // Uzbekistan
  VES: "VE", // Venezuela (updated from VEF)
  VND: "VN", // Vietnam
  VUV: "VU", // Vanuatu
  WST: "WS", // Samoa
  XAF: "CM", // Central African CFA franc (BEAC)
  XCD: "AG", // East Caribbean Dollar
  XOF: "SN", // West African CFA franc (BCEAO)
  YER: "YE", // Yemen
  ZAR: "ZA", // South Africa
  ZMW: "ZM", // Zambia
  ZWL: "ZW", // Zimbabwe
};
// const base_url =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const drop_down = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector("select[name='from_Selector']");
const toCurr = document.querySelector("select[name='to_Selector']");
const changer_button = document.querySelector(".changer_btn");
const msg = document.querySelector(".result");

for (let drop of drop_down) {
  for (code in countryCode_List) {
    let newCode = document.createElement("option");
    newCode.value = code;
    newCode.innerText = code;
    if (drop.name === "from_Selector" && code === "USD") {
      newCode.selected = "selected";
    } else if (drop.name === "to_Selector" && code === "INR") {
      newCode.selected = "selected";
    }
    drop.append(newCode);
  }
  drop.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}
const updateFlag = (eventTarget) => {
  let currCode = eventTarget.value;
  let currCountryCode = countryCode_List[currCode];
  if (!currCountryCode) {
    console.warn(`No country code found for currency: ${currCode}`);
    return;
  }

  let newSrc = `https://flagsapi.com/${currCountryCode}/flat/64.png`;
  let imgSrc = eventTarget.parentElement.querySelector("img");
  imgSrc.src = newSrc;
};
const updateCurrencyRate = async () => {
  let amount = document.querySelector(".amount_Div input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const base_url =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies";
  const fromChange = fromCurr.value.toLowerCase();
  const toChange = toCurr.value.toLowerCase();
  const URL = `${base_url}/${fromChange}/${toChange}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toChange];
    let finalRate = amtVal * rate;
    msg.innerText = `${amtVal}${fromCurr.value} = ${finalRate.toFixed(2)} ${
      toCurr.value
    }`;
  } catch (error) {
    msg.innerText = "Conversion failed.";
    console.error("API error:", error);
  }
};
// window.addEventListener("load", () => {
//   updateCurrencyRate();
// });
changer_button.addEventListener("click", (evnt) => {
  evnt.preventDefault();
  updateCurrencyRate();
});
