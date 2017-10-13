// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

const fetchAll = new Promise(
  function(resolve, reject) {
    resolve(global.fetch('/tv').then(
      (x)=>{
        //return xxx;
        return global.fetch('/drink').then(
          (y)=>{
              return global.fetch('/food').then(
                (z)=>{
                  return [x,y,z];
                }
              );
          }
        );
      }
    ));
  }
);

const api = { get: {}, go: {} };

api.get = (q) => global.fetch('/'+q);
api.get.me = (q) => global.fetch('/'+q);
api.get.me.a = (q) => global.fetch('/'+q);
api.get.me.everything = () => fetchAll;
api.go.get = (q) => global.fetch('/'+q);
api.go.get.me = (q) => global.fetch('/'+q);
api.go.get.me.a = (q) => global.fetch('/'+q);
api.go.get.me.everything = () => fetchAll;

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
