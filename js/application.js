/**
 * Created by willowcheng on 2015-12-12.
 */

App.onLaunch = function(options) {
    // 1
    var javascriptFiles = [
        `${options.BASEURL}js/Presenter.js`
    ];
    // 2
    evaluateScripts(javascriptFiles, function(success) {
        if(success) {
            var alert = createAlert("Welcome to Coala", "Find you nearby talent");
            Presenter.modalDialogPresenter(alert);
        } else {
            // 3 Handle the error CHALLENGE!//inside else statement of evaluateScripts.
            //inside else statement of evaluateScripts.
            var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
            navigationDocument.presentModal(errorDoc);
        }
    });
};


var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>
      <button>
        <text>OK</text>
      </button>
    </alertTemplate>
  </document>`;
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
};