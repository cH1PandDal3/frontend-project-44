install:
	npm ci
game:
	node bin/brain-games.js

publish:
	npm publish --dry-run
