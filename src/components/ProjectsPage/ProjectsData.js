import { v1 as uuid } from "uuid";

const createIcons = function createIconArrayForGithubAndLivePreview(
  repo,
  live
) {
  return [
    {
      iconLink: repo,
      icon: "/img/github-mark.svg",
      iconAlt: "Github icon",
    },
    {
      iconLink: live,
      icon: "/img/live-preview.svg",
      iconAlt: "Live preview icon",
    },
  ];
};

const data = {
  projects: [
    {
      id: uuid(),
      name: "Battleship",
      details:
        "Eine Webversion des Brettspiels „Schiffe versenken“. Dabei habe ich „Test Driven Development“ angewendet.",
      moreDetails: [
        "In diesem Projekt aus dem Odin Kurs ging es hauptsächlich um „Test Driven Development“. Um das Konzept in seiner Anwendung mit seinen Vorteilen kennenzulernen. Mit Jest habe ich also zuerst die Tests geschrieben und dann den Code für das Spiel entwickelt. Ziel war es, dass am Ende alle wichtigen Funktionen Tests hatten.",
        "Um zu spielen, gibt es am Anfang ein Fenster, wo der Spieler seine Schiffe setzen kann. Der Computer setzt dann anschließend zufallsbasiert Schiffe.",
        "Genau wie beim Brettspiel versucht der Spieler alle Schiffe vom Gegner zu treffen. Der Spieler hat einen Überblick über die beiden Spielfelder, auf seine eigenen Schiffe und auf die getroffenen und ins Wasser gegangenen Schüsse. Der Computer schießt dann nach jedem Zug immer zufällig auf ein freies Spielfeld.",
      ],
      imageLink: "https://tomsoerr.github.io/odin-battleship/",
      image: "/img/battleship.png",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-battleship",
        "https://tomsoerr.github.io/odin-battleship/"
      ),
    },
    {
      id: uuid(),
      name: "Todo List",
      details:
        "Eine To-do Liste mit verschiedenen Funktionen. Todo's werden in Local Storage gespeichert.",
      moreDetails: [
        "In diesem Projekt aus dem Odin Kurs ging es um objektorientierte Programmierung, indem unterschiedliche Funktionen ihre eigenen Module bekommen sollten, um sie unabhängig zu machen. So spart man sich viel Arbeit, indem man den Code flexibler und leichter zu skalieren macht. Die Anwendung sollte außerdem bestimmte Funktionen wie die Sortierung nach „Alle“, „Heute“ und „Diese Woche“ bekommen",
        "Die To-dos können auch in bestimmte Projekte eingeteilt und sortiert werden. Jede Aufgabe hat einen Titel, Status, Datum, Priorität und ein Feld für Notizen. ",
        "Wie in vielen anderen Projekte habe ich hier auch mit dem JavaScript-Modul-Packer Webpack gearbeitet. ",
      ],
      imageLink: "https://tomsoerr.github.io/odin-todo-list/",
      image: "/img/todo-list.jpg",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-todo-list",
        "https://tomsoerr.github.io/odin-todo-list/"
      ),
    },
    {
      id: uuid(),
      name: "Weather App",
      details:
        "Eine einfache aber funktionale Wetter App mit einer Suchfunktion.",
      moreDetails: [
        "Diese Wetter App wurde im Rahmen des Odin Kurses umgesetzt. Sie ist mit HTML, CSS und JavaScript geschrieben. Die Wetterdaten werden von der OpenWeatherMap API bezogen. Die App ist responsive und funktioniert auf allen Geräten.",
      ],
      imageLink: "https://tomsoerr.github.io/odin-weather-app/",
      image: "/img/weather-app.jpg",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-weather-app",
        "https://tomsoerr.github.io/odin-weather-app/"
      ),
    },
    {
      id: uuid(),
      name: "Python",
      details:
        "Meine gesammelten Python Erfahrungen durch eine Facharbeit, ein YoloV5 Modell, ein Macro Recorder und etwas Django.",
      moreDetails: [
        "Mit einem Kurs vom „freeCodeCamp“ (siehe Zertifikat auf Github) habe ich mir die Grundlagen von Python beigebracht und anschließend Projekte umgesetzt.",
        "Für eine Facharbeit in der Schule, programmierte ich ein neuronales Netz, welches handgeschrieben Zahlen erkennt. Unterstützend habe ich mit dem Buch von Tariq Rashid gearbeitet. Das Netz wurde an der MNIST-Datenbank getestet und hatte eine Fehlerquote von nur 3 %.",
        "Anschließend habe ich mir einen kleinen Datensatz erstellt und mit YOLOv5 ein Modell trainiert. Dieses konnte in dem Handyspiel „Clash of Clans“ bestimmte zufällig generierte Objekte erkennen (Siehe Bild rechts oben).",
        "Außerdem habe ich mit Python einen „Makro Rekorder“ geschrieben, der die Maus und Tastatur aufzeichnet, indem die Aufzeichnungen abgespeichert werden können. Das UI habe ich mit Tkinter erstellt, welches auf den meisten Betriebssystemen läuft. Leider funktioniert für Aufzeichnungen die verwendete Library nur mit Windows. Ebenso gibt es die Möglichkeit, dass eine andere Python Anwendung die Aufzeichnungen einfach abspielen kann ohne die UI. (siehe Code auf Github)",
      ],
      imageLink: "https://github.com/TomSoerr/freeCodeCamp-Projects",
      image: "/img/yolov5.jpg",
      icons: createIcons(
        "https://github.com/TomSoerr/macro-recorder",
        "https://www.freecodecamp.org/certification/tom-soerr/scientific-computing-with-python-v7"
      ),
    },
    {
      id: uuid(),
      name: "Sign-up Form",
      details:
        "Ein Anmeldeformular mit Eingabeüberprüfung und Passwortstärkeanzeige.",
      moreDetails: [
        "In diesem Formular-Projekt von Odin, geht es vordergründig um das Styling von Input Element mit CSS. Dadurch erhält der Benutzer ein direktes Feedback, ob seine Daten valide sind, ohne dabei auf das Back-End warten zu müssen. Die Eingabeüberprüfung wurde hier mit dem HTML Attribut „pattern“ und RegEx gemacht. JavaScript habe ich vermieden, um den Prozess zu vereinfachen.",
        "Für die Passwortüberprüfung war allerdings JavaScript erforderlich. Bei dem Design gab es keine Designvorgaben, sodass ich mich für einen brutalistisches entschieden habe.",
      ],
      imageLink: "https://tomsoerr.github.io/odin-sign-up-form/",
      image: "/img/sign-up-form.png",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-sign-up-form",
        "https://tomsoerr.github.io/odin-sign-up-form/"
      ),
    },
    {
      id: uuid(),
      name: "Admin Dashboard",
      details:
        "Eine Dashboard mit einem flexiblen CSS Grid Layout welches sich optimal an verschiedene Bildschirmgrößen anpasst.",
      moreDetails: [
        "Mit diesem Odin Projekt habe ich das Ziel verfolgt, eine Webseite mit einem flexiblen Grid Layout zu erstellen. Durch die Verwendung von CSS Grid konnte ich die Seite komplett responsiv gestalten. Das erstellte Dashboard besitzt keinerlei Funktionen und hat auch kein Back-End.",
        "An der Seite gibt es eine Leiste mit verschiedenen Menüpunkten, die einzelnen Kacheln sind dann unabhängige Container, die sich dem Platz anpassen. Bei dem Design habe ich mich an den Aufbau eines Contentmanagement Systeme orientiert.",
        "Der Code sowie eine Live-Preview des Projekts sind auf meinem GitHub-Profil verfügbar. Interessierte können dort auch weitere Projekte von mir einsehen sowie einen zeitlichen Verlauf meiner Commits verfolgen. Ich bin stolz darauf, eine flexible und responsive Webseite mit CSS Grid erstellt zu haben, da es meiner Begeisterung für Webentwicklung entspricht.",
      ],
      imageLink: "https://tomsoerr.github.io/odin-admin-dashboard/",
      image: "/img/admin-dashboard.jpg",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-admin-dashboard",
        "https://tomsoerr.github.io/odin-admin-dashboard/"
      ),
    },
    {
      id: uuid(),
      name: "Rebellinnen Plakat ",
      details:
        "Ein Plakat für eine Ausstellung über Rebellinnen mit einem Logo und einem Corporate Design.",
      moreDetails: [
        "Dieses Plakat war ein Auftrag von meinen Lehrer:innen zum Thema Corporate Design. Zur Aufgabenstellung gehörte ein Briefing des Kunden sowie konkrete Angaben zum Design und Layout. Das Ziel war es außerdem, dass das Plakat visuell zu den anderen Plakaten der Ausstellung passt.",
        "Zu Beginn suchte ich mir passend zum Thema eine Rebellin aus.  Im nächsten Schritt habe ich für die Logoentwicklung ein Moodboard erstellt, dann mithilfe einer morphologischen Matrix erste Skizzen für das Logo gezeichnet und diese dann in Illustrator weiter ausgeführt. Mit dem von mir gesammelten Material habe ich das Plakat in InDesign zusammengestellt und für die Bildbearbeitung Photoshop benutzt.",
      ],
      imageLink: process.env.PUBLIC_URL + "/img/rebellinnen-plakat.pdf",
      image: "/img/rebellinnen.jpg",
      icons: [],
    },

    {
      id: uuid(),
      name: "Other Projects",
      details:
        "Ich habe noch viele weitere Projekte, schau doch mal auf Github vorbei!",
      moreDetails: [
        "Im Rahmen des Odin Kurses habe ich noch viele weitere Projekte umgesetzt. Diese sind alle auf Github zu finden. Außerdem habe ich noch ein paar weitere Projekte, die ich nicht im Rahmen des Kurses gemacht habe. Diese sind ebenfalls auf Github zu finden.",
      ],
      imageLink: "https://github.com/TomSoerr",
      image: "/img/github.jpg",
      icons: [
        {
          iconLink: "https://github.com/TomSoerr",
          icon: "/img/github-mark.svg",
          iconAlt: "Github icon",
        },
      ],
    },
  ],
};

const FAQ = [
  {
    question: "",
    answer: "",
  },
];

export { data as default, FAQ };
