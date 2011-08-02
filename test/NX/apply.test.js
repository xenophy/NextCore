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
// {{{ NX.apply Tests

module.exports = {

    // {{{ test apply#pattern1

    'test apply#pattern1': function() {

        var src = {}, ret;

        ret = NX.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
    },

    // }}}
    // {{{ test apply#pattern2

    'test apply#pattern2': function() {

        var src = {}, contig, defaults, ret;

        config = {
            foo: 'bar'
        };

        defaults = {
            foo: 'default value',
            hoge: 'piyo'
        };

        ret = NX.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');
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
