import { Locale, PlayerType, Role, Sector } from "models";
import { IconsEnum } from "../../lib/components/Icon/Icon";
import { NL } from "./nl.lang";

export const EN: Locale = {
  ...NL,
  playerType: {
    [PlayerType.Professionals]: "Professionals",
    [PlayerType.Students]: "Students",
  },
  roles: {
    [Role.Lecturer]: "Lecturer",
    [Role.Trainer]: "Trainer",
    [Role.Manager]: "Manager",
    [Role.Other]: "Other",
  },
  year: {
    1: "Year 1",
    2: "Year 2",
    3: "Year 3",
    4: "Year 4",
  },
  sector: {
    [Sector.PO]: "Primary education",
    [Sector.VO]: "Secondair education",
    [Sector.MBO]: "Secondary vocational education",
    [Sector.HBO]: "Higher education - Applied sciences",
    [Sector.WO]: "Higher education - Sciences",
    [Sector.PrMaHBO]: "Professional Master",
    [Sector.AcMa]: "Research Master",
    [Sector.Other]: "Other",
  },
  categories: {
    0: {
      title: "Caring legitimization",
      description:
        "expresses a caring orientation towards the pupils' best interest, in the sense that pupils are seen as vulnerable and very dependent on grown-ups to survive in a demanding world.",
    },
    1: {
      title: "Personal legitimization",
      description:
        "expresses a personal orientation towards the pupils' best interest in the sense that pupils need to be understood as unique social beings that have a personal relationship with teachers.",
    },
    2: {
      title: "Contextual legitimization",
      description:
        "expresses a contextual orientation towards the pupils' best interest in the sense that pupils' living conditions, life histories and practical lives need to be taken into account in teaching situations.",
    },
    3: {
      title: "Critical legitimization",
      description:
        "expresses a critical orientation towards the pupils' best interest in the sense that pupils need to be freed from constraining ideas about themselves and living conditions that imprint these ideas.",
    },
    4: {
      title: "Functional legitimization",
      description:
        "expresses a functional orientation towards the pupil's best interest in the sense that pupils need to be raised towards adulthood along the lines of preconceived favorable outcomes.",
    },
    5: {
      title: "Psychological legitimization",
      description:
        "expresses a psychological orientation towards the pupils' best interest in the sense that their conduct needs to be labelled in mental or emotional terms in order for adequate teaching and learning to take place.",
    },
  },
  landing: {
    title: "Explore your educational values and ideals",
    description:
      "Learn to discover the power of your educational values and ideals. This is a multi player game, together you will give meaning to the results.",
    input: "Enter the game code",
    button: "Join the game",
    create: "Create game",
    asAdmin: "as administrator",
  },
  playerMatch: {
    youPlayWith: "Your co-player is",
    youAre: "You are",
    findEachOther: "Find each other, and be prepared.",
    found: "Found!",
    waitForOthers: "Wait for a co-player...",
    waitUntil: "Wait until everyone is ready",
  },
  game: {
    round: "Round",
    of: "Of",
    done: "Done",
  },
  adminGame: {
    round: {
      settingsButton: "Settings",
      rulesButton: "Rules",
      category: "Category",
      finish: "Finish",
      notStarted: "Not yet started",
      allStarted: "All started",
      playing: "Playing",
      notPlaying: "No teams playing",
      done: "Done",
      notDone: "No teams finished yet",
      areYouSure: "Are you sure?",
      yesSure: "Yes, start the next round",
      yesToResult: "Yes, go to results",
      there: "There",
      isOneTeam: "is one team",
      are: "are",
      stillPlaying: "finishing this round.",
      endGame: "Terminate game",
      endGameWarning: "You and the players will go directly to the results",
      destroyGame: "Terminate and delete this game",
      destroyWarning:
        "All the players and data will be deleted from the system",
    },
    lead: {
      continuing: "To the next round",
      of: "of",
    },
  },
  adminLobby: {
    info: {
      title: "Before we start",
      items: [
        {
          caption: "Join",
          text: "All players should first visit pedagogame.com.",
          icon: IconsEnum.Info,
        },
        {
          caption: "Unique code",
          text: "Players can join the game by entering the code that will appear shortly.",
          icon: IconsEnum.Code,
        },
        {
          caption: "Share screen",
          text: "It is convenient to share your screen in order for players to know if they are already participating, or what the game code is.",
          icon: IconsEnum.ScreenShare,
        },
        {
          caption: "Start game",
          text: "When the game has started you can't go back.",
          icon: IconsEnum.Flag,
        },
        {
          caption: "'Locken'",
          text: "Next to the start button is a lock that you can activate to prevent additional people from joining the game.",
          icon: IconsEnum.Lock,
        },
        {
          caption: "Remove players",
          text: "Players can be deleted if they are not welcome to join the game by clicking or tapping their names.",
          icon: IconsEnum.Remove,
        },
        {
          caption: "Adjust settings",
          text: "The timer can be deactivated and the group names can be adjusted.",
          icon: IconsEnum.Settings,
        },
      ],
      understood: "Understood",
    },
    lobby: {
      settingsButton: "Settings",
      rulesButton: "Rules",
      code: "Enter the code",
      start: "Start",
    },
    playerGroup: {
      waiting: "Waiting for players",
    },
  },
  adminWizard: {
    name: {
      step: "Step",
      yourInfo: "Your info",
      name: "Name",
      email: "Email",
      emailHelp: "We will use your email address solely to send you the results",
      role: "Role",
      customRole: "Custom role:",
      nextButton: "Next",
    },

    check: {
      yourInfo: "Your info",
      name: "Name",
      email: "E-mail",
      role: "Role",
      organisation: "Organisation",
      gameOptions: "Game options",
      players: "Players",
      timer: "Timer",
      none: "None",
      on: "On",
      off: "Off",
      group: "Group",
      groups: "Groups",
      create: "Create game",
      back: "Back",
    },

    gameType: {
      step: "Step",
      typePlayers: "Type players",
      education: "Education",
      year: "Year",
      sector: "Sector",
      next: "Next",
      back: "Back",
    },
    options: {
      step: "Step",
      title: "Extra game options",
      timerLabel: "Timer",
      timerText: "Rounds will get a 10 minute time limit",
      inGroups: "Working in groups",
      inGroupsText:
        "Players will play with a maximum number of players from other groups",
      group1: "Group 1",
      group1Help: "Play with a minimum of 2 groups and a maximum of 4",
      group2: "Group 2",
      group3: "Group 3",
      group4: "Group 4",
      next: "Next",
      back: "Back",
    },
    organisation: {
      step: "Step",
      yourOrg: "Your organisation",
      organisation: "Organisation",
      location: "Location",
      locationHelp: "In case additional information is needed",
      next: "Next",
      back: "Back",
    },
  },
  gameWizard: {
    roomCode: {
      roomCodeLabel: "Enter the game code",
      nextButton: "Next",
    },

    name: {
      title: "First name",
      othersWillSee: "Others will see with whom they are playing.",
      nameLabel: "Name",
      nextButton: "Next",
    },

    group: {
      title: "Choose group",
    },

    info: {
      title: "Game instructions",
      items: [
        {
          caption: "6 rounds",
          text: "In each round you will play with someone else and get different cards.",
        },
        {
          caption: "10 minutes",
          text: "Each round you will get 10 minutes to sort and discuss the cards.",
        },
        {
          caption: "Kaarten sorteren",
          text: "Each round you need to sort six cards, from most important to least important.",
        },
        {
          caption: "Discuss",
          text: "If you and your co-player are finished sorting the cards; talk over the results.",
        },
        {
          caption: "Result",
          text: "After six rounds you will get the result.",
        },
      ],
      understood: "Understood",
    },
  },
  gameLobby: {
    hi: "Hi",
    willStart: "The game will start any moment",
    waiting: "We will wait until everybody is present and then we start",
    changeToThisGroup: "Switch to this group",
  },
  waiting: {
    goodBusy: "You're doing great!",
    waiting: "Waiting",
    isReady: "Is ready..",
    and: "and",
    areReady: "are ready..",
    changeSomething: "Any adjustments?",
  },
  discuss: {
    ready: {
      ready: "is ready",
    },

    intro: {
      discussDiff: "Discuss similarities and differences",
      items: [
        {
          caption: "Left starts",
          text: "The person with the cards in the left column starts.",
        },
        {
          caption: "Discuss similarities and differences",
          text: "Focus the dialoque especially on the cards that stand out.",
        },
        {
          caption: "Ask each other questions",
          text: "Inform why a statement is ranked high or low.",
        },
        {
          caption: "Anything goes",
          text: "Every rank order is allright, don't try to convince each other.",
        },
        {
          caption: "Everybody has their own way of seeing",
          text: "Try to adopt another person's perspective.",
        },
      ],
    },

    info: {
      discussDiff: "Discuss similarities and differences",
      understood: "Understood",
    },

    compare: {
      discussDiff: "Discuss similarities and differences",
      ready: "Ready",
      info: "Explanation",
    },
  },
  results: {
    loader: {
      done: "Done!",
      fetchResult: "We are retrieving your results.",
    },
    results: "Results",
    subTitle: "Learn to discover the power of your educational values and ideals. This is a multi player game, together you will give meaning to the results.",
    myResult: "My results",
    everyone: "Everybody",
    yourResult: "Your results",
    save: "Save",
    sendToMail: "We can send the results to your email address.",
    yourMail: "Your email",
    send: "Send",
    privacy: "Your email address will solely be used to send you your results.",
    exitGame: "Exit game",
  },
  rounds: [
    {
      id: 1,
      lead: "In my teaching practice, I consider it in my pupils’ best interest that...",
      cards: [
        {
          id: "0",
          title: "They learn to survive in a demanding world.",
        },
        {
          id: "1",
          title: "They learn to shape their lives.",
        },
        {
          id: "2",
          title: "They learn to find their way in modern society.",
        },
        {
          id: "3",
          title:
            "They grow up to be self-aware and independent adults.",
        },
        {
          id: "4",
          title: "They will achieve the highest educational level.",
        },
        {
          id: "5",
          title:
            "They have realistic expectations with regard to what they can achieve in their live.",
        },
      ],
    },
    {
      id: 2,
      lead: "In my teaching practice, I consider it in my pupils’ best interest to...",
      cards: [
        {
          id: "0",
          title: "Guide them with care and patience in their learning process.",
        },
        {
          id: "1",
          title: "Tap into their intrinsic motivation and ambition.",
        },
        {
          id: "2",
          title: "Design authentic learning environments.",
        },
        {
          id: "3",
          title:
            "Get them acquainted with diverse perspectives on reality.",
        },
        {
          id: "4",
          title: "Guide them towards preconceived learning goals.",
        },
        {
          id: "5",
          title:
            "Connect to their cognitive and social abilities and limitations.",
        },
      ],
    },
    {
      id: 3,
      lead: "In my teaching practice, I consider it in my pupils’ best interest that...",
      cards: [
        {
          id: "0",
          title: "They develop a sense of self-respect and a positive self-image.",
        },
        {
          id: "1",
          title: "They learn to develop and make use of their creativity.",
        },
        {
          id: "2",
          title: "They learn practical life skills in order to participate in modern society.",
        },
        {
          id: "3",
          title:
            "They learn to formulate substantiated opinions.",
        },
        {
          id: "4",
          title: "They master subject matter that is part of the formal curriculum.",
        },
        {
          id: "5",
          title:
            "They learn to cope with social, psychological and physical (dis)abilities.",
        },
      ],
    },
    {
      id: 4,
      lead: "In my teaching practice, I consider it in my pupils’ best interest to...",
      cards: [
        {
          id: "0",
          title: "Develop themselves at their own pace and in gradual steps.",
        },
        {
          id: "1",
          title: "Take their unique developmental progress as a starting point.",
        },
        {
          id: "2",
          title: "Consider their possibilities for development in terms of their circumstances in life.",
        },
        {
          id: "3",
          title:
            "Be critical about societal expectations towards them at different ages.",
        },
        {
          id: "4",
          title: "Follow the curriculum as formally planned.",
        },
        {
          id: "5",
          title:
            "Be free of obstacles that hinder their natural stages of development",
        },
      ],
    },
    {
      id: 5,
      lead: "In my teaching practice, I consider it in my pupils’ best interest that...",
      cards: [
        {
          id: "0",
          title: "The school provides a safe and caring environment.",
        },
        {
          id: "1",
          title: "The school challenges them to realize their potential.",
        },
        {
          id: "2",
          title: "The school is connected to the outside world.",
        },
        {
          id: "3",
          title:
            "The school is a place where children’s voices are heard.",
        },
        {
          id: "4",
          title: "The school is a place where their learning achievements are highly valued.",
        },
        {
          id: "5",
          title:
            "The school provides access to specialized care",
        },
      ],
    },
    {
      id: 6,
      lead: "In my teaching practice, I consider it in my pupils’ best interest to...",
      cards: [
        {
          id: "0",
          title: "See them as human beings who are still depending on adults.",
        },
        {
          id: "1",
          title: "See them as unique persons with independent dispositions.",
        },
        {
          id: "2",
          title: "See them as participants in the real world.",
        },
        {
          id: "3",
          title:
            "See them as a promising new generation.",
        },
        {
          id: "4",
          title: "See them as learners in a service oriented institution.",
        },
        {
          id: "5",
          title:
            "See them as people with specific characteristics and learning needs.",
        },
      ],
    },
  ],
};
