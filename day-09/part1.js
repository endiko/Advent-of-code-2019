module.exports = (inputData, input) => {
  const intCode = inputData.split(',').map(str => parseInt(str));

  let instructionPointer = 0;
  let output = [];
  let relativeBase = 0;

  const getParameter = (mode, position) => {
    switch (parseInt(mode)) {
      case 0:
        return intCode[position]; // position mode
      case 1:
        return position; // immediate mode
      case 2:
        return intCode[position] + relativeBase; // relative mode
    }
  };

  const getValue = param => {
    return intCode[param] !== undefined ? intCode[param] : 0;
  };

  while (intCode[instructionPointer] !== 99) {
    let instruction = intCode[instructionPointer].toString();
    let len = instruction.length;
    let opcode = parseInt(instruction.slice(len - 2));
    let mode1 =
      instruction[len - 3] !== undefined ? parseInt(instruction[len - 3]) : 0;
    let mode2 =
      instruction[len - 4] !== undefined ? parseInt(instruction[len - 4]) : 0;
    let mode3 =
      instruction[len - 5] !== undefined ? parseInt(instruction[len - 5]) : 0;

    let param1 = getParameter(mode1, instructionPointer + 1);
    let param2 = getParameter(mode2, instructionPointer + 2);
    let param3 = getParameter(mode3, instructionPointer + 3);

    switch (opcode) {
      case 1: {
        intCode[param3] = getValue(param1) + getValue(param2);
        instructionPointer += 4;
        break;
      }
      case 2: {
        intCode[param3] = getValue(param1) * getValue(param2);
        instructionPointer += 4;
        break;
      }
      case 3: {
        intCode[param1] = input;
        instructionPointer += 2;
        break;
      }
      case 4: {
        output.push(intCode[param1]);
        instructionPointer += 2;
        break;
      }
      case 5: {
        instructionPointer =
          getValue(param1) !== 0 ? getValue(param2) : instructionPointer + 3;

        break;
      }
      case 6: {
        instructionPointer =
          getValue(param1) === 0 ? getValue(param2) : instructionPointer + 3;

        break;
      }
      case 7: {
        intCode[param3] = getValue(param1) < getValue(param2) ? 1 : 0;
        instructionPointer += 4;
        break;
      }
      case 8: {
        intCode[param3] = getValue(param1) === getValue(param2) ? 1 : 0;
        instructionPointer += 4;
        break;
      }
      case 9: {
        relativeBase += getValue(param1);
        instructionPointer += 2;
        break;
      }
    }
  }
  return output;
};
