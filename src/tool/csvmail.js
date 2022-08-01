const csvToJson = require('csvtojson');
const path = require('path');
const fs = require('fs');

csvToJson()
    .fromFile(path.join(__dirname, './mail.csv'))
    .then((jsonObj) => {
        let langPath = path.join(__dirname, '../../mail/lang.js');
        let jsonStr = JSON.stringify(jsonObj, null, 2);
        jsonStr = `const lang =
          ${jsonStr}
        `;
        fs.writeFile(langPath, jsonStr, 'utf-8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('done');
        });
    })





