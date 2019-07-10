#!/bin/bash

input_dir='chapters/fr-FR'
output_dir='output'

generate_file () {
	src=$2
	dst=$1
	parent="$(dirname "$src")"
	mkdir --parents $dst/$parent
	asciidoctor $src --destination-dir $dst/$parent --attribute=with-designer-notes;
}

generate_folder () {
	src=$2
	dst=$1
	for input in $src/*; do
		if [[ -d $input ]]; then
			generate_folder $dst $input;
		elif [[ -f $input ]]; then
			generate_file $dst $input;
		else
			echo "WARNING: $input is neither file nor folder ?";
		fi;
	done;
}

generate_folder $output_dir $input_dir;
