## Requirements
- Docker
- Yarn or npm

## Environment provided by Docker

* PHP 8.3
* Mysql 8.x

## Installation steps

Install Sail via docker
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

Start Sail

`./vendor/bin/sail up`

In another terminal, run the following commands:

Migrate database

`./vendor/bin/sail artisan migrate`

Install yarn dependencies

`yarn install`

Build assets

`yarn build`


Access the application at http://localhost:8080 in chrome browser.
When selecting a file in the file input, the file will be uploaded to the server and the page will show a download link.
Click on the download link to download the file.

When opening the downloaded file or the file located in `storage/app/uploads`, it will open properly.

## Problem
When using testcafe. Run the following command to run the test:

`yarn testcafe chrome --speed 0.75 tests/Browers`

The test will succeed, but the downloaded file will be corrupted. 

Have a look at the uploaded file in the folder `storage/app/uploads`.
