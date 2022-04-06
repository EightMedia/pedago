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
    };
    game: {
        round: string;
        of: string;
        done: string;
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
        };
        info: {
            discussDiff: string;
            understood: string;
        };
        compare: {
            discussDiff: string;
            ready: string;
        };
    };
    results: {
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
