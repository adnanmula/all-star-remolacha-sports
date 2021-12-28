UID=$(shell id -u)
GID=$(shell id -g)
FILE=docker-compose.yml

bash: ## gets inside container
	UID=${UID} GID={GID} docker-compose -f ${FILE} exec --user=${UID} nginx sh

build: ## docker-compose build
	UID=${UID} GID={GID} docker-compose -f ${FILE} build

up: ## up all containers
	UID=${UID} GID=${GID} docker-compose -f ${FILE} up -d

stop: ## stop all containers
	UID=${UID} GID=${GID} docker-compose -f ${FILE} stop

down: ## down all containers
	UID=${UID} GID=${GID} docker-compose -f ${FILE} down --remove-orphans
