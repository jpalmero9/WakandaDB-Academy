﻿var
	Proxy;

Proxy = exports;

// not used
Proxy.properties = {
    collectionName: 'Proxies'
};

// Not used
Proxy.ID = {
    kind: "storage",
    type: "long",
    autosequence: true,
    primKey: true
};

Proxy.methods = require('./methods');