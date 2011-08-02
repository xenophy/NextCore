/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessor.requires

module.exports = function(cls, data) {

    if(data.requires) {

        var reqs = [];

        if(NX.isArray(data.requires)) {
            reqs = data.requires;
        } else {
            reqs.push(data.requires);
        }

        NX.iterate(reqs, function(item) {
            NX.Loader.require(item);
        });

    }


};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
