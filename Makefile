CLOSUREC=closure


all: foo.js
	$(CLOSUREC) --create_source_map $<.mapping --source_map_format V3 \
		--formatting PRETTY_PRINT \
		$< >foo.gen.js
	cp foo.gen.js foo.gen.data-scheme-mapping.js
	echo '//@ sourceMappingURL=$<.mapping' >> foo.gen.js
	echo '//@ sourceMappingURL=data:application/json;base64,'`base64 -w0 < foo.js.mapping` >> foo.gen.data-scheme-mapping.js

.PHONY: clean all

