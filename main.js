let logo = document.querySelector('.lnXdpd');

console.log(logo);

logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');

let second = document.querySelector('.logo1')
second.src = chrome.runtime.getURL('images/cysecor_logo.png');


