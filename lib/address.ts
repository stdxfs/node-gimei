export interface AddressType {
    addresses: any[];
    prefectures: string[][];
    cities: string[][];
    towns: string[][];
    prefectureIndex: number;
    cityIndex: number;
    townIndex: number;
    isPrefecture: boolean;
    isCity: boolean;
    isTown: boolean;
    setAddresses(addresses: any): AddressType;
    prefecture(): AddressType;
    city(): AddressType;
    town(): AddressType;
    kanji(): string;
    hiragana(): string;
    katakana(): string;
    english(): string;
    createPrefecture(i: number): string;
    createCity(i: number): string;
    createTown(i: number): string;
    createFullAddress(i: number): string;
    createAddress(i: number): string;
    phoneHome(): string;
}

export const addressObj: AddressType = {
    addresses: [],
    prefectures: [],
    cities: [],
    towns: [],
    prefectureIndex: 0,
    cityIndex: 0,
    townIndex: 0,
    isPrefecture: false,
    isCity: false,
    isTown: false,

    setAddresses(addresses: any) {
        this.addresses = (addresses as any)['addresses'];
        this.prefectures = (this.addresses as any)['prefecture'];
        this.cities = (this.addresses as any)['city'];
        this.towns = (this.addresses as any)['town'];
        this.prefectureIndex = Math.floor(Math.random() * this.prefectures.length);
        this.cityIndex = Math.floor(Math.random() * this.cities.length);
        this.townIndex = Math.floor(Math.random() * this.towns.length);
        return this;
    },

    prefecture() {
        this.isPrefecture = true;
        return this;
    },

    city() {
        this.isCity = true;
        return this;
    },

    town() {
        this.isTown = true;
        return this;
    },

    kanji() {
        return this.createAddress(0);
    },

    hiragana() {
        return this.createAddress(1);
    },

    katakana() {
        return this.createAddress(2);
    },

    english() {
        return this.createAddress(3);
    },

    createPrefecture(i: number) {
        return this.prefectures[this.prefectureIndex][i];
    },

    createCity(i: number) {
        return this.cities[this.cityIndex][i];
    },

    createTown(i: number) {
        return this.towns[this.townIndex][i];
    },

    createFullAddress(i: number) {
        return this.createPrefecture(i) + " " + this.createCity(i) + " " + this.createTown(i);
    },

    createAddress(i: number) {
        let str = "";
        if (this.isPrefecture) {
            str = this.createPrefecture(i);
            this.isPrefecture = false;
        } else if (this.isCity) {
            str = this.createCity(i);
            this.isCity = false;
        } else if (this.isTown) {
            str = this.createTown(i);
            this.isTown = false;
        } else {
            str = this.createFullAddress(i);
        }
        return str;
    },

    phoneHome() {
        const prefixes = ['070', '080'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const middle = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const last = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return prefix + '-' + middle + '-' + last;
    }
};

export function setAddresses(addresses: any): AddressType {
    const newObj = { ...addressObj };
    return newObj.setAddresses(addresses);
}

export default addressObj;