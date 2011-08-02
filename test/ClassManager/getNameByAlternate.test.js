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
// {{{ NX.ClassManager.getNameByAlternate Tests

module.exports = {

    // {{{ test getNameByAlternate#pattern1

    'test getNameByAlternate#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getNameByAlternate.cls1', {
            alternateClassName: 'ClassManagerTest.getNameByAlternate.cls2'
        });

        var ret = NX.ClassManager.getNameByAlternate('ClassManagerTest.getNameByAlternate.cls2');
        ret.should.equal('ClassManagerTest.getNameByAlternate.cls1');

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
