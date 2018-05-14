
import api from './api'

const Resource = (endpoint, address) => {

  function execute(data) {
    return new Promise((resolve, reject) => {
      if (endpoint === 'login') {
        console.log ('POSTING', data);
        api.post ('login', data)
        .then((result) => resolve(result.data))
        .catch((errors) => reject(errors))
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }
 
  function undo () {
    return new Promise((resolve, reject) => {
      if (endpoint === 'login') {
        api.post ('logout')
        .then((result) => resolve(result.data))
        .catch((errors) => reject(errors))
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

  function getContracts (contractId) {  // contractId is optional
    return new Promise((resolve, reject) => {
      if (contractId && (contractId.substr(0,2) !== '0x' || contractId.length !== 42)) {
        reject('Invalid contract ID.');
      } else if (address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'patients' || endpoint === 'pharmacos') {
        api.get (`${endpoint}/${address}/contracts/${contractId || ''}`)
        .then((result) => resolve(result.data))
        .catch((errors) => reject(errors))
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

  function signContract (contractId) {
    return new Promise((resolve, reject) => {
      if (contractId.substr(0,2) !== '0x' || contractId.length !== 42) {
        reject('Invalid contract ID.');
      } else if (address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'patients') {
        api.post (`${endpoint}/${address}/contracts/${contractId}`)
        .then(result => {
          if (result.status !== 200) {
            reject(result.status);
          } else {
            resolve(getContracts(contractId));
          }
        })
        .catch((errors) => reject(errors));
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

   return {
    execute,
    undo,
    getContracts,
    signContract
  };

}

export default Resource