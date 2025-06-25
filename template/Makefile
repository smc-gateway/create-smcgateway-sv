-include .env

NAME := $(notdir $(CURDIR))
WEBAPP_DIR ?= ../
DIR = $(abspath ${WEBAPP_DIR})
ts = `date +%Y-%m-%d_%H%M`
zipfile = ${NAME}-webapp_${ts}.zip

dev:
	npm run dev

build: checkclean
	@echo Building ${zipfile}
	@npm run build \
		&& cd dist \
		&& zip -rg ${DIR}/${zipfile} . \
		&& cd .. \
		&& echo ${zipfile} > version.txt \
		&& git add version.txt \
		&& git commit -m "${zipfile}" \
		&& echo \
		&& echo Saved ${DIR}/${zipfile}

update: checkclean
	@if ! command -v ncu >/dev/null 2>&1; then \
		@echo Error, missing `ncu` - try `npm install -g npm-check-updates` \
		exit 1; \
	fi;
	ncu

checkclean:
	@status=$$(git status --porcelain); \
	if [ ! -z "$${status}" ]; \
	then \
		echo "Error - working directory is dirty. Commit those changes!"; \
		exit 1; \
	fi;
