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
      name: "Admin Dashboard",
      details: "Eine simples Dashboard mit einem flexiblen CSS Grid Layout",
      moreDetails:
        "Mit diesem Odin Projekt habe ich das Ziel verfolgt, eine Webseite mit einem flexiblen Grid Layout zu erstellen. Durch die Verwendung von CSS Grid konnte ich die Seite komplett responsiv gestalten. Das erstellte Dashboard besitzt keinerlei Funktionen und hat auch kein Back-End. An der Seite gibt es eine Leiste mit verschiedenen Menüpunkten, die einzelnen Kacheln sind dann unabhängige Container, die sich dem Platz anpassen. Bei dem Design habe ich mich an den Aufbau eines Contentmanagement Systeme orientiert. Der Code sowie eine Live-Preview des Projekts sind auf meinem GitHub-Profil verfügbar. Interessierte können dort auch weitere Projekte von mir einsehen sowie einen zeitlichen Verlauf meiner Commits verfolgen. Ich bin stolz darauf, eine flexible und responsive Webseite mit CSS Grid erstellt zu haben, da es meiner Begeisterung für Webentwicklung entspricht.",
      imageLink: "https://tomsoerr.github.io/odin-battleship/",
      image: "/img/adminDashboard.png",
      icons: createIcons(
        "https://github.com/TomSoerr/odin-battleship",
        "https://tomsoerr.github.io/odin-battleship/"
      ),
    },
  ],
};

export default data;
