import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as name from './name';
import * as address from './address';

export interface NameData {
    first_name: {
        male: string[][];
        female: string[][];
    };
    last_name: string[][];
}

export interface AddressData {
    addresses: {
        prefecture: string[][];
        city: string[][];
        town: string[][];
    };
}

export interface GimeType {
    nameObj: name.NameType | null;
    addressObj: address.AddressType | null;
    name(): name.NameType;
    male(): name.NameType;
    female(): name.NameType;
    address(): address.AddressType;
}

export const gimei: GimeType = {
    nameObj: null,
    addressObj: null,

    name(): name.NameType {
        if (this.nameObj === null) {
            const names = yaml.load(fs.readFileSync(__dirname + '/../lib/data/names.yml', 'utf8')) as NameData;
            this.nameObj = name.setName(names as any).setGender(Math.round(Math.random() + 1) === 1 ? 'male' : 'female');
        }
        return this.nameObj;
    },

    male(): name.NameType {
        return this.name().setGender('male');
    },

    female(): name.NameType {
        return this.name().setGender('female');
    },

    address(): address.AddressType {
        if (this.addressObj === null) {
            const addresses = yaml.load(fs.readFileSync(__dirname + '/../lib/data/addresses.yml', 'utf8')) as AddressData;
            this.addressObj = address.setAddresses(addresses as any);
        }
        return this.addressObj;
    }
};

export default gimei;