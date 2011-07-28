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
// {{{ NX.isObject Tests

module.exports = {

    // {{{ test isObject#pattern1

    'test isObject#pattern1': function(){

        // undefinedテスト
        NX.isObject(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern2

    'test isObject#pattern2': function(){

        // nullテスト
        NX.isObject(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern3

    'test isObject#pattern3': function(){

        // 文字列テスト
        NX.isObject('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern4

    'test isObject#pattern4': function(){

        // 数値テスト
        NX.isObject(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern5

    'test isObject#pattern5': function(){

        // 真偽値テスト
        NX.isObject(true).should.not.equal(true);
        NX.isObject(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern6

    'test isObject#pattern6': function(){

        // オブジェクトテスト
        NX.isObject({}).should.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern7

    'test isObject#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isObject([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern8

    'test isObject#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isObject((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#pattern9

    'test isObject#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isObject(new Date()).should.not.equal(true);

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
