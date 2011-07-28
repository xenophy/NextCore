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
// {{{ NX.String.trim Tests

module.exports = {

    // {{{ test format#pattern1

    'test format#pattern1': function() {

        var cls = 'my-class', text = 'Some text';
        var s = NX.String.format('<div class="{0}">{1}</div>', cls, text);
        s.should.equal('<div class="my-class">Some text</div>');
    },

    // }}}
    // {{{ test trim#pattern1

    'test trim#pattern1': function() {
        NX.String.trim('').should.equal('');
    },

    // }}}
    // {{{ test trim#pattern2

    'test trim#pattern2': function() {
        NX.String.trim('foo').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern3

    'test trim#pattern3': function() {
        NX.String.trim('    ').should.equal('');
    },

    // }}}
    // {{{ test trim#pattern4

    'test trim#pattern4': function() {
        NX.String.trim('  bar  ').should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern5

    'test trim#pattern5': function() {
        NX.String.trim('foo   ').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern6

    'test trim#pattern6': function() {
        NX.String.trim('   bar').should.equal('bar');
    },

    // }}}
    // {{{ test trim#pattern7

    'test trim#pattern7': function() {
        NX.String.trim('foo bar').should.equal('foo bar');
    },

    // }}}
    // {{{ test trim#pattern8

    'test trim#pattern8': function() {
        NX.String.trim('  foo bar baz   ').should.equal('foo bar baz');
    },

    // }}}
    // {{{ test trim#pattern9

    'test trim#pattern9': function() {
        NX.String.trim('\tfoo').should.equal('foo');
    },

    // }}}
    // {{{ test trim#pattern10

    'test trim#pattern10': function() {
        NX.String.trim('\ttext    ').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern11

    'test trim#pattern11': function() {
        NX.String.trim('text　').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern12

    'test trim#pattern12': function() {
        NX.String.trim('　text ').should.equal('text');
    },

    // }}}
    // {{{ test trim#pattern13

    'test trim#pattern13': function() {
        NX.String.trim('　text\t').should.equal('text');
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
