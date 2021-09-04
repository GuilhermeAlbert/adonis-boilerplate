.PHONY: nop
nop:
	@echo "Please pass a target you want to run"

.PHONY: up
up:
	./install.sh

.PHONY: down
down:
	docker-compose down

.PHONY: bash
bash:
	docker-compose exec app bash
