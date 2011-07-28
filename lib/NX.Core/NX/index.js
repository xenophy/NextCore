/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX

/**
 * @class NX
 * @singleton
 */
(function() {

if(typeof NX === 'undefined') {
    global.NX = {
        util: {}
    };
}

NX.global = global;
NX.apply = require('./apply');
NX.$implements = function(target, root) {

    var o = {},
        fs = require('fs'),
        path = require('path'),
        results = [];

    var ret = fs.readdirSync(target);

    if(ret.forEach) {

        ret.forEach(function(file) {

            var s = fs.statSync(target + file);

            file = path.basename(file, '.js');

            if(file !== 'constructor') {

                if(!s.isDirectory()) {

                    var name = file;
                    var dp = 'dollar_';
                    var tmp = file.substr(0, dp.length);

                    if(tmp === dp) {
                        name = '$' + file.substr(dp.length);
                    }

                    o[name] = require(target + file);
                }

            } else {
            }

        });
    }

    NX.apply(root, o);
};

NX.$requires = {};
NX.$implements(__dirname + '/', NX);

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
