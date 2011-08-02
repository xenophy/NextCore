/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.parseNamespace

module.exports = function(namespace) {

    if(typeof namespace !== 'string') {

        NX.Error.raise({
            sourceClass: "NX.ClassManager",
            sourceMethod: "parseNamespace",
            msg: NX.$e("Invalid namespace, must be a string")
        });

    }

    var cache = this.namespaceParseCache;

    if(this.enableNamespaceParseCache) {

        if(cache.hasOwnProperty(namespace)) {

            return cache[namespace];

        }
    }

    var parts = [],
        root = NX.global;

    parts.push(root);

    parts = parts.concat(namespace.split('.'));

    if(this.enableNamespaceParseCache) {
        cache[namespace] = parts;
    }

    return parts;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
