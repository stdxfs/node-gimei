'use strict';

const yaml = require('js-yaml');
const fs   = require('fs');
const Name = require('./name');
const Address = require('./address');

// 仅解析一次数据文件，避免运行时阻塞
const namesData     = yaml.load(fs.readFileSync(__dirname + '/data/names.yml','utf8'));
const addressesData = yaml.load(fs.readFileSync(__dirname + '/data/addresses.yml','utf8'));

module.exports = {
  // 每次调用都返回全新实例，避免状态污染
  name()   { return Object.create(Name).setNames(namesData).setGender(Math.random()<0.5?'male':'female'); },
  male()   { return Object.create(Name).setNames(namesData).setGender('male'); },
  female() { return Object.create(Name).setNames(namesData).setGender('female'); },
  address(){ return Object.create(Address).setAddresses(addressesData); },
};