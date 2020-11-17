'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, loginApiConnectorCallback);
};

const loginApiConnectorCallback = (res) => {
    if (res.success) {
        window.location.reload();
    } else {
        userForm.setLoginErrorMessage('Авторизация не удалась');
    }
};

userForm.registerFormCallback = (data) => {
    ApiConnector.login(data, registerApiConnectorCallback);
};

const registerApiConnectorCallback = (res) => {
    if (res.success) {
        window.location.reload();
    } else {
        userForm.setRegisterErrorMessage('Регистрация не удалась');
    }
};
