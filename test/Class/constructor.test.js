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
// {{{ NX.Class.constructor Tests

module.exports = {

    // {{{ test constructor#pattern1

    'test constructor#pattern1': function() {

        var test;

        var f = function() {
            test = 'trace';
        };
        f.prototype.foo = 'bar';
        var clsDef = new NX.Class(f);
        var cls = new clsDef();
        test.should.equal('trace');

    },

    // }}}
    // {{{ test constructor#pattern2

    'test constructor#pattern2': function() {

        var test;
        var f = function() {};
        var clsDef = new NX.Class(f, {preprocessors: [function() {
            test = 'trace';
        }]});
        var cls = new clsDef();
        test.should.equal('trace');

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
