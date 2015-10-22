# Hoplon integration with HubSpot Forms

The main trick of the integration is execution order of the HubSpot `v2.js`
library loading and the calling of the initialization code.

`<script>` tags in the `<head>` are executed *synchronously*.
[Hoplon][3] however doesn't put anything into the head (besides a
UTF-8 charset meta tag), but generates it at runtime which causes those
scripts to run asynchronously.

Hoplon pages can be _prerendered_ though.
In that case the script tags might be present in the DOM and loaded
*synchronously*, but when the Hoplon code starts to run and regenerate the DOM,
it will recreate all the script tags, causing an *a*synchronous reload of the
scripts, which doesn't guarrantee run order.

For this reason, scripts should be injected dynamically, at runtime and they
should NOT be included into the prerendered page.

## Dependencies

- java 1.7+
- [boot][1]

## Usage

### Development

1. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```
    This will give you a  Hoplon development setup with:
    - auto compilation on file changes
    - audible warning for compilation success or failures
    - Clojurescript REPL

2. Go to [http://localhost:8000][2] in your browser. You should see "Hello, HubSpot!".

3. If you edit and save a file, the task will recompile the code.

### Production

1. Run the `prod` task. In a terminal run:
    ```bash
    $ boot prod
    ```

2. The compiled files will be on the `target/` directory. This will use
   advanced compilation and prerender the html.

3. Use `ghp-import -p target/` to deploy into GitHub pages.

## Known issues



## License

Copyright © 2015, **Exicon Ltd**

[1]: http://boot-clj.com
[2]: http://localhost:8000
[3]: http://hoplon.io
