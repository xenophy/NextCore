/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('nx-core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.ClassManager.getClass Tests

module.exports = {

    // {{{ test getClass#pattern1

    'test getClass#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getClass.cls1', {
            test: function() {
                return 'test';
            }
        });

        var cls = new ClassManagerTest.getClass.cls1();
        var ret = NX.ClassManager.getClass(cls);

        ret.should.equal(ClassManagerTest.getClass.cls1);

    },

    // }}}
    // {{{ test getClass#pattern2

    'test getClass#pattern2': function() {

        NX.ns('ClassManagerTest', 'ClassManagerTest.getClass', 'ClassManagerTest.getClass.app');

        ClassManagerTest.getClass.cls1 = function() {
            return 'f1';
        };

        var cls = new ClassManagerTest.getClass.cls1();
        var ret = NX.ClassManager.getClass(cls);

        assert.equal(ret, null);

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
