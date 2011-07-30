/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.$e

module.exports = function(key) {

    var arg = [NX.$locale[key]];

    NX.iterate(arguments, function(item, i) {
        if(i > 0) {
            arg.push(item);
        }
    });

    return NX.String.format.apply(this, arg);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
