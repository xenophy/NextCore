

NX.define('My.requires.Test', {
    requires: [
        'My.requires.Req1',
        'My.requires.Req2'
    ],
    foo: function() {
        var cls = new My.requires.Req1();
        return cls.req1();
    },
    bar: function() {
        var cls = new My.requires.Req2();
        return cls.req2();
    }
});




