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
// {{{ NX.ClassManager.getAliasesByName Tests

module.exports = {

    // {{{ test getAliasesByName#pattern1

    'test getAliasesByName#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getAliasesByName.cls1', {
            alias: 'ClassManagerTest.getAliasesByName.cls2'
        });

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(1);
        NX.Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls2').should.equal(true);

        NX.ClassManager.setAlias('ClassManagerTest.getAliasesByName.cls1', 'ClassManagerTest.getAliasesByName.cls3');

        var ret = NX.ClassManager.getAliasesByName('ClassManagerTest.getAliasesByName.cls1');
        ret.length.should.equal(2);
        NX.Array.contains(ret, 'ClassManagerTest.getAliasesByName.cls3').should.equal(true);

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
