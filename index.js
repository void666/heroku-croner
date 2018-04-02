'use strict';
const cmd = require('node-cmd');
class script {
    static runThis() {
        console.log(`Running script`);
        return cmd.get(`npm install in-memory-queue
        npm install fs.promiser
        npm install fs.proms
        npm i promise-request-retry
        npm install trie-d`, function (err, data) {
            if (!err) {
                console.log('Installation done :\n\n', data);
                // process.exit(0);
            } else {
                console.log('error', err);
                // process.exit(1);
            }
        })
    }
}

module.exports = script.runThis();