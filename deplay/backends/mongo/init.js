const inspiration = 'mongodb://localhost:27017/inspiration';

const inspiration = connect(inspiration);

const client = [
  {
    access: 'linksystem-inspiration',
    secret: '2018-linksystem'
  }
];

inspiration.auths.insert(client);

const authentication = 'mongodb://localhost:27017/admin';

authentication.createUser({
  user: 'root',
  pwd: 'inspiration',
  roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }]
});
