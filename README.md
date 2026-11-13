# List System

This System stores independent lists of items. Its `list` Aggregate release
grants the System the `addListItem` command. Choose an Aggregate ID to select a
list and submit a payload such as `{"id":"lit_example","text":"Milk"}`.

Build the iPhone package from this directory:

```sh
zerospin package --platform ios
```

Publish `dist/zerospin-system.zip` as a GitHub Release asset. The package
contains executable System code; install it only from a trusted repository.

The example source currently depends on the Zerospin workspace packages. Building
it requires that workspace or access to a registry containing matching releases;
the SDK and CLI are not currently available from the public npm registry. The
published System package does not require a package registry on the iPhone.
The package versions in this example do not by themselves establish that a
registry contains the CLI build with `package --platform ios`; use the matching
Zerospin workspace until a release containing that command is published.
