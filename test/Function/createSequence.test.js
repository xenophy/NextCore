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
// {{{ NX.Function.createSequence Tests

module.exports = {

    // {{{ test createSequence#pattern1

    'test createSequence#pattern1': function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = NX.Function.createSequence(sayHi, function(name){
            ret += ' Bye, ' + name;
        });

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred Bye, Fred');

    },

    // }}}
    // {{{ test createSequence#pattern2

    'test createSequence#pattern2': function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = NX.Function.createSequence(sayHi, null);

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred');

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
