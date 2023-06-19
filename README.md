# Air Tune (TuneIn challenge)

## Prerequisites

Before running this project, please make sure you have the following tools installed:

Or make sure you have installed nodejs (16.14.0 recommended) and pnpm (8.6.2 recommended)

- [asdf](https://asdf-vm.com/) (version manager for managing runtime versions). This point is optional. If you don't want to use asdf, just skip the installation

## Installation

1. Install asdf:
   ```bash
   # MacOS
   brew install asdf

   # Linux (refer to asdf documentation for specific package manager instructions)
   # Example: Ubuntu
   sudo apt-get install asdf


2. Install the required asdf plugins:

```
asdf plugin add nodejs
asdf plugin add pnpm (optional)
```

3. Install predefined versions of nodejs and pnpm `asdf install`

4. Install project dependencies using pnpm:
```pnpm install```

## Development

To run the project in development mode, follow these steps:

1. Start the local development server:
```pnpm run dev```

2. Open your browser and visit http://localhost:8000 to see the running application.


Happy coding :)