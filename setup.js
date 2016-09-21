require('shelljs/global');

// move files that belong to the root of the project 
cp('-r', 'app/move-content-to-project-root/{.[!.],}*', '.');

// re-rename .gitignore
mv('.npmignore', '.gitignore');

// cleanup (an app/hooks directory is added during project creation)
rm('-rf', ...[
    'app/move-content-to-project-root',
    'app/hooks',
    'app/.npmignore',
    'app/*.md'
]);

// self destroy :)
rm('app/setup.js');