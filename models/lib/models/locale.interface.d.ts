export interface Locale {
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
    waiting: {
        goodBusy: string;
        waiting: string;
        isReady: string;
        and: string;
        areReady: string;
        changeSomething: string;
    };
    discuss: {
        ready: string;
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
