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
// {{{ NX.String.urlAppend Tests

module.exports = {

    // {{{ test urlAppend#pattern1

    'test urlAppend#pattern1': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern2

    'test urlAppend#pattern2': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern3

    'test urlAppend#pattern3': function() {

        var url = 'http://www.xenophy.com/?foo=bar';
        var s = NX.String.urlAppend(url, 'hoge');
        s.should.equal('http://www.xenophy.com/?foo=bar&hoge');

    },

    // }}}
    // {{{ test urlAppend#pattern4

    'test urlAppend#pattern4': function() {

        var url = 'http://www.xenophy.com/';
        var s = NX.String.urlAppend(url, '');
        s.should.equal('http://www.xenophy.com/');

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
