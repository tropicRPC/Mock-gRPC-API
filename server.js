const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('demo.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const tropicalAnimals = grpcObject.tropicalAnimals;

const server = new grpc.Server();
server.bind('0.0.0.0:40000', grpc.ServerCredentials.createInsecure());
server.addService(tropicalAnimals.ManageService.service, {
  sendAnimal,
  getAnimals,
  getStreamAnimals,
  sendStreamAnimals,
  sendAndGetAnimalSoundsPingPong,
  sendAndGetAnimalSoundsPost,
});
server.start();

const animals = [];

// Unary RPC
function sendAnimal(call, callback) {
  const request = call.request;

  const animal = {
    animalId: animals.length + 1,
    animal: request.animal,
    sound: request.sound,
  };
  animals.push(animal);
  console.log('ANIMAL******', animal);
  callback(null, animal);
}

// Unary RPC
function getAnimals(call, callback) {
  callback(null, { animals });
}

// Server Streaming RPC
function getStreamAnimals(call) {
  animals.forEach((animal) => call.write(animal));
  call.end();
}

// Client Streaming RPC
function sendStreamAnimals(call, callback) {
  call.on('data', (data) => {
    const animal = {
      animalId: animals.length + 1,
      animal: data.animal,
      sound: data.sound,
    };
    animals.push(animal);
  });
  call.on('end', () => {
    callback(null, { animals });
  });
}

// Bi-Directional Streaming
function sendAndGetAnimalSoundsPingPong(call) {
  call.on('data', (data) => {
    const animal = {
      animalId: animals.length + 1,
      animal: data.animal,
      sound: data.sound,
    };
    animals.push(animal);
    call.write(animals[animals.length - 1]);
  });
  call.on('end', () => {
    call.end();
  });
}

function sendAndGetAnimalSoundsPost(call) {
  call.on('data', (data) => {
    const animal = {
      animalId: animals.length + 1,
      animal: data.animal,
      sound: data.sound,
    };
    animals.push(animal);
  });
  call.on('end', () => {
    animals.forEach((animal) => call.write(animal));
    call.end();
  });
}
