# Makefile created by KN on 20200515
# Purpose: single command build

EXECUTABLES = git curl python g++ node npm ionic

ADMINDIR = src/app/projects/admin
USERDIR = src/app/projects/user

reqs:= $(foreach exec,$(EXECUTABLES),\
        $(if $(shell which $(exec)), some string,$(error "No $(exec) in PATH")))

generate: ${ADMINDIR}/package.json ${USERDIR}/package.json
	@echo -e "\e[1;32m Building project...\e[0m"
	ionic build

run: admin user
	@echo -e "\e[1,32m Running project...\e[0m"
	ionic serve
        
${USERDIR}/package.json:
	git clone https://github.com/zencomputersystems/eleave-v3.git ${USERDIR}

${ADMINDIR}/package.json:
	git clone https://github.com/zencomputersystems/eLeave_admin-V3.git ${USERDIR}

clean: 
	rm -rf ${USERDIR}
	rm -rf ${ADMINDIR}
	rm -rf node_modules
	rm -rf package-lock.json

