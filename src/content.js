chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleCSS') {
    var style = document.createElement('style');
    style.textContent = '.answer [type="radio"] { display: none; }';

    if (!document.getElementById('toggleStyle')) {
      style.id = 'toggleStyle';
      document.head.appendChild(style);
    } else {
      var existingStyle = document.getElementById('toggleStyle');
      existingStyle.parentNode.removeChild(existingStyle);
    }

    sendResponse({ message: 'CSS toggled successfully' });
  }
});
