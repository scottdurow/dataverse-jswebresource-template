# dataverse-jswebresource-template
Template VSCode project for creating Microsoft Dataverse Model Driven App forms and ribbon commands webresources.

Demonstrates:
1. WebPack configuration to build bundle.js that can be deployed as a JS Webresource in a Model Driven App form.
1. Integration tests using dataverse-ify types
2. dataverse-gen configuration

Instructions:
1. Use `npx dataverse-auth [environment]` to authenticate\
E.g. `npx dataverse-auth org.crm.dynamics.com`

1. Update the [config\test.yaml](https://github.com/scottdurow/dataverse-jswebresource-template/blob/master/config/test.yaml#L10) host entry with your Microsoft Dataverse environment

1. Run `npx dataverse-gen` to generated the early bound types

1. Run `npm run-script test` to run unit and integration tests.

For more information see the [dataverse-ify project](https://github.com/scottdurow/dataverse-ify/wiki)
