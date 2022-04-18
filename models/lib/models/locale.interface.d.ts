import { PlayerType } from "./player-type.enum";
export interface Locale {
    playerType: {
        [PlayerType.Professionals]: string;
        [PlayerType.Students]: string;
    };
    roles: {
        [key: number]: string;
    };
    year: {
        [key: number]: string;
    };
    sector: {
        [key: number]: string;
    };
    categories: {
        0: {
            title: string;
            description: string;
        };
        1: {
            title: string;
            description: string;
        };
        2: {
            title: string;
            description: string;
        };
        3: {
            title: string;
            description: string;
        };
        4: {
            title: string;
            description: string;
        };
        5: {
            title: string;
            description: string;
        };
    };
    landing: {
        title: string;
        description: string;
        input: string;
        button: string;
        create: string;
        asAdmin: string;
    };
    playerMatch: {
        youPlayWith: string;
        youAre: string;
        findEachOther: string;
        found: string;
        waitForOthers: string;
        waitUntil: string;
    };
    game: {
        round: string;
        of: string;
        done: string;
    };
    adminGame: {
        round: {
            settingsButton: string;
            rulesButton: string;
            category: string;
            finish: string;
            notStarted: string;
            allStarted: string;
            playing: string;
            notPlaying: string;
            done: string;
            notDone: string;
            areYouSure: string;
            yesSure: string;
            there: string;
            isOneTeam: string;
            are: string;
            stillPlaying: string;
        };
        lead: {
            continuing: string;
            of: string;
        };
    };
    adminLobby: {
        info: {
            title: string;
            items: {
                caption: string;
                text: string;
                icon?: number;
            }[];
            understood: string;
        };
        lobby: {
            settingsButton: string;
            rulesButton: string;
            code: string;
            start: string;
        };
        playerGroup: {
            waiting: string;
        };
    };
    adminWizard: {
        name: {
            step: string;
            yourInfo: string;
            name: string;
            email: string;
            emailHelp: string;
            role: string;
            customRole: string;
            nextButton: string;
        };
        check: {
            yourInfo: string;
            name: string;
            email: string;
            role: string;
            organisation: string;
            gameOptions: string;
            players: string;
            timer: string;
            none: string;
            on: string;
            off: string;
            group: string;
            groups: string;
            create: string;
            back: string;
        };
        gameType: {
            step: string;
            typePlayers: string;
            education: string;
            year: string;
            sector: string;
            next: string;
            back: string;
        };
        options: {
            step: string;
            title: string;
            timerLabel: string;
            timerText: string;
            inGroups: string;
            inGroupsText: string;
            group1: string;
            group2: string;
            group3: string;
            group4: string;
            next: string;
            back: string;
        };
        organisation: {
            step: string;
            yourOrg: string;
            organisation: string;
            location: string;
            locationHelp: string;
            next: string;
            back: string;
        };
    };
    gameWizard: {
        roomCode: {
            roomCodeLabel: string;
            nextButton: string;
        };
        name: {
            title: string;
            othersWillSee: string;
            nameLabel: string;
            nextButton: string;
        };
        group: {
            title: string;
        };
        info: {
            title: string;
            items: {
                caption: string;
                text: string;
            }[];
            understood: string;
        };
    };
    gameLobby: {
        hi: string;
        willStart: string;
        waiting: string;
    };
    waiting: {
        goodBusy: string;
        waiting: string;
        isReady: string;
        and: string;
        areReady: string;
        changeSomething: string;
    };
    discuss: {
        ready: {
            ready: string;
        };
        intro: {
            discussDiff: string;
            items: {
                caption: string;
                text: string;
            }[];
        };
        info: {
            discussDiff: string;
            understood: string;
        };
        compare: {
            discussDiff: string;
            ready: string;
            info: string;
        };
    };
    results: {
        loader: {
            done: string;
            fetchResult: string;
        };
        results: string;
        myResult: string;
        everyone: string;
        yourResult: string;
        save: string;
        sendToMail: string;
        yourMail: string;
        send: string;
        privacy: string;
    };
    rounds: {
        id: number;
        lead: string;
        cards: {
            id: string;
            title: string;
        }[];
    }[];
}
