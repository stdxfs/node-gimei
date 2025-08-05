var gimei = require('../index.js');

describe("Complete Japanese Person Information Test", function() {
    it("should generate and display complete person information", function() {
        console.log("\n" + "=".repeat(60));
        console.log("           完整日本人信息生成测试");
        console.log("=".repeat(60));
        
        // 生成姓名信息
        var name = gimei.name();
        console.log("\n【姓名信息 / Name Information】");
        console.log("漢字 (Kanji):     " + name.kanji());
        console.log("ひらがな (Hiragana): " + name.hiragana());
        console.log("カタカナ (Katakana): " + name.katakana());
        console.log("ローマ字 (Romaji):   " + name.english());
        
        // 显示姓名分解
        console.log("\n【姓名分解 / Name Components】");
        console.log("姓 (Last Name):   " + name.last().kanji() + " / " + name.last().english());
        console.log("名 (First Name):  " + name.first().kanji() + " / " + name.first().english());
        
        // 性别信息
        console.log("\n【性別 / Gender】");
        console.log("性別:            " + (name.isMale() ? "男性 (Male)" : "女性 (Female)"));
        
        // 生成地址信息
        var address = gimei.address();
        console.log("\n【住所情報 / Address Information】");
        console.log("完整地址 (Full Address):");
        console.log("  漢字:          " + address.kanji());
        console.log("  ひらがな:      " + address.hiragana());
        console.log("  カタカナ:      " + address.katakana());
        console.log("  ローマ字:      " + address.english());
        
        console.log("\n【住所詳細 / Address Details】");
        console.log("都道府県 (Prefecture): " + address.prefecture().kanji() + " / " + address.prefecture().english());
        console.log("市区町村 (City):       " + address.city().kanji() + " / " + address.city().english());
        console.log("町域 (Town):          " + address.town().kanji() + " / " + address.town().english());
        
        // 生成电话号码
        console.log("\n【連絡先 / Contact Information】");
        console.log("携帯電話 (Mobile):    " + address.phoneHome());
        
        console.log("\n" + "=".repeat(60));
        console.log("           测试完成 / Test Complete");
        console.log("=".repeat(60) + "\n");
        
        // 验证所有信息都不为空
        expect(name.kanji()).toBeTruthy();
        expect(name.hiragana()).toBeTruthy();
        expect(name.katakana()).toBeTruthy();
        expect(name.english()).toBeTruthy();
        expect(address.kanji()).toBeTruthy();
        expect(address.hiragana()).toBeTruthy();
        expect(address.katakana()).toBeTruthy();
        expect(address.english()).toBeTruthy();
        expect(address.phoneHome()).toBeTruthy();
        expect(address.phoneHome()).toMatch(/^(070|080)-\d{4}-\d{4}$/);
    });
    
    it("should generate multiple complete person profiles", function() {
        console.log("\n" + "=".repeat(60));
        console.log("           多人信息生成测试");
        console.log("=".repeat(60));
        
        for (var i = 1; i <= 3; i++) {
            // 重置缓存对象以生成不同的人
            gimei.nameObj = null;
            gimei.addressObj = null;
            
            var name = gimei.name();
            var address = gimei.address();
            
            console.log("\n【第" + i + "人 / Person " + i + "】");
            console.log("姓名: " + name.kanji() + " (" + name.english() + ")");
            console.log("性別: " + (name.isMale() ? "男性" : "女性"));
            console.log("住所: " + address.kanji());
            console.log("電話: " + address.phoneHome());
        }
        
        console.log("\n" + "=".repeat(60) + "\n");
    });
});