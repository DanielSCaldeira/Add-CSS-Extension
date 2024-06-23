chrome.action.onClicked.addListener(async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
      throw new Error("No active tab found");
    }

    const response = await chrome.tabs.sendMessage(tab.id, { action: 'toggleCSS' });
    console.log('Message sent:', response);
    
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
});
