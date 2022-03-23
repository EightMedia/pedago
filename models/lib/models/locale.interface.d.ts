export interface Locale {
    landing: {
        title: string;
        description: string;
        input: string;
        button: string;
        create: string;
        asAdmin: string;
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
    rounds: {
        id: number;
        lead: string;
        cards: {
            id: string;
            title: string;
        }[];
    }[];
}
