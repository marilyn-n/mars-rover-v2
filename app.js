// ====================== iteration 1

let rover = {
    direction: 'N',
    x:  0,
    y: 0,
    travelLog: [{'x' :0, 'y':0}]
};

// ====================== iteration 2

const turnLeft = () => {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      console.log('Rover is now facing West');
      rover.direction = 'W';
      break;
    case 'S':
      console.log('Rover is now facing East');
      rover.direction = 'E';
      break;
    case 'E':
      console.log('Rover is now facing North');
      rover.direction = 'N';
      break;
    case 'W':
      console.log('Rover is now facing South');
      rover.direction = 'S';
      break;
    default:
      console.log('Rover is now facing North');
      rover.direction = 'N';
  }
};


const turnRight = () => {
   console.log('turnRight was called!');
   switch (rover.direction) {
    case 'N':
       console.log('Rover is now facing East');
       rover.direction = 'E';
       break;
    case 'S':
      console.log('Rover is now facing West');
      rover.direction = 'E';
      break;
    case 'E':
      console.log('Rover is now facing South');
      rover.direction = 'S';
      break;
    case 'W':
      console.log('Rover is now facing North');
      rover.direction = 'N';
      break;
    default:
      console.log('Rover is now facing North');
      rover.direction = 'N';

  }
};

// ====================== iteration 3

const goForward = () => {
   console.log('goForward was called \n current coordinates are  \n x: 0' + rover.x + '\n y: 0 ' + rover.y );
   switch (rover.direction) {
     case 'N':
      rover.y = rover.y -1;
       break;
     case 'W':
       rover.x = rover.x -1;
       break;
     case 'S':
       rover.y = rover.y +1;
       break;
     case 'E':
       rover.x = rover.x +1;
       break;
   }
  alert('goForward was called \n current coordinates are  \n x: ' + rover.x + '\n y: ' + rover.y);
};

// ====================== Iteration 4 & 5 | Commands & Tracking

const executeCommands = (commands) => {
  for(var index = 0; index < commands.length; index++){
    rover.travelLog.push({'x':rover.x, 'y': rover.y});
    executeCommand(commands[index]);
  }
  console.log(rover.travelLog);
};

const executeCommand = (command) => {
  switch(command){
    default:
      break;
    case 'f':
      moveForward(rover);
      break;
    case 'b':
      moveBackward(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
  }
};

// ====================== (Moving Backward)
const moveBackward = (rover) => {
  console.log("moveBackward was called");
  console.log(`The current co-ordinates are \n x: ${rover.x} \n y: ${rover.y} \n`);
  switch(rover.direction){
    default:
      break;
    case 'N':
      rover.y = rover.y + 1;
      break;
    case 'E':
      rover.x = rover.x - 1;
      break;
    case 'S':
      rover.y = rover.y - 1;
      break;
    case 'W':
      rover.x = rover.x + 1;
      break;
  }
  alert(`The new co-ordinates are \n x: ${rover.x} \n y: ${rover.y} \n`);
};
