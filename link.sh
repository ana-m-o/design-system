#!/usr/bin/env bash

# Credits to: https://gist.github.com/m-radzikowski/53e0b39e9a59a1518990e76c2bff8038
# and https://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash/29754866#29754866

# Import NVM
# This code should be in the "main" part but when executing "set -euo" make it fail sometimes
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

set -euo pipefail

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)

usage() {
    cat <<EOF
Usage: $(basename "${BASH_SOURCE[0]}") [-h|--help] [-d|--debug] [-i|--install]

Make the package '@ther/uiverse-components' ready for use in the same machine.

Available options:

-h, --help      Print this help and exit
-d, --debug     Print script debug info
-i, --install   Execute the 'install' step, otherwise the step is skipped
EOF
    exit
}

parse_params() {
    # default values of variables set from params
    help=false debug=false install=false

    while :; do
        case "${1-}" in
            -h | --help) usage ;;
            -d | --debug)
                debug=true
                set -x
                ;;
            --no-color) NO_COLOR=1 ;;
            -i | --install) install=true ;;
            -?*) die "Unknown option: $1" ;;
            *) break ;;
        esac
        shift
    done

    args=("$@")

    return 0
}

parse_params "$@"

# script logic here

# The next line fails when using nvm@0.33.0, but works fine with nvm@0.38.0
nvm use

if [ "${install}" == true ]; then
    npm i
fi

npm link

npm link @ether/uiverse-styles

npm run watch
