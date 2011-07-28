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
// {{{ NX.isIterable Tests

module.exports = {

    // {{{ test isIterable#pattern1

    'test isIterable#pattern1': function() {

        NX.isIterable([]).should.equal(true);
        NX.isIterable(['1','2','3']).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#pattern2

    'test isIterable#pattern2': function() {

        // オブジェクトは回せないほうに入る
        NX.isIterable({}).should.not.equal(true);
        NX.isIterable({foo:'1',bar:'2',hoge:'3'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isIterable#pattern3

    'test isIterable#pattern3': function() {

        // それ以外も回せない
        NX.isIterable('Next JS').should.not.equal(true);
        NX.isIterable(1234).should.not.equal(true);
        NX.isIterable(true).should.not.equal(true);
        NX.isIterable(new Date()).should.not.equal(true);
        NX.isIterable(function(){}).should.equal(true);

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
