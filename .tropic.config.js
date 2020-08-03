'use strict';
// add config details here
const config = {
  // change "./server/index.js" to the relative path from the root directory to the file that starts your server
  entry: './server.js',
  // change 3000 to the port number on which your server runs
  portNumber: 40000,
  // populate '' with the IP address of your server (exclude portNumber)
  ipAddress: '',
  // change "./demo.proto" to the relative path from the root directory to your proto file
  protoFile: './demo.proto',
  // change "protoPackage" to your proto package's name
  protoPackage: 'tropicalAnimals',
};
// after activating Tropic extension, add request(s) here and save this file to execute
const requests = {
  // customize your request values below
  unarySendRequest1: {
    service: 'ManageService',
    method: 'sendAnimal',
    message: { id: 1, animal: 'bird', sound: 'caw' },
  },
  // unarySendRequest2: {
  //   service: 'ManageService',
  //   method: 'sendAnimal',
  //   message: { id: 2, animal: 'mammal', sound: 'bark' },
  // },
  // unaryReadRequest3: {
  //   service: 'ManageService',
  //   method: 'getAnimals',
  //   message: {},
  // },
  // ServerStreamingRequest4: {
  //   service: 'ManageService',
  //   method: 'getStreamAnimals',
  //   message: {},
  // },
  // ClientStreamingRequest5: {
  //   service: 'ManageService',
  //   method: 'sendStreamAnimals',
  //   message: {
  //     0: { animalId: 2, animal: 'bug', sound: 'cricket' },
  //     1: { animalId: 2, animal: 'giraffe', sound: 'pth' },
  //     2: { animalId: 2, animal: 'human', sound: 'ahh' },
  //   },
  // },
  // BidirectionalStreamingPingPongRequest6: {
  //   service: 'ManageService',
  //   method: 'sendAndGetAnimalSoundsPingPong',
  //   message: {
  //     0: { animalId: 2, animal: 'bug', sound: 'cricket' },
  //     1: { animalId: 2, animal: 'giraffe', sound: 'pth' },
  //     2: { animalId: 2, animal: 'human', sound: 'ahh' },
  //   },
  // },
  // BidirectionalStreamingNonPingPongRequest7: {
  //   service: 'ManageService',
  //   method: 'sendAndGetAnimalSoundsPost',
  //   message: {
  //     0: { animalId: 2, animal: 'bug', sound: 'cricket' },
  //     1: { animalId: 2, animal: 'giraffe', sound: 'pth' },
  //     2: { animalId: 2, animal: 'human', sound: 'ahh' },
  //   },
  // },
};
module.exports = { config, requests };
//# sourceMappingURL=configTemplate.js.map
