
  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser install prompt
    event.preventDefault();
    // Display the install button
    document.getElementById('installButton').style.display = 'block';

    // Store the event for later use
    let deferredPrompt = event;
    
    // Handle the button click event
    document.getElementById('installButton').addEventListener('click', () => {
      // Show the browser's install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Reset the deferred prompt variable
        deferredPrompt = null;
      });
    });
  });
