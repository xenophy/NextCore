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
// {{{ NX.Object.toQueryString Tests

module.exports = {

    // {{{ test toQueryString#pattern1

    'test toQueryString#pattern1': function() {

        var ret = NX.Object.toQueryString({foo: 'bar'});
        ret.should.equal('foo=bar');
    },

    // }}}
    // {{{ test toQueryString#pattern2

    'test toQueryString#pattern2': function() {

        var ret = NX.Object.toQueryString({foo: 'bar', hoge: 123});
        ret.should.equal('foo=bar&hoge=123');
    },

    // }}}
    // {{{ test toQueryString#pattern3

    'test toQueryString#pattern3': function() {

        NX.Object.toQueryString({foo: 1, bar: 2}).should.equal("foo=1&bar=2");
        NX.Object.toQueryString({foo: null, bar: 2}).should.equal("foo=&bar=2");
        NX.Object.toQueryString({'some price': '$300'}).should.equal("some%20price=%24300");
        NX.Object.toQueryString({date: new Date(2011, 0, 1)}).should.equal("date=2011-01-01T00%3A00%3A00");
        NX.Object.toQueryString({colors: ['red', 'green', 'blue']}).should.equal("colors=red&colors=green&colors=blue");

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
