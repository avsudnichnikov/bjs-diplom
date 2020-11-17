'use strict';

const logoutBtn = new LogoutButton();

logoutBtn.action = () => {
    ApiConnector.logout(logoutApiConnectorCallback);
};

const logoutApiConnectorCallback = (res) => {
    if (res.success) {
        window.location.reload();
    }
}
