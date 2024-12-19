#!/bin/bash

path=$(pwd)
script_dir=$(dirname "$(realpath "$0")")

cd "$script_dir/.."

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate

cd $path
