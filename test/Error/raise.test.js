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
// {{{ NX.Error.raise Tests

module.exports = {

    // {{{ 'test raise#pattern1'

    'test raise#pattern1': function() {

        try {
            NX.Error.raise('foo');
        } catch(e) {
            e.msg.should.equal('foo');
        }

    },

    // }}}
    // {{{ 'test raise#pattern2'

    'test raise#pattern2': function() {

        var f = function() {
            try {
                NX.Error.raise('foo');
            } catch(e) {
                e.msg.should.equal('foo');
                e.sourceMethod.should.equal('raise#pattern2');
                e.sourceClass.should.equal('bar');
            }
        };
        f.$name = 'raise#pattern2';
        f.$owner = {};
        f.$owner.$className = 'bar';
        f();

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
