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
// {{{ NX.ClassManager.getByAlias Tests

module.exports = {

    // {{{ test getByAlias#pattern1

    'test getByAlias#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getByAlias.cls1', {
            alias: 'ClassManagerTest.getByAlias.cls2'
        });

        var ret = NX.ClassManager.getByAlias('ClassManagerTest.getByAlias.cls2');
        assert.equal(NX.ClassManager.get('ClassManagerTest.getByAlias.cls1'), ret);

    },

    // }}}
    // {{{ test getByAlias#pattern2

    'test getByAlias#pattern2': function() {

        var f1 = function() {
            return 'f1';
        };

        NX.ClassManager.create('ClassManagerTest.getByAlias.cls3', {
            alias: 'ClassManagerTest.getByAlias.cls4'
        });

        NX.ClassManager.set('ClassManagerTest.getByAlias.cls3.test', f1);

        var ret = NX.ClassManager.getByAlias('ClassManagerTest.getByAlias.cls4');
        assert.equal(NX.ClassManager.get('ClassManagerTest.getByAlias.cls3.test'), f1);

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
