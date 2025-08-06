export interface NameType {
    names: any[];
    gender: string;
    firstNames: string[][];
    lastNames: string[][];
    firstNamesIndex: number;
    lastNamesIndex: number;
    isFirst: boolean;
    isLast: boolean;
    setNames(names: any[]): NameType;
    setGender(gender: string): NameType;
    isMale(): boolean;
    isFemale(): boolean;
    first(): NameType;
    last(): NameType;
    kanji(): string;
    hiragana(): string;
    katakana(): string;
    english(): string;
    createFirstName(i: number): string;
    createLastName(i: number): string;
    createFullName(i: number): string;
    createName(i: number): string;
}

export const nameObj: NameType = {
    names: [],
    gender: "male",
    firstNames: [],
    lastNames: [],
    firstNamesIndex: 0,
    lastNamesIndex: 0,
    isFirst: false,
    isLast: false,

    setNames(names: any[]) {
        this.names = names;
        return this;
    },

    setGender(gender: string) {
        this.gender = gender;
        this.firstNames = (this.names as any)['first_name'][this.gender];
        this.lastNames = (this.names as any)['last_name'];
        this.firstNamesIndex = Math.floor(Math.random() * this.firstNames.length);
        this.lastNamesIndex = Math.floor(Math.random() * this.lastNames.length);
        return this;
    },

    isMale() {
        return this.gender === 'male';
    },

    isFemale() {
        return this.gender === 'female';
    },

    first() {
        this.isFirst = true;
        return this;
    },

    last() {
        this.isLast = true;
        return this;
    },

    kanji() {
        return this.createName(0);
    },

    hiragana() {
        return this.createName(1);
    },

    katakana() {
        return this.createName(2);
    },

    english() {
        return this.createName(3);
    },

    createFirstName(i: number) {
        return this.firstNames[this.firstNamesIndex][i];
    },

    createLastName(i: number) {
        return this.lastNames[this.lastNamesIndex][i];
    },

    createFullName(i: number) {
        return this.createLastName(i) + " " + this.createFirstName(i);
    },

    createName(i: number) {
        let str = "";
        if (this.isFirst) {
            str = this.createFirstName(i);
            this.isFirst = false;
        } else if (this.isLast) {
            str = this.createLastName(i);
            this.isLast = false;
        } else {
            str = this.createFullName(i);
        }
        return str;
    }
};

export function setName(names: any[]): NameType {
    const newObj = { ...nameObj };
    return newObj.setNames(names);
}

export default nameObj;