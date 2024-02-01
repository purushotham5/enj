document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    // Define a mapping of search queries to destination pages
    const courseMapping = {


      // java certificates

      "vempalli mallikarjuna": "Vempalli Mallikarjuna.pdf",
      "abburi thriveni ": "Abburi Thriveni.pdf",
      "wagh apeksha vasudeo": "Wagh Apeksha Vasudev.pdf",
      "m.k. arthi": "M.K. Arthi.pdf",
      "a.chandhana": "A.Chandhana.pdf",
      "aruvai daksyhyyani": "ARUVAI DAKSHAYANI.pdf",
      "borra aswini": "BORRA ASWINI.pdf",
      "b.sai deekshitha ": "B.sai deekshitha.pdf",
      "goddindla jayasree": "Goddindla Jayasree.pdf",
      "puttur bhavitha": "Puttur bhavitha.pdf",
      "bhuvaneswari T  ": "Bhuvaneswari T.pdf",
      "b n pavan ": "B N PAVAN.pdf",
      "banka chandhana": "BANKA CHANDANA.pdf",
      "c hema latha": "C HEMA LATHA.pdf",
      "chembeti charishma ": "CHEMBETI CHARISHMA.pdf",
      "y.chethana": "y.chethana.pdf",
      "chinna reddy saiteja": "CHINNA REDDY SAITEJA.pdf",
      "c lakshmi devi": "C LAKSHMI DEVI.pdf",
      "r m sri lekha": "R M SRI LEKHA.pdf",
      "e.nagesh": "E.Nagesh.pdf",
      "shaik farukh ahamed": "SHAIK FARUKH AHAMED.pdf",
      "g.hema": "G.Hema.pdf",
      "g tharunkumar": "G Tharunkumar.pdf",
      "gowthami": "Gowthami.pdf",
      "a.hemalatha": "A.HEMALATHA.pdf",
      "c hemanth prasad": "C HEMANTH PRASAD.pdf",
      "mr hindumathi": "MR Hindumathi.pdf",
      "yakasiri jahnavi": "YAKASIRI JAHNAVI.pdf",
      "j.pavani": "J.PAVANI.pdf",
      "jana deepika": "Jana Deepika.pdf",
      "kalluru thrishitha": "Kalluru Thrishitha.pdf",
      "kenga chithappa gari nagesh": "KENGA CHITHAPPA GARI NAGESH.pdf",
      "naveen kumar k": "NAVEEN KUMAR K.pdf",
      "kovururamalakshmi": "Kovururamalakshmi.pdf",
      "krishna soniya": "Krishna soniya.pdf",
      "kuncha keerthi": "KUNCHA KEERTHI.pdf",
      "kuppireddy lavanya reddy": "Kuppireddy lavanya reddy.pdf",
      "harsha vardhan reddy cheluri": "Harsha vardhan Reddy cheluri.pdf",
      "bommireddy madhulatha": "Bommireddy Madhulatha.pdf",
      "bodireddy jahnavi": "BODIREDDY JAHNAVI.pdf",
      "manasa manasa": "Manasa Manasa.pdf",
      "kosana satya veera manikanta ": "Kosana Satya Veera Manikanta.pdf",
      "osuru manohar+C44": "Osuru Manohar.pdf",
      "masi reddy santhi": "Masi Reddy Santhi.pdf",
      "s.mastan hussain": "S.MASTAN HUSSAIN.pdf",
      "meruva yuvakishore": "Meruva Yuvakishore.pdf",
      "mooli neha": "MOOLI NEHA.pdf",
      "d.r.mounika": "D.R.MOUNIKA.pdf",
      "mannaru prem kumar": "Mannaru Prem Kumar.pdf",
      "n. bhanu prakash": "N. Bhanu prakash.pdf",




      jv0110001: "Vempalli Mallikarjuna.pdf",
      jv0110002: "Abburi Thriveni.pdf",
      jv0110003: "Wagh Apeksha Vasudev.pdf",
      jv0110004: "M.K. Arthi.pdf",
      jv0110005: "A.Chandhana.pdf",
      jv0110006: "ARUVAI DAKSHAYANI.pdf",
      jv0110007: "BORRA ASWINI.pdf",
      jv0110008: "B.sai deekshitha.pdf",
      jv0110009: "Goddindla Jayasree.pdf",
      jv0110010: "Puttur bhavitha.pdf",
      jv0110011: "Bhuvaneswari T.pdf",
      jv0110012: "B N PAVAN.pdf",
      jv0110013: "BANKA CHANDANA.pdf",
      jv0110014: "C HEMA LATHA.pdf",
      jv0110015: "CHEMBETI CHARISHMA.pdf",
      jv0110016: "y.chethana.pdf",
      jv0110017: "CHINNA REDDY SAITEJA.pdf",
      jv0110018: "C LAKSHMI DEVI.pdf",
      jv0110019: "R M SRI LEKHA.pdf",
      jv0110020: "E.Nagesh.pdf",
      jv0110021: "SHAIK FARUKH AHAMED.pdf",
      jv0110022: "G.Hema.pdf",
      jv0110023: "G Tharunkumar.pdf",
      jv0110024: "Gowthami.pdf",
      jv0110025: "A.HEMALATHA.pdf",
      jv0110026: "C HEMANTH PRASAD.pdf",
      jv0110027: "MR Hindumathi.pdf",
      jv0110028: "YAKASIRI JAHNAVI.pdf",
      jv0110029: "J.PAVANI.pdf",
      jv0110030: "Jana Deepika.pdf",
      jv0110031: "Kalluru Thrishitha.pdf",
      jv0110032: "KENGA CHITHAPPA GARI NAGESH.pdf",
      jv0110033: "NAVEEN KUMAR K.pdf",
      jv0110034: "Kovururamalakshmi.pdf",
      jv0110035: "Krishna soniya.pdf",
      jv0110036: "KUNCHA KEERTHI.pdf",
      jv0110037: "Kuppireddy lavanya reddy.pdf",
      jv0110038: "Harsha vardhan Reddy cheluri.pdf",
      jv0110039: "Bommireddy Madhulatha.pdf",
      jv0110040: "BODIREDDY JAHNAVI.pdf",
      jv0110041: "Manasa Manasa.pdf",
      jv0110042: "Kosana Satya Veera Manikanta.pdf",
      jv0110043: "Osuru Manohar.pdf",
      jv0110044: "Masi Reddy Santhi.pdf",
      jv0110045: "S.MASTAN HUSSAIN.pdf",
      jv0110046: "Meruva Yuvakishore.pdf",
      jv0110047: "MOOLI NEHA.pdf",
      jv0110048: "D.R.MOUNIKA.pdf",
      jv0110049: "Mannaru Prem Kumar.pdf",
      jv0110050: "N. Bhanu prakash.pdf",
      jv0110051: "P NAVEEN.pdf",
      jv0110052: "SHAIK NUSRATH.pdf",
      jv0110053: "PALLELA LOHITHA.pdf",
      jv0110054: "Poojari swetha.pdf",
      jv0110055: "T.Poornima.pdf",
      jv0110056: "POTHU NIKITHA.pdf",
      jv0110057: "KARAMALA PRAVEENA.pdf",
      jv0110058: "M.Rajasree.pdf",
      jv0110059: "M.RITHEESH.pdf",
      jv0110060: "T Lahari.pdf",
      jv0110061: "Koppala Sahithi.pdf",
      jv0110062: "DAAMA JYOTHI KUMAR.pdf",
      jv0110063: "CHENNAMSETTY SANDEEP.pdf",
      jv0110064: "Mambakam Ramya.pdf",
      jv0110065: "KODIVALASA SANGEETHA.pdf",
      jv0110066: "K.SANJAY.pdf",
      jv0110067: "Siripireddyprathyusha.pdf",
      jv0110068: "S Kushal Kumar.pdf",
      jv0110069: "SIRRI.MURTHI.HARATHI.pdf",
      jv0110070: "Kesepalli Sowmya Lakshmi.pdf",    
      jv0110071: "KASI REDDY SRAVANI.pdf",
      jv0110072: "Sravani Vemuru.pdf",
      jv0110073: "T.Susmitha.pdf",
      jv0110074: "SIDDAM VIKAS.pdf",
      jv0110075: "TIRUKALA HARI KRISHNA.pdf",
      jv0110076: "Pudi Vasavi.pdf",
      jv0110077: "THANDLA VINAY.pdf",
      jv0110078: "A.Vishnu Vardhan Reddy.pdf",
      jv0110079: "S P Vinitha.pdf",
      jv0110080: "Mallepati Bharath.pdf",
      jv0110081: "T Mani Kumar.pdf",
      //Internships
      jvi0110001: "intern.pdf",
      //Courses
      jvc0110001: "course.pdf",
      jvc0110002: "PYTHON.pdf",

      //main id
      jvi016001:'JVI016001.pdf',
jvi016002:'JVI016002.pdf',
jvi016003:'JVI016003.pdf',
jvi016004:'JVI016004.pdf',
jvi016005:'JVI016005.pdf',
//jvi016006:'JVI016006.pdf',
jvi016007:'JVI016007.pdf',
jvi016008:'JVI016008.pdf',
jvi016009:'JVI016009.pdf',
jvi016010:'JVI016010.pdf',
jvi016011:'JVI016011.pdf',
jvi016012:'JVI016012.pdf',
jvi016013:'JVI016013.pdf',
jvi016014:'JVI016014.pdf',
jvi016015:'JVI016015.pdf',
jvi016016:'JVI016016.pdf',
jvi016017:'JVI016017.pdf',
jvi016018:'JVI016018.pdf',
jvi016019:'JVI016019.pdf',
jvi016020:'JVI016020.pdf',
jvi016021:'JVI016021.pdf',
jvi016022:'JVI016022.pdf',
jvi016023:'JVI016023.pdf',
jvi016024:'JVI016024.pdf',
jvi016025:'JVI016025.pdf',
jvi016026:'JVI016026.pdf',
jvi016027:'JVI016027.pdf',
jvi016028:'JVI016028.pdf',
jvi016029:'JVI016029.pdf',
jvi016030:'JVI016030.pdf',
jvi016031:'JVI016031.pdf',
jvi016032:'JVI016032.pdf',
jvi016033:'JVI016033.pdf',
jvi016034:'JVI016034.pdf',
jvi016035:'JVI016035.pdf',
jvi016036:'JVI016036.pdf',
jvi016037:'JVI016037.pdf',
jvi016038:'JVI016038.pdf',
jvi016039:'JVI016039.pdf',
jvi016040:'JVI016040.pdf',
jvi016041:'JVI016041.pdf',
jvi016042:'JVI016042.pdf',
jvi016043:'JVI016043.pdf',
jvi016044:'JVI016044.pdf',
jvi016045:'JVI016045.pdf',
jvi016046:'JVI016046.pdf',
jvi016047:'JVI016047.pdf',


      // front-end 
      fed019001: "A R Rajammal.pdf",
      fed019002: "Aswini Enukonda.pdf",
      fed019003: "Athuru Chandana prasuna.pdf",
      fed019004: "Avvaru Guru Saranya.pdf",
      fed019005: "DUGGINENI BINDHU.pdf",
      fed019006: "Arkonam  chaitanya.pdf",
      fed019007: "P.chandu.pdf",
      fed019008: "C Tejaswini.pdf",
      fed019009: "DASU SOBHANA.pdf",
      fed019010: "A.V.Deepika.pdf",
      fed019011: "Boosireddy Deesritha.pdf",
      fed019012: "KONDAPURAM DEVI SREE.pdf",
      fed019013: "R Eswari Dimple.pdf",
      fed019014: "Budigi Divya.pdf",
      fed019015: "P Muni bala ganesh.pdf",
      fed019016: "k.Geethalakshmi.pdf",
      fed019017: "GUGGILLA JYOSHNAVI.pdf",
      fed019018: "GB VENKATESWARA REDDY.pdf",
      fed019019: "GAJJALA HEMALATHA.pdf",
      fed019020: "K S HEMANTHKUMAR FE.pdf",
      fed019021: "SHAIK HYDARVALI.pdf",
      fed019022: "DAYALA INDU.pdf",
      fed019023: "Kaamala Jahnavi.pdf",
      fed019024: "K.MAHAMMAD ILIYAZ.pdf",
      fed019025: "Bala jaya Chandra.pdf",
      fed019026: "Yanamandala kiran.pdf",
      fed019027: "Hari Krishna kuruva.pdf",
      fed019028: "KURUVA LAKSHMANNA.pdf",
      fed019029: "Dabbuguntla Lakshmi prasanna.pdf",
      fed019030: "STALIN S.pdf",
      fed019031: "Tenepalli Manasa.pdf",
      fed019032: "M Bhuvaneswari.pdf",
      fed019033: "Minnela Bhuvaneswari.pdf",
      fed019034: "M.Ramanatha Reddy.pdf",
      fed019035: "PIDIKUPPALA MOHAN.pdf",
      fed019036: "Avula Mounesh.pdf",
      fed019037: "MUCHURAM MAHESH.pdf",
      fed019038: "MURE DEEKSHITHA REDDY.pdf",
      fed019039: "B.PAVAN KUMAR.pdf",
      fed019040: "A NARESH.pdf",
      fed019041: "Mudireddy Navaneeswar Reddy.pdf",
      fed019042: "Nellore Neeraja.pdf",
      fed019043: "NOORHASAN.pdf",
      fed019044: "Paperi Hemalatha.pdf",
      fed019045: "Parna Deepika.pdf",
      fed019046: "k.geethalakshmi (pavanpakalapavan@gmail.com).pdf",
      fed019047: "V PRAMOD REDDY FE.pdf",
      fed019048: "T. R. Prasanna Venkatesh.pdf",
      fed019049: "Mulapakula.Deepa.pdf",
      fed019050: "Dugginenni Rajyalakshmi.pdf",
      fed019051: "RUDRARAJU RAMYA SREE.pdf",
      fed019052: "P Pavan sai.pdf",
      fed019053: "Malagondla Rupa.pdf.pdf",
      fed019054: "Saribali Chandana.pdf",
      fed019055: "S Shyam.pdf",
      fed019056: "sashank.pdf",
      fed019057: "KASIREDDY SHREYA REDDY.pdf",
      fed019058: "Padepalli somesh.pdf",
      fed019059: "K SRAVANI.pdf",
      fed019060: "K.V.L.V.Narasimha Prakash.pdf",
      fed019061: "Sujith Karnati.pdf",
      fed019062: "P sireesha.pdf",
      fed019063: "Tadipatri Praveen Kumar.pdf",
      fed019064: "THYAGADURGAM SURYA NARAYANA.pdf",
      fed019065: "Ummarasetty Anusha.pdf",
      fed019066: "Jadapalli uma.pdf",
      fed019067: "Madithati Usha.pdf",
      fed019068: "V ROHITH KUMAR.pdf",
      fed019069: "Vemuri Hitesh.pdf",
      fed019070: "V sushmitha.pdf",
      fed019071: "PULI RAMADEVI.pdf",
      fed019072: "AJJUGUNTI NIVEDITHA.pdf",
      fed019073:'Sri sowmika.pdf',
      fed019074:'Devi Sree.pdf',
      fed019075:'Cingiri Reshma.pdf',
      fed019076:'Hari.pdf',
      fed019077:'Kondini Bhavana.pdf',

      //internships

fed0115001:'FED0115001.pdf',
fed0115002:'FED0115002.pdf',
fed0115003:'FED0115003.pdf',
fed0115004:'FED0115004.pdf',
fed0115005:'FED0115005.pdf',
fed0115006:'FED0115006.pdf',
fed0115007:'FED0115007.pdf',
fed0115008:'FED0115008.pdf',
fed0115009:'FED0115009.pdf',
fed0115010:'FED0115010.pdf',
fed0115011:'FED0115011.pdf',
fed0115012:'FED0115012.pdf',
fed0115013:'FED0115013.pdf',
fed0115014:'FED0115014.pdf',
fed0115015:'FED0115015.pdf',
fed0115016:'FED0115016.pdf',
fed0115017:'FED0115017.pdf',
fed0115018:'FED0115018.pdf',
fed0115019:'FED0115019.pdf',
fed0115020:'FED0115020.pdf',
fed0115021:'FED0115021.pdf',
fed0115022:'FED0115022.pdf',
fed0115023:'FED0115023.pdf',
fed0115024:'FED0115024.pdf',
fed0115025:'FED0115025.pdf',
fed0115026:'FED0115026.pdf',
fed0115027:'FED0115027.pdf',
fed0115028:'FED0115028.pdf',
fed0115029:'FED0115029.pdf',
fed0115030:'FED0115030.pdf',
fed0115031:'FED0115031.pdf',
fed0115032:'FED0115032.pdf',
fed0115033:'FED0115033.pdf',
fed0115034:'FED0115034.pdf',
fed0115035:'FED0115035.pdf',
fed0115036:'FED0115036.pdf',
fed0115037:'FED0115037.pdf',
fed0115038:'FED0115038.pdf',
fed0115039:'FED0115039.pdf',
fed0115040:'FED0115040.pdf',
fed0115041:'FED0115041.pdf',
fed0115042:'FED0115042.pdf',
fed0115043:'FED0115043.pdf',
fed0115044:'FED0115044.pdf',
// fed0115045:'FED0115045.pdf',
fed0115046:'FED0115046.pdf',
fed0115047:'FED0115047.pdf',
fed0115048:'FED0115048.pdf',
fed0115049:'FED0115049.pdf',
fed0115050:'FED0115050.pdf',
fed0115051:'FED0115051.pdf',
fed0115052:'FED0115052.pdf',
fed0115053:'FED0115053.pdf',
fed0115054:'FED0115054.pdf',
fed0115055:'FED0115055.pdf',
fed0115056:'FED0115056.pdf',
fed0115057:'FED0115057.pdf',
fed0115058:'FED0115058.pdf',
fed0115059:'FED0115059.pdf',
fed0115060:'FED0115060.pdf',
fed0115061:'FED0115061.pdf',
fed0115062:'FED0115062.pdf',
fed0115063:'FED0115063.pdf',
fed0115064:'FED0115064.pdf',
fed0115065:'FED0115065.pdf',
fed0115066:'FED0115066.pdf',
fed0115067:'FED0115067.pdf',
fed0115068:'FED0115068.pdf',
fed0115069:'FED0115069.pdf',
fed0115070:'FED0115070.pdf',
fed0115071:'FED0115071.pdf',
fed0115072:'FED0115072.pdf',
//fed0115073:'FED0115073.pdf',
fed0115074:'FED0115074.pdf',
fed0115075:'FED0115075.pdf',
fed0115076:'FED0115076.pdf',
fed0115077:'FED0115077.pdf',
//fed0115078:'FED0115078.pdf',
fed0115079:'FED0115079.pdf',
fed0115080:'FED0115080.pdf',
fed0115081:'FED0115081.pdf',
fed0115082:'FED0115082.pdf',
fed0115083:'FED0115083.pdf',
fed0115084:'FED0115084.pdf',
fed0115085:'FED0115085.pdf',
//fed0115086:'FED0115086.pdf',
fed0115087:'FED0115087.pdf',
fed0115088:'FED0115088.pdf',
fed0115089:'FED0115089.pdf',
fed0115090:'FED0115090.pdf',
fed0115091:'FED0115091.pdf',
fed0115092:'FED0115092.pdf',
fed0115093:'FED0115093.pdf',
fed0115094:'FED0115094.pdf',
fed0115095:'FED0115095.pdf',
fed0115096:'FED0115096.pdf',
fed0115097:'FED0115097.pdf',
fed0115098:'FED0115098.pdf',
fed0115099:'FED0115099.pdf',
fed01150100:'FED01150100.pdf',
fed01150101:'FED01150101.pdf',
fed01150102:'FED01150102.pdf',
fed01150103:'FED01150103.pdf',
fed01150104:'FED01150104.pdf',
fed01150105:'FED01150105.pdf',
fed01150106:'FED01150106.pdf',
fed01150107:'FED01150107.pdf',
fed01150108:'FED01150108.pdf',
fed01150109:'FED01150109.pdf',
fed01150110:'FED01150110.pdf',
fed01150111:'FED01150111.pdf',
fed01150112:'FED01150112.pdf',
fed01150113:'FED01150113.pdf',
fed01150114:'FED01150114.pdf',
fed01150115:'FED01150115.pdf',
fed01150116:'FED01150116.pdf',
fed01150117:'FED01150117.pdf',
fed01150118:'FED01150118.pdf',
fed01150119:'FED01150119.pdf',
fed01150120:'FED01150120.pdf',
fed01150121:'FED01150121.pdf',
fed01150122:'FED01150122.pdf',
fed01150123:'FED01150123.pdf',
fed01150124:'FED01150124.pdf',
fed01150125:'FED01150125.pdf',
fed01150126:'FED01150126.pdf',
fed01150127:'FED01150127.pdf',
fed01150128:'FED01150128.pdf',
fed01150129:'FED01150129.pdf',
fed01150130:'FED01150130.pdf',
fed01150131:'FED01150131.pdf',
fed01150132:'FED01150132.pdf',
fed01150133:'FED01150133.pdf',
fed01150134:'FED01150134.pdf',
fed01150135:'FED01150135.pdf',
fed01150136:'FED01150136.pdf',
fed01150137:'FED01150137.pdf',
fed01150138:'FED01150138.pdf',
fed01150139:'FED01150139.pdf',
fed01150140:'FED01150140.pdf',
fed01150141:'FED01150141.pdf',
fed01150142:'FED01150142.pdf',
fed01150143:'FED01150143.pdf',
fed01150145:'FED01150145.pdf',     
// WEB DEVELOPMENT course complition certificates 

      // Add more mappings as needed


      py0122001: "Ravi Deepika.pdf",
      py0122002: "Indu Addula.pdf",
      py0122003: "V.D.Rekha.pdf",
      py0122004: "P Anushuya.pdf",
      py0122005: "Cheppali.Asma.pdf",
      py0122006: "Poreddy Aswini.pdf",
      py0122007: "SHAIK BABI AZEES.pdf",
      py0122008: "Balaji.pdf",
      py0122009: "K.Bhanu sri.pdf",
      py0122010: "NAGOLU BHAVANA.pdf",
      py0122011: "Bhupalam Naga Keerthana.pdf",
      py0122012: "Navya Butti.pdf",
      py0122013: "G CHAITHANYA KANTH.pdf",
      py0122014: "Charan Teja.pdf",
      py0122015: "C.Harshitha Reddy.pdf",
      py0122016: "SUSMITHA REDDY.pdf",
      py0122017: "Dileep Chimble.pdf",
      py0122018: "Muli.Lokeshwari.pdf",
      py0122019: "Y.kumar nadh.pdf",
      py0122020: "Chitte Dinesh kumar.pdf",
      py0122021: "K.sree chandana.pdf",
      py0122022: "Davuluru pragathi.pdf",
      py0122023: "N.Dhanush.pdf",
      py0122024: "V. Dilli prasad.pdf",
      py0122025: "DIVITI MOHITH.pdf",
      py0122026: "D.Dhanusha.pdf",
      py0122027: "E ANIL KUMAR.pdf",
      py0122028: "EKKALURI RAMCHARAN.pdf",
      py0122029: "Galla prem sai.pdf",
      py0122030: "G BHANU PRASAD.pdf",
      py0122031: "Ravula Gireesh.pdf",
      py0122032: "Vadamala Girish.pdf",
      py0122033: "SHAIK GOWSIYA.pdf",
      py0122034: "B Gunasekhar.pdf",
      py0122035: "C.Guruprasad.pdf",
      py0122036: "PATHIPATI HAARIKA NAIDU.pdf",
      py0122037: "ADIMI HARI.pdf",
      py0122038: "K S HEMANTHKUMAR PY.pdf",
      py0122039: "Y Hemanth Eswar.pdf",
      py0122040: "N.Hema Sai Reddy.pdf",
      py0122041: "SHAIK MOHAMMED YASIN.pdf",
      py0122042: "D Prasanth kumar.pdf",
      py0122043: "Chinnammagari jagadeesh.pdf",
      py0122044: "J. Muni jagadeesh.pdf",
      py0122045: "J ROHITH.pdf",
      py0122046: "Jaswanth.pdf",
      py0122047: "P Kalyan.pdf",
      py0122048: "KANDYALA ROHITHA SAI.pdf",
      py0122049: "Kankanampati vishnu vardhan.pdf",
      py0122050: "VIDYALA KARTHIK.pdf",
      py0122051: "KASYA rohith.pdf",
      py0122052: "S kishore.pdf",
      py0122053: "K GOWTHAM.pdf",
      py0122054: "K.CHAITANYA.pdf",
      py0122055: "KURAKULA RAJESH.pdf",
      py0122056: "K.pujitha.pdf",
      py0122057: "Sirigi Reddy Kyathi Durga.pdf",
      py0122058: "Kakarla Jyothendra.pdf",
      py0122059: "Konduru Lahari.pdf",
      py0122060: "Boggala.Lakshmi Vardhan goud.pdf",
      py0122061: "E.lava Kumar.pdf",
      py0122062: "Leenasri.pdf",
      py0122063: "Lekkala Srivani.pdf",
      py0122064: "Pathireddy lihasreddy.pdf",
      py0122065: "Maddala Venkata Likhil.pdf",
      py0122066: "Ugaranam likitha.pdf",
      py0122067: "Madambakam Mahesh.pdf",
      py0122068: "Madaka Jargavi.pdf",
      py0122069: "Maddina kavya.pdf",
      py0122070: "Athirala Mahesh.pdf",
      py0122071: "Marabathini Mahitha.pdf",
      py0122072: "Mokkatla Sujitha.pdf",
      py0122073: "Mothukuri Mounika.pdf",
      py0122074: "M.moulika.pdf",
      py0122075: "MUKTHA NITHISH.pdf",
      py0122076: "Muni dhanvanthar.pdf",
      py0122077: "Shiak. Suhel Ahamad.pdf",
      py0122078: "N POORNA PRAKASH.pdf",
      py0122079: "M.Nabi Rasool.pdf",
      py0122080: "Nagam Tejasri.pdf",
      py0122081: "Nagathi.Bhavana.pdf",
      py0122082: "P.Nandhini.pdf",
      py0122083: "Seelam nandini.pdf",
      py0122084: "Medaramittla Nandini.pdf",
      py0122085: "VASANTHA SRAVYA.pdf",
      py0122086: "V.Navya sree.pdf",
      py0122087: "N Dharani.pdf",
      py0122088: "R NIKITHA SHARMA.pdf",
      py0122089: "D NITHIN.pdf",
      py0122090: "B.Nithya sree.pdf",
      py0122091: "P.Nohitha.pdf",
      py0122092: "Ujjetha vani. N.pdf",
      py0122093: "P. Nikhitha.pdf",
      py0122094: "Koppala Pallavi.pdf",
      py0122095: "SOMPALLIPAVITHRA.pdf",
      py0122096: "Mogili Phani Kumar.pdf",
      py0122097: "V PRAMOD REDDY.pdf",
      py0122098: "Katimireddy gari Prasanthi.pdf",
      py0122099: "B.prathap reddy.pdf",
      py0122100: "Dommaraju preethi.pdf",
      py0122101: "G Priyanka Reddy.pdf",
      py0122102: "Rahul G.pdf",
      py0122103: "KATARI RAJESH.pdf",
      py0122104: "Dhanireddy Rajitha.pdf",
      py0122105: "Yasaswini Ratakonda.pdf",
      py0122106: "Kuppannagari reddemma.pdf",
      py0122107: "TADIPATRI REDDI KUMARI.pdf",
      py0122108: "REDDY PAVAN M.pdf",
      py0122109: "Beedhagani Reddy Rani.pdf",
      py0122110: "S.Anil Kumar.pdf",
      py0122111: "SAGARLA SAI RAM.pdf",
      py0122112: "S. Nishitha.pdf",
      py0122113: "M.s.sahas.pdf",
      py0122114: "M.Sai kiran.pdf",
      py0122115: "M sai sowmya.pdf",
      py0122116: "B.Sai sowmya.pdf",
      py0122117: "UPPU SAIVENKAT.pdf",
      py0122118: "GUNDRASAM SAKETB RAM.pdf",
      py0122119: "M SANDEEP.pdf",
      py0122120: "SANNAPUREDDY PRATHAP.pdf",
      py0122121: "PUTLURU SARATH KUMAR REDDY.pdf",
      py0122122: "Thallam saritha.pdf",
      py0122123: "Shaik Farook.pdf",
      py0122124: "SHAIK SHAREENA BEE.pdf",
      py0122125: "Karanam Shivaji.pdf",
      py0122126: "Yepuru.siddamma.pdf",
      py0122127: "Sirisha gownolla.pdf",
      py0122128: "Somalaraju Sravani.pdf",
      py0122129: "Sompalli pavithra.pdf",
      py0122130: "Sreenivasulu Thimmapuram.pdf",
      py0122131: "Modiboina sreenivasulu.pdf",
      py0122132: "MASIREDDY REDDEPPA REDDY.pdf",
      py0122133: "Shaik suhail.pdf",
      py0122134: "Sukith.D.pdf",
      py0122135: "Sunkara sai vardhan.pdf",
      py0122136: "Peddamadiyam venkata sumanth.pdf",
      py0122137: "Sv siddartha.pdf",
      py0122138: "PASAM SWAROOPA.pdf",
      py0122139: "A.Swetha.pdf",
      py0122140: "Syed. Mahammad Saleem.pdf",
      py0122141: "N.Tejasree.pdf",
      py0122142: "CHELIKAM TEJASWINI.pdf",
      py0122143: "Pachuru tejesh.pdf",
      py0122144: "N THARUN REDDY.pdf",
      py0122145: "Y.Vamsi krishna.pdf",
      py0122146: "Vuggam krishna vamsi.pdf",
      py0122147: "DERANGULA VARALAKSHMI.pdf",
      py0122148: "Abburi Varshitha.pdf",
      py0122149: "Vempuluru akhilesh.pdf",
      py0122150: "O.veni.pdf",
      py0122151: "K.SRI VIDYA.pdf",
      py0122152: "POLI VINITHA.pdf",
      py0122153: "KONIDALA VISHNU.pdf",
      py0122154: "Vishva Nagendra.pdf",
      py0122155: "RamyaSree M.pdf",
      py0122156: "M Gowtham.pdf",
      py0122157: "S Sandhya.pdf",
      py0122158: "Nellepalli Keerthi.pdf",
      py0122159: "P Sai Srinivas.pdf",
      py0122160: "Dasari Chandra.pdf",
      py0122161: "MARAKALAKUPPAM SANDEEP.pdf",
      py0122162: "Dasari Chandra.pdf",
            
      //internships 
      pyi0115001: 'PYI0115001.pdf',
pyi0115002:'PYI0115002.pdf',
pyi0115003:'PYI0115003.pdf',
pyi0115004:'PYI0115004.pdf',
pyi0115005:'PYI0115005.pdf',
pyi0115006:'PYI0115006.pdf',
pyi0115007:'PYI0115007.pdf',
pyi0115008:'PYI0115008.pdf',
pyi0115009:'PYI0115009.pdf',
pyi0115010:'PYI0115010.pdf',
pyi0115011:'PYI0115011.pdf',
pyi0115012:'PYI0115012.pdf',
pyi0115013:'PYI0115013.pdf',
pyi0115014:'PYI0115014.pdf',
pyi0115015:'PYI0115015.pdf',
pyi0115016:'PYI0115016.pdf',
pyi0115017:'PYI0115017.pdf',
pyi0115018:'PYI0115018.pdf',
pyi0115019:'PYI0115019.pdf',
pyi0115020:'PYI0115020.pdf',
pyi0115021:'PYI0115021.pdf',
pyi0115022:'PYI0115022.pdf',
pyi0115023:'PYI0115023.pdf',
pyi0115024:'PYI0115024.pdf',
pyi0115025:'PYI0115025.pdf',
pyi0115026:'PYI0115026.pdf',
pyi0115027:'PYI0115027.pdf',
pyi0115028:'PYI0115028.pdf',
pyi0115029:'PYI0115029.pdf',
pyi0115030:'PYI0115030.pdf',
pyi0115031:'PYI0115031.pdf',
pyi0115032:'PYI0115032.pdf',
pyi0115033:'PYI0115033.pdf',
pyi0115034:'PYI0115034.pdf',
pyi0115035:'PYI0115035.pdf',
pyi0115036:'PYI0115036.pdf',
pyi0115037:'PYI0115037.pdf',
pyi0115038:'PYI0115038.pdf',
pyi0115039:'PYI0115039.pdf',
pyi0115040:'PYI0115040.pdf',
pyi0115041:'PYI0115041.pdf',
pyi0115042:'PYI0115042.pdf',
pyi0115043:'PYI0115043.pdf',
pyi0115044:'PYI0115044.pdf',
pyi0115045:'PYI0115045.pdf',
pyi0115046:'PYI0115046.pdf',
pyi0115047:'PYI0115047.pdf',
pyi0115048:'PYI0115048.pdf',
pyi0115049:'PYI0115049.pdf',
pyi0115050:'PYI0115050.pdf',
 pyi0115051:'PYI0115051.pdf',
pyi0115052:'PYI0115052.pdf',
pyi0115053:'PYI0115053.pdf',
pyi0115054:'PYI0115054.pdf',
pyi0115055:'PYI0115055.pdf',
pyi0115056:'PYI0115056.pdf',
pyi0115057:'PYI0115057.pdf',
pyi0115058:'PYI0115058.pdf',
pyi0115059:'PYI0115059.pdf',
pyi0115060:'PYI0115060.pdf',
pyi0115061:'PYI0115061.pdf',
pyi0115062:'PYI0115062.pdf',
pyi0115063:'PYI0115063.pdf',
pyi0115064:'PYI0115064.pdf',
pyi0115065:'PYI0115065.pdf',
pyi0115066:'PYI0115066.pdf',
pyi0115067:'PYI0115067.pdf',
pyi0115068:'PYI0115068.pdf',
pyi0115069:'PYI0115069.pdf',
pyi0115070:'PYI0115070.pdf',
pyi0115071:'PYI0115071.pdf',
pyi0115072:'PYI0115072.pdf',
pyi0115073:'PYI0115073.pdf',
pyi0115074:'PYI0115074.pdf',
pyi0115075:'PYI0115075.pdf',
pyi0115076:'PYI0115076.pdf',
pyi0115077:'PYI0115077.pdf',
pyi0115078:'PYI0115078.pdf',
pyi0115079:'PYI0115079.pdf',
pyi0115080:'PYI0115080.pdf',
pyi0115081:'PYI0115081.pdf',
pyi0115082:'PYI0115082.pdf',
pyi0115083:'PYI0115083.pdf',
pyi0115084:'PYI0115084.pdf',
pyi0115085:'PYI0115085.pdf',
pyi0115086:'PYI0115086.pdf',
pyi0115087:'PYI0115087.pdf',
pyi0115088:'PYI0115088.pdf',
pyi0115089:'PYI0115089.pdf',
pyi0115090:'PYI0115090.pdf',
pyi0115091:'PYI0115091.pdf',
pyi0115092:'PYI0115092.pdf',
pyi0115093:'PYI0115093.pdf',
pyi0115094:'PYI0115094.pdf',
pyi0115095:'PYI0115095.pdf',
pyi0115096:'PYI0115096.pdf',
pyi0115097:'PYI0115097.pdf',
pyi0115098:'PYI0115098.pdf',
pyi0115099:'PYI0115099.pdf',
pyi01150100:'PYI01150100.pdf',
pyi01150101:'PYI01150101.pdf',
pyi01150102:'PYI01150102.pdf',
pyi01150103:'PYI01150103.pdf',
pyi01150104:'PYI01150104.pdf',
pyi01150105:'PYI01150105.pdf',
pyi01150106:'PYI01150106.pdf',
pyi01150107:'PYI01150107.pdf',
pyi01150108:'PYI01150108.pdf',
pyi01150109:'PYI01150109.pdf',
pyi01150110:'PYI01150110.pdf',
pyi01150111:'PYI01150111.pdf',
pyi01150112:'PYI01150112.pdf',
pyi01150113:'PYI01150113.pdf',
pyi01150114:'PYI01150114.pdf',
pyi01150115:'PYI01150115.pdf',
pyi01150116:'PYI01150116.pdf',
pyi01150117:'PYI01150117.pdf',
pyi01150118:'PYI01150118.pdf',
pyi01150119:'PYI01150119.pdf',
pyi01150120:'PYI01150120.pdf',
pyi01150121:'PYI01150121.pdf',
pyi01150122:'PYI01150122.pdf',
pyi01150123:'PYI01150123.pdf',
pyi01150124:'PYI01150124.pdf',
pyi01150125:'PYI01150125.pdf',
pyi01150126:'PYI01150126.pdf',
pyi01150127:'PYI01150127.pdf',
pyi01150128:'PYI01150128.pdf',
pyi01150129:'PYI01150129.pdf',
pyi01150130:'PYI01150130.pdf',
// pyi01150131:'PYI01150131.pdf',
pyi01150132:'PYI01150132.pdf',
pyi01150133:'PYI01150133.pdf',
pyi01150134:'PYI01150134.pdf',
pyi01150135:'PYI01150135.pdf',
pyi01150136:'PYI01150136.pdf',
pyi01150137:'PYI01150137.pdf',
pyi01150138:'PYI01150138.pdf',
pyi01150139:'PYI01150139.pdf',
pyi01150140:'PYI01150140.pdf',
pyi01150141:'PYI01150141.pdf',
pyi01150142:'PYI01150142.pdf',
pyi01150143:'PYI01150143.pdf',
pyi01150144:'PYI01150144.pdf',
pyi01150145:'PYI01150145.pdf',
pyi01150146:'PYI01150146.pdf',
pyi01150148:'PYI01150148.pdf',
pyi01150149:'PYI01150149.pdf',



//AWS 
awsi011001:'AWSI011001.pdf',
//AI 
aii011001:'AII011001.pdf',
aii011003:'AII011003.pdf',
aii011004:'AII011004.pdf',
aii011005:'AII011005.pdf',
//ML
mli011001:'MLI011001.pdf',
mli011002:'MLI011002.pdf',
//CLOUD COMPUTING
cci011001:'CCI011001.pdf',
//EMBEDED SYSTEMS
esi011001:'ESI011001.pdf',

    };

    // Check if the search query has a corresponding destination page
    if (courseMapping.hasOwnProperty(searchInput)) {
      const destinationPage = courseMapping[searchInput];
      window.location.href = destinationPage; // Redirect to the destination page
    } else {
      alert("Certificate not found"); // Show an alert if the course is not found
    }
  });
