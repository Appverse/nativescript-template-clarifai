#!/bin/sh

APP_DIR=$(dirname $0)

# move files that belong to the root of the project 
mv $APP_DIR/move-content-to-project-root/{.[!.],}* $APP_DIR/..

# re-rename .gitignore
mv $APP_DIR/../.npmignore $APP_DIR/../.gitignore

# cleanup (an app/hooks directory is added during project creation)
rm -rf $APP_DIR/move-content-to-project-root $APP_DIR/hooks $APP_DIR/.npmignore

# self destroy :)
rm $APP_DIR/setup.sh