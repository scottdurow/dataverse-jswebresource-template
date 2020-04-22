# cdsify-jswebresource-template
Template VSCode project for creating CDS Model Driven App forms and ribbon commands webresources.

Demonstrates:
1. WebPack configuration to build bundle.js that can be deployed as a JS Webresource in a Model Driven App form.
1. Integration tests using cdsify types
2. cdsify-gen configuration

Instructions:
1. Use `npx node-cds-gen [tennant] [environment]` to authenticate\
E.g. `npx node-cds-gen contoso.onmicrosoft.com contosoorg.crm.dynamics.com`

1. Update the [config\test.yaml](https://github.com/scottdurow/cdsify-jswebresource-template/blob/master/config/test.yaml#L10) host entry with your CDS environment

1. Run `npm run-script test` 


