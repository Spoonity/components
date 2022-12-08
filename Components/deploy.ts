import {promisify} from 'util';
import {exec as execAsync} from 'child_process';

const exec = promisify(execAsync);

(async () => {
  let branch = '';
  await exec('git rev-parse --abbrev-ref HEAD').then(value => {
    if (typeof value.stdout === 'string') {
      branch = value.stdout.trim();
    } else {
      console.log('cannot get current branch. deploying from branch angular-library-v2');
      branch = 'angular-library-v2';
    }
  });

  console.log('building library...');
  await exec('npm run build-lib');

  console.log('copying build files...');
  await exec('rm -rf ../temp');
  await exec('mkdir ../temp');
  await exec('cp -R sp-components/dist/ ../temp');

  console.log('putting build file contents to deployment branch...');
  await exec('git checkout packages/sp-components');
  await exec('cp -R ../temp/ ../');
  await exec('rm -rf ../temp/');

  await exec('git pull -s recursive -X theirs')
    .catch(() => {
      console.log('error: \'git pull\' failed');
    });
  await exec('git add ../')
    .catch(() => {
      console.log('error: \'git add\' failed');
    });
  await exec('git add ../src -f')
    .catch(() => {
      console.log('error: \'git add ../src\' failed');
    });
  await exec('git add ../esm2015 -f')
    .catch(() => {
      console.log('error: \'git add ../esm2015\' failed');
    });
  await exec('git commit -m "Publish sp-components"')
    .catch(() => {
      console.log('error: \'git commit\' failed');
    });
  await exec('git push')
    .catch(() => {
      console.log('error: \'git push\' failed');
    });

  console.log(`finishing....`);
  await exec(`git checkout ${branch}`);

  console.log('------------- COMPLETED -------------');
})();
