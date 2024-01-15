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
      fedi0115001:'Abburi Thriveni.pdf',
      fedi0115008:'FEDI0115008.pdf',
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
    };

    // Check if the search query has a corresponding destination page
    if (courseMapping.hasOwnProperty(searchInput)) {
      const destinationPage = courseMapping[searchInput];
      window.location.href = destinationPage; // Redirect to the destination page
    } else {
      alert("Certificate not found"); // Show an alert if the course is not found
    }
  });
