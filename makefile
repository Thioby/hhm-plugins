all: deploy
deploy:
	@echo "Deploying files..."
	cp config/*.js remote/config/fm/
	rsync -r -t -p -v --progress --delete -u plugins/ remote/plugins/fm-publicbot/
deploy_stable:
	@echo "Deploying files to stable remote..."
	cp config/*.js remote_stable/config/fm/
	rsync -r -t -p -v --progress --delete -u plugins/ remote_stable/plugins/fm-publicbot/
