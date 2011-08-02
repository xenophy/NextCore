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
// {{{ NX.Object.toQueryObjects Tests

module.exports = {

    // {{{ test toQueryObjects#pattern1

    'test toQueryObjects#pattern1': function() {

        var ret = NX.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);

        ret[0].name.should.equal('hobbies');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies');
        ret[2].value.should.equal('swimming');

    },

    // }}}
    // {{{ test toQueryObjects#pattern2

    'test toQueryObjects#pattern2': function() {

        var o = NX.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            true
        );

        o[0].name.should.equal('dateOfBirth[day]');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth[month]');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth[year]');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth[extra][hour]');
        o[3].value.should.equal(4);
        o[4].name.should.equal('dateOfBirth[extra][minute]');
        o[4].value.should.equal(30);

    },

    // }}}
    // {{{ test toQueryObjects#pattern3

    'test toQueryObjects#pattern3': function() {

        var o = NX.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            false
        );

        o[0].name.should.equal('dateOfBirth');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth');
        o[3].value.hour.should.equal(4);
        o[3].value.minute.should.equal(30);

    },

    // }}}
    // {{{ test toQueryObjects#pattern4

    'test toQueryObjects#pattern4': function() {

        var ret = NX.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'], true);

        ret[0].name.should.equal('hobbies[0]');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies[1]');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies[2]');
        ret[2].value.should.equal('swimming');

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
