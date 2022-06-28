

<<<<<<< HEAD
(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n > 1);
    if (typeof(v) == 'boolean') {
=======
'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
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
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n            Ne fermez pas cette fen\u00eatre avant d'avoir termin\u00e9 votre examen. Si vous fermez cette fen\u00eatre, votre session d'examen surveill\u00e9 sera termin\u00e9.\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n           Retournez sur la page du cours %(platform_name)s pour d\u00e9marrer votre examen. Lorsque vous avez fini l'examen et\n           indiqu\u00e9 qu'il est compl\u00e9t\u00e9, vous pouvez fermer cette fen\u00eatre pour terminer la session d'examen surveill\u00e9\n            et charg\u00e9 votre session pour \u00e9valuation par nos \u00e9quipes.\n          ",
    "\n        About Proctored Exams\n        ": "\nA propos des examens surveill\u00e9s",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n\u00cates vous s\u00fbr de vouloir faire cet examen sans surveillance?",
    "\n        I am ready to start this timed exam.\n      ": "\nJe suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9.",
    "\n        No, I want to continue working.\n      ": "\nNon, je veux continuer \u00e0 travailler",
    "\n        No, I'd like to continue working\n      ": "\nNon je voudrais continuer \u00e0 travailler",
=======
  const newcatalog = {
    "\n                    Make sure you are on a computer with a webcam, and that you have valid photo identification\n                    such as a driver's license or passport, before you continue.\n                ": "\n                    Assurez-vous que vous \u00eates sur un ordinateur \u00e9quip\u00e9 d'une webcam et que vous poss\u00e9dez une pi\u00e8ce d'identit\u00e9 avec photo valide\n                    comme un permis de conduire ou un passeport, avant de continuer.\n                ",
    "\n                    Your verification attempt failed. Please read our guidelines to make\n                    sure you understand the requirements for successfully completing verification,\n                    then try again.\n                ": "\n                    Votre tentative de v\u00e9rification a \u00e9chou\u00e9. Veuillez lire nos directives pour vous\n                    assurer que vous avez compris les conditions n\u00e9cessaires pour terminer avec succ\u00e8s la v\u00e9rification,\n                    puis r\u00e9essayez.\n                ",
    "\n                    Your verification has expired. You must successfully complete a new identity verification\n                    before you can start the proctored exam.\n                ": "\n                    Votre v\u00e9rification a expir\u00e9. Vous devez effectuer avec succ\u00e8s une nouvelle v\u00e9rification d'identit\u00e9\n                    avant de pouvoir commencer l'examen surveill\u00e9.\n                ",
    "\n                    Your verification is pending. Results should be available 2-3 days after you\n                    submit your verification.\n                ": "\n                    Votre v\u00e9rification est en attente. Les r\u00e9sultats seront disponibles 2-3 jours \n                    apr\u00e8s avoir soumis votre v\u00e9rification.\n                ",
    "\n                After the due date has passed, you can review the exam, but you cannot change your answers.\n            ": "\n                Une fois la date d'\u00e9ch\u00e9ance pass\u00e9e, vous pouvez revoir l'examen, mais vous ne pouvez pas modifier vos r\u00e9ponses.\n            ",
    "\n                Complete your verification before starting the proctored exam.\n            ": "\n                Terminez votre v\u00e9rification avant de commencer l'examen surveill\u00e9.\n            ",
    "\n                The time allotted for this exam has expired. Your exam has been submitted and any work you completed\n                will be graded.\n            ": "\n                Le temps allou\u00e9 pour cet examen a expir\u00e9. Votre examen a \u00e9t\u00e9 soumis et tout travail que vous avez termin\u00e9\n                sera not\u00e9.\n            ",
    "\n                You have submitted your timed exam.\n            ": "\n                Vous avez soumis votre examen chronom\u00e9tr\u00e9.\n            ",
    "\n                You must successfully complete identity verification before you can start the proctored exam.\n            ": "\n                Vous devez terminer avec succ\u00e8s la v\u00e9rification d'identit\u00e9 avant de pouvoir commencer l'examen surveill\u00e9.\n            ",
    "\n                Your proctoring session was reviewed successfully. Go to your progress page to view your exam grade.\n            ": "\n                Votre session de surveillance a \u00e9t\u00e9 examin\u00e9e avec succ\u00e8s. Acc\u00e9dez \u00e0 votre page de progression pour afficher la note de votre examen.\n            ",
    "\n            Do not close this window before you finish your exam. if you close this window, your proctoring session ends, and you will not successfully complete the proctored exam.\n          ": "\n            Ne fermez pas cette fen\u00eatre avant d'avoir termin\u00e9 votre examen. Si vous fermez cette fen\u00eatre, votre session d'examen surveill\u00e9 sera termin\u00e9.\n          ",
    "\n            If you have issues relating to proctoring, you can contact %(provider_name)s technical support by emailing %(provider_tech_support_email)s  or by calling %(provider_tech_support_phone)s.\n          ": "\n           Si vous rencontrez des probl\u00e8mes de surveillance, vous pouvez contacter le support technique %(provider_name)s en \u00e9crivant un courriel \u00e0 %(provider_tech_support_email)s ou en appelant%(provider_tech_support_phone)s.\n          ",
    "\n            Return to the %(platform_name)s course window to start your exam. When you have finished your exam and\n            have marked it as complete, you can close this window to end the proctoring session\n            and upload your proctoring session data for review.\n          ": "\n           Retournez sur la page du cours %(platform_name)s pour d\u00e9marrer votre examen. Lorsque vous avez fini l'examen et\n           indiqu\u00e9 qu'il est compl\u00e9t\u00e9, vous pouvez fermer cette fen\u00eatre pour terminer la session d'examen surveill\u00e9\n            et charg\u00e9 votre session pour \u00e9valuation par nos \u00e9quipes.\n          ",
    "\n          %(platform_name)s Rules for Online Proctored Exams\n      ": "\n          R\u00e8gles pour les examens surveill\u00e9s en ligne %(platform_name)s\n      ",
    "\n          Copy this unique exam code. You will be prompted to paste this code later before you start the exam.\n        ": "\n          Copiez ce code d'examen unique. Vous serez invit\u00e9 \u00e0 coller ce code plus tard avant de commencer l'examen.\n        ",
    "\n          For security and exam integrity reasons, we ask you to sign in to your edX account. Then we will direct you to the RPNow proctoring experience.\n        ": "\n          Pour des raisons de s\u00e9curit\u00e9 et d'int\u00e9grit\u00e9 des examens, nous vous demandons de vous connecter \u00e0 votre compte edX. Nous vous dirigerons ensuite vers l'exp\u00e9rience de surveillance RPNow.\n        ",
    "\n          Note: As part of the proctored exam setup, you will be asked\n          to verify your identity. Before you begin, make sure you are\n          on a computer with a webcam, and that you have a valid form\n          of photo identification such as a driver\u2019s license or\n          passport.\n        ": "\n          Remarque: dans le cadre de la configuration de l'examen surveill\u00e9, il vous sera demand\u00e9\n          de v\u00e9rifier votre identit\u00e9. Avant de commencer, assurez-vous que vous \u00eates\n          sur un ordinateur \u00e9quip\u00e9 d'une webcam et que vous poss\u00e9dez une pi\u00e8ce d'identit\u00e9 avec photo valide\n          comme un permis de conduire ou\n          un passeport.\n        ",
    "\n          Step 1\n        ": "\n          \u00c9tape 1\n        ",
    "\n          Step 2\n        ": "\n          \u00c9tape 2\n        ",
    "\n          Step 3\n        ": "\n          \u00c9tape 3\n        ",
    "\n          You will be guided through steps to set up online proctoring software and verify your identity.\n        ": "\n          Vous serez guid\u00e9 \u00e0 travers les \u00e9tapes de configuration du logiciel de surveillance en ligne et de v\u00e9rification de votre identit\u00e9.\n        ",
    "\n         You must adhere to the following rules while you complete this exam.\n         <strong>If you violate these rules, you will receive a score of 0 on the exam, and you will not be eligible for academic course credit.\n         </strong></br>\n      ": "\n         Vous devez respecter les r\u00e8gles suivantes pendant que vous terminez cet examen.\n         <strong>Si vous enfreignez ces r\u00e8gles, vous recevrez un score de 0 \u00e0 l'examen et vous ne serez pas \u00e9ligible pour un cr\u00e9dit de cours acad\u00e9mique.\n         </strong></br>\n      ",
    "\n        &#8226; You have %(total_time)s to complete this exam. </br>\n        &#8226; Once you start the exam, you cannot stop the timer. </br>\n        &#8226; For all question types, you must click \"submit\" to complete your answer. </br>\n        &#8226; If time expires before you click \"End My Exam\", only your submitted answers will be graded.\n      ": "\n        &#8226; Vous avez %(total_time)s pour terminer cet examen.</br>\n        &#8226; Une fois que vous avez commenc\u00e9 l'examen, vous ne pouvez pas arr\u00eater le chronom\u00e8tre.</br>\n        &#8226; Pour tous les types de questions, vous devez cliquer sur \u00absoumettre\u00bb pour compl\u00e9ter votre r\u00e9ponse.</br>\n        &#8226; Si le d\u00e9lai expire avant que vous ne cliquiez sur \u00abTerminer mon examen\u00bb, seules les r\u00e9ponses que vous avez soumises seront not\u00e9es.\n      ",
    "\n        A system error has occurred with your proctored exam. Please reach out to \n        <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">%(platform_name)s Support</a> for \n        assistance, and return to the exam once you receive further instructions.\n      ": "\n        Une erreur syst\u00e8me est survenue avec votre examen surveill\u00e9. Veuillez contacter\n        <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">le support %(platform_name)s</a>pour\n        de l'assistance et retournez \u00e0 l'examen une fois que vous recevrez plus d'instructions.\n      ",
    "\n        A system error has occurred with your proctored exam. Please reach out to your course \n        team at <a href=\"mailto:%(proctoring_escalation_email)s\">%(proctoring_escalation_email)s</a> \n        for assistance, and return to the exam once you receive further instructions.\n      ": "\n        Une erreur syst\u00e8me est survenue avec votre examen surveill\u00e9. Veuillez contacter l'\u00e9quipe du cours\n        \u00e0 <a href=\"mailto:%(proctoring_escalation_email)s\">%(proctoring_escalation_email)s</a> \n        pour de l'assistance et retournez \u00e0 l'examen une fois que vous recevrez plus d'instructions.\n      ",
    "\n        About Proctored Exams\n        ": "\nA propos des examens surveill\u00e9s",
    "\n        Are you sure you want to take this exam without proctoring?\n      ": "\n\u00cates vous s\u00fbr de vouloir faire cet examen sans surveillance?",
    "\n        Create your onboarding profile for faster access in the future\n      ": "\n        Cr\u00e9ez votre profil d'int\u00e9gration pour un acc\u00e8s plus rapide \u00e0 l'avenir\n      ",
    "\n        Due to unsatisfied prerequisites, you can only take this exam without proctoring.\n      ": "\n        En raison de pr\u00e9requis non satisfaits, vous ne pouvez que passer cet examen sans surveillance.\n      ",
    "\n        Establish your identity with the proctoring system to take a proctored exam\n      ": "\n        \u00c9tablissez votre identit\u00e9 avec le syst\u00e8me de surveillance pour passer un examen surveill\u00e9\n      ",
    "\n        Get familiar with proctoring for real exams later in the course. This practice exam has no impact\n        on your grade in the course.\n      ": "\n        Familiarisez-vous avec la surveillance pour de vrais examens plus tard dans le cours. Cet examen de pratique n'a aucun impact\n        sur votre note dans le cours.\n      ",
    "\n        Hello %(username)s,\n    ": "\n        Bonjour %(username)s,\n    ",
    "\n        I am ready to start this timed exam.\n      ": "\nJe suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9.",
    "\n        If you cannot find this email, you can <a href=\"%(reset_link)s\" target=\"_blank\">reset your password</a> to\n        activate your account.\n      ": "\n        Si vous ne trouvez pas ce courriel, vous pouvez <a href=\"%(reset_link)s\" target=\"_blank\">r\u00e9initialiser votre mot de passe</a> pour\n        activer votre compte.\n      ",
    "\n        If you cannot find this email, you can reset your password to activate your account.\n      ": "\n        Si vous ne trouvez pas ce courriel, vous pouvez r\u00e9initialiser votre mot de passe pour activer votre compte.\n      ",
    "\n        If you have concerns about your proctoring session results, contact your course team.\n      ": "\n        Si vous avez des inqui\u00e9tudes concernant les r\u00e9sultats de votre session de surveillance, contactez votre \u00e9quipe de cours.\n      ",
    "\n        If you have questions about the status of your proctoring session results, contact %(platform_name)s Support.\n      ": "\n        Si vous avez des questions sur l'\u00e9tat des r\u00e9sultats de votre session de surveillance, contactez le support %(platform_name)s.\n      ",
    "\n        If you take this exam without proctoring, you will not be eligible for course credit or the MicroMasters credential if either applies to this course.\n      ": "\n        Si vous passez cet examen sans surveillance, vous ne serez pas \u00e9ligible au cr\u00e9dit de cours ou aux informations d'identification MicroMasters si l'un ou l'autre s'applique \u00e0 ce cours.\n      ",
    "\n        Make sure you:\n      ": "\n        Assurez-vous :\n      ",
    "\n        No, I want to continue working.\n      ": "\nNon, je veux continuer \u00e0 travailler",
    "\n        No, I'd like to continue working\n      ": "\nNon je voudrais continuer \u00e0 travailler",
    "\n        Once your profile has been reviewed, you will receive an email with review results. The email will come from\n        <a href=\"mailto:%(learner_notification_from_email)s\">%(learner_notification_from_email)s</a>.\n        Make sure this email has been added to your inbox filter.\n      ": "\n        Une fois votre profil examin\u00e9, vous recevrez un courriel contenant les r\u00e9sultats de l'examen. Le courriel proviendra de\n        <a href=\"mailto:%(learner_notification_from_email)s\">%(learner_notification_from_email)s</a>.\n        Assurez-vous que cette adresse courriel a \u00e9t\u00e9 ajout\u00e9e \u00e0 votre filtre de bo\u00eete de r\u00e9ception.\n      ",
    "\n        Please contact\n        <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>\n        if you have questions.\n      ": "\n        Veuillez contacter\n        <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>\n        si vous avez des questions.\n      ",
    "\n        Practice exams do not affect your grade.\n        You have completed this practice exam and can continue with your course work.\n      ": "\n        Les examens de pratique n'affectent pas votre note.\n        Vous avez termin\u00e9 cet examen de pratique et pouvez continuer votre travail de cours.\n      ",
    "\n        Practice taking a proctored test\n      ": "\n        Entra\u00eenez-vous \u00e0 passer un examen surveill\u00e9\n      ",
    "\n        Select the exam code, then copy it using Control + C (Windows) or Command + C (Mac).\n      ": "\n        S\u00e9lectionnez le code d'examen, puis copiez-le en utilisant Control + C (Windows) ou Command + C (Mac).\n      ",
    "\n        Start your system check now. A new window will open for this step and you will verify your identity.\n      ": "\n        D\u00e9marrez votre v\u00e9rification du syst\u00e8me maintenant. Une nouvelle fen\u00eatre s'ouvrira pour cette \u00e9tape et vous v\u00e9rifierez votre identit\u00e9.\n      ",
    "\n        The following additional rules apply to this exam. These rules take precedence over the Rules for Online Proctored Exams.</br> </br>\n\n        %(exam_review_policy)s </br>\n      ": "\n        Les r\u00e8gles suppl\u00e9mentaires suivantes s'appliquent \u00e0 cet examen. Ces r\u00e8gles ont priorit\u00e9 sur les r\u00e8gles des examens surveill\u00e9s en ligne.</br> </br>\n\n        %(exam_review_policy)s </br>\n      ",
    "\n        The result will be visible after <strong id=\"wait_deadline\"> Loading... </strong>\n    ": "\n        Le r\u00e9sultat sera visible apr\u00e8s <strong id=\"wait_deadline\"> Chargement... </strong>\n    ",
    "\n        There was a problem with your practice proctoring session\n      ": "\n        Il y a eu un probl\u00e8me avec votre s\u00e9ance d'examen surveill\u00e9 de pratique\n      ",
    "\n        To appeal your proctored exam results, please reach out with any relevant information\n        about your exam at \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ": "\n        Pour faire appel de vos r\u00e9sultats d'examen surveill\u00e9s, veuillez contacter avec toutes\n        les informations pertinentes \u00e0 propos de votre examen\n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ",
    "\n        To be eligible for credit or the program credential associated with this course, you must pass the proctoring review for this exam.\n    ": "\n      Pour \u00eatre \u00e9ligible au cr\u00e9dit ou aux informations d'identification du programme associ\u00e9s \u00e0 ce cours, vous devez avoir une revue de surveillance valide pour cet examen.\n    ",
    "\n        Try a proctored exam\n      ": "\n        Essayez un examen surveill\u00e9\n      ",
    "\n        You have submitted this practice proctored exam\n      ": "\n        Vous avez soumis cet examen de pratique surveill\u00e9\n      ",
    "\n        You will be guided through steps to set up online proctoring software and verify your identity.</br>\n      ": "\n        Vous serez guid\u00e9 \u00e0 travers les \u00e9tapes de configuration du logiciel de surveillance en ligne et de v\u00e9rification de votre identit\u00e9.</br>\n      ",
    "\n        You will have %(total_time)s to complete your exam.\n    ": "\n        Vous aurez %(total_time)s afin de terminer votre examen.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was reviewed and the\n        course team has identified one or more violations of the proctored exam rules. Examples\n        of issues that may result in a rules violation include browsing\n        the internet, blurry or missing photo identification, using a phone,\n        or getting help from another person. As a result of the identified issue(s),\n        you did not successfully meet the proctored exam requirements.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" dans\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 examin\u00e9\n        et l'\u00e9quipe du cours a identifi\u00e9 une ou plusieurs violations des r\u00e8gles d'examen surveill\u00e9es. Exemples\n        des probl\u00e8mes pouvant entra\u00eener une violation des r\u00e8gles incluent la navigation\n        sur internet, une pi\u00e8ce d'identit\u00e9 avec photo floue ou manquante, utiliser un t\u00e9l\u00e9phone,\n        ou obtenir de l'aide d'une autre personne. En raison des probl\u00e8mes identifi\u00e9(s),\n        vous n'avez pas satisfait aux exigences de l'examen surveill\u00e9.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was reviewed and you\n        met all proctoring requirements.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" pour\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 examin\u00e9 et vous\n        avez satisfait \u00e0 toutes les exigences de surveillance.\n    ",
    "\n        Your proctored exam \"%(exam_name)s\" in\n        <a href=\"%(course_url)s\">%(course_name)s</a> was submitted\n        successfully and will now be reviewed to ensure all exam\n        rules were followed. You should receive an email with your exam\n        status within 5 business days.\n    ": "\n        Votre examen surveill\u00e9 \"%(exam_name)s\" pour\n        <a href=\"%(course_url)s\">%(course_name)s</a> a \u00e9t\u00e9 soumis\n        avec succ\u00e8s et sera maintenant examin\u00e9 pour garantir que tous les r\u00e8gles\n        ont \u00e9t\u00e9 suivies. Vous devriez recevoir un courriel avec votre statut\n        d'examen dans les 5 jours ouvrables.\n    ",
    "\n        Your proctoring session ended before you completed this practice exam.\n        You can retry this practice exam if you had problems setting up the online proctoring software.\n      ": "\n        Votre session de surveillance s'est termin\u00e9e avant que vous ayez termin\u00e9 cet examen de pratique.\n        Vous pouvez r\u00e9essayer cet examen de pratique si vous rencontrez des probl\u00e8mes lors de la configuration du logiciel de surveillance en ligne.\n      ",
    "\n        Your proctoring session was reviewed, but did not pass all requirements\n      ": "\n        Votre session de surveillance a \u00e9t\u00e9 examin\u00e9e, mais n'a pas satisfait \u00e0 toutes les exigences\n      ",
    "\n      Additional Exam Rules\n    ": "\n      R\u00e8gles d'examen suppl\u00e9mentaires\n    ",
    "\n      After you submit your exam, your exam will be graded.\n    ": "\nApr\u00e8s avoir soumis votre examen, votre examen sera not\u00e9.",
    "\n      Alternatively, you can end your exam.\n    ": "\n      Vous pouvez \u00e9galement mettre fin \u00e0 votre examen.\n    ",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "\n      Are you sure that you want to submit your timed exam?\n    ": "\n      \u00cates-vous s\u00fbr de vouloir soumettre votre examen \u00e0 temps limit\u00e9?\n    ",
    "\n      Are you sure you want to end your proctored exam?\n    ": "\n      \u00cates-vous s\u00fbre de vouloir terminer votre examen surveill\u00e9?\n    ",
    "\n      Because the due date has passed, you are no longer able to take this exam.\n    ": "\nVous ne pouvez plus passer cet examen car, l\u2019\u00e9ch\u00e9ance est pass\u00e9e.",
    "\n      Error with proctored exam\n    ": "\nErreur lors de l'examen surveill\u00e9",
<<<<<<< HEAD
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      Si vous avez des incapacit\u00e9s,\n      vous pouvez demander du temps suppl\u00e9mentaire.\n      Contactez l'\u00e9quipe du cours pour les demandes de temps suppl\u00e9mentaire.\n    ",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions \u00e0 propos du statut de votre examen surveill\u00e9, contactez le support %(platform_name)s.\n    ",
    "\n      The due date for this exam has passed\n    ": "\n      La date limite pour cet examen est pass\u00e9e\n    ",
    "\n      This exam is proctored\n    ": "\nCet examen est surveill\u00e9",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\n      Pour voir votre examen et vos r\u00e9ponses, cliquez sur <strong>Voir mon examen</strong>. Le statut de la revue de l'examen est disponible dans le menu de gauche.\n    ",
    "\n      Yes, submit my timed exam.\n    ": "\nOui, soumettre cet examen \u00e0 temps limit\u00e9.",
    "\n      You have submitted this proctored exam for review\n    ": "\n      Vous avez envoyer votre examen surveill\u00e9 pour \u00e9valuation\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n     Vos r\u00e9sultats d'examen surveill\u00e9 d'entrainement: <b class=\"failure\"> \u00c9chec </b>\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s est un examen minut\u00e9 (%(total_time)s)\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\nVous n'avez pas satisfait les pr\u00e9requis suivants:",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": " A ce stade vous devez suivre les <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">r\u00e9gles de surveillance</a> pour satisfaire les revues de votre examen surveill\u00e9. ",
=======
    "\n      If you already have an onboarding profile approved through another course,\n      this submission will not be reviewed. You may retry this exam at any time\n      to validate that your setup still meets the requirements for proctoring.\n    ": "\n      Si vous avez d\u00e9j\u00e0 un profil d'int\u00e9gration approuv\u00e9 dans un autre cours,\n      Cette soumission ne sera pas examin\u00e9e. Vous pouvez reprendre ce test\n      \u00e0 tout moment afin de valider votre configuration pour la surveillance.\n    ",
    "\n      If you continue to have trouble please contact <a href=\"%(link_urls.contact_us)s\" target=\"_blank\">\n      %(platform_name)s Support</a>.\n    ": "\n      Si vous continuez \u00e0 avoir des probl\u00e8mes, veuillez contacter<a href=\"%(link_urls.contact_us)s\" target=\"_blank\">\n      le support %(platform_name)s</a>.\n    ",
    "\n      If you do not have an onboarding profile with the system,\n      Verificient will review your submission and create an onboarding\n      profile to grant you access to proctored exams. Onboarding\n      profile review can take 2+ business days.\n    ": "\n      Si vous n'avez pas de profil d'int\u00e9gration avec le syst\u00e8me,\n      Verificient examinera votre soumission et cr\u00e9era un profil\n      d'int\u00e9gration, vous permettant d'acc\u00e9der aux examens surveill\u00e9s.\n      L'examen du profil d'int\u00e9gration peut prendre plus de 2 jours ouvrables.\n    ",
    "\n      If you have disabilities,\n      you might be eligible for an additional time allowance on timed exams.\n      Ask your course team for information about additional time allowances.\n    ": "\n      Si vous avez des incapacit\u00e9s,\n      vous pouvez demander du temps suppl\u00e9mentaire.\n      Contactez l'\u00e9quipe du cours pour les demandes de temps suppl\u00e9mentaire.\n    ",
    "\n      If you have made an error in this submission you may restart the onboarding process. \n      Your current submission will be removed and will not receive a review.\n    ": "\n      Si vous avez fait une erreur dans cette soumission, vous pouvez red\u00e9marrer le processus d'int\u00e9gration.\n      Votre soumission actuelle sera supprim\u00e9e et ne sera pas examin\u00e9e.\n    ",
    "\n      If you have questions about the status of your proctored exam results, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions \u00e0 propos du statut de votre examen surveill\u00e9, contactez le support %(platform_name)s.\n    ",
    "\n      If you have questions about the status of your requirements, contact %(platform_name)s Support.\n    ": "\n      Si vous avez des questions sur l'\u00e9tat de vos exigences, contactez le support %(platform_name)s .\n    ",
    "\n      Important\n    ": "\n      Important\n    ",
    "\n      Make sure that you have selected \"Submit\" for each problem before you submit your exam.\n    ": "\n      Assurez-vous que vous avez s\u00e9lectionn\u00e9 \"Soumettre\" pour chaque probl\u00e8me avant de soumettre votre examen.\n    ",
    "\n      Once your profile has been reviewed, you will receive an email\n      with review results. The email will come from\n      <a href=\"mailto:%(learner_notification_from_email)s\">\n        %(learner_notification_from_email)s\n      </a>,\n      so make sure this email has been added to your inbox filter.\n    ": "\n      Une fois votre profil examin\u00e9, vous recevrez un courriel\n      avec les r\u00e9sultats de l'examen. Le courriel proviendra de\n      <a href=\"mailto:%(learner_notification_from_email)s\">\n        %(learner_notification_from_email)s\n      </a>,\n      alors assurez-vous que cette adresse courriel a \u00e9t\u00e9 ajout\u00e9e \u00e0 votre filtre de bo\u00eete de r\u00e9ception.\n    ",
    "\n      Please check your registered email's Inbox and Spam folders for an activation email from\n      %(platform_name)s.\n    ": "\n      Veuillez v\u00e9rifier votre bo\u00eete de r\u00e9ception et vos dossiers de pourriels pour un courriel d'activation de\n      %(platform_name)s.\n    ",
    "\n      Please complete an onboarding exam before attempting this exam.\n    ": "\n      Veuillez passer un examen d'int\u00e9gration avant de tenter cet examen.\n    ",
    "\n      Please contact\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> if you have questions.\n    ": "\n      Veuillez contacter\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> si vous avez des questions.\n    ",
    "\n      Please contact\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> if you have questions. You may retake this onboarding exam by clicking \"Retry my exam\".\n    ": "\n      Veuillez contacter\n      <a href=\"mailto:%(integration_specific_email)s\">\n        %(integration_specific_email)s\n      </a> si vous avez des questions. Vous pouvez repasser cet examen d'int\u00e9gration en cliquant sur \"R\u00e9essayer mon examen\".\n    ",
    "\n      Proctored Exam Rules\n    ": "\n      R\u00e8gles d'examen surveill\u00e9\n    ",
    "\n      Proctoring for this course is provided via %(provider_name)s.  Onboarding review, including identity verification, can take 2+ business days.\n    ": "\n      La surveillance de ce cours est assur\u00e9e via%(provider_name)s.  L'examen de l'int\u00e9gration, y compris la v\u00e9rification de l'identit\u00e9, peut prendre plus de 2 jours ouvrables.\n    ",
    "\n      Proctoring for your exam is provided via %(provider_name)s.\n      If you have questions about the status of your onboarding exam, contact\n      <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>.\n    ": "\n      La surveillance de votre examen est assur\u00e9e via %(provider_name)s.\n      Si vous avez des questions sur l'\u00e9tat de votre examen d'int\u00e9gration, contactez\n      <a href=\"mailto:%(integration_specific_email)s\">%(integration_specific_email)s</a>.\n    ",
    "\n      Set up and start your proctored exam\n    ": "\n      Configurez et d\u00e9marrez votre examen surveill\u00e9\n    ",
    "\n      The content of this exam can only be viewed through the RPNow\n      application. If you have yet to complete your exam, please\n      return to the RPNow application to proceed.\n    ": "\n      Le contenu de cet examen ne peut \u00eatre consult\u00e9 que via l'application\n      RPNnow. Si vous n'avez pas encore termin\u00e9 votre examen, veuillez\n      retournez \u00e0 l'application RPNow pour continuer.\n    ",
    "\n      The due date for this exam has passed\n    ": "\n      La date limite pour cet examen est pass\u00e9e\n    ",
    "\n      This exam is proctored\n    ": "\nCet examen est surveill\u00e9",
    "\n      To be eligible for credit or the program credential associated with this course, you must pass the proctoring review for this exam.\n\n    ": "\n      Pour \u00eatre \u00e9ligible au cr\u00e9dit ou aux informations d'identification du programme associ\u00e9s \u00e0 ce cours, vous devez r\u00e9ussir l'examen de surveillance pour cet examen.\n\n    ",
    "\n      To view your exam questions and responses, select <strong>View my exam</strong>. The exam's review status is shown in the left navigation pane.\n    ": "\n      Pour voir votre examen et vos r\u00e9ponses, cliquez sur <strong>Voir mon examen</strong>. Le statut de la revue de l'examen est disponible dans le menu de gauche.\n    ",
    "\n      Why this is important to you:\n    ": "\n      Pourquoi cela est important pour vous :\n    ",
    "\n      Yes, submit my timed exam.\n    ": "\nOui, soumettre cet examen \u00e0 temps limit\u00e9.",
    "\n      You are taking \"%(exam_display_name)s\" as an onboarding exam. You must click \u201cYes, end my proctored exam\u201d and submit your proctoring session to complete onboarding.\n    ": "\n      Vous passez \"%(exam_display_name)s\" comme un examen d'int\u00e9gration. Vous devez cliquer sur \u00abOui, terminer mon examen surveill\u00e9\u00bb et soumettre votre session de surveillance pour terminer l'int\u00e9gration.\n    ",
    "\n      You have not activated your account.\n    ": "\n      Vous n'avez pas activ\u00e9 votre compte.\n    ",
    "\n      You have submitted this proctored exam for review\n    ": "\n      Vous avez envoyer votre examen surveill\u00e9 pour \u00e9valuation\n    ",
    "\n      You must complete an onboarding exam before taking this proctored exam\n    ": "\n      Vous devez passer un examen d'int\u00e9gration avant de passer cet examen surveill\u00e9\n    ",
    "\n      Your %(platform_name)s account has not yet been activated. To take the proctored exam,\n      you are required to activate your account.\n    ": "\n      Votre compte %(platform_name)s n'a pas encore \u00e9t\u00e9 activ\u00e9. Pour passer l'examen surveill\u00e9,\n      vous devez activer votre compte.\n    ",
    "\n      Your exam is ready to be resumed.\n    ": "\n      Votre examen est pr\u00eat \u00e0 \u00eatre repris.\n    ",
    "\n      Your onboarding exam failed to pass all requirements.\n    ": "\n      Votre examen d'int\u00e9gration n'a pas satisfait \u00e0 toutes les exigences.\n    ",
    "\n      Your practice proctoring results: <b class=\"failure\"> Unsatisfactory </b>\n    ": "\n     Vos r\u00e9sultats d'examen surveill\u00e9 d'entrainement: <b class=\"failure\"> \u00c9chec </b>\n    ",
    "\n      Your profile has been established, and you're ready to take proctored exams in this course.\n    ": "\n      Votre profil a \u00e9t\u00e9 \u00e9tabli et vous \u00eates pr\u00eat \u00e0 passer les examens surveill\u00e9s dans ce cours.\n    ",
    "\n    %(exam_name)s is a Timed Exam (%(total_time)s)\n    ": "\n    %(exam_name)s est un examen minut\u00e9 (%(total_time)s)\n    ",
    "\n    Error: There was a problem with your onboarding session\n  ": "\n    Erreur : Un probl\u00e8me est survenu lors de votre session d'int\u00e9gration\n  ",
    "\n    If you have any questions about your results, you can reach out at \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ": "\n    Si vous avez des questions \u00e0 propos de vos r\u00e9sultats, vous pouvez contacter \n        <a href=\"%(contact_url)s\">\n            %(contact_url_text)s\n        </a>.\n    ",
    "\n    Proctoring onboarding exam\n  ": "\n    Examen d'int\u00e9gration\n  ",
    "\n    The following prerequisites are in a <strong>pending</strong> state and must be successfully completed before you can proceed:\n    ": "\n    Les pr\u00e9requis suivants sont dans un \u00e9tat <strong>en attente </strong>et doivent \u00eatre compl\u00e9t\u00e9s avec succ\u00e8s avant de pouvoir proc\u00e9der:\n    ",
    "\n    You can take this exam with proctoring only when all prerequisites have been successfully completed.\n    ": "\n    Vous ne pouvez passer cet examen avec surveillance que lorsque tous les pr\u00e9requis ont \u00e9t\u00e9 remplis avec succ\u00e8s.\n    ",
    "\n    You did not satisfy the following prerequisites:\n    ": "\nVous n'avez pas satisfait les pr\u00e9requis suivants:",
    "\n    You did not satisfy the requirements for taking this exam with proctoring.\n    ": "\n    Vous ne remplissez pas les conditions requises pour passer cet examen avec surveillance.\n    ",
    "\n    You have not completed the prerequisites for this exam. All requirements must be satisfied before you can take this proctored exam.\n    ": "\n    Vous n'avez pas rempli les conditions pr\u00e9alables pour cet examen. Toutes les conditions doivent \u00eatre remplies avant de pouvoir passer cet examen surveill\u00e9.\n    ",
    "\n    You have submitted this onboarding exam\n  ": "\n    Vous avez soumis cet examen d'int\u00e9gration\n  ",
    "\n    You will be guided through online proctoring software set up and identity verification.\n  ": "\n    Vous serez guid\u00e9 \u00e0 travers la configuration du logiciel de surveillance en ligne et la v\u00e9rification d'identit\u00e9.\n  ",
    "\n    Your onboarding exam is being reviewed. Before attempting this exam, please allow 2+ business days for your onboarding exam to be reviewed.\n  ": "\n    Votre examen d'int\u00e9gration est en cours de r\u00e9vision. Avant de tenter cet examen, veuillez pr\u00e9voir plus de 2 jours ouvrables pour que votre examen d'int\u00e9gration soit examin\u00e9.\n  ",
    "\n    Your onboarding profile was reviewed successfully\n  ": "\n    Votre profil d'int\u00e9gration a \u00e9t\u00e9 examin\u00e9 avec succ\u00e8s\n  ",
    "\n    Your onboarding session was reviewed, but did not pass all requirements\n  ": "\n    Votre session d'int\u00e9gration a \u00e9t\u00e9 examin\u00e9e, mais n'a pas satisfait \u00e0 toutes les exigences\n  ",
    "\n    Your proctoring session ended before you completed this onboarding exam.\n    You should retry this onboarding exam.\n  ": "\n    Votre session de surveillance s'est termin\u00e9e avant que vous ayez termin\u00e9 cet examen d'int\u00e9gration.\n    Vous devriez r\u00e9essayer cet examen d'int\u00e9gration.\n  ",
    " ${price} {currency} )": " ${price} {currency} )",
    " From this point in time, you must follow the <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">online proctoring rules</a> to pass the proctoring review for your exam. ": " A ce stade vous devez suivre les <a href=\"%(link_urls.online_proctoring_rules)s\" target=\"_blank\">r\u00e9gles de surveillance</a> pour satisfaire les revues de votre examen surveill\u00e9. ",
    " Member": [
      "Membre",
      "Membres",
      "Membres"
    ],
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    " Your Proctoring Session Has Started ": "Votre session d'examen surveill\u00e9 a d\u00e9marr\u00e9",
    " and ": "et",
    " and {num_of_minutes} minute": "et {num_of_minutes} minute",
    " and {num_of_minutes} minutes": "et  {num_of_minutes} minutes",
<<<<<<< HEAD
    " to complete and submit the exam.": "pour compl\u00e9ter et soumettre l'examen.",
    "%(cohort_name)s (%(user_count)s)": "%(cohort_name)s (%(user_count)s)",
    "%(errorCount)s error found in form.": [
      "%(errorCount)s erreur trouv\u00e9e dans le formulaire.",
=======
    " learner account cannot be found and has not been added to the exception list": " le compte de l'apprenant est introuvable et n'a pas \u00e9t\u00e9 ajout\u00e9 \u00e0 la liste des exceptions",
    " learner accounts cannot be found and have not been added to the exception list": " les comptes des apprenants sont introuvables et n'ont pas \u00e9t\u00e9 ajout\u00e9s \u00e0 la liste des exceptions",
    " learner already appears on the exception list in this course": " l'apprenant appara\u00eet d\u00e9j\u00e0 sur la liste des exceptions dans ce cours",
    " learner encountered an unknown error": "apprenant a rencontr\u00e9 une erreur inconnue",
    " learner has an active certificate invalidation in this course and has not been added to the exception list": " l'apprenant a une invalidation d'attestation active dans ce cours et n'a pas \u00e9t\u00e9 ajout\u00e9 \u00e0 la liste des exceptions",
    " learner is not enrolled in this course and has not been added to the exception list": " l'apprenant n'est pas inscrit  \u00e0 ce cours et n'a pas \u00e9t\u00e9 ajout\u00e9 \u00e0 la liste des exceptions",
    " learner was successfully added to the exception list": "apprenant ajout\u00e9 avec succ\u00e8s \u00e0 la liste de d\u00e9rogations",
    " learners already appear on the exception list in this course": " les apprenants figurent d\u00e9j\u00e0 sur la liste des exceptions dans ce cours",
    " learners are not enrolled in this course and have not added to the exception list": " les apprenants ne sont pas inscrits \u00e0 ce cours et n'ont pas \u00e9t\u00e9 ajout\u00e9s \u00e0 la liste des exceptions",
    " learners encountered unknown errors": "apprenants ont rencontr\u00e9 des erreurs inconnues",
    " learners have an active certificate invalidation in this course and have not been added to the exception list": " les apprenants ont une invalidation d'attestation active dans ce cours et n'ont pas \u00e9t\u00e9 ajout\u00e9s \u00e0 la liste des exceptions",
    " learners were successfully added to exception list": "apprenants ajout\u00e9s avec succ\u00e8s \u00e0 la liste de d\u00e9rogations",
    " record is not in the correct format and has not been added to the exception list": " l'enregistrement n'est pas dans le bon format et n'a pas \u00e9t\u00e9 ajout\u00e9 \u00e0 la liste des exceptions",
    " records are not in the correct format and have not been added to the exception list": " les enregistrements ne sont pas dans le bon format et n'ont pas \u00e9t\u00e9 ajout\u00e9s \u00e0 la liste des exceptions",
    " to complete and submit the exam.": "pour compl\u00e9ter et soumettre l'examen.",
    "${listPrice}": "${listPrice}",
    "%(cohort_name)s (%(user_count)s)": "%(cohort_name)s (%(user_count)s)",
    "%(comments_count)s %(span_sr_open)scomments %(span_close)s": "%(comments_count)s %(span_sr_open)scommentaires %(span_close)s",
    "%(comments_count)s %(span_sr_open)scomments (%(unread_comments_count)s unread comments)%(span_close)s": "%(comments_count)s %(span_sr_open)scommentaires (%(unread_comments_count)s commentaires non lus)%(span_close)s",
    "%(errorCount)s error found in form.": [
      "%(errorCount)s erreur trouv\u00e9e dans le formulaire.",
      "%(errorCount)s erreurs trouv\u00e9es dans le formulaire.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "%(errorCount)s erreurs trouv\u00e9es dans le formulaire."
    ],
    "%(field)s can only contain up to %(count)d characters.": "Les %(field)s ne peuvent pas d\u00e9passer %(count)d caract\u00e8res.",
    "%(field)s must have at least %(count)d characters.": "Les %(field)s doivent avoir au moins %(count)d caract\u00e8res.",
    "%(new_item_message)s": "%(new_item_message)s",
    "%(programName)s Home Page.": "Page d'accueil %(programName)s.",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9",
<<<<<<< HEAD
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s"
    ],
    "%(type)s Component Template Menu": "%(type)s Menu Mod\u00e8le de Composant",
=======
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s",
      ""
    ],
    "%(type)s Component Template Menu": "%(type)s Menu Mod\u00e8le de Composant",
    "%(value)s hour": [
      "%(value)s heure",
      "%(value)s heures",
      "%(value)s heures"
    ],
    "%(value)s minute": [
      "%(value)s minute",
      "%(value)s minutes",
      "%(value)s minutes"
    ],
    "%(value)s second": [
      "%(value)s seconde",
      "%(value)s secondes",
      "%(value)s secondes"
    ],
    "%d day": [
      "%d jour",
      "%d jours",
      "%d jours"
    ],
    "%d minute": [
      "%d minute",
      "%d minutes",
      "%d minutes"
    ],
    "%d month": [
      "%d mois",
      "%d mois",
      "%d mois"
    ],
    "%d year": [
      "%d an",
      "%d ans",
      "%d ans"
    ],
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "%s ago": "il y a %s ",
    "%s from now": "depuis %s ",
    "(Add signatories for a certificate)": "(Ajouter des signatures pour le certificat)",
    "(Caption will be displayed when you start playing the video.)": "(Les sous-titres s'afficheront quand vous lancerez la vid\u00e9o.)",
<<<<<<< HEAD
    "(Optional)": "(Optionnel)",
    "(Required Field)": "(Champ requis)",
    "(Self-paced) Ended {end}": "(\u00c0 votre rythme) Termin\u00e9 {end}",
    "(contains %(student_count)s student)": [
      "(contient %(student_count)s \u00e9tudiant)",
=======
    "(Community TA)": "(Assistant technique)",
    "(Optional)": "(Optionnel)",
    "(Read-only)": "(Lecture-seule)",
    "(Required Field)": "(Champ requis)",
    "(Self-paced) Ended {end}": "(\u00c0 votre rythme) Termin\u00e9 {end}",
    "(Self-paced) Ends {end}": "(\u00c0 votre rythme) Se finit \u00e0 {end}",
    "(Self-paced) Started {start}": "(\u00c0 votre rythme) A commenc\u00e9 \u00e0 {start}",
    "(Self-paced) Starts {start}": "(\u00c0 votre rythme) Commence \u00e0 {start}",
    "(Staff)": "(\u00c9quipe p\u00e9dagogique)",
    "(contains %(student_count)s student)": [
      "(contient %(student_count)s \u00e9tudiant)",
      "(contient %(student_count)s \u00e9tudiants)",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "(contient %(student_count)s \u00e9tudiants)"
    ],
    "(optional)": "(optionnel)",
    "(required)": "(requis)",
    "(required):": "(requis):",
    "- Sortable": "- Triable",
    "6 a.m.": "6:00",
    "6 p.m.": "18:00",
    ": video upload complete.": ": t\u00e9l\u00e9chargement de la vid\u00e9o termin\u00e9",
<<<<<<< HEAD
    "A Password is required": "Un Mot de passe est requis.",
    "A driver's license, passport, or other government-issued ID with your name and photo": "Un permis de conduire, un passeport ou toute pi\u00e8ce d'identit\u00e9 avec votre nom et photo.",
=======
    "<%- user %> already in exception list.": "<%- user %> est d\u00e9j\u00e0 dans la liste d'exceptions.",
    "<%- user %> has been successfully added to the exception list. Click Generate Exception Certificate below to send the certificate.": "<%- user %> a \u00e9t\u00e9 ajout\u00e9 avec succ\u00e8s \u00e0 la liste des exceptions. Cliquez sur g\u00e9n\u00e9rer une attestation d'exception ci-dessous pour envoyer l'attestation.",
    "A Password is required": "Un Mot de passe est requis.",
    "A driver's license, passport, or other government-issued ID with your name and photo": "Un permis de conduire, un passeport ou toute pi\u00e8ce d'identit\u00e9 avec votre nom et photo.",
    "A highlight to look forward to this week.": "Un fait marquant qui vous attend cette semaine.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "A list of courses you have just enrolled in as a verified student": "Une liste de cours o\u00f9 vous venez de vous inscrire en tant qu'\u00e9tudiant v\u00e9rifi\u00e9",
    "A name that identifies your team (maximum 255 characters).": "Un nom qui d\u00e9signe votre \u00e9quipe (maximum 255 caract\u00e8res)",
    "A short description of the team to help other learners understand the goals or direction of the team (maximum 300 characters).": "Une courte description de l'\u00e9quipe pour aider les autres \u00e9tudiants \u00e0 comprendre les buts ou l'id\u00e9e directrice de l'\u00e9quipe (maximum 300 caract\u00e8res).",
    "A valid email address is required": "Une adresse email valide est requise",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
<<<<<<< HEAD
=======
    "API Key": "Cl\u00e9 de l'API",
    "API Secret": "Secret de l'API",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Abbreviation": "Abr\u00e9viation",
    "About Me": "\u00c0 propos de moi",
    "About You": "A propos de vous",
    "About me": "A propos de moi",
    "Access to some content in this unit is restricted to specific groups of learners": "L'acc\u00e8s \u00e0 une partie du contenu de cette unit\u00e9 est restreint \u00e0 un groupe d'\u00e9tudiants sp\u00e9cifique.",
<<<<<<< HEAD
=======
    "Access to some content in this {blockType} is restricted to specific groups of learners.": "L'acc\u00e8s \u00e0 une partie du contenu de ce {blockType} est restreint \u00e0 un groupe d'\u00e9tudiants sp\u00e9cifique.",
    "Access to this unit is restricted to: {selectedGroupsLabel}": "L'acc\u00e8s \u00e0 cette unit\u00e9 est limit\u00e9 \u00e0\u00a0: {selectedGroupsLabel}",
    "Access to this {blockType} is restricted to: {selectedGroupsLabel}": "L'acc\u00e8s \u00e0 ce {blockType} est restreint \u00e0\u00a0: {selectedGroupsLabel}",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Accomplishments": "Accomplissements",
    "Accomplishments Pagination": "Paginations des r\u00e9alisations",
    "Account": "Compte",
    "Account Information": "Information du compte",
    "Account Not Activated": "Compte non activ\u00e9",
    "Account Settings": "Param\u00e8tres du compte",
    "Account Settings page.": "Param\u00e8tres du compte",
<<<<<<< HEAD
=======
    "Account deletion, including removal from email lists, may take a few weeks to fully process through our system. If you want to opt-out of emails before then, please unsubscribe from the footer of any email.": "La suppression d'un compte, comprenant le retrait des listes d'e-mail, peu prendre quelques semaines afin de traiter enti\u00e8rement notre syst\u00e8me. Si vous souhaitez renoncer aux e-mails ult\u00e9rieurement, veuillez vous d\u00e9sinscrire en consultant le pied de page de n'importe quel e-mail.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Action": "Action",
    "Action required: Enter a valid date.": "Action requise : Entrez une date valide.",
    "Actions": "Actions",
    "Activate": "Activer",
    "Activate Your Account": "Activez votre compte",
    "Activating a link in this group will skip to the corresponding point in the video.": "L'activation d'un lien dans ce groupe permettra d'aller au point correspondant de la vid\u00e9o.",
    "Active": "Actif",
    "Active Uploads": "T\u00e9l\u00e9chargement Actifs",
    "Add": "Ajouter",
    "Add Additional Signatory": "Ajouter une signature additionnelle.",
<<<<<<< HEAD
=======
    "Add Attachment": "Ajouter une pi\u00e8ce jointe.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Add Cohort": "Ajouter une cohorte",
    "Add Component:": "Ajouter un composant :",
    "Add Country": "Ajouter un Pays",
    "Add Learners": "Ajouter des \u00e9tudiants",
    "Add New Component": "Ajouter un nouveau Composant",
    "Add Thumbnail": "Ajouter une vignette",
    "Add Thumbnail - {videoName}": "Ajouter une vignette - {videoName}",
    "Add URLs for additional versions": "Ajoutez des URL pour des versions suppl\u00e9mentaires",
    "Add a Chapter": "Ajouter un chapitre",
    "Add a New Cohort": "Ajouter une cohorte",
<<<<<<< HEAD
    "Add a learning outcome here": "Ajouter un r\u00e9sultat d'apprentissage ici",
=======
    "Add a Post": "Ajouter un message",
    "Add a Response": "Ajouter une r\u00e9ponse",
    "Add a clear and descriptive title to encourage participation. (Required)": "Ajouter un titre clair et explicite pour encourager la participation. (requis)",
    "Add a comment": "Ajouter un commentaire",
    "Add a learning outcome here": "Ajouter un r\u00e9sultat d'apprentissage ici",
    "Add a response:": "Ajouter une r\u00e9ponse",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Add another group": "Ajouter un autre groupe",
    "Add language": "Ajouter une langue",
    "Add learners to this cohort": "Ajouter des apprenants \u00e0 cette cohorte",
    "Add notes about this learner": "Ajouter des notes \u00e0 propos de cet apprenant",
    "Add to Dictionary": "Ajouter au dictionnaire",
    "Add to Exception List": "Ajouter \u00e0 la liste de d\u00e9rogation",
    "Add your first content group": "Ajouter votre premier groupe de contenu",
    "Add your first group configuration": "Ajouter votre premier groupe de configuration",
    "Add your first textbook": "Ajouter votre premier manuel",
<<<<<<< HEAD
    "Add {role} Access": "Ajouter un acc\u00e8s {role}",
    "Adding": "Ajout",
    "Adding the selected course to your cart": "Ajout dans le panier en cours",
    "Additional Information": "Information additionnelle",
    "Additional Time (minutes)": "Temps additionnel (minutes)",
=======
    "Add your post to a relevant topic to help others find it. (Required)": "Ajoutez votre message au sujet de discussion qui convient pour aider les autres participants \u00e0 le trouver. (Requis)",
    "Add {role} Access": "Ajouter un acc\u00e8s {role}",
    "Adding": "Ajout",
    "Adding the selected course to your cart": "Ajout dans le panier en cours",
    "Additional Credit Opportunities": "Opportunit\u00e9s de cr\u00e9dit suppl\u00e9mentaires",
    "Additional Information": "Information additionnelle",
    "Additional Professional Opportunities": "Opportunit\u00e9s professionnelles suppl\u00e9mentaires",
    "Additional Time (minutes)": "Temps additionnel (minutes)",
    "Additional posts could not be loaded. Refresh the page and try again.": "Tout message suppl\u00e9mentaire ne peut \u00eatre t\u00e9l\u00e9charg\u00e9. Veuillez actualiser la page et essayer \u00e0 nouveau.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Additional responses could not be loaded. Refresh the page and try again.": "Les r\u00e9actions suppl\u00e9mentaires n'ont pas pu \u00eatre charg\u00e9es. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "Adjust video speed": "R\u00e9gler la vitesse de lecture de la vid\u00e9o",
    "Adjust video volume": "R\u00e9gler le volume de la vid\u00e9o",
    "Admin": "Administrateur",
    "Advanced": "Avanc\u00e9",
    "After the course\\'s end date has passed, learners can no longer access subsection content. The subsection remains included in grade calculations.": "Une fois la date de fin du cours pass\u00e9e, les \u00e9tudiants n'auront plus acc\u00e8s au contenu de la sous-section. La sous-section sera toujours prise en compte lors du calcul des notes.",
    "After the subsection\\'s due date has passed, learners can no longer access its content. The subsection remains included in grade calculations.": "Apr\u00e8s que la date limite de la sous-section soit pass\u00e9e, les apprenants ne peuvent plus acc\u00e9der \u00e0 son contenu. La sous-section reste incluse dans les calculs de note.",
    "After you select ": "Apr\u00e8s avoir choisi",
    "Align center": "Aligner au centre",
    "Align left": "Aligner \u00e0 gauche",
    "Align right": "Aligner \u00e0 droite",
    "Alignment": "Alignement",
<<<<<<< HEAD
=======
    "All Groups": "Tous les groupes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "All Learners and Staff": "Tous les apprenants et l'\u00e9quipe p\u00e9dagogique",
    "All Posts": "Tous les posts",
    "All Rights Reserved": "Tous droits r\u00e9serv\u00e9s",
    "All Time Zones": "Tous les fuseaux horaires",
    "All Topics": "Tous les sujets",
    "All Unreviewed": "Tous les non-revus",
    "All Unreviewed Failures": "Tous les \u00e9checs non-revus",
    "All accounts were created successfully.": "Tous les comptes ont \u00e9t\u00e9 cr\u00e9\u00e9s avec succ\u00e8s.",
<<<<<<< HEAD
=======
    "All chapters must have a name and asset": "Tous les chapitres doivent avoir un nom et une ressource ",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "All groups must have a name.": "Tous les groupes doivent avoir un nom.",
    "All groups must have a unique name.": "Tous les groupes doivent avoir un nom unique.",
    "All learners in the {cohort_name} cohort": "Tous les apprenants de la cohorte {cohort_name}",
    "All learners in the {track_name} track": "Tout apprenant dans le parcours {track_name}",
    "All learners who are enrolled in this course": "Tous les apprenants qui sont inscrits \u00e0 ce cours ",
    "All payment options are currently unavailable.": "Toutes les options de paiement sont pour l'instant indisponibles.",
    "All professional education courses are fee-based, and require payment to complete the enrollment process.": "Les cours professionnels requi\u00e8rent un paiement afin de terminer le processus d'inscription.",
    "All subsections": "Toutes les sous-sections",
    "All teams": "Toutes les \u00e9quipes",
    "All topics": "Tous les sujets",
    "All units": "Toutes les unit\u00e9s",
    "All users on the Exception list": "Tous les utilisateurs sur la liste de d\u00e9rogation",
    "All users on the Exception list who do not yet have a certificate": "Tous les utilisateurs sur la liste de d\u00e9rogation qui n'ont pas encore une attestation",
<<<<<<< HEAD
=======
    "Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it. This option is incompatible with \"Share Alike\".": "Autoriser d'autres personnes \u00e0 copier, diffuser, montrer et interpr\u00e9ter uniquement des copies \u00e0 l'identique de votre \u0153uvre et non pas des \u0153uvres qui en seraient d\u00e9riv\u00e9es. Cette option est incompatible avec \"Share Alike\".",
    "Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request. Currently, this option is required.": "Autoriser d'autres personnes \u00e0 copier, diffuser, montrer et interpr\u00e9ter votre \u0153uvre sous copyright mais seulement s'ils vous citent de la mani\u00e8re dont vous souhaitez. Pour l'instant, cette option est requise.",
    "Allow others to copy, distribute, display and perform your work - and derivative works based upon it - but for noncommercial purposes only.": "Autoriser d'autres personnes \u00e0 copier, distribuer, montrer et interpr\u00e9ter votre \u0153uvre - et toute \u0153uvre qui en est d\u00e9riv\u00e9e - mais seulement \u00e0 des fins non commerciales.",
    "Allow others to distribute derivative works only under a license identical to the license that governs your work. This option is incompatible with \"No Derivatives\".": "Autoriser d'autres personnes \u00e0 distribuer des travaux d\u00e9riv\u00e9s sous une license identique \u00e0 celle s'appliquant \u00e0 votre \u0153uvre. Cette option est incompatible avec \"No Derivatives\".",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Allow students to generate certificates for this course?": "Autoriser les \u00e9tudiants \u00e0 g\u00e9n\u00e9rer des certificats pour ce cours?",
    "Already a course team member": "D\u00e9j\u00e0 membre de l'\u00e9quipe du cours",
    "Already a library team member": "Participe d\u00e9j\u00e0 au cours s\u00e9lectionn\u00e9",
    "Already a member": "D\u00e9j\u00e0 membre",
    "Already have an {platformName} account?": "Vous poss\u00e9dez d\u00e9j\u00e0 un compte {platformName}\u00a0?",
    "Alternative source": "Source alternative",
    "Always divide content-specific discussion topics": "Toujours s\u00e9parer les sujets de discussion au contenu bien pr\u00e9cis.",
    "Always show assessment results": "Toujours afficher les r\u00e9sultats d'\u00e9valuation",
<<<<<<< HEAD
=======
    "An answer option has been left blank. Please review and edit the component.": "Une option de r\u00e9ponse a \u00e9t\u00e9 laiss\u00e9e en blanc. Veuillez v\u00e9rifier et modifier le composant.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "An email has been sent to {userEmail} with a link for you to activate your account.": "Un email a \u00e9t\u00e9 envoy\u00e9 \u00e0 {userEmail} avec un lien vous permettant d'activer votre compte.",
    "An error has occurred. Check your Internet connection and try again.": "Une erreur est survenue. V\u00e9rifiez votre connexion internet et r\u00e9essayez de nouveau.",
    "An error has occurred. Make sure that you are connected to the Internet, and then try refreshing the page.": "Une erreur est survenue. Assurez-vous que vous \u00eates bien connect\u00e9 \u00e0 Internet et essayez de rafra\u00eechir la page.",
    "An error has occurred. Please try again later.": "Une erreur est survenue. Merci de r\u00e9essayer plus tard.",
    "An error has occurred. Please try again.": "Une erreur est survenue. Merci de r\u00e9essayer de nouveau.",
    "An error has occurred. Please try reloading the page.": "Une erreur est survenue. Essayez de rafra\u00eechir la page.",
    "An error has occurred. Refresh the page, and then try again.": "Une erreur a eu lieu. Rafra\u00eechissez la page et r\u00e9essayez.",
    "An error has occurred. Try refreshing the page, or check your Internet connection.": "Une erreur est survenue. Essayez de rafra\u00eechir la page, ou v\u00e9rifiez votre connexion internet.",
<<<<<<< HEAD
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "Une erreur est survenue lors de la r\u00e9cup\u00e9ration de votre courriel. S'il vous pla\u00eet r\u00e9essayez plus tard, et contactez le support technique si le probl\u00e8me persiste.",
    "An error occurred when signing you in to %s.": "Une erreur s'est produite en vous connectant \u00e0 %s.",
=======
    "An error has occurred. Wait a few minutes, and then try again.": "Une erreur est survenue. Attendez quelques minutes avant de r\u00e9essayer.",
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "Une erreur est survenue lors de la r\u00e9cup\u00e9ration de votre courriel. S'il vous pla\u00eet r\u00e9essayez plus tard, et contactez le support technique si le probl\u00e8me persiste.",
    "An error occurred when signing you in to %s.": "Une erreur s'est produite en vous connectant \u00e0 %s.",
    "An error occurred while attempting to retrieve or save the information below. Please try again later.": "Une erreur s'est produite lors de la tentative de r\u00e9cup\u00e9ration ou d'enregistrement des informations ci-dessous. Veuillez r\u00e9essayer plus tard.",
    "An error occurred while looking up team membership. Try refreshing the page.": "Une erreur s'est produite lors de la recherche des membres de l'\u00e9quipe. Essayez d'actualiser la page.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "An error occurred while removing the member from the team. Try again.": "Une erreur est survenue lors de la suppression du membre de l'\u00e9quipe. R\u00e9essayez.",
    "An error occurred.": "Une erreur est survenue.",
    "An error occurred. Make sure that the student's username or email address is correct and try again.": "Une erreur est survenue. Assurez-vous que l'identifiant et le courriel de l'\u00e9tudiant sont corrects et essayez de nouveau.",
    "An error occurred. Please reload the page.": "Une erreur est survenue. Merci de rafra\u00eechir la page.",
    "An error occurred. Please try again.": "Une erreur est survenue. Veuillez r\u00e9essayer.",
    "An error occurred. Try again.": "Une erreur est survenue. R\u00e9essayez.",
<<<<<<< HEAD
    "An unexpected error occurred.  Please try again.": "Une erreur inattendue est survenue. Veuillez r\u00e9essayer.",
    "Anchor": "Ancre",
    "Anchors": "Ancres",
    "April": "Avril",
    "Are you having trouble finding a team to join?": "Avez-vous de la difficult\u00e9 \u00e0 trouver une \u00e9quipe \u00e0 rejoindre?",
=======
    "An unexpected error has occurred.": "Une erreur inattendue s'est produite.",
    "An unexpected error occurred.  Please try again.": "Une erreur inattendue est survenue. Veuillez r\u00e9essayer.",
    "Anchor": "Ancre",
    "Anchors": "Ancres",
    "Any content that has listed this content as a prerequisite will also have access limitations removed.": "Tous les contenus qui ont list\u00e9 ce contenu comme pr\u00e9requis auront aussi leurs droits d'acc\u00e8s supprim\u00e9s.",
    "Any course progress or grades from your current session will be lost.": "Toute progression ou note obtenu lors de votre session actuelle sera alors perdu.",
    "Any divided discussion topics are divided based on cohort.": "Les cohortes servent de base pour s\u00e9parer les sujets de discussion.",
    "Any divided discussion topics are divided based on enrollment track.": "Le parcours d'inscription sert de base pour s\u00e9parer les sujets de discussion.",
    "April": "Avril",
    "Are you having trouble finding a team to join?": "Avez-vous de la difficult\u00e9 \u00e0 trouver une \u00e9quipe \u00e0 rejoindre?",
    "Are you sure that you want to leave this session?": "\u00cates-vous s\u00fbr de vouloir quitter cette session\u00a0?",
    "Are you sure you want to change to a different session?": "\u00cates-vous bien s\u00fbr de vouloir passer \u00e0 une session diff\u00e9rente\u00a0?",
    "Are you sure you want to delete the following file? It cannot be restored.\nFile: ": "\u00cates-vous s\u00fbr de vouloir supprimer le fichier suivant ? Il ne peut pas \u00eatre restaur\u00e9.\nFichier : ",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Are you sure you want to delete this comment?": "\u00cates-vous s\u00fbr de vouloir supprimer ce commentaire ?",
    "Are you sure you want to delete this page? This action cannot be undone.": "\u00cates-vous s\u00fbr de vouloir supprimer cette page ? Cette action ne peut pas \u00eatre annul\u00e9e.",
    "Are you sure you want to delete this post?": "Voulez-vous vraiment supprimer ce message\u00a0?",
    "Are you sure you want to delete this response?": "Voulez-vous vraiment supprimer cette r\u00e9ponse\u00a0?",
    "Are you sure you want to delete this update?": "\u00cates vous sur de vouloir supprimer cette mise \u00e0 jour\u00a0?",
    "Are you sure you want to delete {email} from the course team for \u201c{container}\u201d?": "\u00cates-vous s\u00fbr de vouloir supprimer {email} de l'\u00e9quipe p\u00e9dagogique de \"{container}\"?",
    "Are you sure you want to delete {email} from the library \u201c{container}\u201d?": "\u00cates-vous s\u00fbr de vouloir supprimer {email} de la biblioth\u00e8que \"{container}\" ?",
<<<<<<< HEAD
    "Are you sure you want to remove this video from the list?": "Etes-vous s\u00fbr de vouloir supprimer cette vid\u00e9o de la liste ?",
    "Are you sure you want to restrict {email} access to \u201c{container}\u201d?": "\u00cates-vous s\u00fbr de vouloir restreindre l'acc\u00e8s de {email} \u00e0 \"{container}\" ?",
    "Are you sure you want to revert to the last published version of the unit? You cannot undo this action.": "\u00cates-vous s\u00fbr de vouloir revenir \u00e0 la derni\u00e8re version publi\u00e9e de l'unit\u00e9? Vous ne pouvez pas annuler cette action.",
=======
    "Are you sure you want to remove this transcript?": "Voulez-vous vraiment supprimer cette transcription\u00a0?",
    "Are you sure you want to remove this video from the list?": "Etes-vous s\u00fbr de vouloir supprimer cette vid\u00e9o de la liste ?",
    "Are you sure you want to restrict {email} access to \u201c{container}\u201d?": "\u00cates-vous s\u00fbr de vouloir restreindre l'acc\u00e8s de {email} \u00e0 \"{container}\" ?",
    "Are you sure you want to revert to the last published version of the unit? You cannot undo this action.": "\u00cates-vous s\u00fbr de vouloir revenir \u00e0 la derni\u00e8re version publi\u00e9e de l'unit\u00e9? Vous ne pouvez pas annuler cette action.",
    "Are you sure you want to select this session?": "\u00cates-vous s\u00fbr de vouloir s\u00e9lectionner cette session ?",
    "Are you sure you want to unenroll from the purchased course {courseName} ({courseNumber})?": "\u00cates-vous s\u00fbr de vouloir vous d\u00e9sinscrire du cours achet\u00e9 {courseName} ({courseNumber})?",
    "Are you sure you want to unenroll from the verified {certNameLong}  track of {courseName}  ({courseNumber})?": "Voulez-vous vraiment vous d\u00e9sinscrire de la piste {certNameLong} de {courseName} ({courseNumber})?",
    "Are you sure you want to unenroll from the verified {certNameLong} track of {courseName} ({courseNumber})?": "Voulez-vous vraiment vous d\u00e9sinscrire de la piste {certNameLong} de {courseName} ({courseNumber})?",
    "Are you sure you want to unenroll from {courseName} ({courseNumber})?": "\u00cates-vous s\u00fbr de vouloir vous d\u00e9sinscrire de {courseName} ({courseNumber})?",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Are you sure you want to unenroll from {courseName} ({courseNumber})? You will be refunded the amount you paid.": "\u00cates-vous s\u00fbr de vouloir vous d\u00e9sinscrire de {courseName} ({courseNumber})\u00a0? Le montant que vous aviez pay\u00e9 vous sera rembours\u00e9. ",
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "\u00cates vous s\u00fbr de vouloir supprimer cet \u00e9l\u00e9ment ? L'op\u00e9ration est irr\u00e9versible !\n\nTout contenu associ\u00e9 ne fonctionnera plus (par exemple : images et/ou liens cass\u00e9s)",
    "Are you sure?": "\u00cates-vous certain ?",
    "As part of the verification process, you take a photo of both your face and a government-issued photo ID. Our authorization service confirms your identity by comparing the photo you take with the photo on your ID.": "Participant au processus de v\u00e9rification, vous prenez une photo de votre visage ainsi que de votre pi\u00e8ce d'identit\u00e9. Notre service d'autorisation confirme votre identit\u00e9 en comparant votre visage \u00e0 la photo de la pi\u00e8ce d'identit\u00e9.",
<<<<<<< HEAD
=======
    "As part of the verification process, you take a photo of both your face and a photo ID. Our authorization service confirms your identity by comparing the photo you take with the photo on your ID.": "Dans le cadre du processus de v\u00e9rification, prenez ensemble une photo de votre visage et de votre pi\u00e8ce d'identit\u00e9. Notre service d'autorisation confirmera votre identit\u00e9 en comparant la photo que vous avez prise avec celle de votre pi\u00e8ce d'identit\u00e9.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "As you complete courses, you will see them listed here.": "Au fur et \u00e0 mesure que vous terminez des cours, vous les verrez appara\u00eetre ici.",
    "Assessment": "\u00c9valuation",
    "Assessment Results Visibility": "Visibilit\u00e9 des r\u00e9sultats d'\u00e9valuation",
    "Assessments": "\u00c9valuations",
<<<<<<< HEAD
    "Assign students to cohorts by uploading a CSV file.": "Affecter les \u00e9tudiants aux cohortes en important un fichier CSV.",
    "Assignment Type Name": "Nom du type de devoir",
    "Associated Content Group": "Groupe de contenu associ\u00e9",
    "August": "Ao\u00fbt",
    "Author": "Auteur",
    "Automatic": "Automatique",
=======
    "Assign Team Memberships": "Affecter les membres de l'\u00e9quipe",
    "Assign learners to cohorts by uploading a CSV file": "R\u00e9partisser les \u00e9tudiants entre les cohortes en chargeant un fichier CSV",
    "Assign students to cohorts by uploading a CSV file.": "Affecter les \u00e9tudiants aux cohortes en important un fichier CSV.",
    "Assignment Type Name": "Nom du type de devoir",
    "Associated Content Group": "Groupe de contenu associ\u00e9",
    "Attribution": "Attribution",
    "August": "Ao\u00fbt",
    "Author": "Auteur",
    "Auto-advance": "Avance automatique",
    "Automated Transcripts": "Transcriptions automatis\u00e9e",
    "Automatic": "Automatique",
    "Automatic transcripts are disabled.": "Les transcriptions automatiques sont d\u00e9sactiv\u00e9es.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Available %s": "%s disponible(s)",
    "Average": "Moyen",
    "Back to Full List": "Retour \u00e0 la liste compl\u00e8te",
    "Back to sign in": "Retour \u00e0 la connexion",
    "Back to {platform} FAQs": "Retour vers la page FAQ de {platform}",
    "Background color": "Couleur du fond",
    "Basic": "Basique",
    "Basic Account Information": "Informations g\u00e9n\u00e9rales du compte",
    "Be sure your entire face is inside the frame": "Assurez-vous que votre visage est enti\u00e8rement dans le cadre",
    "Before proceeding, please confirm that your details match": "Avant de continuer, veuillez v\u00e9rifier que vos informations personnelles correspondent",
<<<<<<< HEAD
    "Before you upgrade to a certificate track, you must activate your account.": "Avant de mettre \u00e0 jour vers un parcours certifiant, vous devez activer votre compte.",
=======
    "Before proceeding, please {htmlStart}unlink all social media accounts{htmlEnd}.": "Avant de poursuivre, veuillez {htmlStart}annuler le lien avec tous vos comptes de r\u00e9seaux sociaux{htmlEnd}.",
    "Before proceeding, please {htmlStart}{emailMsg}{htmlEnd}.": "Avant de proc\u00e9der, veuillez {htmlStart}{emailMsg}{htmlEnd}.",
    "Before you upgrade to a certificate track, you must activate your account.": "Avant de mettre \u00e0 jour vers un parcours certifiant, vous devez activer votre compte.",
    "Billing/Payment Options": "Options de facturation et de paiement",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Biography": "Biographie",
    "Block view is unavailable": "La vue du block n'est pas disponible",
    "Blockquote": "Citation",
    "Blockquote (Ctrl+Q)": "Citation (Ctrl+Q)",
    "Blocks": "Blocs",
    "Body": "Corps",
    "Bold": "Gras",
    "Bold (Ctrl+B)": "Gras (Ctrl+B)",
    "Bookmark this page": "Ajouter cette page aux favoris",
    "Bookmarked": "Ajout\u00e9 aux favoris",
    "Bookmarked on": "Signet ajout\u00e9",
    "Border": "Bordure",
    "Border color": "Couleur de bordure",
    "Bottom": "Bas",
    "Browse": "Parcourir",
    "Browse recently launched courses and see what\\'s new in your favorite subjects": "Parcourez les plus r\u00e9cents cours et voyez ce qui existe de nouveau dans vos sujets favoris",
<<<<<<< HEAD
=======
    "Browsing": "Navigation",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Bulk Exceptions": "D\u00e9rogations en lot",
    "Bullet list": "Liste \u00e0 puces",
    "Bulleted List (Ctrl+U)": "List \u00e0 Puces (Ctrl+U)",
    "COMPLETED COURSES": "TERMINE",
    "COURSES IN PROGRESS": "EN COURS",
    "Can I request additional time to complete my exam?": "Puis-je demander un temps additionnel pour compl\u00e9ter mon examen ?",
    "Can we match the photo you took with the one on your ID?": "Peut-on v\u00e9rifier la concordance entre la photo que vous avez prise et celle de vos identifiants ?",
    "Cancel": "Annuler",
    "Cancel enrollment code": "Annuler le code d'inscription",
    "Cancel team creating.": "Annuler la cr\u00e9ation de l'\u00e9quipe.",
    "Cancel team updating.": "Annuler la mise \u00e0 jour de l'\u00e9quipe.",
<<<<<<< HEAD
    "Cannot delete when in use by a unit": "Ne peut \u00eatre supprim\u00e9 lorsqu'il est en cours d'utilisation dans une unit\u00e9",
    "Cannot delete when in use by an experiment": "Ne peut \u00eatre supprim\u00e9 lorsqu'il est en cours d'utilisation par une exp\u00e9rience",
=======
    "Cancel upload": "Annuler l'envoi",
    "Cannot delete when in use by a unit": "Ne peut \u00eatre supprim\u00e9 lorsqu'il est en cours d'utilisation dans une unit\u00e9",
    "Cannot delete when in use by an experiment": "Ne peut \u00eatre supprim\u00e9 lorsqu'il est en cours d'utilisation par une exp\u00e9rience",
    "Cannot drop more <%- types %> assignments than are assigned.": "Impossible de supprimer plus d'affectations de <%- types %> que ce qui est attribu\u00e9.",
    "Cannot join instructor managed team": "Impossible de rejoindre l'\u00e9quipe dirig\u00e9e par un instructeur",
    "Cannot update attempt review status": "Impossible de mettre \u00e0 jour l'\u00e9tat d'examen de la tentative",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Caption": "L\u00e9gende",
    "Caution: The last published version of this unit is live. By publishing changes you will change the student experience.": "Attention: la derni\u00e8re version publi\u00e9e de cette unit\u00e9 est active. En publiant des modifications vous allez changer l'exp\u00e9rience des \u00e9tudiants.",
    "Cell": "Cellule",
    "Cell padding": "Remplissage des cellules",
    "Cell properties": "Propri\u00e9t\u00e9s des cellules",
    "Cell spacing": "Espacement des cellules",
    "Cell type": "Type de cellule",
    "Center": "Centrer",
    "Certificate Details": "D\u00e9tails du certificat",
    "Certificate Generated": "Attestation g\u00e9n\u00e9r\u00e9e",
    "Certificate Information": "Information du certificat",
    "Certificate Name": "Nom du certificat",
    "Certificate Purchased": "Certificat achet\u00e9",
    "Certificate Signatories": "Signataires du certificat",
    "Certificate Signatory Configuration": "Configuration des signataires du certificat",
    "Certificate Status:": "\u00c9tat du certificat\u00a0:",
    "Certificate has been successfully invalidated for <%= user %>.": "Invalidation r\u00e9ussie du certificat pour <%= user %>.",
    "Certificate name is required.": "Le nom du certificat est requis.",
    "Certificate of <%= user %> has already been invalidated. Please check your spelling and retry.": "Le certificat de <%= user %> a d\u00e9j\u00e0 \u00e9t\u00e9 invalid\u00e9. Veuillez v\u00e9rifier votre saisie et r\u00e9essayer.",
<<<<<<< HEAD
=======
    "Certificates": "Certificats",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Change": "Modifier",
    "Change Enrollment": "Modifier le mode d'inscription",
    "Change Manually": "Changer manuellement",
    "Change My Email Address": "Modifier mon adresse email",
<<<<<<< HEAD
    "Change image": "Modifier l'image",
=======
    "Change Session": "Changer de session",
    "Change image": "Modifier l'image",
    "Change or Leave Session": "Changer ou Quitter la Session",
    "Change to a different session or leave the current session.": "Changer de session ou quitter la session en cours.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Les modifications apport\u00e9es \u00e0 des \u00e9tapes qui ne sont pas s\u00e9lectionn\u00e9s comme parties prenantes du devoir ne seront pas sauvegard\u00e9s.",
    "Chapter Asset": "Ressource associ\u00e9e au chapitre",
    "Chapter Name": "Nom du chapitre",
    "Chapter information": "Information sur le chapitre",
<<<<<<< HEAD
=======
    "Chapter name and asset_path are both required": "Titre de chapitre et asset_path sont touts deux n\u00e9cessaires",
    "Chapter name is required": "Le titre du chapitre est requis",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Chapter {order}": "Chapitre {order}",
    "Check Your Email": "V\u00e9rifiez votre email",
    "Check the highlighted fields below and try again.": "V\u00e9rifiez les champs en surbrillance ci-dessous et r\u00e9essayez.",
    "Check this box to receive an email digest once a day notifying you about new, unread activity from posts you are following.": "Cocher cette case pour recevoir une fois par jour un e-mail r\u00e9capitulatif des nouveaut\u00e9s dans les fils de discussion que vous suivez.",
    "Check your email account for instructions to reset your password.": "V\u00e9rifiez votre boite email pour les instructions de r\u00e9initialisation de mot de passe.",
    "Check your email for an activation message.": "V\u00e9rifiez dans vos emails que vous avez re\u00e7u le message d'activation",
    "Checkout": "Payer",
    "Checkout with PayPal": "Payer avec PayPal",
    "Checkout with {processor}": "Payer avec {processor}",
    "Choose": "Choisir",
    "Choose File": "Choisir le fichier",
    "Choose One": "Choisir",
    "Choose a .csv file": "Choisir un fichier .csv",
    "Choose a Date": "Choisir une date",
    "Choose a Time": "Choisir une heure",
    "Choose a content group to associate": "Choisissez un groupe de contenu \u00e0 associer",
    "Choose a location to move your component to": "Choisissez un emplacement vers lequel vos composants seront envoy\u00e9s",
    "Choose a time": "Choisir une heure",
    "Choose all": "Tout choisir",
    "Choose mode": "Choisir le mode",
    "Choose new file": "Choisir un nouveau fichier",
    "Choose one": "Choisissez-en un",
    "Choose your institution from the list below:": "Choisissez votre institution dans la liste ci-dessous:",
    "Chosen %s": "Choix des \u00ab\u00a0%s \u00bb",
    "Circle": "Cercle",
    "Clear": "Effacer",
    "Clear All": "Effacer tout",
    "Clear Grading Due Date": "Effacer la date limite d'\u00e9valuation",
    "Clear Release Date/Time": "Effacer Date/Heure de mise \u00e0 disposition",
    "Clear Value": "Effacer la valeur",
<<<<<<< HEAD
=======
    "Clear all": "Tout effacer",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Clear formatting": "Effacer le formatage",
    "Clear search": "Effacer la recherche",
    "Clear search results": "Effacer les r\u00e9sultats de la recherche",
    "Click OK to have your e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "Cliquez sur OK pour avoir votre adresse mail transmise \u00e0 une application tierce.\n\nCliquez sur Annuler pour retourner \u00e0 la page pr\u00e9c\u00e9dente sans envoyer d'information.",
    "Click OK to have your username and e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "Cliquez sur OK pour avoir votre nom d'utilisateur et votre adresse \u00e9lectronique transmis \u00e0 une application tierce.\n\nCliquez sur Annuler pour retourner \u00e0 la page pr\u00e9c\u00e9dente sans envoyer d'information.",
    "Click OK to have your username sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "Cliquez sur OK pour avoir votre nom d'utilisateur transmis \u00e0 une application tierce.\n\nCliquez sur Annuler pour retourner \u00e0 la page pr\u00e9c\u00e9dente sans envoyer d'information.",
    "Click on this button to mute or unmute this video or press UP or DOWN buttons to increase or decrease volume level.": "Cliquer sur ce bouton pour couper ou remettre le son de la vid\u00e9o ou appuyer sur les touches HAUT ou BAS pour augmenter ou diminuer le volume. ",
    "Click to add a new %(xblock_type)s": "Cliquer pour ajouter un nouveau %(xblock_type)s",
    "Click to change": "Cliquez pour changer",
    "Click to choose all %s at once.": "Cliquez pour choisir tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Click to edit": "Cliquer pour modifier",
    "Click to remove all chosen %s at once.": "Cliquez pour enlever tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Close": "Fermer",
    "Close Calculator": "Fermer la calculatrice",
<<<<<<< HEAD
=======
    "Closed": "Ferm\u00e9",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Code": "Code",
    "Code Sample (Ctrl+K)": "Code (Ctrl+K)",
    "Code block": "Bloc du code",
    "Cohort Assignment Method": "M\u00e9thode d'affectation des cohortes",
    "Cohort Name": "Nom de la cohorte",
    "Cohorts": "Cohortes",
    "Cohorts Disabled": "Cohortes d\u00e9sactiv\u00e9es",
    "Cohorts Enabled": "Cohortes activ\u00e9es",
    "Collapse All": "Tout replier",
    "Collapse Instructions": "Replier les instructions",
    "Collapse/Expand this %(xblock_type)s": "D\u00e9plier/Replier ce %(xblock_type)s",
    "Color": "Couleur",
    "Cols": "Colonnes",
    "Column": "Colonne",
    "Column group": "Groupe de colonnes",
    "Coming Soon": "Bient\u00f4t",
    "Commentary": "Commentaires",
    "Common Problem Types": "Types d'exercices classiques",
<<<<<<< HEAD
    "Complete courses on your schedule to ensure you stand out in your field!": "Compl\u00e9tez les cours sur votre emploi du temps pour \u00eatre s\u00fbr de vous d\u00e9marquer dans votre domaine\u00a0!",
    "Completed": "Termin\u00e9",
    "Configure": "Configurer",
    "Confirm": "Confirmer",
=======
    "Community TA": "Assistant",
    "Complete courses on your schedule to ensure you stand out in your field!": "Compl\u00e9tez les cours sur votre emploi du temps pour \u00eatre s\u00fbr de vous d\u00e9marquer dans votre domaine\u00a0!",
    "Completed": "Termin\u00e9",
    "Component": "Composante",
    "Components": "Composants",
    "Configure": "Configurer",
    "Confirm": "Confirmer",
    "Confirm Delete Uploaded File": "Confirmer la suppression du fichier upload\u00e9",
    "Confirm Grade Team Submission": "Confirmer la soumission de la note d'\u00e9quipe",
    "Confirm Password": "Confirmez votre mot de passe",
    "Confirm Submit Response": "Confirmer l'envoi de la r\u00e9ponse",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Confirm Timed Transcript": "Confirmer la transcription synchronis\u00e9e",
    "Congratulations!": "F\u00e9licitations !",
    "Congratulations! You are now verified on %(platformName)s!": "F\u00e9licitations! Vous \u00eates maintenant authentifi\u00e9 sur%(platformName)s!",
    "Constrain proportions": "Contraindre les dimensions",
    "Contact Us": "Nous contacter",
    "Contains staff only content": "Contient du contenu r\u00e9serv\u00e9 aux membres de l'\u00e9quipe enseignante",
    "Contains {count} group": [
      "Contient {count} groupe",
<<<<<<< HEAD
=======
      "Contient {count} groupes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "Contient {count} groupes"
    ],
    "Content Group ID": "ID du groupe de contenu",
    "Content Group Name": "Nom du groupe de contenus",
    "Content-Specific Discussion Topics": "Sujets de discussion sp\u00e9cifiques",
    "Continue Exam Without Proctoring": "Continuer l'examen sans surveilance",
<<<<<<< HEAD
    "Continue to my practice exam": "Continuer mon examen d'essai",
    "Copy": "Copier",
    "Copy Email To Editor": "Copier le courrier \u00e0 l'\u00e9diteur",
    "Copy row": "Copier la ligne",
    "Correct failed component": "Corriger le composant en erreur",
    "Cost": "Co\u00fbt",
=======
    "Continue to Verification": "Continuer vers V\u00e9rification",
    "Continue to my practice exam": "Continuer mon examen d'essai",
    "Continue to my proctored exam.": "Continuez vers mon examen surveill\u00e9.",
    "Continue to onboarding": "Continuer vers l'int\u00e9gration",
    "Copy": "Copier",
    "Copy Component Location": "Copier l'emplacement du composant",
    "Copy Email To Editor": "Copier le courrier \u00e0 l'\u00e9diteur",
    "Copy Exam Code": "Copier le code d'examen",
    "Copy row": "Copier la ligne",
    "Correct failed component": "Corriger le composant en erreur",
    "Cost": "Co\u00fbt",
    "Could not find Certificate Exception in the allowlist. Please refresh the page and try again": "Impossible de trouver l'exception d'attestation dans la liste d'autorisation. Veuillez actualiser la page et r\u00e9essayer",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Could not find Certificate Invalidation in the list. Please refresh the page and try again": "Impossible de trouver le Certificat d'Invalidation dans la liste. Veuillez rafra\u00eechir la page et r\u00e9essayer.",
    "Could not find a user with username or email address '<%- identifier %>'.": "Impossible de trouver un utilisateur avec le nom d'utilisateur ou adresse email \"<%- identifier %>\".",
    "Could not find the specified string.": "Impossible de trouver la cha\u00eene de caract\u00e8res indiqu\u00e9e.",
    "Could not find users associated with the following identifiers:": "Impossible de trouver des utilisateurs associ\u00e9s \u00e0 ces identifiants :",
    "Could not grade your answer. The submission was aborted.": "Votre r\u00e9ponse ne peut pas \u00eatre not\u00e9e.  Son envoi est annul\u00e9.",
<<<<<<< HEAD
=======
    "Could not load teams information.": "Impossible de charger les informations des \u00e9quipes.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Could not override problem score for {user}.": "Impossible de modifier le r\u00e9sultat de l'exercice pour {user}.",
    "Could not retrieve download url.": "Impossible de r\u00e9cup\u00e9rer l'url  de t\u00e9l\u00e9chargement.",
    "Could not retrieve upload url.": "Impossible de r\u00e9cup\u00e9rer l'URL de t\u00e9l\u00e9versement.",
    "Could not submit order": "La commande n'a pas pu \u00eatre soumise",
    "Could not submit photos": "Envoi de photos impossible",
    "Could not upload the video image file": "Impossible de charger le fichier d'image vid\u00e9o",
    "Country": "Pays",
    "Country of residence": "Pays de r\u00e9sidence",
    "Country or Region of Residence": "Pays ou r\u00e9gion de r\u00e9sidence",
    "Course": [
      "Cours",
<<<<<<< HEAD
      "Cours"
    ],
    "Course Credit Requirements": "Crit\u00e8res d'obtention de cr\u00e9dit du cours",
    "Course End": "Fin du Cours",
    "Course Handouts": "Documents de cours",
=======
      "Cours",
      "Cours"
    ],
    "Course Content": "Contenu du cours",
    "Course Credit Requirements": "Crit\u00e8res d'obtention de cr\u00e9dit du cours",
    "Course Discussion Forum": "Forum de discussions du cours",
    "Course End": "Fin du Cours",
    "Course Handouts": "Documents de cours",
    "Course Highlight Emails": "E-mails de mise \u00e0 jour du cours",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Course ID": "ID de Cours",
    "Course Id": "ID de Cours",
    "Course Index": "index du cours",
    "Course Key": "CLef de cours",
    "Course Name": "Nom du Cours",
    "Course Number": "Num\u00e9ro du cours",
    "Course Number Override": "Ecrasement du Num\u00e9ro du Cours",
<<<<<<< HEAD
    "Course Outline": "Plan du Cours",
    "Course Start": "D\u00e9but du Cours",
    "Course Title": "Titre du cours",
    "Course Title Override": "Surcharge du Titre du Cours",
=======
    "Course Number:": "Num\u00e9ro du cours :",
    "Course Outline": "Plan du Cours",
    "Course Run:": "Session :",
    "Course Start": "D\u00e9but du Cours",
    "Course Title": "Titre du cours",
    "Course Title Override": "Surcharge du Titre du Cours",
    "Course Video Settings": "Param\u00e8tres de la vid\u00e9o du cours",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Course is not yet visible to students.": "Ce cours n'est pas encore visible pour les \u00e9tudiants.",
    "Course pacing cannot be changed once a course has started.": "Le rythme du cours ne peut plus \u00eatre chang\u00e9 une fois que le cours a commenc\u00e9.",
    "Course title": "Titre du cours",
    "Course-Wide Discussion Topics": "Sujets de discussion globaux",
    "Create": "Cr\u00e9er",
    "Create Account": "Cr\u00e9er un compte",
    "Create Re-run": "Cr\u00e9er une relance",
<<<<<<< HEAD
    "Create a New Team": "Cr\u00e9er une nouvelle \u00e9quipe",
    "Create a content group": "Cr\u00e9er un groupe de contenu",
    "Create a new team if you can't find an existing team to join, or if you would like to learn with friends you know.": "Cr\u00e9ez une nouvelle \u00e9quipe si vous ne trouvez pas une \u00e9quipe existante \u00e0 rejoindre, ou si vous d\u00e9sirez apprendre avec des amis que vous connaissez d\u00e9j\u00e0.",
    "Create account using %(providerName)s.": "Cr\u00e9er un compte avec %(providerName)s.",
    "Create an Account": "Cr\u00e9er un compte",
    "Create an Account.": "Cr\u00e9er un compte.",
=======
    "Create Support Ticket": "Cr\u00e9er un billet de support",
    "Create a New Team": "Cr\u00e9er une nouvelle \u00e9quipe",
    "Create a content group": "Cr\u00e9er un groupe de contenu",
    "Create a new team if you can't find an existing team to join, or if you would like to learn with friends you know.": "Cr\u00e9ez une nouvelle \u00e9quipe si vous ne trouvez pas une \u00e9quipe existante \u00e0 rejoindre, ou si vous d\u00e9sirez apprendre avec des amis que vous connaissez d\u00e9j\u00e0.",
    "Create a report of problem responses": "Cr\u00e9er un rapport des r\u00e9ponses aux probl\u00e8mes",
    "Create a {link_start}Mozilla Backpack{link_end} account, or log in to your existing account": "Cr\u00e9ez un compte {link_start}Mozilla Backpack{link_end}, ou connectez-vous \u00e0 votre compte existant",
    "Create account using %(providerName)s.": "Cr\u00e9er un compte avec %(providerName)s.",
    "Create an Account": "Cr\u00e9er un compte",
    "Create an Account.": "Cr\u00e9er un compte.",
    "Create an account": "Cr\u00e9er un compte",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Create an account using": "Cr\u00e9er un compte avec",
    "Create team.": "Cr\u00e9er l'\u00e9quipe.",
    "Created": "Cr\u00e9\u00e9",
    "Creating missing groups": "Cr\u00e9ation des groupes manquants",
<<<<<<< HEAD
=======
    "Creative Commons": "Creative Commons",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Creative Commons licensed content, with terms as follow:": "Contenu sous licence Creative Commons, avec les conditions suivantes :",
    "Criterion Added": "Crit\u00e8re ajout\u00e9",
    "Criterion Deleted": "Crit\u00e8re supprim\u00e9",
    "Current Role:": "R\u00f4le actuel :",
    "Current conversation": "Discussion actuelle",
    "Current enrollment mode:": "Mode d'inscription: ",
    "Current location": "Emplacement actuel",
    "Current tab": "Onglet en cours",
    "Currently selected": "S\u00e9lection actuelle",
    "Custom color": "Couleur personnalis\u00e9e",
    "Custom...": "Personnaliser...",
    "Cut": "Couper",
    "Cut row": "Couper la ligne",
<<<<<<< HEAD
    "Date Added": "Date ajout\u00e9e",
    "Date Joined": "Date d'inscription",
    "Date Placed": "Date d'\u00e9mission",
    "Deactivate": "D\u00e9sactiver",
=======
    "Date": "Date",
    "Date Added": "Date ajout\u00e9e",
    "Date Joined": "Date d'inscription",
    "Date Placed": "Date d'\u00e9mission",
    "Date added": "Date ajout\u00e9e",
    "Deactivate": "D\u00e9sactiver",
    "Deactivating": "D\u00e9sactivation",
    "Deadlines": "D\u00e9lais de soumission",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "December": "D\u00e9cembre",
    "Declined": "Refus\u00e9",
    "Decrease indent": "R\u00e9duire l'indentation",
    "Default": "D\u00e9faut",
    "Default (Local Time Zone)": "D\u00e9faut (fuseau horaire local)",
    "Default Timed Transcript": "Transcription synchronis\u00e9e par d\u00e9faut",
    "Delete": "Supprimer",
<<<<<<< HEAD
    "Delete File Confirmation": "Confirmation de la suppression du fichier",
    "Delete My Account": "Supprimer mon compte",
=======
    "Delete \"<%- signatoryName %>\" from the list of signatories?": "Supprimer \"<%- signatoryName %>\" de la liste des signataires?",
    "Delete File Confirmation": "Confirmation de la suppression du fichier",
    "Delete My Account": "Supprimer mon compte",
    "Delete Page Confirmation": "Confirmation de la suppression de la page",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Delete Team": "Supprimer l'\u00e9quipe",
    "Delete column": "Supprimer la colonne",
    "Delete row": "Supprimer la ligne",
    "Delete student '<%- student_id %>'s state on problem '<%- problem_id %>'?": "Supprimer l'\u00e9tat de l'\u00e9tudiant '<%- student_id %>' sur le probl\u00e8me '<%- problem_id %>' ?",
    "Delete table": "Supprimer le tableau",
    "Delete the user, {username}": "Supprimer l'utilisateur, {username}",
    "Delete this %(item_display_name)s?": "Effacer %(item_display_name)s ?",
    "Delete this asset": "Supprimer cet \u00e9l\u00e9ment",
    "Delete this team?": "Supprimer cette \u00e9quipe ?",
<<<<<<< HEAD
    "Deleted Content Group": "Groupe de contenu supprim\u00e9",
    "Deleted Group": "Supprimer le groupe",
    "Deleting": "Suppression en cours",
=======
    "Delete this {xblock_type} (and prerequisite)?": "Supprimer ce {xblock_type} (et les pr\u00e9requis)?",
    "Delete this {xblock_type}?": "Supprimer ce {xblock_type}?",
    "Delete \u201c<%- name %>\u201d?": "Supprimer \u201c<%- name %>\u201d?",
    "Deleted Content Group": "Groupe de contenu supprim\u00e9",
    "Deleted Group": "Supprimer le groupe",
    "Deleting": "Suppression en cours",
    "Deleting a team is permanent and cannot be undone.All members are removed from the team, and team discussions can no longer be accessed.": "Supprimer une \u00e9quipe est une action \u00e0 effet permanent et ne peut pas \u00eatre annul\u00e9e. Tous les membres seront retir\u00e9s de l'\u00e9quipe et les discussions de l'\u00e9quipe ne seront plus accessibles.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Deleting a textbook cannot be undone and once deleted any reference to it in your courseware's navigation will also be removed.": "Supprimer un manuel est irr\u00e9versible et toute r\u00e9f\u00e9rence \u00e0 ce manuel sera \u00e9galement supprim\u00e9e dans le cours.",
    "Deleting this %(item_display_name)s is permanent and cannot be undone.": "Supprimer %(item_display_name)s est d\u00e9finitif et ne peut pas \u00eatre annul\u00e9.",
    "Deleting this {xblock_type} is permanent and cannot be undone.": "Supprimer ce {xblock_type} est permanent et ne peut \u00eatre annul\u00e9.",
    "Deprecated": "Obsol\u00e8te",
    "Describe ": "D\u00e9crire",
    "Description": "Description",
    "Description of the certificate": "Description du certificat",
    "Details": "D\u00e9tails",
<<<<<<< HEAD
=======
    "Device with Camera": "Appareil avec cam\u00e9ra",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Dimensions": "Dimensions",
    "Disc": "Disque",
    "Discard Changes": "Supprimer les changements",
    "Discarding Changes": "Annuler les modifications",
<<<<<<< HEAD
    "Discussion Home": "Page d'accueil de Discussion",
    "Discussion topics in the course are not divided.": "Les sujets de discussions du cours ne sont pas s\u00e9par\u00e9s.",
=======
    "Discussion": "Discussion",
    "Discussion Home": "Page d'accueil de Discussion",
    "Discussion admins, moderators, and TAs can make their posts visible to all students or specify a single group.": "Les administrateurs de discussions, mod\u00e9rateurs, et assistants peuvent rendre leur message visible pour tous les apprenants ou seulement un groupe sp\u00e9cifique.",
    "Discussion topics in the course are not divided.": "Les sujets de discussions du cours ne sont pas s\u00e9par\u00e9s.",
    "Discussions are unified; all learners interact with posts from other learners, regardless of the group they are in.": "Les discussions sont unies\u00a0; tous les \u00e9tudiants interagissent avec les messages d'autres \u00e9tudiants, peu importe le groupe auquel ils appartiennent.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Display Name": "Nom d'affichage",
    "Div": "Div",
    "Divide the selected content-specific discussion topics": "S\u00e9parer les sujets de discussion au contenu bien pr\u00e9cis",
    "Divided": "Divis\u00e9",
    "Do not show again": "Ne pas montrer de nouveau",
    "Do you want to allow this student ('{student_id}') to skip the entrance exam?": "Voulez-vous dispenser l'\u00e9tudiant ('{student_id}') d'examen d'entr\u00e9e?",
    "Do you want to replace the edX transcript with the YouTube transcript?": "Souhaitez-vous remplacer la transcription EdX par celle de YouTube ?",
    "Document properties": "Propri\u00e9t\u00e9s du document",
    "Does the name on your ID match your account name: %(fullName)s?": "Le nom sur votre ID correspond-il \u00e0 votre nom de compte: %(fullName)s?",
    "Does the photo of you show your whole face?": "Votre photo montre-t-elle votre visage en entier ?",
    "Don't see your picture? Make sure to allow your browser to use your camera when it asks for permission.": "Vous ne voyez pas votre photo ? Assurez-vous que votre navigateur est autoris\u00e9 \u00e0 utiliser votre webcam quand il le demande.",
    "Donate": "Faire un don",
    "Double-check that your webcam is connected and working to continue.": "V\u00e9rifiez que votre webcam est bien connect\u00e9e avant de continuer.",
    "Download": "T\u00e9l\u00e9charger",
<<<<<<< HEAD
=======
    "Download Memberships": "T\u00e9l\u00e9charger les membres",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Download Software Clicked": "T\u00e9l\u00e9chargement du logiciel demand\u00e9e",
    "Download Transcript for Editing": "T\u00e9l\u00e9charger la transcription pour l'\u00e9diter",
    "Download URL": "URL de t\u00e9l\u00e9chargement",
    "Download available encodings (.csv)": "T\u00e9l\u00e9charger les encodages disponibles (.csv)",
    "Download the user's certificate": "T\u00e9l\u00e9charger le certificat de l'utilisateur",
    "Draft (Never published)": "Brouillon (Jamais publi\u00e9)",
    "Draft (Unpublished changes)": "Brouillon (changements non publi\u00e9s)",
    "Draft saved on {lastSavedStart}{editedOn}{lastSavedEnd} by {editedByStart}{editedBy}{editedByEnd}": "Brouillons sauvegard\u00e9s le {lastSavedStart}{editedOn}{lastSavedEnd} par {editedByStart}{editedBy}{editedByEnd}",
<<<<<<< HEAD
=======
    "Drag and drop or {spanStart}browse your computer{spanEnd}.": "Glisser-d\u00e9poser ou {spanStart}parcourir votre ordinateur{spanEnd}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Drag to reorder": "Glissez pour modifier l'ordre",
    "Drop target image": "D\u00e9poser l'image cible",
    "Due Date": "Date d'\u00e9ch\u00e9ance",
    "Due Date:": "Date de rendu :",
    "Due Time in UTC:": "Horaire de rendu en UTC :",
    "Due date cannot be before start date.": "L'\u00e9ch\u00e9ance ne peut pas \u00eatre ant\u00e9rieure \u00e0 la date de d\u00e9but.",
<<<<<<< HEAD
=======
    "Due in:": "D\u00fb le :",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Due:": "A rendre pour le :",
    "Duplicate": "Dupliquer",
    "Duplicating": "Dupliquer",
    "Duration (sec)": "Dur\u00e9e (sec)",
    "Earned %(created)s.": "%(created)s obtenus.",
    "Earned Certificates": "Certificats obtenus",
    "EdX doesn't have a timed transcript for this video in Studio, but we found a transcript on YouTube. You can import the YouTube transcript or upload your own .srt transcript file.": "EdX ne dispose pas de transcription synchronis\u00e9e pour cette vid\u00e9o dans Studio, mais il existe une transcription YouTube. Vous pouvez importer la transcription Youtube ou t\u00e9l\u00e9versez votre propre fichier de transcription srt.",
    "EdX doesn\\'t have a timed transcript for this video. Please upload an .srt file.": "EdX ne dispose pas de transcription synchronis\u00e9e pour cette vid\u00e9o. Veuillez t\u00e9l\u00e9verser un fichier de transcription .srt.",
    "EdX has a timed transcript for this video. If you want to edit this transcript, you can download, edit, and re-upload the existing transcript. If you want to replace this transcript, upload a new .srt transcript file.": "EdX dispose d'une transcription synchronis\u00e9e pour cette vid\u00e9o. Si vous souhaitez \u00e9diter cette transcription, vous pouvez t\u00e9l\u00e9charger, \u00e9diter, et r\u00e9-envoyer la transcription existante. Si vous souhaitez remplacer cette transcription, envoyez un nouveau fichier srt.",
    "EdX has a timed transcript for this video. If you want to replace this transcript, upload a new .srt transcript file. If you want to edit this transcript, you can download, edit, and re-upload the existing transcript.": "EdX dispose d'une transcription synchronis\u00e9e pour cette vid\u00e9o. Si vous souhaitez remplacer cette transcription, envoyer un nouveau fichier de transcription srt. Si vous souhaitez \u00e9diter cette transcription, vous pouvez envoyer, \u00e9diter et re-r\u00e9envoyer la transcription existante.",
    "Edit": "Modifier",
    "Edit %(display_name)s (required)": "Modifier %(display_name)s (requis)",
    "Edit HTML": "Modifier le code HTML",
    "Edit Membership": "Modifier les inscriptions",
    "Edit Team": "Modifier l'\u00e9quipe",
    "Edit Thumbnail": "Modifier la vignette",
<<<<<<< HEAD
    "Edit Your Name": "Modifier votre nom",
    "Edit this certificate?": "Modifier ce certificat ?",
    "Editable": "Modifiable",
    "Editing: {title}": "\u00c9dition : {title}",
=======
    "Edit Title": "Modifier le titre",
    "Edit Your Name": "Modifier votre nom",
    "Edit this certificate?": "Modifier ce certificat ?",
    "Edit your post below.": "Modifier votre message ci-dessous.",
    "Editable": "Modifiable",
    "Editing access for: {title}": "\u00c9diter l'acc\u00e8s pour : {title}",
    "Editing comment": "Commentaire en cours de modification",
    "Editing post": "Message en cours de modification",
    "Editing response": "R\u00e9ponse en cours de modification",
    "Editing: {title}": "\u00c9dition : {title}",
    "Editor": "\u00c9diteur",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Education Completed": "Niveau de formation",
    "Email": "Email",
    "Email Address (Sign In)": "Adresse e-mail (Connexion)",
    "Email address": "Adresse email",
    "Emails successfully sent. The following users are no longer enrolled in the course:": "Les e-mails ont \u00e9t\u00e9 envoy\u00e9s avec succ\u00e8s. Les utilisateurs suivants ont \u00e9t\u00e9 d\u00e9sinscrits du cours\u00a0:",
    "Embed": "Int\u00e9grer",
    "Emoticons": "\u00c9moticones",
<<<<<<< HEAD
    "Enable Cohorts": "Activer les cohortes",
=======
    "Enable": "Activer",
    "Enable Cohorts": "Activer les cohortes",
    "Enable Course Highlight Emails": "Activer les e-mails de mise \u00e0 jour du cours",
    "Enable Now": "Activer maintenant",
    "Enable discussion": "Activer la discussion",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Enabled": "Activ\u00e9",
    "Encoding": "Encodage",
    "End My Exam": "Terminer mon examen",
    "End of transcript. Skip to the start.": "Fin de la transcription. Aller au d\u00e9but.",
<<<<<<< HEAD
=======
    "Ending Exam": "Fin de l'examen",
    "Endorse": "Approuver",
    "Ends {end}": "Finit \u00e0 {end}",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Engage with posts": "Participez \u00e0 la conversation",
    "Enroll Now": "Inscrivez-vous maintenant",
    "Enrolled": "Inscrit",
    "Enrolling you in the selected course": "Inscription en cours",
    "Enrollment Date": "Date d'inscription",
    "Enrollment Mode": "Mode d'inscription",
    "Enrollment Opens on": "Les inscriptions ouvrent le ",
    "Enrollment Tracks": "Parcours d'inscription",
    "Ensure that you can see your photo and read your name": "Assurez-vous vous pouvez bien voir votre photo et lire votre nom",
<<<<<<< HEAD
=======
    "Enter 3-5 highlights to include in the email message that learners receive for this section (250 character limit).": "Saisissez 3-5 faits marquants \u00e0 inclure au courriel qui sera envoy\u00e9 aux \u00e9tudiants de cette section (minimum 250 caract\u00e8res).",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Enter Due Date and Time": "Entrez la date et heure d'\u00e9ch\u00e9ance",
    "Enter Start Date and Time": "Entrez la date et heure de d\u00e9but",
    "Enter a student's username or email address.": "Entrez un nom d'utilisateur et un email.",
    "Enter a username or email.": "Entrez un nom d'utilisateur ou un email.",
<<<<<<< HEAD
=======
    "Enter a valid positive value number": "Entrez un nombre de valeur positive valide",
    "Enter a valid username or email": "Entrez un nom d'utilisateur ou un courriel valide",
    "Enter and confirm your new password.": "Saisir et confirmer votre nouveau mot de passe.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Enter email addresses and/or usernames, separated by new lines or commas, for the learners you want to add. *": "Saisissez les adresses e-mail et/ou les noms d'utilisateurs, s\u00e9par\u00e9s par des retours \u00e0 la ligne ou des virgules, pour les \u00e9tudiants que vous voulez ajouter. *",
    "Enter information to describe your team. You cannot change these details after you create the team.": "Saisissez une description de votre \u00e9quipe. Vous ne pourrez pas changer ces \u00e9l\u00e9ments une fois que l'\u00e9quipe est cr\u00e9\u00e9e.",
    "Enter some details for your support request.": "Saisissez un d\u00e9tail pour votre demande de soutien.",
    "Enter team description.": "Saisir la description de l'\u00e9quipe. ",
    "Enter team name.": "Saisir le nom de l'\u00e9quipe.",
<<<<<<< HEAD
=======
    "Enter the account information for your organization.": "Saisissez les informations du compte de votre organisation.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Enter the enrollment code.": "Entrer le code d'inscription",
    "Enter the name of the cohort": "Entrer le nom de la cohorte",
    "Enter the page number you'd like to quickly navigate to.": "Saisissez le num\u00e9ro de la page que vous souhaitez atteindre rapidement.",
    "Enter the username or email address of each learner that you want to add as an exception.": "Saisissez le nom d'utilisateur ou l'adresse email de chaque \u00e9tudiant que vous souhaitez ajouter comme exception.",
    "Enter username or email": "Saisir un nom d'utilisateur ou un email",
<<<<<<< HEAD
=======
    "Enter your {platform_display_name} username or the URL to your {platform_display_name} page. Delete the URL to remove the link.": "Entrez votre {platform_display_name} nom d'utilisateur ou l'URL vers votre {platform_display_name} page. Effacez l'URL pour enlever le lien.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Entrance exam attempts is being reset for student '{student_id}'.": "Nombre d'essai r\u00e9initialis\u00e9 pour l'examen d'entr\u00e9e de l'\u00e9tudiant '{student_id}'.",
    "Entrance exam state is being deleted for student '{student_id}'.": "Effacement du status de l'examen d'entr\u00e9e pour l'\u00e9tudiant '{student_id}'.",
    "Error": "Erreur",
    "Error adding learners.": "Erreur lors de l'ajout des apprenants.",
    "Error adding user": "Probl\u00e8me lors de l'ajout de l'utilisateur",
    "Error adding/removing users as beta testers.": "Erreur lors de l'ajout/suppression d'utilisateurs en que tant que b\u00eata-testeurs.",
<<<<<<< HEAD
=======
    "Error assigning team memberships": "Erreur d'affectation des membres de l'\u00e9quipe",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Error changing user's permissions.": "Erreur lors du changement des permissions de l'utilisateur.",
    "Error deleting entrance exam state for student '{student_id}'. Make sure student identifier is correct.": "Erreur de suppression du status d'examen d'entr\u00e9e pour l'\u00e9tudiant '{student_id}'. Assurez-vous que l'identifiant \u00e9tudiant est correct.",
    "Error deleting student '<%- student_id %>'s state on problem '<%- problem_id %>'. Make sure that the problem and student identifiers are complete and correct.": "Erreur lors de la suppression de l'\u00e9tat de l'\u00e9tudiant '<%- student_id %>' pour le probl\u00e8me '<%- problem_id %>' V\u00e9rifiez qu'il n'y a pas d'erreur dans les identifiants du probl\u00e8me et de l'\u00e9tudiant. ",
    "Error enrolling/unenrolling users.": "Erreur lors de l'inscription/d\u00e9sinscription d'utilisateurs.",
    "Error generating ORA data report. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration du rapport de donn\u00e9es ORA. Merci d\u2019essayer \u00e0 nouveau.",
<<<<<<< HEAD
=======
    "Error generating anonymous IDs. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des ID anonymes. Veuillez r\u00e9essayer.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Error generating grades. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des notes. Merci d\u2019essayer \u00e0 nouveau.",
    "Error generating list of students who may enroll. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration de la liste des \u00e9tudiants pouvant s'inscrire. Merci d'essayer de nouveau.",
    "Error generating problem grade report. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration du rapport des notes. Merci d\u2019essayer \u00e0 nouveau.",
    "Error generating proctored exam results. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des r\u00e9sultats d'examens supervis\u00e9s. Merci d'essayer \u00e0 nouveau.",
    "Error generating student profile information. Please try again.": "Erreur lors de la cr\u00e9ation des informations du profil \u00e9tudiant. Merci d\u2019essayer \u00e0 nouveau.",
    "Error generating survey results. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des r\u00e9sultats d'enqu\u00eate. Merci d'essayer \u00e0 nouveau.",
<<<<<<< HEAD
=======
    "Error getting enrollment status for '<%- student_id %>'. Make sure that the student identifier is spelled correctly.": "Erreur lors de l'obtention du statut d'inscription pour '<%- student_id %>'. Assurez-vous que l'identifiant de l'\u00e9tudiant est orthographi\u00e9 correctement.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Error getting entrance exam task history for student '{student_id}'. Make sure student identifier is correct.": "Erreur d'obtention de l'historique d'examen d'entr\u00e9e pour l'\u00e9tudiant '{student_id}'. Assurez-vous que l'identifiant \u00e9tudiant est correct.",
    "Error getting issued certificates list.": "Erreur lors de la r\u00e9cup\u00e9ration de la liste des certificats d\u00e9livr\u00e9s.",
    "Error getting student list.": "Erreur lors de la r\u00e9cup\u00e9ration de la liste des \u00e9tudiants.",
    "Error getting student progress url for '<%- student_id %>'. Make sure that the student identifier is spelled correctly.": "Erreur dans l'obtention de l'url de progression de l'\u00e9tudiant '<%- student_id %>'. V\u00e9rifiez qu'il n'y a pas d'erreur dans l'identifiant de l'\u00e9tudiant. ",
    "Error getting task history for problem '<%- problem_id %>' and student '<%- student_id %>'. Make sure that the problem and student identifiers are complete and correct.": "Erreur dans la r\u00e9cup\u00e9ration de l'historique du probl\u00e8me '<%- problem_id %>' pour l'\u00e9tudiant '<%- student_id %>'. V\u00e9rifiez qu'il n'y a pas d'erreur dans les identifiants du probl\u00e8me et de l'\u00e9tudiant. ",
    "Error getting the number of ungraded responses": "Erreur lors de la r\u00e9cup\u00e9ration du nombre de r\u00e9ponses non \u00e9valu\u00e9es",
    "Error importing course": "Erreur lors de l'importation du cours",
    "Error listing task history for this student and problem.": "Erreur lors de l'affichage de l'historique des t\u00e2ches pour cet \u00e9tudiant et cet exercice.",
<<<<<<< HEAD
    "Error removing user": "Erreur lors de la suppression de l'utilisateur",
    "Error resetting entrance exam attempts for student '{student_id}'. Make sure student identifier is correct.": "Erreur lors de la r\u00e9initialisation du nombre d'essai pour l'examen d'entr\u00e9e de l'\u00e9tudiant '{student_id}'. Assurez-vous que l'identifiant \u00e9tudiant est correct.",
    "Error retrieving grading configuration.": "Erreur lors de la r\u00e9cup\u00e9ration de la configuration de la notation.",
    "Error sending email.": "Erreur lors de l\u2019envoi de l\u2019e-mail.",
    "Error starting a task to rescore entrance exam for student '{student_id}'. Make sure that entrance exam has problems in it and student identifier is correct.": "Erreur dans le d\u00e9marrage de la t\u00e2che de recalcul du score de l'examen d'entr\u00e9e pour l'\u00e9tudiant  '{student_id}'. Assurez-vous que l'examen d'entr\u00e9e comporte des exercices et que l'identifiant de l'\u00e9tudiant est correct.",
    "Error starting a task to rescore problem '<%- problem_id %>' for student '<%- student_id %>'. Make sure that the the problem and student identifiers are complete and correct.": "Erreur dans le recalcul du score du probl\u00e8me '<%- problem_id %>' pour l'\u00e9tudiant '<%- student_id %>'. V\u00e9rifiez qu'il n'y a pas d'erreur dans les identifiants du probl\u00e8me et de l'\u00e9tudiant. ",
    "Error starting a task to reset attempts for all students on problem '<%- problem_id %>'. Make sure that the problem identifier is complete and correct.": "Erreur dans la r\u00e9initialisation des essais de tous les \u00e9tudiants pour le probl\u00e8me '<%- problem_id %>'. V\u00e9rifiez que l'identifiant du probl\u00e8me est complet et correct. ",
=======
    "Error posting your message.": "Erreur lors de l'envoi de votre message.",
    "Error removing user": "Erreur lors de la suppression de l'utilisateur",
    "Error resetting entrance exam attempts for student '{student_id}'. Make sure student identifier is correct.": "Erreur lors de la r\u00e9initialisation du nombre d'essai pour l'examen d'entr\u00e9e de l'\u00e9tudiant '{student_id}'. Assurez-vous que l'identifiant \u00e9tudiant est correct.",
    "Error resetting problem attempts for problem '<%- problem_id %>' and student '<%- student_id %>'. Make sure that the problem and student identifiers are complete and correct.": "Erreur en r\u00e9initialisant les essais pour le probl\u00e8me '<%- problem_id %>' et l'\u00e9tudiant '<%- student_id %>'. Veuillez vous assurer que les identifiants du probl\u00e8me et de l'\u00e9tudiant sont complets et corrects.",
    "Error retrieving grading configuration.": "Erreur lors de la r\u00e9cup\u00e9ration de la configuration de la notation.",
    "Error sending email.": "Erreur lors de l\u2019envoi de l\u2019e-mail.",
    "Error starting a task to override score for problem '<%- problem_id %>' for student '<%- student_id %>'. Make sure that the the score and the problem and student identifiers are complete and correct.": "Erreur dans le remplacement de la note du probl\u00e8me '<%- problem_id %>' de l'\u00e9tudiant '<%- student_id %>'. V\u00e9rifiez qu'il n'y a pas d'erreur dans les identifiants du probl\u00e8me et de l'\u00e9tudiant.",
    "Error starting a task to rescore entrance exam for student '{student_id}'. Make sure that entrance exam has problems in it and student identifier is correct.": "Erreur dans le d\u00e9marrage de la t\u00e2che de recalcul du score de l'examen d'entr\u00e9e pour l'\u00e9tudiant  '{student_id}'. Assurez-vous que l'examen d'entr\u00e9e comporte des exercices et que l'identifiant de l'\u00e9tudiant est correct.",
    "Error starting a task to rescore problem '<%- problem_id %>' for student '<%- student_id %>'. Make sure that the the problem and student identifiers are complete and correct.": "Erreur dans le recalcul du score du probl\u00e8me '<%- problem_id %>' pour l'\u00e9tudiant '<%- student_id %>'. V\u00e9rifiez qu'il n'y a pas d'erreur dans les identifiants du probl\u00e8me et de l'\u00e9tudiant. ",
    "Error starting a task to rescore problem '<%- problem_id %>'. Make sure that the problem identifier is complete and correct.": "Erreur dans le recalcul des scores du probl\u00e8me '<%- problem_id %>'. V\u00e9rifiez que l'identifiant du probl\u00e8me est complet et correct. ",
    "Error starting a task to reset attempts for all students on problem '<%- problem_id %>'. Make sure that the problem identifier is complete and correct.": "Erreur dans la r\u00e9initialisation des essais de tous les \u00e9tudiants pour le probl\u00e8me '<%- problem_id %>'. V\u00e9rifiez que l'identifiant du probl\u00e8me est complet et correct. ",
    "Error when looking up username": "Erreur lors de la recherche du nom d'utilisateur",
    "Error while fetching student data.": "Erreur lors de la r\u00e9cup\u00e9ration des donn\u00e9es \u00e9tudiantes.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Error while generating certificates. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des certificats. Merci d'essayer \u00e0 nouveau.",
    "Error while regenerating certificates. Please try again.": "Erreur lors de la g\u00e9n\u00e9ration des certificats. Merci d'essayer \u00e0 nouveau.",
    "Error.": "Erreur.",
    "Error:": "Erreur :",
<<<<<<< HEAD
    "Error: Choosing failed.": "Erreur: La s\u00e9lection a \u00e9chou\u00e9.",
=======
    "Error: ": "Erreur :",
    "Error: Choosing failed.": "Erreur: La s\u00e9lection a \u00e9chou\u00e9.",
    "Error: Connection with server failed.": "Erreur: La connection avec le serveur a \u00e9chou\u00e9.",
    "Error: Import failed.": "Erreur: L'import a \u00e9chou\u00e9.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Error: Replacing failed.": "Erreur: Le remplacement a \u00e9chou\u00e9.",
    "Error: Uploading failed.": "Erreur: Le chargement a \u00e9chou\u00e9.",
    "Error: User '<%- username %>' has not yet activated their account. Users must create and activate their accounts before they can be assigned a role.": "Erreur : L'utilisateur \"<%- username %>\" n'a pas encore activ\u00e9 son compte. Les utilisateurs doivent cr\u00e9er et activer leurs comptes avant qu'ils ne puissent se voir attribuer un r\u00f4le.",
    "Error: You cannot remove yourself from the Instructor group!": "Erreur : Vous ne pouvez pas vous supprimer vous-m\u00eame du groupe des enseignants !",
    "Errors": "Erreurs",
<<<<<<< HEAD
    "Everyone who has staff privileges in this course": "Tous ceux qui ont un statut d'\u00e9quipe p\u00e9dagogique pour ce cours",
    "Exam Types": "Types d'examen",
=======
    "Errors/Technical Issues": "Erreurs/probl\u00e8mes techniques",
    "Everyone who has staff privileges in this course": "Tous ceux qui ont un statut d'\u00e9quipe p\u00e9dagogique pour ce cours",
    "Exam Types": "Types d'examen",
    "Exam timer and end exam button": "Minuterie d'examen et bouton de fin d'examen",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Exception Granted": "D\u00e9rogation accord\u00e9e",
    "Exit full browser": "Quitter le navigateur plein \u00e9cran",
    "Expand All": "Tout d\u00e9plier",
    "Expand Instructions": "D\u00e9plier les instructions",
    "Explain if other.": "Expliquer si autre.",
    "Explanation": "Explication",
    "Explicitly Hiding from Students": "Cacher explicitement aux \u00e9tudiants",
    "Explore New Programs": "Explorez les nouveaux programmes",
    "Explore Programs": "Explorez les programmes",
    "Explore your course!": "Explorez votre cours",
    "Failed Proctoring": "Echec de l'Examen Surveill\u00e9",
<<<<<<< HEAD
    "Failed to delete student state for user.": "Impossible de supprimer l'\u00e9tat de l'\u00e9tudiant pour cet utilisateur.",
    "Failed to rescore problem for user.": "\u00c9chec lors de la r\u00e9\u00e9valuation de l'exercice pour cet utilisateur.",
=======
    "Failed to clone rubric": "\u00c9chec du clonage de la grille d'\u00e9valuation",
    "Failed to delete student state for user.": "Impossible de supprimer l'\u00e9tat de l'\u00e9tudiant pour cet utilisateur.",
    "Failed to rescore problem for user.": "\u00c9chec lors de la r\u00e9\u00e9valuation de l'exercice pour cet utilisateur.",
    "Failed to rescore problem to improve score for user.": "\u00c9chec de la r\u00e9\u00e9valuation pour l'utilisateur afin d'am\u00e9liorer sa note au probl\u00e8me",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Failed to reset attempts for user.": "Impossible de r\u00e9initialiser les essais pour cet utilisateur.",
    "February": "F\u00e9vrier",
    "Feedback available for selection.": "Feedback disponible pour la s\u00e9lection.",
    "File": "Fichier",
    "File Name": "Nom du fichier",
<<<<<<< HEAD
    "File types can not be empty.": "Les types de fichier ne peuvent \u00eatre vides.",
    "File upload succeeded": "Chargement du fichier r\u00e9ussi",
    "File {filename} exceeds maximum size of {maxFileSizeInMBs} MB": "Le fichier nomm\u00e9 {filename} d\u00e9passe le poids maximum autoris\u00e9 : {maxFileSizeInMBs} Mo",
    "Files must be in JPEG or PNG format.": "Les fichiers doivent \u00eatre au format JPEG ou PNG.",
=======
    "File format not supported. Please upload a file with a {ext} extension.": "Format de fichier non support\u00e9. Uploadez un fichier avec une extension {ext}\u00a0.",
    "File types can not be empty.": "Les types de fichier ne peuvent \u00eatre vides.",
    "File upload failed: unsupported file type. Only the supported file types can be uploaded. If you have questions, please reach out to the course team.": "\u00c9chec du t\u00e9l\u00e9versement du fichier: type de fichier non pris en charge. Seuls les types de fichiers pris en charge peuvent \u00eatre t\u00e9l\u00e9vers\u00e9s. Si vous avez des questions, veuillez contacter l'\u00e9quipe du cours.",
    "File upload succeeded": "Chargement du fichier r\u00e9ussi",
    "File {filename} exceeds maximum size of {maxFileSizeInMBs} MB": "Le fichier nomm\u00e9 {filename} d\u00e9passe le poids maximum autoris\u00e9 : {maxFileSizeInMBs} Mo",
    "Files must be in JPEG or PNG format.": "Les fichiers doivent \u00eatre au format JPEG ou PNG.",
    "Files that you upload must be PDFs or image files in .gif, .jpg, .jpeg, or .png format.": "Les fichiers que vous chargez doivent \u00eatre soit des PDF, soit des fichiers d'image au format .gif, .jpg, .jpeg ou .png.",
    "Files that you upload must be smaller than 5MB in size.": "Les fichiers que vous chargez doivent avoir une taille inf\u00e9rieure \u00e0 5MB.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Fill browser": "Remplir le navigateur",
    "Filter": "Filtrer",
    "Filter and sort topics": "Filtrer et trier les sujets",
    "Final Grade Received": "Note finale obtenue",
<<<<<<< HEAD
=======
    "Financial Aid": "Aide financi\u00e8re",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Financial Assistance": "Soutien Financier",
    "Financial Assistance Application": "Demande d'assistance financi\u00e8re",
    "Find": "Trouver",
    "Find a course": "Trouver un cours",
    "Find and replace": "Trouver et remplacer",
<<<<<<< HEAD
=======
    "Find answers to the top questions asked by learners.": "Trouver les r\u00e9ponses aux principales questions pos\u00e9es par vos \u00e9tudiants.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Find discussions": "Trouver des discussions",
    "Find next": "Trouver le suivant",
    "Find previous": "Trouver le pr\u00e9c\u00e9dent",
    "Finish": "Terminer",
<<<<<<< HEAD
    "First time here?": "C'est votre premi\u00e8re visite ?",
    "Follow or unfollow posts": "Suivre ou ne plus suivre un message",
=======
    "Finish later": "Terminer plus tard",
    "First time here?": "C'est votre premi\u00e8re visite ?",
    "Follow": "Suivre",
    "Follow or unfollow posts": "Suivre ou ne plus suivre un message",
    "Following": "Suivi",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Font Family": "Famille de la fonte",
    "Font Sizes": "Tailles des fontes",
    "Footer": "Pied de page",
    "For grading to work, you must change all {oldName} subsections to {newName}.": "Pour que le calcul des notes fonctionne, vous devez modifier toutes les sous-sections {oldName} \u00e0 {newName}.",
<<<<<<< HEAD
=======
    "For inquiries regarding assignments, grades, or structure of a specific course, please post in the discussion forums for that course directly.": "Pour toute question concernant les devoirs, les notes ou la structure d'un cours sp\u00e9cifique, veuillez poster directement dans les forums de discussion de ce cours.",
    "Forgot my password": "J'ai oubli\u00e9 mon mot de passe",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Format": "Formater",
    "Formats": "Formats",
    "Free text notes": "Notes libres",
    "Frequently Asked Questions": "Foire Aux Questions",
    "Full Name": "Nom complet",
    "Full Profile": "Profil complet",
    "Fullscreen": "Plein \u00e9cran",
    "Fully Supported": "Compl\u00e8tement support\u00e9",
    "Gender": "Genre",
    "General": "G\u00e9n\u00e9ral",
<<<<<<< HEAD
    "Generate": "G\u00e9n\u00e9r\u00e9",
    "Generate Exception Certificates": "G\u00e9n\u00e9rer les attestations de d\u00e9rogation",
    "Generate the user's certificate": "G\u00e9n\u00e9rer le certificat de l'utilisateur",
    "Go Back": "Retour",
    "Go to Dashboard": "Aller au tableau de bord",
    "Go to your Dashboard": "Aller \u00e0 votre tableau de bord",
    "Government-Issued Photo ID": "Photo d'identit\u00e9 officielle",
    "Grace period must be specified in HH:MM format.": "Le d\u00e9lai doit \u00eatre au format HH: MM.",
    "Grade": "Note",
=======
    "General Proctored Exam Rules": "R\u00e8gles g\u00e9n\u00e9rales d'examen surveill\u00e9",
    "Generate": "G\u00e9n\u00e9r\u00e9",
    "Generate Exception Certificates": "G\u00e9n\u00e9rer les attestations de d\u00e9rogation",
    "Generate the user's certificate": "G\u00e9n\u00e9rer le certificat de l'utilisateur",
    "Get started": "Commencez",
    "Go Back": "Retour",
    "Go to Dashboard": "Aller au tableau de bord",
    "Go to dashboard": "Aller au tableau de bord",
    "Go to my Dashboard": "Aller \u00e0 mon Tableau de bord",
    "Go to your Dashboard": "Aller \u00e0 votre tableau de bord",
    "Go to {platform} Home": "Aller \u00e0 l'Accueil de {platform}",
    "Going forward, your account information will be updated and maintained by {enterprise_name}.": "Plus tard, votre information de compte sera mise \u00e0 jour et pr\u00e9serv\u00e9e par {enterprise_name}.",
    "Government-Issued Photo ID": "Photo d'identit\u00e9 officielle",
    "Grace period must be specified in HH:MM format.": "Le d\u00e9lai doit \u00eatre au format HH: MM.",
    "Grade": "Note",
    "Grade Status": "Statut des notes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Grade as:": "Noter comme :",
    "Graded as:": "Not\u00e9 comme\u00a0:",
    "Grading": "\u00c9valuation",
    "Group": "Groupe",
    "Group %s": "Groupe %s",
    "Group A": "Groupe A",
    "Group B": "Groupe B",
    "Group Configuration ID": "Identifiant de la configuration du groupe",
    "Group Configuration Name": "Nom de la configuration du groupe",
    "Group Configuration information": "Informations sur la configuration du groupe",
    "Group Configuration name is required.": "Le nom de la configuration de groupe est requis.",
    "Group information": "Information sur le groupe",
    "Group name is required": "Un nom de groupe est requis",
    "Groups": "Groupes",
    "H Align": "Aligner Horiz.",
    "HTML preview of post": "Pr\u00e9visualisation HTML de l'article",
    "HTML source code": "Code source HTML",
<<<<<<< HEAD
=======
    "Have a computer with a functioning webcam": "Ayez un ordinateur avec une webcam fonctionnelle",
    "Have you ever served on active duty in the U.S. Armed Forces, Reserves, or National Guard?": "Avez-vous d\u00e9j\u00e0 servi en service actif dans les forces arm\u00e9es, les r\u00e9serves ou la garde nationale?",
    "Have your valid photo ID (e.g. driver's license or passport) ready": "Ayez \u00e0 port\u00e9e de main votre pi\u00e8ce d'identit\u00e9 valide avec photo (par exemple, permis de conduire ou passeport)",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Header": "En-t\u00eate",
    "Header 1": "En-t\u00eate 1",
    "Header 2": "En-t\u00eate 2",
    "Header 3": "En-t\u00eate 3",
    "Header 4": "En-t\u00eate 4",
    "Header 5": "En-t\u00eate 5",
    "Header 6": "En-t\u00eate 6",
    "Header cell": "En-t\u00eate de la cellule",
    "Headers": "En-t\u00eates",
    "Heading": "Titre",
    "Heading (Ctrl+H)": "Titre (Ctrl+H)",
    "Heading 1": "Ent\u00eate 1",
    "Heading 2": "Ent\u00eate 2",
    "Heading 3": "Ent\u00eate 3",
    "Heading 4": "Titre 4",
    "Heading 5": "Titre 5",
    "Heading 6": "Titre 6",
    "Headings": "Titres",
    "Height": "Hauteur",
<<<<<<< HEAD
=======
    "Help Translate into {beta_language}": "Aidez-nous \u00e0 traduire en {beta_language}",
    "Help make edX better for everyone!": "Aidez-nous \u00e0 rendre edX meilleur pour tous !",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Help other learners decide whether to join your team by specifying some characteristics for your team. Choose carefully, because fewer people might be interested in joining your team if it seems too restrictive.": "Aidez les autres apprenants \u00e0 d\u00e9cider s'ils veulent rejoindre votre \u00e9quipe en sp\u00e9cifiant quelques caract\u00e9ristiques de votre \u00e9quipe. Choisissez soigneusement, car moins de personnes seront int\u00e9ress\u00e9s \u00e0 rejoindre votre \u00e9quipe si votre \u00e9quipe semble trop restrictive.",
    "Hide": "Masquer",
    "Hide Annotations": "Cacher les annotations",
    "Hide Deprecated Settings": "Cacher les param\u00e8tres obsol\u00e8tes",
    "Hide Discussion": "Masquer la discussion",
<<<<<<< HEAD
=======
    "Hide Previews": "Cacher les aper\u00e7us",
    "Hide Timer": "Masquer le temps restant",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Hide closed captions": "Masquer les sous-titres",
    "Hide content after course end date": "Masquer le contenu apr\u00e8s la date de fin du cours",
    "Hide content after due date": "Masquer le contenu apr\u00e8s l'\u00e9ch\u00e9ance",
    "Hide entire subsection": "Masquer toute la sous-section",
    "Hide from learners": "Cacher des apprenants.",
    "Hide notes": "Masquer les notes",
<<<<<<< HEAD
    "Hiding from Students": "Cacher aux \u00e9tudiants",
    "High Definition": "Haute d\u00e9finition",
    "Highlighted text": "Texte surlign\u00e9",
=======
    "Hide transcripts ({transcriptCount})": "Masquer les transcriptions ({transcriptCount})",
    "Hiding from Students": "Cacher aux \u00e9tudiants",
    "High Definition": "Haute d\u00e9finition",
    "Highlight {highlight_index}": "Faits marquants {highlight_index}",
    "Highlighted text": "Texte surlign\u00e9",
    "Highlights for {display_name}": "Faits marquants de {display_name}",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Horizontal Rule (Ctrl+R)": "Ligne Horizontale (Ctrl+R)",
    "Horizontal line": "Ligne horizontale",
    "Horizontal space": "Espace horizontal",
    "How to create useful text alternatives.": "Comment cr\u00e9er des textes alternatifs utiles.",
    "How to use %(platform_name)s discussions": "Comment utiliser les discussions %(platform_name)s",
<<<<<<< HEAD
    "Hyperlink (Ctrl+L)": "Lien (Ctrl+L)",
    "I am ready to start this timed exam,": "Je suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9,",
    "ID": "ID",
    "ID-Verification is not required for this Professional Education course.": "La v\u00e9rification d'identit\u00e9 n'est pas demand\u00e9e pour ce cours d'\u00e9ducation professionnelle.",
    "Identity Verification In Progress": "V\u00e9rification d'identit\u00e9 en cours",
    "If the course does not have an end date, learners always see their scores when they submit answers to assessments.": "Si le cours ne comporte aucune date de fin, les \u00e9tudiants pourront toujours voir les notes obtenues apr\u00e8s \u00e9valuation.",
    "If the subsection does not have a due date, learners always see their scores when they submit answers to assessments.": "Si la sous-section n'a aucune date d'\u00e9ch\u00e9ance, les \u00e9tudiants pourront toujours voir leurs notes apr\u00e8s avoir donn\u00e9 leurs r\u00e9ponses lors de l'\u00e9valuation. ",
    "If the unit was previously published and released to learners, any changes you made to the unit when it was hidden will now be visible to learners.": "Si cette unit\u00e9 avait \u00e9t\u00e9 pr\u00e9c\u00e9demment publi\u00e9e et rendu disponible aux apprenants, tout changement que vous aviez effectu\u00e9 \u00e0 cette unit\u00e9 lorsqu'elle \u00e9tait cach\u00e9e sont maintenant visibles aux apprenants.",
=======
    "However, {overwritten_count} of these students have received a grade through the staff grade override tool already.": "Toutefois, {overwritten_count} \u00e9tudiants ont d\u00e9j\u00e0 re\u00e7u une note fournie par l'\u00e9quipe de cours.",
    "Hyperlink (Ctrl+L)": "Lien (Ctrl+L)",
    "I am ready to start this timed exam,": "Je suis pr\u00eat \u00e0 d\u00e9marrer cet examen \u00e0 temps limit\u00e9,",
    "I understand and want to reset this onboarding exam.": "Je comprends et je souhaite r\u00e9initialiser cet examen d'int\u00e9gration.",
    "ID": "ID",
    "ID-Verification is not required for this Professional Education course.": "La v\u00e9rification d'identit\u00e9 n'est pas demand\u00e9e pour ce cours d'\u00e9ducation professionnelle.",
    "Identity Verification In Progress": "V\u00e9rification d'identit\u00e9 en cours",
    "If a learner starts on {startDate}, this subsection will be due on {projectedDueIn}.": "Si un apprenant commence le {startDate}, cette sous-section sera due le {projectedDueIn}.",
    "If the photos you submit are rejected, try moving the computer or camera orientation to change the lighting angle.  The most common reason for rejection is inability to read the text on the ID card.": "Si les photos que vous soumettez sont rejet\u00e9es, essayez de d\u00e9placer l'ordinateur ou l'appareil photo pour changer l'angle d'\u00e9clairage. Le motif de rejet le plus fr\u00e9quent est l'incapacit\u00e9 de lire le texte de la carte d'identit\u00e9.",
    "If the proctoring software window is still open, close it now and confirm that you want to quit the application.": "Si la fen\u00eatre du logiciel de surveillance est toujours ouverte, fermez-la maintenant et confirmez que vous souhaitez quitter l'application.",
    "If the subsection does not have a due date, learners always see their scores when they submit answers to assessments.": "Si la sous-section n'a aucune date d'\u00e9ch\u00e9ance, les \u00e9tudiants pourront toujours voir leurs notes apr\u00e8s avoir donn\u00e9 leurs r\u00e9ponses lors de l'\u00e9valuation. ",
    "If the unit was previously published and released to learners, any changes you made to the unit when it was hidden will now be visible to learners.": "Si cette unit\u00e9 avait \u00e9t\u00e9 pr\u00e9c\u00e9demment publi\u00e9e et rendu disponible aux apprenants, tout changement que vous aviez effectu\u00e9 \u00e0 cette unit\u00e9 lorsqu'elle \u00e9tait cach\u00e9e sont maintenant visibles aux apprenants.",
    "If the unit was previously published and released to students, any changes you made to the unit when it was hidden will now be visible to students. Do you want to proceed?": "Si l'unit\u00e9 a d\u00e9j\u00e0 \u00e9t\u00e9 publi\u00e9e et diffus\u00e9e aux \u00e9tudiants, tous les changements apport\u00e9s \u00e0 l'unit\u00e9 pendant qu' elle \u00e9tait cach\u00e9e seront d\u00e9sormais visibles par les \u00e9tudiants. Voulez-vous continuer?",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "If you do not yet have an account, use the button below to register.": "Si vous n'avez pas encore de compte, utilisez le bouton ci-dessous pour vous inscrire.",
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "Si vous quittez cette page sans la sauvegarder ou soumettre votre r\u00e9ponse, vous perdrez tout le travail r\u00e9alis\u00e9 pour cette r\u00e9ponse.",
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par les pairs, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre auto-\u00e9valuation, vous perdrez tout le travail r\u00e9alis\u00e9.",
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "Si vous quittez cette page sans envoyer votre \u00e9valuation par l'\u00e9quipe p\u00e9dagogique, vous perdrez tout le travail r\u00e9alis\u00e9.",
<<<<<<< HEAD
    "If you make significant changes, make sure you notify members of the team before making these changes.": "Si vous r\u00e9alisez d'importants changements, pr\u00e9venez les membres de l'\u00e9quipe avant de les faire.",
    "If you make this %(xblockType)s visible to learners, learners will be able to see its content after the release date has passed and you have published the unit. Only units that are explicitly hidden from learners will remain hidden after you clear this option for the %(xblockType)s.": "Si vous rendez ce %(xblockType)s visible aux apprenants, les apprenants pourront voir son contenu apr\u00e8s que la date de publication soit pass\u00e9e et que vous ayez publi\u00e9 cette unit\u00e9. Seules les unit\u00e9s qui sont explicitement cach\u00e9es des apprenants resteront cach\u00e9es apr\u00e8s vous d\u00e9sactivez cette option pour ce %(xblockType)s.",
=======
    "If you leave, you can no longer post in this team's discussions.Your place will be available to another learner.": "Si vous quittez, vous ne pouvez plus poster dans les discussions de cette \u00e9quipe. Votre place sera disponible pour un autre apprenant.",
    "If you make significant changes, make sure you notify members of the team before making these changes.": "Si vous r\u00e9alisez d'importants changements, pr\u00e9venez les membres de l'\u00e9quipe avant de les faire.",
    "If you make this %(xblockType)s visible to learners, learners will be able to see its content after the release date has passed and you have published the unit. Only units that are explicitly hidden from learners will remain hidden after you clear this option for the %(xblockType)s.": "Si vous rendez ce %(xblockType)s visible aux apprenants, les apprenants pourront voir son contenu apr\u00e8s que la date de publication soit pass\u00e9e et que vous ayez publi\u00e9 cette unit\u00e9. Seules les unit\u00e9s qui sont explicitement cach\u00e9es des apprenants resteront cach\u00e9es apr\u00e8s vous d\u00e9sactivez cette option pour ce %(xblockType)s.",
    "If you proceed, you will be unable to use this account to take courses on the {platformName} app, {siteName}, or any other site hosted by {platformName}.": "Si vous continuez, vous ne pourrez plus utiliser ce compte pour suivre des cours sur l'application {platformName}, {siteName} ou sur tout autre site h\u00e9berg\u00e9 par {platformName}.",
    "If you remove this transcript, the transcript will not be available for any components that use this video.": "Si vous supprimez cette transcription, la transcription ne sera disponible pour aucun des composants utilisant cette vid\u00e9o.",
    "If you remove this transcript, the transcript will not be available for this component.": "Si vous supprimez cette transcription, la transcription ne sera pas disponible pour ce composant.",
    "If you require assistance with taking either photo for submission, contact %(platformName)s support for additional suggestions.": "Si vous avez besoin d'aide pour prendre l'une ou l'autre des photos \u00e0 soumettre, contactez le support de %(platformName)s pour des suggestions suppl\u00e9mentaires.",
    "If you select an option other than \"%(hide_label)s\", published units in this subsection become available to learners unless they are explicitly hidden.": "Si vous s\u00e9lectionnez une option autre que \u00ab\u00a0%(hide_label)s\u00a0\u00bb, les unit\u00e9s publi\u00e9es dans cette sous-section deviendront disponibles aux \u00e9tudiants \u00e0 moins qu'elles ne soient clairement masqu\u00e9es.",
    "If you still wish to continue and delete your account, please enter your account password:": "Si vous souhaitez toujours supprimer votre compte, veuillez saisir le mot de passe de votre compte :",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "If you use the Advanced Editor, this problem will be converted to XML and you will not be able to return to the Simple Editor Interface.\n\nProceed to the Advanced Editor and convert this problem to XML?": "Si vous utilisez l'\u00e9diteur avanc\u00e9, ce probl\u00e8me sera converti en XML et vous ne serez plus en mesure de revenir \u00e0 l'interface d'\u00e9dition simple.\nPasser \u00e0 l'\u00e9diteur avanc\u00e9 et convertir ce probl\u00e8me en XML?",
    "Ignore": "Ignorer",
    "Ignore all": "Ignorer tout",
    "Image": "Image",
    "Image (Ctrl+G)": "Image (Ctrl+G)",
    "Image Description": "Description de l'Image",
    "Image Upload Error": "Erreur lors du t\u00e9l\u00e9versement de l'image",
    "Image description": "Description de l'image",
    "Image must be in PNG format": "Les fichiers doivent \u00eatre au format PNG.",
    "Image must be in PNG format.": "Les fichiers doivent \u00eatre au format PNG.",
    "Image upload failed": "Le chargement de l'image a \u00e9chou\u00e9",
    "Image upload failed. ": "\u00c9chec du chargement de l'image.",
    "Import YouTube Transcript": "Importer une transcription YouTube",
    "In Progress": "En cours",
<<<<<<< HEAD
=======
    "In order to sign in, you need to activate your account.{line_break}{line_break}We just sent an activation link to {strong_start} {email} {strong_end}. If  you do not receive an email, check your spam folders or  {anchorStart}contact {platform_name} Support{anchorEnd}.": "Pour vous connecter, vous devez activer votre compte.{line_break} {line_break}Nous venons d'envoyer un lien d'activation \u00e0 {strong_start} {email} {strong_end}. Si vous ne recevez pas un courriel, v\u00e9rifiez vos dossiers de courrier ind\u00e9sirable ou {anchorStart}contacter le Support {platform_name}{anchorEnd}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "In the {linkStart}Course Outline{linkEnd}, use this group to control access to a component.": "Dans la {linkStart}Description du cours{linkEnd}, utilisez ce groupe pour g\u00e9rer l'acc\u00e8s \u00e0 un composant.",
    "Incorrect url format.": "Format de l'url incorrect.",
    "Increase indent": "Accro\u00eetre l'indentation",
    "Individual Exceptions": "D\u00e9rogations individuelles",
<<<<<<< HEAD
=======
    "Individual file size must be {max_files_mb}MB or less.": "La taille du fichier individuel doit \u00eatre inf\u00e9rieure ou \u00e9gale \u00e0 {max_files_mb}MB.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Inheriting Student Visibility": "H\u00e9riter la visibilit\u00e9 pour les \u00e9tudiants",
    "Inline": "Int\u00e9gr\u00e9",
    "Insert": "Ins\u00e9rer",
    "Insert Hyperlink": "Ins\u00e9rer un hyperlien",
    "Insert Image (upload file or type URL)": "Ins\u00e9rer une image (envoyer un fichier ou saisissez l'adresse URL)",
    "Insert column after": "Ins\u00e9rer une colonne apr\u00e8s",
    "Insert column before": "Ins\u00e9rer une colonne avant",
    "Insert date/time": "Ins\u00e9rer date/heure",
    "Insert image": "Ins\u00e9rer une image",
    "Insert link": "Ins\u00e9rer un lien",
    "Insert row after": "Ins\u00e9rer une ligne apr\u00e8s",
    "Insert row before": "Ins\u00e9rer une ligne avant",
    "Insert table": "Ins\u00e9rer un tableau",
    "Insert template": "Ins\u00e9rer un mod\u00e8le",
    "Insert video": "Ins\u00e9rer une vid\u00e9o",
<<<<<<< HEAD
=======
    "Insert/Edit Image": "Ins\u00e9rer/Modifier l'image",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Insert/edit image": "Ins\u00e9rer/modifier une image",
    "Insert/edit link": "Ins\u00e9rer/modifier un lien",
    "Insert/edit video": "Ins\u00e9rer/modifier une vid\u00e9o",
    "Instructor Biography": "Biographie de l'enseignant",
    "Instructor Name": "Nom de l'enseignant",
    "Instructor Photo": "Photo de l'enseignant",
    "Instructor Photo URL": "URL de la photo de l'enseignant",
    "Instructor Title": "Titre de l'enseignant",
    "Instructor tools": "Outils de l'instructeur",
    "Internal Server Error.": "Erreur interne du serveur.",
    "Introduction to Cookie Baking": "Introduction \u00e0 la r\u00e9alisation de cookies",
    "Invalid email address: {email}": "Adresse e-mail invalide : {email}",
    "Invalidate Certificate": "Invalider le Certificat",
    "Invalidated": "Invalid\u00e9e",
    "Invalidated By": "Invalid\u00e9e par",
<<<<<<< HEAD
=======
    "Is Resumable": "Est reprenable",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Is Sample Attempt": "Est une tentative d'essai",
    "Is Visible To:": "Est visible pour :",
    "Is this OK?": "Est-ce correct ?",
    "Is your name on your ID readable?": "Le nom sur votre ID est-il lisible ?",
    "It is strongly recommended that you include four or fewer signatories. If you include additional signatories, preview the certificate in Print View to ensure the certificate will print correctly on one page.": "Il est fortement recommand\u00e9 d'inclure quatre signataires au maximum. Si vous incluez plus de signataires, pr\u00e9visualisez le certificat dans l\u2019aper\u00e7u avant impression pour v\u00e9rifier que le certificat va bien s'imprimer sur une seule page.",
    "Italic": "Italique",
    "Italic (Ctrl+I)": "Italique (Ctrl+I)",
    "January": "Janvier",
    "Join Team": "Rejoindre l'\u00e9quipe",
    "Joined": "Inscrit le",
    "Joined %(date)s": "Inscrit %(date)s",
    "Joined Date": "Date Inscription",
    "July": "Juillet",
    "June": "Juin",
    "Justify": "Justifier",
    "KB": "KB",
    "Key should only contain letters, numbers, _, or -": "Le code peut uniquement contenir des lettres, nombres, signes _ ou -",
    "Keywords": "Mots-cl\u00e9",
    "LEARN MORE": "EN SAVOIR PLUS",
    "Language": "Langue",
    "Large": "Grand",
    "Last Activity %(date)s": "Derni\u00e8re activit\u00e9 %(date)s",
    "Last Edited:": "Derni\u00e8re modification:",
    "Last Updated": "Derni\u00e8re mise \u00e0 jour",
<<<<<<< HEAD
    "Last modified by": "Derni\u00e8re modification par",
    "Last published %(last_published_date)s by %(publish_username)s": "Derni\u00e8re publication %(last_published_date)s par %(publish_username)s",
    "Last published {lastPublishedStart}{publishedOn}{lastPublishedEnd} by {publishedByStart}{publishedBy}{publishedByEnd}": "Derni\u00e8re publication effectu\u00e9e le {lastPublishedStart}{publishedOn}{lastPublishedEnd} par {publishedByStart}{publishedBy}{publishedByEnd}",
=======
    "Last activity {date}": "Derni\u00e8re activit\u00e9 {date}",
    "Last modified by": "Derni\u00e8re modification par",
    "Last published %(last_published_date)s by %(publish_username)s": "Derni\u00e8re publication %(last_published_date)s par %(publish_username)s",
    "Last published {lastPublishedStart}{publishedOn}{lastPublishedEnd} by {publishedByStart}{publishedBy}{publishedByEnd}": "Derni\u00e8re publication effectu\u00e9e le {lastPublishedStart}{publishedOn}{lastPublishedEnd} par {publishedByStart}{publishedBy}{publishedByEnd}",
    "Last updated": "Derni\u00e8re mise \u00e0 jour",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Learn More": "En savoir plus",
    "Learn more about {license_name}": "En savoir plus sur {license_name}",
    "Learners are added to this cohort automatically.": "Les apprenants sont automatiquement ajout\u00e9s \u00e0 cette cohorte.",
    "Learners are added to this cohort only when you provide their email addresses or usernames on this page.": "Les apprenants sont ajout\u00e9e \u00e0 cette cohorte lorsque vous ajoutez leurs adresses email ou noms d'utilisateurs dans cette page.",
    "Learners do not see the subsection in the course outline. The subsection is not included in grade calculations.": "Les apprenants ne peuvent pas voir la sous-section dans le plan de cours. La sous-section n'est pas incluse dans les calculs de note.",
<<<<<<< HEAD
    "Learners do not see whether their answers to assessments were correct or incorrect, nor the score received, until after the course end date has passed.": "Les \u00e9tudiants ne peuvent voir ni si leurs r\u00e9ponses aux \u00e9valuations \u00e9taient justes ou fausses ni la note re\u00e7ue, avant que la date de fin du cours ne soit pass\u00e9e. ",
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Learners do not see whether their answers to assessments were correct or incorrect, nor the score received, until after the due date for the subsection has passed.": "Avant la date d'\u00e9ch\u00e9ance de cette sous-section, les \u00e9tudiants ne peuvent ni voir leur r\u00e9sultat aux \u00e9valuations ni conna\u00eetre leur note.",
    "Learners never see whether their answers to assessments are correct or incorrect, nor the score received.": "Les \u00e9tudiants ne voient jamais si leurs r\u00e9ponses aux \u00e9valuations sont justes ou fausses, et ne re\u00e7oivent jamais la note.",
    "Learners see the published subsection and can access its content.": "Les apprenant voient la sous-section publi\u00e9e et peuvent acc\u00e9der \u00e0 son contenu.",
    "Learners who require verification must pass the selected checkpoint to see the content in this unit. Learners who do not require verification see this content by default.": "Les apprenants qui ont besoin d'une v\u00e9rification doit passer le point de contr\u00f4le s\u00e9lectionn\u00e9 afin de voir le contenu de cette unit\u00e9. Les \u00e9tudiants qui n'ont pas besoin d'une v\u00e9rification voient ce contenu par d\u00e9faut.",
    "Learning Outcome": "R\u00e9sultat d'apprentissage",
<<<<<<< HEAD
    "Leave Team": "Quitter l'\u00e9quipe",
=======
    "Leave Current Session": "Quitter la session actuelle",
    "Leave Team": "Quitter l'\u00e9quipe",
    "Leave the current session and decide later": "Quitter la session en cours et d\u00e9cider plus tard",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Leave this team?": "Quitter cette \u00e9quipe ?",
    "Left": "Gauche",
    "Left to right": "Gauche \u00e0 droite",
    "Legal name": "Nom l\u00e9gal",
    "Less": "Moins",
    "Library User": "Utilisateur de la biblioth\u00e8que",
    "License Display": "Affichage de la licence",
    "License Type": "Type de licence",
    "Limit Access": "Acc\u00e8s Limit\u00e9",
    "Limited Profile": "Profil restreint",
    "Link Description": "Description du Lien",
    "Link Your Account": "Liez votre compte",
    "Link types should be unique.": "Les types de liens doivent \u00eatre uniques.",
    "Link your {accountName} account": "Liez votre compte {accountName}",
    "Link your {accountName} account to your {platformName} account and use {accountName} to sign in to {platformName}.": "Liez votre compte {accountName} \u00e0 votre compte {platformName} et utilisez {accountName} pour vous connecter \u00e0 {platformName}.",
    "Linked Accounts": "Comptes li\u00e9s",
    "Linking": "Lier",
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "Les liens sont g\u00e9n\u00e9r\u00e9s sur demande et expirent dans les 5 minutes \u00e0 cause de la nature sensible des informations concernant l'\u00e9tudiant.",
    "Links should be unique.": "Les liens doivent \u00eatre uniques.",
    "List item": "\u00c9l\u00e9ment",
    "List of Open Assessments is unavailable": "La list des questions ouvertes n'est pas disponible",
    "List of uploaded files and assets in this course": "Liste des fichiers et des activit\u00e9s t\u00e9l\u00e9charg\u00e9s dans ce cours",
    "Live view of webcam": "Aper\u00e7u en temps r\u00e9el de votre webcam",
    "Load Another File": "Envoyer un autre fichier",
    "Load all responses": "Charger toutes les r\u00e9ponses",
<<<<<<< HEAD
    "Load next {numResponses} responses": "Charger les {numResponses} r\u00e9ponses suivantes",
    "Load next {num_items} result": [
      "Charger {num_items} resultat, le prochain",
=======
    "Load more": "Charger plus",
    "Load next {numResponses} responses": "Charger les {numResponses} r\u00e9ponses suivantes",
    "Load next {num_items} result": [
      "Charger {num_items} resultat, le prochain",
      "Charger les {num_items} prochains resultats",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "Charger les {num_items} prochains resultats"
    ],
    "Loading": "Chargement",
    "Loading content": "Chargement du contenu",
    "Loading data...": "Chargement des donn\u00e9es...",
    "Loading more threads": "Chargement de plus de messages",
    "Loading posts list": "Chargement de la liste des messages",
    "Loading your courses": "Chargement de vos cours",
<<<<<<< HEAD
=======
    "Loading...": "Chargement...",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Location": "Adresse",
    "Location in Course": "Emplacement dans le cours",
    "Lock this asset": "V\u00e9rouiller cet \u00e9l\u00e9ment",
    "Lock/unlock file": "Verrouiller/D\u00e9verrouiller le fichier",
    "Loud": "Fort",
    "Low": "Faible",
    "Lower Alpha": "Minuscule alphanum\u00e9rique",
    "Lower Greek": "Minuscule Grecque",
    "Lower Roman": "Minuscule Romain",
    "MB": "MB",
<<<<<<< HEAD
    "Make sure that the full name on your account matches the name on your ID.": "Assurez que le nom complet de votre compte est identique au nom sur votre ID.",
=======
    "Make Visible to Students": "Rendre visible aux \u00e9tudiants",
    "Make sure that the full name on your account matches the name on your ID.": "Assurez que le nom complet de votre compte est identique au nom sur votre ID.",
    "Make sure that you have selected \"Submit\" for each answer before you submit your exam.": "Assurez-vous d'avoir s\u00e9lectionn\u00e9 \"Soumettre\" pour chaque r\u00e9ponse avant de soumettre votre examen.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Make sure we can verify your identity with the photos and information you have provided.": "Assurez-vous que nous pourrons v\u00e9rifier votre identit\u00e9 avec les photos et les informations fournies.",
    "Make sure your ID is well-lit": "Assurez-vous que votre pi\u00e8ce d'identit\u00e9 est bien \u00e9clair\u00e9e",
    "Make sure your face is well-lit": "Assurez-vous que votre visage est bien \u00e9clair\u00e9",
    "Make this subsection available as a prerequisite to other content": "Faire de cette sous-section un pr\u00e9-requis pour les autres contenus ",
    "Making Visible to Students": "Rendre visible pour les \u00e9tudiants",
<<<<<<< HEAD
=======
    "Manage": "G\u00e9rer",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Manage Learners": "G\u00e9rer les \u00e9tudiants",
    "Manual": "Manuel",
    "March": "Mars",
    "Mark Exam As Completed": "Marquer l'examen comme compl\u00e9t\u00e9",
<<<<<<< HEAD
=======
    "Mark as Answer": "Marquer comme R\u00e9ponse",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Mark enrollment code as unused": "Marquer le code d'inscription comme non utilis\u00e9",
    "Markdown Editing Help": "Aide de saisie Markdown",
    "Match case": "Ajuster la casse",
    "Max file size exceeded": "Taille maximale de fichier d\u00e9pass\u00e9e",
    "Maximum": "Maximum",
<<<<<<< HEAD
=======
    "Maximum file size: {maxFileSize} GB": "Taille maximale du fichier : {maxFileSize} GB",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "May": "Mai",
    "Membership": "Inscription",
    "Merge cells": "Fusionner les cellules",
    "Message:": "Message :",
    "Middle": "Milieu",
    "Midnight": "Minuit",
<<<<<<< HEAD
    "Minimum Score:": "Score minimum:",
    "Module state successfully deleted.": "Etat du module supprim\u00e9 avec succ\u00e8s.",
    "More": "Plus",
    "Move cancelled. \"{sourceDisplayName}\" has been moved back to its original location.": "D\u00e9placement annul\u00e9. \u00ab\u00a0{sourceDisplayName} \u00bb a \u00e9t\u00e9 renvoy\u00e9 vers son emplacement d'origine.",
    "Moving": "D\u00e9placement",
=======
    "Minimum Completion:": "Valeur d'ach\u00e8vement minimum\u00a0:",
    "Minimum Score:": "Score minimum:",
    "Missing required query parameter course_id": "Param\u00e8tre de requ\u00eate obligatoire course_id manquant",
    "Module state successfully deleted.": "Etat du module supprim\u00e9 avec succ\u00e8s.",
    "More": "Plus",
    "More sessions coming soon": "De nouvelles sessions seront bient\u00f4t disponibles",
    "More sessions coming soon.": "De nouvelles sessions seront bient\u00f4t disponibles.",
    "Move": "Envoyer vers",
    "Move cancelled. \"{sourceDisplayName}\" has been moved back to its original location.": "D\u00e9placement annul\u00e9. \u00ab\u00a0{sourceDisplayName} \u00bb a \u00e9t\u00e9 renvoy\u00e9 vers son emplacement d'origine.",
    "Move: {displayName}": "Envoyer vers\u00a0: {displayName}",
    "Moving": "D\u00e9placement",
    "Multiple teams returned for course": "Plusieurs \u00e9quipes sont revenues pour le cours",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Must be a Staff User to Perform this request.": "Vous devez \u00eatre un utilisateur du type Enseignant pour faire cette requ\u00eate.",
    "Must complete verification checkpoint": "Vous devez compl\u00e9ter le point de contr\u00f4le de v\u00e9rification",
    "Mute": "Couper le son",
    "Muted": "Son coup\u00e9",
    "My Orders": "Mes Commandes",
<<<<<<< HEAD
=======
    "My Teams": "Mes \u00e9quipes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "N/A": "N/A",
    "Name": "Nom",
    "Name ": "Nom",
    "Name of the certificate": "Nom du certificat",
    "Name of the groups that students will be assigned to, for example, Control, Video, Problems. You must have two or more groups.": "Nom des groupes auxquels les \u00e9tudiants seront affect\u00e9s, par exemple, contr\u00f4le, vid\u00e9o, probl\u00e8mes. Vous devez avoir deux groupes ou plus.",
    "Name of the signatory": "Nom du signataire",
    "Name or short description of the configuration": "Nom ou description br\u00e8ve de la configuration",
<<<<<<< HEAD
=======
    "Navigate to onboarding exam": "Acc\u00e9dez \u00e0 l'examen d'int\u00e9gration",
    "Navigate up": "Naviguer vers le haut",
    "Need help logging in?": "Besoin d'aide pour vous connecter ?",
    "Need help signing in?": "Besoin d'aide pour vous enregistrer?",
    "Need other help signing in?": "Encore besoin d'aide pour vous enregistrer?",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Needs verified certificate ": "N\u00e9cessite un certificat v\u00e9rifi\u00e9",
    "Never published": "Jamais publi\u00e9",
    "Never show assessment results": "Ne jamais montrer les r\u00e9sultats d'\u00e9valuation",
    "New %(item_type)s": "Nouveau %(item_type)s",
    "New Address": "Nouvelle adresse",
    "New Password": "Nouveau mot de passe",
    "New document": "Nouveau document",
    "New enrollment mode:": "Nouveau mode d'inscription : ",
    "New window": "Nouvelle fen\u00eatre",
<<<<<<< HEAD
    "Next": "Suivant",
    "Next: %(nextStepTitle)s": "Suivant: %(nextStepTitle)s",
    "No Content Group": "Pas de groupe de contenu",
=======
    "New {component_type}": "Nouveau {component_type}",
    "Next": "Suivant",
    "Next: %(nextStepTitle)s": "Suivant: %(nextStepTitle)s",
    "No Content Group": "Pas de groupe de contenu",
    "No Derivatives": "Pas de travaux d\u00e9riv\u00e9s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "No EdX Timed Transcript": "Pas de transcription synchronis\u00e9e EdX",
    "No Flash Detected": "Aucun Flash d\u00e9tect\u00e9",
    "No Timed Transcript": "Pas de transcription synchronis\u00e9e",
    "No Webcam Detected": "Aucune Webcam d\u00e9tect\u00e9e",
<<<<<<< HEAD
    "No color": "Pas de couleur",
    "No content-specific discussion topics exist.": "Pas de sujet de discussions sp\u00e9ciciques",
    "No description available": "Aucune description disponible",
    "No posts matched your query.": "Aucun message ne correspond \u00e0 votre requ\u00eate.",
    "No prerequisite": "Pas de pr\u00e9-requis",
    "No results": "Aucun r\u00e9sultat",
    "No results found for {original_query}. Showing results for {suggested_query}.": "Pas de r\u00e9sultat trouv\u00e9 pour {original_query}. Affichage des r\u00e9sultats pour {suggested_query}.",
    "No tasks currently running.": "Aucune t\u00e2che active en ce moment",
    "No validation is performed on policy keys or value pairs. If you are having difficulties, check your formatting.": "Aucune validation n'est effectu\u00e9e sur les politiques de cl\u00e9s et les paires de valeurs. Si vous rencontrez des difficult\u00e9s, v\u00e9rifiez votre formatage.",
    "Nonbreaking space": "Espace ins\u00e9cable",
=======
    "No assignments for team": "Pas de t\u00e2ches pour l'\u00e9quipe",
    "No color": "Pas de couleur",
    "No content-specific discussion topics exist.": "Pas de sujet de discussions sp\u00e9ciciques",
    "No description available": "Aucune description disponible",
    "No exams in course {course_id}.": "Aucun examen dans le cours {course_id}.",
    "No instructor dashboard for {proctor_service}": "Aucun tableau de bord d'instructeur pour {proctor_service}",
    "No onboarding status API for {proctor_service}": "Aucune API de statut d'int\u00e9gration pour {proctor_service}",
    "No posts matched your query.": "Aucun message ne correspond \u00e0 votre requ\u00eate.",
    "No prerequisite": "Pas de pr\u00e9-requis",
    "No proctored exams in course {course_id}": "Aucun examen surveill\u00e9 dans le cours {course_id}",
    "No results": "Aucun r\u00e9sultat",
    "No results found for \"{query_string}\". Please try searching again.": "Aucun r\u00e9sultat trouv\u00e9 pour \"{query_string}\". Veuillez r\u00e9essayer.",
    "No results found for {original_query}. Showing results for {suggested_query}.": "Pas de r\u00e9sultat trouv\u00e9 pour {original_query}. Affichage des r\u00e9sultats pour {suggested_query}.",
    "No tasks currently running.": "Aucune t\u00e2che active en ce moment",
    "No transcript uploaded.": "Aucune transcription de charg\u00e9e.",
    "No validation is performed on policy keys or value pairs. If you are having difficulties, check your formatting.": "Aucune validation n'est effectu\u00e9e sur les politiques de cl\u00e9s et les paires de valeurs. Si vous rencontrez des difficult\u00e9s, v\u00e9rifiez votre formatage.",
    "Nonbreaking space": "Espace ins\u00e9cable",
    "Noncommercial": "Non commercial",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "None": "Aucun",
    "Noon": "Midi",
    "Not Currently Available": "Non disponible actuellement",
    "Not Graded": "Non not\u00e9",
    "Not Selected": "Non s\u00e9lectionn\u00e9",
    "Not Supported": "Pas support\u00e9",
    "Not able to set passing grade to less than %(minimum_grade_cutoff)s%.": "Pas en mesure de fixer la note de passage \u00e0 moins de %(minimum_grade_cutoff)s%.",
    "Not available": "Indisponible",
    "Not divided": "Non divis\u00e9",
    "Not in Use": "Non utilis\u00e9",
    "Not selected": "Non selectionn\u00e9",
<<<<<<< HEAD
    "Note": "Note",
    "Note: Do not hide graded assignments after they have been released.": "Note : Veuillez ne pas masquer les devoirs not\u00e9s apr\u00e8s leur publication.",
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.",
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures."
    ],
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.",
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures."
=======
    "Not specific to a course": "Cet caract\u00e9ristique n'est pas propre \u00e0 un cours.",
    "Not yet": "Pas encore",
    "Note": "Note",
    "Note: Do not hide graded assignments after they have been released.": "Note : Veuillez ne pas masquer les devoirs not\u00e9s apr\u00e8s leur publication.",
    "Note: Learners can be in only one cohort. Adding learners to this group overrides any previous group assignment.": "Remarque: Les \u00e9tudiants peuvent \u00eatre dans une seule cohorte. L'ajout d'\u00e9tudiants \u00e0 ce groupe pr\u00e9vaut sur toute affectation pr\u00e9c\u00e9dente \u00e0 d'autres groupes.",
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.",
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures.",
      ""
    ],
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.",
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures.",
      ""
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ],
    "Noted in:": "Not\u00e9 dans :",
    "Notes": "Notes",
    "Notes hidden": "Notes masqu\u00e9es",
    "Notes visible": "Notes visibles",
    "November": "Novembre",
    "Now": "Maintenant",
    "Number Sent": "Nombre envoy\u00e9",
    "Number of Droppable": "Nombre d'\u00e9l\u00e9ments qui peuvent \u00eatre ignor\u00e9s",
    "Numbered List (Ctrl+O)": "Liste num\u00e9rot\u00e9e (Ctrl+O)",
    "Numbered list": "Liste num\u00e9rot\u00e9e",
    "OK": "OK",
    "ORDER NAME": "NOM DE LA COMMANDE",
    "ORDER NUMBER": "NUM\u00c9RO DE LA COMMANDE",
    "ORDER PLACED": "COMMANDES ENREGISTR\u00c9ES",
    "October": "Octobre",
    "Ok": "Ok",
<<<<<<< HEAD
    "One or more rescheduling tasks failed.": "Une ou plusieurs t\u00e2ches de r\u00e9\u00e9chelonnement ont \u00e9chou\u00e9.",
    "Only properly formatted .csv files will be accepted.": "Seuls les fichiers au format .csv seront accept\u00e9s.",
    "Only the parent course staff of a CCX can create content groups.": "Seule l'\u00e9quipe p\u00e9dagogique du cours d'origine d'un CCX peuvent cr\u00e9er des groupes de contenu.",
    "Open Calculator": "Afficher la calculatrice",
    "Open language menu": "Ouvrir le menu des langues",
=======
    "Onboarding": "Accueil",
    "Onboarding Exam": "Examen d'accueil",
    "Onboarding Expired": "L'int\u00e9gration a expir\u00e9",
    "Onboarding Failed": "L'int\u00e9gration a \u00e9chou\u00e9",
    "Onboarding Missing": "Int\u00e9gration manquante",
    "Onboarding Pending": "Int\u00e9gration en attente",
    "Onboarding status question": "Question sur le statut d'int\u00e9gration",
    "Once in position, use the Take Photo button {icon} to capture your ID": "Une fois en position, utilisez le bouton \"Prendre une photo\" {icon} pour capturer votre identit\u00e9",
    "Once in position, use the Take Photo button {icon} to capture your photo": "Une fois en position, utilisez le bouton \"Prendre une photo\" {icon} pour prendre votre photo",
    "Once you click \"Yes, end my proctored exam\", the exam will be closed, and your proctoring session will be submitted for review.": "Une fois que vous aurez cliqu\u00e9 sur \u00abOui, terminer mon examen surveill\u00e9\u00bb, l'examen sera ferm\u00e9 et votre session de surveillance sera soumise pour examen.",
    "Once you complete one of the program requirements you have a program record. This record is marked complete once you meet all program requirements. A program record can be used to continue your learning journey and demonstrate your learning to others.": "Une fois que vous avez rempli l'une des exigences du programme, vous aurez un dossier de programme. Ce dossier est consid\u00e9r\u00e9 comme \u00e9tant complet \u00e0 partir du moment o\u00f9 vous avez atteint toutes les exigences. Le dossier de programme peut \u00eatre utilis\u00e9 pour prolonger vos \u00e9tudes et comme preuve de votre apprentissage.",
    "Once your account is deleted, you cannot use it to take courses on the {platformName} app, {siteName}, or any other site hosted by {platformName}.": "Une fois votre compte supprim\u00e9, vous ne pouvez plus l'utiliser pour suivre des cours sur l'application {platformName}, {siteName} ou sur tout autre site h\u00e9berg\u00e9 par {platformName}.",
    "One or more rescheduling tasks failed.": "Une ou plusieurs t\u00e2ches de r\u00e9\u00e9chelonnement ont \u00e9chou\u00e9.",
    "Only ": "Seulement",
    "Only <%- fileTypes %> files can be uploaded. Please select a file ending in <%- (fileExtensions) %> to upload.": "Seuls les fichiers <%- fileTypes %> peuvent \u00eatre charg\u00e9s. Veuillez s\u00e9lectionner un fichier se terminant par <%- (fileExtensions) %> pour le charger.",
    "Only properly formatted .csv files will be accepted.": "Seuls les fichiers au format .csv seront accept\u00e9s.",
    "Only the parent course staff of a CCX can create content groups.": "Seule l'\u00e9quipe p\u00e9dagogique du cours d'origine d'un CCX peuvent cr\u00e9er des groupes de contenu.",
    "Open": "Ouvrir",
    "Open Calculator": "Afficher la calculatrice",
    "Open language menu": "Ouvrir le menu des langues",
    "Open the certificate you earned for the %(title)s program.": "Ouvrir le certificat que vous avez obtenu en suivant le programme %(title)s.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Open/download this file": "Ouvrir/T\u00e9l\u00e9charger ce fichier",
    "OpenAssessment Save Error": "Erreur de la sauvegarde du composant",
    "Option Deleted": "Option supprim\u00e9e",
    "Optional Characteristics": "Caract\u00e9ristiques optionnelles",
    "Optional long description": "Description longue optionnelle",
    "Optionally, link your personal accounts to the social media icons on your edX profile.": "Vous pouvez facultativement \u00e9tablir un lien entre vos comptes personnels et les ic\u00f4nes de r\u00e9seaux sociaux sur votre profil edX.",
    "Options for {license_name}": "Options pour {license_name}",
    "Order Details": "D\u00e9tails de la commande",
    "Order History": "Historique des commandes",
    "Order Number": "Num\u00e9ro de commande",
    "Organization": "Organisation",
    "Organization ": "Organisation",
    "Organization Name": "Nom de l'organisation",
    "Organization of the signatory": "Organisation du signataire",
<<<<<<< HEAD
    "Other": "Autre",
    "Overall Score": "Score total",
=======
    "Organization:": "Organisation:",
    "Other": "Autre",
    "Other sign-in issues": "Autres probl\u00e8mes d'enregistrement",
    "Overall Score": "Score total",
    "PDF Chapters": "Chapitres PDF",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Page break": "Saut de page",
    "Page number out of %(total_pages)s": "Num\u00e9ro de page sur un total de %(total_pages)s",
    "Pagination": "Pagination",
    "Paragraph": "Paragraphe",
    "Passed Proctoring": "A pass\u00e9 l'examen surveill\u00e9.",
    "Password": "Mot de passe",
    "Password Status": "\u00c9tat du mot de passe",
    "Password assistance": "Aide mot de passe",
    "Password is incorrect": "Mot de passe incorrect.",
<<<<<<< HEAD
=======
    "Passwords do not match.": "Les mots de passes ne correspondent pas.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Paste": "Coller",
    "Paste as text": "Coller comme un texte",
    "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Coller se fait maintenant en mode texte brut. Les contenus seront maintenant coll\u00e9s sous forme de texte seul  jusqu'\u00e0 ce que vous appuyez \u00e0 nouveau sur cette option.",
    "Paste row after": "Coller la ligne apr\u00e8s",
    "Paste row before": "Coller la ligne avant",
    "Paste your embed code below:": "Collez votre code int\u00e9gr\u00e9 ci-dessous :",
    "Path to Signature Image": "Chemin vers l'image de la signature",
    "Pause": "Pause",
    "Peer": "Pair",
<<<<<<< HEAD
=======
    "Peer Responses Received": "R\u00e9ponses des pairs re\u00e7ues",
    "Peers Assessed": "\u00c9valu\u00e9 par les pairs",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Pending Session Review": "En attente de la revue de la session.",
    "Photo": "Photo",
    "Photo Captured successfully.": "Photo prise avec succ\u00e8s.",
    "Photo ID": "ID de la photo",
    "Photo Identification": "Photo d'identit\u00e9",
<<<<<<< HEAD
=======
    "Photo Verification": "V\u00e9rification de la photo",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Photo of %(fullName)s": "Photo de %(fullName)s",
    "Photo of %(fullName)s's ID": "Photo de l'ID de %(fullName)s",
    "Photo requirements:": "Conditions requises pour la photo:",
    "Photos don't meet the requirements?": "Les photos ne r\u00e9pondent pas aux pr\u00e9requis ?",
<<<<<<< HEAD
=======
    "Pin": "\u00c9pingler",
    "Pinned": "\u00c9pingl\u00e9",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Placeholder": "Espace r\u00e9serv\u00e9",
    "Play": "Lecture",
    "Play video": "Lire la vid\u00e9o",
    "Please add a photo of the instructor (Note: only JPEG or PNG format supported)": "Veuillez ajouter la photo de l'enseignant (Note: seuls les formats JPEG et PNG sont support\u00e9s)",
<<<<<<< HEAD
=======
    "Please add at least one chapter": "Merci d'ajouter au moins un chapitre",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Please add the institute where the instructor is associated": "S'il vous pla\u00eet ajouter l'institution \u00e0 laquelle l'enseignant est associ\u00e9",
    "Please add the instructor's biography": "Veuillez renseigner la biographie de l'enseignant",
    "Please add the instructor's name": "Veuillez renseigner la nom de l'enseignant",
    "Please add the instructor's title": "Veuillez renseigner le titre de l'enseignant",
    "Please address the errors on this page first, and then save your progress.": "Corrigez en premier les erreurs de cette page, puis sauvegardez.",
    "Please check the following validation feedbacks and reflect them in your course settings:": "Veuillez v\u00e9rifier les commentaires de validation suivants et en tenir compte dans les param\u00e8tres de votre cours :",
    "Please describe this image or agree that it has no contextual value by checking the checkbox.": "S'il vous pla\u00eet, d\u00e9crivez l'image ou validez qu'il n'y a pas de valeur contextuelle en cochant la case.",
    "Please do not use any spaces in this field.": "Merci de ne pas utiliser d'espace dans ce champ.",
    "Please do not use any spaces or special characters in this field.": "Merci de ne pas utiliser d'espace ou caract\u00e8res sp\u00e9ciaux dans ce champ.",
    "Please enter a problem location.": "Merci d'introduire la localisation d'un exercice.",
    "Please enter a score.": "Veuillez saisir un r\u00e9sultat.",
    "Please enter a student email address or username.": "Merci d\u2019entrer le nom d\u2019utilisateur ou l\u2019adresse e-mail d\u2019un \u00e9tudiant.",
    "Please enter a term in the {anchorStart} search field{anchorEnd}.": "Merci de saisir votre terme dans le {anchorStart} champ de recherche{anchorEnd}.",
    "Please enter a username or email.": "Veuillez saisir un nom d'utilisateur ou un email.",
    "Please enter a valid donation amount.": "Veuillez entrer un montant de don valide.",
    "Please enter an integer between %(min)s and %(max)s.": "Veuillez saisir un nombre entier compris entre %(min)s et %(max)s.",
    "Please enter an integer between 0 and 100.": "Veuillez entrer un entier entre 0 et 100.",
    "Please enter an integer greater than 0.": "Veuillez entrer un entier sup\u00e9rieur \u00e0 0.",
    "Please enter non-negative integer.": "Veuillez entrer un entier non n\u00e9gatif.",
    "Please enter valid start date and time.": "Veuillez saisir une date et heure de d\u00e9but valide.",
    "Please enter your %(field)s.": "Veuillez saisir votre %(field)s.",
<<<<<<< HEAD
    "Please follow the instructions here to upload a file elsewhere and link to it: {maxFileSizeRedirectUrl}": "Veuillez suivre les instructions pr\u00e9sent\u00e9es ici pour t\u00e9l\u00e9verser un fichier ailleurs et cr\u00e9er un lien vers lui: {maxFileSizeRedirectUrl}",
    "Please provide a description of the link destination.": "Veuillez fournir une description du lien de destination.",
    "Please provide a valid URL.": "Veuillez entrer une URL valide",
    "Please re-enter your password.": "Veuillez ressaisir votre mot de passe.",
=======
    "Please enter your log-in or recovery email address below and we will send you an email with instructions.": "Veuillez entrer votre adresse \u00e9lectronique de connexion ou de r\u00e9cup\u00e9ration ci-dessous et nous vous enverrons un e-mail avec des instructions.",
    "Please fix the following errors:": "Veuillez rem\u00e9dier aux erreurs suivantes\u00a0:",
    "Please follow the instructions here to upload a file elsewhere and link to it: {maxFileSizeRedirectUrl}": "Veuillez suivre les instructions pr\u00e9sent\u00e9es ici pour t\u00e9l\u00e9verser un fichier ailleurs et cr\u00e9er un lien vers lui: {maxFileSizeRedirectUrl}",
    "Please note: Deletion of your account and personal data is permanent and cannot be undone. {platformName} will not be able to recover your account or the data that is deleted.": "Veuillez noter: La suppression de votre compte et de vos donn\u00e9es personnelles est permanente et ne peut \u00eatre annul\u00e9e. {platformName} ne pourra pas r\u00e9cup\u00e9rer votre compte ou les donn\u00e9es supprim\u00e9es.",
    "Please provide a description of the link destination.": "Veuillez fournir une description du lien de destination.",
    "Please provide a valid URL.": "Veuillez entrer une URL valide",
    "Please re-enter your password.": "Veuillez ressaisir votre mot de passe.",
    "Please select a PDF file to upload.": "Veuillez s\u00e9lectionner un fichier PDF \u00e0 envoyer.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Please select a file in .srt format.": "S\u00e9lectionner un fichier au format .srt.",
    "Please specify a reason.": "Veuillez indiquer une raison.",
    "Please verify that you have uploaded a valid image (PNG and JPEG).": "Veuillez v\u00e9rifier la validit\u00e9 de l'image t\u00e9l\u00e9charg\u00e9e (PNG et JPEG).",
    "Please verify that your webcam is connected and that you have allowed your browser to access it.": "V\u00e9rifiez que votre webcam est bien connect\u00e9e et que votre navigateur est autoris\u00e9 \u00e0 l'acc\u00e9der.",
    "Please wait": " Veuillez patienter",
    "Plugins": "Plugins",
    "Post": "Poster",
<<<<<<< HEAD
=======
    "Post type": "Type de message",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Poster": "Affiche",
    "Practice Exam Completed": "Examen d'essai compl\u00e9t\u00e9",
    "Practice Exam Failed": "Examen d'essai \u00e9chou\u00e9",
    "Practice Proctored": "Pratique surveill\u00e9e",
    "Practice proctored Exam": "Pratiquer l'examen surveill\u00e9",
    "Pre": "Pr\u00e9",
    "Preferred Language": "Langue pr\u00e9f\u00e9r\u00e9e",
    "Preformatted": "Pr\u00e9format\u00e9",
    "Prerequisite:": "Pr\u00e9-requis:",
    "Prerequisite: %(prereq_display_name)s": "Conditions prealables: %(prereq_display_name)s",
<<<<<<< HEAD
    "Press UP to enter the speed menu then use the UP and DOWN arrow keys to navigate the different speeds, then press ENTER to change to the selected speed.": "Appuyez sur la touche HAUT pour acc\u00e9der au menu vitesse, puis utilisez les touches HAUT et BAS pour choisir la vitesse, enfin appuyez sur ENTREE pour s\u00e9lectionner la nouvelle vitesse.",
    "Press the UP arrow key to enter the language menu then use UP and DOWN arrow keys to navigate language options. Press ENTER to change to the selected language.": "Appuyez sur la touche HAUT pour acc\u00e9der au menu langue, puis utilisez les touches HAUT et BAS pour parcourir les options de langue. Appuyez sur ENTR\u00c9E pour s\u00e9lectionner la nouvelle langue.",
=======
    "Press Add to language": "Appuyez sur Ajoutez aux langues",
    "Press Remove to remove language": "Appuyez sur Supprimer pour supprimer la langue",
    "Press UP to enter the speed menu then use the UP and DOWN arrow keys to navigate the different speeds, then press ENTER to change to the selected speed.": "Appuyez sur la touche HAUT pour acc\u00e9der au menu vitesse, puis utilisez les touches HAUT et BAS pour choisir la vitesse, enfin appuyez sur ENTREE pour s\u00e9lectionner la nouvelle vitesse.",
    "Press change to change selected transcript provider.": "Appuyez sur modifier pour modifier le fournisseur de transcription s\u00e9lectionn\u00e9.",
    "Press close to hide course video settings": "Appuyez sur fermer pour masquer les param\u00e8tres de la vid\u00e9o du cours",
    "Press discard changes to discard changes.": "Appuyer sur annuler les modifications pour annuler les modifications.",
    "Press discard changes to discard your changes.": "Appuyez sur annuler les modifications afin d'annuler vos modifications",
    "Press the UP arrow key to enter the language menu then use UP and DOWN arrow keys to navigate language options. Press ENTER to change to the selected language.": "Appuyez sur la touche HAUT pour acc\u00e9der au menu langue, puis utilisez les touches HAUT et BAS pour parcourir les options de langue. Appuyez sur ENTR\u00c9E pour s\u00e9lectionner la nouvelle langue.",
    "Press update settings to update course video settings": "Appuyez sur mettre \u00e0 jour les param\u00e8tres pour mettre \u00e0 jour les param\u00e8tres de la vid\u00e9o du cours",
    "Press update settings to update the information for your organization.": "Appuyez sur mettre \u00e0 jour les param\u00e8tres pour mettre \u00e0 jour l'information de votre organisation.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Prev": "Pr\u00e9visualisation",
    "Prevent students from generating certificates in this course?": "Emp\u00eacher les \u00e9tudiants de g\u00e9n\u00e9rer des certificats pour ce cours?",
    "Preview": "Aper\u00e7u",
    "Preview Certificate": "Pr\u00e9visualiser le certificat",
    "Preview of uploaded image": "Aper\u00e7u de l'image charg\u00e9e",
    "Preview this query": "Aper\u00e7u de cette requ\u00eate",
    "Previous": "Pr\u00e9c\u00e9dent",
    "Previous Uploads": "Chargements pr\u00e9c\u00e9dents",
    "Previous Uploads table has been updated.": "La table pr\u00e9c\u00e9demment t\u00e9l\u00e9charg\u00e9 a \u00e9t\u00e9 mise \u00e0 jours ",
    "Previously published": "D\u00e9j\u00e0 publi\u00e9",
    "Print": "Imprimer",
<<<<<<< HEAD
=======
    "Problem cloning rubric": "Probl\u00e8me de clonage de la grille d'\u00e9valuation",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Processing Re-run Request": "Traitement de la demande de relance",
    "Proctored": "Surveill\u00e9",
    "Proctored Exam": "Examen surveill\u00e9",
    "Proctored Option Available": "Option Examen Surveill\u00e9 Possible",
    "Proctored Option No Longer Available": "Option Examen Surveill\u00e9 Plus Disponible.",
<<<<<<< HEAD
    "Proctored exams are timed and they record video of each learner taking the exam. The videos are then reviewed to ensure that learners follow all examination rules.": "Les examens v\u00e9rifi\u00e9s sont minut\u00e9s et un enregistrement vid\u00e9o est fait que chaque \u00e9tudiant. Les vid\u00e9o sont ensuite v\u00e9rifi\u00e9es pour s'assurer que les conditions de l'examen \u00e9taient correctes;",
=======
    "Proctored exam {exam_name} in {course_name} for user {username}": "Examen surveill\u00e9 {exam_name} pour {course_name} pour l'utilisateur {username}",
    "Proctored exams are timed and they record video of each learner taking the exam. The videos are then reviewed to ensure that learners follow all examination rules. Please note that setting this exam as proctored will change the visibility settings to \"Hide content after due date.\"": "Les examens surveill\u00e9s sont chronom\u00e9tr\u00e9s et ils enregistrent une vid\u00e9o de chaque apprenant passant l'examen. Les vid\u00e9os sont ensuite examin\u00e9es pour s'assurer que les apprenants respectent toutes les r\u00e8gles. Veuillez noter que si vous d\u00e9finissez cet examen comme \u00e9tant surveill\u00e9, les param\u00e8tres de visibilit\u00e9 seront modifi\u00e9s en \"Masquer le contenu apr\u00e8s la date d'\u00e9ch\u00e9ance\".",
    "Proctoring": "Proctoring",
    "Proctoring Results For {course_name} {exam_name}": "R\u00e9sultats d'examen surveill\u00e9 pour {course_name} {exam_name}",
    "Proctoring Review In Progress For {course_name} {exam_name}": "Revue d'examen surveill\u00e9 en cours pour {course_name} {exam_name}",
    "Proctoring Settings": "Param\u00e8tres surveillance",
    "Proctoring results are usually available within 5 business days after you submit your exam.": "Les r\u00e9sultats de la surveillance sont g\u00e9n\u00e9ralement disponibles dans les 5 jours ouvrables suivant la soumission de votre examen.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Product Name": "Nom du produit",
    "Professional Certificate for {courseName}": "Certificat professionnel pour {courseName}",
    "Professional Education": "Formation professionnelle",
    "Professional Education Verified Certificate": "Certificat v\u00e9rifif\u00e9 professionel",
    "Profile": "Profil",
    "Profile Image": "Image du profil",
    "Profile Visibility:": "Visibilit\u00e9 du profil :",
    "Profile image for {username}": "Image de profil pour {username}",
<<<<<<< HEAD
=======
    "Program Record": "Dossier de programme",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Promote another member to Admin to remove your admin rights": "Veuillez ajouter un autre membre comme administrateur pour supprimer vos droits d'administrateurs",
    "Provisional": "Provisoire",
    "Provisionally Supported": "Provisoirement support\u00e9",
    "Publish": "Publier",
    "Publish all unpublished changes for this {item}?": "Publier toutes les modifications non publi\u00e9es pour cet {item} ?",
    "Publish {display_name}": "Publier {display_name}",
    "Published (not yet released)": "Publi\u00e9 (pas encore diffus\u00e9)",
    "Published and Live": "Publi\u00e9 et actif",
    "Publishing": "Publication",
    "Publishing Status": "\u00c9tat de la publication",
<<<<<<< HEAD
    "Queued": "Mis en file d'attente",
    "REMAINING COURSES": "RESTANT",
    "Read More": "En lire plus.",
    "Ready To Start": "Pr\u00eat \u00e0 Commencer",
    "Ready To Submit": "Pr\u00eat \u00e0 Soumettre",
=======
    "Question": "Question",
    "Questions raise issues that need answers. Discussions share ideas and start conversations. (Required)": "Les questions sont adapt\u00e9es pour les sujets qui n\u00e9cessitent une r\u00e9ponse. Les discussions permettent de partager des id\u00e9es et de commencer des conversations. (Requis)",
    "Queued": "Mis en file d'attente",
    "REMAINING COURSES": "RESTANT",
    "Re-run Course": "Relancer le cours",
    "Read More": "En lire plus.",
    "Read more": "En lire plus",
    "Ready To Start": "Pr\u00eat \u00e0 Commencer",
    "Ready To Submit": "Pr\u00eat \u00e0 Soumettre",
    "Ready to Resume": "Pr\u00eat \u00e0 reprendre",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Reason": "Motif",
    "Reason field should not be left blank.": "Le champ Raison ne doit pas \u00eatre laiss\u00e9 vide.",
    "Reason for change:": "Raison du changement : ",
    "Receive updates": "Recevoir les mises \u00e0 jour",
    "Recent Activity": "Activit\u00e9 r\u00e9cente",
<<<<<<< HEAD
    "Redo": "Refaire",
    "Redo (Ctrl+Shift+Z)": "Refaire (Ctrl+Maj+Z)",
    "Redo (Ctrl+Y)": "Refaire (Ctrl+Y)",
=======
    "Recommended image resolution is {imageResolution}, maximum image file size should be {maxFileSize} and format must be one of {supportedImageFormats}.": "La r\u00e9solution d'image conseill\u00e9e est de {imageResolution}, le fichier d'image ne devrait pas faire plus de {maxFileSize}, et les formats accept\u00e9s sont {supportedImageFormats}.",
    "Recover my password": "R\u00e9cup\u00e9rer mon mot de passe",
    "Recovery Email Address": "Adresse \u00e9lectronique de r\u00e9cup\u00e9ration",
    "Redo": "Refaire",
    "Redo (Ctrl+Shift+Z)": "Refaire (Ctrl+Maj+Z)",
    "Redo (Ctrl+Y)": "Refaire (Ctrl+Y)",
    "Refresh": "Actualiser",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Regenerate": "G\u00e9n\u00e9rer \u00e0 nouveau",
    "Regenerate the user's certificate": "G\u00e9n\u00e9rer \u00e0 nouveau le certificat de l'utilisateur",
    "Register with Institution/Campus Credentials": "S'inscrire avec votre Institution/Campus",
    "Rejected": "Rejet\u00e9",
<<<<<<< HEAD
=======
    "Related to: %(courseware_title_linked)s": "En rapport \u00e0: %(courseware_title_linked)s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Release Date and Time": "Date et heure de diffusion",
    "Release Date:": "Date de diffusion :",
    "Release Status:": "Statut de la diffusion :",
    "Release Time in UTC:": "Horaire de diffusion en UTC :",
    "Release:": "Diffusion :",
    "Released:": "Diffus\u00e9 :",
    "Remaining": "Restant",
    "Removal is in progress. To avoid errors, stay on this page until the process is complete.": "Suppression en cours. Pour \u00e9viter toute erreur, restez sur cette page jusqu'\u00e0 la fin du traitement.",
    "Remove": "Supprimer",
<<<<<<< HEAD
    "Remove all": "Tout enlever",
    "Remove chapter %(chapterDisplayName)s": "Supprimer le chapitre %(chapterDisplayName)s",
=======
    "Remove Transcript": "Supprimer la transcription",
    "Remove all": "Tout enlever",
    "Remove chapter %(chapterDisplayName)s": "Supprimer le chapitre %(chapterDisplayName)s",
    "Remove file": "Supprimer le fichier",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Remove from Invalidation Table": "Supprimer de la table d'invalidation",
    "Remove from List": "Retirer de la liste",
    "Remove link": "Supprimer le lien",
    "Remove subsection %(subsectionDisplayName)s": "Supprimer la sous-section %(subsectionDisplayName)s",
    "Remove this team member?": "Retirer ce membre de l'\u00e9quipe ?",
    "Remove this video": "Retirer cette vid\u00e9o",
    "Remove unit %(unitName)s": "Supprimer l'unit\u00e9 %(unitName)s",
    "Remove {role} Access": "Supprimer l'acc\u00e8s {role}",
    "Remove {video_name} video": "Retirer la vid\u00e9o {video_name}",
    "Removing": "Suppression en cours",
    "Removing a video from this list does not affect course content. Any content that uses a previously uploaded video ID continues to display in the course.": "Supprimer la vid\u00e9o de la liste n'affecte pas le contenu du cours. Tout contenu qui utilise un ID vid\u00e9o pr\u00e9c\u00e9demment t\u00e9l\u00e9charg\u00e9 continue \u00e0 s'afficher dans le cours.",
    "Replace": "Remplacer",
    "Replace all": "Remplacer tout",
    "Replace with": "Remplacer avec",
    "Reply to Annotation": "R\u00e9pondre \u00e0 l'annotation",
<<<<<<< HEAD
    "Report abuse, topics, and responses": "Signalez un abus, un sujet ou une r\u00e9ponse",
=======
    "Report": "D\u00e9noncer",
    "Report abuse": "D\u00e9noncer un abus",
    "Report abuse, topics, and responses": "Signalez un abus, un sujet ou une r\u00e9ponse",
    "Reported": "Report\u00e9",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Requester": "Demandeur",
    "Required": "Requis",
    "Required field.": "Champ requis.",
    "Rescore problem '<%- problem_id %>' for all students?": "Recalculer le score de l'exercice '<%- problem_id %>' pour tous les \u00e9tudiants ?",
<<<<<<< HEAD
    "Reset Password": "R\u00e9initialiser le mot de passe",
    "Reset Your Password": "R\u00e9initialiser votre mot de passe",
    "Reset attempts for all students on problem '<%- problem_id %>'?": "R\u00e9initialiser les essais de tous les \u00e9tudiants pour l'exercice '<%- problem_id %>'?",
=======
    "Reset My Password": "R\u00e9initialiser mon mot de passe",
    "Reset Password": "R\u00e9initialiser le mot de passe",
    "Reset Your Password": "R\u00e9initialiser votre mot de passe",
    "Reset attempts for all students on problem '<%- problem_id %>'?": "R\u00e9initialiser les essais de tous les \u00e9tudiants pour l'exercice '<%- problem_id %>'?",
    "Resetting Onboarding Exam": "R\u00e9initialisation de l'examen d'int\u00e9gration",
    "Response": "R\u00e9ponse",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Responses could not be loaded. Refresh the page and try again.": "Les r\u00e9actions n'ont pas pu \u00eatre charg\u00e9es. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "Restore enrollment code": "Restaurer le code d'inscription",
    "Restore last draft": "Restaurer le dernier brouillon",
    "Restrict access to:": "Restreindre l'acc\u00e8s \u00e0\u00a0:",
<<<<<<< HEAD
    "Retake Photo": "Reprendre une photo",
    "Retake Your Photos": "Reprenez vos photos",
    "Retry Verification": "R\u00e9essayer la v\u00e9rification",
    "Return and add email address": "Retourner et ajouter une adresse email",
    "Return to Export": "Retourner \u00e0 l'exportation",
    "Return to Your Dashboard": "Retour au Tableau de bord",
=======
    "Resumed": "Recommenc\u00e9",
    "Retake Photo": "Reprendre une photo",
    "Retake Your Photos": "Reprenez vos photos",
    "Retrieving enrollment status...": "R\u00e9cup\u00e9ration du statut d'inscription...",
    "Retry Verification": "R\u00e9essayer la v\u00e9rification",
    "Retry my exam": "R\u00e9essayer mon examen",
    "Return and add email address": "Retourner et ajouter une adresse email",
    "Return to Export": "Retourner \u00e0 l'exportation",
    "Return to Your Dashboard": "Retour au Tableau de bord",
    "Return to all posts": "Revenir \u00e0 tous les sujets",
    "Return to my dashboard": "Retour \u00e0 mon tableau de bord",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Return to team listing": "Retour \u00e0 la liste des membres de l'\u00e9quipe",
    "Review Policy Exception": "Exception aux R\u00e8gles de Revues",
    "Review Rules": "V\u00e9rification des r\u00e8gles",
    "Review Your Photos": "V\u00e9rifiez vos photos",
    "Review your info": "V\u00e9rifiez vos informations",
    "Revoke access": "Retirer l'acc\u00e8s",
    "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Zone de texte riche. Appuyez sur ALT + F9 pour afficher le menu. Appuyez sur ALT + F10 pour la barre d'outils. Appuyez sur ALT-0 pour l'aide",
    "Right": "Droite",
    "Right to left": "Droite \u00e0 gauche",
    "Robots": "Robots",
    "Row": "Ligne",
    "Row group": "Groupe de lignes",
    "Row properties": "Propri\u00e9t\u00e9s d'une ligne",
    "Row type": "Type de ligne",
    "Rows": "Lignes",
    "Save": "Enregistrer",
    "Save Changes": "Enregistrer les modifications",
<<<<<<< HEAD
=======
    "Save Unsuccessful": "\u00c9chec de la sauvegarde",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Save changes": "Enregistrer les modifications",
    "Saved cohort": "Cohorte enregistr\u00e9e",
    "Saving": "Enregistrement en cours",
    "Saving your email preference": "Enregistrement de vos pr\u00e9f\u00e9rences email",
    "Saving...": "Enregistrement...",
    "Scheduled:": "Programm\u00e9 :",
    "Scope": "Cadre",
    "Search": "Recherche",
    "Search Results": "R\u00e9sultats de la recherche",
    "Search all posts": "Rechercher un sujet",
    "Search teams": "Rechercher des \u00e9quipes",
    "Second Review Required": "Revue additionnelle requise",
    "Section": "Section",
<<<<<<< HEAD
    "Section Visibility": "Visibilit\u00e9 de la section",
    "Select a Content Group": "S\u00e9lectionner un groupe de contenu",
    "Select a chapter": "S\u00e9lectionner un chapitre",
    "Select a cohort": "Selectionner une cohorte",
    "Select a cohort to manage": "S\u00e9lectionnez une cohorte",
    "Select a group type": "S\u00e9lectionner un type de groupe",
    "Select a time allotment for the exam. If it is over 24 hours, type in the amount of time. You can grant individual learners extra time to complete the exam through the Instructor Dashboard.": "Choisissez une p\u00e9riode de temps pour l'examen. Si c'est plus de 24 heures, indiquer la quantit\u00e9 de temps. Vous pouvez accorder du temps suppl\u00e9mentaire \u00e0 des apprenants individuels via le tableau de bord de l'enseignant afin de leur permettre de terminer l'examen.",
    "Select all": "Tout s\u00e9lectionner",
    "Select the course-wide discussion topics that you want to divide.": "S\u00e9lectionnez les sujets de discussion du cours que vous souhaitez s\u00e9parer.",
    "Select the time zone for displaying course dates. If you do not specify a time zone, course dates, including assignment deadlines, will be displayed in your browser's local time zone.": "S\u00e9lectionnez le fuseau horaire pour l'affichage des dates de cours. Si vous n'indiquez aucun fuseau horaire, les dates de cours, y compris les \u00e9ch\u00e9ances de devoirs, seront affich\u00e9s en fonction du fuseau horaire local de votre navigateur. ",
=======
    "Section Highlights": "Points cl\u00e9s de la section",
    "Section Visibility": "Visibilit\u00e9 de la section",
    "Sections": "Sections",
    "See all teams you belong to and all public teams in your course, organized by topic.": "Voir toutes les \u00e9quipes auxquelles vous appartenez et toutes les \u00e9quipes publiques du cours, organis\u00e9 par sujet.",
    "See all teams you belong to and all public teams in your course, organized by topic. Join an open public team to collaborate with other learners who are interested in the same topic as you are.": "Voir toutes les \u00e9quipes auxquelles vous appartenez et toutes les \u00e9quipes publiques de votre cours, organis\u00e9 par sujet. Joignez vous \u00e0 une \u00e9quipe publique ouverte pour collaborer avec d'autres apprenants qui sont int\u00e9ress\u00e9s dans le m\u00eame sujet que vous.",
    "See all teams you belong to.": "Voir toutes les \u00e9quipes auxquelles vous appartenez.",
    "Select": "S\u00e9lectionnez",
    "Select Session": "S\u00e9lectionner une session",
    "Select a Content Group": "S\u00e9lectionner un groupe de contenu",
    "Select a category": "Choisissez une cat\u00e9gorie",
    "Select a chapter": "S\u00e9lectionner un chapitre",
    "Select a cohort": "Selectionner une cohorte",
    "Select a cohort to manage": "S\u00e9lectionnez une cohorte",
    "Select a course or select \"Not specific to a course\" for your support request.": "S\u00e9lectionner un cours ou s\u00e9lectionner \u00ab Cet caract\u00e9ristique n'est pas propre \u00e0 un cours \u00bb pour votre demande de soutien.",
    "Select a group type": "S\u00e9lectionner un type de groupe",
    "Select a prerequisite subsection and enter a minimum score percentage and minimum completion percentage to limit access to this subsection. Allowed values are 0-100": "S\u00e9lectionnez une sous-section pr\u00e9-requise et saisissez une note minimum en pourcentage et un pourcentage de r\u00e9ussite minimum afin de limiter l'acc\u00e8s \u00e0 cette sous-section. Les valeurs autoris\u00e9s  sont 0-100.",
    "Select a section or problem": "S\u00e9lectionnez une section ou un probl\u00e8me",
    "Select a session:": "S\u00e9lectionner une session\u00a0:",
    "Select a subject for your support request.": "S\u00e9lectionnez un sujet pour votre demande d'assistance.",
    "Select a time allotment for the exam. If it is over 24 hours, type in the amount of time. You can grant individual learners extra time to complete the exam through the Instructor Dashboard.": "Choisissez une p\u00e9riode de temps pour l'examen. Si c'est plus de 24 heures, indiquer la quantit\u00e9 de temps. Vous pouvez accorder du temps suppl\u00e9mentaire \u00e0 des apprenants individuels via le tableau de bord de l'enseignant afin de leur permettre de terminer l'examen.",
    "Select all": "Tout s\u00e9lectionner",
    "Select employment status": "S\u00e9lectionnez le statut d'emploi",
    "Select fidelity": "S\u00e9lectionnez la fid\u00e9lit\u00e9",
    "Select language": "S\u00e9lectionnez la langue",
    "Select one or more groups:": "S\u00e9lectionner au moins un groupe\u00a0:",
    "Select the course-wide discussion topics that you want to divide.": "S\u00e9lectionnez les sujets de discussion du cours que vous souhaitez s\u00e9parer.",
    "Select the time zone for displaying course dates. If you do not specify a time zone, course dates, including assignment deadlines, will be displayed in your browser's local time zone.": "S\u00e9lectionnez le fuseau horaire pour l'affichage des dates de cours. Si vous n'indiquez aucun fuseau horaire, les dates de cours, y compris les \u00e9ch\u00e9ances de devoirs, seront affich\u00e9s en fonction du fuseau horaire local de votre navigateur. ",
    "Select turnaround": "S\u00e9lectionnez le d\u00e9lai d'ex\u00e9cution",
    "Selected blocks": "Blocs s\u00e9lectionn\u00e9s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Selected tab": "Onglet s\u00e9lectionn\u00e9",
    "Self": "Auto",
    "Send to:": "Envoyez \u00e0 :",
    "Sent By": "Envoy\u00e9 par",
    "Sent By:": "Envoy\u00e9 par :",
    "Sent To": "Envoy\u00e9 \u00e0",
    "Sent To:": "Envoy\u00e9 \u00e0:",
    "September": "Septembre",
    "Sequence error! Cannot navigate to %(tab_name)s in the current SequenceModule. Please contact the course staff.": "Erreur de s\u00e9quence! Impossible de se rendre \u00e0 %(tab_name)s dans le module SequenceModule en cours. Veuillez contacter les responsables du cours.",
    "Server Error, Please refresh the page and try again.": "Erreur serveur. Veuillez rafra\u00eechir la page, s'il vous pla\u00eet et r\u00e9essayer.",
    "Server error.": "Erreur serveur.",
    "Session Selection Dropdown for {courseName}": "Liste d\u00e9roulante de sessions \u00e0 s\u00e9lectionner en {courseName}",
<<<<<<< HEAD
=======
    "Set Access": "D\u00e9finir l'acc\u00e8s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Set as a Special Exam": "D\u00e9finir comme un examen sp\u00e9cial",
    "Set up your certificate": "Configurer  votre certificat",
    "Settings": "Param\u00e8tres",
    "Settings updated": "Param\u00e8tres mis \u00e0 jour",
    "Share": "Partager",
<<<<<<< HEAD
=======
    "Share Alike": "Partage \u00e0 l'identique",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Share on Mozilla Backpack": "Partager sur Mozilla Backpack",
    "Share your \"%(display_name)s\" award": "Partager votre prix \"%(display_name)s\"",
    "Short explanation": "Br\u00e8ve explication",
    "Show": "Afficher",
    "Show All": "Voir tout",
    "Show Annotations": "Afficher les annotations",
<<<<<<< HEAD
    "Show Deprecated Settings": "Afficher les param\u00e8tres obsol\u00e8tes",
    "Show Discussion": "Afficher la discussion",
=======
    "Show Comment (%(num_comments)s)": [
      "Afficher (%(num_comments)s) Commentaires",
      "Afficher (%(num_comments)s) Commentaires",
      "Afficher (%(num_comments)s) Commentaires"
    ],
    "Show Deprecated Settings": "Afficher les param\u00e8tres obsol\u00e8tes",
    "Show Discussion": "Afficher la discussion",
    "Show Less": "Montrer moins",
    "Show More": "Montrer plus",
    "Show Previews": "Montrer les aper\u00e7us",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Show assessment results when subsection is past due": "Montrer les r\u00e9sultats d'\u00e9valuation lorsque la date de rendu de la sous-section est d\u00e9pass\u00e9e",
    "Show blocks": "Afficher les blocs",
    "Show entire subsection": "Afficher toute la sous-section",
    "Show invisible characters": "Afficher les caract\u00e8res invisibles",
    "Show me other ways to sign in or register": "Montrez-moi d'autres m\u00e9thodes pour me connecter ou m'inscrire",
    "Show notes": "Afficher les notes",
    "Show posts by {username}.": "Voir les messages de {username}.",
<<<<<<< HEAD
    "Showing all responses": "Afficher toutes les r\u00e9ponses",
    "Showing first response": [
      "Affiche la premi\u00e8re r\u00e9ponse",
      "Affiche les {numResponses} premi\u00e8res r\u00e9ponses"
    ],
    "Showing results for \"{searchString}\"": "Affichage des r\u00e9sultats pour \"{searchString}\"",
=======
    "Show transcripts ({totalTranscripts})": "Vor les transcription ({totalTranscripts})",
    "Show transcripts ({transcriptCount})": "Afficher les transcriptions ({transcriptCount})",
    "Showing all responses": "Afficher toutes les r\u00e9ponses",
    "Showing first response": [
      "Affiche la premi\u00e8re r\u00e9ponse",
      "Affiche les {numResponses} premi\u00e8res r\u00e9ponses",
      "Affiche les {numResponses} premi\u00e8res r\u00e9ponses"
    ],
    "Showing results for \"{searchString}\"": "Affichage des r\u00e9sultats pour \"{searchString}\"",
    "Showing {currentItemRange} out of {totalItemsCount}, filtered by {assetType}, sorted by {sortName} ascending": "Afficher {currentItemRange} sur {totalItemsCount}, filtr\u00e9 par {assetType}, tri\u00e9 par {sortName} par ordre croissant",
    "Showing {currentItemRange} out of {totalItemsCount}, filtered by {assetType}, sorted by {sortName} descending": "Afficher {currentItemRange} sur {totalItemsCount}, filtr\u00e9 par {assetType}, tri\u00e9 par {sortName} par ordre d\u00e9croissant",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Showing {currentItemRange} out of {totalItemsCount}, sorted by {sortName} ascending": "Afficher {currentItemRange} sur {totalItemsCount}, tri\u00e9 par {sortName} par ordre croissant",
    "Showing {currentItemRange} out of {totalItemsCount}, sorted by {sortName} descending": "Afficher {currentItemRange} sur {totalItemsCount}, tri\u00e9 par {sortName} par ordre d\u00e9croissant",
    "Showing {firstIndex} out of {numItems} total": "Affiche {firstIndex} sur {numItems} au total",
    "Showing {firstIndex}-{lastIndex} out of {numItems} total": "Affiche {firstIndex}-{lastIndex} sur {numItems} au total",
    "Sign In": "Se Connecter",
    "Sign in": "Connexion",
    "Sign in here using your email address and password, or use one of the providers listed below.": "Connectez-vous avec votre email et mot de passe, ou utiliser l'un des fournisseurs ci-dessous.",
    "Sign in here using your email address and password.": "Connectez-vous ici avec votre adresse email et mot de passe.",
<<<<<<< HEAD
    "Sign in to continue learning as {email}": "Connectez-vous pour continuer votre apprentissage en tant que {email}",
    "Sign in using %(providerName)s": "Se connecter avec %(providerName)s",
    "Sign in with %(providerName)s": "Se connecter avec %(providerName)s",
    "Sign in with Institution/Campus Credentials": "Se connecter avec vos codes Campus",
=======
    "Sign in to continue learning": "Connectez-vous pour continuer votre apprentissage",
    "Sign in to continue learning as {email}": "Connectez-vous pour continuer votre apprentissage en tant que {email}",
    "Sign in to {platform} so we can help you better.": "Se connecter \u00e0 {platform} pour nous permettre de mieux vous aider.",
    "Sign in using %(providerName)s": "Se connecter avec %(providerName)s",
    "Sign in with %(providerName)s": "Se connecter avec %(providerName)s",
    "Sign in with Institution/Campus Credentials": "Se connecter avec vos codes Campus",
    "Sign in with your company or school": "S'enregistrer avec votre entreprise ou \u00e9cole",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Sign in.": "Se connecter.",
    "Signatory": "Signataire",
    "Signatory field(s) has invalid data.": "Donn\u00e9es non valide pour les champ(s) de signataire.",
    "Signature Image": "Image de la signature",
    "Skip": "Passer",
    "Social Media Links": "Liens vers les r\u00e9seaux sociaux",
    "Some Rights Reserved": "Quelques droits r\u00e9serv\u00e9s",
    "Some images in this post have been omitted": "Quelques images dans ce message ont \u00e9t\u00e9 omises",
    "Something went wrong changing this enrollment. Please try again.": "Une erreur s'est produite lors du changement de cette inscription. Veuillez r\u00e9essayer.",
<<<<<<< HEAD
    "Sorry, no results were found.": "D\u00e9sol\u00e9, aucun r\u00e9sultat trouv\u00e9.",
=======
    "Something went wrong. Please try again later.": "Quelque chose s'est mal pass\u00e9. Veuillez r\u00e9essayer plus tard.",
    "Sorry, no results were found.": "D\u00e9sol\u00e9, aucun r\u00e9sultat trouv\u00e9.",
    "Sorry, there was an error parsing the subtitles that you uploaded. Please check the format and try again.": "D\u00e9sol\u00e9, une erreur s'est produite lors de l'analyse des sous-titres. V\u00e9rifiez le format et r\u00e9essayez.",
    "Sorry, there was an error trying to process your request. Please try again later.": "Nous sommes d\u00e9sol\u00e9s, il y a eu une erreur dans le suivi de votre demande. Veuillez r\u00e9essayer plus tard.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Sorted by": "Tri\u00e9 par",
    "Source": "Source",
    "Source code": "Code source",
    "Special character": "Caract\u00e8re sp\u00e9cial",
    "Specify an alternative to the official course title to display on certificates. Leave blank to use the official course title.": "Specifier une alternative au titre du cours officiel pour l'afficher sur les certificats. Laisser un vide pour utiliser le titre du cours officiel.",
<<<<<<< HEAD
=======
    "Specify any rules or rule exceptions that the proctoring review team should enforce when reviewing the videos. For example, you could specify that calculators are allowed. These specified rules are visible to learners before the learners start the exam, along with the {linkStart}general proctored exam rules{linkEnd}.": "Veuillez indiquer toute r\u00e8gle ou exception \u00e0 la r\u00e8gle que l'\u00e9quipe de r\u00e9vision d'examens surveill\u00e9s doit imposer lors de la r\u00e9vision des vid\u00e9os. Par exemple, vous pourriez indiquer que les calculatrices sont permises. Ces r\u00e8gles pr\u00e9cis\u00e9es, ainsi que les {linkStart}r\u00e8gles g\u00e9n\u00e9rales d'examen surveill\u00e9{linkEnd}, sont visibles aux \u00e9tudiants avant que les \u00e9tudiants ne commencent l'examen.",
    "Specify any rules or rule exceptions that the proctoring review team should enforce when reviewing the videos. For example, you could specify that calculators are allowed. These specified rules are visible to learners before the learners start the exam.": "Veuillez pr\u00e9ciser toute r\u00e8gle ou exception \u00e0 la r\u00e8gle que l'\u00e9quipe de r\u00e9vision d'examens surveill\u00e9s doit imposer lors de la r\u00e9vision des vid\u00e9os. Par exemple, vous pourriez indiquer que les calculatrices sont permises. Ces r\u00e8gles pr\u00e9cis\u00e9es sont visibles aux \u00e9tudiants avant  que les \u00e9tudiants ne commencent l'examen.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Specify whether content-specific discussion topics are divided.": "Pr\u00e9ciser si les sujets de discussion au contenu bien pr\u00e9cis sont s\u00e9par\u00e9s.",
    "Specify whether discussion topics are divided": "Pr\u00e9cisez si les sujets de discussion \u00e9taient s\u00e9par\u00e9s",
    "Speed": "Vitesse",
    "Spellcheck": "v\u00e9rification de l'orthographe",
    "Split cell": "Scinder la cellule",
    "Square": "Carr\u00e9",
    "Staff": "\u00c9quipe p\u00e9dagogique",
    "Staff Only": "R\u00e9serv\u00e9 \u00e0 l'\u00e9quipe p\u00e9dagogique",
    "Staff and Learners": "Equipe p\u00e9dagogique et apprenants",
<<<<<<< HEAD
    "Start Date": "Date de d\u00e9but",
    "Start System Check": "D\u00e9marrer le diagnostique syst\u00e8me",
    "Start generating certificates for all students in this course?": "D\u00e9marrer la g\u00e9n\u00e9ration des certificats pour tous les \u00e9tudiants du cours?",
=======
    "Staff assessment": "\u00c9valuation par l'\u00e9quipe enseignante",
    "Start Date": "Date de d\u00e9but",
    "Start Exam": "Commencer l'examen",
    "Start System Check": "D\u00e9marrer le diagnostique syst\u00e8me",
    "Start generating certificates for all students in this course?": "D\u00e9marrer la g\u00e9n\u00e9ration des certificats pour tous les \u00e9tudiants du cours?",
    "Start my exam": "Commencer mon examen",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Start of transcript. Skip to the end.": "D\u00e9but de la transcription. Avancer jusqu'\u00e0 la fin.",
    "Start regenerating certificates for students in this course?": "D\u00e9marrer la r\u00e9g\u00e9n\u00e9ration des certificats pour tous les \u00e9tudiants du cours?",
    "Start search": "D\u00e9marrer la recherche",
    "Start working toward your next learning goal.": "Commencer \u00e0 travailler vers votre prochain objectif d'apprentissage",
    "Started": "D\u00e9but\u00e9",
    "Started entrance exam rescore task for student '{student_id}'. Click the 'Show Task Status' button to see the status of the task.": "Le recalcul du score de l'examen d'entr\u00e9e de l'\u00e9tudiant'{student_id}' a commenc\u00e9. Cliquez sur le bouton \u00abAfficher l\u2019\u00e9tat des t\u00e2ches\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
    "Started rescore problem task for problem '<%- problem_id %>' and student '<%- student_id %>'. Click the 'Show Task Status' button to see the status of the task.": "Le recalcul du score de l'exercice '<%- problem_id %>' de l'\u00e9tudiant '<%- student_id %>' a commenc\u00e9. Cliquez sur le bouton \u00abAfficher l\u2019\u00e9tat des t\u00e2ches\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
<<<<<<< HEAD
    "Starts": "D\u00e9but",
=======
    "Started task to override the score for problem '<%- problem_id %>' and student '<%- student_id %>'. Click the 'Show Task Status' button to see the status of the task.": "La t\u00e2che de remplacement de la note pour le probl\u00e8me '<%- problem_id %>' de l'\u00e9tudiant '<%- student_id %>' a commenc\u00e9. Cliquez sur le bouton \u00abAfficher l\u2019\u00e9tat des t\u00e2ches\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
    "Started {start}": "Commenc\u00e9 \u00e0 {start}",
    "Starting Exam": "D\u00e9but de l'examen",
    "Starts": "D\u00e9but",
    "Starts {start}": "Commence \u00e0 {start}",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Starts: %(start_date)s": "D\u00e9but: %(start_date)s",
    "State": "\u00c9tat",
    "Status": "Statut",
    "Status of Your Response": "Statut de votre r\u00e9ponse",
    "Strikethrough": "Barr\u00e9",
    "Student": "\u00c9tudiant",
<<<<<<< HEAD
    "Student email or username": "Nom d'utilisateur ou email",
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Add to Exception List\" button.": "Le champ \u00e9tudiant utilisateur/courriel est n\u00e9cessaire et ne peut \u00eatre vide. Veuillez remplir utilisateur/courriel et ensuite appuyer le bouton \"Ajouter \u00e0 la liste de D\u00e9rogation\".",
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Invalidate Certificate\" button.": "Le champ nom d'utilisateur / email de l'\u00e9tudiant est requis et ne peut \u00eatre vide. Merci de saisir le nom d'utilisateur / email et appuyer sur le bouton \"Invalidate Certificate\".",
=======
    "Student Removed from certificate allowlist successfully.": "\u00c9tudiant retir\u00e9 de la liste d'autorisation d'attestation avec succ\u00e8s.",
    "Student email or username": "Nom d'utilisateur ou email",
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Add to Exception List\" button.": "Le champ \u00e9tudiant utilisateur/courriel est n\u00e9cessaire et ne peut \u00eatre vide. Veuillez remplir utilisateur/courriel et ensuite appuyer le bouton \"Ajouter \u00e0 la liste de D\u00e9rogation\".",
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Invalidate Certificate\" button.": "Le champ nom d'utilisateur / email de l'\u00e9tudiant est requis et ne peut \u00eatre vide. Merci de saisir le nom d'utilisateur / email et appuyer sur le bouton \"Invalidate Certificate\".",
    "Studio's having trouble parsing the problem component's content": "Studio a du mal \u00e0 analyser le contenu du composant probl\u00e9matique",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Studio's having trouble saving your work": "Studio a des probl\u00e8mes pour sauvegarder votre travail",
    "Studio:": "Studio :",
    "Style": "Style",
    "Subject": "Sujet",
    "Subject:": "Sujet:",
    "Submission aborted! Sorry, your browser does not support file uploads. If you can, please use Chrome or Safari which have been verified to support file uploads.": "Envoi annul\u00e9 ! D\u00e9sol\u00e9, votre navigateur ne supporte pas le t\u00e9l\u00e9chargement de fichiers. Si possible, utilisez Chrome ou Safari qui supportent effectivement le t\u00e9l\u00e9chargement de fichiers.",
    "Submit": "Soumettre",
    "Submit Application": "Soumettre votre candidature",
    "Submit enrollment change": "Soumettre la modification d'inscription",
    "Submitted": "Soumis",
    "Subscript": "Indice",
    "Subsection": "Sous-section",
    "Subsection Visibility": "Visibilit\u00e9 de la sous-section",
    "Subsection is hidden after course end date": "La sous-section est masqu\u00e9e apr\u00e8s la date de fin du cours",
    "Subsection is hidden after due date": "La sous-section est masqu\u00e9e apr\u00e8s l'\u00e9ch\u00e9ance",
<<<<<<< HEAD
    "Success": "Op\u00e9ration r\u00e9ussie",
=======
    "Subsections": "Sous-sections",
    "Success": "Op\u00e9ration r\u00e9ussie",
    "Success! \"{displayName}\" has been moved.": "\u00ab\u00a0{displayName}\u00a0\u00bb a \u00e9t\u00e9 d\u00e9plac\u00e9 avec succ\u00e8s.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Success! Problem attempts reset for problem '<%- problem_id %>' and student '<%- student_id %>'.": "Nombre d'essai r\u00e9initialis\u00e9 pour l'exercice  '<%- problem_id %>' de l'\u00e9tudiant '<%- student_id %>'.",
    "Successfully deleted student state for user {user}": "Suppression r\u00e9ussie de l'\u00e9tat de l'\u00e9tudiant pour l'utilisateur {user}",
    "Successfully enrolled and sent email to the following users:": "Inscriptions et envoi d'e-mail r\u00e9ussis pour les utilisateurs suivants :",
    "Successfully enrolled the following users:": "Inscription r\u00e9ussie pour les utilisateurs suivants :",
<<<<<<< HEAD
    "Successfully rescored problem for user {user}": "R\u00e9\u00e9valuation r\u00e9ussie du score du probl\u00e8me pour l'utilisateur {user}",
    "Successfully reset the attempts for user {user}": "R\u00e9initialisation des essais r\u00e9ussie pour l'utilisateur {user}",
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "Envoi d'e-mails d'inscription r\u00e9ussi pour les utilisateurs suivants. Ils seront autoris\u00e9s \u00e0 s'inscrire au cours une fois qu'ils se seront enregistr\u00e9s sur la plateforme : ",
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "E-mails d'inscription envoy\u00e9s avec succ\u00e8s aux utilisateurs suivants. Ils seront inscrits d\u00e8s qu'ils se seront enregistr\u00e9s sur la plateforme :",
    "Successfully started task to reset attempts for problem '<%- problem_id %>'. Click the 'Show Task Status' button to see the status of the task.": "La t\u00e2che de r\u00e9initialisation de tentatives pour le probl\u00e8me '<%- problem_id %>' a d\u00e9marr\u00e9 avec succ\u00e8s. Cliquez sur le bouton \u00ab\u00a0Afficher l\u2019\u00e9tat des t\u00e2ches\u00a0\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
    "Successfully unlinked.": "Lien supprim\u00e9.",
    "Superscript": "Exposant",
    "Supported": "Support\u00e9",
    "Supported file types: {supportedVideoTypes}": "Types de fichiers pris en charge\u00a0: {supportedVideoTypes}",
=======
    "Successfully overrode problem score for {user}": "Note obtenue au probl\u00e8me modifi\u00e9e avec succ\u00e8s pour {user} ",
    "Successfully rescored problem for user {user}": "R\u00e9\u00e9valuation r\u00e9ussie du score du probl\u00e8me pour l'utilisateur {user}",
    "Successfully rescored problem to improve score for user {user}": "R\u00e9\u00e9valuation r\u00e9ussie pour l'utilisateur {user} pour am\u00e9liorer sa note au probl\u00e8me",
    "Successfully reset the attempts for user {user}": "R\u00e9initialisation des essais r\u00e9ussie pour l'utilisateur {user}",
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "Envoi d'e-mails d'inscription r\u00e9ussi pour les utilisateurs suivants. Ils seront autoris\u00e9s \u00e0 s'inscrire au cours une fois qu'ils se seront enregistr\u00e9s sur la plateforme : ",
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "E-mails d'inscription envoy\u00e9s avec succ\u00e8s aux utilisateurs suivants. Ils seront inscrits d\u00e8s qu'ils se seront enregistr\u00e9s sur la plateforme :",
    "Successfully started task to rescore problem '<%- problem_id %>' for all students. Click the 'Show Task Status' button to see the status of the task.": "D\u00e9marrage de la t\u00e2che consistant \u00e0 recalculer la note du probl\u00e8me'<%- problem_id %>' pour tous les \u00e9tudiants effectu\u00e9 avec succ\u00e8s. Cliquez sur le bouton \u00abAfficher l\u2019\u00e9tat des t\u00e2ches\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
    "Successfully started task to reset attempts for problem '<%- problem_id %>'. Click the 'Show Task Status' button to see the status of the task.": "La t\u00e2che de r\u00e9initialisation de tentatives pour le probl\u00e8me '<%- problem_id %>' a d\u00e9marr\u00e9 avec succ\u00e8s. Cliquez sur le bouton \u00ab\u00a0Afficher l\u2019\u00e9tat des t\u00e2ches\u00a0\u00bb pour voir l'\u00e9tat de la t\u00e2che.",
    "Successfully unlinked.": "Lien supprim\u00e9.",
    "Superscript": "Exposant",
    "Support education research by providing additional information": "Soutenez la recherche p\u00e9dagogique en fournissant plus d'information",
    "Supported": "Support\u00e9",
    "Supported file types: {supportedVideoTypes}": "Types de fichiers pris en charge\u00a0: {supportedVideoTypes}",
    "Switch Language Back": "Revenir \u00e0 la langue pr\u00e9c\u00e9dente",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "TOTAL": "TOTAL",
    "Table": "Tableau",
    "Table properties": "Propri\u00e9t\u00e9s du tableau",
    "Tags": "Balises",
    "Tags:": "Balises : ",
    "Take Photo": "Prendre une photo",
    "Take Your Photo": "Prendre votre photo",
    "Take a Photo of Your ID": "Prenez une photo de votre pi\u00e8ce d'identit\u00e9",
    "Take a photo of your ID": "Prenez une photo de votre pi\u00e8ce d'identit\u00e9",
    "Take me to the main course page": "Aller sur la page principale du cours",
    "Take me to the main library page": "Aller sur la page principale de la biblioth\u00e8que.",
    "Take me to the new location": "Aller au nouvel emplacement",
    "Take this exam without proctoring.": "Faire cette examen sans surveillance.",
    "Taking As Open Exam": "Prendre comme session libre.",
    "Taking As Proctored Exam": "Faire en tant qu'examen surveill\u00e9",
    "Taking as Proctored": "Faire sous surveillance",
    "Target": "Cible",
    "Task ID": "Id de la t\u00e2che",
    "Task Progress": "Progression de la t\u00e2che",
    "Task Status": "\u00c9tat de la t\u00e2che",
    "Task Type": "Type de t\u00e2che",
    "Task inputs": "Donn\u00e9es d'entr\u00e9es de la t\u00e2che",
    "Teaching Assistant": "Assistant de cours",
    "Team \"{team}\" successfully deleted.": "Equipe \"{team}\" supprim\u00e9e avec succ\u00e8s.",
<<<<<<< HEAD
=======
    "Team Assignments": "Devoirs de l'\u00e9quipe",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Team Description (Required) *": "Description de l'\u00e9quipe (obligatoire) *",
    "Team Details": "D\u00e9tails de l'\u00e9quipe",
    "Team Name (Required) *": "Nom de l'\u00e9quipe (obligatoire) *",
    "Team Search": "Recherche d'\u00e9quipe",
    "Team capacity": "Capacit\u00e9 de l'\u00e9quipe",
    "Team description cannot have more than 300 characters.": "La description de l'\u00e9quipe ne peut pas d\u00e9passer 300 caract\u00e8res.",
    "Team member profiles": "Profils des membres de l'\u00e9quipe",
    "Team name cannot have more than 255 characters.": "Le nom de l'\u00e9quipe ne peut pas d\u00e9passer 255 caract\u00e8res.",
    "Teams": "\u00c9quipes",
    "Teams Pagination": "Pagination des \u00e9quipes",
    "Tell other learners a little about yourself: where you live, what your interests are, why you're taking courses, or what you hope to learn.": "Parlez nous de vous : o\u00f9 habitez-vous, quels sont vos int\u00e9r\u00eats, pourquoi suivez-vous des cours ou ce que vous souhaitez apprendre.",
    "Templates": "Mod\u00e8les",
    "Terms of Service and Honor Code": "Conditions d'utilisation et Code d'honneur",
    "Text color": "Couleur du texte",
    "Text to display": "Texte \u00e0 afficher",
    "Textbook Name": "Nom du manuel",
    "Textbook information": "information sur le manuel",
<<<<<<< HEAD
    "Thank you for submitting your financial assistance application for {course_name}! You can expect a response in 2-4 business days.": "Merci d'avoir soumis votre demande d'aide financi\u00e8re pour {course_name}! Vous aurez une r\u00e9ponse dans 2-4 jours ouvrables.",
    "Thank you for submitting your photos. We will review them shortly. You can now sign up for any %(platformName)s course that offers verified certificates. Verification is good for one year. After one year, you must submit photos for verification again.": "Merci d'avoir envoyer vos photos. Nous allons les valider rapidement. Vous pouvez maintenant vous inscrire \u00e0 tous les cours %(platformName)s offrants un certificat v\u00e9rifi\u00e9. La v\u00e9rification est valide un an. Apr\u00e8s un an, vous devrez renvoyer vos photos pour v\u00e9rification.",
    "Thanks for returning to verify your ID in: {courseName}": "Merci pour votre v\u00e9rification d'ID pour: {courseName}",
    "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "L'URL que vous avez entr\u00e9e semble \u00eatre une adresse e-mail. Voulez-vous ajouter le prefix requis mailto: ?",
    "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": "L'URL que vous avez entr\u00e9e semble \u00eatre un lien externe. Voulez-vous ajouter le pr\u00e9fixe http:// requis ?",
    "The certificate for this learner has been re-validated and the system is re-running the grade for this learner.": "Le certificat de cet apprenant a \u00e9t\u00e9 re-valid\u00e9 et le syst\u00e8me est en train de re-\u00e9valuer les notes de cet apprenant. ",
    "The cohort cannot be added": "La cohorte ne peut pas \u00eatre ajout\u00e9e",
    "The cohort cannot be saved": "La cohorte ne peut pas \u00eatre enregistr\u00e9e",
=======
    "Textbook name is required": "Le nom du manuel est requis",
    "Thank you for submitting a request! We appreciate your patience while we work to review your request.": "Merci de nous avoir soumis une demande ! Nous appr\u00e9cions votre patience pendant que nous examinons votre demande.",
    "Thank you for submitting your financial assistance application for {course_name}! You can expect a response in 2-4 business days.": "Merci d'avoir soumis votre demande d'aide financi\u00e8re pour {course_name}! Vous aurez une r\u00e9ponse dans 2-4 jours ouvrables.",
    "Thank you for submitting your photos. We will review them shortly. You can now sign up for any %(platformName)s course that offers verified certificates. Verification is good for one year. After one year, you must submit photos for verification again.": "Merci d'avoir envoyer vos photos. Nous allons les valider rapidement. Vous pouvez maintenant vous inscrire \u00e0 tous les cours %(platformName)s offrants un certificat v\u00e9rifi\u00e9. La v\u00e9rification est valide un an. Apr\u00e8s un an, vous devrez renvoyer vos photos pour v\u00e9rification.",
    "Thanks for returning to verify your ID in: {courseName}": "Merci pour votre v\u00e9rification d'ID pour: {courseName}",
    "The \"{name}\" problem is configured to require a minimum of {min_grades} peer grades, and asks to review {min_graded} peers.": "Le probl\u00e8me \"{name}\" requi\u00e8re un minimim de {min_grades} \u00e9valutions par les pairs et que vous \u00e9valuez au moins {min_graded} pairs.",
    "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "L'URL que vous avez entr\u00e9e semble \u00eatre une adresse e-mail. Voulez-vous ajouter le prefix requis mailto: ?",
    "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": "L'URL que vous avez entr\u00e9e semble \u00eatre un lien externe. Voulez-vous ajouter le pr\u00e9fixe http:// requis ?",
    "The assignment type must have a name.": "Le type de travaux doit avoir un nom.",
    "The certificate available date must be later than the course end date.": "La date de disponibilit\u00e9 du certificat ne peut \u00eatre ant\u00e9rieure que la date de fin du cours.",
    "The certificate display behavior must be one of: {behavior_options}": "Le comportement d'affichage de l'attestation doit \u00eatre l'un des suivants : {behavior_options}",
    "The certificate for this learner has been re-validated and the system is re-running the grade for this learner.": "Le certificat de cet apprenant a \u00e9t\u00e9 re-valid\u00e9 et le syst\u00e8me est en train de re-\u00e9valuer les notes de cet apprenant. ",
    "The certificates display behavior must be {valid_option} if certificate available date is set.": "Le comportement d'affichage des attestations doit \u00eatre {valid_option} si la date de disponibilit\u00e9 de l'attestation est d\u00e9finie.",
    "The cohort cannot be added": "La cohorte ne peut pas \u00eatre ajout\u00e9e",
    "The cohort cannot be saved": "La cohorte ne peut pas \u00eatre enregistr\u00e9e",
    "The combined length of the organization and library code fields cannot be more than <%- limit %> characters.": "La longueur totale des champs organisation et code biblioth\u00e8que ne peut \u00eatre sup\u00e9rieure \u00e0 <%- limit %> caract\u00e8res.",
    "The combined length of the organization, course number, and course run fields cannot be more than <%- limit %> characters.": "La longueur totale des champs organisation, num\u00e9ro de cours et session ne peut \u00eatre sup\u00e9rieure \u00e0 <%- limit %> caract\u00e8res.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The country or region where you live.": "Votre pays ou r\u00e9gion de r\u00e9sidence.",
    "The country that team members primarily identify with.": "Le pays avec lequel les membres de l'\u00e9quipe sont le plus proche.",
    "The course end date must be later than the course start date.": "La date de fin du cours doit \u00eatre post\u00e9rieure \u00e0 la date de d\u00e9but du cours.",
    "The course must have an assigned start date.": "Le Cours doit avoir une date de d\u00e9part renseign\u00e9e.",
    "The course start date must be later than the enrollment start date.": "La date de d\u00e9but de cours ne peut pas \u00eatre ant\u00e9rieure \u00e0 la date de d\u00e9but des inscriptions.",
    "The display of ungraded and checked out responses could not be loaded.": "L'affichage des r\u00e9ponses non not\u00e9es n'a pas pu \u00eatre charg\u00e9.",
    "The email address you've provided isn't formatted correctly.": "L'adresse email que vous avez fournie est incorrecte.",
    "The enrollment end date cannot be after the course end date.": "La date de fin des inscriptions ne peut pas \u00eatre post\u00e9rieure \u00e0 la date de fin du Cours.",
    "The enrollment start date cannot be after the enrollment end date.": " La date de d\u00e9but des inscriptions ne peut pas \u00eatre post\u00e9rieure \u00e0 la date de fin des inscriptions.",
<<<<<<< HEAD
=======
    "The file could not be uploaded.": "Impossible de charger ce fichier.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The file must be at least {size} in size.": "Le fichier doit avoir une taille sup\u00e9rieure \u00e0 {size}.",
    "The file must be smaller than {size} in size.": "Le fichier doit avoir une taille inf\u00e9rieure \u00e0 {size}.",
    "The following email addresses and/or usernames are invalid:": "Les adresses email et/ou noms d'utilisateurs suivants sont invalides :",
    "The following errors were generated:": "Les erreurs suivantes ont \u00e9t\u00e9 g\u00e9n\u00e9r\u00e9es:",
    "The following file types are not allowed: ": "Les types de fichiers suivants ne sont pas support\u00e9s :",
<<<<<<< HEAD
=======
    "The following information is already a part of your {platform} profile. We've included it here for your application.": "Les informations suivantes sont d\u00e9j\u00e0 int\u00e9gr\u00e9es dans votre profil de {platform}. Nous les avons inclus ici pour votre demande.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The following message will be displayed at the bottom of the courseware pages within your course:": "Le message suivant sera affich\u00e9 au bas des pages du cours :",
    "The following options are available for the {license_name} license.": "Les options suivantes sont disponibles pour la licence {license_name}",
    "The following users are no longer enrolled in the course:": "Les utilisateurs suivants ont \u00e9t\u00e9 d\u00e9sinscrits du cours\u00a0:",
    "The following warnings were generated:": "Les avertissements suivants ont \u00e9t\u00e9 g\u00e9n\u00e9r\u00e9s:",
    "The general category for this type of assignment, for example, Homework or Midterm Exam. This name is visible to learners.": "La cat\u00e9gorie g\u00e9n\u00e9rale pour ce type de devoir, par exemple, devoirs maisons ou examen de moiti\u00e9 d'ann\u00e9e. Ce nom est visible aux \u00e9tudiants.",
    "The grading process is still running. Refresh the page to see updates.": "Le processus d'\u00e9valuation est toujours en cours. Rafra\u00eechir la page pour mettre \u00e0 jour.",
    "The language that team members primarily use to communicate with each other.": "La langue principalement utilis\u00e9e par les membres de l'\u00e9quipe pour communiquer entre eux.",
    "The language used throughout this site. This site is currently available in a limited number of languages. Changing the value of this field will cause the page to refresh.": "La langue employ\u00e9e sur ce site. Ce site est disponible uniquement dans certaines langues. Si vous modifiez ce champ, cela provoquera automatiquement une actualisation de la page.",
<<<<<<< HEAD
    "The minimum grade for course credit is not set.": "La note minimale d'obtention d'un cr\u00e9dit pour ce cours n'est pas fix\u00e9e.",
=======
    "The maximum number of weeks this subsection can be due in is 18 weeks from the learner enrollment date.": "Le nombre maximum de semaines dans lesquelles cette sous-section peut \u00eatre due est de 18 semaines \u00e0 compter de la date d'inscription de l'apprenant.",
    "The minimum completion percentage must be a whole number between 0 and 100.": "Le pourcentage minimum d'ach\u00e8vement doit \u00eatre un nombre entier entre 0 et 100.",
    "The minimum grade for course credit is not set.": "La note minimale d'obtention d'un cr\u00e9dit pour ce cours n'est pas fix\u00e9e.",
    "The minimum number of weeks this subsection can be due in is 1 week from the learner enrollment date.": "Le nombre minimum de semaines dans lesquelles cette sous-section peut \u00eatre due est de 1 semaine \u00e0 compter de la date d'inscription de l'apprenant.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The minimum score percentage must be a whole number between 0 and 100.": "Le score minimum en pourcentage doit-\u00eatre un nombre entier compris entre 0 et 100.",
    "The name of this signatory as it should appear on certificates.": "Le nom du signataire tel qu'il doit appara\u00eetre sur les certificats.",
    "The name that identifies you on {platform_name}. You cannot change your username.": "Votre nom sur {platform_name}. Vous ne pouvez pas modifier votre nom d'utilisateur",
    "The name that is used for ID verification and that appears on your certificates.": "Le nom qui appara\u00eetra sur vos certificats et dans le cadre de toute v\u00e9rification d'identit\u00e9.",
    "The number of assignments of this type that will be dropped. The lowest scoring assignments are dropped first.": "Le nombre de devoirs de ce type qui seont ignor\u00e9s. Les scores des devoirs les plus bas seront ignor\u00e9s en premier.",
    "The number of subsections in the course that contain problems of this assignment type.": "Le nombre de sous-sections de ce cours qui contiennent des probl\u00e8mes de ce type de devoir.",
<<<<<<< HEAD
=======
    "The onboarding service is temporarily unavailable. Please try again later.": "Le service d'int\u00e9gration est momentan\u00e9ment indisponible. Veuillez r\u00e9essayer plus tard.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The organization that this signatory belongs to, as it should appear on certificates.": "L'organisation \u00e0 laquelle ce signataire appartient, telle qu'elle devrait apparaitre sur les attestations.",
    "The page \"{route}\" could not be found.": "Page \"{route}\" non trouv\u00e9e.",
    "The post you selected has been deleted.": "Le message que vous avez s\u00e9lectionn\u00e9 a \u00e9t\u00e9 effac\u00e9.",
    "The published branch version, {published}, was reset to the draft branch version, {draft}.": "La version de la branche publi\u00e9e, {published}, a \u00e9t\u00e9 r\u00e9initialis\u00e9e \u00e0 la branche de la version du brouillon, {draft}.",
    "The raw error message is:": "Le message d'erreur est:",
<<<<<<< HEAD
    "The selected content group does not exist": "Le groupe de contenu s\u00e9lectionn\u00e9 n'existe pas",
    "The selected image must be larger than {minFileSizeInKB}.": "L'image s\u00e9lectionn\u00e9e doit faire au moins {minFileSizeInKB}.",
=======
    "The refund deadline for this course has passed, so you will not receive a refund.": "La date limite de remboursement pour ce cours est pass\u00e9e, de sorte que vous ne recevrez pas de remboursement.",
    "The selected content group does not exist": "Le groupe de contenu s\u00e9lectionn\u00e9 n'existe pas",
    "The selected image must be larger than {minFileSizeInKB}.": "L'image s\u00e9lectionn\u00e9e doit faire au moins {minFileSizeInKB}.",
    "The selected image must be smaller than {maxFileSizeInMB}.": "L'image s\u00e9lectionn\u00e9e doit faire au plus {maxFileSizeInMB}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "The server could not be contacted.": "Le serveur n'a pas pu \u00eatre contact\u00e9.",
    "The staff assessment form could not be loaded.": "Le formulaire d'\u00e9valuation de l'\u00e9quipe p\u00e9dagogique n'a pas pu \u00eatre charg\u00e9.",
    "The submission could not be removed from the grading pool.": "La soumission n'a pas pu \u00eatre retir\u00e9e du groupe de notation.",
    "The team \"{team}\" could not be found.": "L'\u00e9quipe \"{team}\" n'a pu \u00eatre trouv\u00e9e.",
    "The timed transcript for the first video file does not appear to be the same as the timed transcript for the second video file.": "La transcription synchronis\u00e9e du premier fichier vid\u00e9o semble diff\u00e9rente de la transcription synchronis\u00e9e du second fichier vid\u00e9o.",
    "The timed transcript for this video on edX is out of date, but YouTube has a current timed transcript for this video.": "La transcription synchronis\u00e9e de cette vid\u00e9o sur EdX est p\u00e9rim\u00e9e, mais YouTube dispose d'une version courante de la transcription de cette vid\u00e9o.",
<<<<<<< HEAD
    "The topic \"{topic}\" could not be found.": "Sujet \"{topic}\" non trouv\u00e9.",
    "The weight of all assignments of this type as a percentage of the total grade, for example, 40. Do not include the percent symbol.": "Poids en pourcentage de la note globale de tous les devoirs de ce type. Ne pas inclure le symbole pourcent. Exemple : 40.",
    "The {cohortGroupName} cohort has been created. You can manually add students to this cohort below.": "La cohorte {cohortGroupName} a \u00e9t\u00e9 cr\u00e9e. Vous pouvez y ajouter manuellement des \u00e9tudiants ci-dessous.",
=======
    "The timer on the right shows the time remaining in the exam.": "La minuterie sur la droite indique le temps restant pour l'examen.",
    "The topic \"{topic}\" could not be found.": "Sujet \"{topic}\" non trouv\u00e9.",
    "The weight of all assignments of this type as a percentage of the total grade, for example, 40. Do not include the percent symbol.": "Poids en pourcentage de la note globale de tous les devoirs de ce type. Ne pas inclure le symbole pourcent. Exemple : 40.",
    "The {cohortGroupName} cohort has been created. You can manually add students to this cohort below.": "La cohorte {cohortGroupName} a \u00e9t\u00e9 cr\u00e9e. Vous pouvez y ajouter manuellement des \u00e9tudiants ci-dessous.",
    "There are currently {stuck_learners} learners in the waiting state, meaning they have not yet met all requirements for Peer Assessment. ": "Il y a {stuck_learners} apprenants dans l'\u00e9tape d'attente, c'est-\u00e0-dire qu'ils n'ont pas encore r\u00e9pondu \u00e0 l'ensemble des demandes de l'\u00e9valuation par les pairs.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "There are invalid keywords in your email. Check the following keywords and try again.": "Votre email contient des mots-clefs invalides. V\u00e9rifiez les mots-clefs suivants et recommencez.",
    "There are no posts in this topic yet.": "Il n'y a pas encore de message pour ce sujet.",
    "There has been a failure to export to XML at least one component. It is recommended that you go to the edit page and repair the error before attempting another export. Please check that all components on the page are valid and do not display any error messages.": "Une erreur est survenue lors de l'export en XML pour au moins un composant. Il est recommand\u00e9 de corriger l'erreur avant de relancer une nouvel export. V\u00e9rifier que tous les composants de la page sont valides et qu'ils n'affichent pas de messages d'erreur.",
    "There has been an error processing your survey.": "Il y a eu une erreur lors du traitement de votre enqu\u00eate.",
    "There has been an error while exporting.": "Il y a eu une erreur lors de l'exportation.",
    "There has been an error with your export.": "Une erreur est survenue lors de l'export.",
    "There is invalid code in your content. Please check to make sure it is valid HTML.": "Votre proposition contient du code non valide. Veuillez v\u00e9rifier que votre contenu est du HTML valide.",
    "There is no email history for this course.": "Il n'y a pas d'historique de courriel pour ce cours",
<<<<<<< HEAD
=======
    "There is no onboarding exam accessible to this user.": "Il n'y a pas d'examen d'int\u00e9gration accessible \u00e0 cet utilisateur.",
    "There is no onboarding exam related to this course id.": "Il n'y a pas d'examen d'int\u00e9gration li\u00e9 \u00e0 cet identifiant de cours.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "There must be at least one group.": "il doit y avoir au moins un groupe.",
    "There must be one cohort to which students can automatically be assigned.": "Au moins une cohorte doit \u00eatre cr\u00e9\u00e9e pour ajouter les \u00e9tudiants en automatique.",
    "There was a problem creating the report. Select \"Create Executive Summary\" to try again.": "Il y a eu un probl\u00e8me lors de la cr\u00e9ation du rapport. S\u00e9lectionnez \"Cr\u00e9ation Sommaire Ex\u00e9cutif\" pour d'essayer de nouveau.",
    "There was an error changing the user's role": "Il a eu une erreur lors du changement de r\u00f4le de cet utilisateur",
    "There was an error during the upload process.": "Une erreur est survenue pendant l'envoi.",
<<<<<<< HEAD
    "There was an error obtaining email content history for this course.": "Il y a eu une erreur lors de l'obtention de l'historique du contenu des e-mails pour ce cours.",
    "There was an error obtaining email task history for this course.": "Une erreur est survenue lors de l'obtention de l'historique des t\u00e2ches de courriel pour ce cours.",
    "There was an error retrieving preview results for this catalog. Please check that your query is correct and try again.": "Il y a eu une erreur lors de la r\u00e9cup\u00e9ration de l'aper\u00e7u des r\u00e9sultats pour ce catalogue. Veuillez v\u00e9rifier que votre requ\u00eate est correcte et essayer de nouveau.",
    "There was an error while unpacking the file.": "Une erreur est survenue pendant la d\u00e9compression du fichier.",
    "There was an error while verifying the file you submitted.": "Une erreur est survenue lors de la v\u00e9rification du fichier que vous avez soumis.",
    "There was an error, try searching again.": "Une erreur est survenue, essayez \u00e0 nouveau.",
    "There were errors reindexing course.": "Des erreurs sont survenues pendant la r\u00e9indexation du cours.",
    "There's already another assignment type with this name.": "Il y a d\u00e9j\u00e0 un type de travail avec ce nom.",
    "These settings include basic information about your account.": "Ces param\u00e8tres comprennent des informations de base \u00e0 propos de votre compte.",
=======
    "There was an error generating the report link.": "Une erreur est survenue lors de la g\u00e9n\u00e9ration du lien du rapport.",
    "There was an error generating your report.": "Une erreur est survenue lors de la g\u00e9n\u00e9ration de votre rapport.",
    "There was an error obtaining email content history for this course.": "Il y a eu une erreur lors de l'obtention de l'historique du contenu des e-mails pour ce cours.",
    "There was an error obtaining email task history for this course.": "Une erreur est survenue lors de l'obtention de l'historique des t\u00e2ches de courriel pour ce cours.",
    "There was an error retrieving preview results for this catalog. Please check that your query is correct and try again.": "Il y a eu une erreur lors de la r\u00e9cup\u00e9ration de l'aper\u00e7u des r\u00e9sultats pour ce catalogue. Veuillez v\u00e9rifier que votre requ\u00eate est correcte et essayer de nouveau.",
    "There was an error when trying to add learners:": [
      "Il y a eu une erreur lors de la tentative d'ajout d'\u00e9tudiants",
      "{numErrors} \u00e9tudiants n'ont pas pu \u00eatre ajout\u00e9s \u00e0 cette cohorte :",
      "{numErrors} \u00e9tudiants n'ont pas pu \u00eatre ajout\u00e9s \u00e0 cette cohorte :"
    ],
    "There was an error while importing the new course to our database.": "Une erreur est survenue pendant l'importation du nouveau cours dans notre base de donn\u00e9es.",
    "There was an error while importing the new library to our database.": "Une erreur a eu lieu pendant l'importation de la nouvelle biblioth\u00e8que.",
    "There was an error while unpacking the file.": "Une erreur est survenue pendant la d\u00e9compression du fichier.",
    "There was an error while verifying the file you submitted.": "Une erreur est survenue lors de la v\u00e9rification du fichier que vous avez soumis.",
    "There was an error with the upload": "Il y a eu une erreur pendant le t\u00e9l\u00e9chargement",
    "There was an error, try searching again.": "Une erreur est survenue, essayez \u00e0 nouveau.",
    "There was an error. Please reload the page and try again.": "Une erreur est survenue. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "There were errors reindexing course.": "Des erreurs sont survenues pendant la r\u00e9indexation du cours.",
    "There's already another assignment type with this name.": "Il y a d\u00e9j\u00e0 un type de travail avec ce nom.",
    "These settings include basic information about your account.": "Ces param\u00e8tres comprennent des informations de base \u00e0 propos de votre compte.",
    "These users could not be added as beta testers because their accounts are not yet activated:": "Ces utilisateurs n'ont pas pu \u00eatre ajout\u00e9 en tant que b\u00eata-testeur car leur comptes n'\u00e9taient pas encore activ\u00e9s\u00a0:",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "These users were not added as beta testers:": "Ces utilisateurs n'ont pas \u00e9t\u00e9 ajout\u00e9s comme b\u00eata-testeurs :",
    "These users were not affiliated with the course so could not be unenrolled:": "Les utilisateurs suivants n'\u00e9tant pas inscrits au cours, ils n\u2019ont pas pu \u00eatre d\u00e9sinscrits\u00a0:",
    "These users were not removed as beta testers:": "Ces utilisateurs n'ont pas pu \u00eatre supprim\u00e9s en tant que b\u00eata-testeurs :",
    "These users were successfully added as beta testers:": "Ces utilisateurs ont \u00e9t\u00e9 ajout\u00e9s comme b\u00eata-testeurs avec succ\u00e8s :",
    "These users were successfully removed as beta testers:": "Ces utilisateurs ont \u00e9t\u00e9 supprim\u00e9s des b\u00eata-testeurs avec succ\u00e8s :",
    "These users will be allowed to enroll once they register:": "Ces \u00e9tudiants seront autoris\u00e9s \u00e0 s'inscrire une fois qu'il se seront enregistr\u00e9s  sur la plateforme :",
    "These users will be enrolled once they register:": "Les utilisateurs suivants seront inscrits d\u00e8s leur enregistrement sur la plate-forme\u00a0:",
    "This Group Configuration is not in use. Start by adding a content experiment to any Unit via the {linkStart}Course Outline{linkEnd}.": "Cette configuration de groupe n'est pas utilis\u00e9e. Commencer par ajouter un contenu d'exp\u00e9rience \u00e0 une unit\u00e9 via le {linkStart}Plan de cours{linkEnd}.",
    "This Group Configuration is used in:": "Cette configuration de groupe est utilis\u00e9e dans :",
<<<<<<< HEAD
    "This action cannot be undone.": "Cette action ne peut pas \u00eatre annul\u00e9e.",
=======
    "This ORA has already been released. Changes will only affect learners making new submissions. Existing submissions will not be modified by this change.": "Ce probl\u00e8me ORA a d\u00e9j\u00e0 \u00e9t\u00e9 publi\u00e9. Les modifications n'affecteront que les apprenants faisant de nouvelles soumissions. Les soumissions existantes ne seront pas modifi\u00e9es par ce changement.",
    "This action cannot be undone.": "Cette action ne peut pas \u00eatre annul\u00e9e.",
    "This action updates the {provider} information for your entire organization.": "Cette action met \u00e0 jour l'information de {provider} pour toute organisation.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "This assessment could not be submitted.": "Cette \u00e9valuation n'a pas pu \u00eatre soumise.",
    "This browser cannot play .mp4, .ogg, or .webm files.": "Ce navigateur ne peut pas lire les fichiers .mp4, .ogg, ou .webm",
    "This catalog's courses:": "Les cours de ce catalogue : ",
    "This certificate has already been activated and is live. Are you sure you want to continue editing?": "Ce certificat a d\u00e9j\u00e0 \u00e9t\u00e9 activ\u00e9 et peut \u00eatre consult\u00e9. \u00cates vous sur de vouloir continuer l'\u00e9dition?",
    "This comment could not be deleted. Refresh the page and try again.": "Ce commentaire ne peut pas \u00eatre effac\u00e9. Rafra\u00eechissez la page et r\u00e9essayez.",
<<<<<<< HEAD
    "This configuration is currently used in content experiments. If you make changes to the groups, you may need to edit those experiments.": "Cette configuration est actuellement utilis\u00e9 dans des exp\u00e9riences de contenu. Si vous apportez des modifications aux groupes, vous devrez peut-\u00eatre modifier ces exp\u00e9riences.",
    "This content group is used in one or more units.": "Ce groupe de contenu est utilis\u00e9 dans une ou plusieurs unit\u00e9s.",
    "This course has automatic cohorting enabled for verified track learners, but cohorts are disabled. You must enable cohorts for the feature to work.": "Ce cours a les cohortes automatiques activ\u00e9es pour les apprenants v\u00e9rifi\u00e9s, mais les cohortes sont d\u00e9sactiv\u00e9es. Vous devez activer les cohortes pour que cette fonctionnalit\u00e9 fonctionne.",
    "This course has automatic cohorting enabled for verified track learners, but the required cohort does not exist. You must create a manually-assigned cohort named '{verifiedCohortName}' for the feature to work.": "Ce cours a les cohortes automatiques activ\u00e9es pour les apprenants v\u00e9rifi\u00e9s, mais la cohorte requise n'existe pas. Vous devez cr\u00e9er manuellement une cohorte nomm\u00e9e '{verifiedCohortName}' pour que cette fonctionnalit\u00e9 fonctionne.",
    "This course uses automatic cohorting for verified track learners. You cannot disable cohorts, and you cannot rename the manual cohort named '{verifiedCohortName}'. To change the configuration for verified track cohorts, contact your edX partner manager.": "Ce cours utilise des cohortes automatiques pour les apprenants v\u00e9rifi\u00e9s. Vous ne pouvez pas d\u00e9sactiver les cohortes, et vous ne pouvez pas renommer la cohorte manuelle nomm\u00e9e'{verifiedCohortName}'. Pour changer la configuration des cohortes v\u00e9rifi\u00e9es,contacter votre gestionnaire de partenariat edX.",
    "This discussion could not be loaded. Refresh the page and try again.": "Cette discussion ne peut \u00eatre t\u00e9l\u00e9charg\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This exam has a time limit associated with it.": "Cet examen est \u00e0 temps limit\u00e9",
    "This feedback could not be submitted.": "Ce commentaire n'a pas pu \u00eatre soumis.",
    "This group controls access to:": "Ce groupe g\u00e8re l'acc\u00e8s \u00e0\u00a0:",
    "This image is for decorative purposes only and does not require a description.": "Cette image est utilis\u00e9e seulement pour la d\u00e9coration et ne n\u00e9cessite pas de description.",
=======
    "This component has validation issues.": "Ce composant a des probl\u00e8mes de validation.",
    "This configuration is currently used in content experiments. If you make changes to the groups, you may need to edit those experiments.": "Cette configuration est actuellement utilis\u00e9 dans des exp\u00e9riences de contenu. Si vous apportez des modifications aux groupes, vous devrez peut-\u00eatre modifier ces exp\u00e9riences.",
    "This content group is used in one or more units.": "Ce groupe de contenu est utilis\u00e9 dans une ou plusieurs unit\u00e9s.",
    "This discussion could not be loaded. Refresh the page and try again.": "Cette discussion ne peut \u00eatre t\u00e9l\u00e9charg\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This exam has a time limit associated with it.": "Cet examen est \u00e0 temps limit\u00e9",
    "This feedback could not be submitted.": "Ce commentaire n'a pas pu \u00eatre soumis.",
    "This file type is not supported. Supported file type is {supportedFileFormat}.": "Ce type de fichier n'est pas pris en charge. Le type de fichier pris en charge est le {supportedFileFormat}.",
    "This grade will be applied to all members of the team. Do you want to continue?": "Cette note sera accord\u00e9e \u00e0 tous les membres de l'\u00e9quipe. Voulez-vous continuer?",
    "This group controls access to:": "Ce groupe g\u00e8re l'acc\u00e8s \u00e0\u00a0:",
    "This group no longer exists. Choose another group or do not restrict access to this unit.": "Ce groupe n'existe plus. Veuillez choisir un autre groupe ou annuler la restriction d'acc\u00e8s \u00e0 cette unit\u00e9.",
    "This image file type is not supported. Supported file types are {supportedFileFormats}.": "Ce type de fichier d'image n'est pas pris en charge. Les types de ficher pris en charge sont les {supportedFileFormats}.",
    "This image is for decorative purposes only and does not require a description.": "Cette image est utilis\u00e9e seulement pour la d\u00e9coration et ne n\u00e9cessite pas de description.",
    "This includes access to {siteName} from your employer\u2019s or university\u2019s system{additionalSiteSpecificDeletionText}.": "Cela inclut l\u2019acc\u00e8s \u00e0 {siteName} \u00e0 partir du syst\u00e8me de votre employeur ou de votre universit\u00e9 {additionalSiteSpecificDeletionText}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "This is the Description of the Group Configuration": "Ceci est la description de la configuration du groupe",
    "This is the Name of the Group Configuration": "Ceci est le nom de la configuration du groupe",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ceci est une liste des \u00ab\u00a0%s\u00a0\u00bb disponibles. Vous pouvez en choisir en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab\u00a0Choisir\u00a0\u00bb entre les deux zones.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ceci est la liste des \u00ab\u00a0%s\u00a0\u00bb choisi(e)s. Vous pouvez en enlever en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab Enlever \u00bb entre les deux zones.",
    "This is the name of the group": "Ceci est le nom du groupe",
    "This learner is currently sharing a limited profile.": "Cet apprenant partage actuellement un profil restreint.",
<<<<<<< HEAD
    "This link will open in a modal window": "Ce lien s'ouvrira dans une nouvelle fen\u00eatre contextuelle",
    "This link will open in a new browser window/tab": "Ce lien s'ouvrira dans une nouvelle fen\u00eatre ou onglet de votre navigateur",
=======
    "This learner will be removed from the team,allowing another learner to take the available spot.": "Cet apprenant sera retir\u00e9 de l'\u00e9quipe, permettant \u00e0 un autre apprenant de prendre la place vacante.",
    "This link will open in a modal window": "Ce lien s'ouvrira dans une nouvelle fen\u00eatre contextuelle",
    "This link will open in a new browser window/tab": "Ce lien s'ouvrira dans une nouvelle fen\u00eatre ou onglet de votre navigateur",
    "This may be happening because of an error with our server or your internet connection. Try refreshing the page or making sure you are online.": "Cet incident vous affecte \u00e0 cause d'une erreur sur notre serveur ou d'un probl\u00e8me de votre connexion internet. Essayez de rafra\u00eechir la page ou v\u00e9rifiez que votre connexion est bien active.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "This page contains information about orders that you have placed with {platform_name}.": "Cette page contient des informations \u00e0 propos des commandes que vous avez pass\u00e9s avec {platform_name}.",
    "This post could not be closed. Refresh the page and try again.": "Ce message ne peut \u00eatre ferm\u00e9. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This post could not be flagged for abuse. Refresh the page and try again.": "Ce message ne peut pas \u00eatre d\u00e9nonc\u00e9 pour abus. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This post could not be pinned. Refresh the page and try again.": "Ce message peut ne pas \u00eatre affich\u00e9. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This post could not be reopened. Refresh the page and try again.": "Ce message ne peut \u00eatre rouvert. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This post could not be unflagged for abuse. Refresh the page and try again.": "La d\u00e9nonciation pour abus envers ce message ne peut \u00eatre annul\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This post could not be unpinned. Refresh the page and try again.": "Ce message peut avoir \u00e9t\u00e9 retir\u00e9. Veuillez actualiser la page et essayer \u00e0 nouveau.",
<<<<<<< HEAD
    "This problem could not be saved.": "Ce probl\u00e8me n'a pas pu \u00eatre enregistr\u00e9.",
    "This problem has been reset.": "Cet exercice a \u00e9t\u00e9 r\u00e9initialis\u00e9.",
=======
    "This post is visible only to %(group_name)s.": "Ce message est visible seulement par %(group_name)s.",
    "This post is visible to everyone.": "Ce message est visible par tous.",
    "This post will be visible only to %(group_name)s.": "Ce message sera visible seulement pour %(group_name)s.",
    "This post will be visible to everyone.": "Ce message sera visible par tous.",
    "This problem could not be saved.": "Ce probl\u00e8me n'a pas pu \u00eatre enregistr\u00e9.",
    "This problem has been reset.": "Cet exercice a \u00e9t\u00e9 r\u00e9initialis\u00e9.",
    "This proctored exam has been released to learners. You may not convert it to another type of special exam. You may revert this subsection back to being a basic exam by selecting 'None', or a timed exam, but you will NOT be able to configure it as a proctored exam in the future.": "Cet examen surveill\u00e9 a \u00e9t\u00e9 mis \u00e0 la disposition des apprenants. Vous ne pouvez pas le convertir en un autre type d&#39;examen sp\u00e9cial. Vous pouvez redonner \u00e0 cette sous-section un examen de base en s\u00e9lectionnant &quot;Aucun&quot; ou un examen chronom\u00e9tr\u00e9, mais vous ne pourrez PAS le configurer en tant qu&#39;examen surveill\u00e9 \u00e0 l&#39;avenir.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "This response could not be marked as an answer. Refresh the page and try again.": "Cette r\u00e9action ne peut pas \u00eatre inscrite en tant que r\u00e9ponse. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This response could not be marked as endorsed. Refresh the page and try again.": "Cette r\u00e9ponse ne peut pas \u00eatre inscrite comme \u00e9tant approuv\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This response could not be saved.": "Cette r\u00e9ponse n'a pas pu \u00eatre enregistr\u00e9e.",
    "This response could not be submitted.": "Cette r\u00e9ponse n'a pas pu \u00eatre soumise.",
    "This response could not be unendorsed. Refresh the page and try again.": "Cette r\u00e9action ne peut pas \u00eatre approuv\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This response could not be unmarked as an answer. Refresh the page and try again.": "Cette r\u00e9action ne peut pas \u00eatre effac\u00e9e en tant que r\u00e9ponse. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This response has been saved but not submitted.": "Cette r\u00e9ponse a \u00e9t\u00e9 enregistr\u00e9e mais n'a pas \u00e9t\u00e9 soumise.",
    "This response has not been saved.": "Cette r\u00e9ponse n'a pas \u00e9t\u00e9 enregistr\u00e9e.",
    "This role requires a divided discussions scheme.": "Ce r\u00f4le requiert un plan de s\u00e9paration des discussions.",
    "This section could not be loaded.": "Cette section n'a pas pu \u00eatre charg\u00e9e.",
    "This short name for the assignment type (for example, HW or Midterm) appears next to assignments on a learner's Progress page.": "Le nom court pour ce type de devoirs (par exemple, HW ou Midterm) apparait \u00e0 c\u00f4t\u00e9 des devoirs sur la page de progression de l'apprenant.",
<<<<<<< HEAD
    "This team does not have any members.": "Cette \u00e9quipe n'a pas de membres.",
    "This team is full.": "Cette \u00e9quipe est pleine.",
    "This vote could not be processed. Refresh the page and try again.": "Impossible de passer au vote. Veuillez actualiser la page et essayer \u00e0 nouveau.",
=======
    "This subsection was released to learners as a proctored exam, but was reverted back to a basic or timed exam. You may not configure it as a proctored exam now. Contact edX Support for assistance.": "Cette sous-section a \u00e9t\u00e9 communiqu\u00e9e aux apprenants en tant qu&#39;examen surveill\u00e9, mais est redevenue un examen de base ou chronom\u00e9tr\u00e9. Vous ne pouvez pas le configurer en tant qu&#39;examen surveill\u00e9 maintenant. Contactez le support edX pour obtenir de l&#39;aide.",
    "This team does not have any members.": "Cette \u00e9quipe n'a pas de membres.",
    "This team is full.": "Cette \u00e9quipe est pleine.",
    "This thread is closed.": "Ce fil est ferm\u00e9",
    "This unit has validation issues.": "Cette unit\u00e9 a des probl\u00e8mes de validation.",
    "This vote could not be processed. Refresh the page and try again.": "Impossible de passer au vote. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "This {parentCategory} has no {childCategory}": "Ce {parentCategory} n'a pas de {childCategory}",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Thumbnail": "Vignette",
    "Thumbnail for {videoName}": "Vignette de {videoName}",
    "Thumbnail view of ": "Aper\u00e7u de ",
    "Time Allotted (HH:MM):": "Temps allou\u00e9 (HH:MM):",
    "Time Sent": "Heure d'envoi",
    "Time Sent:": "Heure d'envoi :",
<<<<<<< HEAD
=======
    "Time Spent On Current Step": "Temps \u00e9coul\u00e9 sur l'\u00e9tape courante",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Time Zone": "Fuseau Horaire",
    "Timed": "Minut\u00e9",
    "Timed Exam": "Examen minut\u00e9",
    "Timed Out": "Temps \u00e9coul\u00e9",
    "Timed Transcript Conflict": "Conflit de transcription synchronis\u00e9e",
    "Timed Transcript Found": "Transcription synchronis\u00e9e trouv\u00e9e",
    "Timed Transcript Uploaded Successfully": "Transcription synchronis\u00e9e import\u00e9e avec succ\u00e8s",
    "Timed Transcript from %(filename)s": "Transcription synchronis\u00e9e pour %(filename)s",
    "Tips on taking a successful photo": "Astuces pour prendre une bonne photo",
    "Title": "Titre",
    "Title ": "Titre",
    "Title of the signatory": "Titre du signataire",
    "Titles more than 100 characters may prevent students from printing their certificate on a single page.": "Les titres de plus de 100 caract\u00e8res peuvent emp\u00eacher les \u00e9tudiants d'imprimer leur certificat sur une seule page.",
<<<<<<< HEAD
    "To be sure all students can access the video, we recommend providing both an .mp4 and a .webm version of your video. Click below to add a URL for another version. These URLs cannot be YouTube URLs. The first listed video that's compatible with the student's computer will play.": "Afin que tous les \u00e9tudiants puisse acc\u00e9der \u00e0 la vid\u00e9o, nous vous recommandons de fournir une version .mp4 ainsi qu'une version .webm de la vid\u00e9o. Cliquer ci-dessous pour ajouter une URL pour une autre version. Les URLs youtube ne sont pas support\u00e9es. La premi\u00e8re vid\u00e9o de la liste compatible avec l'ordinateur de l'\u00e9tudiant sera vue.",
    "To complete the program, you must earn a verified certificate for each course.": "Afin de compl\u00e9ter ce programme, vous devez obtenir un certificat v\u00e9rifi\u00e9 pour chacun de ces cours.",
=======
    "To access the course, select a session.": "Pour acc\u00e9der \u00e0 ce cours, veuillez s\u00e9lectionner une session.",
    "To access the courses available to you through {enterpriseName}, visit the {enterpriseName} dashboard.": "Pour acc\u00e9der aux cours disponibles via {enterpriseName}, visitez le tableau de bord {enterpriseName}.",
    "To be sure all students can access the video, we recommend providing both an .mp4 and a .webm version of your video. Click below to add a URL for another version. These URLs cannot be YouTube URLs. The first listed video that's compatible with the student's computer will play.": "Afin que tous les \u00e9tudiants puisse acc\u00e9der \u00e0 la vid\u00e9o, nous vous recommandons de fournir une version .mp4 ainsi qu'une version .webm de la vid\u00e9o. Cliquer ci-dessous pour ajouter une URL pour une autre version. Les URLs youtube ne sont pas support\u00e9es. La premi\u00e8re vid\u00e9o de la liste compatible avec l'ordinateur de l'\u00e9tudiant sera vue.",
    "To continue learning with this account, sign in below.": "Pour continuer \u00e0 apprendre avec ce compte, connectez-vous en bas.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "To invalidate a certificate for a particular learner, add the username or email address below.": "Pour invalider une attestation pour un apprenant, ajouter le nom d'usager ou l'adresse courriel ci-dessous.",
    "To pass this exam, you must complete the problems in the time allowed.": "Pour r\u00e9ussir l'examen, vous devez r\u00e9pondre aux questions dans le temps imparti.",
    "To receive a certificate, you must also verify your identity before {date}.": "Pour recevoir un certificat, vous devez aussi valider votre identit\u00e9 avant le {date}.",
    "To receive a certificate, you must also verify your identity.": "Pour recevoir un certificat, vous devez aussi valider votre identit\u00e9.",
    "To receive credit for problems, you must select \"Submit\" for each problem before you select \"End My Exam\".": "Pour recevoir des cr\u00e9dits pour votre probl\u00e8me, cliquez sur \u00ab\u00a0Soumettre\u00a0\u00bb pour chaque exercice avant de s\u00e9lectionner \u00ab\u00a0Terminer mon examen\u00a0\u00bb.",
<<<<<<< HEAD
    "To share your certificate on Mozilla Backpack, you must first have a Backpack account. Complete the following steps to add your certificate to Backpack.": "Pour partager votre attestation sur Mozilla Backpack, vous devez d'abord avoir un compte Bacpack. Compl\u00e9ter les \u00e9tapes suivantes pour ajouter votre attestation \u00e0 Backpack.",
    "To take a successful photo, make sure that:": "Pour prendre une bonne photo, assurez-vous que: ",
    "To verify your identity, you need a webcam and a government-issued photo ID.": "Pour valider votre identit\u00e9, vous devez poss\u00e9der une cam\u00e9ra et une pi\u00e8ce d'identit\u00e9 avec photo.",
    "Today": "Aujourd'hui",
=======
    "To review learner cohort assignments or see the results of uploading a CSV file, download course profile information or cohort results on the {link_start}Data Download{link_end} page.": "Pour revoir la r\u00e9partition des \u00e9tudiants entre les cohortes ou voir les r\u00e9sultats d'un fichier CSV charg\u00e9, veuillez t\u00e9l\u00e9charger l'information du profile du cours ou des r\u00e9sultats de la cohorte sur la page de {link_start}T\u00e9l\u00e9chargement des donn\u00e9es{link_end}.",
    "To share your certificate on Mozilla Backpack, you must first have a Backpack account. Complete the following steps to add your certificate to Backpack.": "Pour partager votre attestation sur Mozilla Backpack, vous devez d'abord avoir un compte Bacpack. Compl\u00e9ter les \u00e9tapes suivantes pour ajouter votre attestation \u00e0 Backpack.",
    "To take a successful photo, make sure that:": "Pour prendre une bonne photo, assurez-vous que: ",
    "To take the photo of your face, click on the camera button {icon}. If you need to try again, click 'Retake Photo'.": "Pour prendre la photo de votre visage, cliquez sur le bouton de la cam\u00e9ra {icon}. Si vous devez recommencer, cliquez sur 'Reprendre la photo'.",
    "To verify your identity, you need a webcam and a government-issued photo ID.": "Pour valider votre identit\u00e9, vous devez poss\u00e9der une cam\u00e9ra et une pi\u00e8ce d'identit\u00e9 avec photo.",
    "Today": "Aujourd'hui",
    "Toggle Account Password (Usable/Unusable)": "Basculer le mot de passe du compte (utilisable/inutilisable)",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Toggle Notifications Setting": "Changer les param\u00e8tres des notifications",
    "Tomorrow": "Demain",
    "Tools": "Outils",
    "Top": "Haut",
    "Topic": "Sujet",
<<<<<<< HEAD
=======
    "Topic area": "Sujet",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Topics": "Sujets",
    "Total": "Total",
    "Total Number": "Nombre total",
    "Total Responses": "R\u00e9ponses total",
    "Training": "Entrainement",
<<<<<<< HEAD
    "Transcript Languages": "Langues de la transcription",
=======
    "Transcript Fidelity": "Fid\u00e9lit\u00e9 de transcription",
    "Transcript Languages": "Langues de la transcription",
    "Transcript Provider": "Fournisseur de transcription",
    "Transcript Turnaround": "D\u00e9lai d'ex\u00e9cution des transcriptions",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Transcript will be displayed when you start playing the video.": "La transcription sera affich\u00e9e au moment o\u00f9 vous d\u00e9marrerez la lecture de la vid\u00e9o.",
    "Transcripts": "Transcriptions",
    "Try the transaction again in a few minutes.": "R\u00e9essayez la transaction dans quelques minutes.",
    "Try using a different browser, such as Google Chrome.": "Essayez un navigateur diff\u00e9rent, Google Chrome par exemple.",
    "Turn off transcripts": "D\u00e9sactiver la transcription",
    "Turn on closed captioning": "Afficher les sous-titres",
    "Turn on transcripts": "Activer la transcription",
    "Type": "Type",
    "Type in a URL or use the \"Choose File\" button to upload a file from your machine. (e.g. 'http://example.com/img/clouds.jpg')": "Saisissez l'URL ou utilisez le bouton \"Choisir Fichier\" pour charger un fichier provenant de votre machine. (exemple 'http://example.com/img/clouds.jpg')",
    "Type into this box to filter down the list of available %s.": "\u00c9crivez dans cette zone pour filtrer la liste des \u00ab\u00a0%s\u00a0\u00bb disponibles.",
    "URL": "URL",
<<<<<<< HEAD
    "Unable to load": "Chargement impossible",
    "Unable to submit application": "Impossible de soumettre votre demande",
=======
    "Unable to delete account": "Impossible de supprimer le compte",
    "Unable to determine whether we should give you a refund because of System Error. Please try again later.": "Une erreur de syst\u00e8me nous emp\u00eache de d\u00e9terminer si vous avez ou non droit \u00e0 un remboursement. Veuillez r\u00e9essayer plus tard.",
    "Unable to get report generation status.": "Impossible d'obtenir l'\u00e9tat de la g\u00e9n\u00e9ration de rapport.",
    "Unable to load": "Chargement impossible",
    "Unable to submit application": "Impossible de soumettre votre demande",
    "Unable to submit request to generate report.": "Impossible de soumettre la requ\u00eate de g\u00e9n\u00e9ration de rapport.",
    "Unable to update settings": "Impossible de mettre \u00e0 jours les param\u00e8tres",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Underline": "Souligner",
    "Undo": "Annule",
    "Undo (Ctrl+Z)": "Annuler (Ctrl+Z)",
    "Undo Changes": "Annuler les modifications",
<<<<<<< HEAD
    "Undo moving": "Annuler le d\u00e9placement",
    "Unexpected server error.": "Erreur serveur inattendue. ",
=======
    "Undo move": "Annuler le d\u00e9placement",
    "Undo moving": "Annuler le d\u00e9placement",
    "Unendorse": "Ne plus approuver",
    "Unexpected server error.": "Erreur serveur inattendue. ",
    "Unfollow": "Ne plus suivre",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Ungraded": "Non not\u00e9",
    "Ungraded Practice Exam": "Examen d'entrainement non not\u00e9",
    "Unit": "Unit\u00e9",
    "Unit Access": "Acc\u00e8s \u00e0 l'unit\u00e9",
    "Unit Name": "Nom de l'unit\u00e9",
    "Unit Visibility": "Visibilit\u00e9 de l'unit\u00e9",
    "Units": "Unit\u00e9s",
    "Unknown": "Inconnu",
    "Unknown username: {user}": "Nom d'utilisateur inconnu : {user}",
    "Unlink This Account": "Dissocier votre compte",
    "Unlink your {accountName} account": "Dissociez votre compte {accountName}",
    "Unlinking": "Dissocier",
<<<<<<< HEAD
    "Unmute": "Remettre le son",
    "Unnamed Option": "Option sans nom",
    "Unpublished changes to content that will release in the future": "Modifications non publi\u00e9es dans les contenus qui seront diffus\u00e9es ult\u00e9rieurement",
    "Unpublished changes to live content": "Modifications non publi\u00e9es dans les contenus actifs",
    "Unpublished units will not be released": "Les unit\u00e9s non publi\u00e9es ne seront pas diffus\u00e9es.",
    "Unscheduled": "Non programm\u00e9",
    "Update": "Mettre \u00e0 jour",
    "Update team.": "Mettre l'\u00e9quipe \u00e0 jour.",
    "Updating Tags": "Mise \u00e0 jour des \u00e9tiquettes",
    "Updating with latest library content": "Mise \u00e0 jour des derniers ajouts \u00e0 la biblioth\u00e8que",
=======
    "Unmark as Answer": "Ne plus marquer comme R\u00e9ponse",
    "Unmute": "Remettre le son",
    "Unnamed Option": "Option sans nom",
    "Unpin": "Ne plus \u00e9pingler",
    "Unpublished changes to content that will release in the future": "Modifications non publi\u00e9es dans les contenus qui seront diffus\u00e9es ult\u00e9rieurement",
    "Unpublished changes to live content": "Modifications non publi\u00e9es dans les contenus actifs",
    "Unpublished units will not be released": "Les unit\u00e9s non publi\u00e9es ne seront pas diffus\u00e9es.",
    "Unreport": "Ne plus d\u00e9noncer",
    "Unscheduled": "Non programm\u00e9",
    "Update": "Mettre \u00e0 jour",
    "Update Settings": "Mettre \u00e0 jour les param\u00e8tres",
    "Update comment": "Mettre \u00e0 jour le commentaire",
    "Update post": "Mettre \u00e0 jour le message",
    "Update response": "Mettre \u00e0 jour la r\u00e9ponse",
    "Update team.": "Mettre l'\u00e9quipe \u00e0 jour.",
    "Updating Tags": "Mise \u00e0 jour des \u00e9tiquettes",
    "Updating with latest library content": "Mise \u00e0 jour des derniers ajouts \u00e0 la biblioth\u00e8que",
    "Upgrade All Remaining Courses (": "Mettre \u00e0 jour tous les cours restant (",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Upgrade Deadline": "D\u00e9lai de mise \u00e0 niveau",
    "Upgrade to Verified": "Suivre pour obtenir un Certificat",
    "Upgrade to a Verified Certificate for {courseName}": "Mettre \u00e0 niveau vers une certificat v\u00e9rifi\u00e9 pour {courseName}",
    "Upload": "Envoyer",
    "Upload File": "Charger un fichier",
    "Upload File and Assign Students": "Charger le fichier et associer les \u00e9tudiants",
<<<<<<< HEAD
=======
    "Upload Memberships": "Charger des membres",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Upload New .srt Transcript": "Envoyer une nouvelle transcription .srt",
    "Upload New File": "T\u00e9l\u00e9verser un nouveau fichier",
    "Upload New Transcript": "Envoyer une nouvelle transcription",
    "Upload PDF": "Charger un PDF",
    "Upload Photo": "Envoyer la photo",
    "Upload Signature Image": "Charger l'image de signature",
<<<<<<< HEAD
    "Upload a CSV file": "Envoyez un fichier CSV",
    "Upload a comma separated values (.csv) file that contains the usernames or email addresses of learners who have been given exceptions. Include the username or email address in the first comma separated field. You can include an optional note describing the reason for the exception in the second comma separated field.": "Envoyez un fichier de valeurs s\u00e9par\u00e9es par des virgules (.csv) qui continent les noms d'utilisateurs ou les adresses courriels des apprenants qui ont obtenu une d\u00e9rogation. Inclure le nom d'utilisateur ou l'adresse courriel dans le premier champ. Vous pouvez inclure une note optionnelle d\u00e9crivant le motif pour cette d\u00e9rogation dans le second champ.",
=======
    "Upload Videos": "Charger les vid\u00e9os",
    "Upload a CSV file": "Envoyez un fichier CSV",
    "Upload a comma separated values (.csv) file that contains the usernames or email addresses of learners who have been given exceptions. Include the username or email address in the first comma separated field. You can include an optional note describing the reason for the exception in the second comma separated field.": "Envoyez un fichier de valeurs s\u00e9par\u00e9es par des virgules (.csv) qui continent les noms d'utilisateurs ou les adresses courriels des apprenants qui ont obtenu une d\u00e9rogation. Inclure le nom d'utilisateur ou l'adresse courriel dans le premier champ. Vous pouvez inclure une note optionnelle d\u00e9crivant le motif pour cette d\u00e9rogation dans le second champ.",
    "Upload a new PDF to \u201c<%- name %>\u201d": "Charger un nouveau PDF en \u201c<%- name %>\u201d",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Upload an image": "Charger une image",
    "Upload an image or capture one with your web or phone camera.": "T\u00e9l\u00e9chargez une image ou capturez-en une avec votre webcam ou l'appareil photo de votre t\u00e9l\u00e9phone portable",
    "Upload completed": "Chargement termin\u00e9",
    "Upload completed for video {fileName}": "T\u00e9l\u00e9chargement complet pour la vid\u00e9o {fileName}",
    "Upload failed": "Le chargement a \u00e9chou\u00e9",
    "Upload failed for video {fileName}": "T\u00e9l\u00e9chargement \u00e9chou\u00e9 de la vid\u00e9o {fileName}",
    "Upload instructor image.": "Charger l'image de l\u2019instructeur",
    "Upload is in progress. To avoid errors, stay on this page until the process is complete.": " D\u00e9p\u00f4t de fichier en cours. Pour \u00e9viter toute erreur, restez sur cette page jusqu'\u00e0 la fin du traitement.",
    "Upload signature image.": "Charger l'image de signature.",
<<<<<<< HEAD
=======
    "Upload translation": "Charger une traduction",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Upload your banner image.": "Envoyez l'image de votre banni\u00e8re.",
    "Upload your course image.": "Envoyez votre image de cours.",
    "Upload your first asset": "T\u00e9l\u00e9versez votre premi\u00e8re ressource",
    "Upload your video thumbnail image.": "Chargez votre image de vignette vid\u00e9o.",
    "Uploaded file issues. Click on \"+\" to view.": "Liste des fichiers envoy\u00e9s. Cliquez sur \"+\" pour voir.",
    "Uploading": "Chargement en cours",
    "Upper Alpha": "Capitales alphanum\u00e9riques",
    "Upper Roman": "Capitale Romain",
    "Upset Learner": "Apprenant Fach\u00e9",
    "Url": "Url",
    "Use Current Transcript": "Utiliser la transcription courante",
<<<<<<< HEAD
    "Use a practice proctored exam to introduce learners to the proctoring tools and processes. Results of a practice exam do not affect a learner's grade.": "Utilisez un examen de pratique surveill\u00e9 afin d'introduire les apprenants au processus et aux outils de surveillance. Les r\u00e9sultats d'un examen de pratique ne comptent pas pour la note finale de l'\u00e9tudiant.",
    "Use a timed exam to limit the time learners can spend on problems in this subsection. Learners must submit answers before the time expires. You can allow additional time for individual learners through the Instructor Dashboard.": "Utiliser un examen minut\u00e9 pour limiter le temps allou\u00e9 aux participants pour r\u00e9pondre aux exercices de cette sous-section. Les participants doivent soumettre leurs r\u00e9ponses avant la fin du temps allou\u00e9. Vous pouvez allouer du temps suppl\u00e9mentaire \u00e0 des participant depuis l'onglet Enseignant.",
    "Use as a Prerequisite": "Utilis\u00e9 comme Pr\u00e9-requis",
    "Use my institution/campus credentials": "Utiliser mes informations institution/campus",
    "Use the All Topics menu to find specific topics.": "Utilisez le menu 'Tous les sujets' pour trouver un sujet sp\u00e9cific",
=======
    "Use Onboarding to introduce learners to proctoring, verify their identity, and create an onboarding profile. Learners must complete the onboarding profile step prior to taking a proctored exam. Profile reviews take 2+ business days.": "Utilisez l'Accueil pour introduire les apprenants \u00e0 la surveillance des examens, v\u00e9rifier leur identit\u00e9 et cr\u00e9er un profil de d\u00e9part. Les apprenants doivent terminer cette \u00e9tape de cr\u00e9ation de profil avant de pouvoir participer \u00e0 un examen surveill\u00e9. La validation des profils prend au moins 2 jours ouvrables. ",
    "Use a practice proctored exam to introduce learners to the proctoring tools and processes. Results of a practice exam do not affect a learner's grade.": "Utilisez un examen de pratique surveill\u00e9 afin d'introduire les apprenants au processus et aux outils de surveillance. Les r\u00e9sultats d'un examen de pratique ne comptent pas pour la note finale de l'\u00e9tudiant.",
    "Use a timed exam to limit the time learners can spend on problems in this subsection. Learners must submit answers before the time expires. You can allow additional time for individual learners through the Instructor Dashboard.": "Utiliser un examen minut\u00e9 pour limiter le temps allou\u00e9 aux participants pour r\u00e9pondre aux exercices de cette sous-section. Les participants doivent soumettre leurs r\u00e9ponses avant la fin du temps allou\u00e9. Vous pouvez allouer du temps suppl\u00e9mentaire \u00e0 des participant depuis l'onglet Enseignant.",
    "Use as a Prerequisite": "Utilis\u00e9 comme Pr\u00e9-requis",
    "Use bookmarks to help you easily return to courseware pages. To bookmark a page, click \"Bookmark this page\" under the page title.": "Utilisez les favoris pour vous aider \u00e0 revenir facilement aux pages de cours. Pour ajouter un signet, cliquez sur \u00ab\u00a0Ajouter cette page aux favoris\u00a0\u00bb sous le titre de la page.",
    "Use cohorts as the basis for dividing discussions. All learners, regardless of cohort, see the same discussion topics, but within divided topics, only members of the same cohort see and respond to each others\u2019 posts. ": "Utilisez les cohortes comme base de segmentation des discussions. Tous les \u00e9tudiants, peu importe leur cohorte, voient les m\u00eames sujets de discussion. Cependant, dans le cas de sujets s\u00e9par\u00e9s, seuls les membres d'une m\u00eame cohorte peuvent voir et r\u00e9pondre aux messages des autres.",
    "Use enrollment tracks as the basis for dividing discussions. All learners, regardless of their enrollment track, see the same discussion topics, but within divided topics, only learners who are in the same enrollment track see and respond to each others\u2019 posts.": "Utilisez les parcours d'inscription comme base pour segmenter les discussions. Tous les \u00e9tudiants, peu importe leur parcours d'inscription, peuvent voir les m\u00eames sujets de discussion. Cependant, dans le cas des sujets s\u00e9par\u00e9s, seuls les \u00e9tudiants appartenant au m\u00eame parcours d'inscription peuvent voir les messages des autres et y r\u00e9pondre entre eux.",
    "Use my institution/campus credentials": "Utiliser mes informations institution/campus",
    "Use my university info": "Utiliser mes informations d'universit\u00e9",
    "Use the All Topics menu to find specific topics.": "Utilisez le menu 'Tous les sujets' pour trouver un sujet sp\u00e9cific",
    "Use the Retake Photo button if you are not pleased with your photo": "Utilisez le bouton \"Reprendre la photo\" si vous n'\u00eates pas satisfait de votre photo",
    "Use your webcam to take a photo of your ID.": "Utilisez votre webcam pour prendre une photo de votre pi\u00e8ce d'identit\u00e9.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Use your webcam to take a photo of your face. We will match this photo with the photo on your ID.": "Utiliser votre webcam pour prendre une photo de votre visage, afin que nous puissions la comparer avec celle de votre pi\u00e8ce d'identit\u00e9.",
    "Used": "Utilis\u00e9",
    "Used in {count} location": [
      "Utilis\u00e9 dans {count} emplacement",
<<<<<<< HEAD
      "Utilis\u00e9 dans {count} emplacements"
    ],
    "User Email": "Email de l'utilisateur",
=======
      "Utilis\u00e9 dans {count} emplacements",
      "Utilis\u00e9 dans {count} emplacements"
    ],
    "User Email": "Email de l'utilisateur",
    "User lookup failed": "La recherche d'utilisateurs a \u00e9chou\u00e9",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Username": "Nom d'utilisateur",
    "Username or email address": "Nom d'utilisateur ou adresse email",
    "Users must create and activate their account before they can be promoted to beta tester.": "Les utilisateurs doivent cr\u00e9er et activer leur compte avant de pouvoir devenir des b\u00eata-testeurs.",
    "V Align": "Alignement Vertical",
    "Valid": "Valide",
    "Validation Error": "Erreur de validation",
    "Validation Error While Saving": "Erreur de validation lors de la sauvegarde",
    "Verification Checkpoint": "V\u00e9rification interm\u00e9diaire",
    "Verification Deadline": "Date limite de v\u00e9rification",
    "Verification checkpoint to be completed": "Point de contr\u00f4le de v\u00e9rification \u00e0 \u00eatre compl\u00e9t\u00e9",
    "Verified": "V\u00e9rifi\u00e9",
    "Verified Certificate": "Certificat v\u00e9rifi\u00e9",
    "Verified Certificate for {courseName}": "Certificat v\u00e9rifi\u00e9 pour {courseName}",
    "Verified Certificate upgrade": "Passer \u00e0 un certificat v\u00e9rifi\u00e9",
    "Verified Status": "Statut v\u00e9rifi\u00e9",
    "Verified mode price": "Prix du mode v\u00e9rifi\u00e9",
<<<<<<< HEAD
=======
    "Version": "Version",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Vertical space": "Espace Vertical",
    "Very loud": "Tr\u00e8s fort",
    "Very low": "Tr\u00e8s faible",
    "Video Capture Error": "Erreur de capture vid\u00e9o.",
    "Video ID": "Identifiant de la vid\u00e9o",
<<<<<<< HEAD
    "Video duration is {humanizeDuration}": "La vid\u00e9o dure {humanizeDuration}",
    "Video ended": "Vid\u00e9o termin\u00e9e",
    "Video image upload started": "D\u00e9marrage du chargement de l'image de la vid\u00e9o",
    "Video position": "Position de la vid\u00e9o",
=======
    "Video Source Language": "Langue de vid\u00e9o source",
    "Video Status": "\u00c9tat de la vid\u00e9o",
    "Video duration is {humanizeDuration}": "La vid\u00e9o dure {humanizeDuration}",
    "Video ended": "Vid\u00e9o termin\u00e9e",
    "Video image upload completed": "Chargement de l'image de la vid\u00e9o termin\u00e9",
    "Video image upload started": "D\u00e9marrage du chargement de l'image de la vid\u00e9o",
    "Video position": "Position de la vid\u00e9o",
    "Video position. Press space to toggle playback": "Position de la vid\u00e9o. Appuyez sur la barre d'espace pour basculer en mode lecture en boucle",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Video speed: ": "Vitesse de lecture de la vid\u00e9o :",
    "Video transcript": "Transcription de la vid\u00e9o",
    "View": "Voir",
    "View Archived Course": "Voir le cours archiv\u00e9",
    "View Cohort": "Voir la cohorte",
    "View Course": "Voir le cours",
<<<<<<< HEAD
    "View Live": "Aper\u00e7u r\u00e9el",
    "View all errors": "Voir toutes les erreurs",
    "View child items": "Voir les \u00e9l\u00e9ments enfants",
    "View my exam": "Voir mon examen",
    "Viewing %s course": [
      "Voir %s cours",
      "Voir %s cours"
    ],
    "Visibility": "Visibilit\u00e9",
=======
    "View Current Team Memberships": "Voir la composition actuelle de l'\u00e9quipe",
    "View Live": "Aper\u00e7u r\u00e9el",
    "View Program Record": "Voir le Dossier de programme",
    "View Report": "Afficher le rapport",
    "View Teams in the {topic_name} Topic": "Voir les \u00c9quipes du sujet {topic_name}",
    "View all errors": "Voir toutes les erreurs",
    "View and grade responses": "Voir et noter les r\u00e9ponses",
    "View child items": "Voir les \u00e9l\u00e9ments enfants",
    "View discussion": "Afficher la discussion",
    "View my exam": "Voir mon examen",
    "View {span_start} {team_name} {span_end}": "Voir {span_start} {team_name} {span_end}",
    "Viewing %s course": [
      "Voir %s cours",
      "Voir %s cours",
      "Voir %s cours"
    ],
    "Visibility": "Visibilit\u00e9",
    "Visible to": "Visible par",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Visible to Staff Only": "Visible par l'\u00e9quipe p\u00e9dagogique seulement",
    "Visual aids": "Aide Visuelle",
    "Volume": "Volume",
    "Vote for good posts and responses": "Votez pour les messages int\u00e9ressants et les bonnes r\u00e9ponses",
<<<<<<< HEAD
    "Waiting": "En attente",
    "Warning": "Attention",
=======
    "Vote for this post,": "Voter pour ce message, ",
    "Waiting": "En attente",
    "Want to make edX better for everyone?": "Vous voulez rendre edX meilleur pour tout le monde ?",
    "Warning": "Avertissement",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Warnings": "Avertissements",
    "We ask you to activate your account to ensure it is really you creating the account and to prevent fraud.": "Nous vous demandons d'activer votre compte pour nous assurer que c'est bien vous qui cr\u00e9er le compte et afin de pr\u00e9venir la fraude.",
    "We couldn't create your account.": "Nous n'avons pas pu cr\u00e9er votre compte.",
    "We couldn't find any results for \"%s\".": "Nous ne trouvons pas de r\u00e9sultat pour \"%s\".",
    "We couldn't sign you in.": "Nous n'avons pas pu vous connecter.",
<<<<<<< HEAD
    "We just need a little more information before you start learning with %(platformName)s.": "Nous avons juste besoin d'un peu plus d'informations avant que vous commenciez votre apprentissage avec %(platformName)s.",
    "We use the highest levels of security available to encrypt your photo and send it to our authorization service for review. Your photo and information are not saved or visible anywhere on %(platformName)s after the verification process is complete.": "Nous utilisons le niveau de s\u00e9curit\u00e9 le plus \u00e9lev\u00e9 pour chiffrer votre photo et l'envoyer \u00e0 notre service d\u2019autorisation afin d'y \u00eatre examin\u00e9e. Votre photo et vos informations ne sont pas enregistr\u00e9es, et ils ne sont pas visible nulle part sur %(platformName)s apr\u00e8s  l'accomplissement de processus de v\u00e9rification.",
    "We've encountered an error. Refresh your browser and then try again.": "Nous avons rencontr\u00e9 une erreur. Rafra\u00eechissez votre navigateur puis r\u00e9essayer.",
    "We've sent a confirmation message to {new_email_address}. Click the link in the message to update your email address.": "Un message de confirmation a \u00e9t\u00e9 envoy\u00e9 \u00e0 {new_email_address}. Cliquer le lien dans le message afin de mettre \u00e0 jour votre adresse email.",
=======
    "We have encountered an error. Refresh your browser and then try again.": "Nous avons rencontr\u00e9 une erreur. Veuillez actualiser votre navigateur puis r\u00e9essayer.",
    "We have received your information and are verifying your identity. You will see a message on your dashboard when the verification process is complete (usually within 5-7 days). In the meantime, you can still access all available course content.": "Nous avons re\u00e7u vos informations et v\u00e9rifions votre identit\u00e9. Vous verrez un message sur votre Tableau de bord une fois termin\u00e9 le processus de v\u00e9rification (g\u00e9n\u00e9ralement dans les 5-7 jours). Entretemps, vous pourrez toujours acc\u00e9der au contenu de tous les cours disponibles.",
    "We just need a little more information before you start learning with %(platformName)s.": "Nous avons juste besoin d'un peu plus d'informations avant que vous commenciez votre apprentissage avec %(platformName)s.",
    "We securely encrypt your photo and send it to our authorization service for review. Your photo and information are not saved or visible anywhere on %(platformName)s after the verification process is complete.": "Nous chiffrons votre photo en toute s\u00e9curit\u00e9 et l'envoyons \u00e0 notre service d'autorisation pour v\u00e9rification. Votre photo et les informations ne sont pas enregistr\u00e9es ou visibles ailleurs sur  %(platformName)s une fois le processus de v\u00e9rification termin\u00e9.",
    "We use the highest levels of security available to encrypt your photo and send it to our authorization service for review. Your photo and information are not saved or visible anywhere on %(platformName)s after the verification process is complete.": "Nous utilisons le niveau de s\u00e9curit\u00e9 le plus \u00e9lev\u00e9 pour chiffrer votre photo et l'envoyer \u00e0 notre service d\u2019autorisation afin d'y \u00eatre examin\u00e9e. Votre photo et vos informations ne sont pas enregistr\u00e9es, et ils ne sont pas visible nulle part sur %(platformName)s apr\u00e8s  l'accomplissement de processus de v\u00e9rification.",
    "We use your verification photos to confirm your identity and ensure the validity of your certificate.": "Nous utilisons vos photos de v\u00e9rification pour confirmer votre identit\u00e9 et assurer la validit\u00e9 de votre certificat.",
    "We're sorry to see you go! Your account will be deleted shortly.": "Nous sommes d\u00e9sol\u00e9s de vous voir partir ! Votre compte sera supprim\u00e9 d'ici peu.",
    "We're sorry, there was an error": "D\u00e9sol\u00e9, il y a eu une erreur",
    "We've detected errors on the following tabs: ": "Nous avons d\u00e9tect\u00e9 des erreurs dans les onglets suivants\u00a0:",
    "We've encountered an error. Refresh your browser and then try again.": "Nous avons rencontr\u00e9 une erreur. Rafra\u00eechissez votre navigateur puis r\u00e9essayer.",
    "We've sent a confirmation message to {new_email_address}. Click the link in the message to update your email address.": "Un message de confirmation a \u00e9t\u00e9 envoy\u00e9 \u00e0 {new_email_address}. Cliquer le lien dans le message afin de mettre \u00e0 jour votre adresse email.",
    "We've sent a confirmation message to {new_secondary_email_address}. Click the link in the message to update your secondary email address.": "Un message de confirmation a \u00e9t\u00e9 envoy\u00e9 \u00e0 {new_secondary_email_address}. Cliquez sur le lien dans le message pour mettre \u00e0 jour votre adresse email secondaire.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "We've sent a message to {email}. Click the link in the message to reset your password. Didn't receive the message? Contact {anchorStart}technical support{anchorEnd}.": "Nous avons envoy\u00e9 un {email} \u00e0 email. Cliquez sur le lien dans le message pour r\u00e9initialiser votre mot de passe. Vous n'avez pas re\u00e7u de message ?  Contactez le {anchorStart} support technique{anchorEnd}.",
    "Web:": "Web :",
    "Webcam": "Webcam",
    "Weight of Total Grade": "Valeur de l'ensemble du grade",
    "We\u2019re sorry to see you go!": "Nous sommes d\u00e9sol\u00e9s de vous voir partir !",
    "What You Need for Verification": "Ce qui est n\u00e9c\u00e9saire pour la v\u00e9rification",
<<<<<<< HEAD
    "What does %(platformName)s do with this photo?": "Que fait %(platformName)s avec cette photo ?",
    "What does this mean?": "Qu'est ce que cela signifie?",
    "What's Your Next Accomplishment?": "Quel est votre prochain accomplissement?",
    "When learners submit an answer to an assessment, they immediately see whether the answer is correct or incorrect, and the score received.": "Lorsque les \u00e9tudiants r\u00e9pondent \u00e0 une \u00e9valuation, ils voient imm\u00e9diatement si la r\u00e9ponse est juste ou fausse ainsi que leur note. ",
    "Which timed transcript would you like to use?": "Quelle transcription synchronis\u00e9e souhaitez-vous utiliser ?",
    "Whole words": "Mots entiers",
    "Why activate?": "Pourquoi activer?",
    "Why does %(platformName)s need my photo?": "Pourquoi %(platformName)s a besoin de ma photo ?",
=======
    "What can we help you with, {username}?": "A quoi pouvons-nous vous \u00eatre utile, {username}?",
    "What does %(platformName)s do with this photo?": "Que fait %(platformName)s avec cette photo ?",
    "What does this mean?": "Qu'est ce que cela signifie?",
    "What if I can't see the camera image, or if I can't see my photo do determine which side is visible?": "Que se passe-t-il si je ne peux pas voir l'image de l'appareil photo ou si je ne peux pas voir ma photo pour d\u00e9terminer quel c\u00f4t\u00e9 est visible ?",
    "What if I have difficulty holding my ID in position relative to the camera?": "Que faire si j'ai des difficult\u00e9s \u00e0 tenir ma carte d'identit\u00e9 en position par rapport \u00e0 la cam\u00e9ra ?",
    "What if I have difficulty holding my head in position relative to the camera?": "Que faire si j'ai des difficult\u00e9s \u00e0 maintenir ma t\u00eate en position par rapport \u00e0 la cam\u00e9ra ?",
    "What industry do you currently work in?": "Dans quel secteur travaillez-vous actuellement?",
    "What industry do you want to work in?": "Dans quel secteur souhaitez-vous travailler?",
    "What is the highest level of education that any of your parents or guardians have achieved?": "Quel est le niveau de scolarit\u00e9 le plus \u00e9lev\u00e9 que l'un de vos parents ou tuteurs ait atteint?",
    "What is the highest level of education that you have achieved so far?": "Quel est le niveau d'\u00e9ducation le plus \u00e9lev\u00e9 que vous ayez atteint jusqu'\u00e0 pr\u00e9sent?",
    "What was the total combined income, during the last 12 months, of all members of your family? ": "Quel a \u00e9t\u00e9 le revenu total combin\u00e9, au cours des 12 derniers mois, de tous les membres de votre famille?",
    "What's Your Next Accomplishment?": "Quel est votre prochain accomplissement?",
    "When learners submit an answer to an assessment, they immediately see whether the answer is correct or incorrect, and the score received.": "Lorsque les \u00e9tudiants r\u00e9pondent \u00e0 une \u00e9valuation, ils voient imm\u00e9diatement si la r\u00e9ponse est juste ou fausse ainsi que leur note. ",
    "When your face is in position, use the Take Photo button {icon} below to take your photo.": "Lorsque votre visage est en position, utilisez le bouton \"Prendre une photo\" {icon} ci-dessous pour prendre votre photo.",
    "Which timed transcript would you like to use?": "Quelle transcription synchronis\u00e9e souhaitez-vous utiliser ?",
    "While our support team is happy to assist with the edX platform, the course staff has the expertise for specific assignment questions, grading or the proper procedures in each course. Please post all course related questions within the Discussion Forum where the Course Staff can directly respond.": "Bien que notre \u00e9quipe d'assistance soit heureuse de vous aider avec la plateforme edX, le personnel du cours poss\u00e8de l'expertise n\u00e9cessaire pour r\u00e9pondre \u00e0 des questions sp\u00e9cifiques sur les devoirs, la notation ou les proc\u00e9dures appropri\u00e9es dans chaque cours. Veuillez poster toutes les questions relatives au cours dans le forum de discussion o\u00f9 le personnel du cours peut r\u00e9pondre directement.",
    "Whole words": "Mots entiers",
    "Why activate?": "Pourquoi activer?",
    "Why does %(platformName)s need my photo?": "Pourquoi %(platformName)s a besoin de ma photo ?",
    "Why does edX collect this information?": "Pourquoi edX collecte-t-il ces informations ?",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Width": "Largeur",
    "Will Be Visible To:": "Sera visible pour :",
    "Words: {0}": "Mots : {0}",
    "Would you like to sign in using your %(providerName)s credentials?": "Souhaitez vous vous connecter avec %(providerName)s ?",
    "Year of Birth": "Ann\u00e9e de naissance",
<<<<<<< HEAD
    "Yes, allow edits to the active Certificate": "Oui, permettre les modifications du certificat actif",
    "Yes, replace the edX transcript with the YouTube transcript": "Oui, remplacer la transcription EdX par celle de YouTube",
    "Yesterday": "Hier",
=======
    "Yes, Delete": "Oui, supprimer",
    "Yes, allow edits to the active Certificate": "Oui, permettre les modifications du certificat actif",
    "Yes, delete this {xblock_type}": "Oui, supprimer ce {xblock_type}",
    "Yes, end my proctored exam": "Oui, terminer mon examen surveill\u00e9",
    "Yes, replace the edX transcript with the YouTube transcript": "Oui, remplacer la transcription EdX par celle de YouTube",
    "Yesterday": "Hier",
    "You already belong to another team in this team set.": "Vous appartenez d\u00e9j\u00e0 \u00e0 une autre \u00e9quipe de cet ensemble d'\u00e9quipe.",
    "You already have an edX account with your {enterprise_name} email address.": "Vous poss\u00e9dez d\u00e9j\u00e0 un compte edX avec votre adresse e-mail {enterprise_name}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You are a member of this team.": "Vous \u00eatre membre de cette \u00e9quipe.",
    "You are currently sharing a limited profile.": "Vous partagez actuellement votre profil restreint.",
    "You are enrolling in: {courseName}": "Vous vous inscrivez \u00e0 : {courseName}",
    "You are not currently a member of any team.": "Actuellement, vous n'\u00eates membre d'aucune \u00e9quipe.",
    "You are not enrolled in any programs yet.": "Vous n'\u00eates pas encore inscrit dans un programme.",
    "You are now enrolled as a verified student for:": "Vous vous \u00eates maintenant engag\u00e9 en tant qu'\u00e9tudiant v\u00e9rifi\u00e9 pour :",
    "You are sending an email message with the subject {subject} to the following recipients.": "Vous allez envoyer un email ayant pour sujet {subject} aux destinataires suivants.",
<<<<<<< HEAD
    "You are upgrading your enrollment for: {courseName}": "Mise \u00e0 niveau de votre inscription \u00e0 : {courseName}",
    "You can link your social media accounts to simplify signing in to {platform_name}.": "Vous pouvez lier vos comptes de m\u00e9dias sociaux afin de simplifier la connexion \u00e0 {platform_name}.",
=======
    "You are taking \"{exam_link}\" as {exam_type}. ": "Vous prenez \"{exam_link}\" comme {exam_type}. ",
    "You are upgrading your enrollment for: {courseName}": "Mise \u00e0 niveau de votre inscription \u00e0 : {courseName}",
    "You can change sessions until {expiration_date}.": "Vous avez jusqu'au {expiration_date} pour changer de session.",
    "You can link your social media accounts to simplify signing in to {platform_name}.": "Vous pouvez lier vos comptes de m\u00e9dias sociaux afin de simplifier la connexion \u00e0 {platform_name}.",
    "You can no longer change sessions.": "Vous ne pouvez plus changer de session.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You can now enter your payment information and complete your enrollment.": "Vous pouvez maintenant entrer vos informations de paiement et terminer votre inscription.",
    "You can pay now even if you don't have the following items available, but you will need to have these by {date} to qualify to earn a Verified Certificate.": "Vous pouvez payer maintenant m\u00eame s'il vous manque les \u00e9lements suivants, mais vous en aurez besoin avant le {date} afin d'obtenir un certificat v\u00e9rifi\u00e9.",
    "You can pay now even if you don't have the following items available, but you will need to have these to qualify to earn a Verified Certificate.": "Vous pouvez payer m\u00eame si vous ne disposez pas encore des \u00e9l\u00e9ments suivants, mais vous en aurez besoin afin d'avoir le droit d'obtenir un certificat v\u00e9rifi\u00e9.",
    "You can remove members from this team, especially if they have not participated in the team's activity.": "Vous pouvez retirer des membres de cette \u00e9quipe, en particulier s'ils n'ont pas particip\u00e9 \u00e0 l'activit\u00e9 de l'\u00e9quipe.",
    "You can use your {accountName} account to sign in to your {platformName} account.": "Vous pouvez utiliser votre compte {accountName} afin de vous connecter \u00e0 votre compte {platformName}.",
<<<<<<< HEAD
=======
    "You can view your information or unlink from {enterprise_name} anytime in your Account Settings.": "Vous pouvez voir votre information ou vous d\u00e9connectez de {enterprise_name}\u00a0\u00e0 tout moment dans vos Param\u00e8tres de compte.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You cannot view the course as a student or beta tester before the course release date.": "Vous ne pouvez pas voir le cours en tant qu'\u00e9tudiant ou en tant que b\u00eata testeur avant la date de publication du cours.",
    "You changed a video URL, but did not change the timed transcript file. Do you want to use the current timed transcript or upload a new .srt transcript file?": "Vous avez chang\u00e9 l'URL d'une vid\u00e9o, sans changer le fichier de transcription synchronis\u00e9e. Souhaitez-vous utiliser le fichier courant de transcription synchronis\u00e9e ou t\u00e9l\u00e9verser un nouveau fichier srt de transcription ?",
    "You commented...": "Vous avez comment\u00e9...",
    "You could not be subscribed to this post. Refresh the page and try again.": "Vous n'avez pas pu vous inscrire \u00e0 ce post. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "You could not be unsubscribed from this post. Refresh the page and try again.": "Vous n'avez pas pu vous d\u00e9sinscrire de ce post. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "You currently have no cohorts configured": "Vous n'avez actuellement aucune cohorte configur\u00e9e",
    "You did not select a content group": "Vous n'avez pas s\u00e9lectionn\u00e9 de groupe de contenu",
    "You did not select any files to submit.": "Vous n'avez s\u00e9lectionn\u00e9 aucun fichier \u00e0 envoyer.",
    "You did not submit the required files: {requiredFiles}.": "Vous n'avez pas envoy\u00e9 les fichiers requis : {requiredFiles}.",
    "You don't seem to have Flash installed. Get Flash to continue your verification.": "Il semble que Flash ne soit pas install\u00e9. Obtenez Flash pour continuer votre v\u00e9rification.",
    "You don't seem to have a webcam connected.": "Il semblerait que votre webcam n'est pas connect\u00e9e.",
<<<<<<< HEAD
    "You have already verified your ID!": "Vous avez d\u00e9j\u00e0 v\u00e9rifi\u00e9 votre ID!",
=======
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Assessment Steps tab.": "Vous avez ajout\u00e9 un crit\u00e8re. Vous devrez s\u00e9lectionner une option pour le crit\u00e8re \u00e0 l'\u00e9tape Formation de l'apprenant. Pour ce faire, cliquez sur l'onglet \u00c9tapes d'\u00e9valuation.",
    "You have already verified your ID!": "Vous avez d\u00e9j\u00e0 v\u00e9rifi\u00e9 votre ID!",
    "You have been logged out of your account. Click Okay to log in again now. Click Cancel to stay on this page (you must log in again to save your work).": "Vous avez \u00e9t\u00e9 d\u00e9connect\u00e9 de votre compte. Cliquez sur OK pour vous reconnecter maintenant. Cliquez sur Annuler pour rester sur cette page (vous devez vous reconnecter pour sauvegarder votre travail).",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "Vous avez supprim\u00e9 un crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la formation de l'\u00e9tudiant.",
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "Vous avez supprim\u00e9 toutes les options pour ce crit\u00e8re. Le crit\u00e8re a \u00e9t\u00e9 supprim\u00e9 des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant.",
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "Vous avez supprim\u00e9 une option. Cette option a \u00e9t\u00e9 supprim\u00e9e des crit\u00e8res des exemples de r\u00e9ponses de cette \u00e9tape la Formation de l'Etudiant. Vous pourriez avoir \u00e0 s\u00e9lectionner une nouvelle option pour le crit\u00e8re.",
    "You have done a dry run of force publishing the course. Nothing has changed. Had you run it, the following course versions would have been change.": "Vous avez effectu\u00e9 une simulation de la publication forc\u00e9e de ce cours. Rien n'a chang\u00e9. SI vous aviez vraiment ex\u00e9cut\u00e9 celle-ci, les versions de cours suivantes aurait \u00e9t\u00e9 chang\u00e9es.",
    "You have no handouts defined": "Vous n'avez d\u00e9fini aucun documents",
    "You have not bookmarked any courseware pages yet": "Vous n'avez marqu\u00e9 aucune page de cours pour le moment.",
    "You have not created any certificates yet.": "Vous n'avez pas encore cr\u00e9e de certificat.",
    "You have not created any content groups yet.": "Vous n'avez pas encore cr\u00e9\u00e9 de groupes de contenu.",
    "You have not created any group configurations yet.": "Vous n'avez pas encore cr\u00e9\u00e9 de configuration des groupes.",
<<<<<<< HEAD
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Enregistrer.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore sauvegard\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour sauver. Vous devrez r\u00e9appliquer l'action.",
=======
    "You have selected an action, and you haven\u2019t made any changes on individual fields. You\u2019re probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Enregistrer.",
    "You have selected an action, but you haven\u2019t saved your changes to individual fields yet. Please click OK to save. You\u2019ll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore enregistr\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour enregistrer. Vous devrez r\u00e9appliquer l'action.",
    "You have selected \u201cDelete my account.\u201d Deletion of your account and personal data is permanent and cannot be undone. {platformName} will not be able to recover your account or the data that is deleted.": "Vous avez s\u00e9lectionn\u00e9 \u00ab Supprimer mon compte \u00bb. La suppression d'un compte et des donn\u00e9es personnelles est permanente et ne peut \u00eatre annul\u00e9e. {platformName} ne pourra r\u00e9cup\u00e9rer ni votre compte ni les donn\u00e9es effac\u00e9es.",
    "You have set your language to {beta_language}, which is currently not fully translated. You can help us translate this language fully by joining the Transifex community and adding translations from English for learners that speak {beta_language}.": "Vous avez r\u00e9gl\u00e9 votre langue sur {beta_language}, qui n'est actuellement pas enti\u00e8rement traduite. Vous pouvez nous aider \u00e0 traduire compl\u00e8tement cette langue en rejoignant la communaut\u00e9 Transifex et en ajoutant des traductions de l'anglais pour les apprenants qui parlent {beta_language}.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You have successfully signed into %(currentProvider)s, but your %(currentProvider)s account does not have a linked %(platformName)s account. To link your accounts, sign in now using your %(platformName)s password.": "Vous \u00eates connect\u00e9 \u00e0 %(currentProvider)s avec succ\u00e8s,mais votre compte %(currentProvider)s n'est pas reli\u00e9 \u00e0 votre compte %(platformName)s. Pour lier vos comptes, connectez-vous en utilisant votre mot de passe %(platformName)s.",
    "You have unsaved changes are you sure you want to navigate away?": "Vous avez des modifications non enregistr\u00e9es, \u00eates-vous s\u00fbr de vouloir quitter cette page ?",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vous avez des modifications non sauvegard\u00e9es sur certains champs \u00e9ditables. Si vous lancez une action, ces modifications vont \u00eatre perdues.",
    "You have unsaved changes. Do you really want to leave this page?": "Il reste des modifications non sauvegard\u00e9es. Voulez-vous vraiment quitter cette page ?",
    "You haven't added any assets to this course yet.": "Vous n'avez encore ajout\u00e9 aucune ressource dans ce cours.",
    "You haven't added any content to this course yet.": "Vous n'avez pas encore ajout\u00e9 de contenu \u00e0 ce cours.",
    "You haven't added any textbooks to this course yet.": "Vous n'avez encore ajout\u00e9 aucun manuel \u00e0 ce cours.",
<<<<<<< HEAD
    "You may also lose access to verified certificates and other program credentials like MicroMasters certificates. If you want to make a copy of these for your records before proceeding with deletion, follow the instructions for {htmlStart}printing or downloading a certificate{htmlEnd}.": "Vous pouvez \u00e9galement perdre l'acc\u00e8s aux certificats v\u00e9rifi\u00e9s et aux autres cr\u00e9dits de programmes comme les certificats MicroMasters. Si vous souhaitez en faire une copie pour vos archives avant de poursuivre la suppression, veuillez suivre les instructions pour {htmlStart}imprimer ou t\u00e9l\u00e9charger un certificat{htmlEnd}.",
    "You must be over 13 to share a full profile. If you are over 13, make sure that you have specified a birth year on the {account_settings_page_link}": "Vous devez avoir plus de 13 ans pour partager un profil complet. Si vous avez plus de 13 ans, assurez-vous que votre ann\u00e9e de naissance est correcte dans {account_settings_page_link}",
    "You must enter a valid email address in order to add a new team member": "Vous devez saisir une adresse e-mail valide afin d'ajouter un nouveau membre \u00e0 l'\u00e9quipe",
    "You must provide a learner name.": "Vous devez saisir un nom d'apprenant.",
    "You must sign out and sign back in before your language changes take effect.": "Vous devez vous d\u00e9connecter puis vous connecter \u00e0 nouveau afin que les param\u00e8tres de langue prennent effet.",
    "You must specify a name for the cohort": "Vous devez indiquer un nom pour la cohorte",
    "You must specify your birth year before you can share your full profile. To specify your birth year, go to the {account_settings_page_link}": "Vous devez renseigner votre ann\u00e9e de naissance avant de pouvoir partager votre profil complet. Pour renseigner votre ann\u00e9e de naissance, allez sur {account_settings_page_link}",
    "You need to activate your account before you can enroll in courses. Check your inbox for an activation email. After you complete activation you can return and refresh this page.": "Vous devez activer votre compte avant de pouvoir vous inscrire aux cours. V\u00e9rifier votre bo\u00eete de r\u00e9ception pour un email d'activation. Apr\u00e8s l'activation vous pouvez revenir et rafraichir cette page.",
    "You receive messages from {platform_name} and course teams at this address.": "Les messages que vous recevrez de la part de la plateforme {platform_name} et des \u00e9quipes p\u00e9dagogiques seront envoy\u00e9s \u00e0 cette adresse.",
    "You submitted {filename}; only {allowedFiles} are allowed.": "Vous avez envoy\u00e9 {filename}; seul les {allowedFiles} sont autoris\u00e9s.",
=======
    "You may access your account with this address if single-sign on or access to your primary email is not available.": "Vous pouvez acc\u00e9der \u00e0 votre compte avec cette adresse si vous ne disposez pas d'une connexion unique ou d'un acc\u00e8s \u00e0 votre adresse e-mail principale.",
    "You may also lose access to verified certificates and other program credentials like MicroMasters certificates. If you want to make a copy of these for your records before proceeding with deletion, follow the instructions for {htmlStart}printing or downloading a certificate{htmlEnd}.": "Vous pouvez \u00e9galement perdre l'acc\u00e8s aux certificats v\u00e9rifi\u00e9s et aux autres cr\u00e9dits de programmes comme les certificats MicroMasters. Si vous souhaitez en faire une copie pour vos archives avant de poursuivre la suppression, veuillez suivre les instructions pour {htmlStart}imprimer ou t\u00e9l\u00e9charger un certificat{htmlEnd}.",
    "You may be able to complete the image capture procedure without assistance, but it may take a couple of submission attempts to get the camera positioning right.  Optimal camera positioning varies with each computer, but generally the best position for a headshot is approximately 12-18 inches (30-45 centimeters) from the camera, with your head centered relative to the computer screen. ": "Vous pourrez peut-\u00eatre effectuer la proc\u00e9dure de capture d'image sans assistance, mais il faudra peut-\u00eatre plusieurs tentatives de soumission pour obtenir un bon positionnement de la cam\u00e9ra. Le positionnement optimal de la cam\u00e9ra varie selon l'ordinateur, mais en g\u00e9n\u00e9ral, la meilleure position pour une prise de vue est d'environ 30-45 centim\u00e8tres (12-18 pouces) de la cam\u00e9ra, la t\u00eate \u00e9tant centr\u00e9e par rapport \u00e0 l'\u00e9cran de l'ordinateur. ",
    "You may be able to complete the image capture procedure without assistance, but it may take a couple of submission attempts to get the camera positioning right.  Optimal camera positioning varies with each computer, but generally, the best position for a photo of an ID card is 8-12 inches (20-30 centimeters) from the camera, with the ID card centered relative to the camera. ": "Vous pourrez peut-\u00eatre effectuer la proc\u00e9dure de capture d'image sans assistance, mais il vous faudra peut-\u00eatre plusieurs tentatives de soumission pour obtenir le bon positionnement de la cam\u00e9ra. Le positionnement optimal de l'appareil photo varie selon les ordinateurs, mais en g\u00e9n\u00e9ral, la meilleure position pour une photo d'une carte d'identit\u00e9 est de 20-30 centim\u00e8tres (8-12 pouces) de l'appareil photo, la carte d'identit\u00e9 \u00e9tant centr\u00e9e par rapport \u00e0 l'appareil photo. ",
    "You must be over 13 to share a full profile. If you are over 13, make sure that you have specified a birth year on the {account_settings_page_link}": "Vous devez avoir plus de 13 ans pour partager un profil complet. Si vous avez plus de 13 ans, assurez-vous que votre ann\u00e9e de naissance est correcte dans {account_settings_page_link}",
    "You must enter a valid email address in order to add a new team member": "Vous devez saisir une adresse e-mail valide afin d'ajouter un nouveau membre \u00e0 l'\u00e9quipe",
    "You must provide a learner name.": "Vous devez saisir un nom d'apprenant.",
    "You must select a session by {expiration_date} to access the course.": "Vous devez s\u00e9lectionner une session au plus tard le {expiration_date} afin d'avoir acc\u00e8s au cours.",
    "You must select a session to access the course.": "Vous devez s\u00e9lectionner une session afin d'avoir acc\u00e8s au cours.",
    "You must sign out and sign back in before your language changes take effect.": "Vous devez vous d\u00e9connecter puis vous connecter \u00e0 nouveau afin que les param\u00e8tres de langue prennent effet.",
    "You must specify a name": "Vous devez indiquer un nom",
    "You must specify a name for the cohort": "Vous devez indiquer un nom pour la cohorte",
    "You must specify your birth year before you can share your full profile. To specify your birth year, go to the {account_settings_page_link}": "Vous devez renseigner votre ann\u00e9e de naissance avant de pouvoir partager votre profil complet. Pour renseigner votre ann\u00e9e de naissance, allez sur {account_settings_page_link}",
    "You need a device that has a webcam. If you receive a browser prompt for access to your camera, please make sure to click 'Allow'.": "Vous avez besoin d'un appareil disposant d'une webcam. Si vous recevez une demande de votre navigateur pour acc\u00e9der \u00e0 votre cam\u00e9ra, veillez \u00e0 cliquer sur 'Autoriser'.",
    "You need a valid ID that contains your full name and photo.": "Vous avez besoin d'une pi\u00e8ce d'identit\u00e9 valide comportant votre nom complet et une photo.",
    "You need an ID with your name and photo. A driver's license, passport, or ID are all acceptable.": "Vous avez besoin d'une pi\u00e8ce d'identit\u00e9 avec votre nom et une photo. Un permis de conduire, un passeport ou une pi\u00e8ce d'identit\u00e9 sont accept\u00e9s.",
    "You need to activate your account before you can enroll in courses. Check your inbox for an activation email. After you complete activation you can return and refresh this page.": "Vous devez activer votre compte avant de pouvoir vous inscrire aux cours. V\u00e9rifier votre bo\u00eete de r\u00e9ception pour un email d'activation. Apr\u00e8s l'activation vous pouvez revenir et rafraichir cette page.",
    "You receive messages from {platform_name} and course teams at this address.": "Les messages que vous recevrez de la part de la plateforme {platform_name} et des \u00e9quipes p\u00e9dagogiques seront envoy\u00e9s \u00e0 cette adresse.",
    "You reserve all rights for your work": "Vous vous r\u00e9servez tous les droits pour votre travail",
    "You submitted {filename}; only {allowedFiles} are allowed.": "Vous avez envoy\u00e9 {filename}; seul les {allowedFiles} sont autoris\u00e9s.",
    "You waive some rights for your work, such that others can use it too": "Vous renoncez \u00e0 certains droits sur votre \u0153uvre, pour que d'autres puissent \u00e9galement l'utiliser.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "You will be refunded the amount you paid.": "Le montant pay\u00e9 vous sera rembours\u00e9.",
    "You will not be refunded the amount you paid.": "Le montant pay\u00e9 ne vous sera pas rembours\u00e9.",
    "You will not receive notification for emails that bounce, so double-check your spelling.": "Vous ne recevrez pas de notification pour les e-mails rejet\u00e9s, donc soyez doublement attentif \u00e0 l'orthographe.",
    "You will use your webcam to take a picture of your face and of your government-issued photo ID.": "Vous utiliserez votre cam\u00e9ra afin de prendre une photo de votre visage et de votre pi\u00e8ce d'identit\u00e9.",
    "You!": "Vous !",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Vous \u00eates sur le point d'envoyer votre r\u00e9ponse d\u00e9finitive. Apr\u00e8s cette \u00e9tape vous ne pourrez plus la modifier ou en soumettre une nouvelle.",
    "You've made some changes": "Vous avez effectu\u00e9 des modifications",
    "You've made some changes, but there are some errors": "Vous avez effectu\u00e9 des modifications, mais il y a des erreurs",
    "You've successfully signed into %(currentProvider)s.": "Vous \u00eates connect\u00e9s avec succ\u00e8s avec %(currentProvider)s.",
    "Your ID must be a government-issued photo ID that clearly shows your face.": "Votre pi\u00e8ce d'identit\u00e9 doit clairement montrer votre visage.",
    "Your Program Journey": "Votre Parcours d'apprentissage",
    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.": "Votre navigateur ne supporte pas l'acc\u00e8s direct au presse-papier. Veuillez utiliser les raccourcis clavier Ctrl + X / C / V \u00e0 la place.",
    "Your changes have been saved.": "Vos modifications ont \u00e9t\u00e9 enregistr\u00e9es.",
    "Your changes have been saved. {details}": "Vos modifications ont \u00e9t\u00e9 enregistr\u00e9es. {details}",
    "Your changes will not take effect until you save your progress.": "Vos modifications ne prendront pas effet tant que vous n'aurez pas enregistr\u00e9.",
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "Vos modifications ne prendront pas effet tant que vous n'aurez pas enregistr\u00e9. La validation n'ayant pas \u00e9t\u00e9 impl\u00e9ment\u00e9e, faites attention au formatage des cl\u00e9s et des valeurs.",
    "Your course could not be exported to XML. There is not enough information to identify the failed component. Inspect your course to identify any problematic components and try again.": "L'export XML de votre biblioth\u00e8que a \u00e9chou\u00e9 sans qu'il soit possible de d\u00e9terminer pr\u00e9cis\u00e9ment le probl\u00e8me, veuillez examiner cette biblioth\u00e8que et corriger le composant fautif puis r\u00e9essayer.",
    "Your donation could not be submitted.": "Votre don n'a pas pu \u00eatre soumis",
    "Your email message was successfully queued for sending. In courses with a large number of learners, email messages to learners might take up to an hour to be sent.": "Votre email a \u00e9t\u00e9 mis sur liste d'attente avec succ\u00e8s pour l'envoi. Pour les cours avec un grand nombre d'apprenants, l'envoi des emails peut prendre jusqu'\u00e0 une heure. ",
    "Your entire face fits inside the frame.": " Votre visage est enti\u00e8rement dans le cadre.",
    "Your export has failed.": "Votre exportation a \u00e9chou\u00e9.",
    "Your face is well-lit.": "Votre visage est bien \u00e9clair\u00e9",
    "Your file ": "Votre fichier",
    "Your file '{file}' has been uploaded. Allow a few minutes for processing.": "Votre fichier '{file}' a \u00e9t\u00e9 import\u00e9. Merci d'attendre quelques minutes pour son traitement.",
    "Your file could not be uploaded": "Votre fichier n'a pas pu \u00eatre charg\u00e9",
    "Your file has been deleted.": "Votre fichier a \u00e9t\u00e9 supprim\u00e9.",
    "Your file {filename} is too large (max size: {maxSize}MB).": "Votre fichier {filename} est trop grand (taille maxi : {maxSize} Mo).",
    "Your import has failed.": "Votre importation a \u00e9chou\u00e9.",
<<<<<<< HEAD
=======
    "Your import is in progress; navigating away will abort it.": "Votre import est en cours ; il sera interrompu si vous changez de page.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Your library could not be exported to XML. There is not enough information to identify the failed component. Inspect your library to identify any problematic components and try again.": "L'export XML de la biblioth\u00e8que a \u00e9chou\u00e9 sans qu'il soit possible de d\u00e9terminer pr\u00e9cis\u00e9ment le probl\u00e8me. Examiner cette biblioth\u00e8que et corriger le composant en erreur puis r\u00e9essayer.",
    "Your message cannot be blank.": "Votre message ne peut pas \u00eatre vide.",
    "Your message must have a subject.": "Votre message doit contenir un sujet.",
    "Your message must have at least one target.": "Votre message doit avoir au moins un destinataire.",
    "Your policy changes have been saved.": "Les changements de r\u00e8gles ont \u00e9t\u00e9 enregistr\u00e9s.",
    "Your post will be discarded.": "Votre message sera supprim\u00e9",
<<<<<<< HEAD
    "Your question or idea (required)": "Votre question ou message (requis)",
=======
    "Your profile settings are managed by {enterprise_name}. Contact your administrator or {link_start}edX Support{link_end} for help.": "Vos param\u00e8tres de profil sont g\u00e9r\u00e9s par {enterprise_name}. Contactez votre administrateur ou le {link_start}Service client edX{link_end} en cas de besoin.",
    "Your question or idea (required)": "Votre question ou message (requis)",
    "Your recorded data should now be uploaded for review.": "Vos donn\u00e9es enregistr\u00e9es doivent maintenant \u00eatre t\u00e9l\u00e9charg\u00e9es pour examen.",
    "Your report has been successfully generated.": "Votre rapport a \u00e9t\u00e9 g\u00e9n\u00e9r\u00e9 avec succ\u00e8s.",
    "Your report is being generated...": "Votre rapport est en cours de g\u00e9n\u00e9ration...",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Your request could not be completed due to a server problem. Reload the page and try again. If the issue persists, click the Help tab to report the problem.": "Votre demande n'a pas pu \u00eatre r\u00e9alis\u00e9e \u00e0 cause d'un probl\u00e8me de serveur. Rafra\u00eechissez la page et r\u00e9essayez. Si le probl\u00e8me persiste, cliquez sur l'onglet Aide pour signaler le probl\u00e8me.",
    "Your request could not be completed. Reload the page and try again.": "Votre demande n'a pas pu \u00eatre r\u00e9alis\u00e9e. Rafra\u00eechissez la page et r\u00e9essayez.",
    "Your request could not be completed. Reload the page and try again. If the issue persists, click the Help tab to report the problem.": "Votre requ\u00eate n'a pu \u00eatre compl\u00e9t\u00e9e. Recharger la page et essayez de nouveau. Si le probl\u00e8me persiste, cliquer sur l'onglet Aide afin de signaler le probl\u00e8me.",
    "Your request could not be processed. Refresh the page and try again.": "Votre requ\u00eate n'a pas pu \u00eatre trait\u00e9e. Veuillez actualiser la page et essayer \u00e0 nouveau.",
    "Your team could not be created.": "Votre \u00e9quipe n'a pas pu \u00eatre cr\u00e9e.",
    "Your team could not be updated.": "Votre \u00e9quipe n'a pas pu \u00eatre mise \u00e0 jour.",
<<<<<<< HEAD
=======
    "Your unenrollment request could not be processed. Please try again later.": "Votre demande d'inscription n'a pas pu \u00eatre trait\u00e9e. Veuillez essayer \u00e0 nouveau plus tard.",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "Your upload of '{file}' failed.": "Le chargement de '{file}' a \u00e9chou\u00e9.",
    "Your upload of '{file}' succeeded.": "Chargement de '{file}' r\u00e9ussi.",
    "Your verification status is good until {verificationGoodUntil}.": "Votre v\u00e9rification est valable jusqu'au {verificationGoodUntil}.",
    "Your video uploads are not complete.": "Vos chargements vid\u00e9os ne sont pas termin\u00e9s.",
    "Your {program} Certificate": "Votre certificat pour {program}",
    "Yourself": "Vous-m\u00eame",
    "Zoom In": "Zoomer",
    "Zoom Out": "D\u00e9zoomer ",
    "[no tags]": "[aucun tag]",
    "a day": "un jour",
<<<<<<< HEAD
=======
    "a practice exam": "un examen de pratique",
    "a proctored exam": "un examen surveill\u00e9",
    "a timed exam": "un examen chronom\u00e9tr\u00e9",
    "abbrev. month April\u0004Apr": "avr",
    "abbrev. month August\u0004Aug": "ao\u00fb",
    "abbrev. month December\u0004Dec": "d\u00e9c",
    "abbrev. month February\u0004Feb": "f\u00e9v",
    "abbrev. month January\u0004Jan": "jan",
    "abbrev. month July\u0004Jul": "jui",
    "abbrev. month June\u0004Jun": "jun",
    "abbrev. month March\u0004Mar": "mar",
    "abbrev. month May\u0004May": "mai",
    "abbrev. month November\u0004Nov": "nov",
    "abbrev. month October\u0004Oct": "oct",
    "abbrev. month September\u0004Sep": "sep",
    "about %d hour": [
      "environ %d heure",
      "environ %d heures",
      "environ %d heures"
    ],
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "about a minute": "environ une minute",
    "about a month": "environ un mois",
    "about a year": "environ un an",
    "about an hour": "environ une heure",
    "active proctored exams": "Les examens surveill\u00e9s actifs",
<<<<<<< HEAD
    "and others": "et autres",
    "anonymous": "anonyme",
    "answer": "r\u00e9ponse",
    "bytes": "bytes",
    "certificate": "certificat",
    "close": "fermer",
=======
    "allowance_value": "allowance_value",
    "an onboarding exam": "un examen d'int\u00e9gration",
    "and others": "et autres",
    "anonymous": "anonyme",
    "answer": "r\u00e9ponse",
    "answered question": "Question r\u00e9pondue",
    "asset_path is required": "asset_path est requis",
    "bytes": "bytes",
    "certificate": "certificat",
    "close": "fermer",
    "close questionnaire": "Fermer le questionnaire",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "component": "composant",
    "content group": "groupe de contenu",
    "correct": "correct",
    "could not determine the course_id": "ne peut d\u00e9terminer l'identifiant du cours - course_id",
    "course id": "ID de cours",
    "courses with active proctored exams": "les cours avec des examens surveill\u00e9s actifs",
    "delete chapter": "effacer le chapitre",
    "delete group": "supprimer le groupe",
<<<<<<< HEAD
    "details about the failure": "D\u00e9tails sur l'erreur.",
=======
    "demographics questionnaire": "questionnaire d\u00e9mographique",
    "details about the failure": "D\u00e9tails sur l'erreur.",
    "discussion": "Discussion",
    "discussion posted %(time_ago)s by %(author)s": "discussion publi\u00e9e il y a %(time_ago)s par %(author)s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "dragging": "d\u00e9placement",
    "dragging out of slider": "d\u00e9placement du curseur en dehors",
    "dropped in slider": "curseur pour le d\u00e9p\u00f4t",
    "dropped on target": "d\u00e9pos\u00e9 sur la cible",
    "e.g. 'Sky with clouds'. The description is helpful for users who cannot see the image.": "exemple 'Ciel avec nuages'. La description est utile pour les utilisateurs qui ne peuvent pas voir l'image.",
    "e.g. 'google'": "exemple 'google'",
    "e.g. 'http://google.com'": "ex. \"http://google.fr/\"",
    "e.g. johndoe@example.com, JaneDoe, joeydoe@example.com": "exemple\u00a0: johndoe@exemple.com, JaneDoe, joeydoe@exemple.com",
    "emphasized text": "texte en italique",
<<<<<<< HEAD
    "enter code here": "saisir du code ici",
    "enter link description here": "saisir une description du lien ici",
    "for": "pour",
    "group configuration": "configuration des groupes",
=======
    "endorsed %(time_ago)s": "approuv\u00e9 %(time_ago)s",
    "endorsed %(time_ago)s by %(user)s": "approuv\u00e9 %(time_ago)s par %(user)s",
    "enter code here": "saisir du code ici",
    "enter link description here": "saisir une description du lien ici",
    "finish later": "terminer plus tard",
    "follow this post": "Suivre ce message",
    "for": "pour",
    "group configuration": "configuration des groupes",
    "has ": "a",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "image omitted": "image manquante",
    "incorrect": "incorrect",
    "internally reviewed": "revue interne",
    "last activity": "derni\u00e8re activit\u00e9",
    "less than a minute": "moins d\u2019une minute",
<<<<<<< HEAD
    "minute": "minute",
    "minutes": "minutes",
    "name": "nom",
=======
    "marked as answer %(time_ago)s": "marqu\u00e9 comme r\u00e9ponse %(time_ago)s",
    "marked as answer %(time_ago)s by %(user)s": "marqu\u00e9 comme r\u00e9ponse %(time_ago)s par %(user)s",
    "minute": "minute",
    "minutes": "minutes",
    "name": "nom",
    "next page": "page suivante",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "off": "arr\u00eat",
    "on": "on",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M",
    "open slots": "places disponibles",
    "or": "ou",
    "or create a new one here": "ou en cr\u00e9er un nouveau ici",
    "or sign in with": "ou se connecter avec",
    "path/to/introductionToCookieBaking-CH{order}.pdf": "path/to/introductionToCookieBaking-CH{order}.pdf",
<<<<<<< HEAD
    "price": "prix",
    "provide the title/name of the chapter that will be used in navigating": "Veuillez fournir le titre/nom du chapitre qui sera utilis\u00e9 pendant la navigation.",
    "provide the title/name of the text book as you would like your students to see it": "veuillez fournir le titre/nom du manuel comme vous souhaiteriez que vos \u00e9tudiants le voient.",
=======
    "post anonymously to classmates": "\u00c9crire anonymement aux autres participants",
    "posted %(time_ago)s by %(author)s": "post\u00e9 %(time_ago)s par %(author)s",
    "price": "prix",
    "provide the title/name of the chapter that will be used in navigating": "Veuillez fournir le titre/nom du chapitre qui sera utilis\u00e9 pendant la navigation.",
    "provide the title/name of the text book as you would like your students to see it": "veuillez fournir le titre/nom du manuel comme vous souhaiteriez que vos \u00e9tudiants le voient.",
    "question posted %(time_ago)s by %(author)s": "question pos\u00e9e il y a %(time_ago)s par %(author)s",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "remove": "supprimer",
    "remove all": "tout supprimer",
    "second": "seconde",
    "seconds": "secondes",
<<<<<<< HEAD
    "send an email message to {email}": "envoyer un email \u00e0 {email}",
    "strong text": "texte en gras",
    "team count": "total \u00e9quipe",
    "text_word_{uniqueId}": "text_word_{uniqueId}",
    "text_word_{uniqueId} title_word_{uniqueId}": "text_word_{uniqueId} title_word_{uniqueId}",
    "there is currently {numVotes} vote": [
      "il y a actuellement {numVotes} vote",
=======
    "section": "section",
    "send an email message to {email}": "envoyer un email \u00e0 {email}",
    "strong text": "texte en gras",
    "subsection": "sous-section",
    "team count": "total \u00e9quipe",
    "text_word_{uniqueId}": "text_word_{uniqueId}",
    "text_word_{uniqueId} title_word_{uniqueId}": "text_word_{uniqueId} title_word_{uniqueId}",
    "the more quickly and helpfully we can respond!": "le plus rapidement et efficacement que nous pouvons r\u00e9pondre !",
    "there is currently {numVotes} vote": [
      "il y a actuellement {numVotes} vote",
      "il y a actuellement {numVotes} votes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "il y a actuellement {numVotes} votes"
    ],
    "title_word_{uniqueId}": "title_word_{uniqueId}",
    "toggle chapter %(displayName)s": "Afficher le chapitre %(displayName)s",
    "toggle subsection %(displayName)s": "Afficher la sous-section %(displayName)s",
<<<<<<< HEAD
    "unit": "unit\u00e9",
    "unsubmitted": "non envoy\u00e9",
    "upload a PDF file or provide the path to a Studio asset file": "Chargez un PDF ou fournissez le chemin d'un fichier de ressource Studio",
    "username or email": "nom d'utilisateur ou email",
=======
    "unanswered question": "Question non r\u00e9pondue",
    "unit": "unit\u00e9",
    "unsubmitted": "non envoy\u00e9",
    "upload a PDF file or provide the path to a Studio asset file": "Chargez un PDF ou fournissez le chemin d'un fichier de ressource Studio",
    "user_info": "user_info",
    "username or email": "nom d'utilisateur ou email",
    "ve detected errors on the following tabs: ${tabNames.join(": "Nous avons d\u00e9tect\u00e9 des erreurs dans les onglets suivants : ${tabNames.join(",
    "weeks from learner enrollment date": "semaines \u00e0 compter de la date d'inscription de l'apprenant",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "with %(release_date_from)s": "avec %(release_date_from)s",
    "with %(section_or_subsection)s": "avec %(section_or_subsection)s",
    "you have less than a minute remaining": "vous avez moins d'une minute restante",
    "you have {remaining_time} remaining": "vous avez {remaining_time} restant",
    "you will have ": "vous aurez",
    "your course": "votre cours",
<<<<<<< HEAD
    "{browse_span_start}Browse teams in other topics{span_end} or {search_span_start}search teams{span_end} in this topic. If you still can't find a team to join, {create_span_start}create a new team in this topic{span_end}.": "{browse_span_start}Parcourir les \u00e9quipes dans d'autres sujets{span_end} ou {search_span_start}rechercher des \u00e9quipes{span_end} dans ce sujet. Si vous ne parvenez pas \u00e0 trouver une \u00e9quipe, {create_span_start}cr\u00e9ez une nouvelle \u00e9quipe dans ce sujet {span_end}.",
    "{categoryText} in {parentDisplayname}": "{categoryText} dans {parentDisplayname}",
    "{display_name} Settings": "Param\u00e8tres de {display_name}",
=======
    "{InstructionsSpanStart}{videoImageResoultion}{lineBreak} {videoImageSupportedFileFormats}{spanEnd}": "{InstructionsSpanStart}{videoImageResoultion}{lineBreak} {videoImageSupportedFileFormats}{spanEnd}",
    "{ReqTextSpanStart}Requirements{spanEnd}{lineBreak}{InstructionsSpanStart}{videoImageResoultion}{lineBreak} {videoImageSupportedFileFormats}{spanEnd}": "{ReqTextSpanStart}Exigences{spanEnd}{lineBreak}{InstructionsSpanStart}{videoImageResoultion}{lineBreak} {videoImageSupportedFileFormats}{spanEnd}",
    "{browse_span_start}Browse teams in other topics{span_end} or {search_span_start}search teams{span_end} in this topic. If you still can't find a team to join, {create_span_start}create a new team in this topic{span_end}.": "{browse_span_start}Parcourir les \u00e9quipes dans d'autres sujets{span_end} ou {search_span_start}rechercher des \u00e9quipes{span_end} dans ce sujet. Si vous ne parvenez pas \u00e0 trouver une \u00e9quipe, {create_span_start}cr\u00e9ez une nouvelle \u00e9quipe dans ce sujet {span_end}.",
    "{categoryText} in {parentDisplayname}": "{categoryText} dans {parentDisplayname}",
    "{currentCountOpeningTag}{currentCharacterCount}{currentCountClosingTag} of {maxCharacters}": "{currentCountOpeningTag}{currentCharacterCount}{currentCountClosingTag} sur {maxCharacters}",
    "{display_name} Settings": "Param\u00e8tres de {display_name}",
    "{download_link_start}Download this image (right-click or option-click, save as){link_end} and then {upload_link_start}upload{link_end} it to your backpack.": "{download_link_start}T\u00e9l\u00e9chargez cette image (clic droit ou option-clic, enregistrer sous){link_end} puis {upload_link_start}upload{link_end} dans votre sac \u00e0 dos.",
    "{earned}/{possible} point (graded)": [
      "{earned}/{possible} point (not\u00e9)",
      "{earned}/{possible} points (not\u00e9)",
      "{earned}/{possible} points (not\u00e9)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned}/{possible} point (pas not\u00e9)",
      "{earned}/{possible} points (pas not\u00e9)",
      "{earned}/{possible} points (pas not\u00e9)"
    ],
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    "{email}": "{email}",
    "{email} is already on the {container} team. Recheck the email address if you want to add a new member.": "{email} est d\u00e9j\u00e0 membre de l'\u00e9quipe {container}. Rev\u00e9rifiez l'adresse \u00e9lectronique si vous souhaitez ajouter un nouveau membre.",
    "{filename} exceeds maximum size of {maxFileSizeInGB} GB.": "{filename} d\u00e9passe la taille maximum de {maxFileSizeInGB} GB.",
    "{filename} is not in a supported file format. Supported file formats are {supportedFileFormats}.": "{filename} n'est pas parmi les formats de fichier support\u00e9. Les formats de fichier support\u00e9 sont {supportedFileFormats}",
    "{hours}:{minutes} (current UTC time)": "{hours}:{minutes} (heure actuelle UTC )",
    "{htmlStart}Want to change your email, name, or password instead?{htmlEnd}": "{htmlStart} voulez-vous modifier votre email, nom, ou mot de passe?{htmlEnd}",
    "{label}: {status}": "{label}: {status}",
    "{maxWidth}x{maxHeight} pixels": "{maxWidth}x{maxHeight} pixels",
    "{minutes} {unit}": "{minutes} {unit}",
<<<<<<< HEAD
    "{numResponses} other response": [
      "{numResponses} autre r\u00e9ponse",
=======
    "{numMoved} learner was moved from {prevCohort}": [
      "{numMoved} a \u00e9t\u00e9 enlev\u00e9 de {prevCohort}",
      "{numMoved} \u00e9tudiants ont \u00e9t\u00e9 enlev\u00e9s de {prevCohort}",
      "{numMoved} \u00e9tudiants ont \u00e9t\u00e9 enlev\u00e9s de {prevCohort}"
    ],
    "{numPreassigned} learner was pre-assigned for this cohort. This learner will automatically be added to the cohort when they enroll in the course.": [
      "{numPreassigned} \u00e9tudiant \u00e9tait affect\u00e9 d'avance dans cette cohorte. Cet \u00e9tudiant sera automatiquement ajout\u00e9 \u00e0 la cohorte quand il s'inscrira \u00e0 ce cours.",
      "{numPreassigned} \u00e9tudiants \u00e9taient affect\u00e9s d'avance dans cette cohorte. Ces \u00e9tudiants seront automatiquement ajout\u00e9s \u00e0 la cohorte quand ils s'inscriront \u00e0 ce cours.",
      "{numPreassigned} \u00e9tudiants \u00e9taient affect\u00e9s d'avance dans cette cohorte. Ces \u00e9tudiants seront automatiquement ajout\u00e9s \u00e0 la cohorte quand ils s'inscriront \u00e0 ce cours."
    ],
    "{numPresent} learner was already in the cohort": [
      "{numPresent} \u00e9tudiant \u00e9tait d\u00e9j\u00e0 dans la cohorte",
      "{numPresent} \u00e9tudiants \u00e9taient d\u00e9j\u00e0 dans la cohorte",
      "{numPresent} \u00e9tudiants \u00e9taient d\u00e9j\u00e0 dans la cohorte"
    ],
    "{numResponses} other response": [
      "{numResponses} autre r\u00e9ponse",
      "{numResponses} autres r\u00e9ponses",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "{numResponses} autres r\u00e9ponses"
    ],
    "{numResponses} response": [
      "{numResponses} r\u00e9ponse",
<<<<<<< HEAD
      "{numResponses} r\u00e9ponses"
    ],
    "{numVotes} Vote": [
      "{numVotes} Vote",
=======
      "{numResponses} r\u00e9ponses",
      "{numResponses} r\u00e9ponses"
    ],
    "{numUsersAdded} learner has been added to this cohort. ": [
      "{numUsersAdded} \u00e9tudiant a \u00e9t\u00e9 ajout\u00e9 \u00e0 cette cohorte.",
      "{numUsersAdded} \u00e9tudiants ont \u00e9t\u00e9 ajout\u00e9s \u00e0 cette cohorte.",
      "{numUsersAdded} \u00e9tudiants ont \u00e9t\u00e9 ajout\u00e9s \u00e0 cette cohorte."
    ],
    "{numVotes} Vote": [
      "{numVotes} Vote",
      "{numVotes} Votes",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "{numVotes} Votes"
    ],
    "{num_of_hours} hour": "{num_of_hours} heure",
    "{num_of_hours} hours": "{num_of_hours} heures",
    "{num_of_minutes} minute": "{num_of_minutes} minute",
    "{num_of_minutes} minutes": "{num_of_minutes} minutes",
<<<<<<< HEAD
    "{organization}\\'s logo": "logo {organization}",
    "{screen_reader_start}Warning:{screen_reader_end} No content groups exist.": "{screen_reader_start}Avertissement : {screen_reader_end} Il n'existe aucun groupe de contenu.",
    "{screen_reader_start}Warning:{screen_reader_end} The previously selected content group was deleted. Select another content group.": "{screen_reader_start}Avertissement : {screen_reader_end} Le groupe de contenu s\u00e9lectionn\u00e9 pr\u00e9c\u00e9demment a \u00e9t\u00e9 supprim\u00e9. S\u00e9lectionnez un autre groupe de contenu.",
    "{seconds} {unit}": "{seconds} {unit}",
    "{start_strong}{total}{end_strong} words submitted in total.": "{start_strong}{total}{end_strong} mots soumis au total.",
    "{type} Progress": "{type} Progress",
    "\u2026": "\u2026"
  };
  for (var key in newcatalog) {
=======
    "{num_points} point possible (graded)": [
      "{num_points} point possible (graded)",
      "{num_points} points possibles (graded)",
      "{num_points} points possibles (graded)"
    ],
    "{num_points} point possible (graded, results hidden)": [
      "{num_points} point possible (not\u00e9, r\u00e9sultats cach\u00e9s)",
      "{num_points} points possibles (not\u00e9, r\u00e9sultats cach\u00e9s)",
      "{num_points} points possibles (not\u00e9, r\u00e9sultats cach\u00e9s)"
    ],
    "{num_points} point possible (ungraded)": [
      "{num_points} point possible (pas not\u00e9)",
      "{num_points} points possibles (pas not\u00e9)",
      "{num_points} points possibles (pas not\u00e9)"
    ],
    "{num_points} point possible (ungraded, results hidden)": [
      "{num_points} point possible (non not\u00e9, r\u00e9sultats cach\u00e9s)",
      "{num_points} points possibles (non not\u00e9, r\u00e9sultats cach\u00e9s)",
      "{num_points} points possibles (non not\u00e9, r\u00e9sultats cach\u00e9s)"
    ],
    "{organization}\\'s logo": "logo {organization}",
    "{paragraphStart}You entered {boldStart}{email}{boldEnd}. If this email address is associated with your {platform_name} account, we will send a message with password recovery instructions to this email address.{paragraphEnd}{paragraphStart}If you do not receive a password reset message after 1 minute, verify that you entered the correct email address, or check your spam folder.{paragraphEnd}{paragraphStart}If you need further assistance, {anchorStart}contact technical support{anchorEnd}.{paragraphEnd}": "{paragraphStart}Vous avez entr\u00e9 {boldStart}{email}{boldEnd}. Si cette adresse courriel est associ\u00e9e \u00e0 votre compte {platform_name}, nous vous enverrons un message avec les instructions pour r\u00e9initialiser votre mot de passe \u00e0 cette adresse courriel.{paragraphEnd} {paragraphStart}Si vous ne recevez pas un courriel de r\u00e9initialisation apr\u00e8s 1 minute, v\u00e9rifiez que vous avez entr\u00e9 votre adresse courriel correctement ou v\u00e9rifiez votre dossier de pourriel. {paragraphEnd}{paragraphStart}Si vous avez besoin d'aide, {anchorStart}contacter le support technique{anchorEnd}.{paragraphEnd}",
    "{paragraph}=p;{preformatted}=pre;{heading3}=h3;{heading4}=h4;{heading5}=h5;{heading6}=h6": "{paragraph}=p;{preformatted}=pre;{heading3}=h3;{heading4}=h4;{heading5}=h5;{heading6}=h6",
    "{platform_display_name} Link": "{platform_display_name} Lien",
    "{screen_reader_start}Warning:{screen_reader_end} No content groups exist.": "{screen_reader_start}Avertissement : {screen_reader_end} Il n'existe aucun groupe de contenu.",
    "{screen_reader_start}Warning:{screen_reader_end} The previously selected content group was deleted. Select another content group.": "{screen_reader_start}Avertissement : {screen_reader_end} Le groupe de contenu s\u00e9lectionn\u00e9 pr\u00e9c\u00e9demment a \u00e9t\u00e9 supprim\u00e9. S\u00e9lectionnez un autre groupe de contenu.",
    "{seconds} {unit}": "{seconds} {unit}",
    "{selectedProvider} credentials saved": "Cr\u00e9dits {selectedProvider} sauvegard\u00e9s",
    "{sessionDates} (Open until {enrollmentEnd})": "{sessionDates} (Ouvertes jusqu'au {enrollmentEnd})",
    "{sessionDates} - Currently Selected": "{sessionDates} - S\u00e9lection actuelle",
    "{startTag}{requestToken}{endTag}{selector}": "{startTag}{requestToken}{endTag}{selector}",
    "{start_strong}{total}{end_strong} words submitted in total.": "{start_strong}{total}{end_strong} mots soumis au total.",
    "{strongStart}Warning: Account deletion is permanent.{strongEnd} Please read the above carefully before proceeding. This is an irreversible action, and {strongStart}you will no longer be able to use the same email on {platformName}.{strongEnd}": "{strongStart}Avertissement : la suppression du compte est permanente. {strongEnd}Veuillez lire attentivement les informations ci-dessus avant de poursuivre. Ceci est une action irr\u00e9versible et {strongStart}vous ne pourrez plus utiliser la m\u00eame adresse courriel sur {platformName}.{strongEnd}",
    "{team_count} Team": [
      "{team_count} \u00c9quipe",
      "{team_count} \u00c9quipes",
      "{team_count} \u00c9quipes"
    ],
    "{totalItems} total": "total de {totalItems}",
    "{total_results} result found for \"{search_term}\"": [
      "{total_results} r\u00e9sultat trouv\u00e9 pour le \"{search_term}\"",
      "{total_results} r\u00e9sultats trouv\u00e9s pour le \"{search_term}\"",
      "{total_results} r\u00e9sultats trouv\u00e9s pour le \"{search_term}\""
    ],
    "{transcriptClientTitle}_{transcriptLanguageCode}.{fileExtension}": "{transcriptClientTitle}_{transcriptLanguageCode}.{fileExtension}",
    "{type} Progress": "{type} Progress",
    "{unread_comments_count} new": "{unread_comments_count} nouveaux",
    "\u2026": "\u2026"
  };
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
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
<<<<<<< HEAD
      "%d/%m/%Y",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
=======
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j N Y H:i",
    "SHORT_DATE_FORMAT": "j N Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
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

