const players = {

messi:{
id:"messi",
name:"Lionel Messi",
country:"Argentina",
club:"Inter Miami",
position:"Forward",
rating:95,
goals:112,
assists:61,
age:39,
height:"170 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/76/c0/1d/76c01d19b34d642f48646410748faace.jpg",
description:"Eight-time Ballon d'Or winner and Argentina captain."
},

julian_alvarez:{
id:"julian_alvarez",
name:"Julián Álvarez",
country:"Argentina",
club:"Atlético Madrid",
position:"Forward",
rating:89,
goals:38,
assists:19,
age:26,
height:"170 cm",
weight:"71 kg",
image:"https://i.pinimg.com/736x/25/e3/89/25e3898ccb2ae18288792104be375cf3.jpg",
description:"Versatile striker known for intelligent movement."
},

lautaro_martinez:{
id:"lautaro_martinez",
name:"Lautaro Martínez",
country:"Argentina",
club:"Inter Milan",
position:"Forward",
rating:91,
goals:45,
assists:12,
age:29,
height:"174 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/1f/3a/48/1f3a48ad50677f111e304d34efe04389.jpg",
description:"Clinical Argentine striker."
},

enzo_fernandez:{
id:"enzo_fernandez",
name:"Enzo Fernández",
country:"Argentina",
club:"Chelsea",
position:"Midfielder",
rating:88,
goals:9,
assists:16,
age:25,
height:"178 cm",
weight:"76 kg",
image:"https://i.pinimg.com/1200x/36/27/cd/3627cded3bb06817cf38aafe9ce99a99.jpg",
description:"Creative playmaker with excellent passing."
},

alexis_mac_allister:{
id:"alexis_mac_allister",
name:"Alexis Mac Allister",
country:"Argentina",
club:"Liverpool",
position:"Midfielder",
rating:89,
goals:11,
assists:13,
age:27,
height:"176 cm",
weight:"72 kg",
image:"https://i.pinimg.com/1200x/3b/cb/dd/3bcbdd1e0160d57b9a69f7e8e21ee4be.jpg",
description:"Complete central midfielder."
},

rodrigo_de_paul:{
id:"rodrigo_de_paul",
name:"Rodrigo De Paul",
country:"Argentina",
club:"Atlético Madrid",
position:"Midfielder",
rating:87,
goals:5,
assists:11,
age:32,
height:"180 cm",
weight:"70 kg",
image:"https://i.pinimg.com/1200x/1c/d7/88/1cd7884b766c3fef758ab782eea6326d.jpg",
description:"Energetic midfielder."
},

cristian_romero:{
id:"cristian_romero",
name:"Cristian Romero",
country:"Argentina",
club:"Tottenham Hotspur",
position:"Defender",
rating:89,
goals:4,
assists:2,
age:28,
height:"185 cm",
weight:"79 kg",
image:"https://i.pinimg.com/736x/6a/40/f4/6a40f424a7d0308cc2f8bdb52053acb2.jpg",
description:"Aggressive central defender."
},

lisandro_martinez:{
id:"lisandro_martinez",
name:"Lisandro Martínez",
country:"Argentina",
club:"Manchester United",
position:"Defender",
rating:87,
goals:2,
assists:3,
age:28,
height:"175 cm",
weight:"77 kg",
image:"https://i.pinimg.com/736x/27/0a/51/270a51948574392ff26b86074d8190f4.jpg",
description:"Ball-playing defender."
},

nahuel_molina:{
id:"nahuel_molina",
name:"Nahuel Molina",
country:"Argentina",
club:"Atlético Madrid",
position:"Defender",
rating:85,
goals:3,
assists:8,
age:28,
height:"175 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/14/37/18/143718643ca2f014f8707f4fdc6b6a30.jpg",
description:"Attacking right-back."
},

emiliano_martinez:{
id:"emiliano_martinez",
name:"Emiliano Martínez",
country:"Argentina",
club:"Aston Villa",
position:"Goalkeeper",
rating:90,
goals:0,
assists:0,
age:34,
height:"195 cm",
weight:"88 kg",
image:"https://i.pinimg.com/736x/7d/70/30/7d7030306fc01b60f665561a3eac5583.jpg",
description:"World-class goalkeeper."
},

neymar:{
id:"neymar",
name:"Neymar Jr.",
country:"Brazil",
club:"Santos",
position:"Forward",
rating:91,
goals:81,
assists:57,
age:34,
height:"175 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/10/9b/5a/109b5aabd5bb7059a1b696be02157323.jpg",
description:"Brazilian superstar."
},

vinicius_junior:{
id:"vinicius_junior",
name:"Vinícius Júnior",
country:"Brazil",
club:"Real Madrid",
position:"Forward",
rating:94,
goals:37,
assists:23,
age:26,
height:"176 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/4c/56/30/4c563065d1497de3ec6baaa725ef9210.jpg",
description:"Explosive winger."
},

rodrygo:{
id:"rodrygo",
name:"Rodrygo",
country:"Brazil",
club:"Real Madrid",
position:"Forward",
rating:90,
goals:24,
assists:18,
age:25,
height:"174 cm",
weight:"64 kg",
image:"https://i.pinimg.com/1200x/c1/96/b9/c196b9d12682d903701bddf4bb173e0b.jpg",
description:"Fast and skillful attacker."
},

raphinha:{
id:"raphinha",
name:"Raphinha",
country:"Brazil",
club:"Barcelona",
position:"Forward",
rating:89,
goals:26,
assists:19,
age:30,
height:"176 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/a9/63/ec/a963ecf3262330098a791463dda06813.jpg",
description:"Creative winger."
},

bruno_guimaraes:{
id:"bruno_guimaraes",
name:"Bruno Guimarães",
country:"Brazil",
club:"Newcastle United",
position:"Midfielder",
rating:89,
goals:10,
assists:14,
age:29,
height:"182 cm",
weight:"74 kg",
image:"https://i.pinimg.com/736x/59/a4/4f/59a44fdd7c9dd0e8e889b5d5294b0a07.jpg",
description:"Dynamic midfielder."
},

lucas_paqueta:{
id:"lucas_paqueta",
name:"Lucas Paquetá",
country:"Brazil",
club:"West Ham United",
position:"Midfielder",
rating:86,
goals:8,
assists:10,
age:29,
height:"180 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/2b/07/f5/2b07f5e5dffdb8b98022a19162d91f6c.jpg",
description:"Creative attacking midfielder."
},

casemiro:{
id:"casemiro",
name:"Casemiro",
country:"Brazil",
club:"Manchester United",
position:"Midfielder",
rating:87,
goals:7,
assists:5,
age:35,
height:"185 cm",
weight:"84 kg",
image:"https://i.pinimg.com/736x/6f/20/a1/6f20a118f5284b69082ce2bfd2d3ee86.jpg",
description:"Defensive midfield leader."
},

marquinhos:{
id:"marquinhos",
name:"Marquinhos",
country:"Brazil",
club:"Paris Saint-Germain",
position:"Defender",
rating:89,
goals:5,
assists:2,
age:32,
height:"183 cm",
weight:"75 kg",
image:"https://i.pinimg.com/1200x/f3/d5/c8/f3d5c8c61ce1b9afb9daaba253a4ef32.jpg",
description:"Brazil captain."
},

eder_militao:{
id:"eder_militao",
name:"Éder Militão",
country:"Brazil",
club:"Real Madrid",
position:"Defender",
rating:88,
goals:3,
assists:2,
age:29,
height:"186 cm",
weight:"79 kg",
image:"https://i.pinimg.com/1200x/55/38/e1/5538e16ef14ff7abd0c277a9881aa7c3.jpg",
description:"Strong central defender."
},

alisson:{
id:"alisson",
name:"Alisson Becker",
country:"Brazil",
club:"Liverpool",
position:"Goalkeeper",
rating:91,
goals:0,
assists:1,
age:34,
height:"193 cm",
weight:"91 kg",
image:"https://i.pinimg.com/1200x/f6/91/4c/f6914cfdd01aeb3658a6e9109dbb7da0.jpg",
description:"Elite goalkeeper."
},

mbappe:{
id:"mbappe",
name:"Kylian Mbappé",
country:"France",
club:"Real Madrid",
position:"Forward",
rating:95,
goals:58,
assists:21,
age:28,
height:"178 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/88/d9/ac/88d9ac9eae9382bc7305bf1562693fa7.jpg",
description:"One of the world's best forwards."
},

ousmane_dembele:{
id:"ousmane_dembele",
name:"Ousmane Dembélé",
country:"France",
club:"Paris Saint-Germain",
position:"Forward",
rating:91,
goals:29,
assists:22,
age:29,
height:"178 cm",
weight:"67 kg",
image:"https://i.pinimg.com/736x/14/bb/57/14bb573a134b51a72c2806494f533515.jpg",
description:"Exceptional dribbler."
},

michael_olise:{
id:"michael_olise",
name:"Michael Olise",
country:"France",
club:"Bayern Munich",
position:"Forward",
rating:88,
goals:18,
assists:20,
age:25,
height:"184 cm",
weight:"76 kg",
image:"https://i.pinimg.com/736x/cb/2f/95/cb2f957fa1103f40c3581942746f9865.jpg",
description:"Creative winger."
},

eduardo_camavinga:{
id:"eduardo_camavinga",
name:"Eduardo Camavinga",
country:"France",
club:"Real Madrid",
position:"Midfielder",
rating:89,
goals:6,
assists:11,
age:24,
height:"182 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/9c/02/e2/9c02e25418e593b573bf49916a093df3.jpg",
description:"Versatile midfielder."
},

aurelien_tchouameni:{
id:"aurelien_tchouameni",
name:"Aurélien Tchouaméni",
country:"France",
club:"Real Madrid",
position:"Midfielder",
rating:89,
goals:5,
assists:7,
age:26,
height:"187 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/02/6c/86/026c868be27f8b7768bb88725bda5953.jpg",
description:"Powerful holding midfielder."
},

adrien_rabiot:{
id:"adrien_rabiot",
name:"Adrien Rabiot",
country:"France",
club:"Marseille",
position:"Midfielder",
rating:86,
goals:8,
assists:6,
age:31,
height:"191 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/db/69/80/db69802fca4ec3f7cbf83ca88217a704.jpg",
description:"Experienced central midfielder."
},

william_saliba:{
id:"william_saliba",
name:"William Saliba",
country:"France",
club:"Arsenal",
position:"Defender",
rating:90,
goals:3,
assists:2,
age:26,
height:"192 cm",
weight:"83 kg",
image:"https://i.pinimg.com/1200x/7b/7d/44/7b7d44e9b2241e84989fc9ae7d4fde6b.jpg",
description:"Calm and composed defender."
},

ibrahima_konate:{
id:"ibrahima_konate",
name:"Ibrahima Konaté",
country:"France",
club:"Liverpool",
position:"Defender",
rating:87,
goals:2,
assists:1,
age:27,
height:"194 cm",
weight:"95 kg",
image:"https://i.pinimg.com/1200x/8b/23/b7/8b23b7d1e1deb1026f0548dbe209f119.jpg",
description:"Physically dominant centre-back."
},

theo_hernandez:{
id:"theo_hernandez",
name:"Theo Hernández",
country:"France",
club:"AC Milan",
position:"Defender",
rating:89,
goals:7,
assists:10,
age:29,
height:"184 cm",
weight:"81 kg",
image:"https://i.pinimg.com/1200x/5d/f8/66/5df866a3baba7f3ed29fff0ff4a594be.jpg",
description:"Attacking left-back."
},

mike_maignan:{
id:"mike_maignan",
name:"Mike Maignan",
country:"France",
club:"AC Milan",
position:"Goalkeeper",
rating:90,
goals:0,
assists:0,
age:31,
height:"191 cm",
weight:"89 kg",
image:"https://i.pinimg.com/736x/54/9b/cf/549bcf2c6586394a8eee9bb0e42cfcb7.jpg",
description:"Top-class French goalkeeper."
}

,

// ==========================
// SPAIN
// ==========================

lamine_yamal:{
id:"lamine_yamal",
name:"Lamine Yamal",
country:"Spain",
club:"Barcelona",
position:"Forward",
rating:92,
goals:22,
assists:25,
age:19,
height:"180 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/f8/91/9b/f8919b4d0998ea78e1a2f906f759f842.jpg",
description:"One of football's brightest young stars."
},

nico_williams:{
id:"nico_williams",
name:"Nico Williams",
country:"Spain",
club:"Athletic Club",
position:"Forward",
rating:89,
goals:18,
assists:17,
age:24,
height:"181 cm",
weight:"67 kg",
image:"https://i.pinimg.com/736x/fe/e7/33/fee733f95b0f04600b7fc1ba9d2f3d0f.jpg",
description:"Lightning-fast winger with outstanding dribbling."
},

dani_olmo:{
id:"dani_olmo",
name:"Dani Olmo",
country:"Spain",
club:"Barcelona",
position:"Midfielder",
rating:88,
goals:16,
assists:14,
age:28,
height:"179 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/16/0f/43/160f436d2f9593641f406cea53ec0668.jpg",
description:"Creative attacking midfielder."
},

pedri:{
id:"pedri",
name:"Pedri",
country:"Spain",
club:"Barcelona",
position:"Midfielder",
rating:91,
goals:9,
assists:15,
age:23,
height:"174 cm",
weight:"60 kg",
image:"https://i.pinimg.com/736x/d0/59/ea/d059ea03b931bb306687d47bce67fab3.jpg",
description:"Elite playmaker with exceptional vision."
},

rodri:{
id:"rodri",
name:"Rodri",
country:"Spain",
club:"Manchester City",
position:"Midfielder",
rating:94,
goals:12,
assists:10,
age:30,
height:"191 cm",
weight:"82 kg",
image:"https://i.pinimg.com/1200x/76/19/f4/7619f482fc99b7f0a88fd4f2c98903c3.jpg",
description:"World-class defensive midfielder."
},

fabian_ruiz:{
id:"fabian_ruiz",
name:"Fabián Ruiz",
country:"Spain",
club:"Paris Saint-Germain",
position:"Midfielder",
rating:88,
goals:8,
assists:11,
age:30,
height:"189 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/65/ab/68/65ab685c6fc6e62c8fc7c9bace61c531.jpg",
description:"Elegant central midfielder."
},

pau_cubarsi:{
id:"pau_cubarsi",
name:"Pau Cubarsí",
country:"Spain",
club:"Barcelona",
position:"Defender",
rating:86,
goals:2,
assists:3,
age:19,
height:"184 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/45/b7/5a/45b75ac734e0c055f5a5fae8b94824bc.jpg",
description:"Highly talented young centre-back."
},

aymeric_laporte:{
id:"aymeric_laporte",
name:"Aymeric Laporte",
country:"Spain",
club:"Al-Nassr",
position:"Defender",
rating:87,
goals:4,
assists:2,
age:32,
height:"191 cm",
weight:"86 kg",
image:"https://i.pinimg.com/1200x/69/92/8d/69928d1b760d44f202d42f5e29b5f950.jpg",
description:"Experienced central defender."
},

dani_carvajal:{
id:"dani_carvajal",
name:"Dani Carvajal",
country:"Spain",
club:"Real Madrid",
position:"Defender",
rating:88,
goals:3,
assists:8,
age:35,
height:"173 cm",
weight:"73 kg",
image:"https://i.pinimg.com/1200x/84/5a/58/845a58b831f1b7722ed0a3d32382f469.jpg",
description:"One of the best right-backs in Europe."
},

unai_simon:{
id:"unai_simon",
name:"Unai Simón",
country:"Spain",
club:"Athletic Club",
position:"Goalkeeper",
rating:88,
goals:0,
assists:0,
age:29,
height:"190 cm",
weight:"89 kg",
image:"https://i.pinimg.com/736x/b3/2a/ce/b32acede1f8c9adef6edde61d4ce73f6.jpg",
description:"Spain's first-choice goalkeeper."
},

// ==========================
// PORTUGAL
// ==========================

cristiano_ronaldo:{
id:"cristiano_ronaldo",
name:"Cristiano Ronaldo",
country:"Portugal",
club:"Al-Nassr",
position:"Forward",
rating:93,
goals:135,
assists:45,
age:41,
height:"187 cm",
weight:"83 kg",
image:"https://i.pinimg.com/1200x/b9/4f/91/b94f9159c871399dffd894fbe5e470b2.jpg",
description:"Portugal's legendary captain and all-time leading scorer."
},

rafael_leao:{
id:"rafael_leao",
name:"Rafael Leão",
country:"Portugal",
club:"AC Milan",
position:"Forward",
rating:90,
goals:24,
assists:18,
age:27,
height:"188 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/aa/aa/35/aaaa352f93c1363ca5bb6ac36b9426d1.jpg",
description:"Powerful and explosive winger."
},

diogo_jota:{
id:"diogo_jota",
name:"Diogo Jota",
country:"Portugal",
club:"Liverpool",
position:"Forward",
rating:88,
goals:21,
assists:10,
age:30,
height:"178 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/a3/ab/ab/a3abab492b81812c9db8f4c4fd88fbfe.jpg",
description:"Clinical finisher capable of playing across the front line."
},

bernardo_silva:{
id:"bernardo_silva",
name:"Bernardo Silva",
country:"Portugal",
club:"Manchester City",
position:"Midfielder",
rating:91,
goals:13,
assists:18,
age:32,
height:"173 cm",
weight:"64 kg",
image:"https://i.pinimg.com/736x/43/ec/ec/43ecec55e28cfd897e54d0917c2d974a.jpg",
description:"Technically gifted attacking midfielder."
},

bruno_fernandes:{
id:"bruno_fernandes",
name:"Bruno Fernandes",
country:"Portugal",
club:"Manchester United",
position:"Midfielder",
rating:91,
goals:20,
assists:19,
age:32,
height:"179 cm",
weight:"69 kg",
image:"https://i.pinimg.com/1200x/29/27/70/2927700d9cc43224f681d20364af6294.jpg",
description:"Creative leader and excellent passer."
},

vitinha:{
id:"vitinha",
name:"Vitinha",
country:"Portugal",
club:"Paris Saint-Germain",
position:"Midfielder",
rating:89,
goals:8,
assists:12,
age:27,
height:"172 cm",
weight:"64 kg",
image:"https://i.pinimg.com/736x/dc/55/33/dc5533b240106d64842eba65a24db7e0.jpg",
description:"Creative central midfielder."
},

joao_neves:{
id:"joao_neves",
name:"João Neves",
country:"Portugal",
club:"Paris Saint-Germain",
position:"Midfielder",
rating:88,
goals:5,
assists:8,
age:22,
height:"174 cm",
weight:"66 kg",
image:"https://i.pinimg.com/736x/af/4f/b2/af4fb2f9bc75ff993386f6b70ee4bf87.jpg",
description:"Energetic young midfielder."
},

ruben_dias:{
id:"ruben_dias",
name:"Rúben Dias",
country:"Portugal",
club:"Manchester City",
position:"Defender",
rating:90,
goals:3,
assists:2,
age:29,
height:"187 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/f7/6a/cc/f76acc998bf914d1b965e2a8a9d74a45.jpg",
description:"World-class centre-back."
},

nuno_mendes:{
id:"nuno_mendes",
name:"Nuno Mendes",
country:"Portugal",
club:"Paris Saint-Germain",
position:"Defender",
rating:89,
goals:4,
assists:10,
age:24,
height:"180 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/44/6c/e7/446ce781c7c7c87240f5bbb9007be4e9.jpg",
description:"Attacking left-back with tremendous pace."
},

diogo_costa:{
id:"diogo_costa",
name:"Diogo Costa",
country:"Portugal",
club:"FC Porto",
position:"Goalkeeper",
rating:89,
goals:0,
assists:0,
age:27,
height:"192 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/b1/5a/ef/b15aef925bb92ab52e15376929caa498.jpg",
description:"Outstanding modern goalkeeper."
},

// ==========================
// ENGLAND
// ==========================

harry_kane:{
id:"harry_kane",
name:"Harry Kane",
country:"England",
club:"Bayern Munich",
position:"Forward",
rating:93,
goals:72,
assists:24,
age:33,
height:"188 cm",
weight:"86 kg",
image:"https://i.pinimg.com/736x/30/7e/8b/307e8b3e07abc106e4ea950e64e292a9.jpg",
description:"England captain and prolific goalscorer."
},

bukayo_saka:{
id:"bukayo_saka",
name:"Bukayo Saka",
country:"England",
club:"Arsenal",
position:"Forward",
rating:91,
goals:23,
assists:21,
age:25,
height:"178 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/f6/c7/34/f6c734b49a4334d384c969e1d2844e12.jpg",
description:"Creative winger with exceptional consistency."
},

cole_palmer:{
id:"cole_palmer",
name:"Cole Palmer",
country:"England",
club:"Chelsea",
position:"Forward",
rating:90,
goals:28,
assists:18,
age:24,
height:"189 cm",
weight:"74 kg",
image:"https://i.pinimg.com/1200x/6f/5b/5a/6f5b5a3ed797729c82268f43c91fecef.jpg",
description:"One of England's brightest attacking talents."
},

phil_foden:{
id:"phil_foden",
name:"Phil Foden",
country:"England",
club:"Manchester City",
position:"Midfielder",
rating:92,
goals:25,
assists:17,
age:27,
height:"171 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/74/73/ae/7473aef332ac42bc934e64fabc515a1c.jpg",
description:"Creative midfielder with outstanding technique."
},

jude_bellingham:{
id:"jude_bellingham",
name:"Jude Bellingham",
country:"England",
club:"Real Madrid",
position:"Midfielder",
rating:94,
goals:22,
assists:14,
age:23,
height:"186 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/1b/e7/5b/1be75b03a63f7379a2e68948a4ca36f0.jpg",
description:"Complete midfielder and future England captain."
},

declan_rice:{
id:"declan_rice",
name:"Declan Rice",
country:"England",
club:"Arsenal",
position:"Midfielder",
rating:90,
goals:9,
assists:11,
age:28,
height:"188 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/9c/1a/43/9c1a43c2e7ecd9725a0b1b0d20b8abd6.jpg",
description:"Elite defensive midfielder."
},

john_stones:{
id:"john_stones",
name:"John Stones",
country:"England",
club:"Manchester City",
position:"Defender",
rating:89,
goals:4,
assists:3,
age:32,
height:"188 cm",
weight:"70 kg",
image:"https://i.pinimg.com/1200x/ee/de/7e/eede7e387db85d3fbcb063e7b23f284c.jpg",
description:"Ball-playing central defender."
},

trent_alexander_arnold:{
id:"trent_alexander_arnold",
name:"Trent Alexander-Arnold",
country:"England",
club:"Real Madrid",
position:"Defender",
rating:90,
goals:6,
assists:18,
age:28,
height:"180 cm",
weight:"69 kg",
image:"https://i.pinimg.com/1200x/ed/71/2a/ed712a7b8d414971ae843a9b2546ef5f.jpg",
description:"World-class attacking right-back."
},

reece_james:{
id:"reece_james",
name:"Reece James",
country:"England",
club:"Chelsea",
position:"Defender",
rating:87,
goals:5,
assists:10,
age:27,
height:"182 cm",
weight:"82 kg",
image:"https://i.pinimg.com/1200x/13/05/e3/1305e3a7a401030f047076b50563871e.jpg",
description:"Strong and versatile full-back."
},

jordan_pickford:{
id:"jordan_pickford",
name:"Jordan Pickford",
country:"England",
club:"Everton",
position:"Goalkeeper",
rating:88,
goals:0,
assists:1,
age:32,
height:"185 cm",
weight:"77 kg",
image:"https://i.pinimg.com/736x/eb/5a/77/eb5a779669f922cda05da752392aa4da.jpg",
description:"England's experienced first-choice goalkeeper."
}

,

// ==========================
// GERMANY
// ==========================

jamal_musiala:{
id:"jamal_musiala",
name:"Jamal Musiala",
country:"Germany",
club:"Bayern Munich",
position:"Midfielder",
rating:92,
goals:24,
assists:19,
age:23,
height:"184 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/98/57/90/98579080dbaab063c03260b5b62a311d.jpg",
description:"One of the world's most exciting attacking midfielders."
},

florian_wirtz:{
id:"florian_wirtz",
name:"Florian Wirtz",
country:"Germany",
club:"Liverpool",
position:"Midfielder",
rating:93,
goals:21,
assists:23,
age:23,
height:"177 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/30/a2/58/30a258ec7ff5bc5c226d0bb3fbb50b8a.jpg",
description:"Creative playmaker with outstanding vision and finishing."
},

kai_havertz:{
id:"kai_havertz",
name:"Kai Havertz",
country:"Germany",
club:"Arsenal",
position:"Forward",
rating:88,
goals:18,
assists:10,
age:27,
height:"193 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/40/fc/d9/40fcd9fe085158ce96437748a7892f92.jpg",
description:"Versatile forward capable of playing multiple attacking roles."
},

leroy_sane:{
id:"leroy_sane",
name:"Leroy Sané",
country:"Germany",
club:"Galatasaray",
position:"Forward",
rating:89,
goals:19,
assists:16,
age:30,
height:"183 cm",
weight:"75 kg",
image:"https://i.pinimg.com/1200x/08/f4/bc/08f4bc130c23d5ef47b4699efdfb95c2.jpg",
description:"Fast winger with excellent dribbling ability."
},

deniz_undav:{
id:"deniz_undav",
name:"Deniz Undav",
country:"Germany",
club:"VfB Stuttgart",
position:"Forward",
rating:86,
goals:17,
assists:8,
age:30,
height:"179 cm",
weight:"78 kg",
image:"https://i.pinimg.com/1200x/82/80/12/8280127cd14bfdb53b208397a09fe33d.jpg",
description:"Clinical striker with intelligent movement."
},

joshua_kimmich:{
id:"joshua_kimmich",
name:"Joshua Kimmich",
country:"Germany",
club:"Bayern Munich",
position:"Midfielder",
rating:90,
goals:9,
assists:15,
age:31,
height:"177 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/d6/0b/04/d60b04828c5d65aad640effbd3b2cf31.jpg",
description:"World-class midfielder and tactical leader."
},

antonio_rudiger:{
id:"antonio_rudiger",
name:"Antonio Rüdiger",
country:"Germany",
club:"Real Madrid",
position:"Defender",
rating:90,
goals:4,
assists:2,
age:33,
height:"190 cm",
weight:"85 kg",
image:"https://i.pinimg.com/736x/bc/92/a6/bc92a631daf5733fb0d1fdce3a4857e9.jpg",
description:"Powerful centre-back with leadership qualities."
},

jonathan_tah:{
id:"jonathan_tah",
name:"Jonathan Tah",
country:"Germany",
club:"Bayern Munich",
position:"Defender",
rating:88,
goals:3,
assists:1,
age:30,
height:"195 cm",
weight:"94 kg",
image:"https://i.pinimg.com/736x/7e/ea/f3/7eeaf36b0802e316e2c591d673cf6147.jpg",
description:"Strong aerial defender and reliable organiser."
},

david_raum:{
id:"david_raum",
name:"David Raum",
country:"Germany",
club:"RB Leipzig",
position:"Defender",
rating:86,
goals:3,
assists:11,
age:28,
height:"180 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/04/d6/4a/04d64a35b579afee99f8fcd7ea17c23d.jpg",
description:"Attacking left-back with accurate crossing."
},

marc_andre_ter_stegen:{
id:"marc_andre_ter_stegen",
name:"Marc-André ter Stegen",
country:"Germany",
club:"Barcelona",
position:"Goalkeeper",
rating:91,
goals:0,
assists:1,
age:34,
height:"187 cm",
weight:"85 kg",
image:"https://i.pinimg.com/736x/58/9b/f7/589bf7d36dc24aeae2f93cd60e5379c7.jpg",
description:"Elite goalkeeper renowned for reflexes and distribution."
}

,

// ==========================
// ITALY
// ==========================

gianluigi_donnarumma:{
id:"gianluigi_donnarumma",
name:"Gianluigi Donnarumma",
country:"Italy",
club:"Paris Saint-Germain",
position:"Goalkeeper",
rating:91,
goals:0,
assists:0,
age:28,
height:"196 cm",
weight:"90 kg",
image:"https://i.pinimg.com/1200x/97/e4/4a/97e44a0cac162efe3ec9cf20cebd570c.jpg",
description:"Italy's first-choice goalkeeper with exceptional reflexes."
},

alessandro_bastoni:{
id:"alessandro_bastoni",
name:"Alessandro Bastoni",
country:"Italy",
club:"Inter Milan",
position:"Defender",
rating:90,
goals:3,
assists:6,
age:28,
height:"190 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/cd/38/9c/cd389c82aa290233f2cdea252d5078d4.jpg",
description:"Ball-playing centre-back with excellent passing."
},

riccardo_calafiori:{
id:"riccardo_calafiori",
name:"Riccardo Calafiori",
country:"Italy",
club:"Arsenal",
position:"Defender",
rating:87,
goals:4,
assists:5,
age:24,
height:"188 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/0a/d5/0a/0ad50a5292ec1e9335c1c3f9abe9d2cb.jpg",
description:"Modern defender comfortable on the ball."
},

giovanni_di_lorenzo:{
id:"giovanni_di_lorenzo",
name:"Giovanni Di Lorenzo",
country:"Italy",
club:"Napoli",
position:"Defender",
rating:87,
goals:3,
assists:7,
age:33,
height:"183 cm",
weight:"79 kg",
image:"https://i.pinimg.com/1200x/c4/a0/23/c4a0231c7d36c1aa1c2b8dc351ba208e.jpg",
description:"Experienced captain and dependable right-back."
},

federico_dimarco:{
id:"federico_dimarco",
name:"Federico Dimarco",
country:"Italy",
club:"Inter Milan",
position:"Defender",
rating:88,
goals:6,
assists:13,
age:29,
height:"175 cm",
weight:"75 kg",
image:"https://i.pinimg.com/1200x/13/74/eb/1374eb84bb1cb5f794aba9d9cd8e13f9.jpg",
description:"Attack-minded left-back with excellent crossing."
},

nicolo_barella:{
id:"nicolo_barella",
name:"Nicolò Barella",
country:"Italy",
club:"Inter Milan",
position:"Midfielder",
rating:90,
goals:10,
assists:12,
age:29,
height:"172 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/4f/87/25/4f8725d08ccedbd99ebb6c5ce70dbcf8.jpg",
description:"Energetic box-to-box midfielder and key playmaker."
},

sandro_tonali:{
id:"sandro_tonali",
name:"Sandro Tonali",
country:"Italy",
club:"Newcastle United",
position:"Midfielder",
rating:89,
goals:6,
assists:10,
age:26,
height:"181 cm",
weight:"79 kg",
image:"https://i.pinimg.com/736x/0a/be/23/0abe23e4a238b1416d72a1173c25d949.jpg",
description:"Excellent deep-lying midfielder with superb vision."
},

davide_frattesi:{
id:"davide_frattesi",
name:"Davide Frattesi",
country:"Italy",
club:"Inter Milan",
position:"Midfielder",
rating:87,
goals:9,
assists:7,
age:27,
height:"178 cm",
weight:"74 kg",
image:"https://i.pinimg.com/736x/08/8a/7a/088a7afba34ddd6197d7f2bae27a18a7.jpg",
description:"Dynamic midfielder known for late runs into the box."
},

federico_chiesa:{
id:"federico_chiesa",
name:"Federico Chiesa",
country:"Italy",
club:"Liverpool",
position:"Forward",
rating:88,
goals:17,
assists:11,
age:29,
height:"175 cm",
weight:"70 kg",
image:"https://i.pinimg.com/1200x/59/31/d1/5931d176dd2841b6a70e124a5280ca48.jpg",
description:"Quick winger with powerful finishing ability."
},

mateo_retegui:{
id:"mateo_retegui",
name:"Mateo Retegui",
country:"Italy",
club:"Atalanta",
position:"Forward",
rating:87,
goals:23,
assists:6,
age:27,
height:"186 cm",
weight:"82 kg",
image:"https://i.pinimg.com/1200x/43/3f/21/433f21262c3175187dfb1c66470b5b1b.jpg",
description:"Powerful striker with excellent positioning."
}

,

// ==========================
// NETHERLANDS
// ==========================

virgil_van_dijk:{
id:"virgil_van_dijk",
name:"Virgil van Dijk",
country:"Netherlands",
club:"Liverpool",
position:"Defender",
rating:91,
goals:6,
assists:2,
age:35,
height:"193 cm",
weight:"92 kg",
image:"https://i.pinimg.com/736x/c9/01/a5/c901a57e010609e9e26cc255fa334242.jpg",
description:"Netherlands captain and one of the world's best centre-backs."
},

frenkie_de_jong:{
id:"frenkie_de_jong",
name:"Frenkie de Jong",
country:"Netherlands",
club:"Barcelona",
position:"Midfielder",
rating:90,
goals:6,
assists:11,
age:29,
height:"181 cm",
weight:"74 kg",
image:"https://i.pinimg.com/736x/59/a8/ca/59a8cab2a57ba6b262d9703612fc143c.jpg",
description:"Elegant midfielder known for ball control and vision."
},

xavi_simons:{
id:"xavi_simons",
name:"Xavi Simons",
country:"Netherlands",
club:"RB Leipzig",
position:"Midfielder",
rating:89,
goals:18,
assists:16,
age:23,
height:"179 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/a1/9a/61/a19a6188bbc182f902d95ef8070a8bfa.jpg",
description:"Creative attacking midfielder with excellent dribbling."
},

cody_gakpo:{
id:"cody_gakpo",
name:"Cody Gakpo",
country:"Netherlands",
club:"Liverpool",
position:"Forward",
rating:89,
goals:22,
assists:12,
age:27,
height:"193 cm",
weight:"76 kg",
image:"https://i.pinimg.com/736x/db/c9/89/dbc989b44aa83dcdf177ea03b15d6c4b.jpg",
description:"Powerful forward capable of playing across the front line."
},

jeremie_frimpong:{
id:"jeremie_frimpong",
name:"Jeremie Frimpong",
country:"Netherlands",
club:"Liverpool",
position:"Defender",
rating:89,
goals:10,
assists:16,
age:25,
height:"172 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/17/aa/32/17aa324f6bbf5f5786dbaec658e689f5.jpg",
description:"Rapid attacking right-back."
},

tijjani_reijnders:{
id:"tijjani_reijnders",
name:"Tijjani Reijnders",
country:"Netherlands",
club:"Manchester City",
position:"Midfielder",
rating:88,
goals:12,
assists:9,
age:28,
height:"185 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/1d/f4/c1/1df4c1fd72e4ca58ebf94dd4fb32ed39.jpg",
description:"Energetic midfielder with excellent passing range."
},

micky_van_de_ven:{
id:"micky_van_de_ven",
name:"Micky van de Ven",
country:"Netherlands",
club:"Tottenham Hotspur",
position:"Defender",
rating:87,
goals:3,
assists:2,
age:25,
height:"193 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/1e/63/46/1e6346cacc0ccc0cf0babb0e60422730.jpg",
description:"Fast centre-back with outstanding recovery pace."
},

matthijs_de_ligt:{
id:"matthijs_de_ligt",
name:"Matthijs de Ligt",
country:"Netherlands",
club:"Manchester United",
position:"Defender",
rating:88,
goals:4,
assists:2,
age:27,
height:"189 cm",
weight:"89 kg",
image:"https://i.pinimg.com/736x/e7/64/21/e76421ca3f44382c77de3480f8fb6e23.jpg",
description:"Strong and composed central defender."
},

denzel_dumfries:{
id:"denzel_dumfries",
name:"Denzel Dumfries",
country:"Netherlands",
club:"Inter Milan",
position:"Defender",
rating:88,
goals:8,
assists:11,
age:30,
height:"188 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/4e/98/b8/4e98b8be371c2cb16088f867547ace86.jpg",
description:"Powerful wing-back known for attacking runs."
},

bart_verbruggen:{
id:"bart_verbruggen",
name:"Bart Verbruggen",
country:"Netherlands",
club:"Brighton & Hove Albion",
position:"Goalkeeper",
rating:86,
goals:0,
assists:0,
age:24,
height:"194 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/d1/a2/26/d1a226bb75fac479ef46684287920844.jpg",
description:"Young goalkeeper with excellent shot-stopping ability."
}

,

// ==========================
// BELGIUM
// ==========================

kevin_de_bruyne:{
id:"kevin_de_bruyne",
name:"Kevin De Bruyne",
country:"Belgium",
club:"Napoli",
position:"Midfielder",
rating:92,
goals:14,
assists:21,
age:35,
height:"181 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/c6/0c/b6/c60cb691036a4b4b2ac41efadc1f0e5f.jpg",
description:"Belgium captain and one of the greatest playmakers of his generation."
},

jeremy_doku:{
id:"jeremy_doku",
name:"Jérémy Doku",
country:"Belgium",
club:"Manchester City",
position:"Forward",
rating:89,
goals:15,
assists:18,
age:24,
height:"171 cm",
weight:"66 kg",
image:"https://i.pinimg.com/736x/f1/52/7d/f1527d7dd2bdaef20f367d54b03f145d.jpg",
description:"Explosive winger with exceptional dribbling ability."
},

lois_openda:{
id:"lois_openda",
name:"Loïs Openda",
country:"Belgium",
club:"RB Leipzig",
position:"Forward",
rating:88,
goals:26,
assists:8,
age:26,
height:"177 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/a3/71/f8/a371f8baba926c8b54bb52b7458e875e.jpg",
description:"Fast striker with clinical finishing."
},

charles_de_ketelare:{
id:"charles_de_ketelare",
name:"Charles De Ketelaere",
country:"Belgium",
club:"Atalanta",
position:"Forward",
rating:87,
goals:16,
assists:12,
age:25,
height:"192 cm",
weight:"74 kg",
image:"https://i.pinimg.com/1200x/96/bb/24/96bb24f4e1d02f5606fe9a4accf9b98b.jpg",
description:"Creative forward with excellent technical ability."
},

romeo_lavia:{
id:"romeo_lavia",
name:"Roméo Lavia",
country:"Belgium",
club:"Chelsea",
position:"Midfielder",
rating:86,
goals:3,
assists:6,
age:22,
height:"181 cm",
weight:"73 kg",
image:"https://i.pinimg.com/1200x/80/be/26/80be26c7bf7599af2efe62655f3c89f5.jpg",
description:"Talented defensive midfielder with great composure."
},

amadou_onana:{
id:"amadou_onana",
name:"Amadou Onana",
country:"Belgium",
club:"Aston Villa",
position:"Midfielder",
rating:87,
goals:7,
assists:5,
age:25,
height:"195 cm",
weight:"76 kg",
image:"https://i.pinimg.com/736x/6e/8e/d9/6e8ed964cbb7a291908e9d3efa27f628.jpg",
description:"Powerful box-to-box midfielder."
},

youri_tielemans:{
id:"youri_tielemans",
name:"Youri Tielemans",
country:"Belgium",
club:"Aston Villa",
position:"Midfielder",
rating:87,
goals:8,
assists:11,
age:29,
height:"176 cm",
weight:"72 kg",
image:"https://i.pinimg.com/1200x/e3/94/b8/e394b8e1b3fa3a5b3cdd90e6f4a09df7.jpg",
description:"Experienced midfielder with excellent passing range."
},

wout_faes:{
id:"wout_faes",
name:"Wout Faes",
country:"Belgium",
club:"Leicester City",
position:"Defender",
rating:84,
goals:2,
assists:1,
age:29,
height:"187 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/3c/d6/66/3cd666f45e6237eff247ca7766d68bd6.jpg",
description:"Strong central defender."
},

arthur_theate:{
id:"arthur_theate",
name:"Arthur Theate",
country:"Belgium",
club:"Eintracht Frankfurt",
position:"Defender",
rating:85,
goals:3,
assists:2,
age:26,
height:"185 cm",
weight:"81 kg",
image:"https://i.pinimg.com/1200x/75/3a/97/753a9778bfa171987d18e7cc90823e09.jpg",
description:"Reliable defender who can also play at left-back."
},

koen_casteels:{
id:"koen_casteels",
name:"Koen Casteels",
country:"Belgium",
club:"Al-Qadsiah",
position:"Goalkeeper",
rating:86,
goals:0,
assists:0,
age:34,
height:"197 cm",
weight:"86 kg",
image:"https://i.pinimg.com/736x/c3/71/2f/c3712fc225c15ce73db57c16c66f0403.jpg",
description:"Experienced goalkeeper with excellent shot-stopping ability."
}
,

// ==========================
// URUGUAY
// ==========================

federico_valverde:{
id:"federico_valverde",
name:"Federico Valverde",
country:"Uruguay",
club:"Real Madrid",
position:"Midfielder",
rating:92,
goals:15,
assists:14,
age:28,
height:"182 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/45/f6/4f/45f64faa4c4508b94a1259eb33306b44.jpg",
description:"Complete box-to-box midfielder with incredible stamina and powerful shooting."
},

darwin_nunez:{
id:"darwin_nunez",
name:"Darwin Núñez",
country:"Uruguay",
club:"Liverpool",
position:"Forward",
rating:89,
goals:26,
assists:12,
age:27,
height:"187 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/47/17/e4/4717e4a8f3be2e9823945b4e2f40dead.jpg",
description:"Powerful striker known for pace and finishing."
},

ronald_araujo:{
id:"ronald_araujo",
name:"Ronald Araújo",
country:"Uruguay",
club:"Barcelona",
position:"Defender",
rating:90,
goals:5,
assists:2,
age:27,
height:"192 cm",
weight:"86 kg",
image:"https://i.pinimg.com/736x/c2/7f/f4/c27ff49470afcb15ce47c7ee967a3dd4.jpg",
description:"Elite centre-back with strength and speed."
},

manuel_ugarte:{
id:"manuel_ugarte",
name:"Manuel Ugarte",
country:"Uruguay",
club:"Manchester United",
position:"Midfielder",
rating:88,
goals:4,
assists:7,
age:25,
height:"182 cm",
weight:"77 kg",
image:"https://i.pinimg.com/736x/77/44/99/7744991b736782411cccb6863d35c1d9.jpg",
description:"Aggressive defensive midfielder with excellent tackling."
},

rodrigo_bentancur:{
id:"rodrigo_bentancur",
name:"Rodrigo Bentancur",
country:"Uruguay",
club:"Tottenham Hotspur",
position:"Midfielder",
rating:87,
goals:6,
assists:8,
age:29,
height:"187 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/2e/ad/4b/2ead4b02e770c595cabbb8b1d4be3946.jpg",
description:"Technically gifted central midfielder."
},

facundo_pellistri:{
id:"facundo_pellistri",
name:"Facundo Pellistri",
country:"Uruguay",
club:"Panathinaikos",
position:"Forward",
rating:84,
goals:9,
assists:13,
age:25,
height:"175 cm",
weight:"67 kg",
image:"https://i.pinimg.com/1200x/d1/ce/9e/d1ce9e60204e13f4a08bb86c89772b25.jpg",
description:"Quick winger with excellent dribbling ability."
},

giorgian_de_arrascaeta:{
id:"giorgian_de_arrascaeta",
name:"Giorgian de Arrascaeta",
country:"Uruguay",
club:"Flamengo",
position:"Midfielder",
rating:87,
goals:14,
assists:18,
age:32,
height:"174 cm",
weight:"69 kg",
image:"https://i.pinimg.com/736x/a6/76/40/a67640b172c494dca590fd56dd23b600.jpg",
description:"Creative attacking midfielder and set-piece specialist."
},

jose_maria_gimenez:{
id:"jose_maria_gimenez",
name:"José María Giménez",
country:"Uruguay",
club:"Atlético Madrid",
position:"Defender",
rating:88,
goals:4,
assists:1,
age:31,
height:"185 cm",
weight:"80 kg",
image:"https://i.pinimg.com/1200x/6b/b3/2f/6bb32f560014ba57a91ca1fc00b7e18c.jpg",
description:"Experienced centre-back and defensive leader."
},

mathias_olivera:{
id:"mathias_olivera",
name:"Mathías Olivera",
country:"Uruguay",
club:"Napoli",
position:"Defender",
rating:85,
goals:3,
assists:4,
age:28,
height:"184 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/6c/1b/5d/6c1b5d352a7e866530ad981cd53d69c6.jpg",
description:"Reliable left-back with strong defensive abilities."
},

sergio_rochet:{
id:"sergio_rochet",
name:"Sergio Rochet",
country:"Uruguay",
club:"Internacional",
position:"Goalkeeper",
rating:86,
goals:0,
assists:0,
age:33,
height:"190 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/91/99/1e/91991e88321a9a4867ab483ee9d6330c.jpg",
description:"Experienced goalkeeper with excellent reflexes."
}

,

// ==========================
// CROATIA
// ==========================

luka_modric:{
id:"luka_modric",
name:"Luka Modrić",
country:"Croatia",
club:"AC Milan",
position:"Midfielder",
rating:91,
goals:8,
assists:14,
age:41,
height:"172 cm",
weight:"66 kg",
image:"https://i.pinimg.com/736x/74/3f/83/743f8367b06830be19ddc58a0c5ce82e.jpg",
description:"Ballon d'Or winner and Croatia's legendary captain."
},

josko_gvardiol:{
id:"josko_gvardiol",
name:"Joško Gvardiol",
country:"Croatia",
club:"Manchester City",
position:"Defender",
rating:90,
goals:6,
assists:4,
age:25,
height:"185 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/9d/62/8a/9d628ae819dadfaecf62d884465fed53.jpg",
description:"Modern centre-back with excellent pace and ball control."
},

mateo_kovacic:{
id:"mateo_kovacic",
name:"Mateo Kovačić",
country:"Croatia",
club:"Manchester City",
position:"Midfielder",
rating:89,
goals:6,
assists:9,
age:32,
height:"177 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/11/07/23/110723b7b0906b164a048452c8625ea9.jpg",
description:"Technically gifted midfielder with outstanding dribbling."
},

andrej_kramaric:{
id:"andrej_kramaric",
name:"Andrej Kramarić",
country:"Croatia",
club:"TSG Hoffenheim",
position:"Forward",
rating:88,
goals:22,
assists:10,
age:35,
height:"177 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/55/7e/d0/557ed0677a78faa7d31f1541314f3820.jpg",
description:"Experienced striker with excellent finishing ability."
},

marcelo_brozovic:{
id:"marcelo_brozovic",
name:"Marcelo Brozović",
country:"Croatia",
club:"Al-Nassr",
position:"Midfielder",
rating:87,
goals:5,
assists:11,
age:34,
height:"181 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/fa/25/39/fa2539a0c375471802403ea323d5d7eb.jpg",
description:"Reliable deep-lying playmaker."
},

lovro_majer:{
id:"lovro_majer",
name:"Lovro Majer",
country:"Croatia",
club:"VfL Wolfsburg",
position:"Midfielder",
rating:86,
goals:9,
assists:12,
age:28,
height:"179 cm",
weight:"75 kg",
image:"https://i.pinimg.com/736x/e6/3a/ae/e63aaeb79b5f33ee4665542bf4ca3753.jpg",
description:"Creative midfielder with excellent vision."
},

martin_baturina:{
id:"martin_baturina",
name:"Martin Baturina",
country:"Croatia",
club:"Como",
position:"Midfielder",
rating:86,
goals:8,
assists:13,
age:23,
height:"172 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/58/da/ab/58daab25b147195d31969e7c3f7a2851.jpg",
description:"Highly talented young attacking midfielder."
},

josip_sutalo:{
id:"josip_sutalo",
name:"Josip Šutalo",
country:"Croatia",
club:"Ajax",
position:"Defender",
rating:87,
goals:3,
assists:2,
age:26,
height:"190 cm",
weight:"82 kg",
image:"https://i.pinimg.com/736x/b3/30/8f/b3308fd72c02c19e3ff5f75d21b02984.jpg",
description:"Strong and composed central defender."
},

josip_stanisic:{
id:"josip_stanisic",
name:"Josip Stanišić",
country:"Croatia",
club:"Bayern Munich",
position:"Defender",
rating:86,
goals:2,
assists:4,
age:26,
height:"187 cm",
weight:"77 kg",
image:"https://i.pinimg.com/736x/0b/c5/b6/0bc5b6623185e5eee84ec1490b0072bd.jpg",
description:"Versatile defender capable of playing across the back line."
},

dominik_livakovic:{
id:"dominik_livakovic",
name:"Dominik Livaković",
country:"Croatia",
club:"Fenerbahçe",
position:"Goalkeeper",
rating:88,
goals:0,
assists:0,
age:32,
height:"188 cm",
weight:"79 kg",
image:"https://i.pinimg.com/736x/88/bd/1e/88bd1eb707f920aff64756da02842bce.jpg",
description:"Croatia's first-choice goalkeeper and penalty-saving specialist."
}
,

// ==========================
// MOROCCO
// ==========================

achraf_hakimi:{
id:"achraf_hakimi",
name:"Achraf Hakimi",
country:"Morocco",
club:"Paris Saint-Germain",
position:"Defender",
rating:91,
goals:8,
assists:15,
age:28,
height:"181 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/81/c6/ee/81c6ee2f2f19de1e498320be1622a66a.jpg",
description:"World-class right-back known for his pace, crossing and attacking runs."
},

youssef_en_nesyri:{
id:"youssef_en_nesyri",
name:"Youssef En-Nesyri",
country:"Morocco",
club:"Fenerbahçe",
position:"Forward",
rating:88,
goals:27,
assists:6,
age:29,
height:"192 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/a4/79/0e/a4790eb388681b7b7d69b3cc379bcf49.jpg",
description:"Powerful striker with exceptional aerial ability."
},

brahim_diaz:{
id:"brahim_diaz",
name:"Brahim Díaz",
country:"Morocco",
club:"Real Madrid",
position:"Forward",
rating:89,
goals:18,
assists:14,
age:27,
height:"171 cm",
weight:"68 kg",
image:"https://i.pinimg.com/736x/23/a1/82/23a1821bdd1aaeebb6788ed3bfccd292.jpg",
description:"Creative attacker with outstanding dribbling skills."
},

sofyan_amrabat:{
id:"sofyan_amrabat",
name:"Sofyan Amrabat",
country:"Morocco",
club:"Fenerbahçe",
position:"Midfielder",
rating:87,
goals:3,
assists:7,
age:30,
height:"185 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/aa/84/d6/aa84d6bb64a8e33d664b360fc97e033d.jpg",
description:"Defensive midfielder renowned for ball-winning ability."
},

bilal_el_khannouss:{
id:"bilal_el_khannouss",
name:"Bilal El Khannouss",
country:"Morocco",
club:"Leicester City",
position:"Midfielder",
rating:86,
goals:7,
assists:12,
age:22,
height:"180 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/fa/52/cc/fa52cc99c99c10fb756aed08f056adf2.jpg",
description:"Highly talented young playmaker."
},

azzedine_ounahi:{
id:"azzedine_ounahi",
name:"Azzedine Ounahi",
country:"Morocco",
club:"Marseille",
position:"Midfielder",
rating:85,
goals:5,
assists:8,
age:26,
height:"182 cm",
weight:"62 kg",
image:"https://i.pinimg.com/1200x/9f/8f/31/9f8f310a18d74d2d2ad60189c9629250.jpg",
description:"Energetic midfielder with excellent technical ability."
},

noussair_mazraoui:{
id:"noussair_mazraoui",
name:"Noussair Mazraoui",
country:"Morocco",
club:"Manchester United",
position:"Defender",
rating:87,
goals:4,
assists:8,
age:29,
height:"183 cm",
weight:"73 kg",
image:"https://i.pinimg.com/1200x/29/de/71/29de7101577bbd44c6f7e220dab5b518.jpg",
description:"Versatile full-back capable of playing on either side."
},

nayef_agerd:{
id:"nayef_agerd",
name:"Nayef Aguerd",
country:"Morocco",
club:"West Ham United",
position:"Defender",
rating:86,
goals:3,
assists:2,
age:30,
height:"190 cm",
weight:"76 kg",
image:"https://i.pinimg.com/736x/6e/71/e9/6e71e953d62b0dfc9439f889cec2b627.jpg",
description:"Strong central defender with excellent positioning."
},

abde_ezzalzouli:{
id:"abde_ezzalzouli",
name:"Abde Ezzalzouli",
country:"Morocco",
club:"Real Betis",
position:"Forward",
rating:85,
goals:11,
assists:10,
age:25,
height:"177 cm",
weight:"73 kg",
image:"https://i.pinimg.com/736x/c7/ce/13/c7ce138b896b4dd2c42791c78909037c.jpg",
description:"Direct winger with pace and flair."
},

yassine_bounou:{
id:"yassine_bounou",
name:"Yassine Bounou",
country:"Morocco",
club:"Al-Hilal",
position:"Goalkeeper",
rating:89,
goals:0,
assists:0,
age:35,
height:"192 cm",
weight:"78 kg",
image:"https://i.pinimg.com/736x/64/3a/a2/643aa232f8404b75ca377d5f0f4dd139.jpg",
description:"Experienced goalkeeper famous for his World Cup heroics."
}

,

// ==========================
// JAPAN
// ==========================

kaoru_mitoma:{
id:"kaoru_mitoma",
name:"Kaoru Mitoma",
country:"Japan",
club:"Brighton & Hove Albion",
position:"Forward",
rating:89,
goals:18,
assists:15,
age:29,
height:"178 cm",
weight:"71 kg",
image:"https://i.pinimg.com/736x/2d/f4/48/2df448cbb10ba31246775b8b0637b24f.jpg",
description:"Dynamic winger known for exceptional dribbling and acceleration."
},

takefusa_kubo:{
id:"takefusa_kubo",
name:"Takefusa Kubo",
country:"Japan",
club:"Real Sociedad",
position:"Forward",
rating:89,
goals:16,
assists:14,
age:25,
height:"173 cm",
weight:"67 kg",
image:"https://i.pinimg.com/736x/af/fd/c5/affdc5a1623622ae03f89cec64a716eb.jpg",
description:"Creative left-footed winger with outstanding technical ability."
},

daichi_kamada:{
id:"daichi_kamada",
name:"Daichi Kamada",
country:"Japan",
club:"Crystal Palace",
position:"Midfielder",
rating:87,
goals:11,
assists:10,
age:30,
height:"184 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/c0/f2/6c/c0f26c6a6e0395e7ffe22e52d0ee9b7a.jpg",
description:"Versatile attacking midfielder with excellent vision."
},

wataru_endo:{
id:"wataru_endo",
name:"Wataru Endo",
country:"Japan",
club:"Liverpool",
position:"Midfielder",
rating:87,
goals:4,
assists:6,
age:33,
height:"178 cm",
weight:"76 kg",
image:"https://i.pinimg.com/736x/36/c8/95/36c895810b0d801bc1a79a80893fe94c.jpg",
description:"Experienced defensive midfielder and Japan captain."
},

ao_tanaka:{
id:"ao_tanaka",
name:"Ao Tanaka",
country:"Japan",
club:"Leeds United",
position:"Midfielder",
rating:85,
goals:7,
assists:8,
age:28,
height:"180 cm",
weight:"69 kg",
image:"https://i.pinimg.com/736x/2d/98/e0/2d98e0b883f1d80ffd54e3b642aae5ce.jpg",
description:"Energetic box-to-box midfielder."
},

ritsu_doan:{
id:"ritsu_doan",
name:"Ritsu Dōan",
country:"Japan",
club:"SC Freiburg",
position:"Forward",
rating:86,
goals:12,
assists:9,
age:28,
height:"172 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/83/a7/ee/83a7eef94f9963f49ee3bda684243897.jpg",
description:"Skillful winger with a powerful left foot."
},

ko_itakura:{
id:"ko_itakura",
name:"Ko Itakura",
country:"Japan",
club:"Borussia Mönchengladbach",
position:"Defender",
rating:86,
goals:4,
assists:2,
age:29,
height:"188 cm",
weight:"80 kg",
image:"https://i.pinimg.com/736x/2d/4e/a5/2d4ea5e42fa1f669b18a27eee3bf0b05.jpg",
description:"Reliable centre-back comfortable in possession."
},

hiroki_ito:{
id:"hiroki_ito",
name:"Hiroki Ito",
country:"Japan",
club:"Bayern Munich",
position:"Defender",
rating:86,
goals:2,
assists:4,
age:27,
height:"188 cm",
weight:"81 kg",
image:"https://i.pinimg.com/736x/15/1f/27/151f271470770a025f67a4062287425b.jpg",
description:"Versatile defender who can play centrally or at left-back."
},

yukinari_sugawara:{
id:"yukinari_sugawara",
name:"Yukinari Sugawara",
country:"Japan",
club:"Southampton",
position:"Defender",
rating:85,
goals:3,
assists:10,
age:25,
height:"179 cm",
weight:"69 kg",
image:"https://i.pinimg.com/1200x/41/67/64/416764b6e18f0813d41d8d6e38f1c142.jpg",
description:"Attack-minded right-back with quality crossing."
},

zion_suzuki:{
id:"zion_suzuki",
name:"Zion Suzuki",
country:"Japan",
club:"Parma",
position:"Goalkeeper",
rating:86,
goals:0,
assists:0,
age:24,
height:"190 cm",
weight:"91 kg",
image:"https://i.pinimg.com/1200x/60/2b/5d/602b5daa2b99de5924634937e8e3d7a7.jpg",
description:"Promising young goalkeeper with excellent reflexes and distribution."
},

// ==========================
// UNITED STATES
// ==========================

christian_pulisic:{
id:"christian_pulisic",
name:"Christian Pulisic",
country:"United States",
club:"AC Milan",
position:"Forward",
rating:90,
goals:22,
assists:17,
age:28,
height:"177 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/95/66/8f/95668fea2aa1f815c14488f62ee643c2.jpg",
description:"Captain of the United States and one of CONCACAF's top attacking players."
},

timothy_weah:{
id:"timothy_weah",
name:"Timothy Weah",
country:"United States",
club:"Marseille",
position:"Forward",
rating:86,
goals:10,
assists:9,
age:26,
height:"183 cm",
weight:"66 kg",
image:"https://i.pinimg.com/736x/9a/66/55/9a66554dce605fde3712de18f31ee820.jpg",
description:"Fast winger capable of playing as a wing-back."
},

florian_balogun:{
id:"florian_balogun",
name:"Florian Balogun",
country:"United States",
club:"AS Monaco",
position:"Forward",
rating:87,
goals:19,
assists:6,
age:25,
height:"178 cm",
weight:"70 kg",
image:"https://i.pinimg.com/1200x/43/de/49/43de49f665f37302293ecf09afeb449a.jpg",
description:"Clinical striker with excellent movement inside the penalty area."
},

gio_reyna:{
id:"gio_reyna",
name:"Giovanni Reyna",
country:"United States",
club:"Borussia Dortmund",
position:"Midfielder",
rating:87,
goals:11,
assists:12,
age:24,
height:"185 cm",
weight:"79 kg",
image:"https://i.pinimg.com/1200x/35/cf/10/35cf107196e83ff1126c76bfe3ffa0de.jpg",
description:"Creative attacking midfielder with outstanding technical ability."
},

weston_mckennie:{
id:"weston_mckennie",
name:"Weston McKennie",
country:"United States",
club:"Juventus",
position:"Midfielder",
rating:88,
goals:8,
assists:10,
age:28,
height:"185 cm",
weight:"84 kg",
image:"https://i.pinimg.com/736x/e4/99/da/e499da40826560bcb2e9bd2a45e4d641.jpg",
description:"Energetic box-to-box midfielder and aerial threat."
},

tyler_adams:{
id:"tyler_adams",
name:"Tyler Adams",
country:"United States",
club:"AFC Bournemouth",
position:"Midfielder",
rating:87,
goals:3,
assists:6,
age:27,
height:"175 cm",
weight:"72 kg",
image:"https://i.pinimg.com/736x/a8/39/7f/a8397f58d2e8b41eb6678daebcf357f8.jpg",
description:"Defensive midfielder known for leadership and relentless work rate."
},

yunus_musah:{
id:"yunus_musah",
name:"Yunus Musah",
country:"United States",
club:"AC Milan",
position:"Midfielder",
rating:86,
goals:5,
assists:8,
age:24,
height:"178 cm",
weight:"72 kg",
image:"https://i.pinimg.com/1200x/32/80/e7/3280e7116417d918e14943550e9e8e54.jpg",
description:"Dynamic midfielder with excellent dribbling and ball progression."
},

antonee_robinson:{
id:"antonee_robinson",
name:"Antonee Robinson",
country:"United States",
club:"Fulham",
position:"Defender",
rating:88,
goals:3,
assists:12,
age:29,
height:"183 cm",
weight:"70 kg",
image:"https://i.pinimg.com/736x/9c/fb/5d/9cfb5df74a9fe55ac66c0bf070d1b12b.jpg",
description:"Attack-minded left-back with tremendous pace."
},

chris_richards:{
id:"chris_richards",
name:"Chris Richards",
country:"United States",
club:"Crystal Palace",
position:"Defender",
rating:85,
goals:2,
assists:1,
age:26,
height:"188 cm",
weight:"82 kg",
image:"https://i.pinimg.com/1200x/37/ce/a5/37cea55766a6353a910700ba4c70ede1.jpg",
description:"Strong central defender with excellent aerial ability."
},

matt_turner:{
id:"matt_turner",
name:"Matt Turner",
country:"United States",
club:"Olympique Lyonnais",
position:"Goalkeeper",
rating:85,
goals:0,
assists:0,
age:32,
height:"191 cm",
weight:"88 kg",
image:"https://i.pinimg.com/736x/ad/c1/31/adc1312157c21350142cf99e5f06d02f.jpg",
description:"Experienced goalkeeper with quick reflexes."
}
};