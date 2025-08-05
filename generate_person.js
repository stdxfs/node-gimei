#!/usr/bin/env node

/**
 * 日本人完整信息生成器
 * Japanese Person Complete Information Generator
 */

var gimei = require('./index.js');

function generatePerson() {
    // 重置缓存以生成新的随机人员
    gimei.nameObj = null;
    gimei.addressObj = null;
    
    var name = gimei.name();
    var address = gimei.address();
    
    console.log("=".repeat(60));
    console.log("           日本人完整信息 / Japanese Person Info");
    console.log("=".repeat(60));
    
    // 姓名信息
    console.log("\n【姓名 / Name】");
    console.log("漢字:      " + name.kanji());
    console.log("ひらがな:   " + name.hiragana());
    console.log("カタカナ:   " + name.katakana());
    console.log("ローマ字:   " + name.english());
    console.log("性別:      " + (name.isMale() ? "男性 (Male)" : "女性 (Female)"));
    
    // 地址信息
    console.log("\n【住所 / Address】");
    console.log("完整地址:   " + address.kanji());
    console.log("ローマ字:   " + address.english());
    console.log("都道府県:   " + address.prefecture().kanji() + " (" + address.prefecture().english() + ")");
    console.log("市区町村:   " + address.city().kanji() + " (" + address.city().english() + ")");
    console.log("町域:      " + address.town().kanji() + " (" + address.town().english() + ")");
    
    // 联系方式
    console.log("\n【連絡先 / Contact】");
    console.log("携帯電話:   " + address.phoneHome());
    
    console.log("\n" + "=".repeat(60));
}

function generateMultiplePeople(count) {
    console.log("生成 " + count + " 个日本人信息...\n");
    
    for (var i = 1; i <= count; i++) {
        console.log("【第 " + i + " 人】");
        
        // 重置缓存以生成新的随机人员
        gimei.nameObj = null;
        gimei.addressObj = null;
        
        var name = gimei.name();
        var address = gimei.address();
        
        console.log("姓名: " + name.kanji() + " (" + name.english() + ")");
        console.log("性別: " + (name.isMale() ? "男性" : "女性"));
        console.log("住所: " + address.kanji());
        console.log("電話: " + address.phoneHome());
        console.log("");
    }
}

// 命令行参数处理
var args = process.argv.slice(2);

if (args.length === 0) {
    // 默认生成一个人的完整信息
    generatePerson();
} else if (args[0] === '--multiple' || args[0] === '-m') {
    // 生成多个人的信息
    var count = parseInt(args[1]) || 3;
    generateMultiplePeople(count);
} else if (args[0] === '--help' || args[0] === '-h') {
    console.log("使用方法:");
    console.log("  node generate_person.js              # 生成一个人的完整信息");
    console.log("  node generate_person.js -m [数量]     # 生成多个人的简要信息");
    console.log("  node generate_person.js --help       # 显示帮助信息");
    console.log("");
    console.log("示例:");
    console.log("  node generate_person.js              # 生成一个人");
    console.log("  node generate_person.js -m 5         # 生成5个人");
} else {
    console.log("未知参数: " + args[0]);
    console.log("使用 --help 查看帮助信息");
}