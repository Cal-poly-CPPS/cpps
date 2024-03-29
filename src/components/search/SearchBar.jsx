import React, { useState, useEffect }  from 'react';
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css"
import "../prof.json"
import SearchBarCom from './SearchBarCom';


const SearchBar2 = () => {
  const options = [
    "Laurie Riggs",
    "Patricia Hale",
    "David Speak",
    "Chung Lee",
    "Berit Givens",
    "Shahnaz Lotfipour",
    "Y Chang",
    "Sarah Lorenzen",
    "Jarmila Polet",
    "C Jones",
    "Bruce Brown",
    "Yuanjie He",
    "Lois Hoyt",
    "Gwen Urey",
    "Nina Abramzon",
    "Salomon Oldak",
    "A Wohlcke",
    "Wei Yu",
    "Bruce Kennedy",
    "Michael Fox",
    "Linda Tucker",
    "David Marcroft",
    "Susan Mulley",
    "Holly Greene",
    "Chen Chuan-Chiang",
    "Meihua Koo",
    "Mingheng LI",
    "Vilupanur Ravi",
    "Alyssa Lang",
    "Kenneth Hansen",
    "Laura Chase",
    "arbara Gill-Mayberry",
    "Stephen O'Sullivan",
    "Hassan Damerji",
    "Alvin Lappin",
    "John Caine",
    "John Touhey",
    "Chi Hwang",
    "Aubrey Fine",
    "Fang Tang",
    "Valerie Mellano",
    "Mohammad Danesh",
    "Linda Tucker",
    "Sharyn Fisk",
    "Rickey Badua",
    "Alejandro Morales",
    "Gina Egan",
    "Jeremy Claisse",
    "Chris Johnson",
    "Douglas Kent",
    "Farhana Abedin",
    "Rachel Flores",
    "Joan Leong",
    "Linda Tucker",
    "Tiffany Smith",
    "Paul Hottinger",
    "Jayson Smith",
    "Gabriel Kuri",
    "Carlos Candelas",
    "Mary Wood",
    "Gabriele Plickert",
    "Priti Saxena",
    "Namakkal Krishnan",
    "Dianne Trinh",
    "Joanne Sohn",
    "Yan Liu",
    "Paul Knopf",
    "Brady Collins",
    "Eric Hutchins",
    "Anthony Acock",
    "Victor Dosti Dosti",
    "Jacob Eagleton",
    "Steven Preston",
    "Yingfei Chen",
    "Thomas Huang",
    "Lawrence Chan",
    "Anthony Powell",
    "Yasser Salem",
    "Wendy Pylko",
    "Pejman Akbari",
    "Sangeeta Shrivastava",
    "Zekeriya Yazicioglu",
    "Eileen Wallis",
    "Makalerina Tambunan",
    "Huseyin Ucar",
    "Abdul Rashidi",
    "Shu Shang",
    "Jeyoung Woo",
    "Kevin Anderson",
    "Don Edberg",
    "Krishna Sigdel",
    "Patricia Steet",
    "Frank Bryant",
    "Anne Cawley",
    "Jason Chang",
    "Manuchehr Aminian",
    "Sungsik Yoon",
    "Alyssa Kermad",
    "Anton Schneider",
    "Samer Alzubaidi",
    "Richard Molina",
    "Weimin Li",
    "Aaron Derosa",
    "Martin Young",
    "Timothy Kohut",
    "Juan Nava",
    "Sharonda Bishop",
    "Melody Wallace",
    "Jessie Vallejo",
    "Fereshteh Amin",
    "Lloyd Lee",
    "Leonardo Yuan",
    "Majed Muhtaseb",
    "Mohamed Ibrahim",
    "Gabriel Granco",
    "Klarize Medenilla",
    "Aspet Gharakhanian",
    "James Blair",
    "Jie Sun",
    "Mitchell De Jarnett",
    "Melanie Davis",
    "Nancy Kyes",
    "Jennifer Switkes",
    "Wajeeha Young",
    "James Sturges",
    "Arundhati Kumar",
    "Rachel Van",
    "David Cheetham",
    "David Gershman",
    "Maureen Hickey",
    "Jorge Camarena",
    "Claire Whang",
    "Jae Myong Lee",
    "Seyed Tabaei",
    "Christopher McNamara",
    "Amanda Podany",
    "Lorena Garcia",
    "Andrew Murphy",
    "Dianne Trinh",
    "da Vazquez De Diriye",
    "Ahmad Sohrabian",
    "Ron Pike",
    "Nell Horowitz",
    "Yishuang Li",
    "Elke Tetschner",
    "Cesar Larriva",
    "Juintow Lin",
    "John Taylor",
    "Armando Fuentes",
    "ohdan Schatschneider",
    "Michael Millar",
    "Eduardo Corpuz",
    "Devika Maini",
    "Vanessa Kettering",
    "Hilary Haakenson",
    "Xin Liu",
    "John Wallace",
    "Juan Canedo",
    "Paul Beardsley",
    "John Wyatt",
    "Kim Gadlin",
    "Jiahui Yao",
    "William Molina",
    "Xiaohui Xu",
    "Alan Moss",
    "Anthony Mittskus",
    "hristos Stathopoulos",
    "Hoon Kim",
    "David Contreras",
    "Wei Bidlack",
    "Rudolph Headley-El",
    "Juan Medina",
    "Gilbert Young",
    "Peter Hanink",
    "Taylor Edwards",
    "Scott Kim",
    "Joseph Tran",
    "John Lloyd",
    "Jun Myers",
    "Reza Lakeh",
    "James Kang",
    "Zining Yang",
    "Sarah Huff",
    "Khara Cloutier",
    "Robert Alexander",
    "Jodye Selco",
    "Peter Hii",
    "Giuseppe Lomiento",
    "Rachael Hill",
    "Rakesh Mogul",
    "Sarah Harano",
    "Poonam Banerjee",
    "Megan Good",
    "Mehrdad Koohikamali",
    "Dana Marshall",
    "Lesley Butler",
    "Lily Nguyen",
    "Trayan Kushev",
    "Lynne Nagle",
    "Alison Baker",
    "Shelton Murinda",
    "Donald Kraemer",
    "Eeman At-Taras",
    "Douglas Durrant",
    "Damion Hill",
    "Lin Tan",
    "Deborah Brazeal",
    "Aaron Fox",
    "Hassan Hefzi",
    "Thomas Luer",
    "Ali Oudich",
    "enda Fernandez Lango",
    "Tim Rogstad",
    "Lawrance Edwards",
    "Cole Frazier",
    "Comron Nouri",
    "Artour Aslanian",
    "Abhishek Tiwari",
    "Michelle SooHoo",
    "Brian Newman",
    "Marc Scarcelli",
    "Matthew Mulyanto",
    "Scott Little",
    "Kristen Conway-Gomez",
    "Peter Olson",
    "vetpillai Sivathasan",
    "Arielle Leonard",
    "Kentaro Lunn",
    "Siamak Yazdani",
    "Melissa Flicker",
    "Anthony Orlando",
    "Moe Rabea",
    "Mohamed Rafiquzzaman",
    "Iman Hemmatian",
    "Peter Ross",
    "Kevin Autry",
    "Min Yoo",
    "Daniel Lewis",
    "Robert Blumenfeld",
    "Mary Anne Mendoza",
    "Glenn Kageyama",
    "Bonny Burns-Whitmore",
    "Saadia McLeod",
    "Frecia Gonzalez",
    "Ken Hansen",
    "Anna Soper",
    "Dale Turner",
    "Carlos Navarrete",
    "Alexander Small",
    "Kevin Moore",
    "Elif Ozkaya",
    "Anas Eddin",
    "Candice Huynh",
    "E Wallis",
    "Guy Zimmerman",
    "Bernardo Solano",
    "Ghada Gad",
    "Chie Ishihara",
    "Margarita Rossoni",
    "Kevin Carpenter",
    "Stella Manley",
    "Lei Li",
    "MinHyuk Kwon",
    "Nathan Wagner",
    "Michael McKenna",
    "Victor Okhuysen",
    "Yizhe Chang",
    "Markus Eger",
    "Kathryn Daniels",
    "Hussain Zaidi",
    "Jeffrey Roy",
    "Mohamed Gomaa",
    "Olga Di Franco",
    "Lara Killick",
    "Ericsson Marin",
    "Chitra Dabas",
    "Nina Briggs",
    "Barry Lehrman",
    "Shant Danielian",
    "Kwon Mun",
    "Joseph McHugh",
    "Thanga Dasamoni",
    "Rennie Tang",
    "Deborah Korneff",
    "Jonathan Bell",
    "Ivana Cvetkovic",
    "Luca Struble",
    "Hyoung Kim",
    "Hyoung Soo Kim",
    "ntonia Castro-Graham",
    "Michael Kachingwe",
    "Miachelle Andrade",
    "Atsushi Kukita",
    "John Caffrey",
    "Xu Yang",
    "Anjana Narayan",
    "Denise Garretson",
    "Corwin Aragon",
    "Christina Putrov",
    "Suzanne Scholz",
    "Liliane Fucaloro",
    "Sean Jasso",
    "Carsten Lange",
    "Shohreh Abdolrahimi",
    "Jennifer Bjerke",
    "Georgia Mickey",
    "Edmond Wu",
    "Lise Helene Smith",
    "Rebecca Franko",
    "Phyllis Hosey",
    "Marci Katznelson",
    "James Ciment",
    "Alexander Novack",
    "Qing Ryan",
    "Craig McLaren",
    "Philip Pregill",
    "David Chadd",
    "Hilary Haakenson",
    "Jose Juarez",
    "Silvia Cruz-Pobocik",
    "Jennifer Hsia",
    "CheukKeung Yam",
    "Denise Kennedy",
    "Pablo Torres",
    "Li Ge",
    "Thomas Ketseoglou",
    "Nicole Hammack",
    "Maryam Tngrian",
    "Mariusz Ozminkowski",
    "Stephen Campbell",
    "Caryn Gerstenberger",
    "Edward Watson",
    "Shu Shang",
    "William Lickiss",
    "Edwin Rodriguez",
    "Kevin Grell",
    "David DeVore",
    "Mohamed Rafiquzzaman",
    "Michael McKail",
    "Zeynep Aytug",
    "Richard Hyslop",
    "Thomas Osberger",
    "Javad Kashefi",
    "Gerd Welke",
    "Anthony Ocampo",
    "Erica Morales",
    "Nancy Fan",
    "Darryl Henry",
    "Magdy Farag",
    "James Rietveld",
    "Lucy Liu",
    "Steve Boddeker",
    "Masayuki Gonda",
    "Scott Galloway",
    "Zahra Sotoudeh",
    "Steven Dobbs",
    "Elias Wilson",
    "Tiffany Lim",
    "Marry Jones",
    "Denis Iurchenko",
    "Linda Reardan",
    "Christine Wieseler",
    "Mario Guerrero",
    "Leanne Powers",
    "Rachel Baumsteiger",
    "Kathryn Doiron",
    "Jocelyn Tucker",
    "Ray Hudson",
    "Michael Assumma",
    "Jodye Selco",
    "Mark Generous",
    "ssimiliano Repupilli",
    "Kinga Matusik",
    "Joseph Dietrich",
    "Ann Zhang",
    "Maryam Crogman",
    "Joshua Zeeman",
    "Zakaria Naiyer",
    "arta Albala Pelegrin",
    "Ryan Shiotsuki",
    "Wan Yang",
    "Amy Dao",
    "Han Nguyen",
    "Jae Jung",
    "Wenge Zhu",
    "Mercedes Vargas",
    "Joyce Hesselgrave",
    "Maha Ghosn",
    "Alberto Sahagun",
    "David Edens",
    "Christopher Dean",
    "Tarique Hossain",
    "Antonio Gallardo",
    "Hien Nguyen",
    "Andrew Aleman",
    "Devon Hackelton",
    "Stephen Osborn",
    "Rui Bautista",
    "Esther Vogel",
    "John Miller",
    "ana Foster-Greenwood",
    "Richard Drake",
    "Amir Rezaei",
    "Ghada Mouawad",
    "Charles Bennett",
    "Lori Stuntz",
    "Liviu Oniciuc",
    "YuZhong Zhang",
    "Cherng-Shii Yeh",
    "Patricia Worsham",
    "Verica Clark",
    "Sook Kim",
    "Randy Stein",
    "Cristine Chastain",
    "Shawnika Johnson",
    "Mohamed Aly",
    "Jasmin Ilkay",
    "Seema Shah-Fairbank",
    "Nathanael Iverson",
    "Mei Klein",
    "Parham Piroozan",
    "Kent Dickson",
    "Alexandra Auslander",
    "Deirdre Carlock",
    "Lorne Platt",
    "Punkaj Gupta",
    "Danielle Garland",
    "Bryan Sullivan",
    "Sander Eller",
    "Anthony Kim",
    "Stephanie McKinney",
    "Liza Harwell",
    "Sophia Shahin",
    "Elizabeth Scordato",
    "Lorena Turner",
    "Stephen James",
    "Srikanth Venkatesan",
    "Sangho Lee",
    "Hatim Mouissa",
    "Denisa Chatman-Riley",
    "John Korah",
    "Hyeryung Hwang",
    "James Oakley",
    "Mohammad Izadi",
    "Johanna Garcia",
    "Hans Tolksdorf",
    "Naveen Hyder",
    "Fei Kang",
    "Victor Cardona",
    "Wayne Snyder",
    "Juliana Fuqua",
    "Jocelyn Pacleb",
    "Jennifer Doucet",
    "Monica Montes",
    "Callie Burnley",
    "Felipe Perez",
    "Erica Hummel",
    "Trina Nguyen",
    "Ann Phong",
    "Alberto Salamanca",
    "Kumar Jata",
    "Rich Kallan",
    "Kimberly Gadlin",
    "Han Dang",
    "Bonnie Thorne",
    "Jung Won Mun",
    "Andrew Pagnon",
    "Metzker Andrea",
    "Rosie Nawpar",
    "Libo Sun",
    "Megan Hoppock",
    "arbara Gill-Mayberry",
    "Dragos Andrei",
    "Marguerite Mulhall",
    "Kristy K Hodson",
    "Sean Christopher",
    "Ryan Lee",
    "Douglas Cooney",
    "Ciara Knight",
    "Claudia Wainer",
    "Matthew Aivazian",
    "Ha Le",
    "Zhen Yu",
    "Alejandra Parise",
    "Michi Fu",
    "Valerie Nichols",
    "Andrew Davis",
    "Alane Daugherty",
    "John Sylvain",
    "Hao Ji",
    "Nian Lee",
    "Brian Kim",
    "Lisa Fenderson",
    "Jonathan Bell",
    "Isaac Schankler",
    "Janine Riveire",
    "Kristin Tamayo",
    "Hovel Babikian",
    "Robert Nyenhuis",
    "Wendy Dixon",
    "Gina Crome",
    "Carlos Gutierrez",
    "Lesley Grant",
    "Marie Lamothe",
    "Joseph Rhee",
    "Darren Gravelle",
    "Asbjorn Egir",
    "Aaron Roy",
    "Mark Williams",
    "Carina Giorgi",
    "Rennard Piamonte",
    "Mary Woods",
    "Sandra Dixon",
    "Hoa Lam",
    "Alberta Miranda",
    "John Ngo",
    "Holly Hart",
    "Aileen Lau",
    "Jeanne Marshall",
    "Jeffrey Marshall",
    "Maya Stovall",
    "Cody Trojan",
    "Martin Nakashima",
    "Joseph Alas",
    "Jill Shirley",
    "Amber Freeland",
    "saneh Nouri Houshyar",
    "Jin Sung Cho",
    "Hassan Kasfy",
    "Mirzaei Shokoufeh",
    "Claudine Papillon",
    "Linchi Kwok",
    "Thomas Keith",
    "Melissa Aaron",
    "Whitney Mannies",
    "hristopher Stoughton",
    "Zaw Naing",
    "Kathryn McCulloch",
    "Ayana Jamieson",
    "Jorge Botana Alcalde",
    "Lee Schuh",
    "Moosgar Borieux",
    "Wendy Bendoni",
    "Leandro Recova",
    "Simeng Li",
    "Indira Guzman",
    "Edward Garcia",
    "Jae Jung",
    "Jose Rocha-Rangel",
    "Jose Martinez",
    "Suresh Ganapathy",
    "Charlie Royas",
    "Reza Karimi",
    "Katie Schorr",
    "Jason Baumwirt",
    "Jason Ear",
    "Behnam Samareh",
    "Philippe Duhart",
    "Shayda Kafai",
    "Pinar Tremblay",
    "Dewey Hall",
    "Tannaz Damavandi",
    "Thanh Nguyen",
    "Farouk Darweesh",
    "Juliann Wolfgram",
    "Leslie Sullivan",
    "Sidney Robinson",
    "Nirmal Sethia",
    "Kristine Fish",
    "Karlyn Griffith",
    "Uyen Nguyen",
    "Marissa Pitts",
    "Jennifer Mahlke",
    "Kimberley Miller",
    "Ron Heimler",
    "Saeed Monemi",
    "Chelsi Dimm",
    "Nancy Merlino",
    "Hong-Sune Chiang",
    "Timothy Cortina",
    "Nathan Tung",
    "Walter Christensen",
    "Dorothy Farias",
    "Jill Nemiro",
    "Kassem Al-Azem",
    "Steve Steve deWalden",
    "Jessica Journeay",
    "Arshang Ferdosian",
    "Brian Foster",
    "Donna Williamshill",
    "Laura Pohopien",
    "Tara Sethia",
    "Jessica Perez",
    "Ali Ozer",
    "Tarek Elsharhawy",
    "Henry Rodriguez",
    "Tony Lin",
    "Tai Kieu",
    "Andrew Steele",
    "Babak Boloury Azad",
    "Hassan Rejali",
    "Mahnaz Nargesi",
    "Hyungchul Han",
    "Ioana Mihaila",
    "Michael Nasab",
    "Dennis Quinn",
    "Stephen Elias",
    "Paul Nissenson",
    "Katie Horvath",
    "Nancy Quintanilla",
    "Mengjiao Du",
    "Jacob Moore",
    "Ertan Salik",
    "Huyen Le",
    "Guadalupe Bernal",
    "Stacy Brown",
    "Brittney Crawford",
    "Alnald Javier",
    "Diana Linden",
    "Mzilikazi Kone",
    "Christos Tzounis",
    "Michael Jung",
    "Danica Cariaga",
    "Mark Okuhata",
    "Omar Mora",
    "Ruth Guthrie",
    "Christopher Bates",
    "Jack Fong",
    "Lauren Furey",
    "Xuguang Guo",
    "Neal Lynch",
    "Tracey Takeuchi",
    "Jennifer Hirakawa",
    "Norali Pernalete",
    "Lydia Shah",
    "endran Adaickapillai",
    "Taylor Thane",
    "Ellips Masihi",
    "Keivan Navi",
    "Dora Lopez",
    "Manuel Macias",
    "antinia Papachristou",
    "keriya Aliyazicioglu",
    "Hui Shi",
    "Katrin Terstegen",
    "Jeehye Kim",
    "Garet Ammerman",
    "Robert Clarke",
    "Heather Taylor",
    "Cynthia Nguyen",
    "Maryam Pishgar",
    "Shelley Natale",
    "Brittany Bell",
    "Susan Croteau",
    "Jeffery Guyse",
    "Yitong Zhao",
    "Weijun Zheng",
    "Jeff Thompson",
    "Karen Russikoff",
    "Olga Griswold",
    "Jeffrey Visava",
    "Marimas Mostiller",
    "Amanda Newhall",
    "Steven Lee",
    "Ahmed Nasr",
    "Chi Chiu",
    "Alison Pearlman",
    "Sidi Benzahra",
    "Rebecca Valbuena",
    "Bronwyn Horton",
    "Fadi Batarseh",
    "Kenji Baril",
    "Peter Hanink",
    "Kevin Finch",
    "Alice Taylor",
    "Ardeshir Ghaffari",
    "Philip Graulty",
    "Hyungjin Gil",
    "Tierra Ellis",
    "Osama Samarah",
    "hara Gavin-Moorehead",
    "Pavitra Kavya",
    "George Rainey",
    "Felicia Thomas",
    "Laila Jallo",
    "Judith Fusco",
    "Tony Diaz",
    "John Mortensen",
    "Hyungjin Gill",
    "Santos Galvez",
    "lini Wickramarachchi",
    "Timothy Cobler",
    "John Morton",
    "Tamer Omar",
    "Jun Pan",
    "Marcus Elam",
    "Rosa Vasconez",
    "Kyndall Ting",
    "Julian Chavez",
    "Steven Archambault",
    "Amy Essington",
    "John Cook",
    "Muriel Fernandez",
    "Karen Trujillo",
    "Nasir Emami",
    "Warren Wood",
    "Saba Ali",
    "JoNeen Ohlaker",
    "Nicole Brown",
    "Lisa Wang",
    "Steve Alas",
    "Gwendolyn Dolske",
    "Qichao Dong",
    "Alyssa Bell",
    "Frank Bryant",
    "Patricia Holley",
    "Erik Jackiw",
    "Huong Luu",
    "Lianlian Lin",
    "Marc Schulitz",
    "James Bassett",
    "Sepeedeh Ahadiat",
    "Peg Lamphier",
    "Timothy Corcoran",
    "AnnaLyce Brockham",
    "Maral Harirchi",
    "Aishwary Kumar",
    "Joonho Lee",
    "Matthew Mcmahon",
    "Hector Flores",
    "Tatiana Basanez",
    "Farrok Ghazanfari",
    "Ernest Roumelis",
    "Dennis Lopez",
    "Nima Davarpanah",
    "Yunsheng Wang",
    "Jungwon Mun",
    "Jeff Cravello",
    "Christopher Ruh",
    "Paul Sarmas",
    "Mariano Baez",
    "Jay Windley",
    "Zoila Zambrano",
    "Sara Hirata",
    "Sue-Jin Lee",
    "Cindy Arroyo",
    "Chandrasekhar Putcha",
    "Li Lei",
    "Kurt Vandervoort",
    "Ildar Salakhutdinov",
    "Sanaa Saykali",
    "Nick Hardy",
    "Zhe Qu",
    "Crystal Foppe",
    "Soeun Park",
    "Sarah Pearce",
    "Jian Lee",
    "Steven Camacho",
    "Devin Lachner",
    "Nick Nikpour",
    "Iris Patten",
    "Jaime Yamashita",
    "Vickie Chan",
    "Honggang Wang",
    "Saeideh Fallah Fini",
    "Frank Chandler",
    "Carol Choi",
    "Michael Becker",
    "Lin Ong",
    "Jorge Silva",
    "Andrew Carmichael",
    "Alejandro Zermeno",
    "Adam Stowell",
    "Hao Jian",
    "Anne Wohlcke"
]
  return (
    <div>
      <SearchBarCom options={options} />
    </div>
  );

  
  /*
  const [data, setData] = useState([]);
  


  useEffect(() => {
    fetch('prof.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className='input-wrapper'>
        <BiSearch id = "search-icon"/>
        <>
      <input list="proffs" />
      <datalist id="proffs">
        {proffs.map((proffs, index) => (
          <option key={index} value={proffs} />
        ))}
      </datalist>
    </>
    </div>
  )*/
}

export default SearchBar2