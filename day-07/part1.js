module.exports = inputData => {
  const intCode = inputData.split(',').map(str => parseInt(str));

  const getParameter = (mode, position) =>
    parseInt(mode) === 0 ? intCode[intCode[position]] : intCode[position];

  // get phase setting sequence map --begin
  function* permutatins(s) {
    if (s.length > 1)
      for (let i = 0; i < s.length; i++)
        for (let t of permutatins(s.slice(0, i) + s.slice(i + 1)))
          yield s.charAt(i) + t;
    else yield s;
  }
  let phaseSettingSequenceMap = [];

  for (let s of permutatins('01234')) phaseSettingSequenceMap.push(s);

  // get phase setting sequence map --end

  const intCodeComputer = (inputData, input) => {
    let intCode = [...inputData];
    let instructionPointer = 0;
    let output = parseInt(input[1]);

    while (intCode[instructionPointer] !== 99) {
      let instruction = intCode[instructionPointer].toString();
      let len = instruction.length;
      let opcode = parseInt(instruction.slice(len - 1));
      let mode1 =
        instruction[len - 3] !== undefined ? parseInt(instruction[len - 3]) : 0;
      let mode2 =
        instruction[len - 4] !== undefined ? parseInt(instruction[len - 4]) : 0;
      let mode3 =
        instruction[len - 5] !== undefined ? parseInt(instruction[len - 5]) : 0;

      let param1 = getParameter(mode1, instructionPointer + 1);
      let param2 = getParameter(mode2, instructionPointer + 2);
      let param3 = intCode[instructionPointer + 3];
      // let param3 = getParameter(mode3, instructionPointer + 3);

      switch (opcode) {
        case 1: {
          intCode[param3] = param1 + param2;
          instructionPointer += 4;
          break;
        }
        case 2: {
          intCode[param3] = param1 * param2;
          instructionPointer += 4;
          break;
        }
        case 3: {
          param1 = intCode[instructionPointer + 1];
          intCode[param1] = parseInt(input[0]);
          instructionPointer += 2;
          break;
        }
        case 4: {
          output = param1;
          instructionPointer += 2;
          break;
        }
        case 5: {
          instructionPointer = param1 !== 0 ? param2 : instructionPointer + 3;

          break;
        }
        case 6: {
          instructionPointer = param1 === 0 ? param2 : instructionPointer + 3;

          break;
        }
        case 7: {
          intCode[param3] = param1 < param2 ? 1 : 0;
          instructionPointer += 4;
          break;
        }
        case 8: {
          intCode[param3] = param1 === param2 ? 1 : 0;
          instructionPointer += 4;
          break;
        }
      }
    }

    return output;
  };

  let maxOutput = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < phaseSettingSequenceMap.length; i++) {
    let A = intCodeComputer(intCode, [phaseSettingSequenceMap[i][0], 0]);
    let B = intCodeComputer(intCode, [phaseSettingSequenceMap[i][1], A]);
    let C = intCodeComputer(intCode, [phaseSettingSequenceMap[i][2], B]);
    let D = intCodeComputer(intCode, [phaseSettingSequenceMap[i][3], C]);
    let E = intCodeComputer(intCode, [phaseSettingSequenceMap[i][4], D]);

    maxOutput = Math.max(E, maxOutput);
    console.log(maxOutput);
  }

  return maxOutput;
};
