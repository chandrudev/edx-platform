

<<<<<<< HEAD
(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);
    if (typeof(v) == 'boolean') {
=======
'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);
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
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s z %(cnt)s vybran\u00e9",
      "%(sel)s z %(cnt)s vybran\u00e9",
      "%(sel)s z %(cnt)s vybran\u00fdch",
      "%(sel)s z %(cnt)s vybran\u00fdch"
    ],
    "6 a.m.": "6:00",
    "6 p.m.": "18:00",
    "A valid email address is required": "Vy\u017eaduje sa platn\u00e1 e-mailov\u00e1 adresa",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Account": "\u00da\u010det",
    "Actions": "Akcie",
    "Add to Dictionary": "Pridaj do slovn\u00edka",
    "Add your first content group": "Pridajte va\u0161u prv\u00fa skupinu obsahu",
    "Add your first group configuration": "Pridajte va\u0161u prv\u00fa konfigur\u00e1ciu skupiny",
    "Admin": "Administr\u00e1tor",
    "Advanced": "Pokro\u010dil\u00e9",
    "Align center": "Zarovnaj nastred",
    "Align left": "Zarovnaj v\u013eavo",
    "Align right": "Zarovnaj vpravo",
    "Alignment": "Zarovnanie",
    "All Rights Reserved": "V\u0161etky pr\u00e1va vyhraden\u00e9",
    "All Topics": "V\u0161etky t\u00e9my",
    "All groups must have a name.": "V\u0161etky skupiny musia ma\u0165 n\u00e1zov.",
    "All groups must have a unique name.": "V\u0161etky skupiny musia ma\u0165 jedine\u010dn\u00fd n\u00e1zov.",
    "All teams": "V\u0161etky t\u00edmy",
    "All topics": "V\u0161etky t\u00e9my",
    "Already a course team member": "U\u017e ste \u010dlenom t\u00edmu spravuj\u00faceho tento kurz",
    "Already a library team member": "U\u017e ste \u010dlenom t\u00edmu spravuj\u00faceho kni\u017enicu",
    "Already a member": "U\u017e ste \u010dlenom",
    "Alternative source": "Alternat\u00edvny zdroj",
    "Anchor": "Ukotvi\u0165",
    "Anchors": "Ukotvenia",
    "April": "apr\u00edl",
    "Are you sure you want to delete this update?": "Skuto\u010dne chcete odstr\u00e1ni\u0165 t\u00fato aktualiz\u00e1ciu?",
    "Are you sure you want to delete {email} from the course team for \u201c{container}\u201d?": "Skuto\u010dne chcete vymaza\u0165 {email} z t\u00edmu spravuj\u00faceho kurz pre \u201c{container}\u201d?",
    "Are you sure you want to delete {email} from the library \u201c{container}\u201d?": "Skuto\u010dne chcete odstr\u00e1ni\u0165 {email} z kni\u017enice \u201c{container}\u201d?",
    "Are you sure you want to restrict {email} access to \u201c{container}\u201d?": "Naozaj chcete obmedzi\u0165 {email} pr\u00edstup ku \u201c{container}\u201d?",
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "Skuto\u010dne si prajete odstr\u00e1ni\u0165 t\u00fato polo\u017eku? Tento stav nie je mo\u017en\u00e9 zvr\u00e1ti\u0165!\n\nTaktie\u017e ak\u00fdko\u013evek obsah, ktor\u00fd odkazuje na t\u00fato polo\u017eku, nebude viac funk\u010dn\u00fd (t.j. nena\u010d\u00edtan\u00e9 obr\u00e1zky a/alebo nefunk\u010dn\u00e9 odkazy)",
    "Are you sure?": "Ste si ist\u00ed?",
    "August": "august",
    "Author": "Autor",
    "Available %s": "Dostupn\u00e9 %s",
    "Average": "Priemern\u00fd",
    "Background color": "Farba pozadia",
    "Blockquote": "Blok cit\u00e1cie",
    "Blockquote (Ctrl+Q)": "Blokov\u00e1 cit\u00e1cia (Ctrl+Q)",
    "Blocks": "Bloky",
    "Body": "Hlavn\u00e1 \u010das\u0165",
    "Bold": "Tu\u010dn\u00e9 p\u00edsmo",
    "Bold (Ctrl+B)": "Tu\u010dn\u00e9 (Ctrl+B)",
    "Border": "Obruba",
    "Border color": "Farba obruby",
    "Bottom": "Spodok",
    "Bullet list": "Odr\u00e1\u017eky",
    "Bulleted List (Ctrl+U)": "Zoznam s odr\u00e1\u017ekami (Ctrl+U)",
    "Cancel": "Zru\u0161i\u0165",
    "Caption": "Popis",
    "Cell": "Bunka",
    "Cell padding": "Prisp\u00f4sobenie bunky",
    "Cell properties": "Vlastnosti bunky",
    "Cell spacing": "Rozmiestnenie bunky",
    "Cell type": "Typ bunky",
    "Center": "Stred",
    "Certificate name is required.": "Je potrebn\u00e9 zada\u0165 n\u00e1zov certifik\u00e1tu.",
    "Change Manually": "Zmeni\u0165 ru\u010dne",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Zmeny pre kroky, ktor\u00e9 nie s\u00fa zvolen\u00e9 ako s\u00fa\u010das\u0165 tohto zadania, nebud\u00fa ulo\u017een\u00e9.",
    "Choose": "Vybra\u0165",
    "Choose File": "Vybra\u0165 s\u00fabor",
    "Choose a Date": "Vybra\u0165 D\u00e1tum",
    "Choose a Time": "Vybra\u0165 \u010cas",
    "Choose a time": "Vybra\u0165 \u010das",
    "Choose all": "Vybra\u0165 v\u0161etko",
    "Chosen %s": "Vybran\u00e9 %s",
    "Circle": "Kruh",
    "Clear All": "Vy\u010disti\u0165 v\u0161etko",
    "Clear formatting": "\u010cist\u00e9 form\u00e1tovanie",
    "Clear search results": "Vy\u010disti\u0165 v\u00fdsledky h\u013eadania",
    "Click to choose all %s at once.": "Kliknite sem pre vybratie v\u0161etk\u00fdch %s naraz.",
    "Click to edit": "Kliknite sem pre \u00fapravu",
    "Click to remove all chosen %s at once.": "Kliknite sem pre vymazanie vybrat\u00fdch %s naraz.",
    "Close": "Zavrie\u0165",
    "Close Calculator": "Zavrie\u0165 kalkula\u010dku",
    "Code": "K\u00f3d",
    "Code Sample (Ctrl+K)": "Uk\u00e1\u017eka k\u00f3du (Ctrl+K)",
    "Code block": "K\u00f3d bloku",
    "Collapse Instructions": "Zavrie\u0165 in\u0161trukcie",
    "Color": "Farba",
    "Cols": "St\u013apce",
    "Column": "St\u013apec",
    "Column group": "Skupina st\u013apca",
    "Commentary": "Koment\u00e1r",
    "Confirm": "Potvrdi\u0165",
    "Constrain proportions": "Obmedzen\u00e9 rozmery",
    "Copy": "Kop\u00edrova\u0165",
    "Copy row": "Kop\u00edrova\u0165 riadok",
    "Correct failed component": "Opravi\u0165 chybu v s\u00fa\u010dasti",
    "Could not find the specified string.": "Nie je mo\u017en\u00e9 n\u00e1js\u0165 \u0161pecifikovan\u00fd re\u0165azec.",
    "Could not retrieve download url.": "Nebolo mo\u017en\u00e9 z\u00edska\u0165 adresu pre prevzatie obsahu.",
    "Could not retrieve upload url.": "Nebolo mo\u017en\u00e9 z\u00edska\u0165 url adresu pre odovzdanie obsahu.",
    "Country": "Krajina",
    "Course Credit Requirements": "Po\u017eiadavky pre z\u00edskanie kreditu z kurzu",
    "Course Index": "Register kurzu",
    "Course Name": "N\u00e1zov kurzu",
    "Course Number": "\u010c\u00edslo kurzu",
    "Course Outline": "Preh\u013ead kurzu",
    "Course pacing cannot be changed once a course has started.": "Ud\u00e1van\u00e9 tempo kurzu nie je mo\u017en\u00e9 zmeni\u0165 po za\u010dat\u00ed kurzu.",
    "Create": "Vytvori\u0165",
    "Create Re-run": "Vytvori\u0165 repr\u00edzu",
    "Create a New Team": "Vytvori\u0165 nov\u00fd t\u00edm",
    "Creating missing groups": "Vytvorenie ch\u00fdbaj\u00facej skupiny",
    "Criterion Added": "Pridan\u00e9 krit\u00e9rium",
    "Criterion Deleted": "Krit\u00e9rium odstr\u00e1nen\u00e9",
    "Current conversation": "Aktu\u00e1lna konverz\u00e1cia",
    "Custom color": "Vlastn\u00e1 farba",
    "Custom...": "Vlastn\u00fd",
    "Cut": "Vystrihn\u00fa\u0165",
    "Cut row": "Vystrihn\u00fa\u0165 riadok",
    "Date Added": "Doplnen\u00fd d\u00e1tum",
    "December": "december",
    "Decrease indent": "Zmen\u0161i\u0165 odsadenie",
    "Default": "Predvolen\u00e9",
    "Delete": "Odstr\u00e1ni\u0165",
    "Delete File Confirmation": "Potvrdenie odstr\u00e1nenia s\u00faboru",
    "Delete column": "Vymaza\u0165 st\u013apec",
    "Delete row": "Vymaza\u0165 riadok",
    "Delete table": "Vymaza\u0165 tabu\u013eku",
    "Delete this %(item_display_name)s?": "Odstr\u00e1ni\u0165 %(item_display_name)s?",
    "Delete this team?": "Zmaza\u0165 tento t\u00edm?",
    "Deleted Group": "Zmazan\u00e1 skupina",
    "Deleting this %(item_display_name)s is permanent and cannot be undone.": "Odstr\u00e1nenie %(item_display_name)s je trval\u00e9 a nie je mo\u017en\u00e9 ho vr\u00e1ti\u0165 sp\u00e4\u0165.",
    "Description": "Popis",
    "Details": "Podrobnosti",
    "Dimensions": "Rozmery",
    "Disc": "Disk",
    "Discard Changes": "Zahodi\u0165 zmeny",
    "Div": "Rozdelenie",
    "Do not show again": "Neukazuj znova",
    "Document properties": "Vlastnosti dokumentu",
    "Donate": "Darova\u0165",
    "Download": "Prevzia\u0165",
    "Due Date": "D\u00e1tum splatnosti",
    "Duration (sec)": "D\u013a\u017eka (sec)",
    "Edit": "Upravi\u0165",
    "Edit HTML": "Editova\u0165 HTML",
    "Edit Team": "Upravi\u0165  t\u00edm",
    "Edit this certificate?": "Upravi\u0165 tento certifik\u00e1t?",
    "Email": "Email",
    "Embed": "Zakotvi\u0165",
    "Emoticons": "Smail\u00edci",
    "Encoding": "K\u00f3dovanie",
    "Enter team description.": "Zadajte popis t\u00edmu.",
    "Enter team name.": "Zadajte n\u00e1zov t\u00edmu.",
    "Error": "Chyba",
    "Error adding user": "Chyba pri prid\u00e1van\u00ed pou\u017e\u00edvate\u013ea",
    "Error removing user": "Chyba po\u010das mazania pou\u017e\u00edvate\u013ea",
    "Errors": "Chyby",
    "Exit full browser": "Ukon\u010di\u0165 re\u017eim celej obrazovky",
    "Expand Instructions": "Roz\u0161\u00edri\u0165 in\u0161trukcie",
    "February": "febru\u00e1r",
    "File": "S\u00fabor",
    "File types can not be empty.": "Typy s\u00faborov nem\u00f4\u017eu by\u0165 pr\u00e1zdne.",
    "File {filename} exceeds maximum size of {maxFileSizeInMBs} MB": "S\u00fabor {filename} presahuje maxim\u00e1lnu ve\u013ekos\u0165 {maxFileSizeInMBs} MB",
    "Files must be in JPEG or PNG format.": "S\u00fabory musia by\u0165 vo form\u00e1te JPEG alebo PNG.",
    "Fill browser": "Vyplni\u0165 plochu preh\u013ead\u00e1va\u010da",
    "Filter": "Filtrova\u0165",
    "Find": "N\u00e1js\u0165",
    "Find and replace": "N\u00e1jdi a nahra\u010f",
    "Find next": "N\u00e1jdi \u010fal\u0161ie",
    "Find previous": "N\u00e1jdi predch\u00e1dzaj\u00face",
    "Finish": "Ukon\u010di\u0165",
    "Full Name": "Cel\u00e9 meno",
    "Gender": "Pohlavie",
    "General": "V\u0161eobecn\u00e9",
    "Go to Dashboard": "Prejs\u0165 na Palubn\u00fa dosku",
    "Go to your Dashboard": "Prejs\u0165 do va\u0161ej Palubne dosky",
    "Grace period must be specified in HH:MM format.": "Doba odkladu mus\u00ed by\u0165 ur\u010den\u00e1 vo form\u00e1te HH:MM.",
    "Group %s": "Skupina %s",
    "Group A": "Skupina A",
    "Group B": "Skupina B",
    "Group Configuration name is required.": "N\u00e1zov konfigur\u00e1cie skupiny je povinn\u00fd \u00fadaj.",
    "Group name is required": "N\u00e1zov skupiny je povinn\u00fd \u00fadaj",
    "HTML source code": "HTML zdrojov\u00fd k\u00f3d",
    "Header": "Hlavi\u010dka",
    "Header 1": "Hlavi\u010dka 1",
    "Header 2": "Hlavi\u010dka 2",
    "Header 3": "Hlavi\u010dka 3",
    "Header 4": "Hlavi\u010dka 4",
    "Header 5": "Hlavi\u010dka 5",
    "Header 6": "Hlavi\u010dka 6",
    "Headers": "Hlavi\u010dky",
    "Heading (Ctrl+H)": "Nadpis (Ctrl+H)",
    "Heading 1": "Nadpis 1",
    "Heading 2": "Nadpis 2",
    "Heading 3": "Nadpis 3",
    "Heading 4": "Nadpis 4",
    "Heading 5": "Nadpis 5",
    "Heading 6": "Nadpis 6",
    "Headings": "Nadpisy",
    "Height": "V\u00fd\u0161ka",
    "Hide": "Skry\u0165",
    "Hide Annotations": "Skry\u0165 anot\u00e1cie",
    "Hide Deprecated Settings": "Skry\u0165 odmietnut\u00e9 nastavenia",
    "Hide Discussion": "Skry\u0165 diskusiu",
    "Hide closed captions": "Skry\u0165 skryt\u00e9 titulky",
    "High Definition": "Vysok\u00e9 rozl\u00ed\u0161enie",
    "Highlighted text": "Zv\u00fdraznen\u00fd text",
    "Horizontal Rule (Ctrl+R)": "Vodorovn\u00e1 \u010diara (Ctrl+R)",
    "Horizontal line": "Vodorovn\u00e1 \u010diara",
    "Horizontal space": "Horizont\u00e1lna medzera",
    "Hyperlink (Ctrl+L)": "Hypertextov\u00fd odkaz (Ctrl+L)",
    "ID": "ID",
    "Ignore": "Ignorova\u0165",
    "Ignore all": "Ignorova\u0165 v\u0161etky",
    "Image": "Obr\u00e1zok",
    "Image (Ctrl+G)": "Obr\u00e1zok (Ctrl+G)",
    "Image description": "Popis obr\u00e1zka",
    "Image must be in PNG format.": "Obr\u00e1zok mus\u00ed by\u0165 vo form\u00e1te PNG.",
    "In Progress": "Sprac\u00fava sa",
    "Increase indent": "Zv\u00e4\u010d\u0161i\u0165 odsadenie",
    "Inline": "V rade",
    "Insert": "Vlo\u017ei\u0165",
    "Insert column after": "Vlo\u017ei\u0165 st\u013apec po",
    "Insert column before": "Vlo\u017ei\u0165 st\u013apec pred",
    "Insert date/time": "Vlo\u017ei\u0165 d\u00e1tum/\u010das",
    "Insert image": "Vlo\u017ei\u0165 obr\u00e1zok",
    "Insert link": "Vlo\u017ei\u0165 odkaz",
    "Insert row after": "Vlo\u017ei\u0165 riadok po",
    "Insert row before": "Vlo\u017ei\u0165 riadok pred",
    "Insert table": "Vlo\u017ei\u0165 tabu\u013eku",
    "Insert template": "Vlo\u017ei\u0165 \u0161abl\u00f3nu",
    "Insert video": "Vlo\u017ei\u0165 video",
    "Insert/edit image": "Vlo\u017ei\u0165/editova\u0165 obr\u00e1zok",
    "Insert/edit link": "Vlo\u017ei\u0165/editova\u0165 odkaz",
    "Insert/edit video": "Vlo\u017ei\u0165/editova\u0165 video",
    "Italic": "Kurz\u00edva",
    "Italic (Ctrl+I)": "Kurz\u00edva (Ctrl+I)",
    "January": "janu\u00e1r",
    "July": "j\u00fal",
    "June": "j\u00fan",
    "Justify": "Zarovna\u0165",
    "Key should only contain letters, numbers, _, or -": "K\u013e\u00fa\u010d by mal obsahova\u0165 iba p\u00edsmen\u00e1, \u010d\u00edsla, _, alebo -",
    "Keywords": "K\u013e\u00fa\u010dov\u00e9 slov\u00e1",
    "LEARN MORE": "DOZVEDIE\u0164 SA VIAC",
    "Language": "Jazyk",
    "Last Edited:": "Naposledy upraven\u00e9:",
    "Left": "V\u013eavo",
    "Left to right": "Z\u013eava do prava",
    "Less": "Menej",
    "Library User": "Pou\u017e\u00edvate\u013e kni\u017enice",
    "Load Another File": "Na\u010d\u00edta\u0165 \u010fal\u0161\u00ed s\u00fabor",
    "Load all responses": "Na\u010d\u00edta\u0165 v\u0161etky odpovede",
    "Loading": "Na\u010d\u00edtavanie",
    "Loading content": "Obsah sa na\u010d\u00edtav\u00e1",
    "Loading data...": "Na\u010d\u00edtavanie d\u00e1t...",
    "Loading more threads": "Na\u010d\u00edta\u0165 viac vl\u00e1kien",
    "Loud": "Hlasn\u00fd",
    "Low": "N\u00edzko",
    "March": "marec",
    "Max file size exceeded": "Prekro\u010den\u00e1 maxim\u00e1lna ve\u013ekos\u0165",
    "Maximum": "Maximum",
    "May": "m\u00e1j",
    "Membership": "\u010clenstvo",
    "Merge cells": "Zl\u00fa\u010di\u0165 bunky",
    "Middle": "Stredn\u00e9",
    "Midnight": "Polnoc",
    "More": "Viac",
    "Mute": "Vypn\u00fa\u0165 zvuk",
    "Muted": "Vypnut\u00fdm zvukom",
    "Name": "N\u00e1zov",
    "New document": "Nov\u00fd dokument",
    "New window": "Nov\u00e9 okno",
    "Next": "\u010ealej",
    "No color": "Bez farby",
    "Nonbreaking space": "Pevn\u00fa medzeru",
    "None": "\u017diadne",
    "Noon": "Poludnie",
    "Not Graded": "Neozn\u00e1mkovan\u00fd",
    "Not Selected": "Nie je vybran\u00e9",
    "Not able to set passing grade to less than %(minimum_grade_cutoff)s%.": "Nie je mo\u017en\u00e9 nastavi\u0165 hodnotenie pre \u00faspe\u0161n\u00e9 skon\u010denie na menej ako %(minimum_grade_cutoff)s%.",
    "Not in Use": "Nepou\u017e\u00edva sa",
    "Note": "Pozn\u00e1mka",
    "Note: You are %s hour ahead of server time.": [
      "Pozn\u00e1mka: Ste %s hodinu pred \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hodiny pred \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hod\u00edn pred \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hod\u00edn pred \u010dasom servera."
    ],
    "Note: You are %s hour behind server time.": [
      "Pozn\u00e1mka: Ste %s hodinu za \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hodiny za \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hod\u00edn za \u010dasom servera.",
      "Pozn\u00e1mka: Ste %s hod\u00edn za \u010dasom servera."
    ],
    "Noted in:": "Pridan\u00e1 pozn\u00e1mka v:",
    "November": "november",
    "Now": "Teraz",
    "Numbered List (Ctrl+O)": "\u010c\u00edslovan\u00fd zoznam (Ctrl+O)",
    "Numbered list": "\u010c\u00edslovan\u00fd zoznam",
    "OK": "OK",
    "October": "okt\u00f3ber",
    "Ok": "Ok",
    "One or more rescheduling tasks failed.": "Jedna alebo viac \u00faloh pre zmenu term\u00ednu zlyhala.",
    "Open Calculator": "Otvori\u0165 kalkula\u010dku",
    "Open language menu": "Otvori\u0165 menu jazyk",
    "Option Deleted": "Vo\u013eba odstr\u00e1nen\u00e1",
    "Order History": "Hist\u00f3ria objedn\u00e1vok",
    "Organization": "Organiz\u00e1cia",
    "Other": "In\u00e9",
    "Page break": "Koniec str\u00e1nky",
    "Paragraph": "Odsek",
    "Password": "Heslo",
    "Paste": "Vlo\u017ei\u0165 ",
    "Paste as text": "Vlo\u017ei\u0165 ako text",
    "Paste row after": "Vlo\u017ei\u0165 riadok po",
    "Paste row before": "Vlo\u017ei\u0165 riadok pred",
    "Pause": "Pozastavi\u0165",
    "Play": "Prehra\u0165",
    "Play video": "Prehra\u0165 video",
    "Please address the errors on this page first, and then save your progress.": "Vyrie\u0161te, pros\u00edm, najsk\u00f4r chyby na tejto str\u00e1nke a n\u00e1sledne ulo\u017ete tento stav.",
    "Please do not use any spaces in this field.": "V tomto poli nepou\u017e\u00edvajte, pros\u00edm, \u017eiadne medzery.",
    "Please do not use any spaces or special characters in this field.": "V tomto poli nepou\u017e\u00edvajte, pros\u00edm, \u017eiadne medzery alebo \u0161peci\u00e1lne znaky.",
    "Please enter an integer between %(min)s and %(max)s.": "Zadajte, pros\u00edm, cel\u00e9 \u010d\u00edslo v rozsahu %(min)s a %(max)s.",
    "Please enter an integer between 0 and 100.": "Zadajte, pros\u00edm, cel\u00e9 \u010d\u00edslo v rozsahu 0 a\u017e 100.",
    "Please enter an integer greater than 0.": "Zadajte, pros\u00edm, cel\u00e9 \u010d\u00edslo v\u00e4\u010d\u0161ie ako 0.",
    "Please enter non-negative integer.": "Zadajte, pros\u00edm, nez\u00e1porn\u00e9 cel\u00e9 \u010d\u00edslo.",
    "Please follow the instructions here to upload a file elsewhere and link to it: {maxFileSizeRedirectUrl}": "Ria\u010fte sa, pros\u00edm, in\u0161trukciami o tom, ako odovzda\u0165 s\u00fabor niekam inam a prilo\u017ei\u0165 odkaz na\u0148: {maxFileSizeRedirectUrl}",
    "Poster": "Plag\u00e1t",
    "Pre": "Pre",
    "Preferred Language": "Preferovan\u00fd jazyk",
    "Preformatted": "Vopred naform\u00e1tovan\u00e9",
    "Prev": "Predch\u00e1dzaj\u00faci",
    "Preview": "N\u00e1h\u013ead",
    "Print": "Tla\u010di\u0165",
    "Processing Re-run Request": "Sprac\u00fava sa \u017eiados\u0165 o repr\u00edzu",
    "Professional Education": "Profesijn\u00e9 vzdel\u00e1vanie",
    "Publish": "Publikova\u0165",
    "Queued": "V porad\u00ed",
    "Redo": "Prerobi\u0165",
    "Redo (Ctrl+Shift+Z)": "Obnovi\u0165 (Ctrl+Shift+Z)",
    "Redo (Ctrl+Y)": "Obnovi\u0165 (Ctrl+Y)",
    "Remove": "Vymaza\u0165",
    "Remove all": "Odstr\u00e1ni\u0165 v\u0161etky",
    "Remove link": "Odstr\u00e1ni\u0165 odkaz",
    "Remove this team member?": "Odstr\u00e1ni\u0165 tohto \u010dlena t\u00edmu?",
    "Replace": "Nahradi\u0165",
    "Replace all": "Nahradi\u0165 v\u0161etko",
    "Replace with": "Nahradi\u0165 s",
    "Reply to Annotation": "Odpoveda\u0165 na anot\u00e1ciu",
    "Requester": "\u017diadate\u013e",
    "Required field.": "Povinn\u00e9 pole.",
    "Restore last draft": "Obnov posledn\u00fd n\u00e1vrh",
    "Return and add email address": "Vr\u00e1ti\u0165 sa a prida\u0165 e-mailov\u00fa adresu",
    "Return to Export": "Vr\u00e1ti\u0165 sa sp\u00e4\u0165 na Export",
    "Return to Your Dashboard": "Vr\u00e1ti\u0165 sa do va\u0161ej Palubnej dosky",
    "Return to team listing": "Vr\u00e1ti\u0165 sa k zoznamu \u010dlenov t\u00edmu",
    "Revoke access": "Zru\u0161i\u0165 pr\u00edstup",
    "Right": "Doprava",
    "Right to left": "Sprava do\u013eava",
    "Robots": "Roboty",
    "Row": "Riadok",
    "Row group": "Skupina riadkov",
    "Row properties": "Vlastnosti riadku",
    "Row type": "Typ riadku",
    "Rows": "Riadky",
    "Save": "Ulo\u017ei\u0165",
    "Save Changes": "Ulo\u017ei\u0165 zmeny",
    "Save changes": "Ulo\u017ei\u0165 zmeny",
    "Saving": "Uklad\u00e1 sa",
    "Saving...": "Uklad\u00e1 sa...",
    "Scope": "Rozsah",
    "Search Results": "V\u00fdsledky vyh\u013ead\u00e1vania",
    "Search teams": "H\u013eadanie t\u00edmov",
    "Select all": "Vybra\u0165 v\u0161etko",
    "Sent By": "Odoslan\u00e9",
    "September": "september",
    "Set up your certificate": "Nastavenie v\u00e1\u0161ho certifik\u00e1tu",
    "Settings": "Nastavenia",
    "Short explanation": "kr\u00e1tke vysvetlenie",
    "Show": "Zobrazi\u0165",
    "Show Annotations": "Zobrazi\u0165 anot\u00e1cie",
    "Show Deprecated Settings": "Zobrazi\u0165 zastaran\u00e9 nastavenia",
    "Show Discussion": "Zobrazi\u0165 diskusiu",
    "Show blocks": "Zobrazi\u0165 bloky",
    "Show invisible characters": "Uk\u00e1za\u0165 nevidite\u013en\u00e9 znaky",
    "Showing all responses": "Zobrazujem v\u0161etky odpovede",
    "Signatory field(s) has invalid data.": "Pole (polia) signat\u00e1rov m\u00e1 neplatn\u00e9 \u00fadaje.",
    "Skip": "Presko\u010di\u0165",
    "Source": "Zdroj",
    "Source code": "Zdrojov\u00fd k\u00f3d",
    "Special character": "\u0160peci\u00e1lny znak",
    "Speed": "R\u00fdchlos\u0165",
    "Spellcheck": "Kontrola pravopisu",
    "Split cell": "Rozdeli\u0165 bunku",
    "Staff": "Person\u00e1l",
    "Start Date": "D\u00e1tum za\u010diatku",
    "Start search": "Spusti\u0165 vyh\u013ead\u00e1vanie",
    "Starts": "Za\u010d\u00edna",
    "State": "Stav",
    "Status": "Stav",
    "Status of Your Response": "Stav va\u0161ej odpovede",
    "Strikethrough": "Pre\u010diarknut\u00e9",
    "Subject": "Predmet",
    "Submit": "Odosla\u0165",
    "Submitted": "Odoslan\u00e9",
    "Subscript": "Doln\u00fd index",
    "Superscript": "Horn\u00fd index",
    "Table": "Tabu\u013eka",
    "Table properties": "Vlastnosti tabu\u013eky",
    "Tags": "Zna\u010dky",
    "Tags:": "\u0160t\u00edtky:",
    "Take me to the main course page": "Prejs\u0165 na hlavn\u00fa str\u00e1nku kurzu",
    "Take me to the main library page": "Prejs\u0165 na hlavn\u00fa str\u00e1nku kni\u017enice",
    "Task ID": "ID \u00dalohy",
    "Task Progress": "Napredovanie \u00falohy",
    "Task Status": "Stav \u00falohy",
    "Task Type": "Typ \u00falohy",
    "Task inputs": "Vstupy \u00faloh",
    "Team Description (Required) *": "Popis t\u00edmu (povinn\u00e9) *",
    "Team Name (Required) *": "Meno t\u00edmu (povinn\u00e9) *",
    "Team Search": "Vyh\u013ead\u00e1vanie t\u00edmu",
    "Team name cannot have more than 255 characters.": "N\u00e1zov t\u00edmu nem\u00f4\u017ee ma\u0165 viac ako 255 znakov.",
    "Teams": "T\u00edmy",
    "Templates": "\u0160abl\u00f3ny",
    "Text color": "Farba textu",
    "Text to display": "Text, ktor\u00fd sa zobraz\u00ed",
    "The course end date must be later than the course start date.": "D\u00e1tum konca kurzu mus\u00ed by\u0165 nesk\u00f4r ako d\u00e1tum za\u010diatku kurzu.",
    "The course must have an assigned start date.": "Kurz mus\u00ed ma\u0165 priraden\u00fd d\u00e1tum za\u010diatku.",
    "The course start date must be later than the enrollment start date.": "D\u00e1tum za\u010diatku kurzu mus\u00ed by\u0165 nesk\u00f4r ako d\u00e1tum za\u010diatku z\u00e1pisu.",
    "The enrollment end date cannot be after the course end date.": "D\u00e1tum konca z\u00e1pisu nem\u00f4\u017ee by\u0165 nesk\u00f4r ako je d\u00e1tum konca kurzu.",
    "The enrollment start date cannot be after the enrollment end date.": "D\u00e1tum za\u010diatku z\u00e1pisu nem\u00f4\u017ee by\u0165 nesk\u00f4r ako je d\u00e1tum konca z\u00e1pisu.",
    "The following file types are not allowed: ": "Nasleduj\u00face typy s\u00faborov nie s\u00fa povolen\u00e9:",
    "The grading process is still running. Refresh the page to see updates.": "E\u0161te st\u00e1le prebieha zn\u00e1mkovanie. Ak chcete zobrazi\u0165 aktualiz\u00e1cie priebehu, obnovte si str\u00e1nku.",
    "The minimum grade for course credit is not set.": "Minim\u00e1lne hodnotenie pre z\u00edskanie kreditu z kurzu nie je stanoven\u00e9.",
    "The raw error message is:": "P\u00f4vodn\u00e1 spr\u00e1va o chybe je:",
    "The server could not be contacted.": "Nebolo mo\u017en\u00e9 kontaktova\u0165 server.",
    "The submission could not be removed from the grading pool.": "Toto podanie nebolo mo\u017en\u00e9 odstr\u00e1ni\u0165 z klasifika\u010dn\u00e9ho h\u00e1rku.",
    "There has been an error while exporting.": "Po\u010das exportovania sa vyskytla chyba.",
    "There has been an error with your export.": "Nastala chyba s\u00favisiaca s va\u0161im exportom.",
    "There must be at least one group.": "Mus\u00ed existova\u0165 aspo\u0148 jedna skupina.",
    "There was an error changing the user's role": "Nastala chyba pri zmene roly pou\u017e\u00edvate\u013ea.",
    "There were errors reindexing course.": "Pri preindexovan\u00ed kurzu sa vyskytli chyby.",
    "There's already another assignment type with this name.": "U\u017e existuje in\u00fd typ zadania s t\u00fdmto n\u00e1zvom.",
    "This action cannot be undone.": "T\u00fato akciu nie je mo\u017en\u00e9 vr\u00e1ti\u0165 sp\u00e4\u0165.",
    "This assessment could not be submitted.": "Toto hodnotenie nie je mo\u017en\u00e9 odosla\u0165.",
    "This certificate has already been activated and is live. Are you sure you want to continue editing?": "Tento certifik\u00e1t u\u017e bol aktivovan\u00fd a aktu\u00e1lne sa pou\u017e\u00edva. Skuto\u010dne chcete pokra\u010dova\u0165 v jeho \u00faprave?",
    "This feedback could not be submitted.": "T\u00fato sp\u00e4tn\u00fa v\u00e4zbu nie je mo\u017en\u00e9 odosla\u0165.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Toto je zoznam dostupn\u00fdch %s. Pre v\u00fdber je potrebn\u00e9 ozna\u010di\u0165 ich v poli a n\u00e1sledne kliknut\u00edm na \u0161\u00edpku \"Vybra\u0165\" presun\u00fa\u0165.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Toto je zoznam dostupn\u00fdch %s. Pre vymazanie je potrebn\u00e9 ozna\u010di\u0165 ich v poli a n\u00e1sledne kliknut\u00edm na \u0161\u00edpku \"Vymaza\u0165\" vymaza\u0165.",
    "This problem could not be saved.": "T\u00fato \u00falohu nebolo mo\u017en\u00e9 ulo\u017ei\u0165.",
    "This response could not be saved.": "T\u00fato odpove\u010f nie je mo\u017en\u00e9 ulo\u017ei\u0165.",
    "This response could not be submitted.": "T\u00fato odpove\u010f nie je mo\u017en\u00e9 odosla\u0165.",
    "This response has been saved but not submitted.": "T\u00e1to odpove\u010f bola ulo\u017een\u00e1, ale nebola odoslan\u00e1.",
    "This response has not been saved.": "Odpove\u010f nebola ulo\u017een\u00e1.",
    "This section could not be loaded.": "T\u00fato sekciu nie je mo\u017en\u00e9 na\u010d\u00edta\u0165.",
    "This team does not have any members.": "Tento t\u00edm nem\u00e1 \u017eiadnych \u010dlenov.",
    "This team is full.": "Tento t\u00edm je pln\u00fd.",
    "Time Sent": "\u010cas odoslania",
    "Title": "Nadpis",
    "Today": "Dnes",
    "Tomorrow": "Zajtra",
    "Tools": "N\u00e1stroje",
    "Top": "Hore",
    "Topic": "T\u00e9ma",
    "Topics": "T\u00e9my",
    "Total": "S\u00fa\u010det",
    "Turn off transcripts": "Vypn\u00fa\u0165 prepisy",
    "Turn on closed captioning": "Zapn\u00fa\u0165 skryt\u00e9 titulky",
    "Turn on transcripts": "Zapn\u00fa\u0165 prepisy",
    "Type": "Typ",
    "Type into this box to filter down the list of available %s.": "P\u00ed\u0161te do tohto po\u013ea pre vyfiltrovanie dostupn\u00fdch %s.",
    "Underline": "Pod\u010diarknu\u0165",
    "Undo": "Vr\u00e1ti\u0165 sp\u00e4\u0165",
    "Undo (Ctrl+Z)": "Sp\u00e4\u0165 (Ctrl+Z)",
    "Undo Changes": "Vr\u00e1ti\u0165 zmeny",
    "Unit": "Oddiel",
    "Unknown": "Nezn\u00e1me",
    "Unmute": "Zapn\u00fa\u0165 zvuk",
    "Unnamed Option": "Nepomenovan\u00e1 vo\u013eba",
    "Update": "Aktualiz\u00e1cia",
    "Updating with latest library content": "Aktualizujem s najnov\u0161\u00edm obsahom kni\u017enice",
    "Upload": "Odovzda\u0165",
    "Upload File": "Odovzda\u0165 s\u00fabor",
    "Upload New File": "Odovzda\u0165 nov\u00fd s\u00fabor",
    "Upload completed": "Odovzd\u00e1vanie d\u00e1t dokon\u010den\u00e9",
    "Upload failed": "Po\u010das odovzd\u00e1vania d\u00e1t nastala chyba",
    "Upload signature image.": "Odovzda\u0165 obr\u00e1zok podpisu",
    "Upload your course image.": "Odovzdajte obr\u00e1zok pre v\u00e1\u0161 kurz.",
    "Uploading": "Odovzd\u00e1va sa",
    "Url": "Url",
    "Username": "Meno pou\u017e\u00edvate\u013ea",
    "Validation Error While Saving": "Chyba valid\u00e1cie po\u010das ukladania",
    "Verified Certificate": "Overen\u00fd certifik\u00e1t",
    "Vertical space": "Vertik\u00e1lna medzera",
    "Very loud": "Ve\u013emi hlasn\u00fd",
    "Very low": "Ve\u013emi n\u00edzko",
    "Video ended": "Video skon\u010dilo",
    "Video position": "Video poz\u00edcia",
    "View": "Zobrazi\u0165",
    "View Live": "Zobrazi\u0165 aktu\u00e1lne \u00fadaje",
    "Visual aids": "Vizu\u00e1lne pom\u00f4cky",
    "Volume": "Hlasitos\u0165",
    "Warning": "Upozornenie",
    "Warnings": "Upozornenia",
    "Whole words": "Cel\u00e9 slov\u00e1",
    "Width": "\u0160\u00edrka",
    "Words: {0}": "Slov\u00e1: {0}",
    "Yes, allow edits to the active Certificate": "\u00c1no, umo\u017eni\u0165 \u00fapravy akt\u00edvneho certifik\u00e1tu",
    "Yesterday": "V\u010dera",
    "You are not currently a member of any team.": "Moment\u00e1lne nie ste \u010dlenom \u017eiadneho t\u00edmu.",
    "You commented...": "Pridali ste koment\u00e1r...",
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Odstr\u00e1nili ste krit\u00e9rium. Toto krit\u00e9rium bolo vymazan\u00e9 zo v\u0161etk\u00fdch vzorov\u00fdch odpoved\u00ed v kroku V\u00fdcvik \u0161tudentov.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Odstr\u00e1nili ste v\u0161etky vo\u013eby pre toto krit\u00e9rium. Toto krit\u00e9rium bolo vymazan\u00e9 zo v\u0161etk\u00fdch vzorov\u00fdch odpoved\u00ed v kroku V\u00fdcvik \u0161tudentov.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Odstr\u00e1nili ste vo\u013ebu. T\u00e1to vo\u013eba bola vymazan\u00e1 z pridru\u017een\u00e9ho krit\u00e9ria vo vzorov\u00fdch odpovediach v koku V\u00fdcvik \u0161tudentov. Pravdepodobne budete musie\u0165 pre toto krit\u00e9rium zvoli\u0165 nov\u00fa vo\u013ebu.",
    "You have not created any certificates yet.": "Zatia\u013e ste nevytvorili \u017eiadny certifik\u00e1t.",
    "You have not created any content groups yet.": "E\u0161te ste nevytvorili \u017eiadnu skupinu obsahu.",
    "You have not created any group configurations yet.": "E\u0161te ste nevytvorili \u017eiadne konfigur\u00e1cie skup\u00edn.",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vybrali ste akciu, ale neurobili ste \u017eiadne zmeny v jednotliv\u00fdch poliach. Pravdepodobne ste chceli pou\u017ei\u0165 tla\u010didlo vykona\u0165 namiesto ulo\u017ei\u0165.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vybrali ste akciu, ale neulo\u017eili ste jednotliv\u00e9 polia. Pros\u00edm, ulo\u017ete zmeny kliknut\u00edm na OK. Akciu budete musie\u0165 vykona\u0165 znova.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vr\u00e1mci jednotliv\u00fdch editovate\u013en\u00fdch pol\u00ed m\u00e1te neulo\u017een\u00e9 zmeny. Ak vykon\u00e1te akciu, va\u0161e zmeny bud\u00fa straten\u00e9.",
    "You must enter a valid email address in order to add a new team member": "Mus\u00edte zada\u0165 platn\u00fa e-mailov\u00fa adresu, aby ste mohli prida\u0165 nov\u00e9ho \u010dlena t\u00edmu.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Chyst\u00e1te sa odosla\u0165 va\u0161u odpove\u010f pre toto zadanie. Potom ako t\u00fato odpove\u010f odo\u0161lete, nebudete ju m\u00f4c\u0165 zmeni\u0165 ani nebudete m\u00f4c\u0165 odosla\u0165 nov\u00fa odpove\u010f.",
    "You've made some changes": "Urobili ste nejak\u00e9 zmeny",
    "You've made some changes, but there are some errors": "Urobili ste ur\u010dit\u00e9 zmeny, ale vyskytli sa nejak\u00e9 chyby",
    "Your changes have been saved.": "Va\u0161e zmeny boli ulo\u017een\u00e9.",
    "Your changes will not take effect until you save your progress.": "Va\u0161e zmeny sa neprejavia, dokia\u013e neulo\u017e\u00edte v\u00e1\u0161 priebeh.",
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "Zmeny sa neprejavia, dokia\u013e neulo\u017e\u00edte v\u00e1\u0161 priebeh. D\u00e1vajte si v\u0161ak pozor pri form\u00e1tovan\u00ed k\u013e\u00fa\u010da a hodnoty, ke\u010f\u017ee valid\u00e1cia nie je implementovan\u00e1.",
    "Your file could not be uploaded": "Nebolo mo\u017en\u00e9 odovzda\u0165 v\u00e1\u0161 s\u00fabor.",
    "Your file has been deleted.": "S\u00fabor bol odstr\u00e1nen\u00fd.",
    "Your message cannot be blank.": "Spr\u00e1va nem\u00f4\u017ee by\u0165 pr\u00e1zdna.",
    "Your message must have a subject.": "Spr\u00e1va mus\u00ed obsahova\u0165 predmet.",
    "Your policy changes have been saved.": "Zmeny politiky boli ulo\u017een\u00e9.",
    "Your video uploads are not complete.": "Va\u0161e vide\u00e1 neboli e\u0161te kompletne odovzdan\u00e9.",
    "a day": "de\u0148",
    "about a minute": "asi min\u00fatu",
    "about a month": "asi mesiac",
    "about a year": "asi rok",
    "about an hour": "pribli\u017ene hodinu",
    "anonymous": "anonym",
    "answer": "odpove\u010f",
    "certificate": "certifik\u00e1t",
    "component": "s\u00fa\u010das\u0165",
    "content group": "skupina obsahu",
    "correct": "spr\u00e1vny",
    "group configuration": "konfigur\u00e1cia skupiny",
    "incorrect": "nespr\u00e1vny",
    "last activity": "posledn\u00e1 aktivita",
    "less than a minute": "menej ako min\u00fatu",
    "name": "n\u00e1zov",
    "one letter Friday\u0004F": "P",
    "one letter Monday\u0004M": "P",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "N",
    "one letter Thursday\u0004T": "\u0160",
    "one letter Tuesday\u0004T": "U",
    "one letter Wednesday\u0004W": "S",
    "open slots": "vo\u013en\u00e9 sloty",
    "remove": "vymaza\u0165",
    "remove all": "vymaza\u0165 v\u0161etko",
    "unit": "oddiel",
    "{email} is already on the {container} team. Recheck the email address if you want to add a new member.": "{email} je u\u017e v t\u00edme pre {container}. Znovu si overte e-mailov\u00fa adresu, ak chcete prida\u0165 nov\u00e9ho \u010dlena.",
    "\u2026": "..."
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
    "DATETIME_FORMAT": "j. F Y G:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
<<<<<<< HEAD
      "%d.%m.%Y",
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. F Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%y-%m-%d",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y G:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "G:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
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

