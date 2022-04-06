import { Locale, Role, Sector } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";

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
        "is erop gericht leerlingen te begrijpen als unieke sociale wezens, die een persoonlijke relatie met deleraar hebben.",
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
    findEachOther: "Zoek elkaar op en maak je klaar",
    found: "Gevonden!",
    waitForOthers: "Wachten op medespelers...",
    waitUntil:"Nog even wachten tot iedereen klaar is"
  },
  game: {
    round: "Ronde",
    of: "van",
    done: "Ik ben klaar",
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
    },
    info: {
      discussDiff: "Bespreek de verschillen en overeenkomsten",
      understood: "Ik snap het",
    },
    compare: {
      discussDiff: "Bespreek de verschillen en overeenkomsten",
      ready: "Wij zij klaar",
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
