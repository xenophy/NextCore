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
// {{{ NX.isArray Tests

module.exports = {

    // {{{ test isArray#pattern1

    'test isArray#pattern1': function(){

        // undefinedテスト
        NX.isArray(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern2

    'test isArray#pattern2': function(){

        // nullテスト
        NX.isArray(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern3

    'test isArray#pattern3': function(){

        // 文字列テスト
        NX.isArray('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern4

    'test isArray#pattern4': function(){

        // 数値テスト
        NX.isArray(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern5

    'test isArray#pattern5': function(){

        // 真偽値テスト
        NX.isArray(true).should.not.equal(true);
        NX.isArray(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern6

    'test isArray#pattern6': function(){

        // オブジェクトテスト
        NX.isArray({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern7

    'test isArray#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isArray([]).should.not.equal(false);

    },

    // }}}
    // {{{ test isArray#pattern8

    'test isArray#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isArray((function(){})).should.not.equal(true);
        NX.isArray((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#pattern9

    'test isArray#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isArray(new Date()).should.not.equal(true);

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
