const iframe = document.createElement('iframe');

iframe.src = chrome.runtime.getURL('frame.html');
iframe.style.setProperty('display', 'none');
iframe.id = 'dummy-frame';

document.documentElement.appendChild(iframe);
