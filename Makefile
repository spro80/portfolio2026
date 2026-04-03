.PHONY: start build install clean lint

start:
	npm start

build:
	CI=false npm run build

install:
	npm install

clean:
	rm -rf build node_modules

lint:
	npx eslint src --ext .js,.jsx
