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
// {{{ NX.Object.each Tests

module.exports = {

    // {{{ test each#pattern1

    'test each#pattern1': function() {

        NX.Object.each({foo: 'bar'}, function(key, v) {
            key.should.equal('foo');
            v.should.equal('bar');
        });
    },

    // }}}
    // {{{ test each#pattern2

    'test each#pattern2': function() {

        var ret = {};
        NX.Object.each({foo: 'bar', hoge: 123}, function(key, v) {
            ret[key] = v;
            return false;
        });

        ret['foo'].should.equal('bar');
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
