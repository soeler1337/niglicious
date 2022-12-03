(function () {
    var messages = [
        "Habt Sonne im Herzen und Pizza im Bauch, <br> dann bleibt ihr glücklich und satt seid ihr auch. Alles Gute zum Hochzeitstag!",
        "Die Ehe ist etwas für Entdecker und Wagemutige! <br>Diese Voraussetzung habt ihr bereits erfüllt. Alles Gute zum Hochzeitstag!",
        "Der Heiratsmarkt hat vor … Jahre zwei seiner besten Leute verloren! <br> Das ist das Beste, was euch passieren konnte! Gratulation zum Hochzeitstag!",
        "Zuerst wart ihr Freunde, dann Verliebte und jetzt Geliebte! Läuft bei euch! <br>Herzlichen Glückwunsch zum Hochzeitstag!",
        "Ehe bedeutet Gemeinsamkeit und doch wünsche ich euch zum Hochzeitstag auch Trennendes, <br>denn so wird es niemals langweilig.",
        "Wir wünschen Euch für die Zukunft ganz viel Liebe und ganz viel Humor <br> dann kommt die Gesundheit von ganz alleine! Alles Gute zum Hochzeitstag!",
        "Alles Gute und alles Liebe wurde euch sicher schon gesagt. Macht einfach weiter so, wir wollen schließlich noch viele Hochzeitstage mit euch feiern!",
        "Eine gute Ehe ist wie Haarspray: Perfekter Halt ohne zu kleben! <br> Bleibt so, wie ihr seid <br> alles Gute zum Hochzeitstag!",
        "Aus Liebe macht man komische Sachen – manche heiraten sogar! <br> Gut, dass ihr das gemacht habt. Macht weiter so, ihr Komiker – alles Gute zum Hochzeitstag!",
        "Heirat ist eine Dummheit, die immer zu zweit begangen wird. Macht einfach weiter das Beste draus <br> alles Liebe zum Hochzeitstag!"
    ],
    i = 0;
    setInterval(function(){ $('#messages').fadeOut(function(){
        $(this).html(messages[(i = (i + 1) % messages.length)]).fadeIn();
      }); }, 3000)
  })();
  