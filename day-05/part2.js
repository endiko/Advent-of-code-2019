const getParameter = (mode, position, array) =>
  parseInt(mode) === 0 ? array[position] : position;

module.exports = (inputData, input) => {
  const intCode = inputData.split(',').map(str => parseInt(str));

  let instructionPointer = 0;
  let output = 0;

  while (intCode[instructionPointer] !== 99) {
    let instruction = intCode[instructionPointer].toString();
    let opcode = parseInt(instruction.slice(instruction.length - 2));

    if (instruction.length < 5) {
      let str = '';
      for (let i = 0; i < 5 - instruction.length; i++) {
        str += '0';
      }
      instruction = str + instruction;
    }

    let firstParameter = getParameter(
      instruction[2],
      intCode[instructionPointer + 1],
      intCode
    );
    let secondParameter = getParameter(
      instruction[1],
      intCode[instructionPointer + 2],
      intCode
    );
    let resultParameter = intCode[instructionPointer + 3];

    switch (opcode) {
      case 1: {
        intCode[resultParameter] = firstParameter + secondParameter;
        instructionPointer += 4;
        break;
      }
      case 2: {
        intCode[resultParameter] = firstParameter * secondParameter;
        instructionPointer += 4;
        break;
      }
      case 3: {
        intCode[intCode[instructionPointer + 1]] = input;
        instructionPointer += 2;
        break;
      }
      case 4: {
        output = intCode[intCode[instructionPointer + 1]];
        instructionPointer += 2;
        break;
      }
      case 5: {
        instructionPointer =
          firstParameter !== 0 ? secondParameter : instructionPointer + 3;

        break;
      }
      case 6: {
        instructionPointer =
          firstParameter === 0 ? secondParameter : instructionPointer + 3;

        break;
      }
      case 7: {
        intCode[resultParameter] = firstParameter < secondParameter ? 1 : 0;
        instructionPointer += 4;
        break;
      }
      case 8: {
        intCode[resultParameter] = firstParameter === secondParameter ? 1 : 0;
        instructionPointer += 4;
        break;
      }
    }
  }
  return output;
};
