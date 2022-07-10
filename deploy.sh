set -e
GITURL=`git config remote.origin.url`
npm install
node index
cd build
echo "www.tygutowski.com" > CNAME
rm -rf .git/
git init
git remote add origin $GITURL
git add CNAME
git add .
git commit -am "deploy website from tygutowski.com_source"
git push origin master:gh-pages --force
