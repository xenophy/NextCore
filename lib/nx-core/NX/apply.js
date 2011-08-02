/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.apply

module.exports = function(object, config, defaults) {

    if(defaults) {
        NX.apply(object, defaults);
    }

    if(object && config && typeof config === 'object') {

        var i, j, k;

        for(i in config) {
            object[i] = config[i];
        }

    }

    return object;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
