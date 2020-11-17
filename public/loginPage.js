'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            window.location.reload();
        } else {
            userForm.setLoginErrorMessage('Авторизация не удалась');
        }
    });
};

userForm.registerFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            window.location.reload();
        } else {
            userForm.setRegisterErrorMessage('Регистрация не удалась');
        }
    });
};
