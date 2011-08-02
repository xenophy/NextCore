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
// {{{ NX.Object.fromQueryString Tests

module.exports = {

    // {{{ test fromQueryString#pattern1

    'test fromQueryString#pattern1': function() {

        var ret = NX.Object.fromQueryString("foo=1&bar=2");
        ret.foo.should.equal('1');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("foo=&bar=2");
        ret.foo.should.equal('');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("some%20price=%24300");
        ret['some price'].should.equal('$300');

        ret = NX.Object.fromQueryString("colors=red&colors=green&colors=blue");
        ret.colors[0].should.equal('red');
        ret.colors[1].should.equal('green');
        ret.colors[2].should.equal('blue');

    },

    // }}}
    // {{{ test fromQueryString#pattern2

    'test fromQueryString#pattern2': function() {

        var ret = NX.Object.fromQueryString("foo=1&bar=2", true);
        ret.foo.should.equal('1');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("foo=&bar=2", true);
        ret.foo.should.equal('');
        ret.bar.should.equal('2');

        ret = NX.Object.fromQueryString("some%20price=%24300", true);
        ret['some price'].should.equal('$300');

        ret = NX.Object.fromQueryString("colors=red&colors=green&colors=blue", true);
        ret.colors.should.equal('blue');

        ret = NX.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
        ret.username.should.equal('Jacky');
        ret.dateOfBirth.day.should.equal('1');
        ret.dateOfBirth.month.should.equal('2');
        ret.dateOfBirth.year.should.equal('1911');
        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');

        ret = NX.Object.fromQueryString("hobbies[0]=coding&hobbies[]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');


        try{

            NX.setLocale('en');
            ret = NX.Object.fromQueryString("=&bar=2", true);

        } catch(e) {

            e.sourceClass.should.equal('NX.Object');
            e.sourceMethod.should.equal('fromQueryString');
            e.queryString.should.equal('=&bar=2');
            e.recursive.should.equal(true);
            e.msg.should.equal('Malformed query string given, failed parsing name from "="');
            e.message.should.equal('Malformed query string given, failed parsing name from "="');

        }
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
