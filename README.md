# The Margin

This is a Chrome extension to let you highlight text on any webpage and get insight
from ChatGPT about the selection. You can include the main article from the page
as context or just ask about the selected text itself.

> I have discovered a truly marvelous proof that ChatGPT is conscious, which however the margin is not large enough to contain.
> -- Pierre de Fermat (probably)

## Tech Stack

The main extension is built using:
* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind](https://tailwindcss.com/)
* [OpenAI API](https://openai.com/blog/openai-api)

There is no backend. Conversations are saved using `chrome.storage.local` and `chrome.storage.sync`.

Payment is handled using [ExtensionPay](https://extensionpay.com/).

## Building

Building for distribution requires `npm >= 8.13`. Do this:

    npm i
    npm run package_chrome

This will produce `dist/chrome/extension_chrome.zip`. This `zip` file can be uploaded locally
to Chrome for testing, to "Pack extension" to create a `.crx` file, or to the Chome Web Store.

> And perhaps, posterity will thank me for having shown that the ancients did not know everything.
> -- Pierre de Fermat
