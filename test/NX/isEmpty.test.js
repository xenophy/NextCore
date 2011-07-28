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
// {{{ NX.isEmpty Tests

module.exports = {

    // {{{ test isEmpty#pattern1

    'test isEmpty#pattern1': function(){

        // undefinedテスト
        NX.isEmpty(undefined).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern2

    'test isEmpty#pattern2': function(){

        // nullテスト
        NX.isEmpty(null).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern3

    'test isEmpty#pattern3': function(){

        NX.isEmpty('').should.equal(true);
        NX.isEmpty('', true).should.not.equal(true);
        NX.isEmpty('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern4

    'test isEmpty#pattern4': function(){

        NX.isEmpty(0).should.not.equal(true);
        NX.isEmpty(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern5

    'test isEmpty#pattern5': function(){

        NX.isEmpty(true).should.not.equal(true);
        NX.isEmpty(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern6

    'test isEmpty#pattern6': function(){

        NX.isEmpty({}).should.not.equal(true);
        NX.isEmpty({foo:'bar'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern7

    'test isEmpty#pattern7': function(){

        NX.isEmpty([]).should.equal(true);
        NX.isEmpty([0, 1, 2]).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern8

    'test isEmpty#pattern8': function(){

        NX.isEmpty(function(){}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#pattern9

    'test isEmpty#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isEmpty(new Date()).should.not.equal(true);

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
