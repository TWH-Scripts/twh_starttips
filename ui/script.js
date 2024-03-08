


var responsiveSlider = function() {
  var quotes = [ 
    "Die roten Gebiete auf der Karte sind als lebensgefährlich bekannt.",
    "Gehe nachts nicht alleine hinaus. Ein Rudel Wölfe könnte dir Gesellschaft leisten.",
    "Um Schlösser zu knacken braucht es einen Dietrich.",
    "Unterhalte dich mit den Leuten! Du kannst viel erfahren.",
    "Besorge dir Werkzeug und mache dich selbstständig.",
    "Hacken lassen sich viele Dinge: Minenschächte, Bäume, der Boden… Manche hacken sogar auf Menschen herum.",
    "Wasser ist dein Feind. Es lässt dich nicht atmen.",
    "X öffnet das Radialmenü. X + S öffnet die Suche.",
    "Es ist eine schlechte Idee vor Outlaws wegzurennen, so lange sie nicht schießen. Eine bessere Idee ist es, stehen zu bleiben und sich anzuhören, was sie zu sagen haben.",
    "Es ist eine schlechte Idee vor den Sheriffs wegzurennen, wenn sie “stehen bleiben” rufen. Besser ist es, stehen zu bleiben und sich anzuhören, was sie zu sagen haben.",
    "Karten – zum Spielen, Sammeln und Tauschen.",
    "Kratze regelmäßig die Hufe deiner Pferde aus. Bist du gut zu deinem Pferd, ist es gut zu dir.",
    "Alte Pferde galoppieren ungern.",
    "Tritt nicht zu dicht an fremde Personen heran. Sie könnten sich dadurch unwohl fühlen.",
    "Heute schon abgestimmt?",
    "Die Preise bei den NSC unterliegen Schwankungen.",
    "Wenn sich dein Pferd weit genug an dich gewöhnt hat, führt es vielleicht sogar ein paar Tricks für dich durch.",
    "Bürste dein Pferd regelmäßig. Behandelst du dein Pferd gut, ist es immer für dich da.",
    "Durch zweimaliges Pfeifen signalisierst du deinem Pferd dir zu folgen oder stehen zu bleiben. Drücke dazu nahe bei deinem Pferd zweimal H.",
    "Du wirst jede Menge kleiner Gelegenheitsjobs finden, um dir die Zeit zu vertreiben und dich über Wasser zu halten.",
    "Sprich mit den Leuten! Neben Informationen halten sie auch Aufgaben für dich bereit.",
    "Heute machst du gutes RP!",
    "Geld und Gegenstände sind nicht alles. Beziehungen und ein Ruf sind ebenfalls wichtig.",
    "Scheue dich nicht, dein Pferd zu füttern. Wähle eine Karotte in deinem Inventar aus, wenn du direkt neben deinem Pferd stehst.",
    "Wenn du einen Zivilisten spielst, sind verbrecherische Tätigkeiten unpassend für dich.",
    "Entschliesst du dich für einen Respawn, findest du deine verlorenen Gegenstände im Fundbüro der Stadt.",
    "Überall auf der Welt gibt es Stallburschen, die für dich dein Pferd satteln.",
    "Raubkatzen haben dich zum Fressen gern!",
    "Prüfe regelmäßig die schwarzen Bretter in den Städten. Die Bewohner der Western Hills schlagen dort ihre Aushänge an.",
    "Jeder kann ein Gewerbe betreiben, der Sozialstufe 5 erreicht hat.",
    "Es gibt keine Zweitcharaktere. Sobald du all deine RP Stränge abgeschlossen hast, kannst du deinen Charakter wechseln.",
    "Verhalte dich deiner Rolle entsprechend!",
    "Alles, das du dabei hast, kannst du bei einem Überfall verlieren.",
    "Dein Charakter ist sterblich.",
    "Jeder kann alles. Je häufiger jemand etwas macht, desto besser kann man es.",
    "Zur Minenarbeit benötigst du eine Spitzhacke. Dann musst du nur noch eine vielversprechende Stelle zum Hacken finden.",
    "Zum Bäume fällen benötigst du eine Holzfälleraxt. Untersuche die Bäume, welcher dir zum Fällen passend erscheint.",
    "Um Pflanzen anzubauen, brauchst du eine Hacke, um den Boden zu lockern, eine Pflanzenschere, einen Eimer, um die Pflanzen zu gießen und einen Setzling zum Anbauen.",
    "Dein Charakter kann verdursten und verhungern.",
    "Zieh’ dich warm an, wenn es kalt ist. Ansonsten kannst du erfrieren. Die gefühlte Temperatur wird dir im HUD eingeblendet.",
    "Auf den Karten der Western Hills sind einige interessante Punkte markiert. Du kannst eigene Kartenmarkierungen über das Radialmenü hinzufügen.",
    "Solltest du deine Karte verlieren, kannst du dir im Gemischtwarenladen jederzeit eine neue kaufen.",
    "Um Auf deinem Pferd in Deckung zu gehen drücke left Alt + A, bzw. left Alt + D",
    "Auch nachdem du zu Boden gegangen bist, kannst du die Kamera mit WASD bewegen.",
    "Nachdem du zu Boden gegangen bist, kannst du einen Arzt rufen. Sei so fair und warte ab! Wenn sich niemand meldet, kannst du immer noch respawnen.",
    "Nach einem Respawn ist dein Inventar leer. In jeder Stadt gibt es ein Fundbüro, das du für 5$ öffnen kannst. Darin findest du deine verlorenen Gegenstände wieder.",
    "Mit Shift+Linksklick lässt sich ein kompletter Stapel aus dem Inventar übertragen",
    "Mit Q und E kann man im Inventar durch die Kategorien schalten",
    "Tippe im T-Menü /craftlist und dir werden deine Rezepte angezeigt",
    "Behalte die Kopfgeldjägeraushänge im Auge. Man will schliesslich wissen, von wem man sich fernhalten muss.",
    "Mit /steckbrief siehst du bei einer Kopfgeldjagd das Bild der gesuchten Person.",
    "Bäume, die gefällt werden können, haben meist einen hohen, geraden Wuchs.", // so dick, dass du ihn nicht umarmen kannst
    "Dein Pferd kann verschiedene Tricks ausführen: /horseDrink",
    "Welcome to the Western Hills!",
    "Überlege dir gut, ob du deine Waffe wirklich mit ins Wasser nehmen möchtest.",
    "Mit einem Waffenpflegeset kannst du deine Waffe abbürsten, trocknen und einölen. Regelmäßige Pflege ist wichtig, da deine Waffe sonst kaputt geht.",
    "Fällt deine Waffe ins Wasser, dann vergiss nicht, sie zu trocknen und zu reinigen, damit du noch lange Freude an ihr hast."
    // Add more quotes as needed 
  ];
    
  
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  
    shuffleArray(quotes);
  
    var slider = document.getElementById("slider");
    var slideList = document.getElementById("slideWrap");
  
    // Dynamically generate slides
    quotes.forEach(function(quote) {
      var li = document.createElement("li");
      li.textContent = quote;
      slideList.appendChild(li);
    });
  
    var items = slideList.querySelectorAll("li").length;
    var count = 1;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
  
    var updateSlidePosition = function() {
      var slideWidth = slider.offsetWidth;
      slideList.style.left = "-" + (count - 1) * slideWidth + "px";
    };
  
    window.addEventListener('resize', updateSlidePosition);
  
    var autoSlideInterval;
    var slideIntervalTime = 8000;
  
    var startAutoSlide = function() {
      autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
    };
  
    var resetAndStartAutoSlide = function() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };
  
    var prevSlide = function() {
      if (count > 1) {
        count--;
      } else {
        count = items;
      }
      updateSlidePosition();
      resetAndStartAutoSlide();
    };
  
    var nextSlide = function() {
      if (count < items) {
        count++;
      } else {
        count = 1;
      }
      updateSlidePosition();
      resetAndStartAutoSlide();
    };
  
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  
    startAutoSlide();
    updateSlidePosition(); // Initial position update
};

window.addEventListener('message', function (event) {
    $('body').animate({ opacity: event.data.show ? 1 : 0 }, 500);
    switch (event.data.action) {
        case 'startup':
            console.log("startup js");
            //responsiveSlider();
    }
});

window.onload = function() {
    responsiveSlider();
  }