

<<<<<<< HEAD
(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);
    if (typeof(v) == 'boolean') {
=======
'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);
    if (typeof v === 'boolean') {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
<<<<<<< HEAD
  var newcatalog = {
=======
  const newcatalog = {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "%(cohort_name)s (%(user_count)s)": "%(cohort_name)s (%(user_count)s)",
    "%(field)s can only contain up to %(count)d characters.": "%(field)s gali tur\u0117ti iki %(count)d simboli\u0173.",
    "%(field)s must have at least %(count)d characters.": "%(field)s turi tur\u0117ti bent %(count)d simbolius/-i\u0173.",
    "%(new_item_message)s": "%(new_item_message)s",
    "%(sel)s of %(cnt)s selected": [
      "pasirinktas %(sel)s i\u0161 %(cnt)s",
      "pasirinkti %(sel)s i\u0161 %(cnt)s",
      "pasirinkti %(sel)s i\u0161 %(cnt)s",
      "pasirinkti %(sel)s i\u0161 %(cnt)s"
    ],
    "%(type)s Component Template Menu": "%(type)s komponento \u0161ablono meniu",
    "(Add signatories for a certificate)": "(Prid\u0117ti sertifikat\u0105 pasira\u0161an\u010dius asmenis) ",
    "(Required Field)": "(B\u016btinas laukas)",
    "(contains %(student_count)s student)": [
      "(yra %(student_count)s kurso dalyvis)",
      "(yra %(student_count)s kurso dalyviai)",
      "(yra %(student_count)s kurso dalyvi\u0173)",
      "(yra %(student_count)s kurso dalyvi\u0173)"
    ],
    "6 a.m.": "6 a.m.",
    "6 p.m.": "18:00",
    "A driver's license, passport, or other government-issued ID with your name and photo": "Vairuotojo pa\u017eym\u0117jimas, pasas ar kitas vald\u017eios institucij\u0173 i\u0161duotas asmens tapatyb\u0117s dokumentas su j\u016bs\u0173 vardu, pavarde ir nuotrauka",
    "A list of courses you have just enrolled in as a verified student": "S\u0105ra\u0161as kurs\u0173, \u012f kuriuos buvote k\u0105 tik u\u017eregistruotas kaip tapatybe patvirtintas dalyvis",
    "A name that identifies your team (maximum 255 characters).": "Pavadinimas, identifikuojantis j\u016bs\u0173 komand\u0105 (daugiausia 255 simboliai).",
    "A short description of the team to help other learners understand the goals or direction of the team (maximum 300 characters).": "Trumpas komandos apra\u0161as, padedantis kitiems kurso dalyviams suprasti komandos tikslus ar veiklos srit\u012f (daugiausia 300 simboli\u0173).",
    "A valid email address is required": "B\u016btinas teisingas el. pa\u0161to adresas",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ": "ABCDEFGHIYJKLMNOPRSTUVZ",
    "Account Settings": "Paskyros nuostatos",
    "Actions": "Veiksmai",
    "Activate Your Account": "Aktyvuokite savo paskyr\u0105",
    "Add Additional Signatory": "Prid\u0117ti papildom\u0105 pasira\u0161ant\u012f asmen\u012f",
    "Add Cohort": "Prid\u0117ti kohort\u0105",
    "Add Component:": "Prid\u0117ti komponent\u0105:",
    "Add a New Cohort": "Prid\u0117ti nauj\u0105 kohort\u0105",
    "Add your first content group": "Prid\u0117kite savo pirm\u0105 turinio grup\u0119",
    "Add your first group configuration": "Prid\u0117kite pirm\u0105j\u0105 grupin\u0119 konfig\u016bracij\u0105",
    "Adding the selected course to your cart": "Pasirinkto kurso \u012fd\u0117jimas \u012f j\u016bs\u0173 pirkini\u0173 krep\u0161el\u012f",
    "Admin": "Administratorius",
    "All Topics": "Visos temos",
    "All accounts were created successfully.": "Visos paskyros s\u0117kmingai sukurtos.",
    "All groups must have a name.": "Visos grup\u0117s turi tur\u0117ti pavadinimus.",
    "All groups must have a unique name.": "Visos grup\u0117s turi tur\u0117ti unikalius pavadinimus.",
    "All subsections": "Visos potem\u0117s",
    "All teams": "Visos komandos",
    "All topics": "Visos temos",
    "All units": "Visi skyriai",
    "Allow students to generate certificates for this course?": "Leisti kurso dalyviams generuoti \u0161io kurso sertifikatus?",
    "Already a course team member": "Jau esate kurso komandos narys",
    "Already a library team member": "Jau esate bibliotekos komandos narys",
    "Already a member": "Jau esate narys",
    "An error has occurred. Make sure that you are connected to the Internet, and then try refreshing the page.": "\u012evyko klaida. \u012esitikinkite, kad esate prisijung\u0119 prie interneto ir pabandykite i\u0161 naujo \u012fkelti puslap\u012f.",
    "An error has occurred. Please try again later.": "\u012evyko klaida. Pra\u0161ome pabandyti v\u0117liau.",
    "An error has occurred. Please try again.": "\u012evyko klaida. Pra\u0161ome bandyti dar kart\u0105.",
    "An error has occurred. Please try reloading the page.": "\u012evyko klaida. Pra\u0161ome i\u0161 naujo \u012fkelti puslap\u012f.",
    "An error has occurred. Refresh the page, and then try again.": "\u012evyko klaida. Atnaujinkite puslap\u012f ir bandykite dar kart\u0105.",
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "\u012evyko klaida gaunant j\u016bs\u0173 el. lai\u0161k\u0105. Bandykite v\u0117liau ir, jeigu problema i\u0161liks, susisiekite su technin\u0117s prie\u017ei\u016bros komanda.",
    "An error occurred while removing the member from the team. Try again.": "\u012evyko klaida \u0161alinant nar\u012f i\u0161 komandos. Bandykite dar kart\u0105.",
    "An error occurred. Make sure that the student's username or email address is correct and try again.": "Klaida. \u012esitikinkite, kad kurso dalyvio naudotojo vardas arba el. pa\u0161to adresas yra teisingas ir bandykite dar kart\u0105.",
    "An error occurred. Please try again.": "\u012evyko klaida. Pra\u0161ome bandyti dar kart\u0105.",
    "An error occurred. Try again.": "\u012evyko klaida. Bandykite dar kart\u0105.",
    "An unexpected error occurred.  Please try again.": "\u012evyko nenumatyta klaida. Pra\u0161ome bandyti dar kart\u0105.",
    "April": "Balandis",
    "Are you sure you want to delete this comment?": "Ar j\u016bs tikrai norite panaikinti \u0161\u012f komentar\u0105?",
    "Are you sure you want to delete this post?": "Ar j\u016bs tikrai norite pa\u0161alinti \u0161\u012f prane\u0161im\u0105?",
    "Are you sure you want to delete this response?": "Ar j\u016bs tikrai norite panaikinti \u0161\u012f atsakym\u0105?",
    "Are you sure you want to delete this update?": "Ar j\u016bs tikrai norite pa\u0161alinti \u0161\u012f atnaujinim\u0105?",
    "Are you sure you want to delete {email} from the course team for \u201c{container}\u201d?": "Ar tikrai norite pa\u0161alinti {email} i\u0161 \u201c{container}\u201d kurso komandos?",
    "Are you sure you want to delete {email} from the library \u201c{container}\u201d?": "Ar tikrai norite pa\u0161alinti {email} i\u0161 bibliotekos \u201c{container}\u201d?",
    "Are you sure you want to restrict {email} access to \u201c{container}\u201d?": "Ar tikrai norite apriboti {email} prieig\u0105 prie \u201c{container}\u201d?",
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "Ar j\u016bs tikrai norite pa\u0161alinti \u0161\u012f komponent\u0105? \u0160io veiksmo nebus galima at\u0161aukti.\n\nTaip pat bet koks turinys, susietas su \u0161iuo komponentu, gali nebeveikti (pvz., gali b\u016bti nerodomi paveiksl\u0117liai arba gali neveikti nuorodos)",
    "As part of the verification process, you take a photo of both your face and a government-issued photo ID. Our authorization service confirms your identity by comparing the photo you take with the photo on your ID.": "Nor\u0117dami gauti patvirtinim\u0105 j\u016bs nufotografuojate savo veid\u0105 ir vald\u017eios institucijos i\u0161duot\u0105 asmens tapatyb\u0117s dokument\u0105 su nuotrauka. M\u016bs\u0173 leidim\u0173 i\u0161davimo tarnyba patvirtina j\u016bs\u0173 asmenyb\u0119 palyginusi j\u016bs\u0173 daryt\u0105 nuotrauk\u0105 su nuotrauka asmens tapatyb\u0117s dokumente.  ",
    "Assign students to cohorts by uploading a CSV file.": "Priskirkite kurso dalyvius kohortoms \u012fkeldami CSV fail\u0105. ",
    "Associated Content Group": "Susijusi turinio grup\u0117 ",
    "August": "Rugpj\u016btis",
    "Automatic": "Automatinis",
    "Available %s": "Galimi %s",
    "Back to sign in": "Gr\u012f\u017eti \u012f prisijungim\u0105",
    "Be sure your entire face is inside the frame": "\u012esitikinkite, kad visas j\u016bs\u0173 veidas telpa \u012f kadr\u0105",
    "Before proceeding, please confirm that your details match": "Prie\u0161 t\u0119siant pra\u0161ome patvirtinti, kad j\u016bs\u0173 duomenys atitinka ",
    "Blockquote": "Citatos blokas",
    "Blockquote (Ctrl+Q)": "\u012etrauka (Ctrl+Q)",
    "Bold (Ctrl+B)": "Pary\u0161kintas (Ctrl+B)",
    "Bulleted List (Ctrl+U)": "Su\u017eenklintas s\u0105ra\u0161as (Ctrl+U)",
    "Can we match the photo you took with the one on your ID?": "Ar mes gal\u0117site sulyginti j\u016bs\u0173 nuotrauk\u0105 su nuotrauka, esan\u010dia ant asmens tapatyb\u0117s dokumento?",
    "Cancel": "At\u0161aukti",
    "Cancel enrollment code": "At\u0161aukti registracijos kod\u0105",
    "Certificate name is required.": "Sertifikato pavadinimas yra privalomas.",
    "Change Manually": "Keisti rankiniu b\u016bdu",
    "Change My Email Address": "Keisti mano el. pa\u0161to adres\u0105",
    "Change image": "Pakeisti paveiksl\u0105",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Etap\u0173 pakeitimai, kurie n\u0117ra pasirinkti kaip u\u017eduoties dalis, nebus i\u0161saugoti.",
    "Check Your Email": "Pasitikrinkite el. pa\u0161t\u0105",
    "Check the highlighted fields below and try again.": "Patikrinkite pa\u017eym\u0117tus laukus ir bandykite dar kart\u0105.",
    "Check this box to receive an email digest once a day notifying you about new, unread activity from posts you are following.": "Pa\u017eym\u0117kite \u0161\u012f langel\u012f, jei pageidaujate gauti vien\u0105 el. lai\u0161k\u0105 per dien\u0105, prane\u0161ant\u012f apie j\u016bs\u0173 stebim\u0173 prane\u0161im\u0173 naujus, neperskaitytus \u012fra\u0161us.",
    "Checkout": "Atsiskaitymas",
    "Checkout with PayPal": "Atsiskaityti su PayPal",
    "Checkout with {processor}": "Atsiskaityti su {processor}",
    "Choose": "Pasirinkti",
    "Choose a .csv file": "Pasirinkti .csv fail\u0105",
    "Choose a Date": "Pasirinkite dat\u0105",
    "Choose a Time": "Pasirinkite laik\u0105",
    "Choose a content group to associate": "Pasirinkite turinio grup\u0119, su kuria susiesite",
    "Choose a time": "Pasirinkite laik\u0105",
    "Choose all": "Pasirinkti visus",
    "Chosen %s": "Pasirinktas %s",
    "Clear search": "Valyti paie\u0161k\u0105",
    "Clear search results": "I\u0161trinti paie\u0161kos rezultatus",
    "Click to change": "Spustel\u0117kite nor\u0117dami pakeisti",
    "Click to choose all %s at once.": "Spustel\u0117kite, kad i\u0161 karto pasirinktum\u0117te visus %s.",
    "Click to edit": "Pragtelti redagavimui",
    "Click to remove all chosen %s at once.": "Spustel\u0117kite, kad i\u0161 karto pa\u0161alintum\u0117te visus pasirinktus %s.",
    "Close": "U\u017edaryti",
    "Code Sample (Ctrl+K)": "Kodo pavyzdys (Ctrl+K)",
    "Cohort Assignment Method": "Priskyrimo kohortoms metodas",
    "Cohort Name": "Kohortos pavadinimas",
    "Cohorts Disabled": "Kohortos i\u0161jungtos",
    "Cohorts Enabled": "Kohortos \u012fjungtos",
    "Confirm": "Patvirtinti",
    "Congratulations! You are now verified on %(platformName)s!": "Sveikiname! Dabar j\u016bs\u0173 duomenys patvirtinti %(platformName)s aplinkoje!",
    "Copy Email To Editor": "El. lai\u0161k\u0105 nukopijuoti \u012f rengykl\u0119",
    "Correct failed component": "Pataisyti neveikiant\u012f komponent\u0105",
    "Could not find users associated with the following identifiers:": "Nerasti naudotojai, susij\u0119 su \u0161iais identifikatoriais:",
    "Could not retrieve download url.": "Nepavyko nuskaityti atsiuntimo url nuorodos.",
    "Could not retrieve upload url.": "Nepavyko nuskaityti \u012fk\u0117limo url nuorodos.",
    "Could not submit order": "Nepavyko pateikti u\u017esakymo.",
    "Could not submit photos": "Nepavyko pateikti nuotrauk\u0173.",
    "Country": "\u0160alis",
    "Course Credit Requirements": "Reikalavimai norint gauti kurso kredit\u0105 ",
    "Course Index": "Kurso indeksas",
    "Course Number": "Kurso numeris/kodas",
    "Course Number Override": "Kurso numerio/kodo keitimas",
    "Course Title": "Kurso pavadinimas",
    "Course pacing cannot be changed once a course has started.": "Prasid\u0117jusio kurso tempo pakeisti negalima.",
    "Create": "Sukurti",
    "Create Re-run": "Sukurti pakartojim\u0105",
    "Create a New Team": "Kurti nauj\u0105 komand\u0105",
    "Create a content group": "Sukurti turinio grup\u0119",
    "Create a new team if you can't find an existing team to join, or if you would like to learn with friends you know.": "Sukurkite nauj\u0105 komand\u0105, jei nerandate prie ko prisijungti arba jei norite mokytis su pa\u017e\u012fstamais draugais.",
    "Create an account using": "Sukurti paskyr\u0105 naudojantis",
    "Creating missing groups": "Tr\u016bkstam\u0173 grupi\u0173 k\u016brimas",
    "Criterion Added": "Prid\u0117tas kriterijus",
    "Criterion Deleted": "Kriterijus pa\u0161alintas",
    "Current conversation": "Dabartinis pokalbis",
    "Current tab": "Dabartin\u0117 kortel\u0117",
    "Date Added": "\u012ek\u0117limo data",
    "December": "Gruodis",
    "Delete": "Pa\u0161alinti",
    "Delete File Confirmation": "Failo pa\u0161alinimo patvirtinimas",
    "Delete this %(item_display_name)s?": "Pa\u0161alinti \u0161\u012f %(item_display_name)s?",
    "Delete this team?": "\u0160alinti \u0161i\u0105 komand\u0105?",
    "Deleted Content Group": "Pa\u0161alinta turinio grup\u0117",
    "Deleting this %(item_display_name)s is permanent and cannot be undone.": "U\u017eduotis \"%(item_display_name)s\" pa\u0161alinama galutinai ir neat\u0161aukiamai.",
    "Do you want to allow this student ('{student_id}') to skip the entrance exam?": "Ar norite leisti \u0161iam kurso dalyviui ({student_id}) praleisti stojam\u0105j\u012f egzamin\u0105?",
    "Does the name on your ID match your account name: %(fullName)s?": "Ar j\u016bs\u0173 vardas ir pavard\u0117 asmens tapatyb\u0117s dokumente sutampa su j\u016bs\u0173  vardu ir pavarde paskyroje: %(fullName)s?",
    "Does the photo of you show your whole face?": "Ar nuotraukoje matyti visas j\u016bs\u0173 veidas?",
    "Don't see your picture? Make sure to allow your browser to use your camera when it asks for permission.": "Nematote savo nuotraukos? \u012esitikinkite, kad leid\u017eiate nar\u0161yklei naudoti vaizdo kamer\u0105 kai ji pra\u0161o leidimo.",
    "Donate": "Paremti",
    "Double-check that your webcam is connected and working to continue.": "Nor\u0117dami t\u0119sti, prijunkite vaizdo kamer\u0105.",
    "Drop target image": "Pad\u0117ti paskirties paveiksl\u0105",
    "Due Date": "Pabaigos data",
    "Due date cannot be before start date.": "Pabaigos data negali b\u016bti ankstesn\u0117 u\u017e prad\u017eios dat\u0105.",
    "Duration (sec)": "Trukm\u0117 (s)",
    "Edit Team": "Redaguoti komand\u0105",
    "Edit Your Name": "Redaguoti vard\u0105",
    "Edit this certificate?": "Redaguoti \u0161\u012f sertifikat\u0105?",
    "Editable": "Redaguojamas",
    "Education Completed": "Pasiektas i\u0161silavinimas",
    "Email": "El. pa\u0161tas",
    "Emails successfully sent. The following users are no longer enrolled in the course:": "El. lai\u0161kai i\u0161si\u0173sti s\u0117kmingai. \u0160ie naudotojai i\u0161braukti i\u0161 kurso s\u0105ra\u0161o:",
    "Enable Cohorts": "\u012ejungti kohortas",
    "Engage with posts": "Steb\u0117ti \u012fra\u0161us",
    "Enrolling you in the selected course": "J\u016bs u\u017eregistruojami \u012f pasirinkt\u0105 kurs\u0105",
    "Ensure that you can see your photo and read your name": "U\u017etikrinkite, kad j\u016bs\u0173 nuotrauka gerai matoma, o vardas ir pavard\u0117 yra \u012fskaitomi",
    "Enter Due Date and Time": "\u012evesti pateikimo dat\u0105 ir laik\u0105",
    "Enter Start Date and Time": "\u012evesti prad\u017eios dat\u0105 ir laik\u0105",
    "Enter a student's username or email address.": "\u012evesti kurso dalyvio naudotojo vard\u0105 arba el. pa\u0161to adres\u0105.",
    "Enter a username or email.": "\u012evesti naudotojo vard\u0105 arba el. pa\u0161t\u0105",
    "Enter team description.": "\u012eveskite komandos apra\u0161\u0105.",
    "Enter team name.": "\u012eveskite komandos pavadinim\u0105.",
    "Enter the enrollment code.": "\u012eveskite registracijos kod\u0105.",
    "Enter the name of the cohort": "\u012era\u0161ykite kohortos pavadinim\u0105",
    "Enter the page number you'd like to quickly navigate to.": "\u012eveskite puslapio numer\u012f, \u012f kur\u012f norite patekti.",
    "Enter username or email": "\u012evesti naudotojo vard\u0105 arba el. pa\u0161t\u0105",
    "Entrance exam attempts is being reset for student '{student_id}'.": "Nustatoma, kad kurso dalyvis \"{student_id}\" gal\u0117t\u0173 i\u0161 naujo laikyti stojam\u0105j\u012f egzamin\u0105.",
    "Entrance exam state is being deleted for student '{student_id}'.": "\u0160alinama kurso dalyvio \"{student_id}\" stojamojo egzamino b\u016bsena.",
    "Error": "Klaida",
    "Error adding user": "Klaida pridedant naudotoj\u0105",
    "Error adding/removing users as beta testers.": "Klaida pridedant / \u0161alinant naudotojus kaip beta versijos bandytojus.",
    "Error changing user's permissions.": "Klaida kei\u010diant naudotojo teises.",
    "Error deleting entrance exam state for student '{student_id}'. Make sure student identifier is correct.": "Klaida \u0161alinant kurso dalyvio \"{student_id}\" stojamojo egzamino b\u016bsen\u0105. \u012esitikinkite, ar kurso dalyvio indentifikacinis numeris yra teisingas.",
    "Error enrolling/unenrolling users.": "Klaida \u012ftraukiant \u012f s\u0105ra\u0161\u0105 / i\u0161braukiant i\u0161 s\u0105ra\u0161o naudotojus.",
    "Error generating grades. Please try again.": "Klaida generuojant \u012fvertinim\u0105. Pra\u0161ome bandyti dar kart\u0105.",
    "Error generating list of students who may enroll. Please try again.": "Klaida generuojant kurso dalyvi\u0173, kurie gali u\u017esiregistruoti, s\u0105ra\u0161\u0105. Pra\u0161ome bandyti dar kart\u0105.",
    "Error generating problem grade report. Please try again.": "Klaida generuojant u\u017eduoties vertinimo ataskait\u0105. Pra\u0161ome bandyti dar kart\u0105.",
    "Error generating proctored exam results. Please try again.": "Klaida generuojant stebimo egzamino rezultatus. Pra\u0161ome bandyti dar kart\u0105.",
    "Error generating student profile information. Please try again.": "Klaida formuojant kurso dalyvi\u0173 profilio informacij\u0105. Pra\u0161ome bandyti dar kart\u0105.",
    "Error generating survey results. Please try again.": "Klaida generuojant apklausos rezultatus. Pra\u0161ome bandyti dar kart\u0105.",
    "Error getting entrance exam task history for student '{student_id}'. Make sure student identifier is correct.": "Klaida gaunant kurso dalyvio \"{student_id}\" stojamojo egzamino u\u017eduoties istorij\u0105. \u012esitikinkite, ar kurso dalyvio indentifikacinis numeris yra teisingas.",
    "Error getting issued certificates list.": "Klaida gaunant i\u0161duot\u0173 sertifikat\u0173 s\u0105ra\u0161\u0105.",
    "Error getting student list.": "Klaida gaunant kurso dalyvi\u0173 s\u0105ra\u0161\u0105.",
    "Error listing task history for this student and problem.": "Klaida pateikiant \u0161io kurso dalyvio \u0161io u\u017edavinio u\u017eduo\u010di\u0173 istorij\u0105.",
    "Error removing user": "Klaida pa\u0161alinant naudotoj\u0105",
    "Error resetting entrance exam attempts for student '{student_id}'. Make sure student identifier is correct.": "Klaida nustatant, kad kurso dalyvis \"{student_id}\" gal\u0117t\u0173 i\u0161 naujo laikyti stojam\u0105j\u012f egzamin\u0105. \u012esitikinkite, ar kurso dalyvio indentifikacinis numeris yra teisingas.",
    "Error retrieving grading configuration.": "Klaida nuskaitant \u012fvertinim\u0105.",
    "Error sending email.": "Klaida siun\u010diant el. lai\u0161k\u0105.",
    "Error starting a task to rescore entrance exam for student '{student_id}'. Make sure that entrance exam has problems in it and student identifier is correct.": "Klaida pradedant perskai\u010diuoti kurso dalyvio \"{student_id}\" stojamojo egzamino \u012fvertinim\u0105. \u012esitikinkite, ar stojamamajame egzamine yra u\u017eduo\u010di\u0173 ir kurso dalyvio identifikacinis numeris yra teisingas.",
    "Error while generating certificates. Please try again.": "Klaida generuojant sertifikatus. Pra\u0161ome bandyti dar kart\u0105.",
    "Error while regenerating certificates. Please try again.": "Generuojant sertifikatus \u012fvyko klaida. Pra\u0161ome bandyti dar kart\u0105.",
    "Error:": "Klaida:",
    "Error: You cannot remove yourself from the Instructor group!": "Klaida: j\u016bs negalite pa\u0161alinti sav\u0119s i\u0161 lektori\u0173 grup\u0117s!",
    "Errors": "Klaidos",
    "Explore your course!": "Per\u017ei\u016br\u0117kite kurs\u0105!",
    "February": "Vasaris",
    "File Name": "Failo pavadinimas",
    "File {filename} exceeds maximum size of {maxFileSizeInMBs} MB": "Failas {filename} vir\u0161ija maksimal\u0173 {maxFileSizeInMBs} MB dyd\u012f.",
    "Files must be in JPEG or PNG format.": "Failai turi b\u016bti tik toki\u0173 format\u0173: JPEG arba PNG.",
    "Filter": "Filtras",
    "Find discussions": "Ie\u0161koti diskusij\u0173",
    "Frequently Asked Questions": "Da\u017enai u\u017eduodami klausimai",
    "Full Name": "Vardas Pavard\u0117",
    "Fullscreen": "Visas ekranas",
    "Gender": "Lytis",
    "Go to your Dashboard": "Eiti \u012f informacin\u012f puslap\u012f",
    "Government-Issued Photo ID": "Vald\u017eios institucij\u0173 i\u0161duotas asmens tapatyb\u0117s dokumentas su nuotrauka",
    "Grace period must be specified in HH:MM format.": "Vertinimo laikotarpis turi b\u016bti nurodytas naudojant VV:MM format\u0105.",
    "Grade": "\u012evertinimas",
    "Group %s": "Grup\u0117 %s",
    "Group A": "A grup\u0117",
    "Group B": "B grup\u0117",
    "Group Configuration name is required.": "B\u016btinas grupin\u0117s konfig\u016bracijos pavadinimas.",
    "Group name is required": "B\u016btinas grup\u0117s pavadinimas",
    "Heading": "Pavadinimas",
    "Heading (Ctrl+H)": "Pavadinimas (Ctrl+H)",
    "Hide": "Sl\u0117pti",
    "Hide Deprecated Settings": "Sl\u0117pti nerekomenduojamas nuostatas",
    "Hide Discussion": "Sl\u0117pti diskusij\u0105",
    "Hide notes": "Sl\u0117pti pastabas",
    "Highlighted text": "Pa\u017eym\u0117tas tekstas",
    "Horizontal Rule (Ctrl+R)": "Horizontali taisykl\u0117  (Ctrl+R)",
    "How to use %(platform_name)s discussions": "Kaip naudotis %(platform_name)s diskusijomis",
    "Hyperlink (Ctrl+L)": "Nuoroda (Ctrl+L)",
    "If you make significant changes, make sure you notify members of the team before making these changes.": "Jei ketinate i\u0161 esm\u0117s k\u0105 nors pakeisti, prie\u0161 tai darydami prane\u0161kite kitiems komandos nariams.",
    "Image": "Paveikslas",
    "Image (Ctrl+G)": "Vaizdas (Ctrl+G)",
    "Image Upload Error": "Paveikslo \u012fk\u0117limo klaida",
    "Image must be in PNG format": "Paveikslas turi b\u016bti PNG formato",
    "Image must be in PNG format.": "Paveikslas turi b\u016bti PNG formato.",
    "In Progress": "Vykdoma",
    "Insert Hyperlink": "\u012eterpti hipersait\u0105 ",
    "Is your name on your ID readable?": "Ar j\u016bs\u0173 vardas ir pavard\u0117 asmens tapatyb\u0117s dokumente yra \u012fskaitomi?",
    "Italic (Ctrl+I)": "Pasvirasis (Ctrl+I)",
    "January": "Sausis",
    "Joined %(date)s": "Prisijung\u0117 %(date)s",
    "July": "Liepa",
    "June": "Bir\u017eelis",
    "KB": "KB",
    "Key should only contain letters, numbers, _, or -": "Raktas turi b\u016bti sudarytas tik i\u0161 raid\u017ei\u0173, skai\u010di\u0173 bei _ ar - simboli\u0173",
    "LEARN MORE": "SU\u017dINOTI DAUGIAU",
    "Language": "Kalba",
    "Large": "Didelis",
    "Last Activity %(date)s": "Paskutin\u0117 veikla %(date)s",
    "Last Edited:": "Paskutin\u012f kart\u0105 redaguota:",
    "Learners who require verification must pass the selected checkpoint to see the content in this unit. Learners who do not require verification see this content by default.": "Kad kurso dalyviai, kuriems reikalingas tapatyb\u0117s patvirtinimas, gal\u0117t\u0173 matyti \u0161io skyriaus turin\u012f, turi b\u016bti atliktas pasirinktas tapatyb\u0117s patvirtinimas. Numatyta, kad \u0161\u012f turin\u012f matyt\u0173 kurso dalyviai, kuriems nereikalingas tapatyb\u0117s patvirtinimas.",
    "Leave this team?": "I\u0161eiti i\u0161 \u0161ios komandos?",
    "Less": "Ma\u017eiau",
    "Library User": "Bibliotekos naudotojas",
    "Linking": "Sujungiama",
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "Nuorodos sugeneruotos pagal u\u017eklaus\u0105 ir d\u0117l kurso dalyvi\u0173 informacijos konfidencialumo bus panaikintos per 5 minutes.",
    "List item": "S\u0105ra\u0161o punktas",
    "Live view of webcam": "Tiesioginis internetin\u0117s kameros vaizdas",
    "Load Another File": "\u012ekelti kit\u0105 fail\u0105",
    "Load all responses": "\u012ekelti visus atsakymus",
    "Loading": "\u012ekeliama",
    "Loading content": "\u012ekeliamas turinys",
    "Loading data...": "\u012ekeliami duomenys...",
    "Loading more threads": "\u012ekeliama daugiau gij\u0173",
    "Loading your courses": "J\u016bs\u0173 kurs\u0173 \u012fk\u0117limas",
    "Location in Course": "Vieta kurse",
    "MB": "MB",
    "Make sure that the full name on your account matches the name on your ID.": "\u012esitikinkite, kad j\u016bs\u0173 vardas ir pavard\u0117 paskyroje atitinka asmens tapatyb\u0117s dokument\u0105.",
    "Make sure we can verify your identity with the photos and information you have provided.": "\u012esitikinkite, kad j\u016bs\u0173 pateiktos nuotraukos ir informacija pad\u0117s mums patvirtinti j\u016bs\u0173 tapatyb\u0119.",
    "Make sure your ID is well-lit": "\u012esitikinkite, kad j\u016bs\u0173 asmens tapatyb\u0117s dokumentas yra gerai ap\u0161viestas",
    "Make sure your face is well-lit": "\u012esitikinkite, kad j\u016bs\u0173 veidas yra gerai ap\u0161viestas",
    "Manual": "Rankinis",
    "March": "Kovas",
    "Mark enrollment code as unused": "Pa\u017eym\u0117ti registracijos kod\u0105 kaip nepanaudot\u0105",
    "Markdown Editing Help": "Markdown redagavimo pagalba",
    "Max file size exceeded": "Vir\u0161ytas maksimalus failo dydis.",
    "May": "Gegu\u017e\u0117",
    "Membership": "Naryst\u0117",
    "Message:": "\u017dinut\u0117:",
    "Midnight": "Vidurnaktis",
    "Module state successfully deleted.": "Modulio b\u016bsena s\u0117kmingai pa\u0161alinta.",
    "More": "Daugiau",
    "Must complete verification checkpoint": "B\u016btina pereiti patvirtinimo kontrolin\u012f ta\u0161k\u0105",
    "Name": "Vardas",
    "New Address": "Naujas adresas",
    "Next": "Kitas",
    "Next: %(nextStepTitle)s": "Toliau: %(nextStepTitle)s",
    "No Content Group": "N\u0117ra turinio grup\u0117s",
    "No Flash Detected": "Flash nerastas",
    "No Webcam Detected": "Vaizdo kamera nerasta",
    "No tasks currently running.": "\u0160iuo metu nevykdoma n\u0117 viena u\u017eduotis.",
    "None": "N\u0117ra",
    "Noon": "Vidurdienis",
    "Not Selected": "Nepasirinkta",
    "Not able to set passing grade to less than %(minimum_grade_cutoff)s%.": "Negalima nustatyti minimalaus \u012fvertinimo, ma\u017eesnio nei %(minimum_grade_cutoff)s%.",
    "Not in Use": "Nenaudojama",
    "Not selected": "Nepasirinkta",
    "Note": "Pastaba",
    "Note: You are %s hour ahead of server time.": [
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valanda daugiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valandomis daugiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valand\u0173 daugiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valand\u0173 daugiau nei serverio laikrodis."
    ],
    "Note: You are %s hour behind server time.": [
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valanda ma\u017eiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valandomis ma\u017eiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valand\u0173 ma\u017eiau nei serverio laikrodis.",
      "Pastaba: J\u016bs\u0173 laikrodis rodo %s valand\u0173 ma\u017eiau nei serverio laikrodis."
    ],
    "Noted in:": "Pa\u017eym\u0117ta:",
    "Notes": "Pastabos",
    "Notes hidden": "Pastabos pasl\u0117ptos",
    "Notes visible": "Pastabos matomos",
    "November": "Lapkritis",
    "Now": "Dabar",
    "Number Sent": "I\u0161si\u0173stas kiekis",
    "Numbered List (Ctrl+O)": "Sunumeruotas s\u0105ra\u0161as (Ctrl+O)",
    "OK": "Taip",
    "October": "Spalis",
    "One or more rescheduling tasks failed.": "Nepavyko atid\u0117ti vieno ar daugiau termin\u0173.",
    "Only properly formatted .csv files will be accepted.": "Priimami tik tinkamai suformatuoti .csv failai.",
    "Option Deleted": "Parametras pa\u0161alintas",
    "Optional Characteristics": "Neb\u016btinos charakteristikos",
    "Order History": "U\u017esakymo istorija",
    "Password": "Slapta\u017eodis",
    "Password assistance": "Pagalba d\u0117l slapta\u017eod\u017eio",
    "Photo Captured successfully.": "S\u0117kmingai nufotografuota.",
    "Photo ID": "Asmens tapatyb\u0117s dokumentas su nuotrauka",
    "Photo of %(fullName)s": "%(fullName)s nuotrauka",
    "Photo of %(fullName)s's ID": "%(fullName)s asmens tapatyb\u0117s dokumento nuotrauka",
    "Photo requirements:": "Reikalavimai nuotraukai:",
    "Photos don't meet the requirements?": "Nuotraukos neatitinka reikalavim\u0173?",
    "Placeholder": "Vieta\u017eenklis",
    "Please address the errors on this page first, and then save your progress.": "Pra\u0161ome pirmiau i\u0161taisyti klaidas \u0161iame puslapyje ir tik tada i\u0161saugoti savo darb\u0105.",
    "Please do not use any spaces in this field.": "Pra\u0161ome \u0161iame lauke nenaudoti joki\u0173 tarp\u0173.",
    "Please do not use any spaces or special characters in this field.": "Pra\u0161ome \u0161iame lauke nenaudoti joki\u0173 tarp\u0173 arba speciali\u0173j\u0173 simboli\u0173.",
    "Please enter a problem location.": "Pra\u0161ome \u012fvesti u\u017edavinio adres\u0105.",
    "Please enter a student email address or username.": "Pra\u0161ome \u012fvesti kurso dalyvio el. adres\u0105 arba naudotojo vard\u0105.",
    "Please enter a username or email.": "Pra\u0161ome \u012fvesti naudotojo vard\u0105 arba el. pa\u0161t\u0105.",
    "Please enter a valid donation amount.": "Pra\u0161ome \u012fvesti tinkam\u0105 aukos sum\u0105.",
    "Please enter an integer between %(min)s and %(max)s.": "\u012era\u0161ykite sveik\u0105j\u012f skai\u010di\u0173 nuo %(min)s iki %(max)s.",
    "Please enter an integer between 0 and 100.": "\u012era\u0161ykite sveik\u0105 skai\u010di\u0173 nuo 0 iki 100.",
    "Please enter an integer greater than 0.": "\u012era\u0161ykite sveik\u0105 skai\u010di\u0173, didesn\u012f u\u017e 0.",
    "Please enter non-negative integer.": "\u012era\u0161ykite ne neigiam\u0105 sveik\u0105 skai\u010di\u0173.",
    "Please enter valid start date and time.": "Pra\u0161ome \u012fvesti tinkam\u0105 prad\u017eios dat\u0105 ir laik\u0105.",
    "Please enter your %(field)s.": "Pra\u0161ome \u012fvesti savo %(field)s.",
    "Please follow the instructions here to upload a file elsewhere and link to it: {maxFileSizeRedirectUrl}": "Vadovaudamiesi \u0161iais nurodymais \u012fkelkite fail\u0105 kitur ir susiekite su juo: {maxFileSizeRedirectUrl}",
    "Please verify that you have uploaded a valid image (PNG and JPEG).": "Pra\u0161ome patikrinti, ar \u012fk\u0117l\u0117te teising\u0105 paveiksl\u0105 (PNG ir JPEG).",
    "Please verify that your webcam is connected and that you have allowed your browser to access it.": "Pra\u0161ome patikrinti, ar j\u016bs\u0173 vaizdo kamera yra prijungta ir j\u016bs\u0173 nar\u0161ykl\u0117 turi prieig\u0105 prie jos.",
    "Practice Proctored": "Bandomasis stebimasis",
    "Practice proctored Exam": "Bandomasis stebimasis egzaminas",
    "Preferred Language": "Pageidaujama kalba",
    "Prevent students from generating certificates in this course?": "Neleisti kurso dalyviams generuoti \u0161io kurso sertifikat\u0173?",
    "Previous": "Ankstesnis ",
    "Processing Re-run Request": "Vykdomas pra\u0161ymas pakartoti",
    "Proctored": "Stebimasis",
    "Proctored Exam": "Stebimasis egzaminas",
    "Professional Education": "Profesinis mokymas",
    "Professional Education Verified Certificate": " Tapatybe patvirtintas profesinio mokymo sertifikatas",
    "Publish": "Skelbti",
    "Queued": "Laukia savo eil\u0117s",
    "Reason field should not be left blank.": "Sprendimo laukas neturi b\u016bti paliktas tu\u0161\u010dias",
    "Receive updates": "Gaukite atnaujinimus",
    "Recent Activity": "Naujausia veikla",
    "Redo (Ctrl+Shift+Z)": "Atstatyti (Ctrl+Shift+Z)",
    "Redo (Ctrl+Y)": "Atstatyti (Ctrl+Y)",
    "Removal is in progress. To avoid errors, stay on this page until the process is complete.": "\u0160alinama. Likite \u0161iame puslapyje, kol bus pa\u0161alinta, kad ne\u012fvykt\u0173 klaida.",
    "Remove": "Pa\u0161alinti",
    "Remove all": "Pa\u0161alinti visus",
    "Remove this team member?": "\u0160alinti \u0161\u012f komandos nar\u012f?",
    "Removing": "\u0160alinama",
    "Requester": "U\u017eklaus\u0117jas",
    "Required field.": "B\u016btinas laukas.",
    "Reset Password": "Atkurti slapta\u017eod\u012f",
    "Restore enrollment code": "Gr\u0105\u017einti registracijos kod\u0105 ",
    "Retake Photo": "Fotografuotis i\u0161 naujo",
    "Retake Your Photos": "Fotografuokit\u0117s i\u0161 naujo",
    "Return and add email address": "Gr\u012f\u017eti ir prid\u0117ti el. pa\u0161to adres\u0105",
    "Return to Export": "Gr\u012f\u017eti prie eksportavimo",
    "Return to team listing": "Gr\u012f\u017eti \u012f komandos nari\u0173 s\u0105ra\u0161\u0105",
    "Review Your Photos": "Per\u017ei\u016br\u0117kite savo nuotraukas",
    "Review your info": "Per\u017ei\u016br\u0117kite savo duomenis",
    "Revoke access": "Panaikinti prieig\u0105",
    "Save": "I\u0161saugoti",
    "Save Changes": "I\u0161saugoti pakeitimus",
    "Save changes": "I\u0161saugoti pakeitimus",
    "Saved cohort": "Kohorta i\u0161saugota",
    "Saving": "\u012era\u0161oma",
    "Saving your email preference": "\u012era\u0161oma j\u016bs\u0173 el. pa\u0161to parinktis",
    "Saving...": "\u012era\u0161oma...",
    "Search": "Paie\u0161ka",
    "Search Results": "Paie\u0161kos rezultatai",
    "Search teams": "Ie\u0161koti komand\u0173",
    "Section": "Tema",
    "Select a Content Group": "Pasirinkti turinio grup\u0119",
    "Select a chapter": "Pasirinkti skyri\u0173",
    "Select a cohort": "Pasirinkti kohort\u0105",
    "Selected tab": "Pasirinkta kortel\u0117",
    "Sent By": "Nuo",
    "Sent By:": "Nuo:",
    "Sent To:": "Kam:",
    "September": "Rugs\u0117jis",
    "Set up your certificate": "Susikurkite sertifikat\u0105",
    "Settings": "Nustatymai",
    "Show": "Parodyti",
    "Show Deprecated Settings": "Rodyti nerekomenduojamas nuostatas",
    "Show Discussion": "Rodyti diskusij\u0105",
    "Show me other ways to sign in or register": "Pateikite, pra\u0161au, kitus variantus prisijungti arba prisiregistruoti",
    "Show notes": "Rodyti pastabas",
    "Showing all responses": "Rodomi visi atsakymai",
    "Sign in": "Prisijungti",
    "Sign in using %(providerName)s": "Prisijungti su %(providerName)s",
    "Sign in with %(providerName)s": "Prisijungti su %(providerName)s",
    "Signatory field(s) has invalid data.": "Para\u0161o lauke (laukuose) pateikti neteisingi duomenys.",
    "Sorry, no results were found.": "Atsipra\u0161ome, rezultat\u0173 nerasta.",
    "Sorted by": "Sur\u016b\u0161iuota pagal",
    "Specify an alternative to the official course title to display on certificates. Leave blank to use the official course title.": "Nurodykite alternatyv\u0173 kurso pavadinim\u0105, kuris bus \u012fra\u0161omas \u012f sertifikatus. Lauk\u0105 palikite tu\u0161\u010di\u0105, jei norite, kad \u012f sertifikatus b\u016bt\u0173 \u012fra\u0161omas oficialus kurso pavadinimas.",
    "Staff": "Personalas",
    "Start Date": "Prad\u017eios data",
    "Start generating certificates for all students in this course?": "Prad\u0117ti generuoti vis\u0173 \u0161io kurso dalyvi\u0173 sertifikatus?",
    "Start regenerating certificates for students in this course?": "Prad\u0117ti generuoti \u0161io kurso dalyviams sertifikatus?",
    "Starts": "Prasideda",
    "Starts: %(start_date)s": "Prasideda: %(start_date)s",
    "State": "B\u016bsena",
    "Status": "B\u016bsena",
    "Status of Your Response": "J\u016bs\u0173 pateikto darbo b\u016bsena",
    "Subject": "Tema",
    "Subject:": "Tema:",
    "Submit": "Pateikti",
    "Submitted": "Pateikta",
    "Subsection": "Potem\u0117",
    "Success": "Pavyko",
    "Successfully deleted student state for user {user}": "S\u0117kmingai panaikinta naudotojo {user} b\u016bsena",
    "Successfully enrolled and sent email to the following users:": "S\u0117kmingai \u012ftraukti \u012f s\u0105ra\u0161\u0105 ir i\u0161si\u0173sti el. lai\u0161kai \u0161iems naudotojams:",
    "Successfully enrolled the following users:": "S\u0117kmingai \u012ftraukti \u012f s\u0105ra\u0161\u0105 \u0161ie naudotojai:",
    "Successfully rescored problem for user {user}": "S\u0117kmingai perskai\u010diuotas naudotojo {user} u\u017edavinio \u012fvertinimas.",
    "Successfully reset the attempts for user {user}": "S\u0117kmingai nustatyta, kad naudotojas {user} gal\u0117t\u0173 bandyti i\u0161 naujo. ",
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "S\u0117kmingai i\u0161si\u0173sti registracijos el. lai\u0161kai \u0161iems naudotojams. Juos bus leista \u012ftraukti \u012f s\u0105ra\u0161\u0105, kai tik jie u\u017esiregistruos:",
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "S\u0117kmingai i\u0161si\u0173sti registracijos el. lai\u0161kai \u0161iems naudotojams. Jie bus \u012ftraukti \u012f s\u0105ra\u0161\u0105, kai tik u\u017esiregistruos:",
    "Successfully unlinked.": "S\u0117kmingai atjungta.",
    "Tags": "\u017dymos",
    "Tags:": "\u017dymos:",
    "Take Photo": "Fotografuoti",
    "Take Your Photo": "Fotografuokit\u0117s",
    "Take a Photo of Your ID": "Nufotografuokite savo tapatyb\u0117s dokument\u0105",
    "Take a photo of your ID": "Nufotografuokite savo tapatyb\u0117s dokument\u0105",
    "Take me to the main course page": "Atidarykite pagrindin\u012f kurso puslap\u012f",
    "Take me to the main library page": "Atidarykite pagrindin\u012f bibliotekos puslap\u012f",
    "Task ID": "U\u017eduoties indentifikatorius",
    "Task Progress": "U\u017eduoties pa\u017eanga",
    "Task Status": "U\u017eduoties b\u016bsena",
    "Task Type": "U\u017eduoties tipas",
    "Task inputs": "U\u017eduoties \u012fvestis",
    "Team Description (Required) *": "Komandos apra\u0161as (privalomas) *",
    "Team Name (Required) *": "Komandos pavadinimas (privalomas) *",
    "Team Search": "Komand\u0173 paie\u0161ka",
    "Team description cannot have more than 300 characters.": "Komandos apra\u0161as negali b\u016bti ilgesnis nei 300 simboli\u0173.",
    "Team member profiles": "Komandos nari\u0173 profiliai",
    "Team name cannot have more than 255 characters.": "Komandos pavadinimas negali b\u016bti ilgesnis nei 255 simboliai.",
    "Teams": "Komandos",
    "Thank you for submitting your photos. We will review them shortly. You can now sign up for any %(platformName)s course that offers verified certificates. Verification is good for one year. After one year, you must submit photos for verification again.": "D\u0117kojame u\u017e pateiktas nuotraukas. Netrukus jas per\u017ei\u016br\u0117sime. Dabar galite u\u017esiregistruoti \u012f bet kur\u012f %(platformName)s kurs\u0105, u\u017e kur\u012f i\u0161duodamas tapatybe patvirtintas sertifikatas. Patvirtinimas galioja vienerius metus. Pra\u0117jus metams v\u0117l tur\u0117site pateikti savo nuotraukas patvirtinimui.",
    "The cohort cannot be added": "Kohortos prid\u0117ti negalima",
    "The cohort cannot be saved": "Kohortos i\u0161saugoti nepavyko",
    "The country that team members primarily identify with.": "\u0160alis, su kuria komandos nariai pirmiausia tapatinasi.",
    "The course end date must be later than the course start date.": "Kurso pabaigos data turi b\u016bti v\u0117lesn\u0117 u\u017e prad\u017eios dat\u0105.",
    "The course must have an assigned start date.": "Kursui b\u016btina nustatyti prad\u017eios dat\u0105.",
    "The course start date must be later than the enrollment start date.": "Kurso prad\u017eios data turi b\u016bti v\u0117lesn\u0117 u\u017e registracijos prad\u017eios dat\u0105.",
    "The email address you've provided isn't formatted correctly.": "J\u016bs\u0173 pateiktas el. pa\u0161to adresas yra neteisingo formato.",
    "The enrollment end date cannot be after the course end date.": "Registracijos pabaigos data negali b\u016bti v\u0117lesn\u0117 nei kurso pabaigos data.",
    "The enrollment start date cannot be after the enrollment end date.": "Registracijos prad\u017eios data negali b\u016bti v\u0117lesn\u0117 nei registracijos pabaigos data.",
    "The file must be at least {size} in size.": "Failas turi b\u016bti bent {size} dyd\u017eio.",
    "The file must be smaller than {size} in size.": "Failas turi b\u016bti ma\u017eesnis negu {size} dyd\u017eio.",
    "The following email addresses and/or usernames are invalid:": "\u0160ie el. pa\u0161to adresai ir (arba) naudotoj\u0173 vardai negalioja:",
    "The following errors were generated:": "Generuotos \u0161ios klaidos:",
    "The following users are no longer enrolled in the course:": "\u0160ie naudotojai i\u0161braukti i\u0161 kurso s\u0105ra\u0161o:",
    "The following warnings were generated:": "Generuoti \u0161ie \u012fsp\u0117jimai:",
    "The language that team members primarily use to communicate with each other.": "Kalba, kuria komandos nariai pirmiausia bendrauja vienas su kitu.",
    "The minimum grade for course credit is not set.": "Minimalus \u012fvertinimas kurso kreditui gauti nenustatytas.",
    "The name of this signatory as it should appear on certificates.": "\u0160io pasira\u0161an\u010dio asmens pavard\u0117, kokia turi b\u016bti \u012fra\u0161yta \u012f sertifikatus.",
    "The organization that this signatory belongs to, as it should appear on certificates.": "Organizacijos, kuriai priklauso \u0161is pasira\u0161antis asmuo, pavadinimas, kuris turi b\u016bti \u012fra\u0161ytas \u012f sertifikatus.",
    "The raw error message is:": "Neapdorotas klaidos prane\u0161imas: ",
    "The selected content group does not exist": "Pasirinktos turinio grup\u0117s n\u0117ra",
    "The server could not be contacted.": "Nepavyko susisiekti su serveriu.",
    "The submission could not be removed from the grading pool.": "Darbas negali b\u016bti at\u0161auktas i\u0161 vertinimo.",
    "The {cohortGroupName} cohort has been created. You can manually add students to this cohort below.": "Sukurta {cohortGroupName} kohorta. \u017demiau galite prie \u0161ios kohortos rankiniu b\u016bdu prid\u0117ti kurso dalyvius. ",
    "There has been an error processing your survey.": "Atliekant j\u016bs\u0173 u\u017eklaus\u0105 \u012fvyko klaida.",
    "There has been an error while exporting.": "Eksportuojant \u012fvyko klaida.",
    "There has been an error with your export.": "Eksportuojant \u012fvyko klaida.",
    "There is no email history for this course.": "\u0160iame kurse n\u0117ra kaupiama el. lai\u0161k\u0173 istorija.",
    "There must be at least one group.": "Turi b\u016bti bent viena grup\u0117.",
    "There must be one cohort to which students can automatically be assigned.": "Privalo b\u016bti viena kohorta, \u012f kuri\u0105 kurso dalyviai b\u016bt\u0173 priskiriami automati\u0161kai.",
    "There was a problem creating the report. Select \"Create Executive Summary\" to try again.": "I\u0161kilo problema kuriant ataskait\u0105. Nor\u0117dami bandyti dar kart\u0105, pasirinkite \"Kurti vykdom\u0105j\u0105 santrauk\u0105\".",
    "There was an error changing the user's role": "\u012evyko klaida kei\u010diant naudotojo vaidmen\u012f.",
    "There was an error obtaining email content history for this course.": "Klaida gaunant \u0161io kurso el. lai\u0161k\u0173 turinio istorij\u0105.",
    "There was an error obtaining email task history for this course.": "Klaida gaunant \u0161io kurso el. lai\u0161k\u0173 u\u017eduo\u010di\u0173 istorij\u0105.",
    "There was an error, try searching again.": "\u012evyko klaida, bandykite ie\u0161koti dar kart\u0105.",
    "There were errors reindexing course.": "Kurso perindeksavimo klaida.",
    "There's already another assignment type with this name.": "Toks u\u017eduoties tipo pavadinimas jau egzistuoja.",
    "These users were not added as beta testers:": "\u0160ie naudotojai nebuvo prid\u0117ti kaip beta versijos bandytojai:",
    "These users were not affiliated with the course so could not be unenrolled:": "\u0160ie naudotojai nepriskirti kursui ir tod\u0117l negali b\u016bti \u012ftraukti \u012f s\u0105ra\u0161\u0105:",
    "These users were not removed as beta testers:": "\u0160ie naudotojai nebuvo pa\u0161alinti kaip beta versijos bandytojai:",
    "These users were successfully added as beta testers:": "\u0160ie naudotojai buvo s\u0117kmingai prid\u0117ti kaip beta versijos bandytojai:",
    "These users were successfully removed as beta testers:": "\u0160ie naudotojai buvo s\u0117kmingai pa\u0161alinti kaip beta versijos bandytojai:",
    "These users will be allowed to enroll once they register:": "\u0160iuos naudotojus bus leista \u012ftraukti \u012f s\u0105ra\u0161\u0105, kai tik jie u\u017esiregistruos:",
    "These users will be enrolled once they register:": "\u0160ie naudotojai bus \u012ftraukti \u012f s\u0105ra\u0161\u0105, kai tik u\u017esiregistruos: ",
    "This action cannot be undone.": "\u0160is veiksmas negal\u0117s b\u016bti v\u0117liau at\u0161auktas.",
    "This assessment could not be submitted.": "Nepavyko pateikti \u0161io \u012fvertinimo.",
    "This certificate has already been activated and is live. Are you sure you want to continue editing?": "\u0160is sertifikatas jau aktyvintas ir prieinamas kurso dalyviui. Ar tikrai norite toliau redaguoti?",
    "This feedback could not be submitted.": "Nepavyko pateikti \u0161io atsiliepimo.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Tai yra s\u0105ra\u0161as prieinam\u0173 %s. D\u0117\u017eut\u0117je \u017eemiau pa\u017eym\u0117dami kelet\u0105 i\u0161 j\u0173 ir paspausdami \u201ePasirinkti\u201c rodykl\u0119 tarp dviej\u0173 d\u0117\u017eu\u010di\u0173 j\u016bs galite pasirinkti kelet\u0105 i\u0161 j\u0173.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Tai yra s\u0105ra\u0161as pasirinkt\u0173 %s. D\u0117\u017eut\u0117je \u017eemiau pa\u017eym\u0117dami kelet\u0105 i\u0161 j\u0173 ir paspausdami \u201ePa\u0161alinti\u201c rodykl\u0119 tarp dviej\u0173 d\u0117\u017eu\u010di\u0173 j\u016bs galite pa\u0161alinti kelet\u0105 i\u0161 j\u0173.",
    "This problem could not be saved.": " Nepavyko \u012fra\u0161yti \u0161ios u\u017eduoties.",
    "This response could not be saved.": "Darbo \u012fra\u0161yti nepavyko.",
    "This response could not be submitted.": "Darbo pateikti nepavyko.",
    "This response has been saved but not submitted.": "J\u016bs\u0173 darbas i\u0161saugotas, bet nepateiktas.",
    "This response has not been saved.": "J\u016bs\u0173 darbas nei\u0161saugotas.",
    "This section could not be loaded.": "Nepavyko \u012fkelti \u0161ios temos.",
    "This team does not have any members.": "\u0160ioje komandoje n\u0117ra nari\u0173.",
    "This team is full.": "\u0160i komanda pilna.",
    "Time Allotted (HH:MM):": "Skirtas laikas (VV:MM):",
    "Time Sent": "Siuntimo laikas",
    "Time Sent:": "Siuntimo laikas:",
    "Timed": "Nustatyto laiko",
    "Tips on taking a successful photo": "Patarimai, kaip padaryti ger\u0105 nuotrauk\u0105",
    "Titles more than 100 characters may prevent students from printing their certificate on a single page.": "Kai pavadinimai yra ilgesni nei 100 simboli\u0173, kurso dalyviams gali nepavykti atsispausdinti sertifikato viename puslapyje.",
    "Today": "\u0160iandien",
    "Toggle Notifications Setting": "Pasirinkti prane\u0161im\u0173 nustatym\u0105",
    "Tomorrow": "Rytoj",
    "Topic": "Tema",
    "Topics": "Temos",
    "Total": "I\u0161 viso",
    "Type": "Tipas",
    "Type into this box to filter down the list of available %s.": "Ra\u0161ykite \u012f \u0161i\u0105 d\u0117\u017eut\u0119, kad i\u0161filtruotum\u0117te prieinam\u0173 %s s\u0105ra\u0161\u0105.",
    "Undo (Ctrl+Z)": "At\u0161aukti (Ctrl+Z)",
    "Undo Changes": "At\u0161aukti pakeitimus",
    "Ungraded": "Ne\u012fvertinta",
    "Unit": "Skyrius",
    "Unknown": "Ne\u017einoma",
    "Unlinking": "Atsijungiama",
    "Unnamed Option": "Ne\u012fvardytas parametras",
    "Update": "Atnaujinti",
    "Updating with latest library content": "Atnaujinama naujausiu bibliotekos turiniu",
    "Upload File": "\u012ekelti fail\u0105",
    "Upload File and Assign Students": "\u012ekelti fail\u0105 ir priskirti kurso dalyvius",
    "Upload New File": "\u012ekelti nauj\u0105 fail\u0105",
    "Upload an image": "\u012ekelkite paveiksl\u0105",
    "Upload completed": "\u012ek\u0117limas baigtas",
    "Upload failed": "Nepavyko \u012fkelti",
    "Upload is in progress. To avoid errors, stay on this page until the process is complete.": "\u012ekeliama. Likite \u0161iame puslapyje, kol bus \u012fkelta, kad ne\u012fvykt\u0173 klaida.",
    "Upload signature image.": "\u012ekelkite para\u0161o paveiksl\u0105.",
    "Upload your course image.": "\u012ekelkite savo kurso paveiksl\u0117l\u012f.",
    "Uploading": "\u012ekeliama",
    "Use your webcam to take a photo of your face. We will match this photo with the photo on your ID.": "Internetine kamera nufotografuokite savo veid\u0105. \u0160i\u0105 nuotrauk\u0105 mes palyginsime su j\u016bs\u0173 asmens tapatyb\u0117s dokumento nuotrauka.",
    "Username": "Naudotojo vardas",
    "Users must create and activate their account before they can be promoted to beta tester.": "Naudotojai turi susikurti ir aktyvuoti paskyras prie\u0161 juos pakeliant \u012f beta versijos bandytojus.",
    "Validation Error": "Patikros klaida",
    "Validation Error While Saving": "\u012era\u0161ant \u012fvyko patikros klaida",
    "Verification Checkpoint": "Patvirtinimo kontrolinis ta\u0161kas",
    "Verification checkpoint to be completed": "Privalomas patvirtinimo kontrolinis ta\u0161kas",
    "Verified Certificate": "Tapatybe patvirtintas sertifikatas",
    "Verified Certificate upgrade": "Tapatybe patvirtinto mokymosi pasirinkimas",
    "Verified Status": "Patvirtinta b\u016bsena",
    "Video Capture Error": "Vaizdo \u012fra\u0161ymo klaida",
    "View": "\u017di\u016br\u0117ti",
    "View Cohort": "Per\u017ei\u016br\u0117ti kohort\u0105",
    "View all errors": "Per\u017ei\u016br\u0117ti visas klaidas",
    "Viewing %s course": [
      "Per\u017ei\u016brimas %s kursas",
      "Per\u017ei\u016brimi %s kursai",
      "Per\u017ei\u016brima %s kurs\u0173",
      "Per\u017ei\u016brima %s kurs\u0173"
    ],
    "Warning": "\u012esp\u0117jimas",
    "Warnings": "\u012esp\u0117jimai",
    "We couldn't find any results for \"%s\".": "Nepavyko rasti rezultat\u0173 pagal \"%s\".",
    "We use the highest levels of security available to encrypt your photo and send it to our authorization service for review. Your photo and information are not saved or visible anywhere on %(platformName)s after the verification process is complete.": "U\u017e\u0161ifruodami j\u016bs\u0173 nuotrauk\u0105 ir si\u0173sdami per\u017ei\u016br\u0117ti leidim\u0173 i\u0161davimo tarnybai, mes laikom\u0117s did\u017eiausio saugumo. Pasibaigus patvirtinimo procesui j\u016bs\u0173 nuotrauka ir informacija ne\u012fra\u0161oma ir n\u0117ra matoma jokioje %(platformName)s vietoje.",
    "We've encountered an error. Refresh your browser and then try again.": "Mes aptikome klaid\u0105. Atnaujinkite nar\u0161ykl\u0119 ir bandykite dar kart\u0105.",
    "Webcam": "Internetin\u0117 vaizdo kamera",
    "What does %(platformName)s do with this photo?": "Kam %(platformName)s naudos \u0161i\u0105 nuotrauk\u0105?",
    "What does this mean?": "K\u0105 tai rei\u0161kia?",
    "Why does %(platformName)s need my photo?": "Kam %(platformName)s reikalinga mano nuotrauka?",
    "Would you like to sign in using your %(providerName)s credentials?": "Ar nor\u0117tum\u0117te prisijungti, naudojantis j\u016bs\u0173 %(providerName)s duomenimis?",
    "Year of Birth": "Gimimo metai ",
    "Yes, allow edits to the active Certificate": "Taip, leisti redaguoti aktyv\u0173 sertifikat\u0105",
    "Yesterday": "Vakar",
    "You are not currently a member of any team.": "\u0160iuo metu j\u016bs nesate jokios komandos narys.",
    "You are now enrolled as a verified student for:": "J\u016bs esate u\u017eregistruotas kaip tapatybe patvirtintas dalyvis \u012f kurs\u0105:",
    "You can now enter your payment information and complete your enrollment.": "Dabar galite \u012feiti \u012f savo mok\u0117jimo informacij\u0105 ir baigti registracij\u0105.",
    "You can pay now even if you don't have the following items available, but you will need to have these to qualify to earn a Verified Certificate.": "J\u016bs galite sumok\u0117ti dabar netgi jei neturite \u0161i\u0173 dokument\u0173, bet tur\u0117site juos gauti, kad \u012fgytum\u0117te teis\u0119 \u012f tapatybe patvirtint\u0105 sertifikat\u0105. ",
    "You can remove members from this team, especially if they have not participated in the team's activity.": "Galite pa\u0161alinti narius i\u0161 \u0161ios komandos, ypa\u010d jei jie nedalyvauja komandos veikloje.",
    "You commented...": "J\u016bs komentavote...",
    "You currently have no cohorts configured": "J\u016bs dar nekonfig\u016bravote kohort\u0173",
    "You did not select a content group": "J\u016bs nepasirinkote turinio grup\u0117s",
    "You don't seem to have Flash installed. Get Flash to continue your verification.": "Flash ne\u012fdiegtas. Atsisi\u0173skite Flash ir t\u0119skite patvirtinim\u0105.",
    "You don't seem to have a webcam connected.": "Atrodo, kad j\u016bs\u0173 vaizdo kamera neprijungta.",
    "You have already verified your ID!": "J\u016bs jau patvirtinote savo tapatyb\u0119!",
    "You have not created any certificates yet.": "J\u016bs dar nesuk\u016br\u0117te sertifikat\u0173.",
    "You have not created any content groups yet.": "J\u016bs dar nesuk\u016br\u0117te turinio grupi\u0173.",
    "You have not created any group configurations yet.": "J\u016bs dar nesuk\u016br\u0117te grupini\u0173 konfig\u016bracij\u0173.",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Pasirinkote veiksm\u0105, bet neesate pakeit\u0119 lauk\u0173 reik\u0161mi\u0173. J\u016bs grei\u010diausiai ie\u0161kote mygtuko Vykdyti, o ne mygtuko Saugoti.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Pasirinkote veiksm\u0105, bet dar neesate i\u0161saugoj\u0119 pakeitim\u0173. Nuspauskite Gerai nor\u0117dami i\u0161saugoti. Jus reik\u0117s i\u0161 naujo paleisti veiksm\u0105.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Turite nei\u0161saugot\u0173 pakeitim\u0173. Jeigu t\u0119site, J\u016bs\u0173 pakeitimai bus prarasti.",
    "You must enter a valid email address in order to add a new team member": "Nor\u0117dami prid\u0117ti nauj\u0105 komandos nar\u012f privalote \u012fvesti teising\u0105 el. pa\u0161to adres\u0105.",
    "You must sign out and sign back in before your language changes take effect.": "Turite atsijungti ir v\u0117l prisijungti, kad \u012fsigaliot\u0173 j\u016bs\u0173 kalbos pakeitimai.",
    "You must specify a name for the cohort": "J\u016bs turite nurodyti  kohortos pavadinim\u0105",
    "You need to activate your account before you can enroll in courses. Check your inbox for an activation email. After you complete activation you can return and refresh this page.": "Prie\u0161 registruojantis \u012f kursus, jums reik\u0117s aktyvinti savo paskyr\u0105. Pasitikrinkite savo el. pa\u0161to d\u0117\u017eut\u0119, mes jums i\u0161siunt\u0117me lai\u0161k\u0105 su aktyvinimo instrukcija. Suaktyvin\u0119 paskyr\u0105 galite gr\u012f\u017eti ir atnaujinti \u0161\u012f puslap\u012f.",
    "You will not receive notification for emails that bounce, so double-check your spelling.": "Jei nurodysite neteisingus el. pa\u0161to adresus, patvirtinimo negausite, tod\u0117l dar kart\u0105 patikrinkite ra\u0161yb\u0105.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Ketinate pateikti savo darb\u0105. Kai pateiksite, savo atsakymo jau negal\u0117site keisti.",
    "You've made some changes": "J\u016bs esate atlik\u0119 kelet\u0105 pakeitim\u0173",
    "You've made some changes, but there are some errors": "J\u016bs esate atlik\u0119 kelet\u0105 pakeitim\u0173, bet yra klaid\u0173 ",
    "Your changes have been saved.": "J\u016bs\u0173 atlikti pakeitimai yra i\u0161saugoti.",
    "Your changes will not take effect until you save your progress.": "J\u016bs\u0173 atlikti pakeitimai nebus pritaikyti, kol nei\u0161saugosite atlikto darbo.",
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "J\u016bs\u0173 atlikti pakeitimai nebus pritaikyti, kol nei\u0161saugosite savo darbo. Atkreipkite d\u0117mes\u012f \u012f vard\u0173 ir reik\u0161mi\u0173 formatus, nes jie nebus tikrinami.",
    "Your donation could not be submitted.": "Nepavyko pateikti j\u016bs\u0173 aukos.",
    "Your file '{file}' has been uploaded. Allow a few minutes for processing.": "J\u016bs\u0173 failas \"{file}\" yra \u012fkeliamas. Palaukite kelias minutes, kol vyksta procesas.",
    "Your file could not be uploaded": "Nepavyko \u012fkelti j\u016bs\u0173 failo.",
    "Your file has been deleted.": "J\u016bs\u0173 failas buvo pa\u0161alintas.",
    "Your message cannot be blank.": "J\u016bs\u0173 prane\u0161imas negali b\u016bti tu\u0161\u010dias.",
    "Your message must have a subject.": "J\u016bs\u0173 prane\u0161imas turi tur\u0117ti temos pavadinim\u0105.",
    "Your policy changes have been saved.": "J\u016bs\u0173 atlikti taisykli\u0173 nustatym\u0173 pakeitimai yra i\u0161saugoti.",
    "Your post will be discarded.": "J\u016bs\u0173 skelbimas bus panaikintas.",
    "Your request could not be completed. Reload the page and try again.": "J\u016bs\u0173 u\u017eklausa negali b\u016bti \u012fvykdyta. I\u0161 naujo \u012fkelkite puslap\u012f ir bandykite dar kart\u0105.",
    "Your upload of '{file}' failed.": "J\u016bs\u0173 failo \"{file}\" nepavyko \u012fkelti.",
    "Your upload of '{file}' succeeded.": "J\u016bs\u0173 failas \"{file}\" s\u0117kmingai \u012fkeltas.",
    "Zoom In": "Didinti",
    "Zoom Out": "Ma\u017einti",
    "[no tags]": "[be \u017eym\u0173]",
    "and others": "ir kiti",
    "anonymous": "anonimas",
    "bytes": "baitai",
    "certificate": "sertifikatas",
    "content group": "turinio grup\u0117",
    "dragging": "tempiama",
    "dragging out of slider": "nutempiama i\u0161 slankiklio",
    "dropped in slider": "nutempta \u012f slankikl\u012f",
    "dropped on target": "nutempta \u012f paskirties viet\u0105",
    "e.g. johndoe@example.com, JaneDoe, joeydoe@example.com": "pvz., johndoe@example.com, JaneDoe, joeydoe@example.com",
    "emphasized text": "pabr\u0117\u017etas tekstas",
    "enter code here": "\u010dia \u012fveskite kod\u0105",
    "enter link description here": "\u010dia \u012fvesti nuorodos apra\u0161ym\u0105",
    "group configuration": "grupin\u0117 konfig\u016bracija",
    "last activity": "paskutin\u0117 veikla",
    "name": "vardas",
    "one letter Friday\u0004F": "Pn",
    "one letter Monday\u0004M": "P",
    "one letter Saturday\u0004S": "\u0160",
    "one letter Sunday\u0004S": "S",
    "one letter Thursday\u0004T": "K",
    "one letter Tuesday\u0004T": "A",
    "one letter Wednesday\u0004W": "T",
    "open slots": "laisvos vietos",
    "or": "arba",
    "or create a new one here": "arba sukurti nauj\u0105 paskyr\u0105 \u010dia",
    "or sign in with": "arba prisijungti su",
    "remove": "pa\u0161alinti",
    "remove all": "pa\u0161alinti visk\u0105",
    "strong text": "ry\u0161kus tekstas",
    "team count": "komand\u0173 skai\u010dius",
    "username or email": "naudotojas arba el. pa\u0161tas",
    "{browse_span_start}Browse teams in other topics{span_end} or {search_span_start}search teams{span_end} in this topic. If you still can't find a team to join, {create_span_start}create a new team in this topic{span_end}.": "{browse_span_start}Nar\u0161ykite ie\u0161kodami komand\u0173 kitose temose{span_end} arba {search_span_start}ie\u0161kokite komand\u0173{span_end} \u0161ioje temoje. Jei vis tiek nerandate prie ko prisijungti, {create_span_start}sukurkite nauj\u0105 komand\u0105 \u0161ioje temoje{span_end}.",
    "{email} is already on the {container} team. Recheck the email address if you want to add a new member.": "{email} jau yra kurso {container} komandoje. Jeigu norite prid\u0117ti nauj\u0105 nar\u012f, patikrinkite el. pa\u0161to adres\u0105.",
    "\u2026": "\u2026"
  };
<<<<<<< HEAD
  for (var key in newcatalog) {
=======
  for (const key in newcatalog) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
<<<<<<< HEAD
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
=======
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      }
    };

    django.ngettext = function(singular, plural, count) {
<<<<<<< HEAD
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
=======
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
<<<<<<< HEAD
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
=======
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
<<<<<<< HEAD
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
=======
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y \\m. E j \\d., H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
<<<<<<< HEAD
      "%d.%m.%Y",
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y %H.%M.%S",
      "%d.%m.%y %H.%M.%S.%f",
      "%d.%m.%y %H.%M",
<<<<<<< HEAD
      "%d.%m.%y",
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y \\m. E j \\d.",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%d.%m.%Y",
      "%d.%m.%y"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "E j \\d.",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "Y-m-d H:i",
    "SHORT_DATE_FORMAT": "Y-m-d",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M",
      "%H.%M.%S",
      "%H.%M.%S.%f",
      "%H.%M"
    ],
    "YEAR_MONTH_FORMAT": "Y \\m. F"
  };

    django.get_format = function(format_type) {
<<<<<<< HEAD
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
=======
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
<<<<<<< HEAD

}(this));
=======
};
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

