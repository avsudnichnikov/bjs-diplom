'use strict';

const logoutBtn = new LogoutButton();
const ratesBoard = new RatesBoard();
const moneyManager = new MoneyManager();
const favoritesWidget = new FavoritesWidget();

const logoutApiConnectorCallback = (response) => {
    if (response.success) {
        window.location.reload();
    }
}

logoutBtn.action = () => {
    ApiConnector.logout(logoutApiConnectorCallback);
};

const currentUserApiConnectorCallback = (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
};

ApiConnector.current(currentUserApiConnectorCallback);

const getStocksApiConnectorCallback = (response) => {
    if (response.success) {
        ratesBoard.clearTable();
        ratesBoard.fillTable(response.data);
    }
};

const getRates = () => {
    ApiConnector.getStocks(getStocksApiConnectorCallback);
};

getRates();
setInterval(getRates, 60 * 1000);

const moneyManagerApiConnectorCallback = (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        moneyManager.setMessage(true, 'Успешно!');
    } else {
        moneyManager.setMessage(false, response.error);
    }
};

moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, moneyManagerApiConnectorCallback);
};

moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, moneyManagerApiConnectorCallback);
};

moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, moneyManagerApiConnectorCallback);
};

const reloadFavoriteList = (data) => {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(data);
    moneyManager.updateUsersList(data);
}

const favoritesWidgetApiConnectorCallback = (response) => {
    if (response.success) {
        reloadFavoriteList(response.data);
        favoritesWidget.setMessage(true, 'Действие успешно!');
    } else {
        favoritesWidget.setMessage(false, response.error);
    }
};

const getFavoritesApiConnectorCallback = (response) => {
    if (response.success) {
        reloadFavoriteList(response.data);
    }
};

ApiConnector.getFavorites(getFavoritesApiConnectorCallback);

favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, favoritesWidgetApiConnectorCallback);
};

favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, favoritesWidgetApiConnectorCallback);
};
