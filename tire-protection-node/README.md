# ABS Tire Protection API Sample Application

## Prerequisite

You will need `OpenSSH`, and `nodejs` installed.

`OpenSSH` comes pre-intalled on most linux distributions, and MacOS. To use `OpenSSH` on Windows refer to
Micorsoft's [ssh feature installation instructions](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui) to install it.

`yarn` can be used as an optional `nodejs` package manager.

### Generate public and private keys

Run:

`npm run generateKeys`

-- or --

`yarn generateKeys`

-- or --

#### Manually create your keys with the following commands

Generate a private and public key using the following commands:

Generate private and public key:

```bash
ssh-keygen -t ecdsa -b 256 -m pem -f tire-protection-key
```

Convert public key to PEM format:

```bash
ssh-keygen -f tire-protection-key.pub -e -m pem > tire-protection-key.pub.pem
```

Send ABS your private key in the `tire-proection-key.pub.pem` file to link to your partner account, and receive your `partner_id` and `program_id`.

For more information see [getting started](https://docs.abswarranty.net/docs/tire-protection-api/getting-started).

## Installation

```bash
node install
```

-- or --

```bash
yarn install
```

## Post Installation

Copy the `.env.example` to `.env`

Add the `partner_id` provided to you from Automotive Business Solutions to the `.env`
PARTNER_ID=********\*\*\*********

Add the `program_id` provided to you from Automotive Business Solutions to the `.env`
PROGRAM_ID=********\*\*\*********

## Using the Application

```bash
npm run {command}
```

-- or --

```bash
yarn {command}
```

Replace {command} with an available command below.

After executing each command the console will output an example CURL request of the http request
the application is making.

## Available commands

`createRegistration` Create a registration using the `partner_id`, `product_id` you have in your .env file.

`cancelRegistration` Get a registration. Pass in the registration_id to get as the first argument e.g. `npm run getRegistration {registration_id}`

`listRegistrations` List all registrations associated with the `partner_id`

`cancelRegistration` Cancel a registration. Pass in the registration_id to cancel as the first argument e.g. `npm run cancelRegistration {registration_id}`
