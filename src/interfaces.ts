export interface IEvent {
  id: string;
  title: string;
  start: number;
  end: number | null;
  tier: number;
  bestOf: number;
  tournament_id: number;
  tournament_name: string;
  substage_id: number;
  deleted_at: number | null;
  pbp_status: PhbStatus;
  postponed_from: number | null;
  scores: IScores;
  chain: null; // TODO: Figure this one out
  forfeit: Forfeit;
  streamed: boolean;
  seeding: ISeeding;
  point_system: null; // TODO: Figure this one out
  game: IGame;
  bracket_pos: IBraketPos | null;
  rosters: IRoster[];
}

type PhbStatus = "expected" | "possible";

interface IGame {
  id: number;
  title: string;
  default_match_type: string;
  default_map: number;
  color: string;
  long_title: string;
  deleted_at: string | null;
  images: IGameImages;
}

interface IGameImages {
  square: string;
  circle: string;
  rectangle: string;
}

export interface IScores {
  [key: string]: number;
}

interface Forfeit {
  [key: string]: boolean;
}

interface ISeeding {
  "1": number;
  "2": number;
}

interface IBraketPos {
  part: Part;
  col: Col;
  offset: offset;
  seeding: ISeeding;
}

type Part = "LB" | "UB" | "GF";
type Col = 0 | 1 | 2 | 3 | 4 | 5;
type offset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128;

export interface IRoster {
  id: string;
  dpc_points: number;
  teams: ITeam[];
  players: IPlayer[];
}

export interface ITeam {
  name: string;
  deleted_at: string | null;
  id: string;
  short_name: string;
  images: ITeamImages;
  active: boolean;
  country: ICountry;
  social_media_accounts: ISocialMediaAccount[];
  coach: string | null;
}

interface ITeamImages {
  default: string;
  thumbnail: string;
  fallback: boolean;
}

interface ICountry {
  name: CountryName;
  short_name: CountryCode;
  images: ICountryImages;
  region: ICountryRegion;

}

interface ICountryImages {
  default: string;
  thumbnail: string;
}

interface ICountryRegion {
  id: CountryRegionId;
  name: CountryRegionName;
  short_name: CountryRegionShortName;
}

type CountryRegionId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ISocialMediaAccount {
  name: SocialMediaAccountName;
  slug: SocialMediaAccountSlug;
  url: string;
}

type SocialMediaAccountName = "Facebook" | "Twitch" | "Twitter";
type SocialMediaAccountSlug = "facebook" | "twitch" | "twitter";

export interface IPlayer {
  nick_name: string;
  deleted_at: string | null;
  id: string;
  active: boolean;
  first_name?: string | null;
  last_name?: string | null;
  images: IPlayerImages;
  roles: IPlayerRole[];
  country: ICountry;
  race: string | null;
  social_media_accounts: ISocialMediaAccount[];
}

interface IPlayerImages {
  default: string;
  thumbnail: string;
  fallback: boolean;
}

interface IPlayerRole {
  name: string;
  from: string;
  to: string | null;
}

// missing 3 regions
type CountryRegionName =
  "East Asia" |
  "Europe" |
  "North America" |
  "Oceania" |
  "South America" |
  "South East Asia" |
  "Western Asia";


export interface ITeamMatches {
  past: IEvent['id'][];
  future: IEvent['id'][];
  played: number;
  won: number;
  lost: number;
}

export type TQualified = 'Invited' | 'Qualified' | 'Not Qualified';
export type IPlayerRoleName = 'Hard Carry' | 'Mid' | 'Off-lane' | 'Support' | 'Hard Support';

// missing 3 regions
type CountryRegionShortName = "EA" | "EU" | "NA" | "OCE" | "SA" | "SEA" | "WA";

type CountryName = "Afghanistan" | "Albania" | "Algeria" | "American Samoa" | "Andorra" | "Angola" | "Anguilla" | "Antigua and Barbuda" | "Argentina" | "Armenia" | "Aruba" | "Australia" | "Austria" | "Azerbaijan" | "Bahamas" | "Bahrain" | "Bangladesh" | "Barbados" | "Belarus" | "Belgium" | "Belize" | "Benin" | "Bermuda" | "Bhutan" | "Bolivia" | "Bosnia and Herzegovina" | "Botswana" | "Brazil" | "Brunei Darussalam" | "Bulgaria" | "Burkina Faso" | "Burundi" | "Cambodia" | "Cameroon" | "Canada" | "Cape Verde" | "Central African Republic" | "Chad" | "Chile" | "China" | "Colombia" | "Comoros" | "Democratic Republic of the Congo" | "Congo" | "Costa Rica" | "Croatia" | "Cuba" | "Cyprus" | "Czech Republic" | "Denmark" | "Djibouti" | "Dominica" | "East Timor" | "Ecuador" | "Egypt" | "El Salvador" | "Equatorial Guinea" | "Eritrea" | "Estonia" | "Ethiopia" | "European Union" | "Faroe Islands" | "Fiji" | "Finland" | "France" | "French Guiana" | "French Polynesia" | "Gabon" | "Gambia" | "Georgia" | "Germany" | "Ghana" | "Great Britain" | "Greece" | "Greenland" | "Grenada" | "Guadeloupe" | "Guam" | "Guatemala" | "Guinea" | "Guinea-Bissau" | "Guyana" | "Haiti" | "Holy See" | "Honduras" | "Hong Kong" | "Hungary" | "Iceland" | "India" | "Indonesia" | "Iran" | "Iraq" | "Ireland" | "Israel" | "Italy" | "Ivory Coast" | "Jamaica" | "Japan" | "Jordan" | "Kazakhstan" | "Kenya" | "Kiribati" | "North Korea" | "South Korea" | "Kuwait" | "Kyrgyzstan" | "Lao" | "Latvia" | "Lebanon" | "Lesotho" | "Liberia" | "Libya" | "Liechtenstein" | "Lithuania" | "Luxembourg" | "Macau" | "Macedonia" | "Madagascar" | "Malawi" | "Malaysia" | "Maldives" | "Mali" | "Malta" | "Marshall Islands" | "Martinique" | "Mauritania" | "Mauritius" | "Mexico" | "Micronesia" | "Moldova" | "Monaco" | "Mongolia" | "Montenegro" | "Montserrat" | "Morocco" | "Mozambique" | "Myanmar" | "Namibia" | "Nauru" | "Nepal" | "Netherlands" | "Netherlands Antilles" | "New Caledonia" | "New Zealand" | "Nicaragua" | "Niger" | "Nigeria" | "North America" | "Northern Mariana Islands" | "Norway" | "Oman" | "Pakistan" | "Palau" | "Palestinian territories" | "Panama" | "Papua New Guinea" | "Paraguay" | "Peru" | "Philippines" | "Pitcairn Island" | "Poland" | "Portugal" | "Puerto Rico" | "Qatar" | "Reunion Island" | "Romania" | "Russia" | "Rwanda" | "Saint Kitts and Nevis" | "Saint Lucia" | "Saint Vincent and the Grenadines" | "Samoa" | "San Marino" | "Sao Tome and Principe" | "Saudi Arabia" | "Senegal" | "Serbia" | "Seychelles" | "Sierra Leone" | "Singapore" | "Slovakia (Slovak Republic)" | "Slovenia" | "Solomon Islands" | "Somalia" | "South Africa" | "Spain" | "Sri Lanka" | "Sudan" | "Suriname" | "Swaziland" | "Sweden" | "Switzerland" | "Syria" | "Taiwan" | "Tajikistan" | "Tanzania" | "Thailand" | "Tibet" | "Togo" | "Tonga" | "Trinidad and Tobago" | "Tunisia" | "Turkey" | "Turkmenistan" | "Tuvalu" | "Uganda" | "Ukraine" | "United Arab Emirates" | "United Kingdom" | "United States" | "Uruguay" | "Uzbekistan" | "Vanuatu" | "Vatican City State" | "Venezuela" | "Vietnam" | "Virgin Islands" | "Yemen" | "Zambia" | "Zimbabwe";

type CountryCode =
  "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "CI" | "HR" | "CU" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "EC" | "EG" | "EU" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP" | "JE" | "JO" | "KZ" | "KE" | "KI" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "AN" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "ZM" | "ZW";

export type TI18N = 'af' | 'af-ZA' | 'ar' | 'ar-AE' | 'ar-BH' | 'ar-DZ' | 'ar-EG' | 'ar-IQ' | 'ar-JO' | 'ar-KW' | 'ar-LB' | 'ar-LY' | 'ar-MA' | 'ar-OM' | 'ar-QA' | 'ar-SA' | 'ar-SY' | 'ar-TN' | 'ar-YE' | 'az' | 'az-AZ' | 'az-AZ' | 'be' | 'be-BY' | 'bg' | 'bg-BG' | 'bs-BA' | 'ca' | 'ca-ES' | 'cs' | 'cs-CZ' | 'cy' | 'cy-GB' | 'da' | 'da-DK' | 'de' | 'de-AT' | 'de-CH' | 'de-DE' | 'de-LI' | 'de-LU' | 'dv' | 'dv-MV' | 'el' | 'el-GR' | 'en' | 'en-AU' | 'en-BZ' | 'en-CA' | 'en-CB' | 'en-GB' | 'en-IE' | 'en-JM' | 'en-NZ' | 'en-PH' | 'en-TT' | 'en-US' | 'en-ZA' | 'en-ZW' | 'eo' | 'es' | 'es-AR' | 'es-BO' | 'es-CL' | 'es-CO' | 'es-CR' | 'es-DO' | 'es-EC' | 'es-ES' | 'es-ES' | 'es-GT' | 'es-HN' | 'es-MX' | 'es-NI' | 'es-PA' | 'es-PE' | 'es-PR' | 'es-PY' | 'es-SV' | 'es-UY' | 'es-VE' | 'et' | 'et-EE' | 'eu' | 'eu-ES' | 'fa' | 'fa-IR' | 'fi' | 'fi-FI' | 'fo' | 'fo-FO' | 'fr' | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR' | 'fr-LU' | 'fr-MC' | 'gl' | 'gl-ES' | 'gu' | 'gu-IN' | 'he' | 'he-IL' | 'hi' | 'hi-IN' | 'hr' | 'hr-BA' | 'hr-HR' | 'hu' | 'hu-HU' | 'hy' | 'hy-AM' | 'id' | 'id-ID' | 'is' | 'is-IS' | 'it' | 'it-CH' | 'it-IT' | 'ja' | 'ja-JP' | 'ka' | 'ka-GE' | 'kk' | 'kk-KZ' | 'kn' | 'kn-IN' | 'ko' | 'ko-KR' | 'kok' | 'kok-IN' | 'ky' | 'ky-KG' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'mi' | 'mi-NZ' | 'mk' | 'mk-MK' | 'mn' | 'mn-MN' | 'mr' | 'mr-IN' | 'ms' | 'ms-BN' | 'ms-MY' | 'mt' | 'mt-MT' | 'nb' | 'nb-NO' | 'nl' | 'nl-BE' | 'nl-NL' | 'nn-NO' | 'ns' | 'ns-ZA' | 'pa' | 'pa-IN' | 'pl' | 'pl-PL' | 'ps' | 'ps-AR' | 'pt' | 'pt-BR' | 'pt-PT' | 'qu' | 'qu-BO' | 'qu-EC' | 'qu-PE' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sa' | 'sa-IN' | 'se' | 'se-FI' | 'se-FI' | 'se-FI' | 'se-NO' | 'se-NO' | 'se-NO' | 'se-SE' | 'se-SE' | 'se-SE' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'sq' | 'sq-AL' | 'sr-BA' | 'sr-BA' | 'sr-SP' | 'sr-SP' | 'sv' | 'sv-FI' | 'sv-SE' | 'sw' | 'sw-KE' | 'syr' | 'syr-SY' | 'ta' | 'ta-IN' | 'te' | 'te-IN' | 'th' | 'th-TH' | 'tl' | 'tl-PH' | 'tn' | 'tn-ZA' | 'tr' | 'tr-TR' | 'tt' | 'tt-RU' | 'ts' | 'uk' | 'uk-UA' | 'ur' | 'ur-PK' | 'uz' | 'uz-UZ' | 'uz-UZ' | 'vi' | 'vi-VN' | 'xh' | 'xh-ZA' | 'zh' | 'zh-CN' | 'zh-HK' | 'zh-MO' | 'zh-SG' | 'zh-TW' | 'zu' | 'zu-ZA';