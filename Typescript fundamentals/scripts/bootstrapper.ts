
//starter file

import al = require("../scripts/external-Alert");

export function run() : void {
    var alerter = new al.Alerter();
    alerter.showMessage();
}
