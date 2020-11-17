'use strict';

const logoutBtn = new LogoutButton();

userForm.action = () => {
    ApiConnector.logout(logoutApiConnectorCallback);
};

const logoutApiConnectorCallback = (res) => {
    if (res.success) {
        window.location.reload();
    }
}
