# Hoplon integration with HubSpot Forms

The main trick of the integration is execution order of the HubSpot `v2.js`
library loading and the calling of the initialization code.

`<script>` tags in the `<head>` are executed *synchronously*.
Hoplon however doesn't put anything into the head (besides a
UTF-8 charset meta tag), but generates it at runtime.
Hoplon pages can be _prerendered_ though.
In that case the script tags might be present in the DOM and loaded
*synchronously*, but when the Hoplon code starts to run, it will recreate
them, causing an *a*synchronously reload, which doesn't guarrantee run order.

For this reason, scripts should be injected dynamically, at runtime and they
should NOT be included into the prerendered page.
