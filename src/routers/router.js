'use strict';
import invalidPathUtility from '../utilities/invalidPathUtility';

import tokenService from '../services/tokenService';

module.exports = function (app) {    



    /**Samples */
    app.route("/restapi/client/accounts").get(tokenService.balance);
  
    /**Invalid path */
    app.route("*").get(invalidPathUtility.invalidPath).post(invalidPathUtility.invalidPath).put(invalidPathUtility.invalidPath).delete(invalidPathUtility.invalidPath);
};