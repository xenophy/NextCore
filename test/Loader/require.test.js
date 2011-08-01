/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX.Core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Loader.require Tests

module.exports = {

    // {{{ test require#pattern1

    'test require#pattern1': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var ret = NX.Loader.require('My.Test');
        var ret = NX.Loader.require('My.Test2');

        cls = new My.Test();
        cls.foo().should.equal('My.Test.foo');

        cls = new My.Test2();
        cls.foo().should.equal('My.Test2.foo');
    },

    // }}}
    // {{{ test require#pattern2

    'test require#pattern2': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var ret = NX.Loader.require('My.extend.Test2');

        //var cls = NX.create('My.extend.Test2');
//        cls = new My.extend.Test2();
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
