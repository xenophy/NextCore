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
// {{{ NX.Object.getKeys Tests

module.exports = {

    // {{{ test getKeys#pattern1

    'test getKeys#pattern1': function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        var ret = NX.Object.getKeys(o);

        ret[0].should.equal('foo');
        ret[1].should.equal('hoge');
        ret[2].should.equal('fee');
        ret.length.should.equal(3);

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
