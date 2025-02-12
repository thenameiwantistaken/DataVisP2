// you can put util functions here if you want

export function getRegion(country) {
  // I must confess using the 'Team' property in the data instead of the nation one was a 
  // crucial mistake. How did I spend so much time compiling the information for this function? 
  // I will answer, in case any poor soul reading this code hopes to perform a post mortem
  // I kept telling myself I was almost done and it wouldn't take as long as switching over to the other property
  // would. Let me tell. I was wrong. I was deaaaaaaaaaaaaaad wrong.
  
  const regions = {
    'China': 'Asia',
    'Greece': 'Europe',
    'United States': 'Americas',
    'Australia': 'Oceania',
    'South Africa': 'Africa',
    'A North American Team': 'Americas',
    'Afghanistan': 'Asia',
    'Algeria': 'Africa',
    'Ali-Baba II': 'Europe',
    'Amateur Athletic Association': 'Europe',
    'Amstel Amsterdamn': 'Europe',
    'Ancora': 'Europe',
    'Angelita': 'Americas',
    'Antwerpia V': 'Europe',
    'Aphrodite': 'Americas', 
    'Argentina': 'Americas',
    'Argonaut Rowing Club': 'Americas',
    'Armenia': 'Asia',
    'Aschenbrodel': 'Europe',
    'Atalanta Boat Club-1': 'Americas',
    'Atalanta Boat Club-2': 'Americas', 
    'Atlanta': 'Americas',
    'Australasia': 'Oceania',
    'Australia': 'Oceania',
    'Australia-1': 'Oceania',
    'Australia/Great Britain': 'Oceania',
    'Austria': 'Europe',
    'Austria-1': 'Europe',
    'Austria-2': 'Europe',
    'Azerbaijan': 'NA',
    'BLO Polo Club, Rugby': 'Europe',
    'Baby-1': 'Europe',
    'Bagatelle Polo Club, Paris': 'Europe', 
    'Bahamas': 'Americas',
    'Bahrain': 'Asia',
    'Ballerina IV': 'Europe',
    'Barbados': 'Americas',
    'Barion/Bari-2': 'Europe',
    'Barrenjoey': 'Oceania',
    'Beatrijs III-1': 'Europe',
    'Belarus': 'Europe',
    'Belgium': 'Europe',
    'Belgium-1': 'Europe',
    'Bem II': 'Europe',
    'Bera': 'Europe',
    'Berliner Ruderclub': 'Europe',
    'Berliner Ruderverein von 1876-2': 'Europe',
    'Bermuda': 'Americas',
    'Bingo': 'Americas',
    'Bissbi': 'Europe',
    'Bluebottle': 'Europe',
    'Bohemia': 'Europe', 
    'Bohemia/Great Britain': 'Europe',
    'Bona Fide': 'Europe',
    'Bonaparte': 'Europe',
    'Bonzo': 'Europe',
    'Boreas-2': 'Europe', 
    'Boston Archers': 'Americas',
    'Botswana': 'Africa',
    'Brazil': 'Americas',
    'Brazil-1': 'Americas',
    'Brazil-2': 'Americas',
    'Brussels Swimming and Water Polo Club': 'Europe',
    'Brynhild-2': 'Europe',
    'Bucintoro Venezia': 'Europe',
    'Bucintoro Venezia-1': 'Europe',
    'Bulgaria': 'Europe',
    'Buraddoo': 'Oceania',
    'Burundi': 'Africa',
    'Cambridge University Boat Club-2': 'Europe',
    'Cameroon': 'Africa',
    'Camille': 'Europe',
    'Canada-1': 'Americas',
    'Canada-2': 'Americas',
    'Caprice': 'Americas', 
    'Carabinier-15': 'Europe',
    'Central Turnverein, Chicago': 'Americas',
    'Century Boat Club-1': 'Americas',
    'Cercle de l\'Aviron Roubaix-4': 'Europe',
    'Chicago Athletic Association': 'Americas',
    'Chicago Athletic Association-2': 'Americas',
    'Chile': 'Americas',
    'China':'Asia',
    'China-1':'Asia',
    'China-2':'Asia',
    'China-3':'Asia',
    'Chinese Taipei': 'Asia',
    'Christian Brothers\' College-1': 'Americas',
    'Chuckles': 'Europe',
    'Cicely-1': 'Europe', 
    'Cincinnati Archers': 'Americas',
    'Clearwater': 'Europe', 
    'Club Nautique de Lyon-2': 'Europe',
    'Cobweb-1': 'Europe',
    'Colombia': 'Americas',
    'Comanche': 'Americas',
    'Complex II': 'Americas',
    'Cornwall': 'Europe',
    'Costa Rica': 'Americas',
    'Cote d\'Ivoire': 'Africa',
    'Crabe II-1': 'Europe',
    'Crabe II-4': 'Europe',
    'Croatia': 'Euroep',
    'Cuba': 'Americas',
    'Cyprus': 'Europe',
    'Czech Republic': 'Europe',
    'Czech Republic-1': 'Europe',
    'Czechoslovakia': 'Europe',
    'Czechoslovakia-1': 'Europe',
    'Denmark': 'Europe',
    'Denmark-1': 'Europe',
    'Denmark-2': 'Europe',
    'Denmark/Sweden': 'Europe',
    'Deutscher Schwimm Verband Berlin': 'Europe',
    'Devon and Somerset Wanderers': 'Europe',
    'Digby': 'Oceania',
    'Djibouti': 'Africa',
    'Djinn': 'Americas',
    'Dominican Republic': 'Americas',
    'Don Schufro': 'Europe',
    'Dormy-1': 'Europe',
    'East Germany': 'Europe',
    'East Germany-1': 'Europe',
    'East Germany-2': 'Europe',
    'Ecuador': 'Americas',
    'Edelweiss II-1': 'Europe',
    'Egypt': 'Africa',
    'Eleda': 'Europe',
    'Elisabeth V': 'Europe',
    'Elisabeth X': 'Europe',
    'Elsie': 'Europe',
    'Elvis Va': 'Europe',
    'Emily': 'Europe',
    'Encore': 'Europe',
    'England': 'Europe',
    'England-1': 'Europe',
    'Eritrea': 'Africa',
    'Erna Signe': 'Europe',
    'Espadarte': 'Europe',
    'Esterel-1': 'Europe',
    'Estonia': 'Europe',
    'Ethiopia': 'Africa',
    'Ethnikos Gymnastikos Syllogos': 'Europe',
    'Falcon IV': 'Oceania',
    'Fantlet-7': 'Europe',
    'Favorite Hammonia-3': 'Europe',
    'Favorite-1': 'Europe',
    'Femur-1': 'Europe',
    'Fiji': 'Oceania',
    'Finland': 'Europe', 
    'Formosa': 'Americas',
    'Fornebo': 'Europe',
    'Foxhunters Hurlingham': 'Europe',
    'France': 'Europe',
    'France-1': 'Europe',
    'France-2': 'Europe',
    'France-3': 'Europe',
    'France/Great Britain': 'Europe',
    'Frankfurt Club': 'Europe',
    'Frimousse': 'Europe',
    'Gabon': 'Africa',
    'Gallant': 'Americas',
    'Gallia II': 'Europe',
    'Galt Football Club': 'Americas',
    'Gem': 'Americas',
    'Gem IV': 'Americas',
    'Georgia': 'Asia',
    'Germania II': 'Europe',
    'Germania Ruder Club, Hamburg-2': 'Europe',
    'Germany': 'Europe',
    'Germany-1': 'Europe',
    'Germany-2': 'Europe',
    'Ghana': 'Africa',
    'Gitana-2': 'Europe',
    'Great Britain': 'Europe',
    'Great Britain-1': 'Europe',
    'Great Britain-2': 'Europe',
    'Great Britain-3': 'Europe',
    'Great Britain/Germany': 'Europe',
    'Greece': 'Europe',
    'Greece-1': 'Europe',
    'Greece-2': 'Europe',
    'Grenada': 'Americas',
    'Guatemala': 'Americas',
    'Gustel X': 'Europe',
    'Guyana': 'Americas',
    'Guyoni': 'Europe',
    'Gwendoline-2': 'Europe',
    'Gyrinus-1': 'Europe',
    'Haiti': 'Americas',
    'Heatherbell': 'Europe',
    'Heira II': 'Europe',
    'Hera-1': 'Europe',
    'Heroine': 'Europe',
    'Hi-Hi': 'Europe',
    'Hilarius': 'Americas',
    'Hojwa': 'Europe',
    'Hollandia': 'Europe',
    'Hong Kong': 'Asia',
    'Hong Kong-2': 'Asia',
    'Humbug V': 'Europe',
    'Hungary': 'Europe',
    'Hungary-1': 'Europe',
    'Hurlingham-2': 'Europe',
    'Iceland': 'Europe',
    'Independent Rowing Club-3': 'Americas',
    'India': 'Asia',
    'Individual Olympic Athletes': 'NA',
    'Indonesia': 'Oceania',
    'Indonesia-1': 'Oceania',
    'Iran': 'Asia',
    'Iraq': 'Asia',
    'Ireland': 'Europe',
    'Ireland-2': 'Europe',
    'Ireland-3': 'Europe',
    'Irene': 'Europe',
    'Israel': 'Asia',
    'Italia': 'Europe',
    'Italy': 'Europe',
    'Italy-1': 'Europe',
    'Italy-2': 'Europe',
    'Jamaica': 'Americas',
    'Japan': 'Asia',
    'Japan-1': 'Asia',
    'Jest': 'Oceania',
    'Jo': 'Europe',
    'Jordan': 'Asia',
    'Joy': 'Europe',
    'Jupiter': 'Americas',
    'K Division Metropolitan Police Team-3': 'Europe',
    'Kathleen': 'Americas',
    'Kazakhstan': 'NA',
    'Kenya': 'Africa',
    'Kerstin': 'Europe',
    'Kerstin-1': 'Europe',
    'Kitty-1': 'Europe',
    'Kosovo': 'Europe',
    'Kristiania Roklub-1': 'Europe',
    'Kullan': 'Europe',
    'Kurush II': 'Americas',
    'Kuwait': 'Asia',
    'Kyrgyzstan': 'Asia',
    'L\'Aile VI': 'Europe',
    'Lady C': 'Europe',
    'Lalage': 'Europe',
    'Large boat, Central Naval Prep School "Poros"-1': 'Europe',
    'Latvia': 'Europe',
    'Latvia-1': 'Europe',
    'Laurea-1': 'Europe',
    'Leander Club #1-1': 'Europe',
    'Leander Club #2-2': 'Europe',
    'Leander Club-1': 'Europe',
    'Leander Club-2': 'Europe',
    'Lebanon': 'Asia',
    'Lerina': 'Europe',
    'Libellule de Paris': 'Europe',
    'Liechtenstein': 'Europe',
    'Life boat naval ship "Spetsai"-1': 'Americas',
    'Lithuania': 'Europe',
    'Liverpool Police Team-2': 'Europe',
    'Llanoria': 'Americas',
    'London City Police-1': 'Europe',
    'Lucky Girl-1': 'Europe',
    'Ludwigshafener Ruder Verein-1': 'Europe',
    'Ludwigshafener Ruder Verein': 'Europe',
    'Lully II': 'Europe',
    'Luxembourg': 'Europe',
    'Lyn-2': 'Europe',
    'Ma\'Lindo': 'Europe',
    'Mac Miche': 'Europe',
    'Macedonia': 'Europe',
    'Macky VI': 'Europe',
    'Magda IX': 'Europe',
    'Magdalen College Boat Club-1': 'Europe',
    'Malaysia': 'Asia',
    'Malaysia-1': 'Asia',
    'Malaysia-2': 'Asia',
    'Margaret': 'Americas',
    'Marinai della nave da guerra "Varese"': 'Europe',
    'Marmi II-1': 'Europe',
    'Martha-1': 'Europe',
    'Mascotte': 'Europe',
    'Mauritius': 'Africa',
    'May Be': 'Europe',
    'Merope': 'Europe',
    'Merope III': 'Europe',
    'Mexico': 'Americas',
    'Mignon-3': 'Europe',
    'Milwaukee Athletic Club-1': 'Americas',
    'Minerva Amsterdam': 'Europe',
    'Minotaur': 'Americas',
    'Missouri Athletic Club-3': 'Europe',
    'Mohawk Indians-2': 'Americas',
    'Moldova': 'Europe',
    'Monaco': 'Europe',
    'Mongolia':'Asia',
    'Montenegro':'Europe',
    'Morocco': 'Africa',
    'Moseley Wanderers': 'Europe',
    'Mosk II': 'Europe',
    'Mouchette-2': 'Europe',
    'Mound City Rowing Club-2': 'Americas',
    'Mozambique': 'Africa', 
    'Mutafo': 'Europe',
    'Nadine': 'Europe',
    'Namibia': 'Africa',
    'Namoussa': 'Europe',
    'Nepal': 'Europe',
    'Netherlands': 'Europe',
    'Netherlands Antilles' :'Europe',
    'Netherlands-1': 'Europe',
    'New College, Oxford-2' :'Europe',
    'New York Athletic Club': 'Americas',
    'New York Athletic Club#1-1': 'Americas',
    'New York Athletic Club-1': 'Americas',
    'New York Turnverein, New York': 'Americas',
    'New Zealand': 'Oceania',
    'Niger': 'Africa',
    'Nigeria': 'Africa',
    'Nina': 'Europe',
    'Nina Claire-2': 'Europe',
    'Nirefs': 'Europe',
    'Norna': 'Europe',
    'North Korea': 'Asia',
    'North Korea-1': 'Asia',
    'Norway': 'Europe',
    'Nrnberg': 'Europe',
    'Nurdug II': 'Europe',
    'Nykjbings paa Falster': 'Europe',
    'Olle': 'NA',
    'Omas Helliniki P. S.': 'Europe',
    'Oranje': 'Europe',
    'Ormsund Roklub-2': 'Europe',
    'Osborne Swimming Club, Manchester': 'Europe',
    'Pakistan': 'Asia',
    'Pan': 'NA',
    'Panama': 'Americas',
    'Pandora': 'Oceania',
    'Paraguay': 'Americas',
    'Peru': 'Americas', 
    'Phalainis ton Thorichtou "Hydra"-2': 'Europe',
    'Philadelphia Turngemeinde, Philadelphia': 'Americas',
    'Philippines': 'Asia',
    'Pistoja/Firenze': 'Europe',
    'Poland': 'Europe',
    'Poland-1': 'Europe',
    'Polyteknisk Roklub-1': 'Europe', 
    'Portugal': 'Europe',
    'Potomac Archers': 'Americas',
    'Potsdam': 'Europe',
    'Puerto Rico': 'Americas',
    'Pupilles de Neptune de Lille #2-1': 'Europe',
    'Pupilles de Neptune de Lille-1': 'Europe',
    'Qatar': 'Asia',
    'Quand-Mme-2': 'Europe',
    'Racing Club de France': 'Europe',
    'Ralia': 'NA',
    'Ravenswood Boat Club-2': 'Americas',
    'Roddklubben af 1912-1': 'Europe',
    'Roehampton-1': 'Europe',
    'Romania': 'Europe',
    'Romania-1': 'Europe',
    'Rose Pompon': 'Europe',
    'Rostock': 'Europe',
    'Rowing Club Castillon-3': 'Europe',
    'Royal Club Nautique de Gand': 'Europe',
    'Rush V': 'Europe',
    'Rush VII': 'Europe',
    'Russia': 'Europe',
    'Russia-1': 'Europe',
    'Russia-2': 'Europe',
    'Salinero': 'Europe',
    'Sans Atout-1': 'Europe',
    'Santa Maria': 'Europe',
    'Sarcelle-3': 'Europe',
    'Satchmo': 'Europe',
    'Saudi Arabia': 'Asia',
    'Scamasaxe-2': 'Europe',
    'Scamasaxe-3': 'Europe',
    'Scotia': 'Europe',
    'Scotland-3': 'Europe',
    'Seawanhaka Boat Club-1': 'Americas',
    'Senegal': 'Africa',
    'Serbia': 'Europe',
    'Serbia and Montenegro': 'Europe',
    'Shrew II': 'Americas',
    'Sif': 'Europe',
    'Sildra-1': 'Europe',
    'Silja': 'Europe',
    'Singapore': 'Asia',
    'Sirene': 'Europe',
    'Skum': 'Europe',
    'Slaghoken': 'Europe',
    'Slaghoken II': 'Europe',
    'Slovakia': 'Europe',
    'Slovenia': 'Europe',
    'Smyrna': 'Europe',
    'Snap': 'Europe',
    'Societ Nautique de la Marne-1': 'Europe',
    'Socit Nautique de Bayonne-1': 'Europe',
    'Socit Nautique de Bayonne-2': 'Europe',
    'Socit Nautique de la Basse Seine-1': 'Europe',
    'Sorais-2': 'Europe',
    'South Africa': 'Africa',
    'South Korea': 'Asia',
    'South Korea-1': 'Asia',
    'South Korea-2': 'Asia',
    'Soviet Union': 'Europe',
    'Spain': 'Europe',
    'Spain-1': 'Europe',
    'Spain-2': 'Europe',
    'Sri Lanka': 'Asia',
    'St. Louis Amateur Athletic Association': 'Americas',
    'St. Louis Southwest Turnverein #1-2': 'Americas',
    'St. Louis Southwest Turnverein #2-3': 'Americas',
    'St. Rose-2': 'Americas',
    'Starita': 'Europe', 
    'Stella-2': 'Europe',
    'Sudan': 'Africa',
    'Sunrise': 'Europe',
    'Sunshine': 'Europe',
    'Suriname': 'Europe',
    'Sweden': 'Europe',
    'Sweden-1': 'Europe',
    'Sweden-2': 'Europe',
    'Sweden-3': 'Europe',
    'Swedish Star': 'Europe',
    'Swift': 'Europe',
    'Switzerland': 'Europe',
    'Switzerland-1': 'Europe',
    'Switzerland-2': 'Europe',
    'Sylvia': 'Europe',
    'Symphony': 'Europe',
    'Syria': 'Asia',
    'Taifun': 'Europe',
    'Tajikistan': 'Asia',
    'Tan-Fe-Pah': 'Europe',
    'Tango': 'Europe',
    'Tanzania': 'Africa',
    'Thailand': 'Asia',
    'Thames Rowing Club': 'Europe',
    'Thessalonki-1': 'Europe',
    'Tip': 'Europe',
    'Togo': 'Africa',
    'Tonga': 'Oceania',
    'Tornado': 'Europe',
    'Toronto Argonauts': 'Europe',
    'Trans-Mississippi Golf Association-2': 'Americas',
    'Trinidad and Tobago': 'South America',
    'Tritons Lillois-2': 'Europe',
    'Tunisia': 'Africa',
    'Turkey': 'Asia',
    'Turquoise-1': 'Europe',
    'Tutti V': 'Europe',
    'USFSA': 'Europe',
    'Uganda': 'Europe',
    'Ukraine': 'Europe',
    'Ukraine-1': 'Europe',
    'Unified Team': 'Europe',
    'Unified Team-1': 'Europe',
    'Unified Team-2': 'Europe',
    'Union des Socits Franais de Sports Athletiques': 'Europe',
    'United Arab Emirates': 'Asia',
    'United Arab Republic': 'Africa',
    'United States': 'Americas',
    'United States Golf Association-3': 'Americas',
    'United States Virgin Islands': 'Americas',
    'United States-1': 'Americas',
    'United States-2': 'Americas',
    'United States-3': 'Americas',
    'United States-4': 'Americas',
    'United States/France': 'Americas',
    'United States/Great Britain': 'Europe',
    'Univ. of Brussels': 'Europe',
    'Upton Park FC': 'Europe',
    'Uruguay': 'Americas',
    'Uzbekistan': 'Asia',
    'Venezuela': 'Americas',
    'Venilia': 'Europe',
    'Vesper Boat Club': 'Americas',
    'Vietnam': 'Asia',
    'Vinga-1': 'Europe',
    'Vision': 'Europe',
    'Wales-4': 'Europe',
    'Wannsee': 'Europe',
    'Web II': 'Europe',
    'West Germany': 'Europe',
    'West Germany-1': 'Europe',
    'West Germany-2': 'Europe',
    'West Indies Federation': 'Americas',
    'Western Golf Association-1': 'Americas',
    'Western Rowing Club-3': 'Americas',
    'White Lady': 'Europe',
    'Widgeon': 'Americas',
    'Willem-Six': 'Europe',
    'Winnipeg Shamrocks-1': 'Americas',
    'Yugoslavia': 'Europe',
    'Zambia': 'Africa',
    'Zimbabwe': 'Africa',
    'Zut': 'Europe'
  };

  if (!regions[country]) return 'NA';
  return regions[country];
}
