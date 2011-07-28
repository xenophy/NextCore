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
// {{{ NX.isDate Tests

module.exports = {

    // {{{ test isDate#pattern1

    'test isDate#pattern1': function(){

        // undefinedテスト
        NX.isDate(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern2

    'test isDate#pattern2': function(){

        // nullテスト
        NX.isDate(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern3

    'test isDate#pattern3': function(){

        // 文字列テスト
        NX.isDate('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern4

    'test isDate#pattern4': function(){

        // 数値テスト
        NX.isDate(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern5

    'test isDate#pattern5': function(){

        // 真偽値テスト
        NX.isDate(true).should.not.equal(true);
        NX.isDate(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern6

    'test isDate#pattern6': function(){

        // オブジェクトテスト
        NX.isDate({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern7

    'test isDate#pattern7': function(){

        // 配列オブジェクトテスト
        NX.isDate([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern8

    'test isDate#pattern8': function(){

        // 関数オブジェクトテスト
        NX.isDate((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#pattern9

    'test isDate#pattern9': function(){

        // 日付オブジェクトテスト
        NX.isDate(new Date()).should.equal(true);

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
