// // create a URL suffix to make it unique and make nearly impossible to hit the existing page
// var suffix = 'chrome-run-on-domain-' + chrome.runtime.id;

// // if the domain is blocking displaying pages in IFRAME, remove the restriction
// chrome.webRequest.onHeadersReceived.addListener(function(details) {
//   return {
//     responseHeaders: details.responseHeaders.filter(function(e) {
//       return e.name.toUpperCase() !== 'X-FRAME-OPTIONS';
//     })
//   };
// }, { urls: [ '*://*/' + suffix ] }, ["blocking", "responseHeaders"]);

// // finally the function which does the job: it adds an IFRAME to the background page
// function injectScript(protocol, domain) {
//   var iframe = document.createElement("iframe");

//   iframe.src = protocol + '://' + domain + '/' + suffix;

//   document.body.appendChild(iframe);
// }

// // run the code
// injectScript('https', 'www.google.com');

// alert('RUNNING');
// console.log("HERE IT IS YOOO")