const public =
  'BE-SiakRENElEsxe7VKC5kAnoT5-UzE9cQRvlRBplrKuP82cLoI18_Gy86Es_J1akCa5o4EdoTjR_gECBFoGRvc';

if ('serviceWorker' in navigator) {
  send().catch(err => console.error(err));
}

// Register service worker, register push, send push
async function send() {
  const register = await navigator.serviceWorker.register('/worker.js', {
    scope: '/',
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(public),
  });
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    },
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
