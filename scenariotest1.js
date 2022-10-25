const fs                    = require('fs');
const TEST_DIR_SRC          = `${__dirname}\\test_scenarious`;
const EXPECTED_FILE_LENGTH  = 3;
let isTestPass              = true;

const scenior1FileList = fs.readdirSync(TEST_DIR_SRC);

if(scenior1FileList.length != EXPECTED_FILE_LENGTH) {
    isTestPass = false;
}
for(const fileName of scenior1FileList) {
        
    if(!isFileNameInTheList(fileName)) {
        isTestPass = false;
    }
}

assertIsTrue(true, isTestPass, 'Assert all files exists');

function isFileNameInTheList(fileName) {

    if(fileName == 'normal'       ) return true;
    if(fileName == 'restricted'   ) return true;
    if(fileName == 'vip'    ) return true;
  
    return false;
}


function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}