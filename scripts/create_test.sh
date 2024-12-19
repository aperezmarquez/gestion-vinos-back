#!/bin/bash

path=$(pwd)
script_dir=$(dirname "$(realpath "$0")")

cd "$script_dir/.."

npx sequelize-cli db:create --env test
npx sequelize-cli db:migrate --env test

cd $path
