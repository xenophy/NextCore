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
// {{{ NX.ClassManager.dynInstantiate Tests

module.exports = {

    // {{{ test dynInstantiate#pattern1

    'test dynInstantiate#pattern1': function() {

        var test, test2;
        NX.ClassManager.create('ClassManagerTest.dynInstantiate.p1.cls1', {
            constructor: function(arg1, arg2) {
                test = arg1;
                test2 = arg2;
            }
        });

        var x = NX.ClassManager.dynInstantiate('ClassManagerTest.dynInstantiate.p1.cls1', [100, 200]);

        test.should.equal(100);
        test2.should.equal(200);

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
