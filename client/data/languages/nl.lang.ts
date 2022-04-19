import { Locale, Role, Sector } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";
import { IconsEnum } from "../../lib/components/Icon/Icon";

export const NL: Locale = {
  playerType: {
    [PlayerType.Professionals]: "Professionals",
    [PlayerType.Students]: "Studenten",
  },
  roles: {
    [Role.Lecturer]: "Docent",
    [Role.Trainer]: "Trainer",
    [Role.Manager]: "Manager",
    [Role.Other]: "Anders",
  },
  year: {
    1: "Jaar 1",
    2: "Jaar 2",
    3: "Jaar 3",
    4: "Jaar 4",
  },
  sector: {
    [Sector.PO]: "PO",
    [Sector.VO]: "VO",
    [Sector.MBO]: "MBO",
    [Sector.HBO]: "HBO",
    [Sector.WO]: "WO",
    [Sector.PrMaHBO]: "PrMaHBO",
    [Sector.AcMa]: "AcMa",
    [Sector.Other]: "Anders",
  },
  categories: {
    0: {
      title: "Zorg legitimering",
      description:
        "is erop gericht het maximale uit kinderen te halen in termen van hun prestaties op school.",
    },
    1: {
      title: "Persoonlijke legitimering",
      description:
        "is erop gericht het gedrag van leerlingen te labelen in mentale of emotionele termen ten einde adequaat onderwijs te kunnen verzorgen.",
    },
    2: {
      title: "Contextuele legitimering",
      description:
        "is erop gericht de leefomstandigheden, het verleden, en de praktische levensbehoeften van leerlingen te betrekken bij onderwijssituaties.",
    },
    3: {
      title: "Kritische legitimering",
      description:
        "is erop gericht leerlingen te begrijpen als unieke sociale wezens, die een persoonlijke relatie met de leraar hebben.",
    },
    4: {
      title: "Functionele legitimering",
      description:
        "is erop gericht leerlingen te zien als kwetsbare wezens, die afhankelijk zijn van volwassenen om te overleven in een veeleisende wereld.",
    },
    5: {
      title: "Psychologische legitimering",
      description:
        "is erop gericht leerlingen te bevrijden van beperkende ideeën over zichzelf en van de levensomstandigheden die deze ideeën inslijpen.",
    },
  },
  landing: {
    title: "Ontdek jouw idealen als leraar",
    description:
      "Leer jouw eigen pedagogisch krachten kennen met dit spel. Je speelt met andere spelers, samen bespreken jullie de resultaten.",
    input: "Voer spelcode in",
    button: "Meedoen aan spel",
    create: "Spel aanmaken",
    asAdmin: "als beheerder",
  },
  playerMatch: {
    youPlayWith: "Je speelt met",
    youAre: "Jullie zijn",
    findEachOther: "Zoek elkaar op en maak je klaar.",
    found: "Gevonden!",
    waitForOthers: "Wachten op medespeler...",
    waitUntil: "Nog even wachten tot iedereen klaar is",
  },
  game: {
    round: "Ronde",
    of: "van",
    done: "Ik ben klaar",
  },
  adminGame: {
    round: {
      settingsButton: "Instellingen",
      rulesButton: "Uitleg",
      category: "Categorie",
      finish: "Ronde afronden",
      notStarted: "Niet begonnen",
      allStarted: "Iedereen is begonnen",
      playing: "Bezig",
      notPlaying: "Er zijn geen teams bezig",
      done: "Klaar",
      notDone: "Er zijn nog geen teams klaar",
      areYouSure: "Weet je het zeker?",
      yesSure: "Ja, start de volgende ronde",
      there: "Er",
      isOneTeam: "is nog 1 team",
      are: "zijn nog",
      stillPlaying: "bezig met het afronden van de ronde.",
    },
    lead: {
      continuing: "Door naar ronde",
      of: "van",
    },
  },
  adminLobby: {
    info: {
      title: "Voor we beginnen",
      items: [
        {
          caption: "Meedoen",
          text: "Alle spelers moeten eerst naar pedago.game gaan.",
          icon: IconsEnum.Info,
        },
        {
          caption: "Unieke code",
          text: "Spelers kunnen meedoen met het spel door de code in te vullen die straks verschijnt.",
          icon: IconsEnum.Code,
        },
        {
          caption: "Scherm delen",
          text: "Het is handig om je scherm te delen, zodat spelers ten alle tijden zien of ze al meedoen, of wat de code is.",
          icon: IconsEnum.ScreenShare,
        },
        {
          caption: "Spel starten",
          text: "Wanneer je het spel start kun je niet meer terug.",
          icon: IconsEnum.Flag,
        },
        {
          caption: "'Locken'",
          text: "Er is een slotje naast de startknop die je kunt indrukken om te voorkomen dat er nog meer mensen mee gaan doen.",
          icon: IconsEnum.Lock,
        },
        {
          caption: "Spelers verwijderen",
          text: "Spelers kunnen worden gekickt wanneer ze niet welkom zijn, door er op te klikken of tappen.",
          icon: IconsEnum.Remove,
        },
        {
          caption: "Instellingen aanpassen",
          text: "De timer kan worden uitgeschakeld en de groepsnamen kunnen worden aangepast.",
          icon: IconsEnum.Settings,
        },
      ],
      understood: "Ik snap het",
    },
    lobby: {
      settingsButton: "Instellingen",
      rulesButton: "Uitleg",
      code: "Voer de code in op",
      andJoin: "en doe mee",
      start: "Start",
    },
    playerGroup: {
      waiting: "Wachten op spelers",
    },
  },
  adminWizard: {
    name: {
      step: "Stap",
      yourInfo: "Jouw gegevens",
      name: "Naam",
      email: "E-mailadres",
      emailHelp: "We gebruiken het enkel om de resultaten te sturen",
      role: "Functie",
      customRole: "Anders, namelijk:",
      nextButton: "Volgende",
    },
    check: {
      yourInfo: "Jouw gegevens",
      name: "Naam",
      email: "E-mailadres",
      role: "Functie",
      organisation: "Organisatie",
      gameOptions: "Spelopties",
      players: "Spelers",
      timer: "Timer",
      none: "n.v.t.",
      on: "Aan",
      off: "Uit",
      group: "Groepen",
      groups: "Groepen",
      create: "Spel aanmaken",
      back: "Terug naar vorige stap",
    },
    gameType: {
      step: "Stap",
      typePlayers: "Type spelers",
      education: "Opleiding",
      year: "Leerjaar",
      sector: "Sector",
      next: "Volgende",
      back: "Terug naar vorige stap",
    },
    options: {
      step: "Stap",
      title: "Extra spelopties",
      timerLabel: "Timer",
      timerText: "Spelrondes krijgen dan een limiet van 10 minuten",
      inGroups: "Werken in groepen",
      inGroupsText:
        "Spelers spelen zoveel mogelijk met spelers uit andere groepen",
      group1: "Groepen",
      group1Help: "Je kan met minimaal 2 en maximaal 4 groepen spelen.",
      group2: "Groep 2",
      group3: "Groep 3",
      group4: "Groep 4",
      next: "Volgende",
      back: "Terug naar de vorige stap",
    },
    organisation: {
      step: "Stap",
      yourOrg: "Jouw organisatie",
      organisation: "Organisatie",
      location: "Locatie",
      locationHelp: "Eventueel met extra uitleg",
      next: "Volgende",
      back: "Terug naar de vorige stap",
    },
  },
  gameWizard: {
    roomCode: {
      roomCodeLabel: "Voer de spelcode in",
      nextButton: "Volgende",
    },
    name: {
      title: "Jouw voornaam",
      othersWillSee: "Anderen zien hierdoor met wie ze spelen.",
      nameLabel: "Naam",
      nextButton: "Volgende",
    },
    group: {
      title: "Kies je groep",
    },
    info: {
      title: "Speluitleg",
      items: [
        {
          caption: "6 rondes",
          text: "Iedere ronde speel je tegen iemand anders en krijg je andere keuzes.",
        },
        {
          caption: "10 minuten",
          text: "Voor elke rond heb je tien minuten om kaarten te sorteren en te bespreken.",
        },
        {
          caption: "Kaarten sorteren",
          text: "Per ronde moet je zes kaarten sorteren, van meest naar minst belangrijk.",
        },
        {
          caption: "Bespreken",
          text: "Als jij en je partner gesorteerd hebben, bespreek je de resultaten met elkaar.",
        },
        {
          caption: "Resultaat",
          text: "Na zes rondes krijg je jouw resultaat.",
        },
      ],
      understood: "Ik snap het",
    },
  },
  gameLobby: {
    hi: "Hoi",
    willStart: "Het spel begint zo",
    waiting: "We wachten even tot iedereen er is en dan kunnen we starten",
  },
  waiting: {
    goodBusy: "Goed bezig!",
    waiting: "Wachten tot",
    isReady: "klaar is..",
    and: "en",
    areReady: "klaar zijn..",
    changeSomething: "Nog iets aanpassen?",
  },
  discuss: {
    ready: {
      ready: "is klaar",
    },
    intro: {
      discussDiff: "Bespreek de verschillen en overeenkomsten met",
      items: [
        {
          caption: "Links begint",
          text: "De persoon met de linker rij trapt af.",
        },
        {
          caption: "Bespreek de kaarten per positie ",
          text: "Bespreek elkaars kaarten tegelijk van meest naar minst belangrijk.",
        },
        {
          caption: "Stel elkaar vragen",
          text: "Vraag elkaar waarom de keuze hoog staat.",
        },
        {
          caption: "Niks is fout",
          text: "Iedere volgorde is correct, probeer elkaar niet te overtuigen.",
        },
        {
          caption: "Ieder heeft zijn eigen kijk",
          text: "Probeer je te verplaatsen in de ander.",
        },
      ],
    },
    info: {
      discussDiff: "Bespreek de verschillen en overeenkomsten",
      understood: "Ik snap het",
    },
    compare: {
      discussDiff: "Bespreek de verschillen en overeenkomsten",
      ready: "Wij zij klaar",
      info: "Uitleg",
    },
  },
  results: {
    loader: {
      done: "Helemaal klaar!",
      fetchResult: "We halen jouw resultaten op.",
    },
    results: "Resultaten",
    myResult: "Mijn resultaat",
    everyone: "Iedereen",
    yourResult: "Jouw uitkomst",
    save: "Bewaren",
    sendToMail: "We kunnen de uitkomst naar je e-mailadres toe sturen.",
    yourMail: "Jouw e-mailadres",
    send: "Versturen",
    privacy: "Je mail wordt alleen gebruikt voor het opsturen.",
  },
  rounds: [
    {
      id: 1,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
    {
      id: 2,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
    {
      id: 3,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
    {
      id: 4,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
    {
      id: 5,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
    {
      id: 6,
      lead: "In mijn onderwijs vind ik het van belang voor leerlingen...",
      cards: [
        {
          id: "0",
          title: "Dat ze leren zichzelf te redden in een veeleisende wereld.",
        },
        {
          id: "1",
          title: "Dat ze zelf leren richting te geven aan hun leven.",
        },
        {
          id: "2",
          title: "Dat ze opgroeien tot bewuste, onafhankelijke volwassenen.",
        },
        {
          id: "3",
          title:
            "Dat ze hun weg leren vinden in het sociaal maatschappelijk verkeer.",
        },
        {
          id: "4",
          title: "Dat ze doorstromen naar zo hoog mogelijk vervolgonderwijs.",
        },
        {
          id: "5",
          title:
            "Dat ze realistische verwachtingen ontwikkelen ten aanzien van wat ze kunnen bereiken in het leven",
        },
      ],
    },
  ],
};
