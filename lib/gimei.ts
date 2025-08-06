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

export interface GimeiType {
    nameData: NameData;
    addressData: AddressData;
    name(): name.NameType;
    male(): name.NameType;
    female(): name.NameType;
    address(): address.AddressType;
}

export const gimei: GimeiType = {
    // 缓存数据文件，实例每次新建
    nameData: yaml.load(fs.readFileSync(__dirname + '/../lib/data/names.yml', 'utf8')) as NameData,
    addressData: yaml.load(fs.readFileSync(__dirname + '/../lib/data/addresses.yml', 'utf8')) as AddressData,

    name(): name.NameType {
        return name.setName(this.nameData as any).setGender(Math.random() < 0.5 ? 'male' : 'female');
    },

    male(): name.NameType {
        return this.name().setGender('male');
    },

    female(): name.NameType {
        return this.name().setGender('female');
    },

    address(): address.AddressType {
        return address.setAddresses(this.addressData as any);
    }
};

export default gimei;