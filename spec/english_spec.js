describe("A suite is English name and address case.", function() {
    var name = gimei.name();
    var address = gimei.address();
    
    var fullNameEnglish = name.english();
    var lastNameEnglish = name.last().english();
    var firstNameEnglish = name.first().english();
    
    var fullAddressEnglish = address.english();
    var prefectureAddressEnglish = address.prefecture().english();
    var cityAddressEnglish = address.city().english();
    var townAddressEnglish = address.town().english();

    var allNames = [
      fullNameEnglish,
      lastNameEnglish,
      firstNameEnglish
    ];

    var allAddresses = [
      fullAddressEnglish,
      prefectureAddressEnglish,
      cityAddressEnglish,
      townAddressEnglish
    ];

    allNames.forEach(function(i) {
        it (i + " name is defined.", function() {
            expect(i).toBeDefined();
            expect(i).not.toBeNull();
            expect(0 < i.length).toBeTruthy();
        });
    });

    allAddresses.forEach(function(i) {
        it (i + " address is defined.", function() {
            expect(i).toBeDefined();
            expect(i).not.toBeNull();
            expect(0 < i.length).toBeTruthy();
        });
    });

    it ("type of fullNameEnglish.", function() {
        expect(fullNameEnglish).toMatch(/^[A-Za-z ]+$/);
    });

    it ("type of lastNameEnglish.", function() {
        expect(lastNameEnglish).toMatch(/^[A-Za-z]+$/);
    });

    it ("type of firstNameEnglish.", function() {
        expect(firstNameEnglish).toMatch(/^[A-Za-z]+$/);
    });

    it ("type of fullAddressEnglish.", function() {
        expect(fullAddressEnglish).toMatch(/^[A-Za-z ]+$/);
    });

    it ("type of prefectureAddressEnglish.", function() {
        expect(prefectureAddressEnglish).toMatch(/^[A-Za-z]+$/);
    });

    it ("type of cityAddressEnglish.", function() {
        expect(cityAddressEnglish).toMatch(/^[A-Za-z ]+$/);
    });

    it ("type of townAddressEnglish.", function() {
        expect(townAddressEnglish).toMatch(/^[A-Za-z ]+$/);
    });

    it ("fullNameEnglish === lastNameEnglish + ' ' + firstNameEnglish.", function() {
        expect(fullNameEnglish === lastNameEnglish + " " + firstNameEnglish).toBeTruthy();
    });

    it ("fullAddressEnglish === prefectureAddressEnglish + ' ' + cityAddressEnglish + ' ' + townAddressEnglish.", function() {
        expect(fullAddressEnglish === prefectureAddressEnglish + " " + cityAddressEnglish + " " + townAddressEnglish).toBeTruthy();
    });

});