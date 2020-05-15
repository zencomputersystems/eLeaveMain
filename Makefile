# Makefile created by KN on 20200515
# Purpose: single command build

EXECUTABLES = git curl python g++ node npm ionic

ADMINDIR = src/app/projects/admin
USERDIR = src/app/projects/user

reqs:= $(foreach exec,$(EXECUTABLES),\
        $(if $(shell which $(exec)), some string,$(error "No $(exec) in PATH")))

generate: admin user
	@echo -e "\e[1;32m Building project...\e[0m"
	ionic build

run: admin user
	@echo -e "\e[1,32m Running project...\e[0m"
	ionic serve
        
admin: ${ADMINDIR}/package.json
	@echo -e "\e[1;32m Building admin module...\e[0m"
	cd ${ADMINDIR} && npm i && ionic build

user: ${USERDIR}/package.json
	@echo -e "\e[1;32m Building user module...\e[0m"
	cd ${USERDIR} && npm i && ionic build

${USERDIR}/package.json:
	cd ${USERDIR} && git clone https://github.com/zencomputersystems/eleave-v3.git .

${ADMINDIR}/package.json:
	cd ${ADMINDIR} && git clone https://github.com/zencomputersystems/eLeave_admin-V3.git .
