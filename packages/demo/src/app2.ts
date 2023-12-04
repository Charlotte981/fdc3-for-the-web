import { getClientAPI } from 'client'

/**
 * This demonstrates using the API via a promise
 */
getClientAPI().then(fdc3 => {
    console.log("in promise")
    const log = document.getElementById("log");
    const msg = document.createElement("p");
    msg.textContent = "FDC3 Loaded: "+JSON.stringify(fdc3.getInfo());
    log?.appendChild(msg);

    fdc3.addContextListener(null, context => {
        const msg = document.createElement("p");
        msg.textContent = "Received: "+JSON.stringify(context);
        log?.appendChild(msg);
    })
});
