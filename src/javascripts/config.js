/**
 * Created by Amit on 30/11/2016.
 */

var QBApp = {
    appId: 50388,
    authKey: 'UTHLs6EgZQgkNx7',
    authSecret: 'PZ72pHk8PStXzjQ'
};

var config = {
    chatProtocol: {
        active: 2
    },
    streamManagement: {
        enable: true
    },
    debug: {
        mode: 1,
        file: null
    }
};

var QBUser1 = {
        id: 6729114,
        name: 'quickuser',
        login: 'chatusr11',
        pass: 'chatusr11'
    },
    QBUser2 = {
        id: 6729119,
        name: 'bloxuser',
        login: 'chatusr22',
        pass: 'chatusr22'
    };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);
