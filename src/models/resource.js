
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

  function getInfo () {
    return new Promise((resolve, reject) => {
      if (!address || address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'patients' || endpoint === 'pharmacos') {
        api.get (`${endpoint}/${address}`)
        .then((result) => resolve(result.data[0]))
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
      } else if (!address || address.substr(0,2) !== '0x' || address.length !== 42) {
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

  function getDrugs () {
    return new Promise((resolve, reject) => {
      if (!address || address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'pharmacos') {
        api.get (`${endpoint}/${address}/drugs`)
        .then((result) => resolve(result.data))
        .catch((errors) => reject(errors))
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

  function getBids () {
    return new Promise((resolve, reject) => {
      if (!address || address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'contracts') {
        api.get (`${endpoint}/${address}/bids`)
        .then((result) => resolve(result.data))
        .catch((errors) => reject(errors))
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

   function signContract (contractId, data) {
    return new Promise((resolve, reject) => {
      if (!contractId || contractId.substr(0,2) !== '0x' || contractId.length !== 42) {
        reject('Invalid contract ID.');
      } else if (!address || address.substr(0,2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'patients') {
        // hard coding these dates for now; ultimately part of bid
        data.startDate = Math.trunc((new Date()).getTime()/1000);
        data.endDate = data.startDate + 30*24*60*60;  // 30 days
        api.post (`${endpoint}/${address}/contracts/${contractId}`, data)
        .then(result => {
          if (result.status !== 200) {
            reject(result.status);
          } else {
            resolve(getContracts());
          }
        })
        .catch((errors) => reject(errors));
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

  function createContract (data) {
    return new Promise((resolve, reject) => {
      if (!address || address.substr(0, 2) !== '0x' || address.length !== 42) {
        reject('Invalid public address.');
      } else if (endpoint === 'patients') {
        if (!data.drugId) reject('missing drugID')
        else if (!data.dosage) reject('missing dosage')
        else if (!data.numberOfDoses) reject('missing numberOfDoses')
        else if (!data.frequencyOfDose) reject('missing frequencyOfDose')
        else {
          api.post (`${endpoint}/${address}/contracts`, data)
          .then(result => {
            if (result.status !== 200) {
              reject(result.status);
            } else {
              let contractId = result.data[0].public_address;
              api.post (`contracts/${contractId}/bids`)
              .then(bidResult => {
                if (bidResult.status === 200) {
                  resolve(getContracts(contractId));
                } else {
                  reject(bidResult.status);
                }
              })
              .catch(errors => reject(errors));
            }
          })
          .catch(errors => reject(errors));
        }
      } else {
        reject(`Unknown ${endpoint} method.`);
      }
    });
  }

  return {
    execute,
    undo,
    getInfo,
    getContracts,
    getDrugs,
    getBids,
    signContract,
    createContract
  };

}

export default Resource