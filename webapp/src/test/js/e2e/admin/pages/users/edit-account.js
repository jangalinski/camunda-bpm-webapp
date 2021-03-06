'use strict';

var Page = require('./edit-base');

var changePasswordFormElement = element(by.css('form[name="updateCredentialsForm"]'));
var deleteUserFormElement = element(by.css('[ng-show="availableOperations.delete"]'));

module.exports = Page.extend({

  url: '/camunda/app/admin/default/#/users/:user?tab=account',

  subHeaderChangePassword: function() {
    return changePasswordFormElement.element(by.css('legend')).getText();
  },

  subHeaderDeleteUser: function() {
    return deleteUserFormElement.element(by.css('legend')).getText();
  },

  myPasswordInput: function(inputValue) {
    var inputField = element(by.model('credentials.authenticatedUserPassword'));

    if (arguments.length !== 0)
      inputField.sendKeys(inputValue);

    return inputField;
  },

  newPasswordInput: function(inputValue) {
    var inputField = element(by.model('credentials.password'));

    if (arguments.length !== 0)
      inputField.sendKeys(inputValue);

    return inputField;
  },

  newPasswordRepeatInput: function(inputValue) {
    var inputField = element(by.model('credentials.password2'));

    if (arguments.length !== 0)
      inputField.sendKeys(inputValue);

    return inputField;
  },

  changePasswordButton: function() {
    return changePasswordFormElement.element(by.css('[ng-click="updateCredentials()"]'));
  },

  changePassword: function(myPassword, newPassword, newPasswordRepeat) {
    this.myPasswordInput(myPassword);
    this.newPasswordInput(newPassword);
    this.newPasswordRepeatInput(newPasswordRepeat);
    this.changePasswordButton().click();
  },

  deleteUserButton: function() {
    return deleteUserFormElement.element(by.css('[ng-click="deleteUser()"]'));
  },

  deleteUserAlert: function() {
    return browser.switchTo().alert();
  },

  deleteUser: function() {
    this.deleteUserButton().click();
    this.deleteUserAlert().accept();
    browser.sleep(100);
  }

});
