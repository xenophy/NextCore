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
// {{{ NX.Function.createInterceptor Tests

module.exports = {

    // {{{ test createInterceptor#pattern1

    'test createInterceptor#pattern1': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        });

        assert.equal(sayHiToFriend('Fred'), null);
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createInterceptor#pattern2

    'test createInterceptor#pattern2': function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, null);

        sayHiToFriend('Fred').should.equal('Hi, Fred');
        sayHiToFriend('Brian').should.equal('Hi, Brian');

    },

    // }}}
    // {{{ test createInterceptor#pattern3

    'test createInterceptor#pattern3': function() {

        var returnValue = 'return test';
        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = NX.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        },this, returnValue);

        assert.equal(sayHiToFriend('Fred'), returnValue);
        sayHiToFriend('Brian').should.equal('Hi, Brian');

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
