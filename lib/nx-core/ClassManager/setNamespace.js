/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.setNamespace

module.exports = function(name, value) {

    this.createNamespaces(name);

    eval(NX.String.format('var ret = {0} = value;', name));

    return ret;




    /*
    var root = NX.global,
        parts = this.parseNamespace(name),
        leaf = parts.pop(),
        i, ln, part;

    for(i = 0, ln = parts.length; i < ln; i++) {

        part = parts[i];

        if(typeof part !== 'string') {

            root = part;

        } else {

            if(!root[part]) {

                root[part] = {};

            }

            root = root[part];
        }
    }
    */

//    root[leaf] = value;

//    return root[leaf];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
