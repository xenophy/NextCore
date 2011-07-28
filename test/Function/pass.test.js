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
// {{{ NX.Function.pass Tests

module.exports = {

    // {{{ test pass#pattern1

    'test pass#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        var f = NX.Function.pass(sayHi, 'Fred');

        f().should.equal('Hi, Fred');

    },

    // }}}
    // {{{ test pass#pattern2

    'test pass#pattern2': function() {

        var sayHi = function(t, h){
            return t+':'+h;
        }

        var f = NX.Function.pass(sayHi);
        f('test', 'hoge').should.equal('test:hoge');

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
