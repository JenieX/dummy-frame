window.addEventListener('message', async ({ data: { type, store, scriptName } }) => {
  switch (type) {
    case 'set':
      sessionStorage.setItem(scriptName, JSON.stringify(store));
      break;

    case 'get':
      const storeString = sessionStorage.getItem(scriptName);
      // @ts-ignore
      window.top.postMessage({ storeString, scriptName }, '*');
      break;
  }
});
