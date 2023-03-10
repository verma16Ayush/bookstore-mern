import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { DB_URI } from "./const";
import { db } from "./models";
import { BookModel } from "./models/book";

const data = [
  {
    "title": "Bill Maher... But I'm Not Wrong",
    "isbn_number": "798853376-2",
    "author": "Maynard Cholerton",
    "genre": "Comedy",
    "synopsis": "Benign neoplasm of bones of skull and face",
    "cover_image": "https://picsum.photos/200/300",
    "price": 305
  },
  {
    "title": "Red Firecracker, Green Firecracker (Pao Da Shuang Deng)",
    "isbn_number": "661703125-3",
    "author": "Jonis Isakson",
    "genre": "Drama",
    "synopsis": "Other child abuse and neglect",
    "cover_image": "https://picsum.photos/200/300",
    "price": 360
  },
  {
    "title": "Elephants Dream",
    "isbn_number": "263346104-2",
    "author": "Lewie Russi",
    "genre": "Animation|Fantasy|Sci-Fi",
    "synopsis": "Functional urinary incontinence",
    "cover_image": "https://picsum.photos/200/300",
    "price": 418
  },
  {
    "title": "Afro Samurai: Resurrection",
    "isbn_number": "013650488-4",
    "author": "Dre Watkin",
    "genre": "Animation",
    "synopsis": "Retained placenta without hemorrhage, delivered, with mention of postpartum complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 207
  },
  {
    "title": "Arnulf Rainer",
    "isbn_number": "802742354-6",
    "author": "Annis Prestney",
    "genre": "Documentary",
    "synopsis": "Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits",
    "cover_image": "https://picsum.photos/200/300",
    "price": 197
  },
  {
    "title": "RoboGeisha (Robo-geisha)",
    "isbn_number": "859691126-X",
    "author": "Zarla Fealty",
    "genre": "Action|Comedy|Sci-Fi",
    "synopsis": "Chronic osteomyelitis, lower leg",
    "cover_image": "https://picsum.photos/200/300",
    "price": 114
  },
  {
    "title": "Coffy",
    "isbn_number": "714045292-X",
    "author": "Ludovico Abrahamoff",
    "genre": "Action|Crime|Thriller",
    "synopsis": "Other major puerperal infection, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 281
  },
  {
    "title": "Burn Paris Burn",
    "isbn_number": "867812559-4",
    "author": "Marian Theodore",
    "genre": "Animation|Fantasy|Mystery",
    "synopsis": "Other chronic pulmonary heart diseases",
    "cover_image": "https://picsum.photos/200/300",
    "price": 362
  },
  {
    "title": "Best Little Whorehouse in Texas, The",
    "isbn_number": "920778708-3",
    "author": "Lynn Andreassen",
    "genre": "Comedy|Drama|Musical|Romance",
    "synopsis": "Burn of unspecified degree of hand, unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 322
  },
  {
    "title": "Best Little Whorehouse in Texas, The",
    "isbn_number": "615629435-X",
    "author": "Denna Timcke",
    "genre": "Comedy|Drama|Musical|Romance",
    "synopsis": "Accident caused by industrial wiring, appliances, and electrical machinery",
    "cover_image": "https://picsum.photos/200/300",
    "price": 311
  },
  {
    "title": "Foxcatcher",
    "isbn_number": "393578316-7",
    "author": "Quinton Linskill",
    "genre": "Drama",
    "synopsis": "Traumatic amputation of thumb (complete)(partial), complicated",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 344
  },
  {
    "title": "Def-Con 4",
    "isbn_number": "040548521-2",
    "author": "Marketa Stockings",
    "genre": "Action|Sci-Fi",
    "synopsis": "Unspecified general medical examination",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 322
  },
  {
    "title": "Santa Clause 2, The",
    "isbn_number": "248152774-7",
    "author": "Carlene Dyhouse",
    "genre": "Children|Comedy|Fantasy|Romance",
    "synopsis": "Unspecified infection of the breast and nipple associated with childbirth, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 452
  },
  {
    "title": "Band of the Hand",
    "isbn_number": "820376011-2",
    "author": "Ninetta Lamden",
    "genre": "Action|Crime|Drama",
    "synopsis": "Psorospermiasis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 204
  },
  {
    "title": "Child of God",
    "isbn_number": "639467377-3",
    "author": "Flem Botte",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Generalized hyperhidrosis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 130
  },
  {
    "title": "Scanners",
    "isbn_number": "728364636-1",
    "author": "Farica Siccombe",
    "genre": "Horror|Sci-Fi|Thriller",
    "synopsis": "Dermatitis due to food taken internally",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 148
  },
  {
    "title": "Notting Hill",
    "isbn_number": "594087824-5",
    "author": "Lauren Jeacocke",
    "genre": "Comedy|Romance",
    "synopsis": "Nontraumatic hematoma of soft tissue",
    "cover_image": "https://picsum.photos/200/300",
    "price": 130
  },
  {
    "title": "Innocent, The",
    "isbn_number": "050548896-5",
    "author": "Sandie Dumke",
    "genre": "Drama",
    "synopsis": "Femoral hernia with gangrene, bilateral (not specified as recurrent)",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 268
  },
  {
    "title": "House of Women",
    "isbn_number": "113007443-9",
    "author": "Viva Kisting",
    "genre": "Crime|Drama",
    "synopsis": "Open fracture of epiphysis (separation) (upper) of neck of femur",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 230
  },
  {
    "title": "Separate Tables",
    "isbn_number": "203924694-0",
    "author": "Anni Ketts",
    "genre": "Drama",
    "synopsis": "Nontraffic accident involving motor-driven snow vehicle injuring passenger on motorcycle",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 431
  },
  {
    "title": "Princess Raccoon (Operetta tanuki goten)",
    "isbn_number": "983672356-0",
    "author": "Matias Jannings",
    "genre": "Comedy|Fantasy|Musical|Romance",
    "synopsis": "Poisoning by other antipsychotics, neuroleptics, and major tranquilizers",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 318
  },
  {
    "title": "Fall of the House of Usher, The (Z??nik domu Usheru)",
    "isbn_number": "806814255-X",
    "author": "Frasco Jays",
    "genre": "Animation",
    "synopsis": "Coagulation defects complicating pregnancy, childbirth, or the puerperium, delivered, with mention of postpartum complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 423
  },
  {
    "title": "I Am Sam",
    "isbn_number": "465996189-3",
    "author": "Sidonia Ellacombe",
    "genre": "Drama",
    "synopsis": "Burn [any degree] involving 90 percent or more of body surface with third degree burn, 80-89%",
    "cover_image": "https://picsum.photos/200/300",
    "price": 302
  },
  {
    "title": "Devil and Daniel Johnston, The",
    "isbn_number": "027421968-9",
    "author": "Jules Kulas",
    "genre": "Documentary",
    "synopsis": "Osteoarthrosis, localized, not specified whether primary or secondary, shoulder region",
    "cover_image": "https://picsum.photos/200/300",
    "price": 452
  },
  {
    "title": "Night of the Living Dead",
    "isbn_number": "203979227-9",
    "author": "Jean Deniske",
    "genre": "Horror",
    "synopsis": "Chronic post-traumatic headache",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 349
  },
  {
    "title": "Farsan",
    "isbn_number": "002432590-2",
    "author": "Bria Libermore",
    "genre": "Comedy",
    "synopsis": "Otosclerosis involving oval window, nonobliterative",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 354
  },
  {
    "title": "Jesus Christ Vampire Hunter",
    "isbn_number": "857897301-1",
    "author": "Beilul Scutter",
    "genre": "Action|Comedy|Horror|Musical",
    "synopsis": "Other hamartoses, not elsewhere classified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 111
  },
  {
    "title": "Live Free or Die",
    "isbn_number": "827859224-1",
    "author": "Oby Harle",
    "genre": "Comedy|Crime",
    "synopsis": "Unspecified disorder of orbit",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 384
  },
  {
    "title": "Nightmares",
    "isbn_number": "479842324-6",
    "author": "Stanislaus Tolman",
    "genre": "Horror",
    "synopsis": "Poisoning by skeletal muscle relaxants",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 208
  },
  {
    "title": "Waiting For Armageddon",
    "isbn_number": "262727213-6",
    "author": "Aggie McGroarty",
    "genre": "Documentary",
    "synopsis": "Open wound of hip and thigh, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 435
  },
  {
    "title": "Fear Me Not (Den du frygter)",
    "isbn_number": "392654209-8",
    "author": "Ermina Kobus",
    "genre": "Drama|Thriller",
    "synopsis": "Dysplasia of prostate",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 324
  },
  {
    "title": "Corn on the Cop",
    "isbn_number": "545234956-1",
    "author": "Kaela Davitashvili",
    "genre": "(no genres listed)",
    "synopsis": "Accidental drowning and submersion while engaged in other sport or recreational activity with diving equipment",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 425
  },
  {
    "title": "Boy Meets Boy",
    "isbn_number": "050557181-1",
    "author": "Pippy Rosenfelt",
    "genre": "Romance",
    "synopsis": "Inguinal hernia, with obstruction, without mention of gangrene, bilateral (not specified as recurrent)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 186
  },
  {
    "title": "Panic in the Streets",
    "isbn_number": "029071644-6",
    "author": "Esteban Linneman",
    "genre": "Crime|Drama|Film-Noir|Thriller",
    "synopsis": "Idiopathic lymphoid interstitial pneumonia",
    "cover_image": "https://picsum.photos/200/300",
    "price": 339
  },
  {
    "title": "Runaway",
    "isbn_number": "186206965-4",
    "author": "Noella Fryman",
    "genre": "Sci-Fi|Thriller",
    "synopsis": "Poisoning by poliomyelitis vaccine",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 381
  },
  {
    "title": "Evocateur: The Morton Downey Jr. Movie",
    "isbn_number": "689930779-0",
    "author": "Cori Calbert",
    "genre": "Documentary",
    "synopsis": "Activity involving pilates",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 351
  },
  {
    "title": "Ivul",
    "isbn_number": "768395765-8",
    "author": "Milt Greatbach",
    "genre": "Drama",
    "synopsis": "Chronic osteomyelitis, upper arm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 141
  },
  {
    "title": "Day Lincoln Was Shot, The",
    "isbn_number": "534590073-6",
    "author": "Gabie Knath",
    "genre": "Drama",
    "synopsis": "Hemangioma of intra-abdominal structures",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 473
  },
  {
    "title": "G??n??ral Idi Amin Dada: A Self Portrait (G??n??ral Idi Amin Dada: Autoportrait)",
    "isbn_number": "546072759-6",
    "author": "Marylee Aisthorpe",
    "genre": "Documentary|War",
    "synopsis": "Abdominal pregnancy with intrauterine pregnancy",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 284
  },
  {
    "title": "I Am David",
    "isbn_number": "493302642-4",
    "author": "Vitoria Copas",
    "genre": "Drama",
    "synopsis": "Open wound of back, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 331
  },
  {
    "title": "Witchboard",
    "isbn_number": "047664857-2",
    "author": "Kilian Joriot",
    "genre": "Horror|Mystery|Thriller",
    "synopsis": "Other malignant lymphomas, spleen",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 457
  },
  {
    "title": "Mister Roberts",
    "isbn_number": "883501830-7",
    "author": "Carce Spire",
    "genre": "Comedy|Drama|War",
    "synopsis": "Erosion, extending into pulp",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 404
  },
  {
    "title": "Land of the Dead",
    "isbn_number": "790455674-X",
    "author": "Rodie Johnsee",
    "genre": "Action|Horror|Thriller",
    "synopsis": "C5-C7 level with other specified spinal cord injury",
    "cover_image": "https://picsum.photos/200/300",
    "price": 490
  },
  {
    "title": "Jack Frost 2: Revenge of the Mutant Killer Snowman",
    "isbn_number": "875750451-2",
    "author": "Jeremy Still",
    "genre": "Horror",
    "synopsis": "Eclampsia, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 300
  },
  {
    "title": "Where Are My Children?",
    "isbn_number": "936366368-X",
    "author": "Gasparo Anersen",
    "genre": "Drama",
    "synopsis": "Neonatal thyrotoxicosis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 180
  },
  {
    "title": "Butcher's Wife, The",
    "isbn_number": "011476809-9",
    "author": "Minnaminnie Aggs",
    "genre": "Comedy|Romance",
    "synopsis": "Drug withdrawal",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 373
  },
  {
    "title": "Soldier's Plaything, A",
    "isbn_number": "185976368-5",
    "author": "Bree Letson",
    "genre": "Comedy|Drama|Romance|War",
    "synopsis": "Screening for other hemoglobinopathies",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 256
  },
  {
    "title": "My Best Fiend (Mein liebster Feind)",
    "isbn_number": "632866278-5",
    "author": "Nikolos Chiene",
    "genre": "Documentary",
    "synopsis": "Chronic viral hepatitis B with hepatic coma without hepatitis delta",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 460
  },
  {
    "title": "Doom Generation, The",
    "isbn_number": "463327348-5",
    "author": "Kiah Lees",
    "genre": "Comedy|Crime|Drama",
    "synopsis": "Unspecified abortion, with other specified complications, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 221
  },
  {
    "title": "Eve and the Fire Horse",
    "isbn_number": "183993896-X",
    "author": "Avril Eastman",
    "genre": "Drama",
    "synopsis": "Mixed incontinence (male) (female)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 200
  },
  {
    "title": "Boccaccio '70",
    "isbn_number": "825103359-4",
    "author": "Lamont Plewright",
    "genre": "Comedy|Fantasy|Romance",
    "synopsis": "Activities involving baseball",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 415
  },
  {
    "title": "Final Darkness, The (Buio Omega)",
    "isbn_number": "299475363-4",
    "author": "Moise Dunne",
    "genre": "Horror",
    "synopsis": "Chronic periodontitis, localized",
    "cover_image": "https://picsum.photos/200/300",
    "price": 342
  },
  {
    "title": "Indiscretion of an American Wife (a.k.a. Terminal Station) (Stazione Termini)",
    "isbn_number": "197734374-0",
    "author": "Salomone Gramer",
    "genre": "Drama",
    "synopsis": "Shock due to anesthesia, not elsewhere classified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 348
  },
  {
    "title": "Ararat",
    "isbn_number": "736762764-3",
    "author": "Katherina De Bernardis",
    "genre": "Drama|War",
    "synopsis": "Degenerative disorder of globe, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 149
  },
  {
    "title": "Robin Hood: Men in Tights",
    "isbn_number": "699558124-5",
    "author": "Gregor Browning",
    "genre": "Comedy",
    "synopsis": "Trigeminal nerve disorder, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 235
  },
  {
    "title": "Kiss Me Again",
    "isbn_number": "002501361-0",
    "author": "Robers Burry",
    "genre": "Drama|Romance",
    "synopsis": "Open fracture of seventh cervical vertebra",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 199
  },
  {
    "title": "Skenbart: En film om t??g",
    "isbn_number": "294238322-4",
    "author": "Brant Stockin",
    "genre": "Comedy",
    "synopsis": "Ainhum",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 188
  },
  {
    "title": "Dillinger Is Dead (Dillinger ?? morto)",
    "isbn_number": "388287059-1",
    "author": "Carin Napolitano",
    "genre": "Crime|Drama",
    "synopsis": "Accident caused by ignition of clothing by unspecified source",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 373
  },
  {
    "title": "From Dad to Son",
    "isbn_number": "846828207-3",
    "author": "Dayna Gayther",
    "genre": "Animation|Drama",
    "synopsis": "Activities involving piano playing",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 284
  },
  {
    "title": "Flight",
    "isbn_number": "707750544-8",
    "author": "Robby Lattin",
    "genre": "Drama",
    "synopsis": "Open fracture of rib(s), unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 419
  },
  {
    "title": "Like Water",
    "isbn_number": "058200319-9",
    "author": "Brandais Gerdes",
    "genre": "Documentary",
    "synopsis": "Secondary malignant neoplasm of pleura",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 182
  },
  {
    "title": "Smile Like Yours, A",
    "isbn_number": "612499382-1",
    "author": "Obadias Reoch",
    "genre": "Comedy|Romance",
    "synopsis": "Recurrent iridocyclitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 260
  },
  {
    "title": "Maid in Sweden",
    "isbn_number": "159808717-7",
    "author": "Almire Kynston",
    "genre": "Drama",
    "synopsis": "Moderate stage glaucoma",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 302
  },
  {
    "title": "The Walking Stick",
    "isbn_number": "665423563-0",
    "author": "Adair Ary",
    "genre": "Crime|Drama|Romance",
    "synopsis": "Contusion of unspecified site",
    "cover_image": "https://picsum.photos/200/300",
    "price": 406
  },
  {
    "title": "Hothead (Coup de t??te)",
    "isbn_number": "309268581-4",
    "author": "Barrett Harberer",
    "genre": "Comedy|Drama",
    "synopsis": "Personal history of leukemia, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 285
  },
  {
    "title": "Nobody Owns Me (Mig ??ger ingen)",
    "isbn_number": "096694913-7",
    "author": "Hal Muller",
    "genre": "Drama",
    "synopsis": "Malignant carcinoid tumor of foregut, not otherwise specified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 303
  },
  {
    "title": "Barry Lyndon",
    "isbn_number": "929937512-7",
    "author": "Roxana Knibb",
    "genre": "Drama|Romance|War",
    "synopsis": "Other household maintenance",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 208
  },
  {
    "title": "Lost World, The",
    "isbn_number": "607927178-8",
    "author": "Che Springell",
    "genre": "Adventure|Sci-Fi",
    "synopsis": "Unspecified hemorrhagic conditions",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 197
  },
  {
    "title": "Herbie Goes to Monte Carlo",
    "isbn_number": "824331403-2",
    "author": "Marc Valentin",
    "genre": "Adventure|Children|Comedy",
    "synopsis": "Other and unspecified mycoses",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 310
  },
  {
    "title": "Ouch (A??e)",
    "isbn_number": "429279484-7",
    "author": "Petr Mahoney",
    "genre": "Comedy",
    "synopsis": "Secondary uterine inertia, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 391
  },
  {
    "title": "Thor: Tales of Asgard",
    "isbn_number": "136720192-6",
    "author": "Katherine Allridge",
    "genre": "Animation",
    "synopsis": "Anatomical narrow angle borderline glaucoma",
    "cover_image": "https://picsum.photos/200/300",
    "price": 320
  },
  {
    "title": "Into the Forest of Fireflies' Light",
    "isbn_number": "606805425-X",
    "author": "Lauryn Tudhope",
    "genre": "Animation|Drama|Fantasy",
    "synopsis": "Anemias due to disorders of glutathione metabolism",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 166
  },
  {
    "title": "Winter of Discontent",
    "isbn_number": "811867026-0",
    "author": "Coop Creed",
    "genre": "Drama",
    "synopsis": "Geniculate ganglionitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 353
  },
  {
    "title": "They Came to Cordura",
    "isbn_number": "047657011-5",
    "author": "Max Kezar",
    "genre": "Western",
    "synopsis": "Acute (transverse) myelitis NOS",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 487
  },
  {
    "title": "The Baker's Wife",
    "isbn_number": "469750539-5",
    "author": "Torin Troy",
    "genre": "Comedy|Drama",
    "synopsis": "Hepatitis E without mention of hepatic coma",
    "cover_image": "https://picsum.photos/200/300",
    "price": 250
  },
  {
    "title": "Born American",
    "isbn_number": "974024253-7",
    "author": "Maryanne Glover",
    "genre": "Action|Drama|Thriller",
    "synopsis": "Fall on stairs or ladders in water transport injuring occupant of other watercraft -- other than crew",
    "cover_image": "https://picsum.photos/200/300",
    "price": 363
  },
  {
    "title": "Players, The (Les infid??les)",
    "isbn_number": "567301014-1",
    "author": "Bendick Finlay",
    "genre": "Comedy",
    "synopsis": "Mushroom workers' lung",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 288
  },
  {
    "title": "Shoot the Moon",
    "isbn_number": "627395814-9",
    "author": "Nannette Wanless",
    "genre": "Drama",
    "synopsis": "Traumatic amputation of arm and hand (complete) (partial), unilateral, level not specified, without mention of complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 399
  },
  {
    "title": "Saving Otter 501",
    "isbn_number": "606884384-X",
    "author": "Jerrylee Baggiani",
    "genre": "Documentary",
    "synopsis": "Activities involving water sliding",
    "cover_image": "https://picsum.photos/200/300",
    "price": 472
  },
  {
    "title": "American Tail, An",
    "isbn_number": "916350413-8",
    "author": "Catarina Lagadu",
    "genre": "Adventure|Animation|Children|Comedy",
    "synopsis": "Vascular lesions of cord complicating labor and delivery, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 135
  },
  {
    "title": "Paradise: Hope (Paradies: Hoffnung)",
    "isbn_number": "516393027-3",
    "author": "Gizela Kleinerman",
    "genre": "Drama",
    "synopsis": "Leishmaniasis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 123
  },
  {
    "title": "Zulu",
    "isbn_number": "303131518-9",
    "author": "Phyllys Walas",
    "genre": "Action|Drama|War",
    "synopsis": "Benign carcinoid tumor of the rectum",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 264
  },
  {
    "title": "Rick",
    "isbn_number": "212557322-9",
    "author": "Adelbert Brayn",
    "genre": "Comedy|Drama",
    "synopsis": "Open fracture of vault of skull with other and unspecified intracranial hemorrhage, with loss of consciousness of unspecified duration",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 186
  },
  {
    "title": "Hello Ladies: The Movie",
    "isbn_number": "686861987-1",
    "author": "Allissa Andreazzi",
    "genre": "Comedy",
    "synopsis": "Injury to popliteal vein",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 227
  },
  {
    "title": "Sam Peckinpah's West: Legacy of a Hollywood Renegade",
    "isbn_number": "915793427-4",
    "author": "Domenic Vyse",
    "genre": "Documentary",
    "synopsis": "Unspecified nasal polyp",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 188
  },
  {
    "title": "Octopus, The (Le poulpe)",
    "isbn_number": "833643124-1",
    "author": "Shell Carlos",
    "genre": "Comedy|Crime|Thriller",
    "synopsis": "Legally induced abortion, with other specified complications, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 241
  },
  {
    "title": "Anger Management",
    "isbn_number": "917999744-9",
    "author": "Barbara-anne Lammin",
    "genre": "Comedy",
    "synopsis": "Unsatisfactory vaginal cytology smear",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 364
  },
  {
    "title": "Lost World, The",
    "isbn_number": "812101072-1",
    "author": "Lombard Brandenburg",
    "genre": "Adventure",
    "synopsis": "Open wound of scalp, complicated",
    "cover_image": "https://picsum.photos/200/300",
    "price": 200
  },
  {
    "title": "Marie Antoinette",
    "isbn_number": "358550719-0",
    "author": "Leupold Frodsham",
    "genre": "Drama|Romance",
    "synopsis": "Open fracture of anatomical neck of humerus",
    "cover_image": "https://picsum.photos/200/300",
    "price": 101
  },
  {
    "title": "Age of Dinosaurs",
    "isbn_number": "866356609-3",
    "author": "Melinda Gawn",
    "genre": "Action|Sci-Fi",
    "synopsis": "Superior glenoid labrum lesion",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 115
  },
  {
    "title": "This World, Then the Fireworks",
    "isbn_number": "029762816-X",
    "author": "Christoph Sevior",
    "genre": "Crime|Drama|Film-Noir",
    "synopsis": "Retention of urine, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 179
  },
  {
    "title": "Child Is Waiting, A",
    "isbn_number": "827802788-9",
    "author": "Melba Snelman",
    "genre": "Drama",
    "synopsis": "Acute (transverse) myelitis in conditions classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 256
  },
  {
    "title": "Girl 6",
    "isbn_number": "702873378-5",
    "author": "Myrtie Yepiskov",
    "genre": "Comedy|Drama",
    "synopsis": "Other closed skull fracture with other and unspecified intracranial hemorrhage, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 103
  },
  {
    "title": "Adios Sabata",
    "isbn_number": "053849016-0",
    "author": "Agnes Maslen",
    "genre": "Action|War|Western",
    "synopsis": "Other valgus deformities of feet",
    "cover_image": "https://picsum.photos/200/300",
    "price": 478
  },
  {
    "title": "Bronx Tale, A",
    "isbn_number": "692065294-3",
    "author": "Ellswerth Nutman",
    "genre": "Drama",
    "synopsis": "Other lymphedema",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 240
  },
  {
    "title": "Friend Among Strangers, Stranger Among Friends (Svoy sredi chuzhikh, chuzhoy sredi svoikh)",
    "isbn_number": "433600699-7",
    "author": "Lynnea Steers",
    "genre": "Action|War|Western",
    "synopsis": "Intermittent heterotropia, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 339
  },
  {
    "title": "Brasher Doubloon, The",
    "isbn_number": "340805957-8",
    "author": "Ermina Abramowitz",
    "genre": "Crime|Drama|Film-Noir|Mystery",
    "synopsis": "Contracture of joint, pelvic region and thigh",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 237
  },
  {
    "title": "Guru, The",
    "isbn_number": "654603080-2",
    "author": "Delcina Kinnach",
    "genre": "Comedy|Romance",
    "synopsis": "Other motor vehicle traffic accident involving collision on the highway injuring passenger in motor vehicle other than motorcycle",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 332
  },
  {
    "title": "My Family",
    "isbn_number": "474090861-1",
    "author": "Chelsey Bambrugh",
    "genre": "Drama",
    "synopsis": "Traumatic pneumothorax with open wound into thorax",
    "cover_image": "https://picsum.photos/200/300",
    "price": 467
  },
  {
    "title": "May",
    "isbn_number": "061656462-7",
    "author": "Kissiah Banford",
    "genre": "Drama|Horror",
    "synopsis": "Unspecified prolonged labor, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 425
  },
  {
    "title": "Best of Times, The",
    "isbn_number": "156682040-5",
    "author": "Karel Quinnette",
    "genre": "Comedy|Drama",
    "synopsis": "Atrophic gastritis, without mention of hemorrhage",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 465
  },
  {
    "title": "Monster Club, The",
    "isbn_number": "562804169-6",
    "author": "Claresta Gripton",
    "genre": "Comedy|Horror",
    "synopsis": "Fetal growth retardation, unspecified, 1,500-1,749 grams",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 256
  },
  {
    "title": "Cameron's Closet",
    "isbn_number": "858513514-X",
    "author": "Joyce Dunning",
    "genre": "Horror",
    "synopsis": "Infected postoperative seroma",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 306
  },
  {
    "title": "Killings at Outpost Zeta, The",
    "isbn_number": "921797665-2",
    "author": "Mariel Gianneschi",
    "genre": "Drama|Sci-Fi",
    "synopsis": "Other orbital disorders",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 487
  },
  {
    "title": "Plutonium Circus",
    "isbn_number": "259285683-8",
    "author": "Allan Labbe",
    "genre": "Documentary",
    "synopsis": "Superficial foreign body (splinter) of hip, thigh, leg, and ankle, without major open wound and without mention of infection",
    "cover_image": "https://picsum.photos/200/300",
    "price": 262
  },
  {
    "title": "Alphabet",
    "isbn_number": "843882595-8",
    "author": "Dinny Ullyatt",
    "genre": "Documentary",
    "synopsis": "Other specified noninflammatory disorders of vagina",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 103
  },
  {
    "title": "Notorious Landlady, The",
    "isbn_number": "241179415-0",
    "author": "Tremain Winslade",
    "genre": "Comedy|Mystery",
    "synopsis": "Screening for sickle-cell disease or trait",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 270
  },
  {
    "title": "Heavy Metal",
    "isbn_number": "848279053-6",
    "author": "Alfonso Bissell",
    "genre": "Action|Adventure|Animation|Horror|Sci-Fi",
    "synopsis": "Foreign body in lacrimal punctum",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 197
  },
  {
    "title": "Kill Theory",
    "isbn_number": "474543228-3",
    "author": "Desiree Vittel",
    "genre": "Horror|Thriller",
    "synopsis": "Abnormal chest sounds",
    "cover_image": "https://picsum.photos/200/300",
    "price": 292
  },
  {
    "title": "Slam",
    "isbn_number": "023934765-X",
    "author": "Bobbie Stacey",
    "genre": "Drama",
    "synopsis": "Laboratory examination ordered as part of a routine general medical examination",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 152
  },
  {
    "title": "Gorko!",
    "isbn_number": "563852206-9",
    "author": "Emili Myton",
    "genre": "Comedy",
    "synopsis": "Tuberculosis of mother, complicating pregnancy, childbirth, or the puerperium,postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 401
  },
  {
    "title": "Do the Right Thing",
    "isbn_number": "653410880-1",
    "author": "Michail Sturch",
    "genre": "Drama",
    "synopsis": "Isolated tracheal or bronchial tuberculosis, tubercle bacilli not found by bacteriological examination, but tuberculosis confirmed histologically",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 359
  },
  {
    "title": "10th Kingdom, The",
    "isbn_number": "457806566-9",
    "author": "Karlie Sartin",
    "genre": "Adventure|Comedy|Fantasy",
    "synopsis": "Unspecified malignant neoplasm of eyelid, including canthus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 202
  },
  {
    "title": "Summit, The",
    "isbn_number": "299313305-5",
    "author": "Tamara Wetton",
    "genre": "Documentary",
    "synopsis": "Sprain of radiocarpal (joint) (ligament) of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 464
  },
  {
    "title": "Bye Bye Monkey (Ciao maschio)",
    "isbn_number": "935538213-8",
    "author": "Dom Morrish",
    "genre": "Comedy|Drama|Fantasy",
    "synopsis": "Open fracture of sixth cervical vertebra",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 426
  },
  {
    "title": "Beyond Justice",
    "isbn_number": "199109860-X",
    "author": "Charlie Matthewson",
    "genre": "Action|Adventure|Drama",
    "synopsis": "Enzymes, not elsewhere classified, causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 468
  },
  {
    "title": "Lovers and Other Strangers",
    "isbn_number": "360164039-2",
    "author": "Otis Gubbins",
    "genre": "Comedy",
    "synopsis": "Schmorl's nodes, thoracic region",
    "cover_image": "https://picsum.photos/200/300",
    "price": 480
  },
  {
    "title": "Story of Floating Weeds, A (Ukikusa monogatari)",
    "isbn_number": "329289922-2",
    "author": "Wendeline Erangey",
    "genre": "Drama",
    "synopsis": "Disorganized type schizophrenia, subchronic",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 324
  },
  {
    "title": "Ed Hardy: Tattoo the World ",
    "isbn_number": "917404424-9",
    "author": "Odey Argent",
    "genre": "Documentary",
    "synopsis": "Acute myocardial infarction of other lateral wall, initial episode of care",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 283
  },
  {
    "title": "Elizabeth: The Golden Age",
    "isbn_number": "613685585-2",
    "author": "Felicle Sausman",
    "genre": "Drama",
    "synopsis": "Nonspecific (abnormal) findings on radiological and other examination of biliary tract",
    "cover_image": "https://picsum.photos/200/300",
    "price": 461
  },
  {
    "title": "The Apocalypse",
    "isbn_number": "996565942-7",
    "author": "Gerardo O'Sirin",
    "genre": "Action|Drama",
    "synopsis": "Ocular hypertension",
    "cover_image": "https://picsum.photos/200/300",
    "price": 105
  },
  {
    "title": "Axed",
    "isbn_number": "767421653-5",
    "author": "Roda Lavens",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Mitral valve insufficiency and aortic valve insufficiency",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 351
  },
  {
    "title": "Young at Heart",
    "isbn_number": "385468599-8",
    "author": "Elmira Petrol",
    "genre": "Drama|Musical|Romance",
    "synopsis": "Foreign object left in body during other specified procedures",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 471
  },
  {
    "title": "Green Wave, The",
    "isbn_number": "426654632-7",
    "author": "Anne-marie Jolly",
    "genre": "Documentary",
    "synopsis": "Arthropathy associated with respiratory disorders",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 389
  },
  {
    "title": "The Magic Flute",
    "isbn_number": "197028865-5",
    "author": "Lynn Emett",
    "genre": "Drama|Musical|Romance",
    "synopsis": "Pelvic varices",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 158
  },
  {
    "title": "Fruitvale Station",
    "isbn_number": "934909111-9",
    "author": "Berty Louedey",
    "genre": "Drama",
    "synopsis": "Crushing injury of unspecified site of upper limb",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 307
  },
  {
    "title": "My Best Friend (Mon meilleur ami)",
    "isbn_number": "032567098-6",
    "author": "Torrence Trencher",
    "genre": "Comedy",
    "synopsis": "Orthodontics aftercare",
    "cover_image": "https://picsum.photos/200/300",
    "price": 371
  },
  {
    "title": "Witch Who Came from the Sea, The",
    "isbn_number": "005688692-6",
    "author": "Bessie Rounsefull",
    "genre": "Horror|Thriller",
    "synopsis": "Other causes of obstructed labor, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 211
  },
  {
    "title": "American Werewolf in London, An",
    "isbn_number": "521207544-0",
    "author": "Rafael Ruggs",
    "genre": "Comedy|Horror|Thriller",
    "synopsis": "Injury to sacral nerve root",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 433
  },
  {
    "title": "Illusion Travels by Streetcar (Ilusi??n viaja en tranv??a, La)",
    "isbn_number": "643015390-8",
    "author": "Maurise Redmayne",
    "genre": "Adventure|Comedy|Drama",
    "synopsis": "Cocaine dependence, episodic",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 389
  },
  {
    "title": "Lady Chatterley's Lover",
    "isbn_number": "545427007-5",
    "author": "Quinlan Labat",
    "genre": "Drama|Romance",
    "synopsis": "Other issue of medical certificates",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 445
  },
  {
    "title": "Don't Move (Non ti muovere)",
    "isbn_number": "733241597-6",
    "author": "Valli Gogarty",
    "genre": "Drama",
    "synopsis": "Motor vehicle traffic accident involving collision with pedestrian injuring pedal cyclist",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 443
  },
  {
    "title": "Miss Zombie",
    "isbn_number": "723076629-X",
    "author": "Tish Durdy",
    "genre": "Horror",
    "synopsis": "Otalgia, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 135
  },
  {
    "title": "Tormented",
    "isbn_number": "718225095-0",
    "author": "Joletta Milburne",
    "genre": "Comedy|Horror",
    "synopsis": "Poisoning by other psychostimulants",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 155
  },
  {
    "title": "Love Affair",
    "isbn_number": "237252047-4",
    "author": "Pascal Spondley",
    "genre": "Drama|Romance",
    "synopsis": "Dermatographic urticaria",
    "cover_image": "https://picsum.photos/200/300",
    "price": 226
  },
  {
    "title": "Queen and I, The (Drottningen och jag)",
    "isbn_number": "004114473-2",
    "author": "Drew Lanston",
    "genre": "Documentary",
    "synopsis": "Anaplastic large cell lymphoma, intrapelvic lymph nodes",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 129
  },
  {
    "title": "Revolt of the Zombies",
    "isbn_number": "121894884-1",
    "author": "Reggie Castro",
    "genre": "Horror|War",
    "synopsis": "Care involving orthoptic training",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 417
  },
  {
    "title": "Jill the Ripper (Jill Rips)",
    "isbn_number": "476678912-1",
    "author": "Dyan Gouda",
    "genre": "Drama|Thriller",
    "synopsis": "Diabetes mellitus of mother, complicating pregnancy, childbirth, or the puerperium, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 189
  },
  {
    "title": "Way of the Gun, The",
    "isbn_number": "487876946-7",
    "author": "Pen Fargher",
    "genre": "Crime|Thriller",
    "synopsis": "Other encephalitis and encephalomyelitis due to other infections classified elsewhere",
    "cover_image": "https://picsum.photos/200/300",
    "price": 126
  },
  {
    "title": "And God Created Woman (Et Dieu... cr??a la femme)",
    "isbn_number": "054388051-6",
    "author": "Lamar Bradburne",
    "genre": "Drama",
    "synopsis": "Injury to transverse colon, with open wound into cavity",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 295
  },
  {
    "title": "Rebirth of Mothra II",
    "isbn_number": "073032294-7",
    "author": "Damiano Billyeald",
    "genre": "Action|Fantasy",
    "synopsis": "Pulmonary tularemia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 367
  },
  {
    "title": "Tangled",
    "isbn_number": "486501924-3",
    "author": "Cyndy Gisbey",
    "genre": "Animation|Children|Comedy|Fantasy|Musical|Romance|IMAX",
    "synopsis": "Personal history of (corrected) congenital malformations of integument, limbs, and musculoskeletal systems",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 160
  },
  {
    "title": "Wu Tang Master (Tian shi zhuang xie)",
    "isbn_number": "640352166-7",
    "author": "Josephina De Malchar",
    "genre": "Action",
    "synopsis": "Neoplasm of uncertain behavior of meninges",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 320
  },
  {
    "title": "Shriek If You Know What I Did Last Friday the Thirteenth",
    "isbn_number": "721052504-1",
    "author": "Melina Legan",
    "genre": "Comedy|Horror",
    "synopsis": "Cortex (cerebral) laceration with open intracranial wound, with brief [less than one hour] loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 290
  },
  {
    "title": "Bethlehem",
    "isbn_number": "379431925-7",
    "author": "Marisa Oakley",
    "genre": "Drama|Thriller|War",
    "synopsis": "Aneurysm of unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 170
  },
  {
    "title": "Schooled: The Price of College Sports ",
    "isbn_number": "634101232-2",
    "author": "Jacintha Mariner",
    "genre": "Documentary",
    "synopsis": "Secondary malignant neoplasm of other specified sites",
    "cover_image": "https://picsum.photos/200/300",
    "price": 329
  },
  {
    "title": "Starship Troopers",
    "isbn_number": "585696322-9",
    "author": "Luke Deely",
    "genre": "Action|Sci-Fi",
    "synopsis": "Encopresis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 354
  },
  {
    "title": "Lola Versus",
    "isbn_number": "424825010-1",
    "author": "Renata Draycott",
    "genre": "Comedy|Romance",
    "synopsis": "West Nile Fever with other neurologic manifestation",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 412
  },
  {
    "title": "City of Ghosts",
    "isbn_number": "827940780-4",
    "author": "Quinta Card",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Boutonneuse fever",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 495
  },
  {
    "title": "Ordinary Miracles",
    "isbn_number": "949827525-4",
    "author": "Robinson Vellacott",
    "genre": "Drama",
    "synopsis": "Antivaricose drugs, including sclerosing agents, causing adverse effects in therapeutic use",
    "cover_image": "https://picsum.photos/200/300",
    "price": 107
  },
  {
    "title": "Oranges",
    "isbn_number": "984308497-7",
    "author": "Fae Roggeman",
    "genre": "Drama",
    "synopsis": "Atypical face pain",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 336
  },
  {
    "title": "Marty",
    "isbn_number": "872940292-1",
    "author": "Daveta Di Biagi",
    "genre": "Drama|Romance",
    "synopsis": "Occlusion and stenosis of multiple and bilateral precerebral arteries without mention of cerebral infarction",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 402
  },
  {
    "title": "Prince of Persia: The Sands of Time",
    "isbn_number": "197117905-1",
    "author": "Jacklyn Hamlet",
    "genre": "Action|Adventure|Fantasy|Romance|IMAX",
    "synopsis": "Pulmonary congestion and hypostasis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 342
  },
  {
    "title": "De la servitude moderne",
    "isbn_number": "559182271-1",
    "author": "Jeremias Toseland",
    "genre": "Documentary",
    "synopsis": "Trichomonal urethritis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 161
  },
  {
    "title": "Life After Beth",
    "isbn_number": "118719801-3",
    "author": "Ottilie Creenan",
    "genre": "Comedy|Horror|Romance",
    "synopsis": "Mixed malaria",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 206
  },
  {
    "title": "Trigun: Badlands Rumble",
    "isbn_number": "269746086-1",
    "author": "Poul Skelly",
    "genre": "Action|Animation|Sci-Fi|Western",
    "synopsis": "Villonodular synovitis, shoulder region",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 274
  },
  {
    "title": "Tonight and Every Night",
    "isbn_number": "531029769-3",
    "author": "Lon Paskins",
    "genre": "Musical",
    "synopsis": "Dermatoglyphic anomalies",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 212
  },
  {
    "title": "Cassandra's Dream",
    "isbn_number": "336402905-9",
    "author": "Thekla Purdon",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Open wound of mouth, unspecified site, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 390
  },
  {
    "title": "Ghoulies",
    "isbn_number": "550331073-X",
    "author": "Galvin Lepard",
    "genre": "Horror",
    "synopsis": "Cortex (cerebral) contusion without mention of open intracranial wound, with moderate [1-24 hours] loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 401
  },
  {
    "title": "Chicago Overcoat",
    "isbn_number": "771042680-8",
    "author": "Patsy Judson",
    "genre": "Action|Drama",
    "synopsis": "Cachexia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 475
  },
  {
    "title": "Carancho",
    "isbn_number": "560689092-5",
    "author": "Veronique Dyball",
    "genre": "Crime|Drama|Romance",
    "synopsis": "Sezary's disease, spleen",
    "cover_image": "https://picsum.photos/200/300",
    "price": 499
  },
  {
    "title": "Batman",
    "isbn_number": "191822598-2",
    "author": "Adriena Collier",
    "genre": "Action|Adventure|Crime|Sci-Fi|Thriller",
    "synopsis": "Arthropod-borne viral disease, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 221
  },
  {
    "title": "Drew: The Man Behind the Poster",
    "isbn_number": "503441276-4",
    "author": "Oren Qusklay",
    "genre": "Documentary",
    "synopsis": "Sedative, hypnotic or anxiolytic abuse, continuous",
    "cover_image": "https://picsum.photos/200/300",
    "price": 224
  },
  {
    "title": "Moebius Redux: A Life in Pictures",
    "isbn_number": "434318821-3",
    "author": "Nicolette Sivess",
    "genre": "Documentary",
    "synopsis": "Contracture of joint, other specified sites",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 213
  },
  {
    "title": "Five and Ten",
    "isbn_number": "636090797-6",
    "author": "Hatti Gladstone",
    "genre": "Romance",
    "synopsis": "Prolonged pregnancy, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 133
  },
  {
    "title": "Violette",
    "isbn_number": "331994324-3",
    "author": "Cheryl Donet",
    "genre": "Drama",
    "synopsis": "Lack of adequate sleep",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 172
  },
  {
    "title": "Executive Target",
    "isbn_number": "941495274-8",
    "author": "Haroun Mullany",
    "genre": "Action|Adventure|Crime|Thriller",
    "synopsis": "One eye: moderate vision impairment; other eye: near-normal vision",
    "cover_image": "https://picsum.photos/200/300",
    "price": 347
  },
  {
    "title": "American Outlaws",
    "isbn_number": "993873272-0",
    "author": "Sidonnie Brimm",
    "genre": "Action|Comedy|Western",
    "synopsis": "Multiple gestation following (elective) fetal reduction,delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 114
  },
  {
    "title": "Sonatine (Sonachine)",
    "isbn_number": "453358917-0",
    "author": "Godart Kirton",
    "genre": "Action|Comedy|Crime|Drama",
    "synopsis": "Injury to unspecified blood vessel of abdomen and pelvis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 449
  },
  {
    "title": "Permanent Midnight",
    "isbn_number": "585754850-0",
    "author": "Dorelle Taudevin",
    "genre": "Drama",
    "synopsis": "Deep transverse arrest and persistent occipitoposterior position, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 142
  },
  {
    "title": "Gang's All Here, The",
    "isbn_number": "602738324-0",
    "author": "Hervey Calderonello",
    "genre": "Comedy|Musical|Romance",
    "synopsis": "Cerebellar or brain stem contusion without mention of open intracranial wound, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 152
  },
  {
    "title": "Kitty",
    "isbn_number": "095368907-7",
    "author": "Gherardo Longhorn",
    "genre": "Drama",
    "synopsis": "Chronic venous embolism and thrombosis of internal jugular veins",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 276
  },
  {
    "title": "Cold Comes the Night",
    "isbn_number": "163619100-2",
    "author": "Broddy Cutress",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Coagulation defects complicating pregnancy, childbirth, or the puerperium, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 362
  },
  {
    "title": "Gidget",
    "isbn_number": "789761830-7",
    "author": "Jaimie Ashingden",
    "genre": "Comedy",
    "synopsis": "Alcohol-induced psychotic disorder with delusions",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 199
  },
  {
    "title": "Banishment, The (Izgnanie)",
    "isbn_number": "335908617-1",
    "author": "Perry Havis",
    "genre": "Drama",
    "synopsis": "Spontaneous abortion, complicated by genital tract and pelvic infection, complete",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 170
  },
  {
    "title": "A Summer in St. Tropez",
    "isbn_number": "331688932-9",
    "author": "Willard Demcik",
    "genre": "Drama|Romance",
    "synopsis": "Open wound of chest (wall), complicated",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 454
  },
  {
    "title": "Alatriste",
    "isbn_number": "052235309-6",
    "author": "Kailey Callery",
    "genre": "Action|Adventure|Romance|War",
    "synopsis": "Russian spring-summer [taiga] encephalitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 279
  },
  {
    "title": "6th Day, The",
    "isbn_number": "709160581-0",
    "author": "Carolin Aspin",
    "genre": "Action|Sci-Fi|Thriller",
    "synopsis": "Female genital mutilation Type I status",
    "cover_image": "https://picsum.photos/200/300",
    "price": 217
  },
  {
    "title": "Ninja: Shadow of a Tear",
    "isbn_number": "123930238-X",
    "author": "Sigrid Emes",
    "genre": "Action|Crime|Thriller",
    "synopsis": "Failure to thrive",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 129
  },
  {
    "title": "Vanquished, The (I vinti)",
    "isbn_number": "988539829-5",
    "author": "Bink Mussington",
    "genre": "Drama",
    "synopsis": "Suspected cervical shortening not found",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 117
  },
  {
    "title": "Changeling, The",
    "isbn_number": "263623017-3",
    "author": "Clo Sharphouse",
    "genre": "Horror|Mystery|Thriller",
    "synopsis": "Fetal growth retardation, unspecified, 500-749 grams",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 321
  },
  {
    "title": "Betty",
    "isbn_number": "804600778-1",
    "author": "Norina Ramsay",
    "genre": "Drama",
    "synopsis": "Hemangioma of skin and subcutaneous tissue",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 133
  },
  {
    "title": "Arena",
    "isbn_number": "145721632-9",
    "author": "Rossy Daglish",
    "genre": "Action|Thriller",
    "synopsis": "Generally contracted pelvis, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 133
  },
  {
    "title": "The Last Gladiators",
    "isbn_number": "555860684-3",
    "author": "Kizzie Gusney",
    "genre": "Documentary",
    "synopsis": "Activities involving walking, marching and hiking",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 336
  },
  {
    "title": "Undertow",
    "isbn_number": "834616701-6",
    "author": "Sybyl Maxwale",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Cerebellar or brain stem laceration with open intracranial wound, with brief [less than one hour] loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 173
  },
  {
    "title": "Long Weekend, The",
    "isbn_number": "900036673-9",
    "author": "Dione Obispo",
    "genre": "Comedy",
    "synopsis": "Special screening for intellectual disabilities",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 163
  },
  {
    "title": "Six Days",
    "isbn_number": "026972950-X",
    "author": "Welsh Petracco",
    "genre": "Documentary",
    "synopsis": "One eye: profound vision impairment; other eye: vision not specified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 328
  },
  {
    "title": "Cold Trail (K??ld sl????)",
    "isbn_number": "836853822-X",
    "author": "Pearle Archard",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Severe stage glaucoma",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 416
  },
  {
    "title": "Guy Thing, A",
    "isbn_number": "746804094-X",
    "author": "Frayda Vaune",
    "genre": "Comedy|Romance",
    "synopsis": "Disseminated choroiditis and chorioretinitis, generalized",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 451
  },
  {
    "title": "The Disappeared",
    "isbn_number": "582005127-0",
    "author": "Welbie McClinton",
    "genre": "Documentary",
    "synopsis": "Deep necrosis of underlying tissues [deep third degree] without mention of loss of a body part, of forearm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 325
  },
  {
    "title": "Into the Night",
    "isbn_number": "057907394-7",
    "author": "Barbie Lonnon",
    "genre": "Action|Comedy|Drama|Thriller",
    "synopsis": "Triplet pregnancy with fetal loss and retention of one or more fetus(es), unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 273
  },
  {
    "title": "Take the High Ground!",
    "isbn_number": "898080907-7",
    "author": "Shannen Yabsley",
    "genre": "Comedy|Drama|War",
    "synopsis": "Allergy to radiographic dye",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 263
  },
  {
    "title": "Tin Men",
    "isbn_number": "360992772-0",
    "author": "Katee Woolacott",
    "genre": "Comedy|Drama",
    "synopsis": "Sexual masochism",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 154
  },
  {
    "title": "Deliverance",
    "isbn_number": "392599515-3",
    "author": "Devlin Dellit",
    "genre": "Adventure|Drama|Thriller",
    "synopsis": "Closed fractures involving skull or face with other bones, with cerebral laceration and contusion, with moderate [1-24 hours] loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 363
  },
  {
    "title": "Monster That Challenged the World, The",
    "isbn_number": "751653957-0",
    "author": "Rudd Cockerham",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Secondary and unspecified malignant neoplasm of lymph nodes of head, face, and neck",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 197
  },
  {
    "title": "Horror of the Zombies",
    "isbn_number": "435276627-5",
    "author": "Humfrid Holme",
    "genre": "Horror",
    "synopsis": "Superficial foreign body (splinter) of face, neck, and scalp except eye, without major open wound, infected",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 286
  },
  {
    "title": "Logorama",
    "isbn_number": "173027953-8",
    "author": "Mychal Ridgway",
    "genre": "Action|Animation|Crime",
    "synopsis": "Other hyperparathyroidism",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 276
  },
  {
    "title": "Disappearance of Eleanor Rigby: Them, The",
    "isbn_number": "802402122-6",
    "author": "Merola Jilkes",
    "genre": "Drama",
    "synopsis": "Other nonthrombocytopenic purpuras",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 281
  },
  {
    "title": "Benji",
    "isbn_number": "251156397-5",
    "author": "Reuben Enga",
    "genre": "Adventure|Children",
    "synopsis": "Acute chemical conjunctivitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 257
  },
  {
    "title": "Blaze",
    "isbn_number": "471067768-9",
    "author": "Jean Hensmans",
    "genre": "Comedy|Drama",
    "synopsis": "Vulval varices",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 216
  },
  {
    "title": "Farewell, My Queen (Les adieux ?? la reine)",
    "isbn_number": "190889857-7",
    "author": "Teddie Liggons",
    "genre": "Drama|Romance",
    "synopsis": "Bipolar I disorder, single manic episode, severe, without mention of psychotic behavior",
    "cover_image": "https://picsum.photos/200/300",
    "price": 221
  },
  {
    "title": "Gilles' Wife (La femme de Gilles)",
    "isbn_number": "071664047-3",
    "author": "Hilliary Whitear",
    "genre": "Drama",
    "synopsis": "Bagassosis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 110
  },
  {
    "title": "Casshern",
    "isbn_number": "131697988-1",
    "author": "Mil Wiffield",
    "genre": "Action|Drama|Fantasy|Sci-Fi",
    "synopsis": "Unspecified persistent mental disorders due to conditions classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 383
  },
  {
    "title": "Conquest 1453 (Fetih 1453)",
    "isbn_number": "839759207-5",
    "author": "Wallis Sambals",
    "genre": "Action|Adventure|Drama|War",
    "synopsis": "Accidents involving cable cars not running on rails",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 245
  },
  {
    "title": "Jerusalema (Gangster's Paradise: Jerusalema)",
    "isbn_number": "477509658-3",
    "author": "Andi Tilliards",
    "genre": "Action|Crime|Drama",
    "synopsis": "Other and unspecified anomalies of musculoskeletal system",
    "cover_image": "https://picsum.photos/200/300",
    "price": 214
  },
  {
    "title": "Band of Outsiders (Bande ?? part)",
    "isbn_number": "307717520-7",
    "author": "Ruben Finney",
    "genre": "Comedy|Crime|Drama|Romance",
    "synopsis": "Tuberculous abscess of brain, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 274
  },
  {
    "title": "Virgin Suicides, The",
    "isbn_number": "681443554-3",
    "author": "George Stoner",
    "genre": "Drama|Romance",
    "synopsis": "Poisoning by opiate antagonists",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 362
  },
  {
    "title": "Carless Love",
    "isbn_number": "547247297-0",
    "author": "Carena Armitt",
    "genre": "Drama",
    "synopsis": "Atherosclerosis of aorta",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 257
  },
  {
    "title": "The Gamers: Hands of Fate",
    "isbn_number": "232918413-1",
    "author": "Oralia Atlee",
    "genre": "Comedy|Fantasy|Romance",
    "synopsis": "Complex endometrial hyperplasia without atypia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 430
  },
  {
    "title": "The Next Voice You Hear....",
    "isbn_number": "202896194-5",
    "author": "Harlie McDonough",
    "genre": "Drama",
    "synopsis": "Chronic passive congestion of liver",
    "cover_image": "https://picsum.photos/200/300",
    "price": 352
  },
  {
    "title": "Ali: Fear Eats the Soul (Angst essen Seele auf)",
    "isbn_number": "727660569-8",
    "author": "Naoma Spitaro",
    "genre": "Drama|Romance",
    "synopsis": "Acute venous embolism and thrombosis of unspecified deep vessels of lower extremity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 357
  },
  {
    "title": "Black Cloud",
    "isbn_number": "185240391-8",
    "author": "Michaeline Matley",
    "genre": "Drama",
    "synopsis": "Aseptic necrosis of medial femoral condyle",
    "cover_image": "https://picsum.photos/200/300",
    "price": 235
  },
  {
    "title": "Devil's Pond",
    "isbn_number": "080075297-X",
    "author": "Netta Lemery",
    "genre": "Drama|Thriller",
    "synopsis": "Relapsing fever, louse-borne",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 346
  },
  {
    "title": "Ilo Ilo",
    "isbn_number": "693771828-4",
    "author": "Abby Reith",
    "genre": "Drama",
    "synopsis": "Closed fracture of ilium",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 408
  },
  {
    "title": "Quicksand",
    "isbn_number": "040354446-7",
    "author": "Teodor Philcock",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Other open skull fracture without mention of intracranial injury, with loss of consciousness of unspecified duration",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 137
  },
  {
    "title": "Zelary",
    "isbn_number": "049840412-9",
    "author": "Ignace Ethridge",
    "genre": "Drama|Romance",
    "synopsis": "Benign essential hypertension",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 461
  },
  {
    "title": "Above and Beyond",
    "isbn_number": "950610383-6",
    "author": "Leanna Fennell",
    "genre": "Action|Drama",
    "synopsis": "Other endocardial cushion defects",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 319
  },
  {
    "title": "Lone Wolf and Cub: Sword of Vengeance (Kozure ??kami: Kowokashi udekashi tsukamatsuru)",
    "isbn_number": "974851052-2",
    "author": "Charmain McMenamy",
    "genre": "Action|Crime",
    "synopsis": "Intracranial injury of other and unspecified nature with open intracranial wound, with no loss of consciousness",
    "cover_image": "https://picsum.photos/200/300",
    "price": 124
  },
  {
    "title": "Book of Life, The",
    "isbn_number": "275360775-3",
    "author": "Hurleigh Heitz",
    "genre": "Comedy|Fantasy",
    "synopsis": "Poisoning by other sedatives and hypnotics, undetermined whether accidentally or purposely inflicted",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 314
  },
  {
    "title": "Mirror, The (Zerkalo)",
    "isbn_number": "419703596-9",
    "author": "Rene Le Strange",
    "genre": "Drama",
    "synopsis": "Malignant neoplasm of lacrimal duct",
    "cover_image": "https://picsum.photos/200/300",
    "price": 397
  },
  {
    "title": "Beyond Re-Animator",
    "isbn_number": "370339049-2",
    "author": "Zacharia Gunby",
    "genre": "Horror",
    "synopsis": "Other disturbances of oral epithelium, including tongue",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 486
  },
  {
    "title": "Marina Abramovic: The Artist Is Present",
    "isbn_number": "467654812-5",
    "author": "Melantha Sparway",
    "genre": "Documentary",
    "synopsis": "Anomaly of spine, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 374
  },
  {
    "title": "Wadd: The Life & Times of John C. Holmes",
    "isbn_number": "534286167-5",
    "author": "Rory Petraitis",
    "genre": "Documentary",
    "synopsis": "Open fracture of vault of skull with cerebral laceration and contusion, with loss of consciousness of unspecified duration",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 342
  },
  {
    "title": "Broadway Damage",
    "isbn_number": "666637505-X",
    "author": "Olivier Turrell",
    "genre": "Comedy",
    "synopsis": "Pelvic varices",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 382
  },
  {
    "title": "Dirty Dancing: Havana Nights",
    "isbn_number": "309733302-9",
    "author": "Guss Penritt",
    "genre": "Romance",
    "synopsis": "Enlargement of lymph nodes",
    "cover_image": "https://picsum.photos/200/300",
    "price": 134
  },
  {
    "title": "Slim Carter",
    "isbn_number": "033675843-X",
    "author": "Jacynth Skechley",
    "genre": "Comedy|Western",
    "synopsis": "Unspecified osteomyelitis, other specified sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 373
  },
  {
    "title": "Un Piede in paradiso",
    "isbn_number": "589106715-3",
    "author": "Felix O'Hern",
    "genre": "Comedy",
    "synopsis": "Other late effects of cerebrovascular disease, vertigo",
    "cover_image": "https://picsum.photos/200/300",
    "price": 297
  },
  {
    "title": "Evil (Ondskan)",
    "isbn_number": "666865198-4",
    "author": "Gill Winckles",
    "genre": "Drama",
    "synopsis": "Regional enteritis of small intestine with large intestine",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 196
  },
  {
    "title": "Autopsy (Macchie Solari)",
    "isbn_number": "052208569-5",
    "author": "Trenton Rainforth",
    "genre": "Horror",
    "synopsis": "Spinal anesthetics causing adverse effects in therapeutic use",
    "cover_image": "https://picsum.photos/200/300",
    "price": 202
  },
  {
    "title": "Castle, The (Das Schlo??)",
    "isbn_number": "693947021-2",
    "author": "Elyn Joncic",
    "genre": "Drama|Mystery",
    "synopsis": "Coracoclavicular (ligament) sprain",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 169
  },
  {
    "title": "Trumpet of the Swan, The",
    "isbn_number": "219643724-7",
    "author": "Cristy Bauldrey",
    "genre": "Animation|Drama|Musical",
    "synopsis": "Open fracture of condyle, femoral",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 259
  },
  {
    "title": "Strange Invaders",
    "isbn_number": "948181798-9",
    "author": "Aloysia Grieves",
    "genre": "Animation|Comedy",
    "synopsis": "Disorders of copper metabolism",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 200
  },
  {
    "title": "Gentlemen Prefer Blondes",
    "isbn_number": "845967161-5",
    "author": "Kaile Barbera",
    "genre": "Comedy|Musical|Romance",
    "synopsis": "Tick-borne rickettsiosis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 403
  },
  {
    "title": "Wicked Little Things",
    "isbn_number": "817045545-6",
    "author": "Petunia Python",
    "genre": "Horror",
    "synopsis": "Injury due to sea-based artillery shell",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 158
  },
  {
    "title": "Home",
    "isbn_number": "670815402-1",
    "author": "Sheila Dukesbury",
    "genre": "Documentary",
    "synopsis": "Other specified alveolar anomaly",
    "cover_image": "https://picsum.photos/200/300",
    "price": 220
  },
  {
    "title": "i hate myself :)",
    "isbn_number": "470298668-6",
    "author": "Colline Rosenschein",
    "genre": "Comedy|Documentary|Drama",
    "synopsis": "Activities involving BASE jumping",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 229
  },
  {
    "title": "Love and Pain and the Whole Damn Thing",
    "isbn_number": "688315468-X",
    "author": "Guillemette Impleton",
    "genre": "Comedy|Drama",
    "synopsis": "Rupture of bladder, nontraumatic",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 402
  },
  {
    "title": "Asphalt Jungle, The",
    "isbn_number": "551975843-3",
    "author": "Darb McFeat",
    "genre": "Crime|Film-Noir",
    "synopsis": "Other specified abnormalities of chorion and amnion affecting fetus or newborn",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 179
  },
  {
    "title": "It's the Easter Beagle, Charlie Brown!",
    "isbn_number": "352924150-4",
    "author": "Valeda Hellmer",
    "genre": "Animation|Children|Comedy",
    "synopsis": "Subdural hemorrhage following injury without mention of open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 429
  },
  {
    "title": "Glenn, the Flying Robot",
    "isbn_number": "940731763-3",
    "author": "Richard Corrao",
    "genre": "Sci-Fi",
    "synopsis": "Other specified shigella infections",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 138
  },
  {
    "title": "Savage Streets",
    "isbn_number": "684869105-4",
    "author": "Eddy Boggis",
    "genre": "Action|Crime|Drama|Thriller",
    "synopsis": "Other diseases of respiratory system, not elsewhere classified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 409
  },
  {
    "title": "We Feed the World",
    "isbn_number": "922865682-4",
    "author": "Cornell Inkster",
    "genre": "Documentary",
    "synopsis": "Cor triatriatum",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 246
  },
  {
    "title": "Adventures of Robin Hood, The",
    "isbn_number": "904332085-4",
    "author": "Blondell Lett",
    "genre": "Action|Adventure|Romance",
    "synopsis": "Dissection of aorta, unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 495
  },
  {
    "title": "Silence Before Bach, The (Die Stille vor Bach) ",
    "isbn_number": "986050791-0",
    "author": "Rodina Minillo",
    "genre": "Musical",
    "synopsis": "Personal history of pneumonia (recurrent)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 369
  },
  {
    "title": "Pax Americana and the Weaponization of Space",
    "isbn_number": "538602287-3",
    "author": "Suzy Oglesbee",
    "genre": "Documentary",
    "synopsis": "Rupture of synovium, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 176
  },
  {
    "title": "The Borderlands",
    "isbn_number": "800932021-8",
    "author": "Brig Ridolfi",
    "genre": "Horror|Mystery",
    "synopsis": "Other causes of myelitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 157
  },
  {
    "title": "Sorority Boys",
    "isbn_number": "064965421-8",
    "author": "Bethena Stannah",
    "genre": "Comedy",
    "synopsis": "Delayed delivery after spontaneous or unspecified rupture of membranes, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 340
  },
  {
    "title": "Tales of Terror",
    "isbn_number": "718745176-8",
    "author": "Vonny Michallat",
    "genre": "Horror",
    "synopsis": "Late effects of cerebrovascular disease, alterations of sensations",
    "cover_image": "https://picsum.photos/200/300",
    "price": 361
  },
  {
    "title": "Perched on a Tree (Sur un arbre perch??)",
    "isbn_number": "459131588-6",
    "author": "Leupold Georgeau",
    "genre": "Comedy",
    "synopsis": "Hodgkin's disease, mixed cellularity, intra-abdominal lymph nodes",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 136
  },
  {
    "title": "Promised Land",
    "isbn_number": "414662352-9",
    "author": "Tally D'Agostini",
    "genre": "Drama",
    "synopsis": "Hyperplasia of renal artery",
    "cover_image": "https://picsum.photos/200/300",
    "price": 157
  },
  {
    "title": "Vampire Effect (The Twins Effect) (Chin gei bin)",
    "isbn_number": "507918225-3",
    "author": "Forester Edler",
    "genre": "Action|Comedy|Fantasy|Horror",
    "synopsis": "Congenital hypogammaglobulinemia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 208
  },
  {
    "title": "Treasure Island",
    "isbn_number": "439483981-5",
    "author": "Teriann Dusting",
    "genre": "Adventure",
    "synopsis": "Schizophrenic disorders, residual type, subchronic with acute exacerbation",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 326
  },
  {
    "title": "Rafa",
    "isbn_number": "273388553-7",
    "author": "Tally Ingre",
    "genre": "Drama",
    "synopsis": "Unspecified osteomyelitis, hand",
    "cover_image": "https://picsum.photos/200/300",
    "price": 470
  },
  {
    "title": "Bring Me the Head of Alfredo Garcia",
    "isbn_number": "910660622-9",
    "author": "Barbi Hoofe",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Other accident caused by striking against or being struck accidentally by objects or persons",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 187
  },
  {
    "title": "I Love Sarah Jane",
    "isbn_number": "204852475-3",
    "author": "Kyla Goldstein",
    "genre": "Horror|Romance",
    "synopsis": "Other specified types of schizophrenia, in remission",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 257
  },
  {
    "title": "Bad Taste",
    "isbn_number": "450304908-9",
    "author": "Mozelle Colicot",
    "genre": "Comedy|Horror|Sci-Fi",
    "synopsis": "Lid retraction or lag",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 413
  },
  {
    "title": "Fill the Void (Lemale et ha'halal)",
    "isbn_number": "498005950-3",
    "author": "Glenine Eaglesham",
    "genre": "Drama",
    "synopsis": "Congenital macular changes",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 372
  },
  {
    "title": "Ring of Terror",
    "isbn_number": "069768061-4",
    "author": "Ambrose Defew",
    "genre": "Horror",
    "synopsis": "Syphilitic encephalitis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 407
  },
  {
    "title": "Joneses, The",
    "isbn_number": "074722926-0",
    "author": "Broderic Langland",
    "genre": "Comedy|Drama",
    "synopsis": "Unspecified abortion, complicated by genital tract and pelvic infection, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 439
  },
  {
    "title": "Losing Chase",
    "isbn_number": "270867993-7",
    "author": "Pip Kauble",
    "genre": "Drama",
    "synopsis": "Other specified infectious and parasitic diseases",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 341
  },
  {
    "title": "Truth or Die ",
    "isbn_number": "711377469-5",
    "author": "Ester Servis",
    "genre": "Horror|Thriller",
    "synopsis": "Monoarticular juvenile rheumatoid arthritis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 247
  },
  {
    "title": "Kawa",
    "isbn_number": "642974294-6",
    "author": "Eleanora Zolini",
    "genre": "Drama",
    "synopsis": "Burn [any degree] involving 70-79 percent of body surface with third degree burn, 30-39%",
    "cover_image": "https://picsum.photos/200/300",
    "price": 422
  },
  {
    "title": "In the Mirror of Maya Deren (Im Spiegel der Maya Deren)",
    "isbn_number": "018607184-1",
    "author": "Iona Yardy",
    "genre": "Documentary",
    "synopsis": "Late effect of injury due to terrorism",
    "cover_image": "https://picsum.photos/200/300",
    "price": 453
  },
  {
    "title": "Stoic",
    "isbn_number": "097354887-8",
    "author": "Trumann Brokenshaw",
    "genre": "Drama",
    "synopsis": "Unqualified visual loss, both eyes",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 203
  },
  {
    "title": "Black Peter (Cern?? Petr)",
    "isbn_number": "827623370-8",
    "author": "Elsy Westphalen",
    "genre": "Drama",
    "synopsis": "Poisoning by other psychostimulants",
    "cover_image": "https://picsum.photos/200/300",
    "price": 185
  },
  {
    "title": "Watch on the Rhine",
    "isbn_number": "427072311-4",
    "author": "Kaitlynn Sweeny",
    "genre": "Drama",
    "synopsis": "Other specified bullous dermatoses",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 275
  },
  {
    "title": "Gettysburg",
    "isbn_number": "446392302-6",
    "author": "Chaunce Gaines",
    "genre": "Drama|War",
    "synopsis": "Other anomalies of lower limb, including pelvic girdle",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 277
  },
  {
    "title": "Hollow Point",
    "isbn_number": "285089047-2",
    "author": "Christy Sexcey",
    "genre": "Action|Comedy|Thriller",
    "synopsis": "Erythema [first degree] of breast",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 466
  },
  {
    "title": "Girls on the Road (a.k.a. Hot Summer Week)",
    "isbn_number": "826527136-0",
    "author": "Benedick Kingzet",
    "genre": "Comedy|Drama|Thriller",
    "synopsis": "Persistent disorder of initiating or maintaining wakefulness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 487
  },
  {
    "title": "Late Phases",
    "isbn_number": "103527542-2",
    "author": "Frederique Chidlow",
    "genre": "Drama|Horror",
    "synopsis": "Degenerative disorder of globe, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 247
  },
  {
    "title": "Beneath the Valley of the Ultra-Vixens",
    "isbn_number": "639970634-3",
    "author": "Shayna Kausche",
    "genre": "Comedy",
    "synopsis": "Septicemia due to hemophilus influenzae [H. influenzae]",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 169
  },
  {
    "title": "Outside Providence",
    "isbn_number": "079256923-7",
    "author": "Pernell Gert",
    "genre": "Comedy",
    "synopsis": "Other orthopoxvirus infections",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 354
  },
  {
    "title": "Simply Irresistible",
    "isbn_number": "268802539-2",
    "author": "Fred Oldroyde",
    "genre": "Comedy|Romance",
    "synopsis": "Acquired absence of other joint",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 486
  },
  {
    "title": "Amish Murder, An",
    "isbn_number": "551886702-6",
    "author": "Jedd Gauford",
    "genre": "Action|Crime|Drama",
    "synopsis": "Unstable lie, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 495
  },
  {
    "title": "Joe Somebody",
    "isbn_number": "466234080-2",
    "author": "Janeta Hellmore",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Nephritis and nephropathy, not specified as acute or chronic, with other specified pathological lesion in kidney",
    "cover_image": "https://picsum.photos/200/300",
    "price": 304
  },
  {
    "title": "Armageddon",
    "isbn_number": "806688315-3",
    "author": "Claire Ertelt",
    "genre": "Action|Romance|Sci-Fi|Thriller",
    "synopsis": "Activities involving piano playing",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 477
  },
  {
    "title": "Innocent Lies",
    "isbn_number": "934899090-X",
    "author": "Curran End",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Accidental poisoning by unspecified carbon monoxide",
    "cover_image": "https://picsum.photos/200/300",
    "price": 154
  },
  {
    "title": "Taboo (Gohatto)",
    "isbn_number": "271890877-7",
    "author": "Britni Durdle",
    "genre": "Drama",
    "synopsis": "Oxazolidine derivatives causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 498
  },
  {
    "title": "Sniper",
    "isbn_number": "647114579-9",
    "author": "Alaine Cardwell",
    "genre": "Action|Drama",
    "synopsis": "Traumatic compartment syndrome of upper extremity",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 324
  },
  {
    "title": "Getting Go, the Go Doc Project",
    "isbn_number": "844357774-6",
    "author": "Fawne Ashbee",
    "genre": "Drama",
    "synopsis": "Traumatic amputation of arm and hand (complete) (partial), unilateral, level not specified, complicated",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 409
  },
  {
    "title": "Vares: The Kiss of Evil (Vares - Pahan suudelma)",
    "isbn_number": "658142870-1",
    "author": "Jacinthe Iddon",
    "genre": "Action|Crime|Film-Noir",
    "synopsis": "Other and unspecified chronic thyroiditis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 102
  },
  {
    "title": "Statues Also Die (Statues meurent aussi, Les)",
    "isbn_number": "902684783-1",
    "author": "Nollie Parrot",
    "genre": "Documentary",
    "synopsis": "Multiple papillomata due to yaws and wet crab yaws",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 360
  },
  {
    "title": "Book of Shadows: Blair Witch 2",
    "isbn_number": "318240586-1",
    "author": "Edmon Morcombe",
    "genre": "Crime|Horror|Mystery|Thriller",
    "synopsis": "Monocular esotropia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 426
  },
  {
    "title": "Super Rich: The Greed Game",
    "isbn_number": "525843952-6",
    "author": "Vern Oland",
    "genre": "Documentary",
    "synopsis": "Injury by paintball gun, undetermined whether accidental or purposely inflicted",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 254
  },
  {
    "title": "Hitman's Run",
    "isbn_number": "175301280-5",
    "author": "Osmond Kislingbury",
    "genre": "Action",
    "synopsis": "Disturbances of tooth formation",
    "cover_image": "https://picsum.photos/200/300",
    "price": 206
  },
  {
    "title": "A Lesson Before Dying",
    "isbn_number": "513280840-9",
    "author": "Simmonds Zuanelli",
    "genre": "Drama",
    "synopsis": "Accidents occurring in place for recreation and sport",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 236
  },
  {
    "title": "American Grindhouse",
    "isbn_number": "808976575-0",
    "author": "Ritchie Calladine",
    "genre": "Documentary",
    "synopsis": "Screening for other rheumatic disorders",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 213
  },
  {
    "title": "Three Musketeers, The",
    "isbn_number": "432448922-X",
    "author": "Garwood Beretta",
    "genre": "Action|Adventure|Romance",
    "synopsis": "Full-thickness skin loss [third degree nos] of lower leg",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 422
  },
  {
    "title": "Last Night",
    "isbn_number": "036879807-0",
    "author": "Fonzie Stambridge",
    "genre": "Drama|Romance",
    "synopsis": "Nontraumatic hematoma of soft tissue",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 198
  },
  {
    "title": "Alpha and Omega 3: The Great Wolf Games",
    "isbn_number": "434529085-6",
    "author": "Franni Normanvill",
    "genre": "Action|Adventure|Animation|Children|Comedy",
    "synopsis": "Other disorders of coccyx",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 137
  },
  {
    "title": "Good Year, A",
    "isbn_number": "208057993-2",
    "author": "Helga Jent",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Chronic glomerulonephritis with other specified pathological lesion in kidney",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 476
  },
  {
    "title": "Race the Sun",
    "isbn_number": "017366040-1",
    "author": "Fairfax Mahony",
    "genre": "Adventure|Comedy|Drama",
    "synopsis": "Tuberculosis of ear, tubercle bacilli not found by bacteriological examination, but tuberculosis confirmed histologically",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 339
  },
  {
    "title": "Me and Him (Ich und Er)",
    "isbn_number": "826455468-7",
    "author": "Victoir Larchiere",
    "genre": "Comedy",
    "synopsis": "Corneal deposit, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 160
  },
  {
    "title": "Johnny in the Clouds",
    "isbn_number": "728352818-0",
    "author": "Petrina Kitter",
    "genre": "Drama|Romance|War",
    "synopsis": "Unspecified disorder of joint, other specified sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 424
  },
  {
    "title": "Cinderella",
    "isbn_number": "491075867-4",
    "author": "Hugo Hoult",
    "genre": "Animation|Children|Fantasy|Romance",
    "synopsis": "Anti-infectives and other drugs and preparations for ear, nose, and throat causing adverse effects in therapeutic use",
    "cover_image": "https://picsum.photos/200/300",
    "price": 203
  },
  {
    "title": "Molly Maguires, The",
    "isbn_number": "688652743-6",
    "author": "Udell Beardshall",
    "genre": "Drama",
    "synopsis": "Activities involving gymnastics",
    "cover_image": "https://picsum.photos/200/300",
    "price": 316
  },
  {
    "title": "Capturing Mary",
    "isbn_number": "852946304-8",
    "author": "Milzie Manzell",
    "genre": "(no genres listed)",
    "synopsis": "Closed fracture of vault of skull without mention of intracranial injury, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 267
  },
  {
    "title": "V for Vendetta",
    "isbn_number": "386270388-6",
    "author": "Giraldo MacCartair",
    "genre": "Action|Sci-Fi|Thriller|IMAX",
    "synopsis": "Erythema [first degree] of multiple sites of wrist(s) and hand(s)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 196
  },
  {
    "title": "French Twist (Gazon maudit)",
    "isbn_number": "527623978-9",
    "author": "Catha Hildrew",
    "genre": "Comedy|Romance",
    "synopsis": "Unspecified drug dependence, in remission",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 317
  },
  {
    "title": "Star Wreck: In the Pirkinning",
    "isbn_number": "482657396-0",
    "author": "Berton Finlan",
    "genre": "Action|Comedy|Sci-Fi",
    "synopsis": "Spontaneous ecchymoses",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 393
  },
  {
    "title": "Mr. Bug Goes to Town (a.k.a. Hoppity Goes to Town)",
    "isbn_number": "590375374-4",
    "author": "Thatcher Lantry",
    "genre": "Animation|Children|Comedy|Fantasy|Musical",
    "synopsis": "Primary central nervous system lymphoma, lymph nodes of head, face, and neck",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 445
  },
  {
    "title": "Just One of the Guys",
    "isbn_number": "186768501-9",
    "author": "Sanderson Circuit",
    "genre": "Comedy",
    "synopsis": "Varicella (hemorrhagic) pneumonitis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 284
  },
  {
    "title": "Sign of Four, The",
    "isbn_number": "505546926-9",
    "author": "Lyman Mugg",
    "genre": "Crime|Mystery",
    "synopsis": "Night blindness, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 117
  },
  {
    "title": "Bitter Tears of Petra von Kant, The (bitteren Tr??nen der Petra von Kant, Die)",
    "isbn_number": "087444372-5",
    "author": "Britta Yitzhak",
    "genre": "Drama",
    "synopsis": "Lichen planus",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 331
  },
  {
    "title": "I Bought a Vampire Motorcycle",
    "isbn_number": "571294856-7",
    "author": "Orlan Gimson",
    "genre": "Comedy|Horror",
    "synopsis": "Tuberculoma of brain, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 375
  },
  {
    "title": "Home Song Stories, The",
    "isbn_number": "596942063-8",
    "author": "Tye Ragles",
    "genre": "Drama",
    "synopsis": "Body Mass Index 39.0-39.9, adult",
    "cover_image": "https://picsum.photos/200/300",
    "price": 446
  },
  {
    "title": "Tropico",
    "isbn_number": "148528255-1",
    "author": "Kizzee Roches",
    "genre": "Drama|Fantasy|Romance",
    "synopsis": "Malignant neoplasm of visceral pleura",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 422
  },
  {
    "title": "Strike! (a.k.a. All I Wanna Do, The Hairy Bird)",
    "isbn_number": "122429349-5",
    "author": "Stephi McLafferty",
    "genre": "Comedy|Drama",
    "synopsis": "Injury to duodenum, without open wound into cavity",
    "cover_image": "https://picsum.photos/200/300",
    "price": 375
  },
  {
    "title": "Foot Fist Way, The",
    "isbn_number": "849612974-8",
    "author": "Corty Brandreth",
    "genre": "Comedy",
    "synopsis": "Poisoning by peripheral nerve- and plexus-blocking anesthetics",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 331
  },
  {
    "title": "Anima Mundi",
    "isbn_number": "675499727-3",
    "author": "Samantha Waiting",
    "genre": "Documentary",
    "synopsis": "Hodgkin's granuloma, lymph nodes of inguinal region and lower limb",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 466
  },
  {
    "title": "Grass Harp, The",
    "isbn_number": "552087864-1",
    "author": "Hedwiga Billborough",
    "genre": "Comedy|Drama",
    "synopsis": "Goiter, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 371
  },
  {
    "title": "Panic Room",
    "isbn_number": "016504572-8",
    "author": "Zed Alison",
    "genre": "Thriller",
    "synopsis": "Thyrotoxicosis of other specified origin with mention of thyrotoxic crisis or storm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 487
  },
  {
    "title": "Game Over",
    "isbn_number": "501524121-6",
    "author": "Alyson Outibridge",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Elevated sedimentation rate",
    "cover_image": "https://picsum.photos/200/300",
    "price": 361
  },
  {
    "title": "Blues Brothers 2000",
    "isbn_number": "553686172-7",
    "author": "Codi Pedroni",
    "genre": "Action|Comedy|Musical",
    "synopsis": "Ulcer of other part of lower limb",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 146
  },
  {
    "title": "Bossa Nova",
    "isbn_number": "834281692-3",
    "author": "Patsy O'Mailey",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Open fracture of base of skull with subarachnoid, subdural, and extradural hemorrhage, with prolonged [more than 24 hours] loss of consciousness, without return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 211
  },
  {
    "title": "Star Witness, The",
    "isbn_number": "257421949-X",
    "author": "Amy Liddall",
    "genre": "Drama",
    "synopsis": "Explosion, fire, or burning in watercraft injuring occupant of other watercraft -- other than crew",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 305
  },
  {
    "title": "House of Cards",
    "isbn_number": "526149509-1",
    "author": "Gerianna Aslam",
    "genre": "Drama",
    "synopsis": "Malignant neoplasm of junctional region of oropharynx",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 221
  },
  {
    "title": "Resolution",
    "isbn_number": "144307854-9",
    "author": "Lia Ridley",
    "genre": "Horror|Thriller",
    "synopsis": "Need for prophylactic vaccination and inoculation against pertussis alone",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 292
  },
  {
    "title": "Bill Bailey: Qualmpeddler",
    "isbn_number": "282592675-2",
    "author": "Didi Guymer",
    "genre": "Comedy",
    "synopsis": "Aftercare following surgery of the teeth, oral cavity and digestive system, NEC",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 127
  },
  {
    "title": "Evilspeak",
    "isbn_number": "976811332-4",
    "author": "Veronike Jurkowski",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Sprain of sternum, other",
    "cover_image": "https://picsum.photos/200/300",
    "price": 311
  },
  {
    "title": "Cat Soup (Nekojiru-so)",
    "isbn_number": "577302012-2",
    "author": "Annecorinne Villa",
    "genre": "Adventure|Animation|Drama|Horror",
    "synopsis": "Diabetes with neurological manifestations, type II or unspecified type, uncontrolled",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 161
  },
  {
    "title": "Seventh Cross, The",
    "isbn_number": "654336229-4",
    "author": "Terri-jo Cutcliffe",
    "genre": "Drama|War",
    "synopsis": "Arthropathy associated with mycoses, forearm",
    "cover_image": "https://picsum.photos/200/300",
    "price": 278
  },
  {
    "title": "Stockholm East (Stockholm ??stra)",
    "isbn_number": "180659751-9",
    "author": "Petronia Grammer",
    "genre": "Drama",
    "synopsis": "Urogenital trichomoniasis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 130
  },
  {
    "title": "Wedding Gift, The",
    "isbn_number": "467412050-0",
    "author": "Mathilde Hamlet",
    "genre": "Drama|Romance",
    "synopsis": "Localization-related (focal) (partial) epilepsy and epileptic syndromes with complex partial seizures, with intractable epilepsy",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 234
  },
  {
    "title": "The Case of the Scorpion's Tail",
    "isbn_number": "208804454-X",
    "author": "Wendy Davidou",
    "genre": "Mystery|Thriller",
    "synopsis": "Punctate keratitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 139
  },
  {
    "title": "Sade",
    "isbn_number": "693852365-7",
    "author": "Veda Merkel",
    "genre": "Crime|Drama",
    "synopsis": "Mechanical failure of instrument or apparatus during other specified procedures",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 419
  },
  {
    "title": "Caught",
    "isbn_number": "978912624-7",
    "author": "Doris Gration",
    "genre": "Drama|Film-Noir",
    "synopsis": "Prolapsed arm of fetus, unspecified as to episode of care or not applicable",
    "cover_image": "https://picsum.photos/200/300",
    "price": 386
  },
  {
    "title": "Death Hunt",
    "isbn_number": "433911311-5",
    "author": "Rafaello Norcliff",
    "genre": "Action|Adventure|Crime|Thriller",
    "synopsis": "Toxic effect of other chlorinated hydrocarbon solvents",
    "cover_image": "https://picsum.photos/200/300",
    "price": 305
  },
  {
    "title": "Barbarella",
    "isbn_number": "337972350-9",
    "author": "Vail Anfosso",
    "genre": "Adventure|Comedy|Sci-Fi",
    "synopsis": "Closed fracture of capitate bone [os magnum] of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 457
  },
  {
    "title": "Guilty as Sin",
    "isbn_number": "030094776-3",
    "author": "Kathrine Curbishley",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Developmental dislocation of joint, hand",
    "cover_image": "https://picsum.photos/200/300",
    "price": 272
  },
  {
    "title": "Black Watch, The",
    "isbn_number": "847641568-0",
    "author": "Berti Leverington",
    "genre": "Adventure|Drama",
    "synopsis": "Personal history of pre-term labor",
    "cover_image": "https://picsum.photos/200/300",
    "price": 180
  },
  {
    "title": "Tungsten",
    "isbn_number": "913506282-7",
    "author": "Leigha Aitchinson",
    "genre": "Drama",
    "synopsis": "Fitting and adjustment of other gastrointestinal appliance and device",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 319
  },
  {
    "title": "Lumihiutalemuodostelma",
    "isbn_number": "071488454-5",
    "author": "Philis Verling",
    "genre": "Comedy|Drama",
    "synopsis": "Monoclonal paraproteinemia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 385
  },
  {
    "title": "Money Pit, The",
    "isbn_number": "063592394-7",
    "author": "Savina Stephens",
    "genre": "Comedy",
    "synopsis": "Tuberculosis of epididymis, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 350
  },
  {
    "title": "Sherlock Holmes in Pearl of Death (Pearl of Death, The)",
    "isbn_number": "870839859-3",
    "author": "Alisun Bason",
    "genre": "Crime|Horror|Mystery|Thriller",
    "synopsis": "Uterovaginal prolapse, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 311
  },
  {
    "title": "Poker Club, The",
    "isbn_number": "678888264-9",
    "author": "Lars Breton",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Vulvar vestibulitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 430
  },
  {
    "title": "Dream Machine",
    "isbn_number": "854554478-2",
    "author": "Jeannie Campana",
    "genre": "Action|Comedy|Crime",
    "synopsis": "Irregular menstrual cycle",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 143
  },
  {
    "title": "Unreasonable Man, An",
    "isbn_number": "394318213-4",
    "author": "Glenn Desforges",
    "genre": "Documentary",
    "synopsis": "Megakaryocytic leukemia, in remission",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 459
  },
  {
    "title": "Majesteit",
    "isbn_number": "688488226-3",
    "author": "Eb Baude",
    "genre": "Drama",
    "synopsis": "Open angle with borderline findings, high risk",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 470
  },
  {
    "title": "Erendira",
    "isbn_number": "877345914-3",
    "author": "Celinka Wetherell",
    "genre": "Drama",
    "synopsis": "Other specified surgical operations and procedures causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 130
  },
  {
    "title": "Swimming Pool",
    "isbn_number": "009451437-2",
    "author": "Filippo Haycock",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Erythema [first degree], unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 323
  },
  {
    "title": "One Spy Too Many",
    "isbn_number": "579046820-9",
    "author": "Odelinda Handrick",
    "genre": "Adventure|Crime",
    "synopsis": "Other accidental submersion or drowning in water transport accident injuring swimmer",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 230
  },
  {
    "title": "Simone (S1m0ne)",
    "isbn_number": "330005734-5",
    "author": "Deirdre Younghusband",
    "genre": "Comedy|Drama|Fantasy|Sci-Fi",
    "synopsis": "Assault by unspecified explosive",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 161
  },
  {
    "title": "Underworld: Awakening",
    "isbn_number": "609201116-6",
    "author": "Fabian Ayling",
    "genre": "Action|Fantasy|Horror|IMAX",
    "synopsis": "Open fracture of surgical neck of humerus",
    "cover_image": "https://picsum.photos/200/300",
    "price": 414
  },
  {
    "title": "The Little Fox",
    "isbn_number": "864767195-3",
    "author": "Kikelia Crenage",
    "genre": "Adventure|Animation|Children",
    "synopsis": "Postvaricella myelitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 343
  },
  {
    "title": "Ornamental Hairpin (Kanzashi)",
    "isbn_number": "840877402-6",
    "author": "Ramsay Driussi",
    "genre": "Drama",
    "synopsis": "Open fracture of radius with ulna, upper end (any part)",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 275
  },
  {
    "title": "Sign of Four, The",
    "isbn_number": "820888927-X",
    "author": "Selena Abate",
    "genre": "Adventure|Crime|Drama",
    "synopsis": "Closed dislocation of acromioclavicular (joint)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 237
  },
  {
    "title": "Stormy Monday",
    "isbn_number": "926420456-3",
    "author": "Chariot Darcey",
    "genre": "Crime|Drama",
    "synopsis": "Gonococcal cystitis (acute)",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 268
  },
  {
    "title": "Animal Crackers",
    "isbn_number": "320273475-X",
    "author": "Ira Fanshawe",
    "genre": "Comedy|Musical",
    "synopsis": "Pulmonary complications of anesthesia or other sedation in labor and delivery, delivered, with or without mention of antepartum condition",
    "cover_image": "https://picsum.photos/200/300",
    "price": 189
  },
  {
    "title": "East of Eden",
    "isbn_number": "694698192-8",
    "author": "Noelani Hadwick",
    "genre": "Drama",
    "synopsis": "Open fracture of lumbar vertebra without mention of spinal cord injury",
    "cover_image": "https://picsum.photos/200/300",
    "price": 124
  },
  {
    "title": "1408",
    "isbn_number": "095179969-X",
    "author": "Romeo Danelut",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Other forms and combinations of labyrinthine dysfunction",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 261
  },
  {
    "title": "Hole, The (Dong)",
    "isbn_number": "465418308-6",
    "author": "Obadias Brierly",
    "genre": "Drama|Musical",
    "synopsis": "Recurrent pregnancy loss, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 210
  },
  {
    "title": "I Dream Too Much",
    "isbn_number": "334874935-2",
    "author": "Evie Fennelly",
    "genre": "Comedy|Musical|Romance",
    "synopsis": "Parapharyngeal abscess",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 206
  },
  {
    "title": "Cold Light of Day, The",
    "isbn_number": "822651968-3",
    "author": "Josi Camplin",
    "genre": "Action|Thriller",
    "synopsis": "Bilateral small kidneys",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 229
  },
  {
    "title": "Seven Year Itch, The",
    "isbn_number": "987317403-6",
    "author": "Staffard Arminger",
    "genre": "Comedy",
    "synopsis": "Gonococcal arthritis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 290
  },
  {
    "title": "American Gothic",
    "isbn_number": "891903484-2",
    "author": "Zorana Conner",
    "genre": "Horror",
    "synopsis": "Carrier or suspected carrier of typhoid",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 290
  },
  {
    "title": "Babe, The",
    "isbn_number": "528957263-5",
    "author": "Catie Burrell",
    "genre": "Drama",
    "synopsis": "Leukemic reticuloendotheliosis, spleen",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 336
  },
  {
    "title": "Tromeo and Juliet",
    "isbn_number": "069262437-6",
    "author": "Darryl Pearce",
    "genre": "Comedy|Drama",
    "synopsis": "Thyrotoxicosis without mention of goiter or other cause, and without mention of thyrotoxic crisis or storm",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 484
  },
  {
    "title": "Looking for Hortense (Cherchez Hortense) ",
    "isbn_number": "528041638-X",
    "author": "Erhard Ponnsett",
    "genre": "Drama",
    "synopsis": "Palpitations",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 277
  },
  {
    "title": "In the Beginning (?? l'Origine)",
    "isbn_number": "223868239-2",
    "author": "Inglis Coule",
    "genre": "Drama",
    "synopsis": "Poisoning by tetanus vaccine",
    "cover_image": "https://picsum.photos/200/300",
    "price": 451
  },
  {
    "title": "Satyricon",
    "isbn_number": "449915013-2",
    "author": "Klaus Stanbrooke",
    "genre": "Drama",
    "synopsis": "Burn [any degree] involving 90 percent or more of body surface with third degree burn, less than 10 percent or unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 157
  },
  {
    "title": "V????peli K??rmy - Taisteluni",
    "isbn_number": "607492780-4",
    "author": "Harper Fifield",
    "genre": "Comedy",
    "synopsis": "Syphilitic alopecia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 330
  },
  {
    "title": "Manny & Lo",
    "isbn_number": "921267434-8",
    "author": "Cthrine Palay",
    "genre": "Drama",
    "synopsis": "Intracranial and intraspinal abscess of unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 468
  },
  {
    "title": "Gypsy 83",
    "isbn_number": "061493535-0",
    "author": "Dorena Scarrisbrick",
    "genre": "Drama",
    "synopsis": "Late effect of fracture of multiple and unspecified bones",
    "cover_image": "https://picsum.photos/200/300",
    "price": 204
  },
  {
    "title": "Free Soul, A",
    "isbn_number": "117338151-1",
    "author": "Anthea Chinge",
    "genre": "Drama",
    "synopsis": "Glucocorticoid-remediable aldosteronism",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 276
  },
  {
    "title": "Winter of Frozen Dreams",
    "isbn_number": "152427034-2",
    "author": "Abrahan Burnes",
    "genre": "Crime|Drama",
    "synopsis": "Malocclusion, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 299
  },
  {
    "title": "Officer and a Gentleman, An",
    "isbn_number": "890443294-4",
    "author": "Birgitta Oakes",
    "genre": "Drama|Romance",
    "synopsis": "Unspecified viral hepatitis C without hepatic coma",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 295
  },
  {
    "title": "Flicker (Flimmer)",
    "isbn_number": "588513481-2",
    "author": "Tara Brimming",
    "genre": "Comedy|Drama",
    "synopsis": "Other activity involving cardiorespiratory exercise",
    "cover_image": "https://picsum.photos/200/300",
    "price": 452
  },
  {
    "title": "Angel's Egg (Tenshi no tamago)",
    "isbn_number": "344172710-X",
    "author": "Georgie Fretter",
    "genre": "Animation|Drama|Fantasy",
    "synopsis": "Atherosclerosis of nonautologous biological bypass graft of the extremities",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 468
  },
  {
    "title": "Yonkers Joe",
    "isbn_number": "411765911-1",
    "author": "Kandace Dummer",
    "genre": "Drama",
    "synopsis": "Other sprains and strains of hand",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 179
  },
  {
    "title": "Thunder Bay",
    "isbn_number": "101308907-3",
    "author": "Enrichetta Shoppee",
    "genre": "Adventure",
    "synopsis": "Accidental poisoning by other specified corrosives and caustics not elsewhere classified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 489
  },
  {
    "title": "Evening Star, The",
    "isbn_number": "727644486-4",
    "author": "Benjy Dowdall",
    "genre": "Comedy|Drama",
    "synopsis": "Open fractures involving skull or face with other bones, with intracranial injury of other and unspecified nature, unspecified state of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 492
  },
  {
    "title": "Toy Story of Terror",
    "isbn_number": "451571858-4",
    "author": "Andrus Potter",
    "genre": "Animation|Children|Comedy",
    "synopsis": "Herpetic ulceration of vulva",
    "cover_image": "https://picsum.photos/200/300",
    "price": 486
  },
  {
    "title": "Growth",
    "isbn_number": "067645474-7",
    "author": "Mabel Scarff",
    "genre": "Sci-Fi|Thriller",
    "synopsis": "Poisoning by other utility gas, undetermined whether accidentally or purposely inflicted",
    "cover_image": "https://picsum.photos/200/300",
    "price": 324
  },
  {
    "title": "Paranormal Activity 4",
    "isbn_number": "392624780-0",
    "author": "Angel Lindwasser",
    "genre": "Horror|IMAX",
    "synopsis": "Open fracture of triquetral [cuneiform] bone of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 123
  },
  {
    "title": "Bachelor Weekend, The",
    "isbn_number": "054205297-0",
    "author": "Ninon Rodenborch",
    "genre": "Comedy|Drama",
    "synopsis": "Subarachnoid hemorrhage following injury without mention of open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 331
  },
  {
    "title": "The Pumaman",
    "isbn_number": "411731599-4",
    "author": "Jasen Bandt",
    "genre": "Action|Adventure|Fantasy|Sci-Fi",
    "synopsis": "Disorganized type schizophrenia, subchronic",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 111
  },
  {
    "title": "Godfather, The",
    "isbn_number": "194767188-X",
    "author": "Edie Hugueville",
    "genre": "Crime|Drama",
    "synopsis": "Closed dislocation of hip, unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 142
  },
  {
    "title": "Winnie the Pooh and a Day for Eeyore",
    "isbn_number": "717189422-3",
    "author": "Angelo Quirke",
    "genre": "Animation|Children",
    "synopsis": "Hypertensive heart and chronic kidney disease, malignant, with heart failure and with chronic kidney disease stage I through stage IV, or unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 354
  },
  {
    "title": "Nobody Walks",
    "isbn_number": "454647367-2",
    "author": "Dennet Telling",
    "genre": "Drama",
    "synopsis": "Persistent migraine aura without cerebral infarction, with intractable migraine, so stated, with status migrainosus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 304
  },
  {
    "title": "House of the Dead, The",
    "isbn_number": "777694815-2",
    "author": "Vevay Gianolo",
    "genre": "Action|Horror",
    "synopsis": "Other and unspecified hormones and synthetic substitutes causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 234
  },
  {
    "title": "Hellboy II: The Golden Army",
    "isbn_number": "568046668-6",
    "author": "Bastian Newhouse",
    "genre": "Action|Adventure|Fantasy|Sci-Fi",
    "synopsis": "Intestinovesical fistula",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 116
  },
  {
    "title": "Allan Quatermain and the Temple of Skulls",
    "isbn_number": "732904516-0",
    "author": "Edmund McTavish",
    "genre": "Action|Adventure",
    "synopsis": "Activities involving computer keyboarding",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 425
  },
  {
    "title": "Je, tu, il, elle (I, You, He, She)",
    "isbn_number": "345186677-3",
    "author": "Micky Kimmel",
    "genre": "Drama",
    "synopsis": "Kaschin-Beck disease, site unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 405
  },
  {
    "title": "Hits",
    "isbn_number": "399597720-0",
    "author": "Alfy Cribbins",
    "genre": "(no genres listed)",
    "synopsis": "Heart disease, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 251
  },
  {
    "title": "Morning Glory",
    "isbn_number": "246903678-X",
    "author": "Trixie Dovydenas",
    "genre": "Drama|Romance",
    "synopsis": "Accident caused by controlled fire in other and unspecified building or structure",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 164
  },
  {
    "title": "Algiers",
    "isbn_number": "562443795-1",
    "author": "Earle Pahler",
    "genre": "Drama|Romance",
    "synopsis": "Orbital cysts",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 203
  },
  {
    "title": "To Wong Foo, Thanks for Everything! Julie Newmar",
    "isbn_number": "067737386-4",
    "author": "Margalit Hakking",
    "genre": "Comedy",
    "synopsis": "Maternal complications from in utero procedure, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 272
  },
  {
    "title": "Head",
    "isbn_number": "746473187-5",
    "author": "Dagmar Andresen",
    "genre": "Comedy|Fantasy|Musical",
    "synopsis": "Open fracture of triquetral [cuneiform] bone of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 421
  },
  {
    "title": "Happenstance (Battement d'ailes du papillon, Le)",
    "isbn_number": "189049932-3",
    "author": "Noni Hawsby",
    "genre": "Comedy|Drama",
    "synopsis": "Other specified anomalies of ear",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 323
  },
  {
    "title": "Wicker Man, The",
    "isbn_number": "689237436-0",
    "author": "Roman Duinkerk",
    "genre": "Drama|Horror|Mystery|Thriller",
    "synopsis": "Impairment of auditory discrimination",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 191
  },
  {
    "title": "Suzanne's Career (La carri??re de Suzanne)",
    "isbn_number": "837612440-4",
    "author": "Kennan Cocklin",
    "genre": "Romance",
    "synopsis": "Other sensorimotor disorders of eyelid",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 202
  },
  {
    "title": "Mickey",
    "isbn_number": "468321363-X",
    "author": "Clarisse Butts",
    "genre": "Crime|Drama",
    "synopsis": "Regional enteritis of large intestine",
    "cover_image": "https://picsum.photos/200/300",
    "price": 341
  },
  {
    "title": "33 Postcards",
    "isbn_number": "381582537-7",
    "author": "Willow Isacq",
    "genre": "Drama",
    "synopsis": "Contact with or exposure to anthrax",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 125
  },
  {
    "title": "Irene in Time",
    "isbn_number": "210228479-4",
    "author": "Corny Tilliard",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Dissociative identity disorder",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 210
  },
  {
    "title": "American Raspberry (Prime Time) (Funny America)",
    "isbn_number": "421870775-8",
    "author": "Ludovika Gomar",
    "genre": "Comedy",
    "synopsis": "Collapse of dam or man-made structure",
    "cover_image": "https://picsum.photos/200/300",
    "price": 481
  },
  {
    "title": "Myth of the American Sleepover, The",
    "isbn_number": "304152581-X",
    "author": "Vidovic Clibbery",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Contusion of breast",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 309
  },
  {
    "title": "American Soldier, The (Der amerikanische Soldat)",
    "isbn_number": "916185640-1",
    "author": "Robbin Speirs",
    "genre": "Drama",
    "synopsis": "Tracheostomy complication, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 232
  },
  {
    "title": "Trespass",
    "isbn_number": "142844064-X",
    "author": "Hadria Ditter",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Pain in limb",
    "cover_image": "https://picsum.photos/200/300",
    "price": 133
  },
  {
    "title": "Slams, The",
    "isbn_number": "543978503-5",
    "author": "Aldis MacAllaster",
    "genre": "Action|Drama",
    "synopsis": "Chronic vascular insufficiency of intestine",
    "cover_image": "https://picsum.photos/200/300",
    "price": 325
  },
  {
    "title": "Fourth Kind, The",
    "isbn_number": "975518927-0",
    "author": "Franni Tonepohl",
    "genre": "Horror|Mystery|Sci-Fi|Thriller",
    "synopsis": "Other anterior corneal dystrophies",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 379
  },
  {
    "title": "Hulk Vs.",
    "isbn_number": "361498600-4",
    "author": "Laurene Chisholm",
    "genre": "Animation",
    "synopsis": "Chronic total occlusion of coronary artery",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 135
  },
  {
    "title": "Number 23, The",
    "isbn_number": "130370909-0",
    "author": "Happy Bridgwater",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Acute canaliculitis, lacrimal",
    "cover_image": "https://picsum.photos/200/300",
    "price": 421
  },
  {
    "title": "Story of Floating Weeds, A (Ukikusa monogatari)",
    "isbn_number": "405731823-2",
    "author": "Abran Berndtsson",
    "genre": "Drama",
    "synopsis": "Suspected damage to fetus from viral disease in the mother, affecting management of mother, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 146
  },
  {
    "title": "Grave Secrets (Silent Screams)",
    "isbn_number": "435652540-X",
    "author": "Maribel Voaden",
    "genre": "Horror",
    "synopsis": "Breech extraction, without mention of indication, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 318
  },
  {
    "title": "Heart of Dragon (Long de xin)",
    "isbn_number": "235138540-3",
    "author": "Margalo Matyja",
    "genre": "Action|Comedy|Crime|Drama|War",
    "synopsis": "Convalescence following chemotherapy",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 218
  },
  {
    "title": "American Nightmare, The",
    "isbn_number": "314593159-8",
    "author": "Lilia Eeles",
    "genre": "Documentary",
    "synopsis": "Tuberculous pleurisy in primary progressive tuberculosis, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 302
  },
  {
    "title": "Seven Up!",
    "isbn_number": "565336948-9",
    "author": "Sonnnie Wyvill",
    "genre": "Documentary",
    "synopsis": "Prolonged pregnancy, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 497
  },
  {
    "title": "Night at the Roxbury, A",
    "isbn_number": "835899498-2",
    "author": "Sula Renbold",
    "genre": "Comedy",
    "synopsis": "Cortex (cerebral) contusion with open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 305
  },
  {
    "title": "Red",
    "isbn_number": "871426411-0",
    "author": "Jacynth Fuchs",
    "genre": "Drama|Thriller",
    "synopsis": "Arterial embolism and thrombosis of upper extremity",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 226
  },
  {
    "title": "Dear Brigitte",
    "isbn_number": "952359104-5",
    "author": "Benn Cadigan",
    "genre": "Comedy",
    "synopsis": "Complications of transplanted organ, stem cell",
    "cover_image": "https://picsum.photos/200/300",
    "price": 342
  },
  {
    "title": "The Missing Piece: Mona Lisa, Her Thief, the True Story",
    "isbn_number": "514145702-8",
    "author": "Dolli Demsey",
    "genre": "Crime|Documentary|Mystery",
    "synopsis": "Felty's syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 376
  },
  {
    "title": "Invisible Invaders",
    "isbn_number": "922215935-7",
    "author": "Duane Rudall",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Urethral syndrome NOS",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 223
  },
  {
    "title": "O-Bi, O-Ba - The End of Civilization (O-bi, O-ba - Koniec cywilizacji)",
    "isbn_number": "041240182-7",
    "author": "Nichole Eskrigge",
    "genre": "Drama|Mystery|Sci-Fi",
    "synopsis": "Other and unspecified cerebral laceration and contusion, with open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 119
  },
  {
    "title": "Trans-Atlantic Tunnel (Tunnel, The)",
    "isbn_number": "840275372-8",
    "author": "Bonni Belchamp",
    "genre": "Drama|Sci-Fi",
    "synopsis": "Whooping cough, unspecified organism",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 169
  },
  {
    "title": "Pie in the Sky",
    "isbn_number": "571612461-5",
    "author": "Walther Alenshev",
    "genre": "Comedy|Romance",
    "synopsis": "Chronic venous embolism and thrombosis of deep vessels of proximal lower extremity",
    "cover_image": "https://picsum.photos/200/300",
    "price": 415
  },
  {
    "title": "Judgment Night",
    "isbn_number": "342646886-7",
    "author": "Ilise Rodenburg",
    "genre": "Action|Crime|Thriller",
    "synopsis": "Retained portions of placenta or membranes, without hemorrhage, delivered, with mention of postpartum complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 251
  },
  {
    "title": "Deadline",
    "isbn_number": "253949775-6",
    "author": "Bald Ratlee",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Activities involving ice hockey",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 291
  },
  {
    "title": "Earth",
    "isbn_number": "358572940-1",
    "author": "Danielle Sirkett",
    "genre": "Drama|War",
    "synopsis": "Accident to watercraft causing other injury to unspecified person",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 367
  },
  {
    "title": "Things Change",
    "isbn_number": "533802434-9",
    "author": "Ody Downer",
    "genre": "Comedy",
    "synopsis": "Tibial collateral ligament bursitis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 195
  },
  {
    "title": "Vampyros Lesbos (Vampiras, Las)",
    "isbn_number": "889618077-5",
    "author": "Joceline Walls",
    "genre": "Fantasy|Horror|Thriller",
    "synopsis": "Open wound of abdominal wall, anterior, complicated",
    "cover_image": "https://picsum.photos/200/300",
    "price": 423
  },
  {
    "title": "Ninja Assassin",
    "isbn_number": "687804392-1",
    "author": "Harriot Talton",
    "genre": "Action|Crime|Drama|Thriller",
    "synopsis": "Other leukemia of unspecified cell type, in relapse",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 252
  },
  {
    "title": "Grace of My Heart",
    "isbn_number": "026501674-6",
    "author": "Maximilien Pagnin",
    "genre": "Comedy|Drama",
    "synopsis": "Orbital tenonitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 110
  },
  {
    "title": "Murder by Proxy: How America Went Postal",
    "isbn_number": "963050727-7",
    "author": "Shelagh Cogle",
    "genre": "Documentary",
    "synopsis": "Closed fracture of radius with ulna, upper end [any part]",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 495
  },
  {
    "title": "Steamboy (Such??mub??i)",
    "isbn_number": "857451022-X",
    "author": "Corbett Twomey",
    "genre": "Action|Animation|Drama|Sci-Fi",
    "synopsis": "Injury to other specified intrathoracic organs without mention of open wound into cavity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 346
  },
  {
    "title": "Green Zone",
    "isbn_number": "531622443-4",
    "author": "Nahum Manion",
    "genre": "Action|Drama|Thriller|War",
    "synopsis": "Abdominal tenderness, right upper quadrant",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 220
  },
  {
    "title": "Better Life, A",
    "isbn_number": "254390321-6",
    "author": "Margalit Whitechurch",
    "genre": "Drama",
    "synopsis": "Other specified bacterial infections in conditions classified elsewhere and of unspecified site, Clostridium perfringens",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 180
  },
  {
    "title": "Prisoners of the Lost Universe",
    "isbn_number": "371878596-X",
    "author": "Brose Dumbell",
    "genre": "Action|Adventure|Sci-Fi",
    "synopsis": "Mixed malaria",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 199
  },
  {
    "title": "Mike's New Car",
    "isbn_number": "590503883-X",
    "author": "Boonie Doust",
    "genre": "Animation|Comedy",
    "synopsis": "Other orthopedic aftercare",
    "cover_image": "https://picsum.photos/200/300",
    "price": 291
  },
  {
    "title": "Sleepy Hollow",
    "isbn_number": "820336135-8",
    "author": "Annette Richardt",
    "genre": "Fantasy|Horror|Mystery|Romance",
    "synopsis": "Retroverted and incarcerated gravid uterus, unspecified as to episode of care or not applicable",
    "cover_image": "https://picsum.photos/200/300",
    "price": 499
  },
  {
    "title": "My Best Enemy (Mi mejor enemigo)",
    "isbn_number": "323310165-1",
    "author": "Somerset Lavarack",
    "genre": "Drama|War",
    "synopsis": "Diverticulum of esophagus, acquired",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 246
  },
  {
    "title": "Cell Count",
    "isbn_number": "631024193-1",
    "author": "Suzanna Casari",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Other motor vehicle traffic accident involving collision with motor vehicle injuring pedal cyclist",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 491
  },
  {
    "title": "Master of the Flying Guillotine (Du bi quan wang da po xue di zi)",
    "isbn_number": "700100240-2",
    "author": "Fernanda Winkle",
    "genre": "Action",
    "synopsis": "Superficial foreign body (splinter) of hand(s) except finger(s) alone, without major open wound, infected",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 160
  },
  {
    "title": "Battle of Britain",
    "isbn_number": "764406950-X",
    "author": "Ericha Swoffer",
    "genre": "War",
    "synopsis": "Malignant neoplasm of pelvic bones, sacrum, and coccyx",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 259
  },
  {
    "title": "Razortooth",
    "isbn_number": "017103029-X",
    "author": "Ian Amis",
    "genre": "Action|Horror|Sci-Fi|Thriller",
    "synopsis": "Visible peristalsis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 358
  },
  {
    "title": "Ice Age",
    "isbn_number": "300446280-X",
    "author": "Cal Shotton",
    "genre": "Adventure|Animation|Children|Comedy",
    "synopsis": "Other specified senile psychotic conditions",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 492
  },
  {
    "title": "Cat's Eye",
    "isbn_number": "412258893-6",
    "author": "Rock O'Hdirscoll",
    "genre": "Horror",
    "synopsis": "Closed fractures involving skull or face with other bones, with cerebral laceration and contusion, with prolonged [more than 24 hours] loss of consciousness and return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 140
  },
  {
    "title": "Curb Dance",
    "isbn_number": "310843085-8",
    "author": "Dunstan Pinchbeck",
    "genre": "(no genres listed)",
    "synopsis": "Endometriosis of intestine",
    "cover_image": "https://picsum.photos/200/300",
    "price": 276
  },
  {
    "title": "Fist of Legend (Jing wu ying xiong)",
    "isbn_number": "403756622-2",
    "author": "Ursulina Stirman",
    "genre": "Action|Drama",
    "synopsis": "Injury to liver without mention of open wound into cavity, laceration, major",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 196
  },
  {
    "title": "Honeymoon in Vegas",
    "isbn_number": "455781023-3",
    "author": "Melany Caseri",
    "genre": "Comedy|Romance",
    "synopsis": "Moderate stage glaucoma",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 247
  },
  {
    "title": "All the Boys Love Mandy Lane",
    "isbn_number": "048723792-7",
    "author": "Teirtza Tithecott",
    "genre": "Horror|Mystery|Thriller",
    "synopsis": "Malignant neoplasm of other and unspecified testis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 453
  },
  {
    "title": "Drunken Master (Jui kuen)",
    "isbn_number": "965477578-6",
    "author": "Lazarus Jeffcoate",
    "genre": "Action|Comedy",
    "synopsis": "Stricture or kinking of ureter",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 147
  },
  {
    "title": "Heavenly Forest",
    "isbn_number": "891258088-4",
    "author": "Dallis Rawson",
    "genre": "Drama|Romance",
    "synopsis": "Terrorism involving other explosions and fragments",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 285
  },
  {
    "title": "Within Limits (Liikkumavara)",
    "isbn_number": "988980812-9",
    "author": "Cathi Hammerson",
    "genre": "Documentary",
    "synopsis": "Chronic depressive personality disorder",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 284
  },
  {
    "title": "Dragon Ball Z: Fusion Reborn (Doragon b??ru Z 12: Fukkatsu no fyushon!! Gok?? to Bej??ta)",
    "isbn_number": "334315960-3",
    "author": "Jarid Beeton",
    "genre": "Action|Adventure|Animation",
    "synopsis": "Other specified complications of pregnancy, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 220
  },
  {
    "title": "Treatment, The",
    "isbn_number": "793550247-1",
    "author": "Lorinda Chese",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Chronic canaliculitis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 290
  },
  {
    "title": "Operation Daybreak",
    "isbn_number": "819433992-8",
    "author": "Murdoch Redrup",
    "genre": "War",
    "synopsis": "Tuberculous peritonitis, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 297
  },
  {
    "title": "Detroit",
    "isbn_number": "565293641-X",
    "author": "Sebastien Vasyunkin",
    "genre": "Drama",
    "synopsis": "Antitussives causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 471
  },
  {
    "title": "On a Clear Day You Can See Forever",
    "isbn_number": "885574046-6",
    "author": "Adrienne Jesteco",
    "genre": "Comedy|Musical|Romance",
    "synopsis": "Closed lateral dislocation of elbow",
    "cover_image": "https://picsum.photos/200/300",
    "price": 295
  },
  {
    "title": "Thoroughbreds Don't Cry",
    "isbn_number": "345339614-6",
    "author": "Gaston Hurton",
    "genre": "Comedy|Drama",
    "synopsis": "Neural hearing loss, unilateral",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 258
  },
  {
    "title": "Rapa Nui",
    "isbn_number": "131809018-0",
    "author": "Ardelle Spivey",
    "genre": "Action|Adventure|Drama|Romance",
    "synopsis": "Locked-in state",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 218
  },
  {
    "title": "Patrick",
    "isbn_number": "766664089-7",
    "author": "Rudy Moreman",
    "genre": "Horror|Sci-Fi|Thriller",
    "synopsis": "Other gonococcal infection of joint",
    "cover_image": "https://picsum.photos/200/300",
    "price": 398
  },
  {
    "title": "Human Race, The",
    "isbn_number": "528478183-X",
    "author": "Octavia Whellans",
    "genre": "Action|Horror|Sci-Fi",
    "synopsis": "Acquired deformity of unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 272
  },
  {
    "title": "Orca: The Killer Whale",
    "isbn_number": "519762082-X",
    "author": "Leah Bale",
    "genre": "Action|Drama|Horror|Thriller",
    "synopsis": "Osteopathy resulting from poliomyelitis, multiple sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 293
  },
  {
    "title": "Get Smart",
    "isbn_number": "982822931-5",
    "author": "Franklin Haack",
    "genre": "Action|Comedy",
    "synopsis": "Infections of nipple associated with childbirth, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 400
  },
  {
    "title": "Girls on the Road (a.k.a. Hot Summer Week)",
    "isbn_number": "137493437-2",
    "author": "Worden Hallwood",
    "genre": "Comedy|Drama|Thriller",
    "synopsis": "Nonspecific reaction to cell mediated immunity measurement of gamma interferon antigen response without active tuberculosis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 107
  },
  {
    "title": "Blue Skies",
    "isbn_number": "817524902-1",
    "author": "Benedikta Duplock",
    "genre": "Comedy|Drama|Musical|Romance",
    "synopsis": "Malignant neoplasm of tonsillar pillars (anterior) (posterior)",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 187
  },
  {
    "title": "So Undercover",
    "isbn_number": "968899966-0",
    "author": "Edwin Quilligan",
    "genre": "Action|Comedy",
    "synopsis": "Dental caries limited to enamel",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 144
  },
  {
    "title": "City Heat",
    "isbn_number": "540506091-7",
    "author": "Elvis Delacroux",
    "genre": "Action|Comedy",
    "synopsis": "Cloudy (hemodialysis) (peritoneal) dialysis effluent",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 148
  },
  {
    "title": "Cranes Are Flying, The (Letyat zhuravli)",
    "isbn_number": "891011903-9",
    "author": "Fulvia Booth-Jarvis",
    "genre": "Drama|Romance|War",
    "synopsis": "Synovial cyst, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 340
  },
  {
    "title": "Butter",
    "isbn_number": "411380655-1",
    "author": "Wilbur Waples",
    "genre": "Comedy",
    "synopsis": "Suppurative labyrinthitis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 408
  },
  {
    "title": "Ca$h",
    "isbn_number": "934737081-9",
    "author": "Marvin Ossipenko",
    "genre": "Crime|Thriller",
    "synopsis": "Healthy person accompanying sick person",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 437
  },
  {
    "title": "Turn Me On, Dammit! (F?? meg p??, for faen)",
    "isbn_number": "177273841-7",
    "author": "Deirdre Alldritt",
    "genre": "Comedy",
    "synopsis": "Closed fractures involving skull or face with other bones, with other and unspecified intracranial hemorrhage, with prolonged [more than 24 hours] loss of consciousness and return to pre- existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 485
  },
  {
    "title": "Adventures of Don Juan",
    "isbn_number": "382633938-X",
    "author": "Sally Ugoletti",
    "genre": "Adventure|Romance",
    "synopsis": "Tuberculosis of epididymis, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 291
  },
  {
    "title": "Waxwork",
    "isbn_number": "886839438-3",
    "author": "Ruby Covey",
    "genre": "Comedy|Horror",
    "synopsis": "Blister of trunk, without mention of infection",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 340
  },
  {
    "title": "Ladykillers, The",
    "isbn_number": "127337312-X",
    "author": "Pammy Revens",
    "genre": "Comedy|Crime",
    "synopsis": "Hyperchylomicronemia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 390
  },
  {
    "title": "Farinelli: il castrato",
    "isbn_number": "538585080-2",
    "author": "Egor Spedroni",
    "genre": "Drama|Musical",
    "synopsis": "Mydriasis (persistent), not due to mydriatics",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 448
  },
  {
    "title": "Birds, the Bees and the Italians, The (Signore & signori)",
    "isbn_number": "000187659-7",
    "author": "Annecorinne Tissell",
    "genre": "Comedy",
    "synopsis": "Railway accident involving derailment without antecedent collision injuring railway employee",
    "cover_image": "https://picsum.photos/200/300",
    "price": 286
  },
  {
    "title": "Electra, My Love (Szerelmem, Elektra)",
    "isbn_number": "183149929-0",
    "author": "Mavis Larner",
    "genre": "Drama",
    "synopsis": "Fracture of clavicle due to birth trauma",
    "cover_image": "https://picsum.photos/200/300",
    "price": 441
  },
  {
    "title": "Arthur",
    "isbn_number": "584100829-3",
    "author": "Ken Tozer",
    "genre": "Comedy|Romance",
    "synopsis": "Personal history, urinary (tract) infection",
    "cover_image": "https://picsum.photos/200/300",
    "price": 314
  },
  {
    "title": "You May Not Kiss the Bride",
    "isbn_number": "684166454-X",
    "author": "Odilia Purkiss",
    "genre": "Action|Comedy|Crime|Romance",
    "synopsis": "Vitiligo",
    "cover_image": "https://picsum.photos/200/300",
    "price": 478
  },
  {
    "title": "Canciones de amor en Lolita's Club",
    "isbn_number": "853331526-0",
    "author": "Daryn Washtell",
    "genre": "Drama",
    "synopsis": "Sickle-cell/Hb-C disease without crisis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 256
  },
  {
    "title": "Reef, The",
    "isbn_number": "219886922-5",
    "author": "Agnella McCutheon",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Unspecified disorder of eyelid",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 404
  },
  {
    "title": "Sharktopus",
    "isbn_number": "378147588-3",
    "author": "Mandy Garwill",
    "genre": "Action|Horror|Sci-Fi",
    "synopsis": "Closed dislocation of radiocarpal (joint)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 283
  },
  {
    "title": "Othello (Tragedy of Othello: The Moor of Venice, The)",
    "isbn_number": "459399258-3",
    "author": "Christiane Daine",
    "genre": "Drama",
    "synopsis": "Other serum reaction due to vaccination",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 383
  },
  {
    "title": "Ordinary Decent Criminal",
    "isbn_number": "474124469-5",
    "author": "Zorana Theuss",
    "genre": "Comedy|Crime",
    "synopsis": "Amniotic fluid embolism, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 160
  },
  {
    "title": "Mother",
    "isbn_number": "166470403-5",
    "author": "Olvan Tolman",
    "genre": "Comedy",
    "synopsis": "Contusion of heart without mention of open wound into thorax",
    "cover_image": "https://picsum.photos/200/300",
    "price": 255
  },
  {
    "title": "Blind (Beul-la-in-deu)",
    "isbn_number": "860703038-8",
    "author": "Willabella Galia",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Retroverted and incarcerated gravid uterus, delivered, with mention of antepartum condition",
    "cover_image": "https://picsum.photos/200/300",
    "price": 319
  },
  {
    "title": "You Killed Me First",
    "isbn_number": "514824627-8",
    "author": "Jud Probate",
    "genre": "Drama",
    "synopsis": "Volume depletion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 316
  },
  {
    "title": "Robot Jox",
    "isbn_number": "395897358-2",
    "author": "Moses Biscomb",
    "genre": "Sci-Fi",
    "synopsis": "Burn [any degree] involving 30-39 percent of body surface with third degree burn, 20-29%",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 269
  },
  {
    "title": "Young Black Stallion, The",
    "isbn_number": "450706043-5",
    "author": "Rubie McTeer",
    "genre": "Adventure|Children|Drama",
    "synopsis": "Malposition of heart and cardiac apex",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 204
  },
  {
    "title": "Paint Your Wagon",
    "isbn_number": "822850243-5",
    "author": "Kath Broszkiewicz",
    "genre": "Comedy|Musical|Western",
    "synopsis": "Intermittent heterotropia, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 351
  },
  {
    "title": "Bears",
    "isbn_number": "490364301-8",
    "author": "Theadora Bucher",
    "genre": "Documentary",
    "synopsis": "Tuberculosis of hip, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 217
  },
  {
    "title": "Acid House, The",
    "isbn_number": "391540276-1",
    "author": "Lesley Spennock",
    "genre": "Comedy|Drama",
    "synopsis": "Observation following alleged rape or seduction",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 274
  },
  {
    "title": "Into the Middle of Nowhere",
    "isbn_number": "396933193-5",
    "author": "Trude Golder",
    "genre": "Adventure|Children|Comedy|Documentary|Drama",
    "synopsis": "Open fractures involving skull or face with other bones, with intracranial injury of other and unspecified nature, with prolonged [more than 24 hours] loss of consciousness and return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 392
  },
  {
    "title": "Who Wants to Kill Jessie? (Kdo chce zab??t Jessii?)",
    "isbn_number": "148127153-9",
    "author": "Claudianus Chimes",
    "genre": "Comedy|Sci-Fi",
    "synopsis": "Anomalies of interarch distance",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 439
  },
  {
    "title": "Rat Savior, The (Izbavitelj)",
    "isbn_number": "609795466-2",
    "author": "Rafaelia Collcott",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Other anomalies of toes",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 170
  },
  {
    "title": "Modern Affair, A",
    "isbn_number": "379913056-X",
    "author": "Keane Perrat",
    "genre": "Romance",
    "synopsis": "Monofixation syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 102
  },
  {
    "title": "Climate of Change",
    "isbn_number": "323306171-4",
    "author": "Wendeline Oxtoby",
    "genre": "Documentary",
    "synopsis": "Spontaneous abortion, with unspecified complication, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 239
  },
  {
    "title": "Man of No Importance, A",
    "isbn_number": "250513477-4",
    "author": "Valry Reddie",
    "genre": "Drama",
    "synopsis": "Recurrent pregnancy loss, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 226
  },
  {
    "title": "Pete Seeger: The Power of Song",
    "isbn_number": "798597478-4",
    "author": "Giselle Fittis",
    "genre": "Documentary",
    "synopsis": "Tuberculosis of ear, bacteriological or histological examination unknown (at present)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 115
  },
  {
    "title": "Gregory's Girl",
    "isbn_number": "510855687-X",
    "author": "Lesley Formigli",
    "genre": "Comedy|Romance",
    "synopsis": "Better eye: near-total vision impairment; lesser eye: not further specified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 113
  },
  {
    "title": "Heartbeats (Les amours imaginaires)",
    "isbn_number": "447770237-X",
    "author": "Alaric Lean",
    "genre": "Drama|Romance",
    "synopsis": "Vogt-koyanagi syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 486
  },
  {
    "title": "Tiger's Tail, The",
    "isbn_number": "326856479-8",
    "author": "Austina Newport",
    "genre": "Comedy|Crime|Drama|Mystery|Thriller",
    "synopsis": "Tuberculosis of peripheral lymph nodes, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 435
  },
  {
    "title": "Another Man's Poison",
    "isbn_number": "586625620-7",
    "author": "Crissie Bollins",
    "genre": "Crime|Drama",
    "synopsis": "Alternating esotropia with A pattern",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 400
  },
  {
    "title": "Big Hero 6",
    "isbn_number": "958551266-1",
    "author": "Oneida Jirusek",
    "genre": "Action|Animation|Comedy",
    "synopsis": "Orbital periostitis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 384
  },
  {
    "title": "Firehouse Dog",
    "isbn_number": "049687485-3",
    "author": "Zoe Dabes",
    "genre": "Action|Comedy",
    "synopsis": "Unspecified cerebral degeneration in childhood",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 289
  },
  {
    "title": "Portrait of Jennie",
    "isbn_number": "828125414-9",
    "author": "Cullin Leipnik",
    "genre": "Drama|Fantasy|Mystery|Romance",
    "synopsis": "Derangement of posterior horn of lateral meniscus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 238
  },
  {
    "title": "Hadewijch",
    "isbn_number": "927752739-0",
    "author": "Netta Kiledal",
    "genre": "Drama",
    "synopsis": "Other open fracture of lower end of femur",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 450
  },
  {
    "title": "Acadia Acadia?!? (L'acadie, l'Acadie)",
    "isbn_number": "865591693-5",
    "author": "Dot Carlozzi",
    "genre": "Documentary",
    "synopsis": "Neoplasms of unspecified nature, other specified sites",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 253
  },
  {
    "title": "Hoosiers (a.k.a. Best Shot)",
    "isbn_number": "806469954-1",
    "author": "Trever Attwooll",
    "genre": "Drama|Romance",
    "synopsis": "Acute (transverse) myelitis in conditions classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 488
  },
  {
    "title": "Ballou",
    "isbn_number": "554220259-4",
    "author": "Putnam Camerati",
    "genre": "Documentary|Musical",
    "synopsis": "Chondrocalcinosis, unspecified, upper arm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 395
  },
  {
    "title": "Hands of Orlac, The (Orlacs H??nde)",
    "isbn_number": "369275671-2",
    "author": "Liam Ickov",
    "genre": "Crime|Horror",
    "synopsis": "Hemiplegia, unspecified, affecting dominant side",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 221
  },
  {
    "title": "Most Likely to Succeed",
    "isbn_number": "012497077-X",
    "author": "Jocelyne Pulford",
    "genre": "Documentary|Drama",
    "synopsis": "Abnormal chest sounds",
    "cover_image": "https://picsum.photos/200/300",
    "price": 498
  },
  {
    "title": "Destroy All Monsters (Kaij?? s??shingeki)",
    "isbn_number": "776381554-X",
    "author": "Harcourt Heimann",
    "genre": "Action|Sci-Fi|Thriller",
    "synopsis": "Accidental poisoning by barbiturates",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 470
  },
  {
    "title": "Caliber 9",
    "isbn_number": "449172358-3",
    "author": "Averill Entissle",
    "genre": "Action|Crime|Thriller",
    "synopsis": "Acute endophthalmitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 121
  },
  {
    "title": "Exit",
    "isbn_number": "032423812-6",
    "author": "Cobbie Emmatt",
    "genre": "Drama",
    "synopsis": "Prophylactic breast removal",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 223
  },
  {
    "title": "Son of Lassie",
    "isbn_number": "804783559-9",
    "author": "Aldric Stonebanks",
    "genre": "Children|Drama",
    "synopsis": "Diabetes with ophthalmic manifestations, type I [juvenile type], uncontrolled",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 335
  },
  {
    "title": "Killing, The",
    "isbn_number": "906845371-8",
    "author": "Ellissa Mant",
    "genre": "Crime|Film-Noir",
    "synopsis": "Teething syndrome",
    "cover_image": "https://picsum.photos/200/300",
    "price": 464
  },
  {
    "title": "Pootie Tang",
    "isbn_number": "303444121-5",
    "author": "Chrissie Sirman",
    "genre": "Comedy",
    "synopsis": "Disseminated retinitis and retinochoroiditis, metastatic",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 352
  },
  {
    "title": "Teen Spirit",
    "isbn_number": "373875067-3",
    "author": "Tamarah Rottger",
    "genre": "Comedy",
    "synopsis": "Disseminated choroiditis and chorioretinitis, generalized",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 336
  },
  {
    "title": "Bride of Re-Animator",
    "isbn_number": "688317714-0",
    "author": "Horatius Dowsett",
    "genre": "Comedy|Horror",
    "synopsis": "Closed fracture of unspecified part of femur",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 298
  },
  {
    "title": "Pumpkin Eater, The",
    "isbn_number": "608174547-3",
    "author": "Joseph Moden",
    "genre": "Drama",
    "synopsis": "Hyposmolality and/or hyponatremia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 158
  },
  {
    "title": "Raising Arizona",
    "isbn_number": "776621167-X",
    "author": "Emanuele Holtham",
    "genre": "Comedy",
    "synopsis": "Crushing injury of knee",
    "cover_image": "https://picsum.photos/200/300",
    "price": 352
  },
  {
    "title": "Tormented",
    "isbn_number": "352446237-5",
    "author": "Garth Gleeton",
    "genre": "Comedy|Horror",
    "synopsis": "Subdural hemorrhage following injury without mention of open intracranial wound, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 358
  },
  {
    "title": "Cinema Verite",
    "isbn_number": "127302518-0",
    "author": "Arthur Bridal",
    "genre": "Drama",
    "synopsis": "Nonspecific abnormal results of other specified function study",
    "cover_image": "https://picsum.photos/200/300",
    "price": 324
  },
  {
    "title": "Luxo Jr.",
    "isbn_number": "734921047-7",
    "author": "Reinwald Knivett",
    "genre": "Animation|Children",
    "synopsis": "Other venereal diseases due to chlamydia trachomatis, unspecified site",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 386
  },
  {
    "title": "Sabrina",
    "isbn_number": "932539828-1",
    "author": "Gelya MacGilpatrick",
    "genre": "Comedy|Romance",
    "synopsis": "Pityriasis rosea",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 178
  },
  {
    "title": "Winged Migration (Peuple migrateur, Le)",
    "isbn_number": "515963582-3",
    "author": "Dion Yuryev",
    "genre": "Documentary",
    "synopsis": "Tuberculosis of esophagus, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 182
  },
  {
    "title": "Blow-Up (Blowup)",
    "isbn_number": "845448579-1",
    "author": "Verine Hamprecht",
    "genre": "Drama|Mystery",
    "synopsis": "Carcinoma in situ of skin of trunk, except scrotum",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 187
  },
  {
    "title": "Despair",
    "isbn_number": "412364901-7",
    "author": "Merle Simcock",
    "genre": "Drama|Fantasy",
    "synopsis": "Other ear problems",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 421
  },
  {
    "title": "Here Comes Peter Cottontail??",
    "isbn_number": "627427857-5",
    "author": "Claybourne Healing",
    "genre": "Animation|Children|Musical",
    "synopsis": "Unspecified infection or infestation of mother, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 405
  },
  {
    "title": "China Blue",
    "isbn_number": "616333112-5",
    "author": "Jsandye Yusupov",
    "genre": "Documentary",
    "synopsis": "Peripartum cardiomyopathy, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 371
  },
  {
    "title": "Love Story",
    "isbn_number": "111469990-X",
    "author": "Rodge Ackerman",
    "genre": "Drama",
    "synopsis": "Other mumps with other specified complications",
    "cover_image": "https://picsum.photos/200/300",
    "price": 434
  },
  {
    "title": "R??narna",
    "isbn_number": "274426411-3",
    "author": "Hartley Baglin",
    "genre": "Action|Crime|Thriller",
    "synopsis": "Asphyxia",
    "cover_image": "https://picsum.photos/200/300",
    "price": 466
  },
  {
    "title": "Watchers",
    "isbn_number": "521201248-1",
    "author": "Marna Swaddle",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Influenza with pneumonia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 476
  },
  {
    "title": "Conspirators of Pleasure (Spiklenci slasti)",
    "isbn_number": "765319784-1",
    "author": "Reggis Meric",
    "genre": "Animation|Comedy",
    "synopsis": "Cerebellar or brain stem laceration with open intracranial wound, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 228
  },
  {
    "title": "Never Back Down",
    "isbn_number": "840586189-0",
    "author": "Lindie O'Hear",
    "genre": "Action",
    "synopsis": "Contaminated drug or biological substance administered by other means",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 206
  },
  {
    "title": "Rewind This!",
    "isbn_number": "636783783-3",
    "author": "Judah Donoher",
    "genre": "Documentary",
    "synopsis": "Salmonella osteomyelitis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 156
  },
  {
    "title": "Svensson, Svensson - I n??d och lust",
    "isbn_number": "543982293-3",
    "author": "Gael Kissell",
    "genre": "Comedy",
    "synopsis": "Extradural hemorrhage following injury with open intracranial wound, with prolonged [more than 24 hours] loss of consciousness without return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 304
  },
  {
    "title": "Cathy Come Home",
    "isbn_number": "153135260-X",
    "author": "Bay Cordero",
    "genre": "Drama",
    "synopsis": "Malignant renovascular hypertension",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 124
  },
  {
    "title": "Nowhere to Run",
    "isbn_number": "912114259-9",
    "author": "Brandea Bools",
    "genre": "Action|Romance",
    "synopsis": "Malignant neoplasm of other major salivary glands",
    "cover_image": "https://picsum.photos/200/300",
    "price": 128
  },
  {
    "title": "S.W.A.T.",
    "isbn_number": "344193342-7",
    "author": "Emogene Tottie",
    "genre": "Action|Thriller",
    "synopsis": "Unspecified cataclysmic storms, and floods resulting from storms",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 267
  },
  {
    "title": "Godzilla vs. Destroyah (Gojira vs. Desutoroi??) ",
    "isbn_number": "814996191-7",
    "author": "Merrill Klaggeman",
    "genre": "Action|Sci-Fi",
    "synopsis": "Unspecified nerve root and plexus disorder",
    "cover_image": "https://picsum.photos/200/300",
    "price": 475
  },
  {
    "title": "Willow Creek",
    "isbn_number": "690385487-8",
    "author": "Toby Alstead",
    "genre": "Horror|Mystery",
    "synopsis": "Nonspecific low blood pressure reading",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 468
  },
  {
    "title": "Doctor Bull",
    "isbn_number": "901369063-7",
    "author": "Wylie Dufoure",
    "genre": "Comedy|Drama",
    "synopsis": "Face or brow presentation, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 445
  },
  {
    "title": "Relentless",
    "isbn_number": "893697686-9",
    "author": "Farley Combes",
    "genre": "Thriller",
    "synopsis": "Disorders of mitochondrial metabolism",
    "cover_image": "https://picsum.photos/200/300",
    "price": 214
  },
  {
    "title": "Maiden Heist, The",
    "isbn_number": "173796936-X",
    "author": "Ker Falshaw",
    "genre": "Comedy|Crime",
    "synopsis": "Open fracture of pisiform bone of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 222
  },
  {
    "title": "League of Ordinary Gentlemen, A",
    "isbn_number": "443588200-0",
    "author": "Kane Apedaile",
    "genre": "Documentary",
    "synopsis": "Mucositis (ulcerative) due to antineoplastic therapy",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 245
  },
  {
    "title": "Knightriders",
    "isbn_number": "917927551-6",
    "author": "Carlynn Elcome",
    "genre": "Action|Adventure|Drama",
    "synopsis": "Unspecified polyarthropathy or polyarthritis, other specified sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 228
  },
  {
    "title": "Unknown",
    "isbn_number": "800710413-5",
    "author": "Tessy Borkett",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Acute leukemia of unspecified cell type, in remission",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 302
  },
  {
    "title": "Alexandria... Why? (Iskanderija... lih?)",
    "isbn_number": "261549705-7",
    "author": "Denni Symington",
    "genre": "Drama",
    "synopsis": "Open wound of multiple sites of shoulder and upper arm, complicated",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 330
  },
  {
    "title": "Branded",
    "isbn_number": "020219693-3",
    "author": "Neilla Thinn",
    "genre": "Western",
    "synopsis": "Volume depletion, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 213
  },
  {
    "title": "Beefcake",
    "isbn_number": "746573034-1",
    "author": "Elden Alcock",
    "genre": "Drama",
    "synopsis": "Antineoplastic antibiotics causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 147
  },
  {
    "title": "Conspiracy Theory",
    "isbn_number": "771722662-6",
    "author": "Harriette Lindeman",
    "genre": "Drama|Mystery|Romance|Thriller",
    "synopsis": "Senile dementia, uncomplicated",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 476
  },
  {
    "title": "Countess, The",
    "isbn_number": "487259948-9",
    "author": "Dinnie Lambrechts",
    "genre": "Drama|Thriller",
    "synopsis": "Retained depleted uranium fragments",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 335
  },
  {
    "title": "Kautokeino Rebellion, The (Kautokeino-oppr??ret)",
    "isbn_number": "894032108-1",
    "author": "Sarah Mawer",
    "genre": "Drama",
    "synopsis": "Echinococcus granulosus infection of liver",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 260
  },
  {
    "title": "Bingo",
    "isbn_number": "226180000-2",
    "author": "Beatrisa Mault",
    "genre": "Adventure|Comedy",
    "synopsis": "Injury to superior mesenteric vein and primary subdivisions",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 317
  },
  {
    "title": "Return of the King, The",
    "isbn_number": "042437443-9",
    "author": "Dion Spuffard",
    "genre": "Adventure|Animation|Fantasy|Musical",
    "synopsis": "Atresia and stenosis of urethra and bladder neck",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 153
  },
  {
    "title": "Scenes From a Marriage (Scener ur ett ??ktenskap)",
    "isbn_number": "065455096-4",
    "author": "Enrique Fairey",
    "genre": "Drama",
    "synopsis": "Hypertension secondary to renal disease, complicating pregnancy, childbirth, and the puerperium, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 157
  },
  {
    "title": "Star Trek Into Darkness",
    "isbn_number": "065416817-2",
    "author": "Sophronia Hacksby",
    "genre": "Action|Adventure|Sci-Fi|IMAX",
    "synopsis": "Open dislocation, seventh cervical vertebra",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 213
  },
  {
    "title": "Beginners",
    "isbn_number": "881015396-0",
    "author": "Rhianon Crisford",
    "genre": "Drama",
    "synopsis": "Acute Eustachian salpingitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 311
  },
  {
    "title": "Moderns, The",
    "isbn_number": "352201906-7",
    "author": "Guss Millen",
    "genre": "Drama",
    "synopsis": "Exercise counseling",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 156
  },
  {
    "title": "Big Parade, The",
    "isbn_number": "604013683-9",
    "author": "Sawyer Ashall",
    "genre": "Drama|Romance|War",
    "synopsis": "Hepatitis B carrier",
    "cover_image": "https://picsum.photos/200/300",
    "price": 228
  },
  {
    "title": "Evolution",
    "isbn_number": "045031853-2",
    "author": "Piotr Jahns",
    "genre": "Comedy|Sci-Fi",
    "synopsis": "Open wound of abdominal wall, anterior, complicated",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 406
  },
  {
    "title": "Vertical Limit",
    "isbn_number": "951470315-4",
    "author": "Clair Demangeot",
    "genre": "Action|Adventure",
    "synopsis": "Anomalies of diaphragm",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 238
  },
  {
    "title": "Ishq",
    "isbn_number": "870409277-5",
    "author": "Kennett Milmo",
    "genre": "Action|Comedy|Drama|Musical|Romance",
    "synopsis": "Other genetic carrier status",
    "cover_image": "https://picsum.photos/200/300",
    "price": 387
  },
  {
    "title": "Handle with Care (a.k.a. Citizen's Band)",
    "isbn_number": "517116943-8",
    "author": "Hubert Fincham",
    "genre": "Comedy",
    "synopsis": "Aromatic analgesics, not elsewhere classified, causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 424
  },
  {
    "title": "City by the Sea",
    "isbn_number": "190578904-1",
    "author": "Savina Hebblewaite",
    "genre": "Crime|Drama",
    "synopsis": "Abscess of thymus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 274
  },
  {
    "title": "Welcome to Collinwood",
    "isbn_number": "851051578-6",
    "author": "Sue Seago",
    "genre": "Comedy|Crime",
    "synopsis": "Cocaine dependence, continuous",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 185
  },
  {
    "title": "Questioning Darwin",
    "isbn_number": "177495198-3",
    "author": "Huntley Harrinson",
    "genre": "Documentary",
    "synopsis": "Relapsing fever, tick-borne",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 140
  },
  {
    "title": "Shake Hands with the Devil",
    "isbn_number": "217940182-5",
    "author": "Tamera Coston",
    "genre": "Drama|War",
    "synopsis": "Bariatric surgery status complicating pregnancy, childbirth, or the puerperium, delivered, with mention of postpartum complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 110
  },
  {
    "title": "Red Rock West",
    "isbn_number": "905490446-1",
    "author": "Matthaeus Houndesome",
    "genre": "Thriller",
    "synopsis": "Syphilitic optic atrophy",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 458
  },
  {
    "title": "Broken Bridges",
    "isbn_number": "368527510-0",
    "author": "Sydelle Clee",
    "genre": "Drama",
    "synopsis": "Difficulty in walking",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 222
  },
  {
    "title": "Sweeney Todd: The Demon Barber of Fleet Street",
    "isbn_number": "104533257-7",
    "author": "Cynthia Claiden",
    "genre": "Crime|Horror",
    "synopsis": "Bipolar I disorder, most recent episode (or current) depressed, severe, specified as with psychotic behavior",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 390
  },
  {
    "title": "Spirits of the Dead",
    "isbn_number": "454333895-2",
    "author": "Kinnie Kisar",
    "genre": "Horror|Mystery",
    "synopsis": "Full-thickness skin loss [third degree, not otherwise specified] of chin",
    "cover_image": "https://picsum.photos/200/300",
    "price": 152
  },
  {
    "title": "Eddy Duchin Story, The",
    "isbn_number": "939192516-2",
    "author": "Madeleine Golds",
    "genre": "Drama|Musical|Romance",
    "synopsis": "Sylvatic yellow fever",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 355
  },
  {
    "title": "Dark Eyes (Oci ciornie)",
    "isbn_number": "532574855-6",
    "author": "Tomasine Geal",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Intestinal infection due to other organisms",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 315
  },
  {
    "title": "Rage",
    "isbn_number": "300529035-2",
    "author": "Celestyn Boerder",
    "genre": "Drama",
    "synopsis": "Corneal anesthesia and hypoesthesia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 163
  },
  {
    "title": "Worlds Apart (To verdener)",
    "isbn_number": "759239517-7",
    "author": "Rustin Aikin",
    "genre": "Drama",
    "synopsis": "Teething syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 406
  },
  {
    "title": "Escape from Planet Earth",
    "isbn_number": "030930574-8",
    "author": "Augustina Himpson",
    "genre": "Adventure|Animation|Comedy|Sci-Fi",
    "synopsis": "Burkitt's tumor or lymphoma, lymph nodes of head, face, and neck",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 158
  },
  {
    "title": "Hyenas (Hy??nes)",
    "isbn_number": "256786309-5",
    "author": "Peterus La Wille",
    "genre": "Comedy|Drama",
    "synopsis": "Open wound of elbow, with tendon involvement",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 151
  },
  {
    "title": "Off Beat",
    "isbn_number": "049665604-X",
    "author": "Milissent Farebrother",
    "genre": "Drama|Romance",
    "synopsis": "Acute venous embolism and thrombosis of superficial veins of upper extremity",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 150
  },
  {
    "title": "Captain EO",
    "isbn_number": "403439572-9",
    "author": "Bendix Lightowlers",
    "genre": "Adventure|Children|Comedy|Musical|Sci-Fi",
    "synopsis": "Mucopolysaccharidosis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 386
  },
  {
    "title": "Horse's Mouth, The",
    "isbn_number": "759093344-9",
    "author": "Konstantin Althorp",
    "genre": "Comedy",
    "synopsis": "Contracture of joint, upper arm",
    "cover_image": "https://picsum.photos/200/300",
    "price": 307
  },
  {
    "title": "Barbarians at the Gate",
    "isbn_number": "383483529-3",
    "author": "Fancie Dewerson",
    "genre": "Drama",
    "synopsis": "Other injury of external genitals",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 316
  },
  {
    "title": "Leech Woman, The",
    "isbn_number": "554928634-3",
    "author": "Ivar Sayles",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Congenital central alveolar hypoventilation syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 186
  },
  {
    "title": "Kiss the Bride",
    "isbn_number": "125554307-8",
    "author": "Karla Salvin",
    "genre": "Drama|Romance",
    "synopsis": "Open wound of lip, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 481
  },
  {
    "title": "Simple Life, A (Tao jie)",
    "isbn_number": "564862107-8",
    "author": "Bent Lucas",
    "genre": "Drama",
    "synopsis": "Other named variants of lymphosarcoma and reticulosarcoma, lymph nodes of head, face, and neck",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 368
  },
  {
    "title": "BBOY for LIFE",
    "isbn_number": "015428032-1",
    "author": "Erich Roddick",
    "genre": "Adventure|Crime|Documentary|Drama",
    "synopsis": "Peritoneal effusion (chronic)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 168
  },
  {
    "title": "Marlene Dietrich: Shadow and Light",
    "isbn_number": "551579592-X",
    "author": "Edsel Willbond",
    "genre": "Documentary",
    "synopsis": "Hepatitis in viral diseases classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 416
  },
  {
    "title": "Snow on Tha Bluff",
    "isbn_number": "023263969-8",
    "author": "Mireille Johns",
    "genre": "Crime|Drama",
    "synopsis": "Other activity involving water and watercraft",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 130
  },
  {
    "title": "Rocky III",
    "isbn_number": "938689259-6",
    "author": "Philippine Aronin",
    "genre": "Action|Drama",
    "synopsis": "Abnormal pupillary function, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 129
  },
  {
    "title": "Night Train",
    "isbn_number": "352314850-2",
    "author": "Chloris Kemp",
    "genre": "Action|Mystery|Thriller",
    "synopsis": "Tuberculous pneumothorax, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 146
  },
  {
    "title": "Happily Ever After (Ils se mari??rent et eurent beaucoup d'enfants)",
    "isbn_number": "672155948-X",
    "author": "Hermie Boys",
    "genre": "Comedy|Drama",
    "synopsis": "Other congenital infections specific to the perinatal period",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 333
  },
  {
    "title": "Hairdresser's Husband, The (Le mari de la coiffeuse)",
    "isbn_number": "882884942-8",
    "author": "Hugibert Birtle",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Unspecified vomiting of pregnancy, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 134
  },
  {
    "title": "Sons of the Desert",
    "isbn_number": "167526476-7",
    "author": "Lucio Birtley",
    "genre": "Comedy",
    "synopsis": "Legally induced abortion, with other specified complications, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 275
  },
  {
    "title": "Cherry Blossoms (Kirschbl??ten - Hanami)",
    "isbn_number": "270574847-4",
    "author": "Waly Jeannot",
    "genre": "Drama|Romance",
    "synopsis": "Obstruction by bony pelvis during labor, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 197
  },
  {
    "title": "Nameless, The (Los sin nombre)",
    "isbn_number": "828844850-X",
    "author": "Wayland Newsham",
    "genre": "Drama|Horror|Mystery",
    "synopsis": "Other and unspecified cerebral laceration and contusion, without mention of open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 264
  },
  {
    "title": "This Time Around",
    "isbn_number": "965113334-1",
    "author": "Aigneis Weekland",
    "genre": "Comedy|Romance",
    "synopsis": "Placental polyp, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 355
  },
  {
    "title": "Before the Rain (Pred dozhdot)",
    "isbn_number": "620180925-2",
    "author": "Wyn Mushet",
    "genre": "Drama|War",
    "synopsis": "Spondylosis with myelopathy, lumbar region",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 439
  },
  {
    "title": "Memory",
    "isbn_number": "241233603-2",
    "author": "Adolphe Matthis",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Alopecia, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 163
  },
  {
    "title": "Pure",
    "isbn_number": "091793921-2",
    "author": "Elie Cassius",
    "genre": "Drama",
    "synopsis": "Intracerebral hemorrhage",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 208
  },
  {
    "title": "Face to Face (Faccia a faccia)",
    "isbn_number": "371729836-4",
    "author": "Caryn Tortis",
    "genre": "Adventure|Western",
    "synopsis": "Railway accident of unspecified nature injuring pedestrian",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 392
  },
  {
    "title": "Knight and Day",
    "isbn_number": "987801510-6",
    "author": "Hurleigh Stendell",
    "genre": "Action|Comedy|Thriller",
    "synopsis": "Closed fracture of lower end of femur, unspecified part",
    "cover_image": "https://picsum.photos/200/300",
    "price": 178
  },
  {
    "title": "This Special Friendship (Les amiti??s particuli??res)",
    "isbn_number": "244791452-0",
    "author": "Pincus Pedrollo",
    "genre": "Drama",
    "synopsis": "Pica",
    "cover_image": "https://picsum.photos/200/300",
    "price": 283
  },
  {
    "title": "Girl, Interrupted",
    "isbn_number": "561347581-4",
    "author": "Andros Pusey",
    "genre": "Drama",
    "synopsis": "Other specified pruritic conditions",
    "cover_image": "https://picsum.photos/200/300",
    "price": 313
  },
  {
    "title": "After School Midnighters (H??kago middonait??zu)",
    "isbn_number": "839733230-8",
    "author": "Veriee Hallawell",
    "genre": "Action|Animation|Children|Comedy|Fantasy",
    "synopsis": "Other specified types of schizophrenia, chronic with acute exacerbation",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 287
  },
  {
    "title": "Spy in Black, The",
    "isbn_number": "914437227-2",
    "author": "Major Wardhaw",
    "genre": "Thriller|War",
    "synopsis": "Mechanical complication due to insulin pump",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 399
  },
  {
    "title": "Sam Peckinpah: Man of Iron",
    "isbn_number": "710900943-2",
    "author": "Jada Bathow",
    "genre": "Documentary",
    "synopsis": "Assault by criminal neglect",
    "cover_image": "https://picsum.photos/200/300",
    "price": 159
  },
  {
    "title": "Finances of the Grand Duke, The (Die Finanzen des Gro??herzogs)",
    "isbn_number": "436080507-1",
    "author": "Sutherlan Balog",
    "genre": "Comedy",
    "synopsis": "Injury due to war operations by unspecified explosion",
    "cover_image": "https://picsum.photos/200/300",
    "price": 285
  },
  {
    "title": "Louis Theroux: The Most Hated Family in America in Crisis",
    "isbn_number": "298104779-5",
    "author": "Michele Bowton",
    "genre": "Documentary",
    "synopsis": "Other dysfunctions of sleep stages or arousal from sleep",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 487
  },
  {
    "title": "American Dreamz",
    "isbn_number": "705817274-9",
    "author": "Alexandros Dog",
    "genre": "Comedy|Drama",
    "synopsis": "Gross hematuria",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 238
  },
  {
    "title": "Three Worlds (Trois mondes)",
    "isbn_number": "286786404-6",
    "author": "Bobbe Podmore",
    "genre": "Drama",
    "synopsis": "Unspecified failed trial of labor, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 178
  },
  {
    "title": "Germinal",
    "isbn_number": "245753260-4",
    "author": "Ardella Lettson",
    "genre": "Drama|Romance",
    "synopsis": "Anomaly of aorta, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 118
  },
  {
    "title": "Sword of Gideon",
    "isbn_number": "067519001-0",
    "author": "Irene Alwood",
    "genre": "Action|Drama|Thriller",
    "synopsis": "Arthropathy associated with other viral diseases, pelvic region and thigh",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 377
  },
  {
    "title": "Zone 39",
    "isbn_number": "375035619-X",
    "author": "Griffy Flaonier",
    "genre": "Sci-Fi",
    "synopsis": "Pulmonary complications of anesthesia or other sedation in labor and delivery, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 422
  },
  {
    "title": "Marshal of Finland, The (Suomen Marsalkka)",
    "isbn_number": "133525540-0",
    "author": "Rob Belfitt",
    "genre": "Drama|Romance",
    "synopsis": "Simultaneous visual perception without fusion",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 486
  },
  {
    "title": "Three Brothers 2, The (Les trois fr??res, le retour)",
    "isbn_number": "770641257-1",
    "author": "Jozef Dady",
    "genre": "Comedy",
    "synopsis": "Closed dislocation of radioulnar (joint), distal",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 278
  },
  {
    "title": "Bicycle Thieves (a.k.a. The Bicycle Thief) (a.k.a. The Bicycle Thieves) (Ladri di biciclette)",
    "isbn_number": "665420720-3",
    "author": "Farrell Tudball",
    "genre": "Drama",
    "synopsis": "Lack of normal physiological development, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 214
  },
  {
    "title": "Washington Square",
    "isbn_number": "806695413-1",
    "author": "Hunfredo Towersey",
    "genre": "Drama",
    "synopsis": "Alternating esotropia with V pattern",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 191
  },
  {
    "title": "Line of Sight",
    "isbn_number": "737470618-9",
    "author": "Gabbey Strognell",
    "genre": "Documentary",
    "synopsis": "Papanicolaou smear of cervix with low grade squamous intraepithelial lesion (LGSIL)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 375
  },
  {
    "title": "Laugh, Clown, Laugh",
    "isbn_number": "230275743-2",
    "author": "Osmond Kerry",
    "genre": "Drama",
    "synopsis": "Venereal disease, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 393
  },
  {
    "title": "Michael Clayton",
    "isbn_number": "466100538-4",
    "author": "Francisco Ferry",
    "genre": "Drama|Thriller",
    "synopsis": "Endometriosis of pelvic peritoneum",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 376
  },
  {
    "title": "Crossing Over",
    "isbn_number": "005555358-3",
    "author": "Meg Danzelman",
    "genre": "Drama",
    "synopsis": "Bone replaced by transplant",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 367
  },
  {
    "title": "Thunder Bay",
    "isbn_number": "549429681-4",
    "author": "Inez Witcher",
    "genre": "Adventure",
    "synopsis": "Palindromic rheumatism, forearm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 431
  },
  {
    "title": "Elvis on Tour",
    "isbn_number": "695864973-7",
    "author": "Jimmy Choldcroft",
    "genre": "Documentary|Musical",
    "synopsis": "Metabolic disorders following abortion or ectopic and molar pregnancies",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 454
  },
  {
    "title": "Dark Horse (Voksne mennesker)",
    "isbn_number": "663490004-3",
    "author": "Tally Sikorski",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Streptococcus infection in conditions classified elsewhere and of unspecified site, streptococcus, group A",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 437
  },
  {
    "title": "Iron Horse, The",
    "isbn_number": "617854836-2",
    "author": "Dian Pargiter",
    "genre": "Western",
    "synopsis": "Circadian rhythm sleep disorder, free-running type",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 297
  },
  {
    "title": "Heavyweights (Heavy Weights)",
    "isbn_number": "631328399-6",
    "author": "Madalena Templeman",
    "genre": "Children|Comedy",
    "synopsis": "Dissection of aorta, thoracic",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 211
  },
  {
    "title": "Pleasure of Being Robbed, The",
    "isbn_number": "944996531-5",
    "author": "Adelaide Longley",
    "genre": "Comedy",
    "synopsis": "Nontraffic accident involving motor-driven snow vehicle injuring occupant of streetcar",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 489
  },
  {
    "title": "8:46",
    "isbn_number": "070237174-2",
    "author": "Vernon Sculley",
    "genre": "Drama",
    "synopsis": "Calcifying tendinitis of shoulder",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 428
  },
  {
    "title": "Chopper",
    "isbn_number": "122961912-7",
    "author": "Todd Praton",
    "genre": "Drama|Thriller",
    "synopsis": "Shiga toxin-producing Escherichia coli [E. coli] (STEC), unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 233
  },
  {
    "title": "Kajaki",
    "isbn_number": "231939950-X",
    "author": "Ginny LAbbet",
    "genre": "Adventure|Drama|War",
    "synopsis": "Vertical heterophoria",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 363
  },
  {
    "title": "Bo Burnham: what.",
    "isbn_number": "994835455-9",
    "author": "Brinn Lutzmann",
    "genre": "Comedy",
    "synopsis": "Tuberculosis of ear, bacteriological or histological examination not done",
    "cover_image": "https://picsum.photos/200/300",
    "price": 199
  },
  {
    "title": "Horton Hears a Who!",
    "isbn_number": "153539975-9",
    "author": "Em Skillicorn",
    "genre": "Adventure|Animation|Children|Comedy",
    "synopsis": "Open fracture of lunate [semilunar] bone of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 453
  },
  {
    "title": "Remember the Daze (Beautiful Ordinary, The)",
    "isbn_number": "619659754-X",
    "author": "Cordy Cowthard",
    "genre": "Comedy|Drama",
    "synopsis": "Unspecified dentofacial anomalies",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 135
  },
  {
    "title": "Mysterious Object at Noon (Dokfa nai meuman)",
    "isbn_number": "451868102-9",
    "author": "Brooks Conklin",
    "genre": "Drama|Mystery",
    "synopsis": "Open wound of upper arm, without mention of complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 494
  },
  {
    "title": "Countdown to Looking Glass",
    "isbn_number": "624733001-4",
    "author": "Tonie Vallerine",
    "genre": "Drama",
    "synopsis": "Tuberculosis of skin and subcutaneous cellular tissue, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 342
  },
  {
    "title": "Hello Ladies: The Movie",
    "isbn_number": "936034268-8",
    "author": "Cristine d' Elboux",
    "genre": "Comedy",
    "synopsis": "Yellow fever, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 238
  },
  {
    "title": "Double Or Nothing",
    "isbn_number": "324760575-4",
    "author": "Ingeberg Cassel",
    "genre": "(no genres listed)",
    "synopsis": "Intracranial injury of other and unspecified nature without mention of open intracranial wound, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 291
  },
  {
    "title": "Frozen North, The",
    "isbn_number": "235807481-0",
    "author": "Ricca Bolwell",
    "genre": "Comedy",
    "synopsis": "Valgus deformity of wrist (acquired)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 389
  },
  {
    "title": "Company",
    "isbn_number": "642365979-6",
    "author": "Dinny Holt",
    "genre": "Drama|Musical",
    "synopsis": "Vesicoureteral reflux with reflux nephropathy, bilateral",
    "cover_image": "https://picsum.photos/200/300",
    "price": 254
  },
  {
    "title": "Merry Widow, The",
    "isbn_number": "685543711-7",
    "author": "Iosep Dagnan",
    "genre": "Drama|Romance",
    "synopsis": "Need for prophylactic immunotherapy",
    "cover_image": "https://picsum.photos/200/300",
    "price": 367
  },
  {
    "title": "Wonderful World",
    "isbn_number": "041524191-X",
    "author": "Taber Magson",
    "genre": "Drama|Romance",
    "synopsis": "Superficial thrombophlebitis complicating pregnancy and the puerperium, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 286
  },
  {
    "title": "Devil and Max Devlin, The",
    "isbn_number": "229519760-0",
    "author": "Kalila Iglesias",
    "genre": "Comedy|Fantasy",
    "synopsis": "Other complications of anesthesia or other sedation in labor and delivery, delivered, with mention of postpartum complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 221
  },
  {
    "title": "All In This Tea",
    "isbn_number": "656544289-4",
    "author": "Tiler Crampton",
    "genre": "Documentary",
    "synopsis": "Benign neoplasm of stomach",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 357
  },
  {
    "title": "Sleuth",
    "isbn_number": "064239971-9",
    "author": "Shelia Week",
    "genre": "Drama|Mystery|Thriller",
    "synopsis": "Other specified maternal conditions affecting fetus or newborn",
    "cover_image": "https://picsum.photos/200/300",
    "price": 159
  },
  {
    "title": "Rare Breed, The",
    "isbn_number": "336359610-3",
    "author": "Trace Worvill",
    "genre": "Action|Drama|Romance|Western",
    "synopsis": "Infection with microorganisms resistant to cephalosporins and other B-lactam antibiotics",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 410
  },
  {
    "title": "Small Time Crooks",
    "isbn_number": "185723967-9",
    "author": "Delaney Cartmel",
    "genre": "Comedy|Crime",
    "synopsis": "Chronic cholecystitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 168
  },
  {
    "title": "100 Rifles",
    "isbn_number": "475343057-X",
    "author": "Edd Erdis",
    "genre": "Adventure|War|Western",
    "synopsis": "Venomous spiders causing poisoning and toxic reactions",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 234
  },
  {
    "title": "Man of Iron (Czlowiek z Zelaza)",
    "isbn_number": "565161220-3",
    "author": "Frazier Capelen",
    "genre": "Drama|Romance",
    "synopsis": "Recurrent dislocation of joint, upper arm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 426
  },
  {
    "title": "Black Sunday (La maschera del demonio)",
    "isbn_number": "392221561-0",
    "author": "Scottie Fenny",
    "genre": "Horror",
    "synopsis": "Idiopathic interstitial pneumonia, not otherwise specified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 297
  },
  {
    "title": "How to Make a Monster",
    "isbn_number": "756972412-7",
    "author": "Saunderson Shrubb",
    "genre": "Horror|Sci-Fi",
    "synopsis": "Suspected damage to fetus from drugs, affecting management of mother, unspecified as to episode of care or not applicable",
    "cover_image": "https://picsum.photos/200/300",
    "price": 444
  },
  {
    "title": "Teddy Bear (10 timer til Paradis)",
    "isbn_number": "081575906-1",
    "author": "Heda Drynan",
    "genre": "Drama|Romance",
    "synopsis": "Maple bark-strippers' lung",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 484
  },
  {
    "title": "Tickets",
    "isbn_number": "583541497-8",
    "author": "Darwin Jessard",
    "genre": "Comedy|Drama",
    "synopsis": "Other specified myotonic disorder",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 498
  },
  {
    "title": "Mr. Robinson Crusoe",
    "isbn_number": "068731023-7",
    "author": "Cybill Brunn",
    "genre": "Adventure|Comedy",
    "synopsis": "Lordosis associated with other conditions",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 406
  },
  {
    "title": "Anna Lucasta",
    "isbn_number": "295074353-6",
    "author": "Raeann Tweedell",
    "genre": "Drama",
    "synopsis": "Closed dislocation, lumbar vertebra",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 268
  },
  {
    "title": "It's Alive",
    "isbn_number": "486331631-3",
    "author": "Reube Bounde",
    "genre": "Horror",
    "synopsis": "Other specified gastritis, with hemorrhage",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 378
  },
  {
    "title": "Tokyo!",
    "isbn_number": "030503845-1",
    "author": "Nevsa Meeke",
    "genre": "Drama",
    "synopsis": "Complications of unspecified reattached extremity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 428
  },
  {
    "title": "Neighbors",
    "isbn_number": "752276812-8",
    "author": "Ingeberg Starr",
    "genre": "Comedy",
    "synopsis": "Third-degree perineal laceration, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 400
  },
  {
    "title": "Hum Dil De Chuke Sanam",
    "isbn_number": "819708669-9",
    "author": "Terrill Hawick",
    "genre": "Drama|Romance",
    "synopsis": "Other ill-defined cerebrovascular disease",
    "cover_image": "https://picsum.photos/200/300",
    "price": 249
  },
  {
    "title": "Silent Souls (Ovsyanki)",
    "isbn_number": "641156281-4",
    "author": "Kent Clail",
    "genre": "Drama",
    "synopsis": "Other disorders of lactation, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 335
  },
  {
    "title": "Badman's Territory",
    "isbn_number": "580005485-1",
    "author": "Rozalie Stoves",
    "genre": "Action|Drama|Western",
    "synopsis": "Other myeloid leukemia, in remission",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 435
  },
  {
    "title": "Where the Red Fern Grows",
    "isbn_number": "419354549-0",
    "author": "Dianna Gosford",
    "genre": "Drama",
    "synopsis": "Chronic or unspecified peptic ulcer of unspecified site with hemorrhage, without mention of obstruction",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 182
  },
  {
    "title": "Paradine Case, The",
    "isbn_number": "169982365-0",
    "author": "Leonora Parcall",
    "genre": "Drama",
    "synopsis": "Open wound of vagina, complicated",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 302
  },
  {
    "title": "What We Did on Our Holiday",
    "isbn_number": "921355228-9",
    "author": "Nelli Bootton",
    "genre": "Comedy",
    "synopsis": "Hodgkin's disease, lymphocytic-histiocytic predominance, spleen",
    "cover_image": "https://picsum.photos/200/300",
    "price": 346
  },
  {
    "title": "Nude for Satan (Nuda per Satana)",
    "isbn_number": "952816646-6",
    "author": "Robina Despenser",
    "genre": "Horror",
    "synopsis": "Benign neoplasm of cornea",
    "cover_image": "https://picsum.photos/200/300",
    "price": 286
  },
  {
    "title": "Alexandra's Project",
    "isbn_number": "639841423-3",
    "author": "Willi Franiak",
    "genre": "Drama|Thriller",
    "synopsis": "Other hemorrhagic disorder due to intrinsic circulating anticoagulants, antibodies, or inhibitors",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 293
  },
  {
    "title": "Dead or Alive: Hanzaisha",
    "isbn_number": "838806289-1",
    "author": "Ervin Annetts",
    "genre": "Action|Crime",
    "synopsis": "Acute leukemia of unspecified cell type, in relapse",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 147
  },
  {
    "title": "City Streets",
    "isbn_number": "971237350-9",
    "author": "Bobbie Lamboll",
    "genre": "Crime|Film-Noir",
    "synopsis": "Failed attempted abortion complicated by embolism",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 422
  },
  {
    "title": "It's Alive",
    "isbn_number": "325785331-9",
    "author": "Rooney Salmoni",
    "genre": "Horror",
    "synopsis": "Enthesopathy of unspecified site",
    "cover_image": "https://picsum.photos/200/300",
    "price": 196
  },
  {
    "title": "Grand Prix",
    "isbn_number": "317390810-4",
    "author": "Dalton Zmitrovich",
    "genre": "Drama",
    "synopsis": "Retinal hemorrhage",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 374
  },
  {
    "title": "Harry and Tonto",
    "isbn_number": "572053202-1",
    "author": "Olga Iddison",
    "genre": "Comedy|Drama",
    "synopsis": "Mediastinitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 258
  },
  {
    "title": "Beautiful Life, A",
    "isbn_number": "837446008-3",
    "author": "Cobbie Jubb",
    "genre": "Drama",
    "synopsis": "Rubella with unspecified neurological complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 310
  },
  {
    "title": "The Horribly Slow Murderer with the Extremely Inefficient Weapon",
    "isbn_number": "580259392-X",
    "author": "Rozelle Seyers",
    "genre": "Comedy|Horror",
    "synopsis": "Contracture of joint, lower leg",
    "cover_image": "https://picsum.photos/200/300",
    "price": 477
  },
  {
    "title": "Hollywood Shuffle",
    "isbn_number": "567100631-7",
    "author": "Royal Mathely",
    "genre": "Comedy",
    "synopsis": "Femoral hernia with obstruction, bilateral (not specified as recurrent)",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 377
  },
  {
    "title": "Tony",
    "isbn_number": "281070909-2",
    "author": "Stavros Mayling",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Tuberculoma of brain, bacteriological or histological examination unknown (at present)",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 477
  },
  {
    "title": "21 tapaa pilata avioliitto",
    "isbn_number": "154319894-5",
    "author": "Tyrone Ranahan",
    "genre": "Comedy|Romance",
    "synopsis": "Ornithosis with unspecified complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 275
  },
  {
    "title": "Craigslist Killer, The ",
    "isbn_number": "087768115-5",
    "author": "Eli Flaxon",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Open fracture of unspecified part of radius with ulna",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 155
  },
  {
    "title": "'Neath the Arizona Skies",
    "isbn_number": "753947824-1",
    "author": "Ulysses Beades",
    "genre": "Western",
    "synopsis": "Tuberculous meningitis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 436
  },
  {
    "title": "Cube of Sugar, A (Ye Habe Ghand)",
    "isbn_number": "553900740-9",
    "author": "Saxon Deeming",
    "genre": "Comedy|Drama",
    "synopsis": "Unspecified multiple gestation, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 483
  },
  {
    "title": "From Russia with Love",
    "isbn_number": "152195796-7",
    "author": "Doroteya Adlington",
    "genre": "Action|Adventure|Thriller",
    "synopsis": "Burn of larynx, trachea, and lung",
    "cover_image": "https://picsum.photos/200/300",
    "price": 201
  },
  {
    "title": "Plato's Academy",
    "isbn_number": "262458859-0",
    "author": "Calhoun Allport",
    "genre": "Comedy|Drama",
    "synopsis": "Malocclusion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 357
  },
  {
    "title": "Abendland",
    "isbn_number": "598166309-X",
    "author": "Des Colecrough",
    "genre": "Documentary",
    "synopsis": "Anaphylactic reaction due to unspecified food",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 321
  },
  {
    "title": "Deal, The",
    "isbn_number": "892482879-7",
    "author": "Lila Eldin",
    "genre": "Drama",
    "synopsis": "Sinoatrial node dysfunction",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 471
  },
  {
    "title": "Donner Pass",
    "isbn_number": "383492115-7",
    "author": "Cash Crumpe",
    "genre": "Horror",
    "synopsis": "Failure to thrive",
    "cover_image": "https://picsum.photos/200/300",
    "price": 424
  },
  {
    "title": "Bomber",
    "isbn_number": "486900840-8",
    "author": "Dulsea Hamson",
    "genre": "Comedy|Drama",
    "synopsis": "Malignant mast cell tumors, unspecified site, extranodal and solid organ sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 407
  },
  {
    "title": "Rembrandt",
    "isbn_number": "701726206-9",
    "author": "Cal Clotworthy",
    "genre": "Drama",
    "synopsis": "Epilepsy complicating pregnancy, childbirth, or the puerperium, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 471
  },
  {
    "title": "One Deadly Summer (L'??t?? meurtrier)",
    "isbn_number": "220485601-0",
    "author": "Vaughn Barrat",
    "genre": "Comedy|Drama|Mystery",
    "synopsis": "Obesity hypoventilation syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 112
  },
  {
    "title": "Iraq for Sale: The War Profiteers",
    "isbn_number": "637843403-4",
    "author": "Obed Cleyburn",
    "genre": "Documentary",
    "synopsis": "Open fracture of base of skull with intracranial injury of other and unspecified nature, with loss of consciousness of unspecified duration",
    "cover_image": "https://picsum.photos/200/300",
    "price": 437
  },
  {
    "title": "Above the Street, Below the Water (Over gaden under vandet)",
    "isbn_number": "002021481-2",
    "author": "Dukey Neames",
    "genre": "Drama",
    "synopsis": "Benign neoplasm of heart",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 203
  },
  {
    "title": "Lady Killer",
    "isbn_number": "915456523-5",
    "author": "Suzette Epgrave",
    "genre": "Comedy|Crime",
    "synopsis": "Open wound of elbow, without mention of complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 260
  },
  {
    "title": "Hemingway & Gellhorn",
    "isbn_number": "673755901-8",
    "author": "Travus Woodbridge",
    "genre": "Drama|Romance|War",
    "synopsis": "Acute nonparalytic poliomyelitis, poliovirus type III",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 313
  },
  {
    "title": "Smokey and the Bandit III",
    "isbn_number": "419622327-3",
    "author": "Robbin Tender",
    "genre": "Action|Comedy",
    "synopsis": "Old disruption of anterior cruciate ligament",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 198
  },
  {
    "title": "Lost Boundaries",
    "isbn_number": "114497621-9",
    "author": "Odell Pitceathly",
    "genre": "Drama",
    "synopsis": "Ankle joint replacement",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 284
  },
  {
    "title": "Alive",
    "isbn_number": "955666826-8",
    "author": "Rasla Bellwood",
    "genre": "Drama",
    "synopsis": "Other open skull fracture with cerebral laceration and contusion, with no loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 198
  },
  {
    "title": "Program, The",
    "isbn_number": "908908282-4",
    "author": "Morissa Gurden",
    "genre": "Action|Drama",
    "synopsis": "Accident due to abandonment or neglect of infants and helpless persons",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 165
  },
  {
    "title": "Hondo",
    "isbn_number": "839976164-8",
    "author": "Virgie Featherstonhaugh",
    "genre": "Western",
    "synopsis": "Edema of male genital organs",
    "cover_image": "https://picsum.photos/200/300",
    "price": 296
  },
  {
    "title": "Gunfighter, The",
    "isbn_number": "871155905-5",
    "author": "Kilian Swyer",
    "genre": "Action|Western",
    "synopsis": "Fetal and newborn aspiration, unspecified",
    "cover_image": "https://picsum.photos/200/300",
    "price": 430
  },
  {
    "title": "All Over Me",
    "isbn_number": "709559805-3",
    "author": "Darcy Kliche",
    "genre": "Drama",
    "synopsis": "Other monocytic leukemia, without mention of having achieved remission",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 154
  },
  {
    "title": "The Green Prince",
    "isbn_number": "371184618-1",
    "author": "Gayla Samarth",
    "genre": "Documentary|Drama|Thriller",
    "synopsis": "Acute miliary tuberculosis, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 122
  },
  {
    "title": "Singles",
    "isbn_number": "978049106-6",
    "author": "Hamish Taphouse",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Obesity complicating pregnancy, childbirth, or the puerperium, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 254
  },
  {
    "title": "Waxworks (Das Wachsfigurenkabinett)",
    "isbn_number": "462760389-4",
    "author": "Sergio Cottem",
    "genre": "Comedy|Drama|Romance|Thriller",
    "synopsis": "Opioid abuse, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 451
  },
  {
    "title": "Glass Shield, The",
    "isbn_number": "602587997-4",
    "author": "Barrie Sabbins",
    "genre": "Crime|Drama",
    "synopsis": "High-risk sexual behavior",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 357
  },
  {
    "title": "Mixed Nuts",
    "isbn_number": "332441947-6",
    "author": "Ulla Digg",
    "genre": "Comedy",
    "synopsis": "Dysphagia, oral phase",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 427
  },
  {
    "title": "Boy, Did I Get a Wrong Number!",
    "isbn_number": "612815812-9",
    "author": "Ofella Brauninger",
    "genre": "Comedy",
    "synopsis": "Dental caries extending into pulp",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 240
  },
  {
    "title": "Momo",
    "isbn_number": "525325963-5",
    "author": "Merrel Roebottom",
    "genre": "Animation|Children|Fantasy",
    "synopsis": "Urethritis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 442
  },
  {
    "title": "And Starring Pancho Villa as Himself",
    "isbn_number": "702955741-7",
    "author": "Westley Tower",
    "genre": "Action|Comedy|Drama|War",
    "synopsis": "Old disruption of anterior cruciate ligament",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 222
  },
  {
    "title": "Spy Who Came in from the Cold, The",
    "isbn_number": "657711750-0",
    "author": "Peyter Durtnal",
    "genre": "Drama|Thriller",
    "synopsis": "Severe pre-eclampsia, postpartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 485
  },
  {
    "title": "I Think I Love My Wife",
    "isbn_number": "453067057-0",
    "author": "Page Frizzell",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Sezary's disease, intrapelvic lymph nodes",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 360
  },
  {
    "title": "Laura",
    "isbn_number": "836339707-5",
    "author": "Marylou Venn",
    "genre": "Crime|Film-Noir|Mystery",
    "synopsis": "Shock during or following labor and delivery, antepartum condition or complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 226
  },
  {
    "title": "Blood of the Beasts (Sang des b??tes, Le)",
    "isbn_number": "695314020-8",
    "author": "Archy Gorling",
    "genre": "Documentary|Drama",
    "synopsis": "Toxic effect of tobacco",
    "cover_image": "https://picsum.photos/200/300",
    "price": 416
  },
  {
    "title": "Quartet",
    "isbn_number": "669455532-6",
    "author": "Benedikta Newcombe",
    "genre": "Comedy|Drama",
    "synopsis": "Open wound of external ear, unspecified site, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 459
  },
  {
    "title": "Hello, Friend",
    "isbn_number": "758268524-5",
    "author": "Paddie Davidof",
    "genre": "Comedy|Horror",
    "synopsis": "Mumps polyneuropathy",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 456
  },
  {
    "title": "Dear Wendy",
    "isbn_number": "242936604-5",
    "author": "Barclay Clinning",
    "genre": "Drama",
    "synopsis": "Unspecified monoarthritis, upper arm",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 306
  },
  {
    "title": "Tromeo and Juliet",
    "isbn_number": "925257303-8",
    "author": "Avie Ughetti",
    "genre": "Comedy|Drama",
    "synopsis": "Other specified tick-borne rickettsioses",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 405
  },
  {
    "title": "Stowaway",
    "isbn_number": "750115293-4",
    "author": "Tucker Smee",
    "genre": "Adventure|Musical",
    "synopsis": "Injury due to legal intervention by firearms",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 474
  },
  {
    "title": "Haunted Honeymoon",
    "isbn_number": "517181894-0",
    "author": "Toinette Asty",
    "genre": "Comedy",
    "synopsis": "Ostium primum defect",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 158
  },
  {
    "title": "Doctor Strange",
    "isbn_number": "640054515-8",
    "author": "Quincy Shavel",
    "genre": "Action|Animation|Children|Fantasy|Sci-Fi",
    "synopsis": "Retinal arterial branch occlusion",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 279
  },
  {
    "title": "Deadbolt",
    "isbn_number": "400316447-4",
    "author": "Chrystel Cayle",
    "genre": "Thriller",
    "synopsis": "Hypertensive chronic kidney disease, unspecified, with chronic kidney disease stage I through stage IV, or unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 254
  },
  {
    "title": "Little Children",
    "isbn_number": "460746660-3",
    "author": "Michel Tiffney",
    "genre": "Drama|Romance",
    "synopsis": "Tuberculosis of lung, nodular, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 349
  },
  {
    "title": "Waltzes from Vienna",
    "isbn_number": "460810758-5",
    "author": "Audrye Crimmins",
    "genre": "Comedy|Musical",
    "synopsis": "Other multiple birth (three or more), mates liveborn and stillborn, born in hospital, delivered without mention of cesarean section",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 186
  },
  {
    "title": "Clean",
    "isbn_number": "354609941-9",
    "author": "Korney Joseph",
    "genre": "Drama",
    "synopsis": "Collapse of dam or man-made structure",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 471
  },
  {
    "title": "Nights of Cabiria (Notti di Cabiria, Le)",
    "isbn_number": "973435539-2",
    "author": "Hanny Leitch",
    "genre": "Drama",
    "synopsis": "Injury due to war operations by other forms of conventional warfare",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 315
  },
  {
    "title": "Golden Child, The",
    "isbn_number": "926857318-0",
    "author": "Faber Libbe",
    "genre": "Action|Adventure|Comedy|Fantasy|Mystery",
    "synopsis": "Acute pharyngitis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 338
  },
  {
    "title": "Never Sleep Again: The Elm Street Legacy",
    "isbn_number": "052785211-2",
    "author": "Kimmi Belli",
    "genre": "Documentary",
    "synopsis": "Other specified symptoms associated with female genital organs",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 457
  },
  {
    "title": "Left-Hand Side of the Fridge, The (Moiti?? gauche du frigo, La)",
    "isbn_number": "987383549-0",
    "author": "Joscelin Wernham",
    "genre": "Comedy",
    "synopsis": "Nonspecific abnormal results of function study of kidney",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 167
  },
  {
    "title": "Color Purple, The",
    "isbn_number": "988016250-1",
    "author": "Tracey Scanterbury",
    "genre": "Drama",
    "synopsis": "Quadruplet pregnancy, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 393
  },
  {
    "title": "Fighting Elegy (Kenka erejii)",
    "isbn_number": "777132551-3",
    "author": "Jsandye Olman",
    "genre": "Action|Comedy",
    "synopsis": "Unspecified umbilical cord complication complicating labor and delivery, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 489
  },
  {
    "title": "Funny Games",
    "isbn_number": "640549602-3",
    "author": "Zarla Doget",
    "genre": "Drama|Horror|Thriller",
    "synopsis": "Other specified diseases of pancreas",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 451
  },
  {
    "title": "Turbo",
    "isbn_number": "641860579-9",
    "author": "Moyra Gauford",
    "genre": "Adventure|Animation|Children|Comedy|Fantasy",
    "synopsis": "Activities involving walking an animal",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 326
  },
  {
    "title": "Enemy at the Gates",
    "isbn_number": "417461241-2",
    "author": "Ame Exall",
    "genre": "Drama|War",
    "synopsis": "Acute or unspecified pelvic peritonitis, female",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 369
  },
  {
    "title": "Visiteurs du soir, Les (Devil's Envoys, The)",
    "isbn_number": "559044384-9",
    "author": "Janelle Orfeur",
    "genre": "Drama|Fantasy|Romance",
    "synopsis": "Other specified general medical examinations",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 122
  },
  {
    "title": "I Shot Andy Warhol",
    "isbn_number": "489050378-1",
    "author": "Yuri Lambourne",
    "genre": "Drama",
    "synopsis": "Injury to gastric artery",
    "cover_image": "https://picsum.photos/200/300",
    "price": 487
  },
  {
    "title": "Confessions of a Gangsta",
    "isbn_number": "064726597-4",
    "author": "Hermie Vallantine",
    "genre": "Action",
    "synopsis": "Acquired deformity of pelvis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 198
  },
  {
    "title": "Shawshank Redemption, The",
    "isbn_number": "584977383-5",
    "author": "Janek Groven",
    "genre": "Crime|Drama",
    "synopsis": "Legally induced abortion, complicated by delayed or excessive hemorrhage, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 348
  },
  {
    "title": "CJ7 (Cheung Gong 7 hou)",
    "isbn_number": "138590568-9",
    "author": "Jerrie Emlin",
    "genre": "Children|Comedy|Sci-Fi",
    "synopsis": "Open dislocation, thoracic vertebra",
    "cover_image": "https://picsum.photos/200/300",
    "price": 358
  },
  {
    "title": "The Gruffalo's Child",
    "isbn_number": "307110000-0",
    "author": "Ebenezer Edmed",
    "genre": "Adventure|Animation|Children|Fantasy",
    "synopsis": "Other and unspecified alcohol dependence, continuous",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 209
  },
  {
    "title": "Jacky in the Kingdom of Women",
    "isbn_number": "760762549-6",
    "author": "Orville Lohrensen",
    "genre": "Comedy",
    "synopsis": "Suicide and self-inflicted injury by unspecified means",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 179
  },
  {
    "title": "The Smiling Ghost",
    "isbn_number": "168911405-3",
    "author": "Kathi Monsey",
    "genre": "Comedy|Mystery",
    "synopsis": "Thalassemia minor",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 108
  },
  {
    "title": "Station, The (Blutgletscher)",
    "isbn_number": "001492592-3",
    "author": "Ethel Rein",
    "genre": "Horror",
    "synopsis": "Injury due to legal intervention by cutting and piercing instrument",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 432
  },
  {
    "title": "Death Race",
    "isbn_number": "289337016-0",
    "author": "Alix Tiptaft",
    "genre": "Action|Adventure|Sci-Fi|Thriller",
    "synopsis": "Allergy to milk products",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 389
  },
  {
    "title": "Men at Work",
    "isbn_number": "991329649-8",
    "author": "Langston Sutworth",
    "genre": "Action|Comedy",
    "synopsis": "Epilepsy complicating pregnancy, childbirth, or the puerperium, delivered, with mention of postpartum complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 453
  },
  {
    "title": "Loose Cannons (Mine vaganti)",
    "isbn_number": "291529887-4",
    "author": "Chet Wethers",
    "genre": "Comedy|Drama",
    "synopsis": "Acute lymphoid leukemia, in relapse",
    "cover_image": "https://picsum.photos/200/300",
    "price": 314
  },
  {
    "title": "History Is Made at Night",
    "isbn_number": "301418564-7",
    "author": "Carolyne Dorracott",
    "genre": "Drama|Romance",
    "synopsis": "Sprain of sacrotuberous (ligament)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 345
  },
  {
    "title": "Ballad of Narayama, The (Narayama Bushiko)",
    "isbn_number": "134610450-6",
    "author": "Pamela Carlile",
    "genre": "Drama",
    "synopsis": "Need for prophylactic vaccination and inoculation against streptococcus pneumoniae [pneumococcus] and influenza",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 363
  },
  {
    "title": "All the Invisible Children",
    "isbn_number": "499710767-0",
    "author": "Karilynn Mabbs",
    "genre": "Drama",
    "synopsis": "Ventral hernia, unspecified, with gangrene",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 183
  },
  {
    "title": "Chasing Christmas",
    "isbn_number": "154226486-3",
    "author": "Renault Bricknell",
    "genre": "Comedy|Fantasy",
    "synopsis": "Injury to other intra-abdominal organs with open wound into cavity, adrenal gland",
    "cover_image": "https://picsum.photos/200/300",
    "price": 188
  },
  {
    "title": "Riding Giants",
    "isbn_number": "087827705-6",
    "author": "Lian Cook",
    "genre": "Documentary",
    "synopsis": "Other and unspecified edema of newborn",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 497
  },
  {
    "title": "Shakes the Clown",
    "isbn_number": "734159826-3",
    "author": "Brok Kalb",
    "genre": "Comedy",
    "synopsis": "Special screening examination for unspecified viral disease",
    "cover_image": "https://picsum.photos/200/300",
    "price": 272
  },
  {
    "title": "Hearts and Minds",
    "isbn_number": "019962574-3",
    "author": "Christin Sansome",
    "genre": "Documentary|War",
    "synopsis": "Closed fracture of navicular [scaphoid] bone of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 481
  },
  {
    "title": "Shiner",
    "isbn_number": "438070854-3",
    "author": "Stafani Kneeland",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Unspecified analgesic and antipyretic causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 413
  },
  {
    "title": "Runaway Brain ",
    "isbn_number": "744435385-9",
    "author": "Theresita Saltmarsh",
    "genre": "Animation|Comedy|Sci-Fi",
    "synopsis": "Osteoarthrosis, unspecified whether generalized or localized, forearm",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 374
  },
  {
    "title": "I Love Your Work",
    "isbn_number": "727317091-7",
    "author": "Carmelia Peinton",
    "genre": "Drama|Mystery",
    "synopsis": "Malignant neoplasm of short bones of upper limb",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 370
  },
  {
    "title": "Captain Kidd",
    "isbn_number": "131085927-2",
    "author": "Binky Del Castello",
    "genre": "Action|Adventure|Drama",
    "synopsis": "Sarcoidosis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 325
  },
  {
    "title": "Breakfast on Pluto",
    "isbn_number": "368769568-9",
    "author": "Tasia Grimmolby",
    "genre": "Comedy|Drama",
    "synopsis": "Other postinfectious encephalitis and encephalomyelitis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 351
  },
  {
    "title": "Fan, The",
    "isbn_number": "346596134-X",
    "author": "Zuzana Chorley",
    "genre": "Drama|Thriller",
    "synopsis": "Deficiencies of saccadic eye movements",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 208
  },
  {
    "title": "Of Unknown Origin",
    "isbn_number": "889907226-4",
    "author": "Yovonnda Nottingam",
    "genre": "Horror",
    "synopsis": "Other specified miliary tuberculosis, bacteriological or histological examination unknown (at present)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 139
  },
  {
    "title": "Retrogade",
    "isbn_number": "358241709-3",
    "author": "Lenee Kondratovich",
    "genre": "Action|Adventure|Sci-Fi",
    "synopsis": "Other multiple pregnancy with fetal loss and retention of one or more fetus(es), antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 298
  },
  {
    "title": "Apartment Zero",
    "isbn_number": "746322900-9",
    "author": "Blithe Sandison",
    "genre": "Drama|Thriller",
    "synopsis": "Sector or arcuate visual field defects",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 377
  },
  {
    "title": "Dead Man Down",
    "isbn_number": "469774176-5",
    "author": "Birdie Jimpson",
    "genre": "Action|Crime|Drama|Romance|Thriller",
    "synopsis": "Anomalies of other specified sites of peripheral vascular system",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 188
  },
  {
    "title": "A.C.O.D.",
    "isbn_number": "039124211-3",
    "author": "Abba O'Murtagh",
    "genre": "Comedy",
    "synopsis": "Chronic periodontitis, generalized",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 398
  },
  {
    "title": "Jupiter Ascending",
    "isbn_number": "813431561-5",
    "author": "Wilma Sager",
    "genre": "Action|Adventure|Sci-Fi",
    "synopsis": "Closed dislocation of metacarpophalangeal (joint)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 399
  },
  {
    "title": "All Together, The",
    "isbn_number": "290449961-X",
    "author": "Joelynn Otteridge",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Congenital aphakia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 357
  },
  {
    "title": "Crank",
    "isbn_number": "271058005-5",
    "author": "Caril McAulay",
    "genre": "Action|Thriller",
    "synopsis": "Nontraffic accident involving motor-driven snow vehicle injuring motorcyclist",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 105
  },
  {
    "title": "North by Northwest",
    "isbn_number": "516251305-9",
    "author": "Verile Eighteen",
    "genre": "Action|Adventure|Mystery|Romance|Thriller",
    "synopsis": "Other disorders of plasma protein metabolism",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 466
  },
  {
    "title": "Alone (Issiz adam)",
    "isbn_number": "114536532-9",
    "author": "Casie Herety",
    "genre": "Drama|Romance",
    "synopsis": "Unspecified prolonged labor, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 384
  },
  {
    "title": "Expelled: No Intelligence Allowed",
    "isbn_number": "594422017-1",
    "author": "Freida Blanpein",
    "genre": "Documentary",
    "synopsis": "Zygomycosis [Phycomycosis or Mucormycosis]",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 165
  },
  {
    "title": "Six Ways to Sunday",
    "isbn_number": "954508255-0",
    "author": "Sibylle Marchand",
    "genre": "Comedy",
    "synopsis": "Latent schizophrenia, chronic",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 472
  },
  {
    "title": "The Connection",
    "isbn_number": "442879573-4",
    "author": "Emalee Shinfield",
    "genre": "Crime|Drama",
    "synopsis": "Unspecified abortion, complicated by delayed or excessive hemorrhage, complete",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 318
  },
  {
    "title": "His Girl Friday",
    "isbn_number": "528417065-2",
    "author": "Dawna Watman",
    "genre": "Comedy|Romance",
    "synopsis": "Other specified aftercare following surgery",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 404
  },
  {
    "title": "Saddest Music in the World, The",
    "isbn_number": "066801617-5",
    "author": "Carmelina Izkoveski",
    "genre": "Comedy|Drama|Fantasy|Musical|Romance",
    "synopsis": "Achalasia and cardiospasm",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 360
  },
  {
    "title": "Killjoy",
    "isbn_number": "442775972-6",
    "author": "Noelani Chapelhow",
    "genre": "Horror",
    "synopsis": "Spondylosis of unspecified site, with myelopathy",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 388
  },
  {
    "title": "Day After, The",
    "isbn_number": "193987606-0",
    "author": "Emma Perrington",
    "genre": "Drama|Sci-Fi",
    "synopsis": "Effusion of joint, site unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 272
  },
  {
    "title": "Pete Kelly's Blues",
    "isbn_number": "529515221-9",
    "author": "Marjie Exton",
    "genre": "Crime|Drama",
    "synopsis": "Other pulmonary insufficiency, not elsewhere classified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 220
  },
  {
    "title": "Raven, The",
    "isbn_number": "010748982-1",
    "author": "Melvyn Adanet",
    "genre": "Crime|Horror|Thriller",
    "synopsis": "Ghost vessels (corneal)",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 176
  },
  {
    "title": "Exterminator, The",
    "isbn_number": "736660598-0",
    "author": "Sibyl Fairbard",
    "genre": "Action|Crime|Thriller|War",
    "synopsis": "Mixed development disorder",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 410
  },
  {
    "title": "Right Now (?? tout de suite)",
    "isbn_number": "997115508-7",
    "author": "Donelle Eate",
    "genre": "Crime|Drama|Romance|Thriller",
    "synopsis": "Malignant neoplasm of conjunctiva",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 370
  },
  {
    "title": "In the Shadow of Doubt (Ep??ilyksen varjossa)",
    "isbn_number": "815723845-5",
    "author": "Bruno Fricker",
    "genre": "Documentary",
    "synopsis": "Thyroid and thyroid derivatives causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 499
  },
  {
    "title": "Alice",
    "isbn_number": "942769843-8",
    "author": "Randell Kempston",
    "genre": "Drama",
    "synopsis": "Neoplasm of uncertain behavior of brain and spinal cord",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 259
  },
  {
    "title": "Heartbreak Kid, The",
    "isbn_number": "191830186-7",
    "author": "Haily McKissack",
    "genre": "Comedy|Romance",
    "synopsis": "Burn [any degree] involving 70-79 percent of body surface with third degree burn, 40-49%",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 375
  },
  {
    "title": "Too Big to Fail",
    "isbn_number": "970895076-9",
    "author": "Kat Metherell",
    "genre": "Drama",
    "synopsis": "Papyraceous fetus, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 329
  },
  {
    "title": "Father Sergius (Otets Sergiy)",
    "isbn_number": "761293022-6",
    "author": "Rennie Fowden",
    "genre": "Drama|Romance",
    "synopsis": "Allergy to peanuts",
    "cover_image": "https://picsum.photos/200/300",
    "price": 414
  },
  {
    "title": "Forsaking All Others",
    "isbn_number": "002446070-2",
    "author": "Angelika Wattins",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Extradural hemorrhage following injury with open intracranial wound, with loss of consciousness of unspecified duration",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 376
  },
  {
    "title": "Yakuza, The",
    "isbn_number": "909654363-7",
    "author": "Kristin Meininger",
    "genre": "Drama",
    "synopsis": "Diabetes mellitus of mother, complicating pregnancy, childbirth, or the puerperium, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 290
  },
  {
    "title": "Kickboxer 3: The Art of War (Kickboxer III: The Art of War)",
    "isbn_number": "309509778-6",
    "author": "Bailie Constanza",
    "genre": "Action|Thriller",
    "synopsis": "Maternal hypotension syndrome, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 431
  },
  {
    "title": "3:10 to Yuma",
    "isbn_number": "364866305-4",
    "author": "Clara Jaggli",
    "genre": "Action|Adventure|Drama|Thriller|Western",
    "synopsis": "Transverse deficiency of lower limb",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 333
  },
  {
    "title": "Ambulance, The",
    "isbn_number": "598348465-6",
    "author": "Ethel Gavin",
    "genre": "Thriller",
    "synopsis": "Other fall from one level to another in water transport injuring dockers, stevedores",
    "cover_image": "https://picsum.photos/200/300",
    "price": 267
  },
  {
    "title": "Svidd Neger",
    "isbn_number": "750017442-X",
    "author": "Guillermo Hart",
    "genre": "Comedy|Crime|Drama|Horror|Mystery|Romance|Thriller",
    "synopsis": "Ignition of highly inflammable material",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 240
  },
  {
    "title": "Inheritance, The (Karami-ai)",
    "isbn_number": "190918333-4",
    "author": "Darya Emilien",
    "genre": "Drama",
    "synopsis": "Scleritis with corneal involvement",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 229
  },
  {
    "title": "Lost Son, The",
    "isbn_number": "570377119-6",
    "author": "Torry Snawdon",
    "genre": "Drama",
    "synopsis": "Pelvic muscle wasting",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 371
  },
  {
    "title": "The Righteous Thief",
    "isbn_number": "045536620-9",
    "author": "Perice Brownlie",
    "genre": "Adventure",
    "synopsis": "Oligohydramnios, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 171
  },
  {
    "title": "Tournament, The",
    "isbn_number": "837516240-X",
    "author": "Timofei Doget",
    "genre": "Action",
    "synopsis": "Hungry bone syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 500
  },
  {
    "title": "Serpent's Egg, The (Schlangenei, Das)",
    "isbn_number": "090466144-X",
    "author": "Rick Esmond",
    "genre": "Drama|Thriller",
    "synopsis": "Abdominal pain, left upper quadrant",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 112
  },
  {
    "title": "Mr. Moto Takes a Chance",
    "isbn_number": "016786721-0",
    "author": "Calvin Muzzullo",
    "genre": "Crime|Drama|Mystery",
    "synopsis": "Cystic fibrosis gene carrier",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 173
  },
  {
    "title": "One Life",
    "isbn_number": "769201247-4",
    "author": "Perla Mayberry",
    "genre": "Documentary",
    "synopsis": "\"Light-for-dates\" with signs of fetal malnutrition, less than 500 grams",
    "cover_image": "https://picsum.photos/200/300",
    "price": 276
  },
  {
    "title": "Fear",
    "isbn_number": "828100549-1",
    "author": "Maren Gummoe",
    "genre": "Horror|Thriller",
    "synopsis": "Wheezing",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 345
  },
  {
    "title": "Play Misty for Me",
    "isbn_number": "269335512-5",
    "author": "Anders Riddoch",
    "genre": "Drama|Thriller",
    "synopsis": "Assault by other solid and liquid substances",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 209
  },
  {
    "title": "Caroline?",
    "isbn_number": "669421001-9",
    "author": "Jorge Ransbury",
    "genre": "(no genres listed)",
    "synopsis": "Other closed skull fracture with other and unspecified intracranial hemorrhage, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 130
  },
  {
    "title": "Rosario Tijeras",
    "isbn_number": "282975265-1",
    "author": "Stern Gosdin",
    "genre": "Crime|Drama|Romance",
    "synopsis": "Poisoning by expectorants",
    "cover_image": "https://picsum.photos/200/300",
    "price": 399
  },
  {
    "title": "The Russian Novel",
    "isbn_number": "150846243-7",
    "author": "Win Glynne",
    "genre": "Drama",
    "synopsis": "Other protein-calorie malnutrition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 105
  },
  {
    "title": "Crush",
    "isbn_number": "229884080-6",
    "author": "Kary Cesco",
    "genre": "Comedy|Romance",
    "synopsis": "Other specified infectious and parasitic diseases",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 171
  },
  {
    "title": "Leaving Las Vegas",
    "isbn_number": "036221225-2",
    "author": "Nevil Arunowicz",
    "genre": "Drama|Romance",
    "synopsis": "Angiodysplasia of stomach and duodenum without mention of hemorrhage",
    "cover_image": "https://picsum.photos/200/300",
    "price": 145
  },
  {
    "title": "Strangers with Candy",
    "isbn_number": "119653069-6",
    "author": "Gustavo McBain",
    "genre": "Comedy",
    "synopsis": "Accidents caused by mining and earth-drilling machinery",
    "cover_image": "https://picsum.photos/200/300",
    "price": 309
  },
  {
    "title": "Black Rain (Kuroi ame)",
    "isbn_number": "508629602-1",
    "author": "Ethel Risby",
    "genre": "Drama|War",
    "synopsis": "Esophageal leukoplakia",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 159
  },
  {
    "title": "Loosies",
    "isbn_number": "988440969-2",
    "author": "Yovonnda Norris",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Other ABO incompatibility reaction",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 156
  },
  {
    "title": "Things We Do For Love (Kaikella rakkaudella)",
    "isbn_number": "545971215-7",
    "author": "Charla Bodell",
    "genre": "Drama",
    "synopsis": "Persistent migraine aura with cerebral infarction, with intractable migraine, so stated, without mention of status migrainosus",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 247
  },
  {
    "title": "Prison (F??ngelse) ",
    "isbn_number": "999529726-4",
    "author": "Elijah Helliwell",
    "genre": "Drama",
    "synopsis": "Screening examination for trachoma",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 228
  },
  {
    "title": "Day the Earth Stood Still, The",
    "isbn_number": "687188016-X",
    "author": "Brock Matushenko",
    "genre": "Drama|Sci-Fi|Thriller",
    "synopsis": "Injury to sciatic nerve",
    "cover_image": "https://picsum.photos/200/300",
    "price": 173
  },
  {
    "title": "Krays, The",
    "isbn_number": "950371032-4",
    "author": "Koo Dearlove",
    "genre": "Drama",
    "synopsis": "Poisoning by unspecified gases and vapors, undetermined whether accidentally or purposely inflicted",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 304
  },
  {
    "title": "Young Doctors in Love",
    "isbn_number": "838712981-X",
    "author": "Saba Mathwin",
    "genre": "Comedy",
    "synopsis": "Adjustment reaction with physical symptoms",
    "cover_image": "https://picsum.photos/200/300",
    "price": 204
  },
  {
    "title": "Trade",
    "isbn_number": "309323562-6",
    "author": "Morly Naire",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Closed fractures involving skull or face with other bones, with cerebral laceration and contusion, with moderate [1-24 hours] loss of consciousness",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 183
  },
  {
    "title": "Journey 2: The Mysterious Island",
    "isbn_number": "354696022-X",
    "author": "Frederique O'Dempsey",
    "genre": "Action|Adventure|Comedy|Sci-Fi|IMAX",
    "synopsis": "Monocular esotropia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 139
  },
  {
    "title": "Freaky Deaky",
    "isbn_number": "360573620-3",
    "author": "Stevie Dungate",
    "genre": "Comedy|Crime",
    "synopsis": "Personal history, nephrotic syndrome",
    "cover_image": "https://picsum.photos/200/300",
    "price": 288
  },
  {
    "title": "Izo",
    "isbn_number": "319072226-9",
    "author": "Heddie Lomond",
    "genre": "Action|Drama|Fantasy|Horror|Thriller|War",
    "synopsis": "Other changes of lacrimal passages",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 158
  },
  {
    "title": "Deep in the Valley (American Hot Babes)",
    "isbn_number": "856552568-6",
    "author": "Tory McGinny",
    "genre": "Comedy",
    "synopsis": "Intrauterine synechiae",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 370
  },
  {
    "title": "Kill Switch",
    "isbn_number": "312053407-2",
    "author": "Violet Tranmer",
    "genre": "Action|Crime|Drama|Thriller",
    "synopsis": "Malignant neoplasm of gum, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 207
  },
  {
    "title": "Waco: The Rules of Engagement",
    "isbn_number": "142964824-4",
    "author": "Betty Athowe",
    "genre": "Documentary",
    "synopsis": "Encounter for Papanicolaou cervical smear to confirm findings of recent normal smear following initial abnormal smear",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 231
  },
  {
    "title": "Deceived",
    "isbn_number": "808503033-0",
    "author": "Borg Bartel",
    "genre": "Thriller",
    "synopsis": "Need for prophylactic fluoride administration",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 226
  },
  {
    "title": "Benny Goodman Story, The",
    "isbn_number": "847264365-4",
    "author": "Nataniel Cheers",
    "genre": "Drama|Musical",
    "synopsis": "Senile dementia with delusional features",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 460
  },
  {
    "title": "Somm",
    "isbn_number": "541630622-X",
    "author": "Tirrell Prene",
    "genre": "Documentary",
    "synopsis": "Melioidosis",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 268
  },
  {
    "title": "General Died at Dawn, The",
    "isbn_number": "914405458-0",
    "author": "Stefanie Pentycost",
    "genre": "Adventure|Crime|Thriller",
    "synopsis": "Temporal sclerosis",
    "cover_image": "https://picsum.photos/200/300",
    "price": 156
  },
  {
    "title": "Pumpkinhead",
    "isbn_number": "853270054-3",
    "author": "Davida Bazylets",
    "genre": "Horror",
    "synopsis": "Encounter for assisted reproductive fertility procedure cycle",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 360
  },
  {
    "title": "Chinese Odyssey 2002 (Tian xia wu shuang)",
    "isbn_number": "783882872-4",
    "author": "Antonius Leban",
    "genre": "Action|Comedy|Romance",
    "synopsis": "Parasitic infestation of eyelid",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 353
  },
  {
    "title": "Glasses (Megane)",
    "isbn_number": "830932828-1",
    "author": "Dudley Lockett",
    "genre": "Comedy|Drama",
    "synopsis": "Nonspecific (abnormal) findings on radiological and other examination of musculoskeletal system",
    "cover_image": "https://picsum.photos/200/300",
    "price": 199
  },
  {
    "title": "13 Sins",
    "isbn_number": "758301186-8",
    "author": "Shannon Wragg",
    "genre": "Horror|Thriller",
    "synopsis": "Acute epiglottitis with obstruction",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 303
  },
  {
    "title": "10 Questions for the Dalai Lama",
    "isbn_number": "084506324-3",
    "author": "Constantine Hariot",
    "genre": "Documentary",
    "synopsis": "Tuberculous oophoritis and salpingitis, bacteriological or histological examination not done",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 102
  },
  {
    "title": "Housemaid, The (Hanyo)",
    "isbn_number": "666844416-4",
    "author": "Cleavland Rosekilly",
    "genre": "Thriller",
    "synopsis": "Cerebral cysts",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 317
  },
  {
    "title": "Taste of Honey, A",
    "isbn_number": "575138489-X",
    "author": "Kelcy Croce",
    "genre": "Drama",
    "synopsis": "Crushing injury of multiple sites of upper limb",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 151
  },
  {
    "title": "Anne Frank Remembered",
    "isbn_number": "476076942-0",
    "author": "Tersina Rojas",
    "genre": "Documentary",
    "synopsis": "Other disorders of mastoid",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 234
  },
  {
    "title": "Benji the Hunted",
    "isbn_number": "817645935-6",
    "author": "Jocko Chettoe",
    "genre": "Adventure|Children",
    "synopsis": "Screening for depression",
    "cover_image": "https://picsum.photos/200/300",
    "price": 152
  },
  {
    "title": "Flodder 3",
    "isbn_number": "143298106-4",
    "author": "Anton Speerman",
    "genre": "Comedy",
    "synopsis": "Malignant carcinoid tumor of the stomach",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 362
  },
  {
    "title": "Girls, Les",
    "isbn_number": "440603478-1",
    "author": "Renate Tharme",
    "genre": "Musical",
    "synopsis": "Arterial embolism and thrombosis of lower extremity",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 228
  },
  {
    "title": "Life of a King",
    "isbn_number": "301146535-5",
    "author": "Mike Lurriman",
    "genre": "Drama",
    "synopsis": "Deep necrosis of underlying tissues [deep third degree] with loss of a body part, of foot",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 207
  },
  {
    "title": "Caravaggio",
    "isbn_number": "776777694-8",
    "author": "Morten Culmer",
    "genre": "Drama",
    "synopsis": "Transient disorder of initiating or maintaining wakefulness",
    "cover_image": "https://picsum.photos/200/300",
    "price": 121
  },
  {
    "title": "O Panishyros Megistanas Ton Ninja",
    "isbn_number": "478973927-9",
    "author": "Ariadne Baumler",
    "genre": "Action|Comedy|Sci-Fi",
    "synopsis": "Cardiac complications of anesthesia or other sedation in labor and delivery, unspecified as to episode of care or not applicable",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 238
  },
  {
    "title": "27 Dresses",
    "isbn_number": "182902028-5",
    "author": "Frayda Maffei",
    "genre": "Comedy|Romance",
    "synopsis": "Other and unspecified cerebral laceration and contusion, without mention of open intracranial wound, with loss of consciousness of unspecified duration",
    "cover_image": "https://picsum.photos/200/300",
    "price": 200
  },
  {
    "title": "Silver Bears",
    "isbn_number": "059375011-X",
    "author": "Sydney Karlolczak",
    "genre": "Comedy|Crime",
    "synopsis": "Fetopelvic disproportion, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 128
  },
  {
    "title": "I Give It a Year",
    "isbn_number": "445622437-1",
    "author": "Jeff Baradel",
    "genre": "Comedy|Romance",
    "synopsis": "Chronic interstitial cystitis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 224
  },
  {
    "title": "96 Minutes ",
    "isbn_number": "412316593-1",
    "author": "Jamison Sarfati",
    "genre": "Drama|Thriller",
    "synopsis": "Tuberculoma of spinal cord, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 462
  },
  {
    "title": "Last Days of Disco, The",
    "isbn_number": "503896824-4",
    "author": "Lorain Jozef",
    "genre": "Comedy|Drama",
    "synopsis": "Unspecified diseases of blood and blood-forming organs",
    "cover_image": "https://picsum.photos/200/300",
    "price": 212
  },
  {
    "title": "Family, The (Famiglia, La)",
    "isbn_number": "175888120-8",
    "author": "Thorndike Laste",
    "genre": "Drama|Musical|Romance",
    "synopsis": "Other mechanical complication of prosthetic joint implant",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 244
  },
  {
    "title": "Misfortunates, The (De helaasheid der dingen)",
    "isbn_number": "826811165-8",
    "author": "Glori Osboldstone",
    "genre": "Drama",
    "synopsis": "Other and unspecified mycoses",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 301
  },
  {
    "title": "Yellowbeard",
    "isbn_number": "928233704-9",
    "author": "Claudetta Dake",
    "genre": "Action|Adventure|Comedy",
    "synopsis": "Hemorrhage of rectum and anus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 442
  },
  {
    "title": "Draughtsman's Contract, The",
    "isbn_number": "914843665-8",
    "author": "Blancha Emma",
    "genre": "Drama",
    "synopsis": "Aortic aneurysm of unspecified site, ruptured",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 243
  },
  {
    "title": "Prison",
    "isbn_number": "492823201-1",
    "author": "Corine Gillibrand",
    "genre": "Crime|Drama|Horror|Thriller",
    "synopsis": "Other specified disorders of peritoneum",
    "cover_image": "https://picsum.photos/200/300",
    "price": 494
  },
  {
    "title": "Defenseless",
    "isbn_number": "727455887-0",
    "author": "Jobye Kobpa",
    "genre": "Thriller",
    "synopsis": "Unspecified anomaly of unspecified limb",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 472
  },
  {
    "title": "Pok??mon Heroes",
    "isbn_number": "274585281-7",
    "author": "Leif Halsall",
    "genre": "Animation|Children",
    "synopsis": "Aggressive periodontitis, localized",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 228
  },
  {
    "title": "Everything Will Be Fine",
    "isbn_number": "197066557-2",
    "author": "Roxane Sexcey",
    "genre": "Drama|Thriller",
    "synopsis": "Poisoning by anterior pituitary hormones",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 459
  },
  {
    "title": "Such Hawks Such Hounds",
    "isbn_number": "592787767-2",
    "author": "Faulkner Guillon",
    "genre": "Documentary",
    "synopsis": "Inflammatory spondylopathies in diseases classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 138
  },
  {
    "title": "Pursuit of Happiness, The",
    "isbn_number": "084920823-8",
    "author": "Joellen Thomann",
    "genre": "Drama",
    "synopsis": "Vaccination not carried out because of chronic illness or condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 242
  },
  {
    "title": "Freddy's Dead: The Final Nightmare (Nightmare on Elm Street Part 6: Freddy's Dead, A)",
    "isbn_number": "742268306-6",
    "author": "Jen Bickerton",
    "genre": "Horror",
    "synopsis": "Erythema [first degree] of forehead and cheek",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 394
  },
  {
    "title": "Death Wish 4: The Crackdown",
    "isbn_number": "264577533-0",
    "author": "Sinclare Toal",
    "genre": "Action|Drama",
    "synopsis": "Meconium aspiration with respiratory symptoms",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 278
  },
  {
    "title": "American Swing",
    "isbn_number": "306988076-2",
    "author": "Deanne Slide",
    "genre": "Documentary",
    "synopsis": "Occlusion and stenosis of basilar artery with cerebral infarction",
    "cover_image": "https://picsum.photos/200/300",
    "price": 453
  },
  {
    "title": "Wish Upon a Star",
    "isbn_number": "329782303-8",
    "author": "Clementine Blodget",
    "genre": "Comedy",
    "synopsis": "Ankylosis of joint, ankle and foot",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 308
  },
  {
    "title": "Pluto's Christmas Tree",
    "isbn_number": "897898914-4",
    "author": "Claudine Loughhead",
    "genre": "Animation|Comedy",
    "synopsis": "Accident due to residence or prolonged visit at high altitude",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 408
  },
  {
    "title": "Sounder",
    "isbn_number": "518992279-0",
    "author": "Zared Rehm",
    "genre": "Drama",
    "synopsis": "Accidents caused by agricultural machines",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 249
  },
  {
    "title": "Wrong Is Right (a.k.a. The Man With the Deadly Lens)",
    "isbn_number": "978820658-1",
    "author": "Deloris Gianuzzi",
    "genre": "Drama|Thriller",
    "synopsis": "Fetal complications from in utero procedure, delivered, with mention of postpartum complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 126
  },
  {
    "title": "Macario",
    "isbn_number": "438894964-7",
    "author": "Gussy Pernell",
    "genre": "Drama|Fantasy|Mystery",
    "synopsis": "Septicemia due to pseudomonas",
    "cover_image": "https://picsum.photos/200/300",
    "price": 244
  },
  {
    "title": "Moonstruck",
    "isbn_number": "632687765-2",
    "author": "Alana Firidolfi",
    "genre": "Comedy|Romance",
    "synopsis": "Abnormal dark adaptation curve",
    "cover_image": "https://picsum.photos/200/300",
    "price": 178
  },
  {
    "title": "Love Is Strange",
    "isbn_number": "561454904-8",
    "author": "Lovell McGregor",
    "genre": "Drama",
    "synopsis": "Carrier or suspected carrier of Methicillin susceptible Staphylococcus aureus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 468
  },
  {
    "title": "Relationship Status: It's Complicated",
    "isbn_number": "830298445-0",
    "author": "Shalom Bidwell",
    "genre": "Comedy|Romance",
    "synopsis": "Accident caused by electric current in electric power generating plants, distribution stations, transmission lines",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 347
  },
  {
    "title": "Raise Your Voice",
    "isbn_number": "095595438-X",
    "author": "Tommie McGrey",
    "genre": "Romance",
    "synopsis": "Oval window fistula",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 374
  },
  {
    "title": "Unholy Three, The",
    "isbn_number": "947855915-X",
    "author": "Galen Bolzen",
    "genre": "Crime|Drama",
    "synopsis": "Other dissociated deviation of eye movements",
    "cover_image": "https://picsum.photos/200/300",
    "price": 315
  },
  {
    "title": "Stoplight Society, The (La Sociedad del Sem??foro)",
    "isbn_number": "731584335-3",
    "author": "Boot David",
    "genre": "Drama",
    "synopsis": "Suicide and self-inflicted injury by crashing of aircraft",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 134
  },
  {
    "title": "Happy Accidents",
    "isbn_number": "763421247-4",
    "author": "Cornela Zanicchelli",
    "genre": "Romance|Sci-Fi",
    "synopsis": "Neutropenia due to infection",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 389
  },
  {
    "title": "Concorde: Airport '79, The",
    "isbn_number": "407924626-9",
    "author": "Fayina Itzchaky",
    "genre": "Drama",
    "synopsis": "Closed fractures involving skull or face with other bones with subarachnoid, subdural, and extradural hemorrhage, with moderate [1-24 hours] loss of consciousness",
    "cover_image": "https://picsum.photos/200/300",
    "price": 353
  },
  {
    "title": "Fairy, The (La f??e) ",
    "isbn_number": "102808821-3",
    "author": "Nicky Dugall",
    "genre": "Comedy|Drama",
    "synopsis": "Hydrocephalic fetus causing disproportion, antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 211
  },
  {
    "title": "Susana (Devil and the Flesh, The)",
    "isbn_number": "795155588-6",
    "author": "Carree Dizlie",
    "genre": "Drama|Romance",
    "synopsis": "Recurrent dislocation of joint, hand",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 244
  },
  {
    "title": "Eccentricities of a Blonde-haired Girl (Singularidades de uma Rapariga Loura)",
    "isbn_number": "465471535-5",
    "author": "Edyth Danniel",
    "genre": "Drama|Romance",
    "synopsis": "Hypertrophy of labia",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 316
  },
  {
    "title": "Sex in Chains (Geschlecht in Fesseln)",
    "isbn_number": "331018646-6",
    "author": "Shirline Hince",
    "genre": "Drama",
    "synopsis": "Other specified disorders of joint, ankle and foot",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 302
  },
  {
    "title": "One Piece Film: Strong World",
    "isbn_number": "668747760-9",
    "author": "Jammal Warlton",
    "genre": "Action|Adventure|Animation|Comedy|Fantasy",
    "synopsis": "Closed fracture of multiple sites of metacarpus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 199
  },
  {
    "title": "Sleep Dealer",
    "isbn_number": "858126004-7",
    "author": "Paulita MacCaughen",
    "genre": "Sci-Fi",
    "synopsis": "Ventricular fibrillation",
    "cover_image": "https://picsum.photos/200/300",
    "price": 332
  },
  {
    "title": "Brass Target",
    "isbn_number": "230199193-8",
    "author": "Emerson Stallwood",
    "genre": "Action|Drama|Mystery|Thriller",
    "synopsis": "Acute miliary tuberculosis, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 234
  },
  {
    "title": "Terror in a Texas Town",
    "isbn_number": "890253029-9",
    "author": "Shannah McGahey",
    "genre": "Western",
    "synopsis": "Calculus of bile duct with other cholecystitis, with obstruction",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 444
  },
  {
    "title": "The Learning Tree",
    "isbn_number": "534804405-9",
    "author": "Silvan Wyant",
    "genre": "Drama",
    "synopsis": "Other specified anemias",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 336
  },
  {
    "title": "How the Grinch Stole Christmas (a.k.a. The Grinch)",
    "isbn_number": "472645388-2",
    "author": "Martyn Fibbings",
    "genre": "Children|Comedy|Fantasy",
    "synopsis": "Closed fracture of trochanteric section of neck of femur",
    "cover_image": "https://picsum.photos/200/300",
    "price": 107
  },
  {
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "isbn_number": "011745289-0",
    "author": "Jeri Knocker",
    "genre": "Action|Adventure|Fantasy|IMAX",
    "synopsis": "Tuberculous pneumonia [any form], tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 458
  },
  {
    "title": "Zincirbozan",
    "isbn_number": "016143904-7",
    "author": "Joyous Evanson",
    "genre": "Crime|Drama",
    "synopsis": "Deep necrosis of underlying tissues [deep third degree] without mention of loss of a body part, of axilla",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 369
  },
  {
    "title": "Interstella 5555: The 5tory of the 5ecret 5tar 5ystem",
    "isbn_number": "748665024-X",
    "author": "Towney Redington",
    "genre": "Adventure|Animation|Fantasy|Musical|Sci-Fi",
    "synopsis": "Monoplegia of upper limb affecting unspecified side",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 215
  },
  {
    "title": "Stomp the Yard",
    "isbn_number": "122420298-8",
    "author": "Henrie Coan",
    "genre": "Drama|Musical",
    "synopsis": "Body Mass Index 25.0-25.9, adult",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 287
  },
  {
    "title": "Jodhaa Akbar",
    "isbn_number": "317257983-2",
    "author": "Beth Inkpen",
    "genre": "Drama|Musical|Romance|War",
    "synopsis": "Tuberculous fibrosis of lung, tubercle bacilli found (in sputum) by microscopy",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 105
  },
  {
    "title": "What A Man",
    "isbn_number": "253908633-0",
    "author": "Corrinne Haldane",
    "genre": "Comedy|Romance",
    "synopsis": "Sudden visual loss",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 284
  },
  {
    "title": "Titanic",
    "isbn_number": "284006780-3",
    "author": "Rodolphe Darter",
    "genre": "Action|Drama|Romance",
    "synopsis": "Personal history of anaphylaxis",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 457
  },
  {
    "title": "Story of Mankind, The",
    "isbn_number": "748287608-1",
    "author": "Bevin Tomaskov",
    "genre": "Drama|Fantasy",
    "synopsis": "Overweight",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 383
  },
  {
    "title": "King Kong",
    "isbn_number": "632917680-9",
    "author": "Dulcea Easterby",
    "genre": "Action|Adventure|Drama|Fantasy|Thriller",
    "synopsis": "Subdural hemorrhage following injury without mention of open intracranial wound, with prolonged [more than 24 hours] loss of consciousness and return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 406
  },
  {
    "title": "Agnosia",
    "isbn_number": "121573609-6",
    "author": "Maighdiln Curado",
    "genre": "Drama|Thriller",
    "synopsis": "Intracranial injury of other and unspecified nature with open intracranial wound, with concussion, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 409
  },
  {
    "title": "City Zero",
    "isbn_number": "242209352-3",
    "author": "Paolina Mussalli",
    "genre": "Comedy|Drama|Sci-Fi",
    "synopsis": "Celiac artery compression syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 310
  },
  {
    "title": "Mad Love",
    "isbn_number": "601960768-2",
    "author": "Urban Cardello",
    "genre": "Horror|Romance",
    "synopsis": "Other and unspecified hormones and synthetic substitutes causing adverse effects in therapeutic use",
    "cover_image": "https://picsum.photos/200/300",
    "price": 407
  },
  {
    "title": "Fiorile",
    "isbn_number": "758878711-2",
    "author": "Corri Shawell",
    "genre": "Drama",
    "synopsis": "Other anomalies of nose",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 324
  },
  {
    "title": "Happiness (Schastye)",
    "isbn_number": "969218754-3",
    "author": "Sheff Brunn",
    "genre": "Comedy|Drama",
    "synopsis": "Benign neoplasm of scrotum",
    "cover_image": "https://picsum.photos/200/300",
    "price": 236
  },
  {
    "title": "Wizard of Oz, The",
    "isbn_number": "416193617-6",
    "author": "Arlyne Summons",
    "genre": "Adventure|Children|Fantasy|Musical",
    "synopsis": "Cleft palate, bilateral, complete",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 348
  },
  {
    "title": "Hellzapoppin'",
    "isbn_number": "398793711-4",
    "author": "Pincus Fibbens",
    "genre": "Comedy|Musical",
    "synopsis": "Unspecified central nervous system stimulant causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 246
  },
  {
    "title": "L.627",
    "isbn_number": "809597026-3",
    "author": "Ivor Yashanov",
    "genre": "Crime|Drama|Thriller",
    "synopsis": "Dental caries extending into dentine",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 360
  },
  {
    "title": "Where the Red Fern Grows",
    "isbn_number": "659000298-3",
    "author": "Peirce Rotlauf",
    "genre": "Drama",
    "synopsis": "External thrombosed hemorrhoids",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 420
  },
  {
    "title": "Futureworld",
    "isbn_number": "585665162-6",
    "author": "Allan Pesic",
    "genre": "Sci-Fi|Thriller",
    "synopsis": "Other accidental submersion or drowning in water transport accident injuring occupant of small boat, powered",
    "cover_image": "https://picsum.photos/200/300",
    "price": 302
  },
  {
    "title": "Clash by Night",
    "isbn_number": "678094321-5",
    "author": "Charisse Howbrook",
    "genre": "Drama|Film-Noir",
    "synopsis": "Open wound of buttock, without mention of complication",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 122
  },
  {
    "title": "Twister",
    "isbn_number": "869161805-1",
    "author": "Putnam Nye",
    "genre": "Comedy",
    "synopsis": "Striking against or struck accidentally by other stationary object with subsequent fall",
    "cover_image": "https://picsum.photos/200/300",
    "price": 398
  },
  {
    "title": "For the Boys",
    "isbn_number": "708905628-7",
    "author": "Silvia Emor",
    "genre": "Comedy|Drama|Musical",
    "synopsis": "Anaphylactic reaction due to food additives",
    "cover_image": "https://picsum.photos/200/300",
    "price": 203
  },
  {
    "title": "Parenthood",
    "isbn_number": "036076942-X",
    "author": "Happy Hinzer",
    "genre": "Comedy|Drama",
    "synopsis": "Contracture of joint, multiple sites",
    "cover_image": "https://picsum.photos/200/300",
    "price": 294
  },
  {
    "title": "Born to Fight",
    "isbn_number": "757253600-X",
    "author": "Lawrence Veljes",
    "genre": "Action|Children|Drama",
    "synopsis": "Insect bite, nonvenomous, of hand(s) except finger(s) alone, without mention of infection",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 172
  },
  {
    "title": "He Who Dares",
    "isbn_number": "212878842-0",
    "author": "Jaimie Hirthe",
    "genre": "Action",
    "synopsis": "Unspecified diffuse connective tissue disease",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 192
  },
  {
    "title": "Dragons Forever",
    "isbn_number": "332256446-0",
    "author": "Jodi Bowcock",
    "genre": "Action|Comedy|Romance",
    "synopsis": "Deficiencies of smooth pursuit movements",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 264
  },
  {
    "title": "Anna Karenina",
    "isbn_number": "693812508-2",
    "author": "Verne Pleager",
    "genre": "Drama|Romance",
    "synopsis": "Tuberculosis of limb bones, tubercle bacilli not found (in sputum) by microscopy, but found by bacterial culture",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 398
  },
  {
    "title": "Autohystoria",
    "isbn_number": "426257528-4",
    "author": "Zorina Fewster",
    "genre": "(no genres listed)",
    "synopsis": "Aneurysm of aorta, specified as syphilitic",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 493
  },
  {
    "title": "Doogal",
    "isbn_number": "754009261-0",
    "author": "Kizzee Sutherby",
    "genre": "Animation|Children",
    "synopsis": "Food poisoning due to Vibrio vulnificus",
    "cover_image": "https://picsum.photos/200/300",
    "price": 329
  },
  {
    "title": "Running Scared",
    "isbn_number": "353309479-0",
    "author": "Janetta MacGillreich",
    "genre": "Action|Drama",
    "synopsis": "Closed fracture of metatarsal bone(s)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 159
  },
  {
    "title": "Blood from the Mummy's Tomb",
    "isbn_number": "935616444-4",
    "author": "Gallard MacCaughan",
    "genre": "Horror",
    "synopsis": "Retroverted and incarcerated gravid uterus, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 236
  },
  {
    "title": "Father of the Bride",
    "isbn_number": "124223688-0",
    "author": "Sybille Bodle",
    "genre": "Comedy",
    "synopsis": "Congenital stenosis of aortic valve",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 491
  },
  {
    "title": "Diamond Arm, The (Brilliantovaya ruka)",
    "isbn_number": "582672227-4",
    "author": "Ginnie Wildey",
    "genre": "Action|Adventure|Comedy|Crime|Thriller",
    "synopsis": "Injury to superior mesenteric artery (trunk)",
    "cover_image": "https://picsum.photos/200/300",
    "price": 153
  },
  {
    "title": "Operation 'Y' & Other Shurik's Adventures",
    "isbn_number": "909077861-6",
    "author": "Chad Chazier",
    "genre": "Comedy|Crime|Romance",
    "synopsis": "Hypertensive chronic kidney disease, malignant, with chronic kidney disease stage I through stage IV, or unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 382
  },
  {
    "title": "Of Human Hearts",
    "isbn_number": "165120877-8",
    "author": "Kendrick Swannack",
    "genre": "Drama",
    "synopsis": "Primary tuberculous infection, unspecified, tubercle bacilli not found by bacteriological examination, but tuberculosis confirmed histologically",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 234
  },
  {
    "title": "MVP: Most Valuable Primate",
    "isbn_number": "608438586-9",
    "author": "Morganica Fabbro",
    "genre": "Comedy",
    "synopsis": "Quadruplet pregnancy with fetal loss and retention of one or more fetus(es), antepartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 140
  },
  {
    "title": "Saw IV",
    "isbn_number": "448039152-5",
    "author": "Tabbie Crossfield",
    "genre": "Crime|Horror|Thriller",
    "synopsis": "Contusion of wrist",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 490
  },
  {
    "title": "Mammuth",
    "isbn_number": "490497916-8",
    "author": "Dolf Gibbon",
    "genre": "Comedy|Drama",
    "synopsis": "Other anomalies of dental arch relationship",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 452
  },
  {
    "title": "Legend of the Black Scorpion (a.k.a. The Banquet) (Ye yan)",
    "isbn_number": "664258087-7",
    "author": "Dianna Pattemore",
    "genre": "Action|Drama|Fantasy|War",
    "synopsis": "Legal blindness, as defined in U.S.A.",
    "cover_image": "https://picsum.photos/200/300",
    "price": 145
  },
  {
    "title": "Good Student, The (Mr. Gibb)",
    "isbn_number": "641902983-X",
    "author": "Gustavus Challin",
    "genre": "Comedy",
    "synopsis": "Accidents involving powered vehicles used solely within the buildings and premises of industrial or commercial establishment",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 375
  },
  {
    "title": "Attack of the Mushroom People (Matango)",
    "isbn_number": "269381583-5",
    "author": "Broddie Gipp",
    "genre": "Fantasy|Horror|Sci-Fi|Thriller",
    "synopsis": "Hodgkin's paragranuloma, spleen",
    "cover_image": "https://picsum.photos/200/300",
    "price": 396
  },
  {
    "title": "That Uncertain Feeling",
    "isbn_number": "416598918-5",
    "author": "Ode Baike",
    "genre": "Comedy",
    "synopsis": "Arthropathy associated with other viral diseases, lower leg",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 285
  },
  {
    "title": "Lust for Gold",
    "isbn_number": "054681145-0",
    "author": "Lucilia Huard",
    "genre": "Romance|Western",
    "synopsis": "Non-ABO incompatibility with acute hemolytic transfusion reaction",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 423
  },
  {
    "title": "Grave Decisions (Wer fr??her stirbt, ist l??nger tot)",
    "isbn_number": "557223347-1",
    "author": "Jock Grzeskowski",
    "genre": "Comedy|Drama",
    "synopsis": "Other and unspecified postsurgical nonabsorption",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 440
  },
  {
    "title": "Quality Street",
    "isbn_number": "776073128-0",
    "author": "Lucilia Redpath",
    "genre": "Comedy|Drama|Romance",
    "synopsis": "Follicular cyst of ovary",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 189
  },
  {
    "title": "Last of the Mohicans, The",
    "isbn_number": "135851506-9",
    "author": "Salome Etteridge",
    "genre": "Action|Romance|War|Western",
    "synopsis": "Fourth-degree perineal laceration, unspecified as to episode of care or not applicable",
    "cover_image": "https://picsum.photos/200/300",
    "price": 179
  },
  {
    "title": "Mr. Skeffington",
    "isbn_number": "111160141-0",
    "author": "Cristen Cockitt",
    "genre": "Drama|Romance",
    "synopsis": "Other and unspecified water transport accident injuring occupant of small boat, powered",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 294
  },
  {
    "title": "Ingmar Bergman on Life and Work (Ingmar Bergman: Om liv och arbete)",
    "isbn_number": "826298513-3",
    "author": "Leontine Zincke",
    "genre": "Documentary",
    "synopsis": "Disorders of optic chiasm associated with pituitary neoplasms and disorders",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 449
  },
  {
    "title": "Amen",
    "isbn_number": "592165787-5",
    "author": "Vernon Luisetti",
    "genre": "Drama|Musical",
    "synopsis": "Other specified disorders of bursae and tendons in shoulder region",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 181
  },
  {
    "title": "Fame",
    "isbn_number": "698317415-1",
    "author": "Bethina Clilverd",
    "genre": "Drama|Musical",
    "synopsis": "Explosion, fire, or burning in watercraft injuring unspecified person",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 109
  },
  {
    "title": "Act Da Fool",
    "isbn_number": "839247127-X",
    "author": "Berty Kleimt",
    "genre": "(no genres listed)",
    "synopsis": "Mechanical complication due to corneal graft",
    "cover_image": "https://picsum.photos/200/300",
    "price": 399
  },
  {
    "title": "The War at Home",
    "isbn_number": "584711960-7",
    "author": "Gustaf Rigmond",
    "genre": "Documentary|War",
    "synopsis": "Adhesions of drum head to incus",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 372
  },
  {
    "title": "Z Channel: A Magnificent Obsession",
    "isbn_number": "160059686-X",
    "author": "Vanya Abson",
    "genre": "Documentary",
    "synopsis": "Obesity complicating pregnancy, childbirth, or the puerperium, delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 201
  },
  {
    "title": "Redirected",
    "isbn_number": "578720067-5",
    "author": "Nevil Rizzone",
    "genre": "Action|Comedy|Crime",
    "synopsis": "Accidents occurring in industrial places and premises",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 141
  },
  {
    "title": "Tom and Huck",
    "isbn_number": "372705161-2",
    "author": "Janot Dacke",
    "genre": "Adventure|Children",
    "synopsis": "Allergic arthritis, upper arm",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 291
  },
  {
    "title": "Victory",
    "isbn_number": "025970529-2",
    "author": "Timothy Gow",
    "genre": "Drama",
    "synopsis": "Malignant neoplasm of connective and other soft tissue of lower limb, including hip",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 151
  },
  {
    "title": "Andalusian Dog, An (Chien andalou, Un)",
    "isbn_number": "387827441-6",
    "author": "Edik Praton",
    "genre": "Fantasy",
    "synopsis": "Hodgkin's sarcoma, lymph nodes of multiple sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 380
  },
  {
    "title": "Dirty Story",
    "isbn_number": "301389499-7",
    "author": "Emylee Avrahm",
    "genre": "Drama",
    "synopsis": "Rh incompatibility with acute hemolytic transfusion reaction",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 388
  },
  {
    "title": "One 2 Ka 4",
    "isbn_number": "900099588-4",
    "author": "Kali Zavittieri",
    "genre": "Action|Comedy|Drama",
    "synopsis": "Vaginismus",
    "cover_image": "https://picsum.photos/200/300",
    "price": 285
  },
  {
    "title": "Private Life of Henry VIII, The",
    "isbn_number": "179496703-6",
    "author": "Elbert Klausen",
    "genre": "Comedy|Drama",
    "synopsis": "Accidental fall from playground equipment",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 158
  },
  {
    "title": "Crystal Ball, The",
    "isbn_number": "351231914-9",
    "author": "Coreen Heine",
    "genre": "Comedy",
    "synopsis": "Other specified sites, including multiple injury",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 391
  },
  {
    "title": "Student Prince in Old Heidelberg, The",
    "isbn_number": "865818089-1",
    "author": "Nedda Binyon",
    "genre": "Drama|Romance",
    "synopsis": "Intestinal helminthiasis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 259
  },
  {
    "title": "Cutthroat Island",
    "isbn_number": "462661388-8",
    "author": "Marius Gingold",
    "genre": "Action|Adventure|Romance",
    "synopsis": "Injury due to war operations by weapon of mass destruction [WMD], unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 359
  },
  {
    "title": "Blithe Spirit",
    "isbn_number": "401468776-7",
    "author": "Joelle Morten",
    "genre": "Comedy|Drama|Fantasy|Romance",
    "synopsis": "Unspecified anomaly of ear with impairment of hearing",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 307
  },
  {
    "title": "Hurry Sundown",
    "isbn_number": "319499016-0",
    "author": "Maje McIver",
    "genre": "Drama",
    "synopsis": "Alveolar maxillary hyperplasia",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 280
  },
  {
    "title": "Pledge, The",
    "isbn_number": "338576315-0",
    "author": "Ario Sangster",
    "genre": "Crime|Drama|Mystery|Thriller",
    "synopsis": "Motor vehicle traffic accident involving collision with train injuring driver of motor vehicle other than motorcycle",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 387
  },
  {
    "title": "Sinbad of the Seven Seas",
    "isbn_number": "911138399-2",
    "author": "Gretal Birtles",
    "genre": "Adventure|Fantasy|Romance",
    "synopsis": "Neoplasm of uncertain behavior of pineal gland",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 466
  },
  {
    "title": "Bikini Spring Break (Revenge of the Nerds' Bikini Spring Break)",
    "isbn_number": "025805297-X",
    "author": "Rip Gerry",
    "genre": "Comedy",
    "synopsis": "Machinery accident in water transport injuring occupant of small boat, powered",
    "cover_image": "https://picsum.photos/200/300",
    "price": 323
  },
  {
    "title": "Played",
    "isbn_number": "103841625-6",
    "author": "Conny Lowdeane",
    "genre": "Crime|Thriller",
    "synopsis": "Occlusal plane deviation",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 432
  },
  {
    "title": "Hard Times",
    "isbn_number": "802787499-8",
    "author": "Wilt Lineker",
    "genre": "Action|Drama",
    "synopsis": "Leishmaniasis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 109
  },
  {
    "title": "Inside Moves",
    "isbn_number": "755754983-X",
    "author": "Silvan Dornan",
    "genre": "Drama",
    "synopsis": "Closed fracture of base of skull with other and unspecified intracranial hemorrhage, with prolonged [more than 24 hours] loss of consciousness, without return to pre-existing conscious level",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 447
  },
  {
    "title": "Big, Large and Verdone",
    "isbn_number": "418033323-6",
    "author": "Thorpe Fabbri",
    "genre": "Comedy",
    "synopsis": "Other noninflammatory disorders of ovary, fallopian tube, and broad ligament",
    "cover_image": "https://picsum.photos/200/300",
    "price": 440
  },
  {
    "title": "Sharkwater",
    "isbn_number": "291017953-2",
    "author": "Dione Karczinski",
    "genre": "Documentary",
    "synopsis": "Superficial foreign body (splinter) of trunk, without major open wound, infected",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 166
  },
  {
    "title": "Mile... Mile & a Half",
    "isbn_number": "699678546-4",
    "author": "Nickolaus Castagna",
    "genre": "Documentary",
    "synopsis": "Sprain of thoracic",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 115
  },
  {
    "title": "Attack!",
    "isbn_number": "062121726-3",
    "author": "Olenka Flowith",
    "genre": "Drama|War",
    "synopsis": "Contusion of eyelids and periocular area",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 166
  },
  {
    "title": "Cat Chaser",
    "isbn_number": "488965905-6",
    "author": "Scarlett Heak",
    "genre": "Action|Thriller",
    "synopsis": "Central nervous system complication",
    "cover_image": "https://picsum.photos/200/300",
    "price": 286
  },
  {
    "title": "Lila & Eve",
    "isbn_number": "355787559-8",
    "author": "Tish Bryan",
    "genre": "Drama|Thriller",
    "synopsis": "Bipolar I disorder, most recent episode (or current) mixed, severe, without mention of psychotic behavior",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 396
  },
  {
    "title": "Nameless, The (Los sin nombre)",
    "isbn_number": "227988000-8",
    "author": "Tasha Ivanyutin",
    "genre": "Drama|Horror|Mystery",
    "synopsis": "Injury to stomach, without mention of open wound into cavity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 110
  },
  {
    "title": "Alien Nation: Body and Soul",
    "isbn_number": "431615781-7",
    "author": "Marga Ghest",
    "genre": "Sci-Fi",
    "synopsis": "Other sprain of foot",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 193
  },
  {
    "title": "Secret Ballot (Raye makhfi)",
    "isbn_number": "393511824-4",
    "author": "Leonora Aslet",
    "genre": "Comedy",
    "synopsis": "Shigella dysenteriae",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 277
  },
  {
    "title": "Three Worlds (Trois mondes)",
    "isbn_number": "545629687-X",
    "author": "Julita Trehearn",
    "genre": "Drama",
    "synopsis": "Otosclerosis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 369
  },
  {
    "title": "Social Network, The",
    "isbn_number": "812686756-6",
    "author": "Else Barends",
    "genre": "Drama",
    "synopsis": "Other symptoms referable to joint, forearm",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 196
  },
  {
    "title": "Final Darkness, The (Buio Omega)",
    "isbn_number": "464910250-2",
    "author": "Abbye Sebastian",
    "genre": "Horror",
    "synopsis": "Unspecified paranoid state",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 414
  },
  {
    "title": "Magic Mike",
    "isbn_number": "534125959-9",
    "author": "Lexy Fidele",
    "genre": "Drama|Romance",
    "synopsis": "Pyogenic arthritis, multiple sites",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 187
  },
  {
    "title": "Wind Journeys, The (Viajes del viento, Los)",
    "isbn_number": "037672270-3",
    "author": "Brande Eliff",
    "genre": "Drama",
    "synopsis": "Family history of polycystic kidney",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 339
  },
  {
    "title": "Inescapable",
    "isbn_number": "087106177-5",
    "author": "Brannon Vasichev",
    "genre": "Action|Drama|War",
    "synopsis": "Malignant neoplasm of scrotum",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 250
  },
  {
    "title": "Me and Orson Welles",
    "isbn_number": "123665852-3",
    "author": "Darn Quinet",
    "genre": "Drama",
    "synopsis": "Other specified sports and athletics activity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 249
  },
  {
    "title": "Camp de Thiaroye",
    "isbn_number": "312788617-9",
    "author": "Sheeree Wiggin",
    "genre": "Drama|War",
    "synopsis": "Multiple and unspecified open wound of lower limb, complicated",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 276
  },
  {
    "title": "Enlightenment Guaranteed (Erleuchtung Garantiert)",
    "isbn_number": "544616417-2",
    "author": "Adolphe Killigrew",
    "genre": "Comedy|Drama",
    "synopsis": "Otalgia, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 407
  },
  {
    "title": "Blue Spring (Aoi haru)",
    "isbn_number": "147617509-8",
    "author": "Zonnya Tennick",
    "genre": "Drama",
    "synopsis": "Other congenital anomalies of tongue",
    "cover_image": "https://picsum.photos/200/300",
    "price": 440
  },
  {
    "title": "Lost in La Mancha",
    "isbn_number": "990933767-3",
    "author": "Alana Huffadine",
    "genre": "Documentary",
    "synopsis": "Unspecified condition originating in the perinatal period",
    "cover_image": "https://picsum.photos/200/300",
    "price": 431
  },
  {
    "title": "Bal (Honey)",
    "isbn_number": "303032133-9",
    "author": "Alisander Widdowson",
    "genre": "Drama",
    "synopsis": "Acute myocarditis in diseases classified elsewhere",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 376
  },
  {
    "title": "Modern Affair, A",
    "isbn_number": "626038648-6",
    "author": "Lil Naisey",
    "genre": "Romance",
    "synopsis": "Other specified anomalies of stomach",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 183
  },
  {
    "title": "The Hire: Hostage",
    "isbn_number": "147470425-5",
    "author": "Natty Atthow",
    "genre": "Action|Adventure|Crime|Thriller",
    "synopsis": "Spontaneous abortion, complicated by shock, incomplete",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 344
  },
  {
    "title": "Paradise Lost 3: Purgatory",
    "isbn_number": "154478414-7",
    "author": "Kelbee Hudghton",
    "genre": "Documentary",
    "synopsis": "Postablative ovarian failure",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 381
  },
  {
    "title": "Godzilla vs. Destroyah (Gojira vs. Desutoroi??) ",
    "isbn_number": "340779149-6",
    "author": "Natalee Gregan",
    "genre": "Action|Sci-Fi",
    "synopsis": "Closed fracture of surgical neck of humerus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 219
  },
  {
    "title": "Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)",
    "isbn_number": "985135404-X",
    "author": "Cindelyn Orcott",
    "genre": "Action|Adventure|Drama",
    "synopsis": "Cauliflower ear",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 416
  },
  {
    "title": "Life Itself",
    "isbn_number": "320994057-6",
    "author": "Betteanne Keyson",
    "genre": "Documentary",
    "synopsis": "Other venereal diseases due to chlamydia trachomatis, pharynx",
    "cover_image": "https://picsum.photos/200/300",
    "price": 375
  },
  {
    "title": "Les hautes solitudes",
    "isbn_number": "253699212-8",
    "author": "Jena MacComiskey",
    "genre": "(no genres listed)",
    "synopsis": "Hydrops fetalis not due to isoimmunization",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 285
  },
  {
    "title": "The Hire: Chosen",
    "isbn_number": "369420094-0",
    "author": "Ellery Aliman",
    "genre": "Action",
    "synopsis": "Occlusion and stenosis of multiple and bilateral precerebral arteries without mention of cerebral infarction",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 230
  },
  {
    "title": "Rude",
    "isbn_number": "944530804-2",
    "author": "Wally Harewood",
    "genre": "Drama",
    "synopsis": "Reye's syndrome",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 405
  },
  {
    "title": "Mysterious Island, The",
    "isbn_number": "218651921-6",
    "author": "Simone Moxted",
    "genre": "(no genres listed)",
    "synopsis": "Poisoning by barbiturates, undetermined whether accidentally or purposely inflicted",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 413
  },
  {
    "title": "Wild Man Blues",
    "isbn_number": "990145561-8",
    "author": "Collete Kramer",
    "genre": "Documentary",
    "synopsis": "Other chronic otitis externa",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 334
  },
  {
    "title": "Third Man, The",
    "isbn_number": "659932319-7",
    "author": "Bevin Rime",
    "genre": "Film-Noir|Mystery|Thriller",
    "synopsis": "Pemphigus",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 395
  },
  {
    "title": "Once Upon a Time in Queens",
    "isbn_number": "521793972-9",
    "author": "Urson Nardrup",
    "genre": "Comedy|Drama",
    "synopsis": "Fetal complications from in utero procedure, postpartum condition or complication",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 316
  },
  {
    "title": "Lone Ranger and the Lost City of Gold, The",
    "isbn_number": "750042839-1",
    "author": "Allx Giraudel",
    "genre": "Adventure|Mystery|Western",
    "synopsis": "Injury to kidney with open wound into cavity, complete disruption of kidney parenchyma",
    "cover_image": "https://picsum.photos/200/300",
    "price": 268
  },
  {
    "title": "Haunted Strangler, The (Grip of the Strangler)",
    "isbn_number": "563503306-7",
    "author": "Lilli Kenrack",
    "genre": "Crime|Horror|Mystery",
    "synopsis": "Parasympathomimetics [cholinergics] causing adverse effects in therapeutic use",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 140
  },
  {
    "title": "Child, The",
    "isbn_number": "693559444-8",
    "author": "Dennie Rowston",
    "genre": "Thriller",
    "synopsis": "Aspiration of clear amniotic fluid with respiratory symptoms",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 202
  },
  {
    "title": "Robot Stories",
    "isbn_number": "251480644-5",
    "author": "Man Joseff",
    "genre": "Drama|Sci-Fi",
    "synopsis": "Gastrointestinal mucositis (ulcerative)",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 378
  },
  {
    "title": "Leo's Room (Cuarto de Leo, El)",
    "isbn_number": "828426745-4",
    "author": "Randolph Oby",
    "genre": "Drama",
    "synopsis": "Metagonimiasis",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 213
  },
  {
    "title": "Thirty-Five Something (Tout pour plaire)",
    "isbn_number": "392778227-0",
    "author": "Duane McElhargy",
    "genre": "Comedy",
    "synopsis": "Undiagnosed cardiac murmurs",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 295
  },
  {
    "title": "Bons??i",
    "isbn_number": "506503745-0",
    "author": "Florence Willcocks",
    "genre": "Drama",
    "synopsis": "Orchitis, epididymitis, and epididymo-orchitis, with abscess",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 229
  },
  {
    "title": "Too Late the Hero",
    "isbn_number": "953385101-5",
    "author": "Hyacinthia Tuison",
    "genre": "Action|War",
    "synopsis": "Chorioretinitis, unspecified",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 235
  },
  {
    "title": "If....",
    "isbn_number": "292333068-4",
    "author": "Carrissa Goodread",
    "genre": "Drama",
    "synopsis": "Other joint derangement, not elsewhere classified, shoulder region",
    "cover_image": "https://picsum.photos/200/300",
    "price": 243
  },
  {
    "title": "Not Safe for Work",
    "isbn_number": "512597880-9",
    "author": "Marlow Lebbon",
    "genre": "Thriller",
    "synopsis": "Activities involving trampoline",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 381
  },
  {
    "title": "Mildred Pierce",
    "isbn_number": "456949179-0",
    "author": "Malachi Volke",
    "genre": "Drama",
    "synopsis": "Old disruption of medial collateral ligament",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 224
  },
  {
    "title": "Big Miracle",
    "isbn_number": "524558339-9",
    "author": "Maison Stollmeier",
    "genre": "Drama|Romance",
    "synopsis": "Preauricular cyst",
    "cover_image": "https://picsum.photos/200/300",
    "price": 277
  },
  {
    "title": "Our Vines Have Tender Grapes",
    "isbn_number": "966746090-8",
    "author": "Alvan Reisenstein",
    "genre": "Drama",
    "synopsis": "Screening for ischemic heart disease",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 353
  },
  {
    "title": "Ed Hardy: Tattoo the World ",
    "isbn_number": "968005561-2",
    "author": "Lezlie Klassman",
    "genre": "Documentary",
    "synopsis": "Congenital dislocation of one hip with subluxation of other hip",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 225
  },
  {
    "title": "Chameleon, The ",
    "isbn_number": "086281445-6",
    "author": "Pippa Skae",
    "genre": "Drama",
    "synopsis": "Heart valve replaced by transplant",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 183
  },
  {
    "title": "Barren Lives (Vidas Secas)",
    "isbn_number": "047894975-8",
    "author": "Bradford Lukovic",
    "genre": "Drama",
    "synopsis": "Other motor vehicle nontraffic accident while boarding and alighting injuring motorcyclist",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 398
  },
  {
    "title": "Ladies of Leisure",
    "isbn_number": "999044870-1",
    "author": "Udell Pretty",
    "genre": "Romance",
    "synopsis": "Open wound of multiple sites of shoulder and upper arm, with tendon involvement",
    "cover_image": "https://picsum.photos/200/300",
    "price": 168
  },
  {
    "title": "Return of Dracula, The",
    "isbn_number": "427745985-4",
    "author": "Bronson Kirk",
    "genre": "Horror",
    "synopsis": "Special screening for traumatic brain injury",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 282
  },
  {
    "title": "Letter from Siberia",
    "isbn_number": "896368540-3",
    "author": "Gordy Gonsalo",
    "genre": "(no genres listed)",
    "synopsis": "Malignant neoplasm of other specified sites of female genital organs",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 375
  },
  {
    "title": "Transformers: Dark of the Moon",
    "isbn_number": "569735643-9",
    "author": "Clayton Wickson",
    "genre": "Action|Adventure|Sci-Fi|War|IMAX",
    "synopsis": "Sacroiliitis, not elsewhere classified",
    "cover_image": "http://dummyimage.com/156x256.png/5fa2dd/ffffff",
    "price": 268
  },
  {
    "title": "Snow Dogs",
    "isbn_number": "549381583-4",
    "author": "Arvin Tingcomb",
    "genre": "Adventure|Children|Comedy",
    "synopsis": "Contact dermatitis and other eczema due to plants [except food]",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 474
  },
  {
    "title": "The Amazing Catfish",
    "isbn_number": "589011685-1",
    "author": "Loutitia Thirlwell",
    "genre": "Comedy|Drama",
    "synopsis": "Injury to rectum, without mention of open wound into cavity",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 223
  },
  {
    "title": "Lilies",
    "isbn_number": "996009250-X",
    "author": "Shay Sloam",
    "genre": "Drama|Fantasy|Romance",
    "synopsis": "Delayed delivery of second twin, triplet, etc., delivered, with or without mention of antepartum condition",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 179
  },
  {
    "title": "Interrogation, The (Kuulustelu)",
    "isbn_number": "777021258-8",
    "author": "Dinah Vance",
    "genre": "Drama",
    "synopsis": "Other injuries to scalp",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 146
  },
  {
    "title": "Black Roses ",
    "isbn_number": "326219180-9",
    "author": "Bea Paute",
    "genre": "Horror|Musical",
    "synopsis": "Butyrophenone-based tranquilizers causing adverse effects in therapeutic use",
    "cover_image": "https://picsum.photos/200/300",
    "price": 289
  },
  {
    "title": "Last Letter, The (La derni??re lettre)",
    "isbn_number": "640722905-7",
    "author": "Kelcie O'Rowane",
    "genre": "Drama",
    "synopsis": "Malignant neoplasm of sigmoid colon",
    "cover_image": "http://dummyimage.com/156x256.png/dddddd/000000",
    "price": 266
  },
  {
    "title": "Catch-22",
    "isbn_number": "153609815-9",
    "author": "Uriah Blackburne",
    "genre": "Comedy|War",
    "synopsis": "Injury by paintball gun, undetermined whether accidental or purposely inflicted",
    "cover_image": "http://dummyimage.com/156x256.png/cc0000/ffffff",
    "price": 319
  }
]

function fun(){
  data.forEach(book => {
    const newBook = new BookModel(book);
    console.log(newBook)
    newBook.save();
  });
}
fun()


